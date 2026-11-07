import {
  addDraftOrderPromotionWorkflow,
  removeDraftOrderPromotionsWorkflow,
} from "@band-store/core-flows"
import { AuthenticatedMedusaRequest, BandStoreResponse } from "@band-store/framework"
import { HttpTypes } from "@band-store/types"
import {
  AdminAddDraftOrderPromotionsType,
  AdminRemoveDraftOrderPromotionsType,
} from "../../../validators"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminAddDraftOrderPromotionsType>,
  res: BandStoreResponse<HttpTypes.AdminDraftOrderPreviewResponse>
) => {
  const { id } = req.params

  const { result } = await addDraftOrderPromotionWorkflow(req.scope).run({
    input: {
      ...req.validatedBody,
      order_id: id,
    },
  })

  res.json({
    draft_order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest<AdminRemoveDraftOrderPromotionsType>,
  res: BandStoreResponse<HttpTypes.AdminDraftOrderPreviewResponse>
) => {
  const { id } = req.params

  const { result } = await removeDraftOrderPromotionsWorkflow(req.scope).run({
    input: {
      ...req.validatedBody,
      order_id: id,
    },
  })

  res.json({
    draft_order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}
