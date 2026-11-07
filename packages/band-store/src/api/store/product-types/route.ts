import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"
import { publishedProductsContext } from "../utils/published-products-context"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.StoreProductTypeListParams>,
  res: BandStoreResponse<HttpTypes.StoreProductTypeListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: product_types, metadata } = await query.graph(
    {
      entity: "product_type",
      filters: req.filterableFields,
      pagination: req.queryConfig.pagination,
      fields: req.queryConfig.fields,
      context: publishedProductsContext(),
    },
    {
      locale: req.locale,
    }
  )

  res.json({
    product_types,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}
