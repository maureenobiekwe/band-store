import {
  removeDraftOrderActionShippingMethodWorkflow,
  updateDraftOrderActionShippingMethodWorkflow,
} from "@band-store/core-flows"
import { Authenticatedband-storeRequest, BandStoreResponse } from "@band-store/framework"
import { HttpTypes } from "@band-store/types"
import { AdminUpdateDraftOrderActionShippingMethodType } from "../../../../validators"

export const POST = async (
  req: Authenticatedband-storeRequest<AdminUpdateDraftOrderActionShippingMethodType>,
  res: BandStoreResponse
) => {
  const { id, action_id } = req.params

  const { result } = await updateDraftOrderActionShippingMethodWorkflow(
    req.scope
  ).run({
    input: {
      data: { ...req.validatedBody },
      order_id: id,
      action_id,
    },
  })

  res.json({
    draft_order_preview: result as unknown as HttpTypes.AdminDraftOrderPreview,
  })
}

export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse
) => {
  const { id, action_id } = req.params

  const { result } = await removeDraftOrderActionShippingMethodWorkflow(
    req.scope
  ).run({
    input: {
      order_id: id,
      action_id,
    },
  })

  res.json({
    draft_order_preview: result as unknown as HttpTypes.AdminDraftOrderPreview,
  })
}
