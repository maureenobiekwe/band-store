import {
  WorkflowData,
  WorkflowResponse,
  createWorkflow,
} from "@band-store/framework/workflows-sdk"
import { UpdateRbacRolePolicyDTO } from "@band-store/types"
import { updateRbacRolePoliciesStep } from "../steps/update-rbac-role-policies"

/**
 * @since 2.22.3
 */
export type UpdateRbacRolePoliciesWorkflowInput = {
  selector: Record<string, any>
  update: Omit<UpdateRbacRolePolicyDTO, "id">
}

/**
 * @since 2.22.3
 */
export const updateRbacRolePoliciesWorkflowId = "update-rbac-role-policies"

/**
 * @since 2.22.3
 */
export const updateRbacRolePoliciesWorkflow = createWorkflow(
  updateRbacRolePoliciesWorkflowId,
  (input: WorkflowData<UpdateRbacRolePoliciesWorkflowInput>) => {
    return new WorkflowResponse(updateRbacRolePoliciesStep(input))
  }
)
