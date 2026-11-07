import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchCustomer } from "../helpers"
import { BandStoreError } from "@band-store/framework/utils"
import { updateCustomersWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.StoreGetCustomerParams>,
  res: BandStoreResponse<HttpTypes.StoreCustomerResponse>
) => {
  const id = req.auth_context.actor_id
  const customer = await refetchCustomer(id, req.scope, req.queryConfig.fields)

  if (!customer) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Customer with id: ${id} was not found`
    )
  }

  res.json({ customer })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.StoreUpdateCustomer,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StoreCustomerResponse>
) => {
  const customerId = req.auth_context.actor_id
  await updateCustomersWorkflow(req.scope).run({
    input: {
      selector: { id: customerId },
      update: req.validatedBody,
    },
  })

  const customer = await refetchCustomer(
    customerId,
    req.scope,
    req.queryConfig.fields
  )
  res.status(200).json({ customer })
}
