import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
  refetchEntities,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminProductOptionParams>,
  res: BandStoreResponse<HttpTypes.AdminProductOptionListResponse>
) => {
  const productId = req.params.id
  const { data: product_options, metadata } = await refetchEntities({
    entity: "product_option",
    idOrFilter: { ...req.filterableFields, products: { id: productId } },
    scope: req.scope,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  })

  res.json({
    product_options,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
