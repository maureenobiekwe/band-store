import { LinkLoader, BandStoreAppLoader } from "@band-store/framework"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  ContainerRegistrationKeys,
  FileSystem,
  generateContainerTypes,
  generateAugmentationRefs,
  getResolvedPlugins,
  gqlSchemaToTypes,
  mergePluginModules,
  validateModuleName,
} from "@band-store/framework/utils"
import { Logger, BandStoreContainer } from "@band-store/types"
import path, { join } from "path"

export async function generateTypes({
  directory,
  container,
  logger,
}: {
  directory: string
  container: BandStoreContainer
  logger: Logger
}) {
  logger.info("Generating types...")

  const configModule = container.resolve(
    ContainerRegistrationKeys.CONFIG_MODULE
  )

  const plugins = await getResolvedPlugins(directory, configModule, true)
  mergePluginModules(configModule, plugins, directory)

  Object.keys(configModule.modules ?? {}).forEach((key) => {
    validateModuleName(key)
  })

  const linksSourcePaths = plugins.map((plugin) =>
    join(plugin.resolve, "links")
  )
  await new LinkLoader(linksSourcePaths, logger).load()

  const { gqlSchema, modules } = await new BandStoreAppLoader().load({
    registerInContainer: false,
    schemaOnly: true,
  })

  const typesDirectory = path.join(directory, ".band-store/types")

  /**
   * Cleanup existing types directory before creating new artifacts
   */
  await new FileSystem(typesDirectory).cleanup({ recursive: true })

  await generateContainerTypes(modules, {
    outputDir: typesDirectory,
    interfaceName: "ModuleImplementations",
  })
  logger.debug("Generated container types")

  if (gqlSchema) {
    await gqlSchemaToTypes({
      outputDir: typesDirectory,
      filename: "query-entry-points",
      interfaceName: "RemoteQueryEntryPoints",
      schema: gqlSchema,
      joinerConfigs: BandStoreModule.getAllJoinerConfigs(),
    })
    logger.debug("Generated modules types")
  }

  await generateAugmentationRefs({ directory, plugins, modules })
  logger.debug("Generated plugin augmentation types")

  logger.info("Types generated successfully")
}
