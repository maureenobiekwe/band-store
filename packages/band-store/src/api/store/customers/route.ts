import { BandStoreError } from "@band-store/framework/utils"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { createCustomerAccountWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import { refetchCustomer } from "./helpers"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.StoreCreateCustomer,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StoreCustomerResponse>
) => {
  // If `actor_id` is present, the request carries authentication for an existing customer
  if (req.auth_context.actor_id) {
    throw new BandStoreError(
      BandStoreError.Types.INVALID_DATA,
      "Request already authenticated as a customer."
    )
  }

  const createCustomers = createCustomerAccountWorkflow(req.scope)
  const customerData = req.validatedBody

  const { result } = await createCustomers.run({
    input: { customerData, authIdentityId: req.auth_context.auth_identity_id },
  })

  const customer = await refetchCustomer(
    result.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ customer })
}
