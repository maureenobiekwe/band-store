import { ModuleExports } from "@band-store/framework/types"
import InMemoryCacheService from "./services/inmemory-cache"

const service = InMemoryCacheService

const moduleDefinition: ModuleExports = {
  service,
}

export default moduleDefinition
export * from "./initialize"
export * from "./types"
