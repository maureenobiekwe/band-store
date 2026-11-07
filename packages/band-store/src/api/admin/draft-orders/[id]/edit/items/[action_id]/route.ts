import {
  removeDraftOrderActionItemWorkflow,
  updateDraftOrderActionItemWorkflow,
} from "@band-store/core-flows"
import { AuthenticatedMedusaRequest, BandStoreResponse } from "@band-store/framework"
import { HttpTypes } from "@band-store/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminUpdateDraftOrderActionItem>,
  res: BandStoreResponse
) => {
  const { id, action_id } = req.params

  const { result } = await updateDraftOrderActionItemWorkflow(req.scope).run({
    input: {
      data: req.validatedBody,
      order_id: id,
      action_id,
    },
  })

  res.json({
    draft_order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse
) => {
  const { id, action_id } = req.params

  const { result } = await removeDraftOrderActionItemWorkflow(req.scope).run({
    input: {
      order_id: id,
      action_id,
    },
  })

  res.json({
    draft_order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}
