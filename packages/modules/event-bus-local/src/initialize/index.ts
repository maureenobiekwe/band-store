import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { IEventBusService } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"

export const initialize = async (): Promise<IEventBusService> => {
  const serviceKey = Modules.EVENT_BUS
  const loaded = await BandStoreModule.bootstrap<IEventBusService>({
    moduleKey: serviceKey,
    defaultPath: "@band-store/event-bus-local",
  })

  return loaded[serviceKey]
}
