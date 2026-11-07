import { IModuleService, ModuleJoinerConfig } from "@band-store/types"
import { defineJoinerConfig } from "@band-store/utils"

export class ModuleService implements IModuleService {
  __joinerConfig(): ModuleJoinerConfig {
    return defineJoinerConfig("module-service", {
      alias: [
        {
          name: ["custom_name"],
          entity: "Custom",
        },
      ],
    })
  }
}
