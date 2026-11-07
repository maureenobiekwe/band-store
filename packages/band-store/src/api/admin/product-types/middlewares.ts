import {
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@band-store/framework"
import { authorize, MiddlewareRoute } from "@band-store/framework/http"
import { PolicyOperation } from "@band-store/framework/utils"
import * as QueryConfig from "./query-config"
import { Entities } from "./query-config"
import {
  AdminCreateProductType,
  AdminGetProductTypeParams,
  AdminGetProductTypesParams,
  AdminUpdateProductType,
} from "./validators"

export const adminProductTypeRoutesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/admin/product-types/*",
    middlewares: [
      authorize([
        {
          resource: Entities.product_type,
          operation: PolicyOperation.read,
        },
      ]),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/product-types",
    middlewares: [
      authorize([
        {
          resource: Entities.product_type,
          operation: PolicyOperation.read,
        },
      ]),
      validateAndTransformQuery(
        AdminGetProductTypesParams,
        QueryConfig.listProductTypesTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/product-types/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetProductTypeParams,
        QueryConfig.retrieveProductTypeTransformQueryConfig
      ),
    ],
  },
  // Create/update/delete methods are new in v2
  {
    method: ["POST"],
    matcher: "/admin/product-types",
    middlewares: [
      authorize([
        {
          resource: Entities.product_type,
          operation: PolicyOperation.create,
        },
      ]),
      validateAndTransformBody(AdminCreateProductType),
      validateAndTransformQuery(
        AdminGetProductTypeParams,
        QueryConfig.retrieveProductTypeTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/product-types/:id",
    middlewares: [
      authorize([
        {
          resource: Entities.product_type,
          operation: PolicyOperation.update,
        },
      ]),
      validateAndTransformBody(AdminUpdateProductType),
      validateAndTransformQuery(
        AdminGetProductTypeParams,
        QueryConfig.retrieveProductTypeTransformQueryConfig
      ),
    ],
  },
  {
    method: ["DELETE"],
    matcher: "/admin/product-types/:id",
    middlewares: [
      authorize([
        {
          resource: Entities.product_type,
          operation: PolicyOperation.delete,
        },
      ]),
    ],
  },
]
