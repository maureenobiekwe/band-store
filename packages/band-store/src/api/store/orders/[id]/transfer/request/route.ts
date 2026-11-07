import {
  getOrderDetailWorkflow,
  requestOrderTransferWorkflow,
} from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.StoreRequestOrderTransfer,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StoreOrderResponse>
) => {
  const orderId = req.params.id
  const customerId = req.auth_context.actor_id

  await requestOrderTransferWorkflow(req.scope).run({
    input: {
      order_id: orderId,
      customer_id: customerId,
      logged_in_user: customerId,
      description: req.validatedBody.description,
      update_order_email: req.validatedBody.update_order_email,
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
