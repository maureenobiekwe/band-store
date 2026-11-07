import { deleteFulfillmentSetsWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"

import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminFulfillmentSetDeleteResponse>
) => {
  const { id } = req.params

  await deleteFulfillmentSetsWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "fulfillment_set",
    deleted: true,
  })
}
