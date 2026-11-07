import type { InviteWorkflow } from "@band-store/framework/types"
import { InviteWorkflowEvents } from "@band-store/framework/utils"
import {
  WorkflowData,
  createWorkflow,
  parallelize,
  transform,
} from "@band-store/framework/workflows-sdk"
import { emitEventStep } from "../../common/steps/emit-event"
import {
  deleteRoleAssignmentsStep,
  getRoleAssignmentsStep,
} from "../../rbac/steps"
import { deleteInvitesStep } from "../steps"

export const deleteInvitesWorkflowId = "delete-invites-workflow"
/**
 * This workflow deletes one or more user invites. It's used by the
 * Delete Invites Admin API Route.
 *
 * You can use this workflow within your customizations or your own custom workflows, allowing you to
 * delete invites within your custom flows.
 *
 * @example
 * const { result } = await deleteInvitesWorkflow(container)
 * .run({
 *   input: {
 *     ids: ["invite_123"]
 *   }
 * })
 *
 * @summary
 *
 * Delete one or more user invites.
 */
export const deleteInvitesWorkflow = createWorkflow(
  deleteInvitesWorkflowId,
  (
    input: WorkflowData<InviteWorkflow.DeleteInvitesWorkflowInput>
  ): WorkflowData<void> => {
    deleteInvitesStep(input.ids)

    const invitesIdEvents = transform({ input }, ({ input }) => {
      return input.ids?.map((id) => {
        return { id }
      })
    })

    // Clean up any RBAC role assignments for the deleted invites.
    const roleAssignments = getRoleAssignmentsStep({
      reference: "invite",
      reference_id: input.ids,
    })
    const roleAssignmentIdsToDelete = transform(
      { roleAssignments },
      ({ roleAssignments }) =>
        roleAssignments.map((assignment) => assignment.id)
    )

    parallelize(
      deleteRoleAssignmentsStep({ id: roleAssignmentIdsToDelete }),
      emitEventStep({
        eventName: InviteWorkflowEvents.DELETED,
        data: invitesIdEvents,
      })
    )
  }
)
