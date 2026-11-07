import { createOrderFulfillmentWorkflow } from "@band-store/core-flows"
import { AdditionalData, HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminCreateOrderFulfillment & AdditionalData,
    HttpTypes.AdminGetOrderParams
  >,
  res: BandStoreResponse<HttpTypes.AdminOrderResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  await createOrderFulfillmentWorkflow(req.scope).run({
    input: {
      ...req.validatedBody,
      order_id: req.params.id,
      created_by:
        req.secret_key_context?.created_by ?? req.auth_context.actor_id,
    },
  })

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order",
    variables: { id: req.params.id },
    fields: req.queryConfig.fields,
  })

  const [order] = await remoteQuery(queryObject)
  res.status(200).json({ order })
}
