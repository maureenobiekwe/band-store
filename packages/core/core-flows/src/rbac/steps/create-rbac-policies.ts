import { Modules } from "@band-store/framework/utils"
import { StepResponse, createStep } from "@band-store/framework/workflows-sdk"
import {
  CreateRbacPolicyDTO,
  IRbacModuleService,
  PolicyOperationValue,
  PolicyResourceValue,
} from "@band-store/framework/types"

/**
 * @ignore
 */
export type CreateRbacPoliciesStepInput = {
  policies: CreateRbacPolicyDTO[]
}

/**
 * @ignore
 */
export const createRbacPoliciesStepId = "create-rbac-policies"

/**
 * @ignore
 */
export const createRbacPoliciesStep = createStep(
  createRbacPoliciesStepId,
  async (data: CreateRbacPoliciesStepInput, { container }) => {
    const service = container.resolve<IRbacModuleService>(Modules.RBAC)

    // Normalize resource and operation to lowercase.
    const normalizedPolicies = data.policies.map((policy) => ({
      ...policy,
      resource: policy.resource.toLowerCase() as PolicyResourceValue,
      operation: policy.operation.toLowerCase() as PolicyOperationValue,
    }))

    const created = await service.createRbacPolicies(normalizedPolicies)

    return new StepResponse(
      created,
      (created ?? []).map((p) => p.id)
    )
  },
  async (createdIds: string[] | undefined, { container }) => {
    if (!createdIds?.length) {
      return
    }

    const service = container.resolve<IRbacModuleService>(Modules.RBAC)
    await service.deleteRbacPolicies(createdIds)
  }
)
