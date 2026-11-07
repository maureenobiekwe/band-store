import { markOrderFulfillmentAsDeliveredWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
  refetchEntity,
} from "@band-store/framework/http"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminMarkOrderFulfillmentAsDelivered,
    HttpTypes.AdminGetOrderParams
  >,
  res: BandStoreResponse<HttpTypes.AdminOrderResponse>
) => {
  const { id: orderId, fulfillment_id: fulfillmentId } = req.params

  await markOrderFulfillmentAsDeliveredWorkflow(req.scope).run({
    input: {
      orderId,
      fulfillmentId,
      no_notification: req.validatedBody.no_notification,
    },
  })

  const order = await refetchEntity({
    entity: "order",
    idOrFilter: orderId,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ order })
}
