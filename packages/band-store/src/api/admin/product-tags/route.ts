import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
  refetchEntities,
  refetchEntity,
} from "@band-store/framework/http"

import { createProductTagsWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminProductTagListParams>,
  res: BandStoreResponse<HttpTypes.AdminProductTagListResponse>
) => {
  const { data: product_tags, metadata } = await refetchEntities({
    entity: "product_tag",
    idOrFilter: req.filterableFields,
    scope: req.scope,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  })

  res.json({
    product_tags: product_tags,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminCreateProductTag,
    HttpTypes.AdminProductTagParams
  >,
  res: BandStoreResponse<HttpTypes.AdminProductTagResponse>
) => {
  const input = [req.validatedBody]

  const { result } = await createProductTagsWorkflow(req.scope).run({
    input: { product_tags: input },
  })

  const productTag = await refetchEntity({
    entity: "product_tag",
    idOrFilter: result[0].id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ product_tag: productTag })
}
