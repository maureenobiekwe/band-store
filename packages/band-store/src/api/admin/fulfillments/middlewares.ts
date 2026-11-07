import {
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@band-store/framework"
import { authorize, MiddlewareRoute } from "@band-store/framework/http"
import { PolicyOperation } from "@band-store/framework/utils"
import * as QueryConfig from "./query-config"
import { Entities } from "./query-config"
import {
  AdminCreateFulfillment,
  AdminCreateShipment,
  AdminFulfillmentParams,
} from "./validators"

export const adminFulfillmentsRoutesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/admin/fulfillments/*",
    middlewares: [
      authorize([
        {
          resource: Entities.fulfillment,
          operation: PolicyOperation.read,
        },
      ]),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/fulfillments/:id/cancel",
    middlewares: [
      authorize([
        {
          resource: Entities.fulfillment,
          operation: PolicyOperation.update,
        },
        {
          resource: Entities.order,
          operation: PolicyOperation.update,
        },
      ]),
      validateAndTransformQuery(
        AdminFulfillmentParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/fulfillments",
    middlewares: [
      authorize([
        {
          resource: Entities.fulfillment,
          operation: PolicyOperation.create,
        },
        {
          resource: Entities.order,
          operation: PolicyOperation.update,
        },
      ]),
      validateAndTransformBody(AdminCreateFulfillment),
      validateAndTransformQuery(
        AdminFulfillmentParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/fulfillments/:id/shipment",
    middlewares: [
      authorize([
        {
          resource: Entities.fulfillment,
          operation: PolicyOperation.update,
        },
        {
          resource: Entities.order,
          operation: PolicyOperation.update,
        },
      ]),
      validateAndTransformBody(AdminCreateShipment),
      validateAndTransformQuery(
        AdminFulfillmentParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
