import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import {
  StoreProductCategoryListParams,
  StoreProductCategoryListResponse,
} from "@band-store/framework/types"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"
import { publishedProductsContext } from "../utils/published-products-context"

export const GET = async (
  req: Authenticatedband-storeRequest<StoreProductCategoryListParams>,
  res: BandStoreResponse<StoreProductCategoryListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: product_categories, metadata } = await query.graph(
    {
      entity: "product_category",
      fields: req.queryConfig.fields,
      context: publishedProductsContext(),
      filters: req.filterableFields,
      pagination: req.queryConfig.pagination,
    },
    {
      locale: req.locale,
    }
  )

  res.json({
    product_categories,
    count: metadata!.count,
    offset: metadata!.skip,
    limit: metadata!.take,
  })
}
