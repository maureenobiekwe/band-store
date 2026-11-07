import { createPaymentSessionsWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
  refetchEntity,
} from "@band-store/framework/http"

/**
 * @since 2.14.2
 */
export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminInitializePaymentSession,
    HttpTypes.AdminGetPaymentCollectionParams
  >,
  res: BandStoreResponse<HttpTypes.AdminPaymentCollectionResponse>
) => {
  const { id } = req.params
  const { provider_id, data } = req.validatedBody

  await createPaymentSessionsWorkflow(req.scope).run({
    input: {
      payment_collection_id: id,
      provider_id,
      data,
    },
  })

  const paymentCollection = await refetchEntity({
    entity: "payment_collection",
    idOrFilter: id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ payment_collection: paymentCollection })
}
