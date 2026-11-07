import { addShippingMethodToCartWorkflow } from "@band-store/core-flows"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { AdditionalData, HttpTypes } from "@band-store/framework/types"
import { refetchCart } from "../../helpers"

export const POST = async (
  req: BandStoreRequest<
    HttpTypes.StoreAddCartShippingMethods & AdditionalData,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StoreCartResponse>
) => {
  const payload = req.validatedBody

  const normalizedOptions = Array.isArray(payload) ? payload : [payload]

  await addShippingMethodToCartWorkflow(req.scope).run({
    input: {
      options: normalizedOptions.map((option) => ({
        id: option.option_id,
        data: option.data,
      })),
      cart_id: req.params.id,
      additional_data: payload.additional_data,
    },
  })

  const cart = await refetchCart(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ cart })
}
