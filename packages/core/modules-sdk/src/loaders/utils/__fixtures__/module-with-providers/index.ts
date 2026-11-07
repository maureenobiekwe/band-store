import { ModuleExports } from "@band-store/types"
import { ModuleService } from "./services/module-service"
import { Module } from "@band-store/utils"

const moduleExports: ModuleExports = {
  service: ModuleService,
}

export * from "./services/module-service"

export default Module("module-with-providers", moduleExports)
