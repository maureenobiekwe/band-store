import { Authenticatedband-storeRequest, BandStoreResponse } from "@band-store/framework"
import { HttpTypes } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"

/**
 * Get the index information for all entities that are indexed and their sync state
 *
 * @since 2.11.2
 * @featureFlag index
 */
export const GET = async (
  req: Authenticatedband-storeRequest<void>,
  res: BandStoreResponse<HttpTypes.AdminIndexDetailsResponse>
) => {
  const indexModuleService = req.scope.resolve(Modules.INDEX)
  const indexInfo = await indexModuleService.getInfo()
  res.json({
    metadata: indexInfo,
  })
}
