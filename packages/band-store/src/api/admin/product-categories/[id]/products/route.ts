import { batchLinkProductsToCategoryWorkflow } from "@band-store/core-flows"
import {
  AdminProductCategoryResponse,
  HttpTypes,
} from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
  refetchEntity,
} from "@band-store/framework/http"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminBatchLink,
    HttpTypes.AdminProductCategoryParams
  >,
  res: BandStoreResponse<AdminProductCategoryResponse>
) => {
  const { id } = req.params

  await batchLinkProductsToCategoryWorkflow(req.scope).run({
    input: { id, ...req.validatedBody },
  })

  const category = await refetchEntity({
    entity: "product_category",
    idOrFilter: id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ product_category: category })
}
