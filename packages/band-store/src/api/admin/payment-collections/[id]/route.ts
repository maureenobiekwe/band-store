import { deleteOrderPaymentCollections } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminDeletePaymentCollectionResponse>
) => {
  const { id } = req.params

  await deleteOrderPaymentCollections(req.scope).run({
    input: { id },
  })

  res.status(200).json({
    id,
    object: "payment-collection",
    deleted: true,
  })
}
