import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminPaymentProviderFilters>,
  res: BandStoreResponse<HttpTypes.AdminPaymentProviderListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "payment_provider",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: payment_providers, metadata } = await remoteQuery(queryObject)

  res.json({
    payment_providers,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
