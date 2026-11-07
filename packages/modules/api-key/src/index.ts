import { Module, Modules } from "@band-store/framework/utils"
import { ApiKeyModuleService } from "@services"

export default Module(Modules.API_KEY, {
  service: ApiKeyModuleService,
})
