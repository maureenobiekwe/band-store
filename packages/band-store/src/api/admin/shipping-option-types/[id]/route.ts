import {
  deleteShippingOptionTypesWorkflow,
  updateShippingOptionTypesWorkflow,
} from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { refetchShippingOptionType } from "../helpers"
import { HttpTypes } from "@band-store/framework/types"
import { BandStoreError } from "@band-store/framework/utils"

/**
 * @since 2.10.0
 */
export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetShippingOptionTypeParams>,
  res: BandStoreResponse<HttpTypes.AdminShippingOptionTypeResponse>
) => {
  const shippingOptionType = await refetchShippingOptionType(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ shipping_option_type: shippingOptionType })
}

/**
 * @since 2.10.0
 */
export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminUpdateShippingOptionType,
    HttpTypes.AdminGetShippingOptionTypeParams
  >,
  res: BandStoreResponse<HttpTypes.AdminShippingOptionTypeResponse>
) => {
  const existingShippingOptionType = await refetchShippingOptionType(
    req.params.id,
    req.scope,
    ["id"]
  )

  if (!existingShippingOptionType) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Shipping option type with id "${req.params.id}" not found`
    )
  }

  const { result } = await updateShippingOptionTypesWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      update: req.validatedBody,
    },
  })

  const shippingOptionType = await refetchShippingOptionType(
    result[0].id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ shipping_option_type: shippingOptionType })
}

/**
 * @since 2.10.0
 */
export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminShippingOptionTypeDeleteResponse>
) => {
  const id = req.params.id

  await deleteShippingOptionTypesWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "shipping_option_type",
    deleted: true,
  })
}
