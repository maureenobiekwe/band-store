import { batchImageVariantsWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

/**
 * @since 2.11.2
 */
export const POST = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminBatchImageVariantRequest>,
  res: BandStoreResponse<HttpTypes.AdminBatchImageVariantResponse>
) => {
  const imageId = req.params.image_id

  const { result } = await batchImageVariantsWorkflow(req.scope).run({
    input: {
      image_id: imageId,
      add: req.validatedBody.add,
      remove: req.validatedBody.remove,
    },
  })

  res.status(200).json({
    added: result.added,
    removed: result.removed,
  })
}
