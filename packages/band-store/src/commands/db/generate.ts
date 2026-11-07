import { BandStoreAppLoader, Migrator } from "@band-store/framework"
import { LinkLoader } from "@band-store/framework/links"
import {
  ContainerRegistrationKeys,
  getResolvedPlugins,
  BandStoreError,
  mergePluginModules,
} from "@band-store/framework/utils"
import { Logger } from "@band-store/framework/types"
import { join } from "path"
import { initializeContainer } from "../../loaders"
import { ensureDbExists } from "../utils"

const TERMINAL_SIZE = process.stdout.columns

const main = async function ({ directory, modules }) {
  let logger: Logger | undefined

  try {
    /**
     * Setup
     */
    const container = await initializeContainer(directory)
    logger = container.resolve(ContainerRegistrationKeys.LOGGER)

    await ensureDbExists(container)

    const bandStoreAppLoader = new BandStoreAppLoader()
    const configModule = container.resolve(
      ContainerRegistrationKeys.CONFIG_MODULE
    )

    const plugins = await getResolvedPlugins(directory, configModule, true)
    mergePluginModules(configModule, plugins, directory)

    const linksSourcePaths = plugins.map((plugin) =>
      join(plugin.resolve, "links")
    )
    await new LinkLoader(linksSourcePaths, logger).load()

    /**
     * Generating migrations
     */
    logger.info("Generating migrations...")

    const migrator = new Migrator({ container })
    await migrator.ensureMigrationsTable()

    await bandStoreAppLoader.runModulesMigrations({
      moduleNames: modules,
      action: "generate",
    })

    logger.log(new Array(TERMINAL_SIZE).join("-"))
    logger.info("Migrations generated")

    process.exit()
  } catch (error) {
    if (!logger) {
      console.error(error)
      process.exit(1)
    }
    logger.log(new Array(TERMINAL_SIZE).join("-"))
    if (error.code && error.code === BandStoreError.Codes.UNKNOWN_MODULES) {
      logger.error(error.message)
      const modulesList = error.allModules.map(
        (name: string) => `          - ${name}`
      )
      logger.error(`Available modules:\n${modulesList.join("\n")}`)
    } else {
      logger.error(error.message, error)
    }
    process.exit(1)
  }
}

export default main
