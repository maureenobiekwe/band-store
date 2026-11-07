import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { Modules } from "@band-store/framework/utils"

/**
 * List registered search indexes, their status, and the fields each stores.
 */
export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminSearchIndexListResponse>
) => {
  const searchModule = req.scope.resolve(Modules.SEARCH, {
    allowUnregistered: true,
  })

  if (!searchModule) {
    res.json({ search_indexes: [], enabled: false })
    return
  }

  const search_indexes = await searchModule.listIndexes()

  res.json({ search_indexes, enabled: true })
}
