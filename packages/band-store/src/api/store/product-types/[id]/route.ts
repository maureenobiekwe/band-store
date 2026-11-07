import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { StoreProductTypeResponse } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
} from "@band-store/framework/utils"

import { StoreProductTypeParamsType } from "../validators"
import { publishedProductsContext } from "../../utils/published-products-context"

export const GET = async (
  req: Authenticatedband-storeRequest<StoreProductTypeParamsType>,
  res: BandStoreResponse<StoreProductTypeResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data } = await query.graph(
    {
      entity: "product_type",
      filters: {
        id: req.params.id,
      },
      fields: req.queryConfig.fields,
      context: publishedProductsContext(),
    },
    {
      locale: req.locale,
    }
  )

  if (!data.length) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Product type with id: ${req.params.id} was not found`
    )
  }

  const productType = data[0]

  res.json({ product_type: productType })
}
