import { LocalWorkflow } from "@band-store/orchestration"
import { LoadedModule, BandStoreContainer } from "@band-store/types"
import { ExportedWorkflow } from "./helper"

class BandStoreWorkflow {
  static workflows: Record<
    string,
    (
      container?: LoadedModule[] | BandStoreContainer
    ) => Omit<
      LocalWorkflow,
      "run" | "registerStepSuccess" | "registerStepFailure" | "cancel"
    > &
      ExportedWorkflow
  > = {}

  static registerWorkflow(workflowId, exportedWorkflow) {
    if (workflowId in BandStoreWorkflow.workflows) {
      return
    }

    BandStoreWorkflow.workflows[workflowId] = exportedWorkflow
  }

  static unregisterWorkflow(workflowId) {
    delete BandStoreWorkflow.workflows[workflowId]
  }

  static getWorkflow(workflowId): ExportedWorkflow {
    return BandStoreWorkflow.workflows[workflowId] as unknown as ExportedWorkflow
  }
}

global.BandStoreWorkflow ??= BandStoreWorkflow
const GlobalMedusaWorkflow = global.BandStoreWorkflow

export { GlobalMedusaWorkflow as BandStoreWorkflow }
