import { ModuleExports } from "@band-store/types"
import { ModuleService } from "./services/module-service"

const moduleExports: ModuleExports = {
  service: ModuleService,
}

export default moduleExports
