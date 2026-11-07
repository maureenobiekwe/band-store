import { convertDraftOrderWorkflow } from "@band-store/core-flows"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"
import { HttpTypes } from "@band-store/types"

export const POST = async (
  req: BandStoreRequest<HttpTypes.AdminDraftOrderParams>,
  res: BandStoreResponse<HttpTypes.AdminOrderResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  await convertDraftOrderWorkflow(req.scope).run({
    input: {
      id: req.params.id,
    },
  })

  const result = await query.graph({
    entity: "orders",
    filters: { id: req.params.id },
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ order: result.data[0] as HttpTypes.AdminOrder })
}
