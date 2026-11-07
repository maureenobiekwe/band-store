import { Logger } from "@band-store/framework/types"

export type InitializeModuleInjectableDependencies = {
  logger?: Logger
}

export * as ServiceTypes from "./services"
