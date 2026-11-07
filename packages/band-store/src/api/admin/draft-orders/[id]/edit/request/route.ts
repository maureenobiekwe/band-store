import { requestDraftOrderEditWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/types"

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse
) => {
  const { id } = req.params

  const { result } = await requestDraftOrderEditWorkflow(req.scope).run({
    input: {
      order_id: id,
      requested_by: req.auth_context.actor_id,
    },
  })

  res.json({
    draft_order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}
