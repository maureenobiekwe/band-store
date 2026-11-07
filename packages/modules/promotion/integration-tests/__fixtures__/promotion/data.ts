import { CreatePromotionDTO } from "@band-store/framework/types"
import { PromotionType } from "@band-store/framework/utils"

export const defaultPromotionsData: CreatePromotionDTO[] = [
  {
    id: "promotion-id-1",
    code: "PROMOTION_1",
    type: PromotionType.STANDARD,
    application_method: {
      currency_code: "usd",
      target_type: "items",
      type: "fixed",
      allocation: "across",
      value: 1000,
    },
  },
  {
    id: "promotion-id-2",
    code: "PROMOTION_2",
    type: PromotionType.STANDARD,
    application_method: {
      currency_code: "usd",
      target_type: "items",
      type: "fixed",
      allocation: "across",
      value: 1000,
    },
  },
]
