import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetFulfillmentProvidersParams>,
  res: BandStoreResponse<HttpTypes.AdminFulfillmentProviderListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "fulfillment_provider",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: fulfillment_providers, metadata } =
    await remoteQuery(queryObject)

  res.json({
    fulfillment_providers,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
