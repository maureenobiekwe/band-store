import {
  removeCustomerAccountWorkflow,
  updateCustomersWorkflow,
} from "@band-store/core-flows"
import { AdditionalData, HttpTypes } from "@band-store/framework/types"
import { BandStoreError } from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchCustomer } from "../helpers"
import { AdminUpdateCustomerType } from "../validators"

export const GET = async (
  req: AuthenticatedMedusaRequest<{}, HttpTypes.AdminCustomerParams>,
  res: BandStoreResponse<HttpTypes.AdminCustomerResponse>
) => {
  const customer = await refetchCustomer(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  if (!customer) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Customer with id: ${req.params.id} not found`
    )
  }

  res.status(200).json({ customer })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    AdminUpdateCustomerType & AdditionalData,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.AdminCustomerResponse>
) => {
  const existingCustomer = await refetchCustomer(req.params.id, req.scope, [
    "id",
  ])
  if (!existingCustomer) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Customer with id "${req.params.id}" not found`
    )
  }

  const { additional_data, ...rest } = req.validatedBody

  await updateCustomersWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      update: rest,
      additional_data,
    },
  })

  const customer = await refetchCustomer(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )
  res.status(200).json({ customer })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminCustomerDeleteResponse>
) => {
  const id = req.params.id

  await removeCustomerAccountWorkflow(req.scope).run({
    input: {
      customerId: id,
    },
  })

  res.status(200).json({
    id,
    object: "customer",
    deleted: true,
  })
}
