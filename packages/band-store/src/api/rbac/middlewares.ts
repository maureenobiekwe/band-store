import { MiddlewareRoute } from "@band-store/framework/http"

import { rbacMePermissionsMiddlewares } from "./me/permissions/middlewares"
import { rbacPolicyRoutesMiddlewares } from "./policies/middlewares"
import { rbacRoleRoutesMiddlewares } from "./roles/middlewares"

export const rbacRoutesMiddlewares: MiddlewareRoute[] = [
  ...rbacRoleRoutesMiddlewares,
  ...rbacPolicyRoutesMiddlewares,
  ...rbacMePermissionsMiddlewares,
]
