import { logger } from "@band-store/framework/logger"
import {
  ExternalModuleDeclaration,
  InternalModuleDeclaration,
} from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  createPgConnection,
  promiseAll,
} from "@band-store/framework/utils"

export interface InitModulesOptions {
  injectedDependencies?: Record<string, unknown>
  databaseConfig: {
    clientUrl: string
    schema?: string
  }
  modulesConfig: {
    [key: string]:
      | string
      | boolean
      | Partial<InternalModuleDeclaration | ExternalModuleDeclaration>
  }
  preventConnectionDestroyWarning?: boolean
  cwd?: string
}

export async function initModules({
  injectedDependencies,
  databaseConfig,
  modulesConfig,
  preventConnectionDestroyWarning = false,
  cwd,
}: InitModulesOptions) {
  const moduleSdkImports = require("@band-store/framework/modules-sdk")

  injectedDependencies ??= {}

  let sharedPgConnection =
    injectedDependencies?.[ContainerRegistrationKeys.PG_CONNECTION]

  let shouldDestroyConnectionAutomatically = !sharedPgConnection
  if (!sharedPgConnection) {
    sharedPgConnection = createPgConnection({
      clientUrl: databaseConfig.clientUrl,
      schema: databaseConfig.schema,
    })

    injectedDependencies[ContainerRegistrationKeys.PG_CONNECTION] =
      sharedPgConnection
  }

  const bandStoreApp = await moduleSdkImports.BandStoreApp({
    modulesConfig,
    injectedDependencies,
    cwd,
  })

  await bandStoreApp.onApplicationStart()

  async function shutdown() {
    const promises: Promise<void>[] = []

    if (shouldDestroyConnectionAutomatically) {
      promises.push((sharedPgConnection as any).context?.destroy())
      promises.push((sharedPgConnection as any).destroy())
      promises.push(bandStoreApp.onApplicationPrepareShutdown())
      promises.push(bandStoreApp.onApplicationShutdown())
    } else {
      if (!preventConnectionDestroyWarning) {
        logger.info(
          `You are using a custom shared connection. The connection won't be destroyed automatically.`
        )
      }
    }

    await promiseAll(promises)
    moduleSdkImports.BandStoreModule.clearInstances()
  }

  return {
    bandStoreApp,
    shutdown,
  }
}
