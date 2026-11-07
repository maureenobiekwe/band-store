import { BandStoreAppLoader } from "@band-store/framework"
import { LinkLoader } from "@band-store/framework/links"
import { MigrationScriptsMigrator } from "@band-store/framework/migrations"
import { WorkflowLoader } from "@band-store/framework/workflows"
import {
  ContainerRegistrationKeys,
  getResolvedPlugins,
  mergePluginModules,
} from "@band-store/framework/utils"
import { dirname, join } from "path"

import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  Logger,
  BandStoreContainer,
  PluginDetails,
} from "@band-store/framework/types"
import { initializeContainer } from "../../loaders"
import { loadSearchIndexes } from "../../loaders/search"
import { ensureDbExists } from "../utils"

const TERMINAL_SIZE = process.stdout.columns

/**
 * A low-level utility to migrate the migration scripts. This util should
 * never exit the process implicitly.
 */
export async function runMigrationScripts({
  directory,
  container,
  logger,
}: {
  directory: string
  container: BandStoreContainer
  logger: Logger
}): Promise<boolean> {
  let onApplicationPrepareShutdown: () => Promise<void> = async () =>
    Promise.resolve()
  let onApplicationShutdown: () => Promise<void> = async () => Promise.resolve()

  let plugins: PluginDetails[]

  try {
    await ensureDbExists(container)

    const configModule = container.resolve(
      ContainerRegistrationKeys.CONFIG_MODULE
    )

    plugins = await getResolvedPlugins(directory, configModule, true)

    mergePluginModules(configModule, plugins, directory)

    const resources = await loadResources(plugins, logger, container)
    onApplicationPrepareShutdown = resources.onApplicationPrepareShutdown
    onApplicationShutdown = resources.onApplicationShutdown

    const scriptsSourcePaths = [
      join(dirname(require.resolve("@band-store/band-store")), "migration-scripts"),
      ...plugins.map((plugin) => join(plugin.resolve, "migration-scripts")),
    ]

    const migrator = new MigrationScriptsMigrator({ container: container })
    await migrator.ensureMigrationsTable()
    const pendingScripts =
      await migrator.getPendingMigrations(scriptsSourcePaths)

    if (!pendingScripts?.length) {
      logger.info("No pending migration scripts to execute")
      return true
    }

    logger.log(new Array(TERMINAL_SIZE).join("-"))
    logger.info("Pending migration scripts to execute")
    logger.info(`${pendingScripts.join("\n")}`)

    logger.log(new Array(TERMINAL_SIZE).join("-"))
    logger.info("Running migration scripts...")
    await migrator.run(scriptsSourcePaths)

    logger.log(new Array(TERMINAL_SIZE).join("-"))
    logger.info("Migration scripts completed")

    return true
  } finally {
    await onApplicationPrepareShutdown()
    await onApplicationShutdown()
  }
}

async function loadResources(
  plugins: any,
  logger: Logger,
  container: BandStoreContainer
): Promise<{
  onApplicationPrepareShutdown: () => Promise<void>
  onApplicationShutdown: () => Promise<void>
}> {
  /**
   * Clear all module instances to prevent cache from kicking in
   */
  BandStoreModule.clearInstances()

  /**
   * Setup
   */

  const linksSourcePaths = plugins.map((plugin) =>
    join(plugin.resolve, "links")
  )
  await new LinkLoader(linksSourcePaths, logger).load()

  // Cleared along with the module instances above, and the boot below seeds
  // through `onApplicationStart`,.
  await loadSearchIndexes({
    plugins,
    configModule: container.resolve(ContainerRegistrationKeys.CONFIG_MODULE),
    logger,
  })

  // Pass the existing container so that registrations (e.g. ContainerRegistrationKeys.QUERY)
  // are made on the same container that migration scripts will resolve from.
  // Without this, `useQueryGraphStep` fails with AwilixResolutionError because
  // `query` is registered in a separate BandStoreAppLoader container instance.
  const bandStoreAppResources = await new BandStoreAppLoader({ container }).load()
  const onApplicationPrepareShutdown =
    bandStoreAppResources.onApplicationPrepareShutdown
  const onApplicationShutdown = bandStoreAppResources.onApplicationShutdown
  await bandStoreAppResources.onApplicationStart()

  // Load workflow hooks from all plugins (including the app directory,
  // which getResolvedPlugins already includes as a plugin entry).
  // Without this, workflow hooks defined in src/workflows/ are never
  // registered during `bandStore db:migrate`, causing them to silently
  // skip execution even though the workflows themselves run successfully.
  const workflowsSourcePaths = plugins.map((plugin) =>
    join(plugin.resolve, "workflows")
  )
  await new WorkflowLoader(workflowsSourcePaths, container).load()

  return {
    onApplicationPrepareShutdown,
    onApplicationShutdown,
  }
}

const main = async function ({
  directory,
}: {
  directory: string
  container?: BandStoreContainer
}) {
  process.env.BAND_STORE_WORKER_MODE = "server"
  let logger: Logger | undefined

  try {
    const container = await initializeContainer(directory)
    logger = container.resolve(ContainerRegistrationKeys.LOGGER)

    const migrated = await runMigrationScripts({
      directory,
      container: container,
      logger,
    })
    process.exit(migrated ? 0 : 1)
  } catch (error) {
    if (logger) {
      logger.error(error as string | Error)
    } else {
      console.error(error)
    }
    process.exit(1)
  }
}

export default main
