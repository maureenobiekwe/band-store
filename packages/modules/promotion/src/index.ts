import { Module, Modules } from "@band-store/framework/utils"
import { PromotionModuleService } from "@services"

export default Module(Modules.PROMOTION, {
  service: PromotionModuleService,
})
