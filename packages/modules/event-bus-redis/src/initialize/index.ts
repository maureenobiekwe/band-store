import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  ExternalModuleDeclaration,
  IEventBusService,
  InternalModuleDeclaration,
} from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { EventBusRedisModuleOptions } from "../types"

export const initialize = async (
  options?: EventBusRedisModuleOptions | ExternalModuleDeclaration
): Promise<IEventBusService> => {
  const serviceKey = Modules.EVENT_BUS
  const loaded = await BandStoreModule.bootstrap<IEventBusService>({
    moduleKey: serviceKey,
    defaultPath: "@band-store/event-bus-redis",
    declaration: options as
      InternalModuleDeclaration | ExternalModuleDeclaration,
  })

  return loaded[serviceKey]
}
