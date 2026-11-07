import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { linkProductsToSalesChannelWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import { refetchSalesChannel } from "../../helpers"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminBatchLink,
    HttpTypes.AdminGetSalesChannelParams
  >,
  res: BandStoreResponse<HttpTypes.AdminSalesChannelResponse>
) => {
  const { id } = req.params
  const { add, remove } = req.validatedBody

  const workflow = linkProductsToSalesChannelWorkflow(req.scope)
  await workflow.run({
    input: {
      id,
      add,
      remove,
    },
  })

  const salesChannel = await refetchSalesChannel(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )
  res.status(200).json({ sales_channel: salesChannel })
}
