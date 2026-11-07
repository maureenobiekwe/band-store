import { BandStoreContainer } from "@band-store/framework/types"
import { refetchEntity } from "@band-store/framework/http"

export const refetchOrder = async (
  idOrFilter: string | object,
  scope: BandStoreContainer,
  fields: string[]
) => {
  return await refetchEntity({ entity: "order", idOrFilter, scope, fields })
}
