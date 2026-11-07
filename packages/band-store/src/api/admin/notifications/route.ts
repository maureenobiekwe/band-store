import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
  refetchEntities,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminNotificationListParams>,
  res: BandStoreResponse<HttpTypes.AdminNotificationListResponse>
) => {
  const { data: notifications, metadata } = await refetchEntities({
    entity: "notification",
    idOrFilter: req.filterableFields,
    scope: req.scope,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  })

  res.json({
    notifications,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
