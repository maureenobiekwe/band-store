import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import { createProductTypesWorkflow } from "@band-store/core-flows"
import { refetchProductType } from "./helpers"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminProductTypeListParams>,
  res: BandStoreResponse<HttpTypes.AdminProductTypeListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "product_type",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: product_types, metadata } = await remoteQuery(queryObject)

  res.json({
    product_types: product_types,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminCreateProductType,
    HttpTypes.AdminProductTypeParams
  >,
  res: BandStoreResponse<HttpTypes.AdminProductTypeResponse>
) => {
  const input = [req.validatedBody]

  const { result } = await createProductTypesWorkflow(req.scope).run({
    input: { product_types: input },
  })

  const productType = await refetchProductType(
    result[0].id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ product_type: productType })
}
