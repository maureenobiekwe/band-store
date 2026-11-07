import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
} from "@band-store/framework/utils"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

/**
 * @since 2.16.0
 */
export const GET = async (
  req: Authenticatedband-storeRequest<{}, HttpTypes.SelectParams>,
  res: BandStoreResponse<HttpTypes.StoreProductOptionResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data } = await query.graph(
    {
      entity: "product_option",
      filters: {
        id: req.params.id,
      },
      fields: req.queryConfig.fields,
    },
    {
      locale: req.locale,
    }
  )

  if (!data.length) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Product option with id: ${req.params.id} was not found`
    )
  }

  res.json({ product_option: data[0] })
}
