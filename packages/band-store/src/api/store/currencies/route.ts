import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: BandStoreRequest<HttpTypes.StoreGetCurrencyListParams>,
  res: BandStoreResponse<HttpTypes.StoreCurrencyListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "currency",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: currencies, metadata } = await remoteQuery(queryObject)

  res.json({
    currencies,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
