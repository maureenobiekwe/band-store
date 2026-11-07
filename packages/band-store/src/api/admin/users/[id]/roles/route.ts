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
import { HttpTypes } from "@band-store/framework/types"

/**
 * @since 2.22.3
 */
export const GET = async (
  req: Authenticatedband-storeRequest<undefined, HttpTypes.AdminGetUserRolesParams>,
  res: BandStoreResponse<HttpTypes.AdminUserRoleListResponse>
) => {
  const userId = req.params.id

  const rbacModuleService = req.scope.resolve(Modules.RBAC)

  const [assignments, count] =
    await rbacModuleService.listAndCountRbacRoleAssignments(
      {
        reference: "user",
        reference_id: userId,
        ...req.filterableFields,
      },
      {
        relations: ["role"],
        ...req.queryConfig?.pagination,
      }
    )

  const roles = assignments.map((assignment: any) => ({
    ...assignment.role,
    scope: assignment.scope,
  }))

  res.status(200).json({
    roles,
    count,
    offset: req.queryConfig?.pagination?.skip ?? 0,
    limit: req.queryConfig?.pagination?.take ?? 0,
  })
}

/**
 * @since 2.22.3
 */
export const POST = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminAssignUserRoles>,
  res: BandStoreResponse
) => {
  const userId = req.params.id
  const { assignments: assignmentsToCreate } = req.validatedBody
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [user],
  } = await query.graph({
    entity: "user",
    fields: ["id"],
    filters: { id: userId },
  })

  if (!user) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `User with id "${userId}" not found`
    )
  }

  await assignRolesWorkflow(req.scope).run({
    input: {
      granting_actor_id: req.auth_context.actor_id,
      granting_actor: req.auth_context.actor_type,
      granting_scope: req.rbac_context?.scope,
      assignments: assignmentsToCreate.map((assignment) => ({
        role_id: assignment.role_id,
        reference: "user",
        reference_id: userId,
        scope:
          assignment.scope && assignment.scope_id
            ? { type: assignment.scope, id: assignment.scope_id }
            : undefined,
      })),
    },
  })

  const { data: assignments } = await query.graph({
    entity: "rbac_role_assignment",
    fields: ["role.*"],
    filters: { reference: "user", reference_id: userId },
  })

  const userRoles = assignments.map((assignment: any) => assignment.role)

  res.status(200).json({ roles: userRoles })
}

/**
 * @since 2.22.3
 */
export const DELETE = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminUnassignUserRoles>,
  res: BandStoreResponse
) => {
  const userId = req.params.id
  const { assignments } = req.validatedBody
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [user],
  } = await query.graph({
    entity: "user",
    fields: ["id"],
    filters: { id: userId },
  })

  if (!user) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `User with id "${userId}" not found`
    )
  }

  await unassignRolesWorkflow(req.scope).run({
    input: {
      granting_actor_id: req.auth_context.actor_id,
      granting_actor: req.auth_context.actor_type,
      granting_scope: req.rbac_context?.scope,
      assignments: assignments.map((assignment) => ({
        role_id: assignment.role_id,
        scope:
          assignment.scope && assignment.scope_id
            ? { type: assignment.scope, id: assignment.scope_id }
            : undefined,
        reference: "user",
        reference_id: userId,
      })),
    },
  })

  res.status(200).json({
    ids: assignments.map((assignment) => assignment.role_id),
    object: "user_role",
    deleted: true,
  })
}

defineFileConfig({
  isDisabled: () => !BandStoreModule.isInstalled(Modules.RBAC),
})
