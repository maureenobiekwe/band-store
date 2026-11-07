import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  ExternalModuleDeclaration,
  ICacheService,
  InternalModuleDeclaration,
} from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { RedisCacheModuleOptions } from "../types"

export const initialize = async (
  options?: RedisCacheModuleOptions | ExternalModuleDeclaration
): Promise<ICacheService> => {
  const serviceKey = Modules.CACHE
  const loaded = await BandStoreModule.bootstrap<ICacheService>({
    moduleKey: serviceKey,
    defaultPath: "@band-store/cache-redis",
    declaration: options as
      InternalModuleDeclaration | ExternalModuleDeclaration,
  })

  return loaded[serviceKey]
}
