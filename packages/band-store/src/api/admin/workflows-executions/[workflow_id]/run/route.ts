import {
  HttpTypes,
  IWorkflowEngineService,
  WorkflowOrchestratorRunDTO,
} from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const POST = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminCreateWorkflowsRun>,
  res: BandStoreResponse<HttpTypes.AdminWorkflowRunResponse>
) => {
  const workflowEngineService: IWorkflowEngineService = req.scope.resolve(
    Modules.WORKFLOW_ENGINE
  )

  const { workflow_id } = req.params

  const { transaction_id, input } = req.validatedBody

  const options = {
    transactionId: transaction_id,
    input,
    context: {
      requestId: req.requestId,
    },
  } as WorkflowOrchestratorRunDTO

  const { acknowledgement } = await workflowEngineService.run(
    workflow_id,
    options
  )

  return res.status(200).json({ acknowledgement })
}
