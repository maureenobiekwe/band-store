import { StoreModuleService } from "@services"
import { Module, Modules } from "@band-store/framework/utils"

export default Module(Modules.STORE, {
  service: StoreModuleService,
})
