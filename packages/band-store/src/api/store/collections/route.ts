import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

import { ContainerRegistrationKeys } from "@band-store/framework/utils"
import { publishedProductsContext } from "../utils/published-products-context"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.StoreCollectionListParams>,
  res: BandStoreResponse<HttpTypes.StoreCollectionListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: collections, metadata } = await query.graph(
    {
      entity: "product_collection",
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
    collections,
    count: metadata!.count,
    offset: metadata!.skip,
    limit: metadata!.take,
  })
}
