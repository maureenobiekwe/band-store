import { BandStoreContainer } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

export const refetchReservation = async (
  reservationId: string,
  scope: BandStoreContainer,
  fields: string[]
) => {
  const remoteQuery = scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "reservation",
    variables: {
      filters: { id: reservationId },
    },
    fields: fields,
  })

  const reservations = await remoteQuery(queryObject)
  return reservations[0]
}
