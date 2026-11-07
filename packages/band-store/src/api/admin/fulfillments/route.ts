import { createFulfillmentWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchFulfillment } from "./helpers"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminCreateFulfillment,
    HttpTypes.AdminFulfillmentParams
  >,
  res: BandStoreResponse<HttpTypes.AdminFulfillmentResponse>
) => {
  const { result: fullfillment } = await createFulfillmentWorkflow(
    req.scope
  ).run({
    input: {
      ...req.validatedBody,
      created_by: req.auth_context.actor_id,
    },
  })

  const fulfillment = await refetchFulfillment(
    fullfillment.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ fulfillment })
}
