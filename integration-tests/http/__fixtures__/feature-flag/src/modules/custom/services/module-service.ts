import { IModuleService } from "@band-store/types"
import { BandStoreContext } from "@band-store/utils"

// @ts-expect-error
export class ModuleService implements IModuleService {
  public property = "value"

  constructor() {}
  async methodName(input, @BandStoreContext() context) {
    return input + " called"
  }
}
