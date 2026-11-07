import { IRbacModuleService } from "@band-store/framework/types"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { Modules } from "@band-store/framework/utils"
import { StepResponse, createStep } from "@band-store/framework/workflows-sdk"

/**
 * @ignore
 */
export type DeleteRoleAssignmentsStepInput = {
  id: string | string[]
}

/**
 * @ignore
 */
export const deleteRoleAssignmentsStepId = "delete-role-assignments"

/**
 * This step hard-deletes the RBAC role assignments with the given IDs.
 *
 * @ignore
 */
export const deleteRoleAssignmentsStep = createStep(
  deleteRoleAssignmentsStepId,
  async (input: DeleteRoleAssignmentsStepInput, { container }) => {
    const normalizedIds = Array.isArray(input.id) ? input.id : [input.id]

    if (!normalizedIds.length || !BandStoreModule.isInstalled(Modules.RBAC)) {
      return new StepResponse([], [])
    }

    const service = container.resolve<IRbacModuleService>(Modules.RBAC)

    const existing = await service.listRbacRoleAssignments({
      id: normalizedIds,
    })

    if (!existing.length) {
      return new StepResponse([], [])
    }

    await service.deleteRbacRoleAssignments(normalizedIds)

    return new StepResponse(void 0, existing)
  },
  async (existing, { container }) => {
    if (!existing?.length) {
      return
    }

    const service = container.resolve<IRbacModuleService>(Modules.RBAC)

    await service.createRbacRoleAssignments(existing)
  }
)
