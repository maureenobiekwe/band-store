import { getAssignableRolesWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { defineFileConfig, Modules } from "@band-store/framework/utils"

import { HttpTypes } from "@band-store/framework/types"

/**
 * Returns the subset of `rbac_role`s the authenticated actor is allowed to
 * assign.
 *
 * Introspection may ask for a specific scope context via the `scope` +
 * `scope_id` query params (both required to take effect); otherwise the
 * request's ambient scope set applies.
 *
 * @since 2.22.3
 */
export const GET = async (
  req: Authenticatedband-storeRequest<
    undefined,
    HttpTypes.AdminRbacRoleListParams & { scope?: string; scope_id?: string }
  >,
  res: BandStoreResponse<HttpTypes.AdminRbacAssignableRolesListResponse>
) => {
  const { scope, scope_id, ...filters } = req.filterableFields

  const rbacScope =
    scope && scope_id ? { type: scope, id: scope_id } : req.rbac_context?.scope

  const { result } = await getAssignableRolesWorkflow(req.scope).run({
    input: {
      actor_id: req.auth_context.actor_id,
      actor: req.auth_context.actor_type,
      scope: rbacScope,
      filters,
      pagination: req.queryConfig?.pagination,
    },
  })

  res.status(200).json(result)
}

defineFileConfig({
  isDisabled: () => !BandStoreModule.isInstalled(Modules.RBAC),
})
