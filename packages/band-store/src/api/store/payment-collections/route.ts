import { createPaymentCollectionForCartWorkflowId } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import { Modules } from "@band-store/utils"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.StoreCreatePaymentCollection,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StorePaymentCollectionResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const { cart_id } = req.body

  // We can potentially refactor the workflow to behave more like an upsert and return an existing collection if there is one.
  const [cartCollectionRelation] = await remoteQuery(
    remoteQueryObjectFromString({
      entryPoint: "cart_payment_collection",
      variables: { filters: { cart_id } },
      fields: req.queryConfig.fields.map((f) => `payment_collection.${f}`),
    })
  )
  let paymentCollection = cartCollectionRelation?.payment_collection

  if (!paymentCollection) {
    const we = req.scope.resolve(Modules.WORKFLOW_ENGINE)
    await we.run(createPaymentCollectionForCartWorkflowId, {
      input: req.body,
    })

    const [cartCollectionRelation] = await remoteQuery(
      remoteQueryObjectFromString({
        entryPoint: "cart_payment_collection",
        variables: { filters: { cart_id } },
        fields: req.queryConfig.fields.map((f) => `payment_collection.${f}`),
      })
    )
    paymentCollection = cartCollectionRelation?.payment_collection
  }

  res.status(200).json({ payment_collection: paymentCollection })
}
