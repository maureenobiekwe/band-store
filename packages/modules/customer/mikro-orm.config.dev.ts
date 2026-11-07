import * as entities from "./src/models"
import { defineMikroOrmCliConfig, Modules } from "@band-store/framework/utils"

export default defineMikroOrmCliConfig(Modules.CUSTOMER, {
  entities: Object.values(entities),
})
