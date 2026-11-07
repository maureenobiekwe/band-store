import { transferCartCustomerWorkflowId } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"

import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { Modules } from "@band-store/framework/utils"
import { AdditionalData } from "@band-store/types"
import { refetchCart } from "../../helpers"

export const POST = async (
  req: Authenticatedband-storeRequest<AdditionalData, HttpTypes.SelectParams>,
  res: BandStoreResponse<HttpTypes.StoreCartResponse>
) => {
  const we = req.scope.resolve(Modules.WORKFLOW_ENGINE)

  await we.run(transferCartCustomerWorkflowId, {
    input: {
      id: req.params.id,
      customer_id: req.auth_context?.actor_id,
      additional_data: req.validatedBody.additional_data,
    },
  })

  const cart = await refetchCart(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ cart })
}
