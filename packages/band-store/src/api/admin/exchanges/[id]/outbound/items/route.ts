import { orderExchangeAddNewItemWorkflow } from "@band-store/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminAddExchangeOutboundItems,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.AdminExchangePreviewResponse>
) => {
  const { id } = req.params

  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const { result } = await orderExchangeAddNewItemWorkflow(req.scope).run({
    input: { ...req.validatedBody, exchange_id: id },
  })

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "order_exchange",
    variables: {
      id,
      filters: {
        ...req.filterableFields,
      },
    },
    fields: req.queryConfig.fields,
  })

  const [orderExchange] = await remoteQuery(queryObject)

  res.json({
    order_preview: result as unknown as HttpTypes.AdminOrderPreview,
    exchange: orderExchange,
  })
}
