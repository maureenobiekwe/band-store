import { BandStoreService } from "@band-store/utils"
import { Brand } from "./models/brand"

export class BrandModuleService extends BandStoreService({
  Brand,
}) {}
