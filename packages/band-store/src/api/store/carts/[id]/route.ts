import { updateCartWorkflowId } from "@band-store/core-flows"
import { AdditionalData, HttpTypes } from "@band-store/framework/types"

import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { Modules } from "@band-store/framework/utils"
import { refetchCart } from "../helpers"

export const GET = async (
  req: BandStoreRequest<HttpTypes.StoreGetCartsCart>,
  res: BandStoreResponse<HttpTypes.StoreCartResponse>
) => {
  const cart = await refetchCart(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.json({ cart })
}

export const POST = async (
  req: BandStoreRequest<
    HttpTypes.StoreUpdateCart & AdditionalData,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<{
    cart: HttpTypes.StoreCart
  }>
) => {
  const we = req.scope.resolve(Modules.WORKFLOW_ENGINE)

  await we.run(updateCartWorkflowId, {
    input: {
      ...req.validatedBody,
      id: req.params.id,
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
