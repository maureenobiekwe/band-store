import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { createCustomerAddressesWorkflow } from "@band-store/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import { refetchCustomer } from "../../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.StoreCustomerAddressFilters
  >,
  res: BandStoreResponse<HttpTypes.StoreCustomerAddressListResponse>
) => {
  const customerId = req.auth_context.actor_id

  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "customer_address",
    variables: {
      filters: { ...req.filterableFields, customer_id: customerId },
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: addresses, metadata } = await remoteQuery(queryObject)

  res.json({
    addresses,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.StoreCreateCustomerAddress,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StoreCustomerResponse>
) => {
  const customerId = req.auth_context.actor_id

  const createAddresses = createCustomerAddressesWorkflow(req.scope)
  const addresses = [
    {
      ...req.validatedBody,
      customer_id: customerId,
    },
  ]

  await createAddresses.run({
    input: { addresses },
  })

  const customer = await refetchCustomer(
    customerId,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ customer })
}
