import { Authenticatedband-storeRequest, BandStoreResponse } from "@band-store/framework"
import { HttpTypes } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"

/**
 * @since 2.11.2
 * @featureFlag index
 */
export const POST = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminIndexSyncPayload>,
  res: BandStoreResponse
) => {
  const indexService = req.scope.resolve(Modules.INDEX)
  const strategy = req.validatedBody.strategy

  await indexService.sync({ strategy })

  res.send(200)
}
