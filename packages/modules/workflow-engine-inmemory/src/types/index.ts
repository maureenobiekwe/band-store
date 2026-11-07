import { ContainerLike } from "@band-store/framework"
import { Logger } from "@band-store/framework/types"
import { FlowCancelOptions } from "@band-store/framework/workflows-sdk"

export type InitializeModuleInjectableDependencies = {
  logger?: Logger
}

export type WorkflowOrchestratorCancelOptions = Omit<
  FlowCancelOptions,
  "transaction" | "transactionId" | "container"
> & {
  transactionId: string
  container?: ContainerLike
}
