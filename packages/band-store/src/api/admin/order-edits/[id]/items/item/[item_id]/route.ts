import { orderEditUpdateItemQuantityWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { AdminPostOrderEditsUpdateItemQuantityReqSchemaType } from "../../../../validators"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminPostOrderEditsUpdateItemQuantityReqSchemaType>,
  res: BandStoreResponse<HttpTypes.AdminOrderEditPreviewResponse>
) => {
  const { id, item_id } = req.params

  const { result } = await orderEditUpdateItemQuantityWorkflow(req.scope).run({
    input: {
      ...req.validatedBody,
      order_id: id,
      items: [
        {
          ...req.validatedBody,
          id: item_id,
        },
      ],
    },
  })

  res.json({
    order_preview: result as unknown as HttpTypes.AdminOrderPreview,
  })
}
