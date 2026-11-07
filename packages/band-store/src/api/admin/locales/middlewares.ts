import { validateAndTransformQuery } from "@band-store/framework"
import { authorize, MiddlewareRoute } from "@band-store/framework/http"
import { PolicyOperation } from "@band-store/framework/utils"
import * as QueryConfig from "./query-config"
import { Entities } from "./query-config"
import { AdminGetLocaleParams, AdminGetLocalesParams } from "./validators"

export const adminLocalesRoutesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/admin/locales/*",
    middlewares: [
      authorize([
        {
          resource: Entities.store_locale,
          operation: PolicyOperation.read,
        },
      ]),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/locales",
    middlewares: [
      authorize([
        {
          resource: Entities.store_locale,
          operation: PolicyOperation.read,
        },
      ]),
      validateAndTransformQuery(
        AdminGetLocalesParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/locales/:code",
    middlewares: [
      validateAndTransformQuery(
        AdminGetLocaleParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
