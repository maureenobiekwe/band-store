import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminOrderChangesFilters>,
  res: BandStoreResponse<HttpTypes.AdminOrderChangesResponse>
) => {
  const { id } = req.params

  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order_change",
    variables: {
      filters: {
        ...req.filterableFields,
        order_id: id,
      },
    },
    fields: req.queryConfig.fields,
  })

  const order_changes = await remoteQuery(queryObject)

  res.status(200).json({ order_changes })
}
