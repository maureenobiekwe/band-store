import {
  authenticate,
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@band-store/framework";
import { MiddlewareRoute } from "@band-store/band-store";
import { retrieveGiftCardTransformQueryConfig } from "./query-config";
import { StoreGetGiftCardParams, StoreRedeemGiftCard } from "./validators";

export const storeGiftCardsMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/store/gift-cards/:code",
    middlewares: [
      validateAndTransformQuery(
        StoreGetGiftCardParams,
        retrieveGiftCardTransformQueryConfig
      ),
    ],
  },
];
