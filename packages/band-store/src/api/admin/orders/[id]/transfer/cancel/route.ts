import { cancelOrderTransferRequestWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { AdminOrder, HttpTypes } from "@band-store/framework/types"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"

export const POST = async (
  req: AuthenticatedMedusaRequest<{}, HttpTypes.AdminGetOrderParams>,
  res: BandStoreResponse<HttpTypes.AdminOrderResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const orderId = req.params.id
  const userId = req.auth_context.actor_id

  await cancelOrderTransferRequestWorkflow(req.scope).run({
    input: {
      order_id: orderId,
      logged_in_user_id: userId,
      actor_type: req.auth_context.actor_type as "user",
    },
  })

  const result = await query.graph({
    entity: "order",
    filters: { id: orderId },
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ order: result.data[0] as AdminOrder })
}
