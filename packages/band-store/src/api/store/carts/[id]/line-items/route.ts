import { addToCartWorkflowId } from "@band-store/core-flows"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { AdditionalData } from "@band-store/types"
import { Modules } from "@band-store/utils"
import { refetchCart } from "../../helpers"

export const POST = async (
  req: BandStoreRequest<
    HttpTypes.StoreAddCartLineItem & AdditionalData,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StoreCartResponse>
) => {
  const we = req.scope.resolve(Modules.WORKFLOW_ENGINE)
  await we.run(addToCartWorkflowId, {
    input: {
      cart_id: req.params.id,
      items: [req.validatedBody],
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
