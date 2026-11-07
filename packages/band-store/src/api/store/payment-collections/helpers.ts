import {
  BandStoreContainer,
  PaymentCollectionDTO,
} from "@band-store/framework/types"
import { refetchEntity } from "@band-store/framework/http"

export const refetchPaymentCollection = async (
  id: string,
  scope: BandStoreContainer,
  fields: string[]
): Promise<PaymentCollectionDTO> => {
  return refetchEntity({
    entity: "payment_collection",
    idOrFilter: id,
    scope,
    fields,
  })
}
