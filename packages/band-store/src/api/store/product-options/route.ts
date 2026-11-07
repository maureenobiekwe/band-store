import { HttpTypes } from "@band-store/framework/types"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

/**
 * @since 2.16.0
 */
export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.StoreProductOptionListParams>,
  res: BandStoreResponse<HttpTypes.StoreProductOptionListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: product_options, metadata } = await query.graph(
    {
      entity: "product_option",
      filters: req.filterableFields,
      pagination: req.queryConfig.pagination,
      fields: req.queryConfig.fields,
    },
    {
      locale: req.locale,
    }
  )

  res.json({
    product_options,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}
