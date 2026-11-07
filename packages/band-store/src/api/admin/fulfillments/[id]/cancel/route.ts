import { cancelFulfillmentWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchFulfillment } from "../../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: Authenticatedband-storeRequest<{}, HttpTypes.AdminFulfillmentParams>,
  res: BandStoreResponse<HttpTypes.AdminFulfillmentResponse>
) => {
  const { id } = req.params
  await cancelFulfillmentWorkflow(req.scope).run({
    input: { id },
  })

  const fulfillment = await refetchFulfillment(
    id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ fulfillment })
}
