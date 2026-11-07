import {
  ContainerRegistrationKeys,
  BandStoreError,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: BandStoreRequest<HttpTypes.StoreGetRegionParams>,
  res: BandStoreResponse<HttpTypes.StoreRegionResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "region",
    variables: {
      filters: { id: req.params.id },
    },
    fields: req.queryConfig.fields,
  })

  const [region] = await remoteQuery(queryObject)

  if (!region) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Region with id: ${req.params.id} was not found`
    )
  }

  res.status(200).json({ region })
}
