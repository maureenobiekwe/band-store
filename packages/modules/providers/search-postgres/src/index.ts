import { ModuleProvider, Modules } from "@band-store/framework/utils"
import { PostgresSearchService } from "./services/postgres-search"

const services = [PostgresSearchService]

export default ModuleProvider(Modules.SEARCH, {
  services,
})
