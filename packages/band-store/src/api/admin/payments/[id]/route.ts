import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchPayment } from "../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetPaymentParams>,
  res: BandStoreResponse<HttpTypes.AdminPaymentResponse>
) => {
  const payment = await refetchPayment(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ payment })
}
