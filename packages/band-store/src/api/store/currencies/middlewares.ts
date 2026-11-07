import { MiddlewareRoute } from "@band-store/framework/http"
import { validateAndTransformQuery } from "@band-store/framework"
import * as QueryConfig from "./query-config"
import { StoreGetCurrenciesParams, StoreGetCurrencyParams } from "./validators"

export const storeCurrencyRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/store/currencies",
    middlewares: [
      validateAndTransformQuery(
        StoreGetCurrenciesParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/store/currencies/:code",
    middlewares: [
      validateAndTransformQuery(
        StoreGetCurrencyParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
