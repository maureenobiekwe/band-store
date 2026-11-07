import {
  AdminFulfillmentProviderOption,
  HttpTypes,
} from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const GET = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminFulfillmentProviderOptionsListResponse>
) => {
  const fulfillmentProviderService = req.scope.resolve(Modules.FULFILLMENT)

  const fulfillmentOptions =
    await fulfillmentProviderService.retrieveFulfillmentOptions(req.params.id)

  res.json({
    fulfillment_options:
      fulfillmentOptions as unknown as AdminFulfillmentProviderOption[],
    count: fulfillmentOptions.length,
    limit: fulfillmentOptions.length,
    offset: 0,
  })
}
