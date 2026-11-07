import {
  deleteCustomerGroupsWorkflow,
  updateCustomerGroupsWorkflow,
} from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { BandStoreError } from "@band-store/framework/utils"
import { refetchCustomerGroup } from "../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.SelectParams>,
  res: BandStoreResponse<HttpTypes.AdminCustomerGroupResponse>
) => {
  const customerGroup = await refetchCustomerGroup(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  if (!customerGroup) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Customer group with id: ${req.params.id} not found`
    )
  }

  res.status(200).json({ customer_group: customerGroup })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminUpdateCustomerGroup,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.AdminCustomerGroupResponse>
) => {
  const existingCustomerGroup = await refetchCustomerGroup(
    req.params.id,
    req.scope,
    ["id"]
  )
  if (!existingCustomerGroup) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Customer group with id "${req.params.id}" not found`
    )
  }

  await updateCustomerGroupsWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      update: req.validatedBody,
    },
  })

  const customerGroup = await refetchCustomerGroup(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )
  res.status(200).json({ customer_group: customerGroup })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminCustomerGroupDeleteResponse>
) => {
  const id = req.params.id
  const deleteCustomerGroups = deleteCustomerGroupsWorkflow(req.scope)

  await deleteCustomerGroups.run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "customer_group",
    deleted: true,
  })
}
