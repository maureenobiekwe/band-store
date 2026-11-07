import {
  isDefined,
  Modules,
  TransactionHandlerType,
} from "@band-store/framework/utils"
import { StepResponse } from "@band-store/framework/workflows-sdk"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { HttpTypes, IWorkflowEngineService } from "@band-store/framework/types"

export const POST = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminCreateWorkflowsAsyncResponse>,
  res: BandStoreResponse<{ success: boolean }>
) => {
  const workflowEngineService: IWorkflowEngineService = req.scope.resolve(
    Modules.WORKFLOW_ENGINE
  )

  const { workflow_id } = req.params

  const body = req.validatedBody

  const { transaction_id, step_id } = body

  const compensateInput = body.compensate_input
  const stepResponse = isDefined(body.response)
    ? new StepResponse(body.response, compensateInput)
    : undefined
  const stepAction = body.action || TransactionHandlerType.INVOKE

  await workflowEngineService.setStepSuccess({
    idempotencyKey: {
      action: stepAction,
      transactionId: transaction_id,
      stepId: step_id,
      workflowId: workflow_id,
    },
    stepResponse,
    options: {
      container: req.scope,
      context: {
        requestId: req.requestId,
      },
    },
  })

  return res.status(200).json({ success: true })
}
