import {
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@band-store/framework"
import { authorize, MiddlewareRoute } from "@band-store/framework/http"
import { PolicyOperation } from "@band-store/framework/utils"
import * as QueryConfig from "./query-config"
import { Entities } from "./query-config"
import {
  AdminGetStoreParams,
  AdminGetStoresParams,
  AdminUpdateStore,
} from "./validators"

export const adminStoreRoutesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/admin/stores/*",
    middlewares: [
      authorize([
        {
          resource: Entities.store,
          operation: PolicyOperation.read,
        },
      ]),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/stores",
    middlewares: [
      authorize([
        {
          resource: Entities.store,
          operation: PolicyOperation.read,
        },
      ]),
      validateAndTransformQuery(
        AdminGetStoresParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/stores/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetStoreParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/stores/:id",
    middlewares: [
      authorize([
        {
          resource: Entities.store,
          operation: PolicyOperation.update,
        },
      ]),
      validateAndTransformBody(AdminUpdateStore),
      validateAndTransformQuery(
        AdminGetStoreParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
