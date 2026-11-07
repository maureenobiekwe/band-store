import { ContainerRegistrationKeys } from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { HttpTypes } from "@band-store/framework/types"

/**
 * @since 2.8.0
 */
export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetTaxProvidersParams>,
  res: BandStoreResponse<HttpTypes.AdminTaxProviderListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const result = await query.graph({
    entity: "tax_providers",
    filters: req.filterableFields,
    pagination: req.queryConfig.pagination,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({
    tax_providers: result.data,
    count: result.metadata?.count ?? 0,
    offset: result.metadata?.skip ?? 0,
    limit: result.metadata?.take ?? 0,
  })
}
