import { fetchPolicyResources, resolvePermissions } from "@band-store/framework"
import {
  Authenticatedband-storeRequest,
  resolveRoles,
} from "@band-store/framework/http"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import {
  Modules,
  permissionKey,
  PolicyOperation,
} from "@band-store/framework/utils"

/**
 * Returns the subset of the given RBAC resources the actor can read, for
 * routes whose resource is only known at request time (so they can't be
 * guarded with a static `authorize`):
 * - every resource when RBAC isn't installed.
 * - resources no policy governs are kept.
 * - governed resources are kept only when the actor holds `<resource>:read`.
 *
 * @param req - The authenticated request.
 * @param entities - The snake_case resource names to filter.
 * @param roles - The actor's roles, when already resolved by the caller.
 */
export const filterReadableEntities = async (
  req: Authenticatedband-storeRequest,
  entities: string[],
  roles?: string[]
): Promise<string[]> => {
  if (!BandStoreModule.isInstalled(Modules.RBAC) || !entities.length) {
    return entities
  }

  const governed = await fetchPolicyResources(req.scope)
  const governedEntities = [...new Set(entities)].filter((entity) =>
    governed.has(entity)
  )

  if (!governedEntities.length) {
    return entities
  }

  const actorRoles =
    roles ??
    (await resolveRoles({
      authContext: req.auth_context,
      container: req.scope,
      scope: req.rbac_context?.scope,
    }))

  const granted = await resolvePermissions({
    roles: actorRoles,
    universe: governedEntities.map((resource) => ({
      resource,
      operation: PolicyOperation.read,
    })),
    container: req.scope,
  })

  return entities.filter(
    (entity) =>
      !governed.has(entity) ||
      granted.has(permissionKey(entity, PolicyOperation.read))
  )
}
