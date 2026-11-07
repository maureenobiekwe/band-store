import { Module, Modules } from "@band-store/framework/utils"
import { ProductModuleService } from "@services"

export default Module(Modules.PRODUCT, {
  service: ProductModuleService,
})
