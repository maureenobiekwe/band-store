import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  ExternalModuleDeclaration,
  ICacheService,
  InternalModuleDeclaration,
} from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { InMemoryCacheModuleOptions } from "../types"

export const initialize = async (
  options?: InMemoryCacheModuleOptions | ExternalModuleDeclaration
): Promise<ICacheService> => {
  const serviceKey = Modules.CACHE
  const loaded = await BandStoreModule.bootstrap<ICacheService>({
    moduleKey: serviceKey,
    defaultPath: "@band-store//cache-inmemory",
    declaration: options as
      InternalModuleDeclaration | ExternalModuleDeclaration,
  })

  return loaded[serviceKey]
}
