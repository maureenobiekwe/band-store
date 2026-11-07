import { batchPriceListPricesWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import { BandStoreError } from "@band-store/framework/utils"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { fetchPriceList, fetchPriceListPriceIdsForProduct } from "../../helpers"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminLinkPriceListProducts,
    HttpTypes.AdminPriceListParams
  >,
  res: BandStoreResponse<HttpTypes.AdminPriceListResponse>
) => {
  const id = req.params.id
  const { remove = [] } = req.validatedBody

  if (!remove.length) {
    throw new BandStoreError(
      BandStoreError.Types.INVALID_DATA,
      "No product ids passed to remove from price list"
    )
  }

  const productPriceIds = await fetchPriceListPriceIdsForProduct(
    id,
    remove,
    req.scope
  )

  const workflow = batchPriceListPricesWorkflow(req.scope)
  await workflow.run({
    input: {
      data: {
        id,
        create: [],
        update: [],
        delete: productPriceIds,
      },
    },
  })

  const priceList = await fetchPriceList(id, req.scope, req.queryConfig.fields)

  res.status(200).json({ price_list: priceList })
}
