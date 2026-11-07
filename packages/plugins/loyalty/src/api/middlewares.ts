import { defineMiddlewares } from "@band-store/framework"
import { allowFields } from "@band-store/framework/http"
import { MiddlewareRoute } from "@band-store/band-store"
import { adminGiftCardMiddlewares } from "./admin/gift-cards/middlewares"
import { adminStoreCreditAccountMiddlewares } from "./admin/store-credit-accounts/middlewares"
import { storeCartMiddlewares } from "./store/carts/middlewares"
import { giftCardRelationAllowedFields } from "./store/gift-cards/query-config"
import { storeGiftCardsMiddlewares } from "./store/gift-cards/middlewares"
import { storeStoreCreditAccountMiddlewares } from "./store/store-credit-accounts/middlewares"

const allowGiftCardRelation: MiddlewareRoute = {
  matcher: /^\/store\/(carts|orders)(?=\/|$)/,
  middlewares: [allowFields(giftCardRelationAllowedFields)],
}

export default defineMiddlewares({
  routes: [
    allowGiftCardRelation,
    ...adminGiftCardMiddlewares,
    ...storeGiftCardsMiddlewares,
    ...adminStoreCreditAccountMiddlewares,
    ...storeStoreCreditAccountMiddlewares,
    ...storeCartMiddlewares,
  ],
})
