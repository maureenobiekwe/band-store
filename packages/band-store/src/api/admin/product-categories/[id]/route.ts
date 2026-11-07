import {
  deleteProductCategoriesWorkflow,
  updateProductCategoriesWorkflow,
} from "@band-store/core-flows"
import {
  AdminProductCategoryResponse,
  HttpTypes,
} from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
  refetchEntities,
} from "@band-store/framework/http"
import { BandStoreError } from "@band-store/framework/utils"

export const GET = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminProductCategoryListParams
  >,
  res: BandStoreResponse<AdminProductCategoryResponse>
) => {
  const {
    data: [category],
  } = await refetchEntities({
    entity: "product_category",
    idOrFilter: { id: req.params.id, ...req.filterableFields },
    scope: req.scope,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  })

  if (!category) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Product category with id: ${req.params.id} was not found`
    )
  }

  res.json({ product_category: category })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminUpdateProductCategory,
    HttpTypes.AdminProductCategoryParams
  >,
  res: BandStoreResponse<AdminProductCategoryResponse>
) => {
  const { id } = req.params

  await updateProductCategoriesWorkflow(req.scope).run({
    input: { selector: { id }, update: req.validatedBody },
  })

  const {
    data: [category],
  } = await refetchEntities({
    entity: "product_category",
    idOrFilter: { id, ...req.filterableFields },
    scope: req.scope,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  })

  res.status(200).json({ product_category: category })
}

export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminProductCategoryDeleteResponse>
) => {
  const id = req.params.id

  await deleteProductCategoriesWorkflow(req.scope).run({
    input: [id],
  })

  res.status(200).json({
    id,
    object: "product_category",
    deleted: true,
  })
}
