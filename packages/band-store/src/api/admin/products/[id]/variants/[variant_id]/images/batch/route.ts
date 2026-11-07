import { batchVariantImagesWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

/**
 * @since 2.11.2
 */
export const POST = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminBatchVariantImagesRequest>,
  res: BandStoreResponse<HttpTypes.AdminBatchVariantImagesResponse>
) => {
  const variantId = req.params.variant_id

  const { result } = await batchVariantImagesWorkflow(req.scope).run({
    input: {
      variant_id: variantId,
      add: req.validatedBody.add,
      remove: req.validatedBody.remove,
    },
  })

  res.status(200).json({
    added: result.added,
    removed: result.removed,
  })
}
