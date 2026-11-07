import { hasPermission } from "@band-store/framework"
import {
  Authenticatedband-storeRequest,
  BandStoreNextFunction,
  BandStoreResponse,
  resolveRoles,
} from "@band-store/framework/http"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { BandStoreError, Modules, WILDCARD } from "@band-store/framework/utils"

/**
 * Creates a middleware responding with a 403 unless the actor is a super
 * admin (holds the `*:*` policy), for operations affecting every user such as
 * managing system default view and layout configurations.
 *
 * The check only runs when `when` returns `true` for the request, so it can
 * be registered on routes where only some payloads need it. It is a no-op
 * when RBAC is disabled.
 *
 * @param when - Decides whether the request needs a super admin. Runs after
 * the middlewares registered before this one, so it can read the validated
 * body and query.
 * @param message - The error message when the actor isn't a super admin.
 */
export const requireSuperAdmin = (
  when: (req: Authenticatedband-storeRequest<any>) => boolean | Promise<boolean>,
  message: string
) => {
  return async (
    req: Authenticatedband-storeRequest<any>,
    _: BandStoreResponse,
    next: BandStoreNextFunction
  ) => {
    if (!BandStoreModule.isInstalled(Modules.RBAC) || !(await when(req))) {
      return next()
    }

    const roles = await resolveRoles({
      authContext: req.auth_context,
      container: req.scope,
      scope: req.rbac_context?.scope,
    })

    const isSuperAdmin = await hasPermission({
      roles,
      actions: { resource: WILDCARD, operation: WILDCARD },
      container: req.scope,
    })

    if (!isSuperAdmin) {
      throw new BandStoreError(BandStoreError.Types.FORBIDDEN, message)
    }

    return next()
  }
}
