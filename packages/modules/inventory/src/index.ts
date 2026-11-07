import InventoryModuleService from "./services/inventory-module"
import { Module, Modules } from "@band-store/framework/utils"

export default Module(Modules.INVENTORY, {
  service: InventoryModuleService,
})
