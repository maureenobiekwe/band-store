import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
} from "@band-store/framework/utils"
import { publishedProductsContext } from "../../utils/published-products-context"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.SelectParams>,
  res: BandStoreResponse<HttpTypes.StoreCollectionResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: collections } = await query.graph(
    {
      entity: "product_collection",
      filters: { id: req.params.id },
      fields: req.queryConfig.fields,
      context: publishedProductsContext(),
    },
    {
      locale: req.locale,
    }
  )

  const collection = collections[0]
  if (!collection) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Collection with id: ${req.params.id} was not found`
    )
  }

  res.status(200).json({ collection: collection })
}
