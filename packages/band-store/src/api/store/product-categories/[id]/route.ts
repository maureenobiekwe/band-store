import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { StoreProductCategoryResponse } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
} from "@band-store/framework/utils"
import { StoreProductCategoryParamsType } from "../validators"
import { publishedProductsContext } from "../../utils/published-products-context"

export const GET = async (
  req: Authenticatedband-storeRequest<StoreProductCategoryParamsType>,
  res: BandStoreResponse<StoreProductCategoryResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: category } = await query.graph(
    {
      entity: "product_category",
      filters: { id: req.params.id, ...req.filterableFields },
      fields: req.queryConfig.fields,
      context: publishedProductsContext(),
    },
    {
      locale: req.locale,
    }
  )

  if (!category) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Product category with id: ${req.params.id} was not found`
    )
  }

  res.json({ product_category: category[0] })
}
