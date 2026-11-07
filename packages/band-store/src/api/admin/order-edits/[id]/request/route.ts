import { requestOrderEditRequestWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const POST = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminRequestOrderEdit>,
  res: BandStoreResponse<HttpTypes.AdminOrderEditPreviewResponse>
) => {
  const { id } = req.params

  const { result } = await requestOrderEditRequestWorkflow(req.scope).run({
    input: {
      order_id: id,
      requested_by: req.auth_context.actor_id,
      no_notification: req.validatedBody?.no_notification,
    },
  })

  res.json({
    order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}
