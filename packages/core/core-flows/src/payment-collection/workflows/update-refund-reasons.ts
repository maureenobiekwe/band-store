import {
  RefundReasonDTO,
  UpdateRefundReasonDTO,
} from "@band-store/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@band-store/framework/workflows-sdk"
import { updateRefundReasonsStep } from "../steps"

/**
 * The refund reasons to update.
 */
export type UpdateRefundReasonsWorkflowInput = UpdateRefundReasonDTO[]

/**
 * The updated refund reasons.
 */
export type UpdateRefundReasonsWorkflowOutput = RefundReasonDTO[]

export const updateRefundReasonsWorkflowId = "update-refund-reasons"
/**
 * This workflow updates one or more refund reasons. It's used by the
 * Update Refund Reason Admin API Route.
 *
 * You can use this workflow within your own customizations or custom workflows, allowing you
 * to update refund reasons in your custom flows.
 *
 * @example
 * const { result } = await updateRefundReasonsWorkflow(container)
 * .run({
 *   input: [
 *     {
 *       id: "refres_123",
 *       label: "Damaged",
 *     }
 *   ]
 * })
 *
 * @summary
 *
 * Update refund reasons.
 */
export const updateRefundReasonsWorkflow = createWorkflow(
  updateRefundReasonsWorkflowId,
  (
    input: WorkflowData<UpdateRefundReasonsWorkflowInput>
  ): WorkflowResponse<UpdateRefundReasonsWorkflowOutput> => {
    return new WorkflowResponse(updateRefundReasonsStep(input))
  }
)
