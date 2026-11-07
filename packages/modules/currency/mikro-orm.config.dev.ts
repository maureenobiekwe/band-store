import { defineMikroOrmCliConfig, Modules } from "@band-store/framework/utils"
import * as entities from "./src/models"

export default defineMikroOrmCliConfig(Modules.CURRENCY, {
  entities: Object.values(entities),
})
