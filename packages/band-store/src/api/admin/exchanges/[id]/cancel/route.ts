import { cancelOrderExchangeWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { AdminPostCancelExchangeReqSchemaType } from "../../validators"

export const POST = async (
  req: Authenticatedband-storeRequest<AdminPostCancelExchangeReqSchemaType>,
  res: BandStoreResponse<HttpTypes.AdminExchangeResponse>
) => {
  const { id } = req.params

  const workflow = cancelOrderExchangeWorkflow(req.scope)
  const { result } = await workflow.run({
    input: {
      ...req.validatedBody,
      exchange_id: id,
      canceled_by: req.auth_context.actor_id,
    },
  })

  res.status(200).json({ exchange: result as HttpTypes.AdminExchange })
}
