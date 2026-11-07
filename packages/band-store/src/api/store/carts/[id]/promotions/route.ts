import { updateCartPromotionsWorkflowId } from "@band-store/core-flows"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { Modules, PromotionActions } from "@band-store/framework/utils"
import { refetchCart } from "../../helpers"

export const POST = async (
  req: BandStoreRequest<HttpTypes.StoreCartAddPromotion, HttpTypes.SelectParams>,
  res: BandStoreResponse<HttpTypes.StoreCartResponse>
) => {
  const we = req.scope.resolve(Modules.WORKFLOW_ENGINE)
  const payload = req.validatedBody

  await we.run(updateCartPromotionsWorkflowId, {
    input: {
      promo_codes: payload.promo_codes,
      cart_id: req.params.id,
      action:
        payload.promo_codes.length > 0
          ? PromotionActions.ADD
          : PromotionActions.REPLACE,
      force_refresh_payment_collection: true,
    },
  })

  const cart = await refetchCart(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ cart })
}

export const DELETE = async (
  req: BandStoreRequest<
    HttpTypes.StoreCartRemovePromotion,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<{
    cart: HttpTypes.StoreCart
  }>
) => {
  const we = req.scope.resolve(Modules.WORKFLOW_ENGINE)
  const payload = req.validatedBody

  await we.run(updateCartPromotionsWorkflowId, {
    input: {
      promo_codes: payload.promo_codes,
      cart_id: req.params.id,
      action: PromotionActions.REMOVE,
      force_refresh_payment_collection: true,
    },
  })

  const cart = await refetchCart(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ cart })
}
