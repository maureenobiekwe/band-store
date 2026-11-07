import { Module, Modules } from "@band-store/framework/utils"
import { StockLocationModuleService } from "@services"

export default Module(Modules.STOCK_LOCATION, {
  service: StockLocationModuleService,
})
