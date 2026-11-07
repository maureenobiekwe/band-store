import { IEventBusModuleService, Logger } from "@band-store/framework/types"

export type InitializeModuleInjectableDependencies = {
  logger?: Logger
  EventBus?: IEventBusModuleService
}
