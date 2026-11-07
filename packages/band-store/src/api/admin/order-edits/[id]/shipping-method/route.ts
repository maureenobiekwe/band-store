import { createOrderEditShippingMethodWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { AdminPostOrderEditsShippingReqSchemaType } from "../../validators"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminPostOrderEditsShippingReqSchemaType>,
  res: BandStoreResponse<HttpTypes.AdminOrderEditPreviewResponse>
) => {
  const { id } = req.params

  const { result } = await createOrderEditShippingMethodWorkflow(req.scope).run(
    {
      input: { ...req.validatedBody, order_id: id },
    }
  )

  res.json({
    order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}
