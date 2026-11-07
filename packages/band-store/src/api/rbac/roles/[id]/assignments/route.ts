import {
  assignRolesWorkflow,
  unassignRolesWorkflow,
} from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
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
  AdminCreateRoleAssignmentsType,
  AdminGetRoleAssignmentsParamsType,
  AdminRemoveRoleAssignmentsType,
} from "../../validators"

/**
 * @since 2.22.3
 */
export const GET = async (
  req: Authenticatedband-storeRequest<undefined, AdminGetRoleAssignmentsParamsType>,
  res: BandStoreResponse<HttpTypes.AdminRbacRoleAssignmentListResponse>
) => {
  const roleId = req.params.id
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: assignments, metadata } = await query.graph({
    entity: "rbac_role_assignment",
    fields: req.queryConfig.fields,
    filters: {
      role_id: roleId,
      ...req.filterableFields,
    },
    pagination: req.queryConfig.pagination,
  })

  res.status(200).json({
    assignments,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}

/**
 * @since 2.22.3
 */
export const POST = async (
  req: Authenticatedband-storeRequest<AdminCreateRoleAssignmentsType>,
  res: BandStoreResponse<HttpTypes.AdminRbacRoleAssignmentsResponse>
) => {
  const roleId = req.params.id
  const {
    reference,
    reference_ids: referenceIds,
    scope: assignmentScope,
    scope_id: assignmentScopeId,
  } = req.validatedBody

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

  const scope =
    assignmentScope && assignmentScopeId
      ? { type: assignmentScope, id: assignmentScopeId }
      : undefined

  await assignRolesWorkflow(req.scope).run({
    input: {
      granting_actor_id: req.auth_context.actor_id,
      granting_actor: req.auth_context.actor_type,
      granting_scope: req.rbac_context?.scope,
      assignments: referenceIds.map((referenceId) => ({
        role_id: roleId,
        reference,
        reference_id: referenceId,
        scope,
      })),
    },
  })

  const { data: assignments } = await query.graph({
    entity: "rbac_role_assignment",
    fields: req.queryConfig.fields,
    filters: { role_id: roleId, reference },
  })

  res.status(200).json({ assignments })
}

/**
 * @since 2.22.3
 */
export const DELETE = async (
  req: Authenticatedband-storeRequest<AdminRemoveRoleAssignmentsType>,
  res: BandStoreResponse<HttpTypes.AdminRbacRoleAssignmentsDeleteResponse>
) => {
  const roleId = req.params.id
  const {
    reference,
    reference_ids: referenceIds,
    scope: assignmentScope,
    scope_id: assignmentScopeId,
  } = req.validatedBody

  const scope =
    assignmentScope && assignmentScopeId
      ? { type: assignmentScope, id: assignmentScopeId }
      : undefined

  await unassignRolesWorkflow(req.scope).run({
    input: {
      granting_actor_id: req.auth_context.actor_id,
      granting_actor: req.auth_context.actor_type,
      granting_scope: req.rbac_context?.scope,
      assignments: referenceIds.map((referenceId) => ({
        role_id: roleId,
        reference,
        reference_id: referenceId,
        scope,
      })),
    },
  })

  res.status(200).json({
    ids: referenceIds,
    object: "role_assignment",
    deleted: true,
  })
}

defineFileConfig({
  isDisabled: () => !BandStoreModule.isInstalled(Modules.RBAC),
})
