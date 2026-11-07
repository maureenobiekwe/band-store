import { BandStoreContainer } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

export const refetchFulfillment = async (
  fulfillmentId: string,
  scope: BandStoreContainer,
  fields: string[]
) => {
  const remoteQuery = scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "fulfillments",
    variables: {
      filters: { id: fulfillmentId },
    },
    fields: fields,
  })

  const [fulfillment] = await remoteQuery(queryObject)

  return fulfillment
}
