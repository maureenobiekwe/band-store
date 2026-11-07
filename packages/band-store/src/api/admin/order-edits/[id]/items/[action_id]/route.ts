import {
  removeItemOrderEditActionWorkflow,
  updateOrderEditAddItemWorkflow,
} from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { AdminPostOrderEditsItemsActionReqSchemaType } from "../../../validators"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminPostOrderEditsItemsActionReqSchemaType>,
  res: BandStoreResponse<HttpTypes.AdminOrderEditPreviewResponse>
) => {
  const { id, action_id } = req.params

  const { result } = await updateOrderEditAddItemWorkflow(req.scope).run({
    input: {
      data: { ...req.validatedBody },
      order_id: id,
      action_id,
    },
  })

  res.json({
    order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminOrderEditPreviewResponse>
) => {
  const { id, action_id } = req.params

  const { result: orderPreview } = await removeItemOrderEditActionWorkflow(
    req.scope
  ).run({
    input: {
      order_id: id,
      action_id,
    },
  })

  res.json({
    order_preview: orderPreview as unknown as HttpTypes.AdminOrderPreview,
  })
}
