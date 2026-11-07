import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"

/**
 * @since 2.17.2
 */
export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetLayoutConfigurationsParams>,
  res: BandStoreResponse<HttpTypes.AdminLayoutConfigurationListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const filters = {
    ...req.filterableFields,
    $or: [{ user_id: req.auth_context.actor_id }, { is_system_default: true }],
  }

  const { data: layout_configurations, metadata } = await query.graph({
    entity: "layout_configuration",
    fields: req.queryConfig.fields,
    filters,
    pagination: req.queryConfig.pagination,
  })

  res.json({
    layout_configurations,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 20,
  })
}
