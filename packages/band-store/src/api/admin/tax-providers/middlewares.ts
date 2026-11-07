import * as QueryConfig from "./query-config"
import { Entities } from "./query-config"

import { validateAndTransformQuery } from "@band-store/framework"
import { authorize, MiddlewareRoute } from "@band-store/framework/http"
import { PolicyOperation } from "@band-store/framework/utils"

import { AdminGetTaxProvidersParams } from "./validators"

export const adminTaxProviderRoutesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/admin/tax-providers/*",
    middlewares: [
      authorize([
        {
          resource: Entities.tax_provider,
          operation: PolicyOperation.read,
        },
      ]),
    ],
  },
  {
    method: "GET",
    matcher: "/admin/tax-providers",
    middlewares: [
      authorize([
        {
          resource: Entities.tax_provider,
          operation: PolicyOperation.read,
        },
      ]),
      validateAndTransformQuery(
        AdminGetTaxProvidersParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
]
