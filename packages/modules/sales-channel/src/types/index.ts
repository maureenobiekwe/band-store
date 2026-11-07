import { Logger, UpdateSalesChannelDTO } from "@band-store/framework/types"

export type InitializeModuleInjectableDependencies = {
  logger?: Logger
}

export type UpdateSalesChanneInput = UpdateSalesChannelDTO & { id: string }
