import {
  createOrderShipmentWorkflow,
  CreateOrderShipmentWorkflowInput,
} from "@band-store/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { AdditionalData, HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminCreateOrderShipment & AdditionalData,
    HttpTypes.AdminGetOrderParams
  >,
  res: BandStoreResponse<HttpTypes.AdminOrderResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const variables = { id: req.params.id }

  const input: CreateOrderShipmentWorkflowInput = {
    ...req.validatedBody,
    order_id: req.params.id,
    fulfillment_id: req.params.fulfillment_id,
    labels: req.validatedBody.labels ?? [],
    created_by: req.secret_key_context?.created_by ?? req.auth_context.actor_id,
  }

  await createOrderShipmentWorkflow(req.scope).run({
    input,
  })

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order",
    variables,
    fields: req.queryConfig.fields,
  })

  const [order] = await remoteQuery(queryObject)
  res.status(200).json({ order })
}
