import { BandStoreContainer } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  isPresent,
  BandStoreError,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import { AdminPriceListRemoteQueryDTO } from "../types"
import { buildPriceListResponse } from "./"

export async function getPriceList({
  id,
  container,
  remoteQueryFields,
  apiFields,
}: {
  id: string
  container: BandStoreContainer
  remoteQueryFields: string[]
  apiFields: string[]
}): Promise<AdminPriceListRemoteQueryDTO> {
  const remoteQuery = container.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "price_list",
    fields: remoteQueryFields,
    variables: { id },
  })

  const priceLists = await remoteQuery(queryObject)
  const [sanitizedPriceList] = buildPriceListResponse(priceLists, apiFields)

  if (!isPresent(sanitizedPriceList)) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Price list with id: ${id} was not found`
    )
  }

  return sanitizedPriceList
}
