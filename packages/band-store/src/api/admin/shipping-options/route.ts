import { createShippingOptionsWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
  refetchEntities,
} from "@band-store/framework/http"
import { refetchShippingOption } from "./helpers"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminShippingOptionListParams>,
  res: BandStoreResponse<HttpTypes.AdminShippingOptionListResponse>
) => {
  const { data: shipping_options, metadata } = await refetchEntities({
    entity: "shipping_option",
    idOrFilter: req.filterableFields,
    scope: req.scope,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
    withDeleted: req.queryConfig.withDeleted,
  })

  res.json({
    shipping_options,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminCreateShippingOption,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.AdminShippingOptionResponse>
) => {
  const shippingOptionPayload = req.validatedBody

  const workflow = createShippingOptionsWorkflow(req.scope)

  const { result } = await workflow.run({
    input: [shippingOptionPayload],
  })

  const shippingOption = await refetchShippingOption(
    result[0].id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ shipping_option: shippingOption })
}
