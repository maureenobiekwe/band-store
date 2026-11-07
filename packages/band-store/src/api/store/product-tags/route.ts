import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"
import { publishedProductsContext } from "../utils/published-products-context"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.StoreProductTagListParams>,
  res: BandStoreResponse<HttpTypes.StoreProductTagListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: product_tags, metadata } = await query.graph(
    {
      entity: "product_tag",
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
    product_tags,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}
