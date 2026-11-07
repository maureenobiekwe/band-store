import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"

/**
 * @since 2.16.0
 */
export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminProductOptionValueListParams>,
  res: BandStoreResponse<HttpTypes.AdminProductOptionValueListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: product_option_values, metadata } = await query.graph({
    entity: "product_option_value",
    filters: {
      ...req.filterableFields,
      option_id: req.params.id,
    },
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  })

  res.json({
    product_option_values,
    count: metadata!.count,
    offset: metadata!.skip,
    limit: metadata!.take,
  })
}
