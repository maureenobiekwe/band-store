import {
  cancelOrderTransferRequestWorkflow,
  getOrderDetailWorkflow,
} from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: Authenticatedband-storeRequest<{}, HttpTypes.SelectParams>,
  res: BandStoreResponse<HttpTypes.StoreOrderResponse>
) => {
  const orderId = req.params.id
  const customerId = req.auth_context.actor_id

  await cancelOrderTransferRequestWorkflow(req.scope).run({
    input: {
      order_id: orderId,
      logged_in_user_id: customerId,
      actor_type: req.auth_context.actor_type as "customer",
    },
  })

  const { result } = await getOrderDetailWorkflow(req.scope).run({
    input: {
      fields: req.queryConfig.fields,
      order_id: orderId,
    },
  })

  res.status(200).json({ order: result as HttpTypes.StoreOrder })
}
