import { addDraftOrderShippingMethodsWorkflow } from "@band-store/core-flows"
import { Authenticatedband-storeRequest, BandStoreResponse } from "@band-store/framework"
import { HttpTypes } from "@band-store/types"
import { AdminAddDraftOrderShippingMethodType } from "../../../validators"

export const POST = async (
  req: Authenticatedband-storeRequest<AdminAddDraftOrderShippingMethodType>,
  res: BandStoreResponse
) => {
  const { id } = req.params

  const { result } = await addDraftOrderShippingMethodsWorkflow(req.scope).run({
    input: {
      order_id: id,
      ...req.validatedBody,
    },
  })

  res.json({
    draft_order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}
