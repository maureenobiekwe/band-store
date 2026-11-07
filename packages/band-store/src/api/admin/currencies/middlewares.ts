import { validateAndTransformQuery } from "@band-store/framework"
import { authorize, MiddlewareRoute } from "@band-store/framework/http"
import { PolicyOperation } from "@band-store/framework/utils"
import * as QueryConfig from "./query-config"
import { Entities } from "./query-config"
import { AdminGetCurrenciesParams, AdminGetCurrencyParams } from "./validators"

export const adminCurrencyRoutesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/admin/currencies/*",
    middlewares: [
      authorize([
        {
          resource: Entities.currency,
          operation: PolicyOperation.read,
        },
      ]),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/currencies",
    middlewares: [
      authorize([
        {
          resource: Entities.currency,
          operation: PolicyOperation.read,
        },
      ]),
      validateAndTransformQuery(
        AdminGetCurrenciesParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/currencies/:code",
    middlewares: [
      validateAndTransformQuery(
        AdminGetCurrencyParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
