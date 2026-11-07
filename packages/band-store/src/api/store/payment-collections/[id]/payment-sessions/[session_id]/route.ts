import { updatePaymentSessionClientDataWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { refetchPaymentCollection } from "../../../helpers"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.StoreUpdatePaymentSession,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StorePaymentCollectionResponse>
) => {
  const { id, session_id } = req.params

  await updatePaymentSessionClientDataWorkflow(req.scope).run({
    input: {
      payment_collection_id: id,
      payment_session_id: session_id,
      client_data: req.validatedBody.client_data,
    },
  })

  const paymentCollection = await refetchPaymentCollection(
    id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({
    payment_collection: paymentCollection as HttpTypes.StorePaymentCollection,
  })
}
