import { createExchangeShippingMethodWorkflow } from "@band-store/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { defaultAdminDetailsReturnFields } from "../../../../returns/query-config"
import { AdminPostReturnsShippingReqSchemaType } from "../../../../returns/validators"

export const POST = async (
  req: Authenticatedband-storeRequest<AdminPostReturnsShippingReqSchemaType>,
  res: BandStoreResponse<HttpTypes.AdminExchangeReturnResponse>
) => {
  const { id } = req.params

  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const [exchange] = await remoteQuery(
    remoteQueryObjectFromString({
      entryPoint: "order_exchange",
      variables: {
        id,
      },
      fields: ["id", "return_id"],
    }),
    {
      throwIfKeyNotFound: true,
    }
  )

  const { result } = await createExchangeShippingMethodWorkflow(req.scope).run({
    input: {
      ...req.validatedBody,
      return_id: exchange.return_id,
      exchange_id: id,
    },
  })

  const returnId = result.order_change.return_id
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "return",
    variables: {
      id: returnId,
    },
    fields: defaultAdminDetailsReturnFields,
  })

  const [orderReturn] = await remoteQuery(queryObject)

  res.json({
    order_preview: result as unknown as HttpTypes.AdminOrderPreview,
    return: orderReturn,
  })
}
