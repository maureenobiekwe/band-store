import { updateTaxLinesWorkflow } from "@band-store/core-flows"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { refetchCart } from "../../helpers"

export const POST = async (
  req: BandStoreRequest<{}, HttpTypes.StoreCalculateCartTaxes>,
  res: BandStoreResponse<HttpTypes.StoreCartResponse>
) => {
  await updateTaxLinesWorkflow(req.scope).run({
    input: {
      cart_id: req.params.id,
      force_tax_calculation: true,
    },
  })

  const cart = await refetchCart(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ cart })
}
