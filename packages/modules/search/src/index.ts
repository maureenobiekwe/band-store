import "./types"

import { Module, Modules } from "@band-store/framework/utils"
import { SearchModuleService } from "@services"
import providersLoader from "./loaders/providers"

export default Module(Modules.SEARCH, {
  service: SearchModuleService,
  loaders: [providersLoader],
})
