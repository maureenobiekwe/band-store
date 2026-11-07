import { HttpTypes, SettingsTypes } from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { Modules } from "@band-store/framework/utils"

/**
 * List all available entities that can be used for view configurations.
 * Entities are discovered from joiner configs (GraphQL schema).
 *
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const GET = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminEntityListResponse>
) => {
  const settingsService =
    req.scope.resolve<SettingsTypes.ISettingsModuleService>(Modules.SETTINGS)

  const entities = await settingsService.listDiscoverableEntities()

  entities.sort((a, b) => a.name.localeCompare(b.name))

  return res.json({
    entities,
  })
}
