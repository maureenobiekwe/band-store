import {
  CreateRbacRoleAssignmentDTO,
  IRbacModuleService,
} from "@band-store/framework/types"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { Modules } from "@band-store/framework/utils"
import { StepResponse, createStep } from "@band-store/framework/workflows-sdk"

/**
 * @ignore
 */
export type CreateRoleAssignmentsStepInput = CreateRbacRoleAssignmentDTO[]

/**
 * @ignore
 */
export const createRoleAssignmentsStepId = "create-role-assignments"

/**
 * This step creates one or more RBAC role assignments.
 *
 * @ignore
 */
export const createRoleAssignmentsStep = createStep(
  createRoleAssignmentsStepId,
  async (data: CreateRoleAssignmentsStepInput, { container }) => {
    if (!data?.length || !BandStoreModule.isInstalled(Modules.RBAC)) {
      return new StepResponse([], [])
    }

    const service = container.resolve<IRbacModuleService>(Modules.RBAC)

    const created = await service.createRbacRoleAssignments(data)

    return new StepResponse(
      created,
      created.map((assignment) => ({
        id: assignment.id,
        reference: assignment.reference,
        reference_id: assignment.reference_id,
      }))
    )
  },
  async (createdAssignments, { container }) => {
    if (!createdAssignments?.length) {
      return
    }

    const service = container.resolve<IRbacModuleService>(Modules.RBAC)

    await service.deleteRbacRoleAssignments(
      createdAssignments.map((assignment) => assignment.id)
    )
  }
)
