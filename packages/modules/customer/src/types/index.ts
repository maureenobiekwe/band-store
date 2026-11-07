import { Logger } from "@band-store/framework/types"

export * as ServiceTypes from "./services"
export * from "./services"

export type InitializeModuleInjectableDependencies = {
  logger?: Logger
}
