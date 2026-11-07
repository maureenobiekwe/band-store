import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes, SettingsTypes } from "@band-store/framework/types"
import { BandStoreError, Modules } from "@band-store/framework/utils"
import { filterReadableColumns } from "./helpers"

/**
 * Get available columns for an entity.
 *
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const GET = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminViewsEntityColumnsResponse>
) => {
  const entity = req.params.entity

  const settingsService =
    req.scope.resolve<SettingsTypes.ISettingsModuleService>(Modules.SETTINGS)

  if (!settingsService.isEntityDiscoveryInitialized()) {
    throw new BandStoreError(
      BandStoreError.Types.UNEXPECTED_STATE,
      "Entity discovery has not been initialized. Please ensure the application has fully started."
    )
  }

  if (!settingsService.hasEntity(entity)) {
    const availableEntities = await settingsService.listDiscoverableEntities()
    const entityNames = availableEntities.map((e) => e.pluralName).slice(0, 10)

    throw new BandStoreError(
      BandStoreError.Types.INVALID_DATA,
      `Unsupported entity: ${entity}. Available entities include: ${entityNames.join(
        ", "
      )}${availableEntities.length > 10 ? "..." : ""}`
    )
  }

  const columns = await settingsService.generateEntityColumns(entity)

  if (!columns) {
    throw new BandStoreError(
      BandStoreError.Types.UNEXPECTED_STATE,
      `Failed to generate columns for entity: ${entity}`
    )
  }

  return res.json({
    columns: await filterReadableColumns(req, entity, columns),
  })
}
