import { createShipmentWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchFulfillment } from "../../helpers"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminCreateFulfillmentShipment,
    HttpTypes.AdminFulfillmentParams
  >,
  res: BandStoreResponse<HttpTypes.AdminFulfillmentResponse>
) => {
  const { id } = req.params

  await createShipmentWorkflow(req.scope).run({
    input: {
      ...req.validatedBody,
      id,
      marked_shipped_by: req.auth_context.actor_id,
    },
  })

  const fulfillment = await refetchFulfillment(
    id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ fulfillment })
}
