import { ModuleJoinerConfig } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"

export const OrderShippingOption: ModuleJoinerConfig = {
  isLink: true,
  isReadOnlyLink: true,
  extends: [
    {
      serviceName: Modules.ORDER,
      entity: "OrderShippingMethod",
      relationship: {
        serviceName: Modules.FULFILLMENT,
        primaryKey: "id",
        foreignKey: "shipping_option_id",
        alias: "shipping_option",
        args: {
          methodSuffix: "ShippingOptions",
        },
      },
    },
  ],
}
