import * as entities from "./src/models"

import { defineMikroOrmCliConfig } from "@band-store/framework/utils"

export default defineMikroOrmCliConfig("lockingPostgres", {
  entities: Object.values(entities),
})
