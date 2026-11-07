import { Authenticatedband-storeRequest, BandStoreResponse } from "@band-store/framework"
import { HttpTypes } from "@band-store/framework/types"
import {
  declineOrderTransferRequestWorkflow,
  getOrderDetailWorkflow,
} from "@band-store/core-flows"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.StoreDeclineOrderTransfer,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StoreOrderResponse>
) => {
  await declineOrderTransferRequestWorkflow(req.scope).run({
    input: {
      order_id: req.params.id,
      token: req.validatedBody.token,
    },
  })

  const { result } = await getOrderDetailWorkflow(req.scope).run({
    input: {
      fields: req.queryConfig.fields,
      order_id: req.params.id,
    },
  })

  res.status(200).json({ order: result as HttpTypes.StoreOrder })
}
