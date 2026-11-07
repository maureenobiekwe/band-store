import {
  deleteRbacRolesWorkflow,
  updateRbacRolesWorkflow,
} from "@band-store/core-flows"
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

import { AdminUpdateRbacRoleType } from "../validators"

/**
 * @since 2.22.3
 */
export const GET = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminRbacRoleResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { data: roles } = await query.graph({
    entity: "rbac_role",
    filters: { id: req.params.id },
    fields: req.queryConfig.fields,
  })

  const role = roles[0]

  if (!role) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Role with id: ${req.params.id} not found`
    )
  }

  res.status(200).json({ role })
}

/**
 * @since 2.22.3
 */
export const POST = async (
  req: Authenticatedband-storeRequest<AdminUpdateRbacRoleType>,
  res: BandStoreResponse<HttpTypes.AdminRbacRoleResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { data: existing } = await query.graph({
    entity: "rbac_role",
    filters: { id: req.params.id },
    fields: ["id"],
  })

  const existingRole = existing[0]
  if (!existingRole) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Role with id "${req.params.id}" not found`
    )
  }

  const { result } = await updateRbacRolesWorkflow(req.scope).run({
    input: {
      actor_id: req.auth_context.actor_id,
      actor: req.auth_context.actor_type,
      selector: { id: req.params.id },
      update: req.validatedBody,
    },
  })

  const { data: roles } = await query.graph({
    entity: "rbac_role",
    filters: { id: result[0].id },
    fields: req.queryConfig.fields,
  })

  const role = roles[0]

  res.status(200).json({ role })
}

/**
 * @since 2.22.3
 */
export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminRbacRoleDeleteResponse>
) => {
  const id = req.params.id

  await deleteRbacRolesWorkflow(req.scope).run({
    input: {
      ids: [id],
      actor_id: req.auth_context.actor_id,
      actor: req.auth_context.actor_type,
    },
  })

  res.status(200).json({
    id,
    object: "rbac_role",
    deleted: true,
  })
}

defineFileConfig({
  isDisabled: () => !BandStoreModule.isInstalled(Modules.RBAC),
})
