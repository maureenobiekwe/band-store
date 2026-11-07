import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import {
  importProductsWorkflowId,
  waitConfirmationProductImportStepId,
} from "@band-store/core-flows"
import { IWorkflowEngineService } from "@band-store/framework/types"
import { Modules, TransactionHandlerType } from "@band-store/framework/utils"
import { StepResponse } from "@band-store/framework/workflows-sdk"

/**
 * @deprecated use `POST /admin/products/imports/:transaction_id/confirm` instead.
 */
export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse
) => {
  const workflowEngineService: IWorkflowEngineService = req.scope.resolve(
    Modules.WORKFLOW_ENGINE
  )
  const transactionId = req.params.transaction_id

  await workflowEngineService.setStepSuccess({
    idempotencyKey: {
      action: TransactionHandlerType.INVOKE,
      transactionId,
      stepId: waitConfirmationProductImportStepId,
      workflowId: importProductsWorkflowId,
    },
    stepResponse: new StepResponse(true),
  })

  res.status(202).json({})
}
