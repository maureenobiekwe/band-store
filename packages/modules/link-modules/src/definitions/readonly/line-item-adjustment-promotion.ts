import { ModuleJoinerConfig } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"

export const LineItemAdjustmentPromotion: ModuleJoinerConfig = {
  isLink: true,
  isReadOnlyLink: true,
  extends: [
    {
      serviceName: Modules.CART,
      entity: "LineItemAdjustment",
      relationship: {
        serviceName: Modules.PROMOTION,
        entity: "Promotion",
        primaryKey: "id",
        foreignKey: "promotion_id",
        alias: "promotion",
        args: {
          methodSuffix: "Promotions",
        },
      },
    },
  ],
}
