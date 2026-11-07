import { BandStoreContainer } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

export const refetchCart = async (
  id: string,
  scope: BandStoreContainer,
  fields: string[]
) => {
  const remoteQuery = scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "cart",
    variables: { filters: { id } },
    fields,
  })

  const [cart] = await remoteQuery(queryObject)

  if (!cart) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Cart with id '${id}' not found`
    )
  }

  return cart
}
