import { HttpTypes } from "@band-store/types"

export const LOYALTY_PLUGIN_NAME = "@band-store/loyalty-plugin"

export const getLoyaltyPlugin = (plugins: HttpTypes.AdminPlugin[]) => {
  return plugins?.find((plugin) => plugin.name === LOYALTY_PLUGIN_NAME)
}
