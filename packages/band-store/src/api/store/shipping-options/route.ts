import { listShippingOptionsForCartWorkflow } from "@band-store/core-flows"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: BandStoreRequest<{}, HttpTypes.StoreGetShippingOptionList>,
  res: BandStoreResponse<HttpTypes.StoreShippingOptionListResponse>
) => {
  const { cart_id, is_return } = req.filterableFields

  const workflow = listShippingOptionsForCartWorkflow(req.scope)
  const { result: shipping_options } = await workflow.run({
    input: {
      cart_id,
      is_return: !!is_return,
      fields: req.queryConfig.fields,
    },
  })

  res.json({ shipping_options })
}
