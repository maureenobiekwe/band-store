import { validateAndTransformQuery } from "@band-store/framework"
import { MiddlewareRoute } from "@band-store/framework/http"
import * as QueryConfig from "./query-config"
import { AdminGetLayoutConfigurationsParams } from "./validators"

export const layoutConfigurationListRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/layouts/configurations",
    middlewares: [
      validateAndTransformQuery(
        AdminGetLayoutConfigurationsParams,
        QueryConfig.retrieveLayoutConfigurationList
      ),
    ],
  },
]
