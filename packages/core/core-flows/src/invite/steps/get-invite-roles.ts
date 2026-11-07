import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  CreateActorRoleDTO,
  IRbacModuleService,
} from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { StepResponse, createStep } from "@band-store/framework/workflows-sdk"

/**
 * @ignore
 */
export interface GetInviteRolesStepInput {
  invite_id: string
}

/**
 * @ignore
 */
export const getInviteRolesStepId = "get-invite-roles-step"
/**
 * This step retrieves the roles associated with an invite, each carrying the
 * scope of its assignment, so the roles can be re-assigned as-is to the user
 * created when the invite is accepted.
 *
 * @example
 * const data = getInviteRolesStep({
 *   invite_id: "invite_123"
 * })
 * @ignore
 */
export const getInviteRolesStep = createStep(
  getInviteRolesStepId,
  async (input: GetInviteRolesStepInput, { container }) => {
    if (!BandStoreModule.isInstalled(Modules.RBAC)) {
      return new StepResponse([])
    }

    const service = container.resolve<IRbacModuleService>(Modules.RBAC)

    const assignments = await service.listRbacRoleAssignments({
      reference: "invite",
      reference_id: input.invite_id,
    })

    const roles = assignments.map((assignment): CreateActorRoleDTO => {
      return assignment.scope && assignment.scope_id
        ? {
            role_id: assignment.role_id,
            scopes: [{ type: assignment.scope, id: assignment.scope_id }],
          }
        : { role_id: assignment.role_id }
    })

    return new StepResponse(roles)
  }
)
