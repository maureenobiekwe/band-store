import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
  refetchEntity,
} from "@band-store/framework/http"
import { AdminGetNotificationParamsType } from "../validators"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<AdminGetNotificationParamsType>,
  res: BandStoreResponse<HttpTypes.AdminNotificationResponse>
) => {
  const notification = await refetchEntity({
    entity: "notification",
    idOrFilter: req.params.id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ notification })
}
