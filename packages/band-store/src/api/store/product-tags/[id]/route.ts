import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { StoreProductTagResponse } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
} from "@band-store/framework/utils"

import { StoreProductTagParamsType } from "../validators"
import { publishedProductsContext } from "../../utils/published-products-context"

export const GET = async (
  req: Authenticatedband-storeRequest<StoreProductTagParamsType>,
  res: BandStoreResponse<StoreProductTagResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data } = await query.graph(
    {
      entity: "product_tag",
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
      `Product tag with id: ${req.params.id} was not found`
    )
  }

  const productTag = data[0]

  res.json({ product_tag: productTag })
}
