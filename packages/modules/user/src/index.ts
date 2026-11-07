import { UserModuleService } from "@services"
import { Module, Modules } from "@band-store/framework/utils"

export default Module(Modules.USER, {
  service: UserModuleService,
})
