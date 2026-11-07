import { deleteRbacRolePoliciesWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  ContainerRegistrationKeys,
  defineFileConfig,
  BandStoreError,
  Modules,
} from "@band-store/framework/utils"

/**
 * Detaches a policy from a role. The actor must hold the policy being
 * detached, the same requirement as for attaching it.
 *
 * @since 2.22.3
 */
export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminRbacRolePolicyDeleteResponse>
) => {
  const { policy_id, id: role_id } = req.params

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { data: rolePolicies } = await query.graph({
    entity: "rbac_role_policy",
    fields: ["id"],
    filters: { role_id, policy_id },
  })

  const rolePolicyId = rolePolicies[0]?.id

  if (!rolePolicyId) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Policy with id "${policy_id}" is not attached to role "${role_id}"`
    )
  }

  await deleteRbacRolePoliciesWorkflow(req.scope).run({
    input: {
      role_policy_ids: [rolePolicyId],
      actor_id: req.auth_context.actor_id,
      actor: req.auth_context.actor_type,
    },
  })

  res.status(200).json({
    id: rolePolicyId,
    object: "rbac_role_policy",
    deleted: true,
  })
}

defineFileConfig({
  isDisabled: () => !BandStoreModule.isInstalled(Modules.RBAC),
})
