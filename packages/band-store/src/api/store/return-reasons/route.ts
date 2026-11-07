import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

export const GET = async (
  req: BandStoreRequest<HttpTypes.StoreReturnReasonsParams>,
  res: BandStoreResponse<HttpTypes.StoreReturnReasonListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "return_reason",
    variables: {
      filters: {
        ...req.filterableFields,
      },
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: return_reasons, metadata } = await remoteQuery(queryObject)

  res.json({
    return_reasons,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
