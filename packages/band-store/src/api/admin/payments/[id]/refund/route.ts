import { refundPaymentWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchPayment } from "../../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminRefundPayment,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.AdminPaymentResponse>
) => {
  const { id } = req.params
  await refundPaymentWorkflow(req.scope).run({
    input: {
      payment_id: id,
      created_by: req.auth_context.actor_id,
      ...req.validatedBody,
    },
  })

  const payment = await refetchPayment(id, req.scope, req.queryConfig.fields)

  res.status(200).json({ payment })
}
