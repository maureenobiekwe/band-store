import { MiddlewareRoute } from "@band-store/framework/http"
import { validateAndTransformQuery } from "@band-store/framework"
import * as queryConfig from "./query-config"
import { StoreGetPaymentProvidersParams } from "./validators"

export const storePaymentProvidersMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/store/payment-providers",
    middlewares: [
      validateAndTransformQuery(
        StoreGetPaymentProvidersParams,
        queryConfig.listTransformPaymentProvidersQueryConfig
      ),
    ],
  },
]
