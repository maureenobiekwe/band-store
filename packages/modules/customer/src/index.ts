import { CustomerModuleService } from "@services"
import { Module, Modules } from "@band-store/framework/utils"

export default Module(Modules.CUSTOMER, {
  service: CustomerModuleService,
})
