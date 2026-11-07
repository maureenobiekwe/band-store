import { defineJoinerConfig, Modules } from "@band-store/framework/utils"

export const joinerConfig = defineJoinerConfig(Modules.FILE, {
  models: [{ name: "File" }],
})
