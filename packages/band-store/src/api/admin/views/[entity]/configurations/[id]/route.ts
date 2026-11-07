import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { AdminUpdateViewConfigurationType } from "../validators"
import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
  Modules,
} from "@band-store/framework/utils"
import { updateViewConfigurationWorkflow } from "@band-store/core-flows"

/**
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetViewConfigurationParams>,
  res: BandStoreResponse<HttpTypes.AdminViewConfigurationResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [viewConfiguration],
  } = await query.graph({
    entity: "view_configuration",
    fields: req.queryConfig.fields,
    filters: { id: req.params.id, entity: req.params.entity },
  })

  if (!viewConfiguration) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `View configuration with id: ${req.params.id} not found`
    )
  }

  if (
    viewConfiguration.user_id &&
    viewConfiguration.user_id !== req.auth_context.actor_id &&
    !req.auth_context.app_metadata?.admin
  ) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_ALLOWED,
      "You don't have access to this view configuration"
    )
  }

  res.json({ view_configuration: viewConfiguration })
}

/**
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const POST = async (
  req: Authenticatedband-storeRequest<AdminUpdateViewConfigurationType>,
  res: BandStoreResponse<HttpTypes.AdminViewConfigurationResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  // Fetch existing for permission check
  const {
    data: [existing],
  } = await query.graph({
    entity: "view_configuration",
    fields: ["id", "user_id", "is_system_default"],
    filters: { id: req.params.id, entity: req.params.entity },
  })

  if (!existing) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `View configuration with id: ${req.params.id} not found`
    )
  }

  if (existing.user_id && existing.user_id !== req.auth_context.actor_id) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_ALLOWED,
      "You can only update your own view configurations"
    )
  }

  const input = {
    id: req.params.id,
    ...req.validatedBody,
  }

  await updateViewConfigurationWorkflow(req.scope).run({
    input,
  })

  const {
    data: [viewConfiguration],
  } = await query.graph({
    entity: "view_configuration",
    fields: req.queryConfig.fields,
    filters: { id: req.params.id, entity: req.params.entity },
  })

  res.json({ view_configuration: viewConfiguration })
}

/**
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminViewConfigurationDeleteResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const settingsService = req.scope.resolve(Modules.SETTINGS)

  // Fetch existing to check permissions
  const {
    data: [existing],
  } = await query.graph({
    entity: "view_configuration",
    fields: ["id", "user_id", "is_system_default", "entity", "name"],
    filters: { id: req.params.id, entity: req.params.entity },
  })

  if (!existing) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `View configuration with id: ${req.params.id} not found`
    )
  }

  if (existing.user_id && existing.user_id !== req.auth_context.actor_id) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_ALLOWED,
      "You can only delete your own view configurations"
    )
  }

  await settingsService.deleteViewConfigurations(req.params.id)

  res.status(200).json({
    id: req.params.id,
    object: "view_configuration",
    deleted: true,
  })
}
