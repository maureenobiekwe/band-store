import { BandStoreContainer } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

export const refetchCustomerGroup = async (
  customerGroupId: string,
  scope: BandStoreContainer,
  fields: string[]
) => {
  const remoteQuery = scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "customer_group",
    variables: {
      filters: { id: customerGroupId },
    },
    fields: fields,
  })

  const customerGroups = await remoteQuery(queryObject)
  return customerGroups[0]
}
