import { createProductCategoriesWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
  refetchEntities,
} from "@band-store/framework/http"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminProductCategoryListParams>,
  res: BandStoreResponse<HttpTypes.AdminProductCategoryListResponse>
) => {
  const { data: product_categories, metadata } = await refetchEntities({
    entity: "product_category",
    idOrFilter: req.filterableFields,
    scope: req.scope,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  })

  res.json({
    product_categories,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminCreateProductCategory,
    HttpTypes.AdminProductCategoryParams
  >,
  res: BandStoreResponse<HttpTypes.AdminProductCategoryResponse>
) => {
  const { result } = await createProductCategoriesWorkflow(req.scope).run({
    input: { product_categories: [req.validatedBody] },
  })

  const {
    data: [category],
  } = await refetchEntities({
    entity: "product_category",
    idOrFilter: { id: result[0].id, ...req.filterableFields },
    scope: req.scope,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  })

  const response: HttpTypes.AdminProductCategoryResponse = {
    product_category: category as HttpTypes.AdminProductCategory,
  }

  res.status(200).json(response)
}
