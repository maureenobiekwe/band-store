import { HttpTypes } from "@band-store/framework/types"
import { BandStoreError } from "@band-store/framework/utils"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
  refetchEntity,
} from "@band-store/framework/http"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.SelectParams>,
  res: BandStoreResponse<HttpTypes.AdminExchangeResponse>
) => {
  const exchange = await refetchEntity({
    entity: "order_exchange",
    idOrFilter: req.params.id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  if (!exchange) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Exchange with id: ${req.params.id} was not found`
    )
  }

  res.status(200).json({ exchange })
}
