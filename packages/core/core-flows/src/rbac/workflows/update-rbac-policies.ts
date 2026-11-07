import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@band-store/framework/workflows-sdk"
import {
  FilterableRbacPolicyProps,
  UpdateRbacPolicyDTO,
} from "@band-store/framework/types"
import { updateRbacPoliciesStep } from "../steps/update-rbac-policies"

/**
 * @since 2.22.3
 */
export type UpdateRbacPoliciesWorkflowInput = {
  selector: FilterableRbacPolicyProps
  update: Omit<UpdateRbacPolicyDTO, "id">
}

/**
 * @since 2.22.3
 */
export const updateRbacPoliciesWorkflowId = "update-rbac-policies"

/**
 * @since 2.22.3
 */
export const updateRbacPoliciesWorkflow = createWorkflow(
  updateRbacPoliciesWorkflowId,
  (input: WorkflowData<UpdateRbacPoliciesWorkflowInput>) => {
    return new WorkflowResponse(updateRbacPoliciesStep(input))
  }
)
