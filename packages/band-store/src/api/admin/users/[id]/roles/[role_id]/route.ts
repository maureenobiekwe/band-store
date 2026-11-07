import { unassignRolesWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { defineFileConfig, Modules } from "@band-store/framework/utils"

/**
 * @since 2.22.3
 */
export const DELETE = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminUnassignUserRole>,
  res: BandStoreResponse
) => {
  const { id: userId, role_id: roleId } = req.params
  const { scope, scope_id } = req.validatedBody

  await unassignRolesWorkflow(req.scope).run({
    input: {
      granting_actor_id: req.auth_context.actor_id,
      granting_actor: req.auth_context.actor_type,
      granting_scope: req.rbac_context?.scope,
      assignments: [
        {
          role_id: roleId,
          reference: "user",
          reference_id: userId,
          scope: scope && scope_id ? { type: scope, id: scope_id } : undefined,
        },
      ],
    },
  })

  res.status(200).json({
    id: roleId,
    object: "user_role",
    deleted: true,
  })
}

defineFileConfig({
  isDisabled: () => !BandStoreModule.isInstalled(Modules.RBAC),
})
