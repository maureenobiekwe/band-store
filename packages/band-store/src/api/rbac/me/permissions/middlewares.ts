import {
  MiddlewareRoute,
  validateAndTransformQuery,
} from "@band-store/framework/http"
import { RbacScopeParamsFields } from "../../roles/validators"

export const rbacMePermissionsMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/rbac/me/permissions",
    middlewares: [validateAndTransformQuery(RbacScopeParamsFields, {})],
  },
]
