import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  ContainerRegistrationKeys,
  defineFileConfig,
  Modules,
} from "@band-store/framework/utils"

/**
 * Lists the roles that include the given policy.
 *
 * @since 2.22.3
 */
export const GET = async (
  req: Authenticatedband-storeRequest<
    undefined,
    HttpTypes.AdminRbacPolicyRoleListParams
  >,
  res: BandStoreResponse<HttpTypes.AdminRbacPolicyRolesListResponse>
) => {
  const policyId = req.params.id
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  await query.graph(
    {
      entity: "rbac_policy",
      fields: ["id"],
      filters: { id: policyId },
    },
    {
      throwIfKeyNotFound: true,
    }
  )

  const { data: links, metadata } = await query.graph({
    entity: "rbac_role_policy",
    fields: req.queryConfig.fields,
    filters: { policy_id: policyId },
    pagination: req.queryConfig.pagination,
  })

  const roles = links
    .map((link: any) => link.role)
    .filter((role: any) => !!role)

  res.status(200).json({
    roles,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}

defineFileConfig({
  isDisabled: () => !BandStoreModule.isInstalled(Modules.RBAC),
})
