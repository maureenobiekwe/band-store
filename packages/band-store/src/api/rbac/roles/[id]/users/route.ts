import {
  assignRolesWorkflow,
  unassignRolesWorkflow,
} from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  ContainerRegistrationKeys,
  defineFileConfig,
  BandStoreError,
  Modules,
} from "@band-store/framework/utils"
import {
  AdminAssignRoleUsersType,
  AdminRemoveRoleUsersType,
} from "../../validators"
import { HttpTypes } from "@band-store/framework/types"

/**
 * @since 2.22.3
 */
export const GET = async (
  req: Authenticatedband-storeRequest<
    undefined,
    HttpTypes.AdminRbacRoleUserListParams
  >,
  res: BandStoreResponse<HttpTypes.AdminRbacRoleUserListResponse>
) => {
  const roleId = req.params.id
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { user_id } = req.filterableFields

  const { data: assignments, metadata } = await query.graph({
    entity: "rbac_role_assignment",
    fields: ["reference_id"],
    filters: {
      role_id: roleId,
      reference: "user",
      ...(user_id ? { reference_id: user_id } : {}),
    },
    pagination: req.queryConfig?.pagination || {},
  })

  const referenceIds = assignments.map(
    (assignment: any) => assignment.reference_id
  )

  let users: any[] = []
  if (referenceIds.length) {
    const { data } = await query.graph({
      entity: "user",
      fields: req.queryConfig?.fields,
      filters: { id: referenceIds },
    })
    users = data
  }

  res.status(200).json({
    users,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}

/**
 * @since 2.22.3
 */
export const POST = async (
  req: Authenticatedband-storeRequest<AdminAssignRoleUsersType>,
  res: BandStoreResponse<HttpTypes.AdminRbacRoleUsersResponse>
) => {
  const roleId = req.params.id
  const { users } = req.validatedBody

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [role],
  } = await query.graph({
    entity: "rbac_role",
    fields: ["id"],
    filters: { id: roleId },
  })

  if (!role) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Role with id "${roleId}" not found`
    )
  }

  const scope = req.rbac_context?.scope

  await assignRolesWorkflow(req.scope).run({
    input: {
      granting_actor_id: req.auth_context.actor_id,
      granting_actor: req.auth_context.actor_type,
      granting_scope: req.rbac_context?.scope,
      assignments: users.map((userId) => ({
        role_id: roleId,
        reference: "user",
        reference_id: userId,
        scope,
      })),
    },
  })

  const { data: assignments } = await query.graph({
    entity: "rbac_role_assignment",
    fields: ["reference_id"],
    filters: { role_id: roleId, reference: "user" },
  })

  const referenceIds = assignments.map(
    (assignment: any) => assignment.reference_id
  )

  let roleUsers: any[] = []
  if (referenceIds.length) {
    const { data } = await query.graph({
      entity: "user",
      fields: ["*"],
      filters: { id: referenceIds },
    })
    roleUsers = data
  }

  res.status(200).json({ users: roleUsers })
}

/**
 * @since 2.22.3
 */
export const DELETE = async (
  req: Authenticatedband-storeRequest<AdminRemoveRoleUsersType>,
  res: BandStoreResponse<HttpTypes.AdminRbacRoleUsersDeleteResponse>
) => {
  const roleId = req.params.id
  const { users } = req.validatedBody

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [role],
  } = await query.graph({
    entity: "rbac_role",
    fields: ["id"],
    filters: { id: roleId },
  })

  if (!role) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Role with id "${roleId}" not found`
    )
  }

  const scope = req.rbac_context?.scope

  await unassignRolesWorkflow(req.scope).run({
    input: {
      granting_actor_id: req.auth_context.actor_id,
      granting_actor: req.auth_context.actor_type,
      granting_scope: req.rbac_context?.scope,
      assignments: users.map((userId) => ({
        role_id: roleId,
        reference: "user",
        reference_id: userId,
        scope,
      })),
    },
  })

  res.status(200).json({
    ids: users,
    object: "role_user",
    deleted: true,
  })
}

defineFileConfig({
  isDisabled: () => !BandStoreModule.isInstalled(Modules.RBAC),
})
