import { deleteSearchIndexWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { BandStoreError, Modules } from "@band-store/framework/utils"

/**
 * Delete a search index and everything built for it.
 */
export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminSearchIndexDeleteResponse>
) => {
  const searchModule = req.scope.resolve(Modules.SEARCH, {
    allowUnregistered: true,
  })

  if (!searchModule) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      "The Search Module is not enabled"
    )
  }

  const { id } = req.params

  const { result } = await deleteSearchIndexWorkflow(req.scope).run({
    input: { index: id },
  })

  res.status(200).json({
    id,
    object: "search_index",
    deleted: true,
    deleted_versions: result.deleted_versions,
  })
}
