import {
  deleteShippingProfileWorkflow,
  updateShippingProfilesWorkflow,
} from "@band-store/core-flows"
import { HttpTypes, IFulfillmentModuleService } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchShippingProfile } from "../helpers"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetShippingProfileParams>,
  res: BandStoreResponse<HttpTypes.AdminShippingProfileResponse>
) => {
  const shippingProfile = await refetchShippingProfile(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ shipping_profile: shippingProfile })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminShippingProfileDeleteResponse>
) => {
  const { id } = req.params

  const fulfillmentModuleService = req.scope.resolve<IFulfillmentModuleService>(
    Modules.FULFILLMENT
  )

  // Test if exists
  await fulfillmentModuleService.retrieveShippingProfile(id)

  await deleteShippingProfileWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "shipping_profile",
    deleted: true,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminUpdateShippingProfile,
    HttpTypes.AdminGetShippingProfileParams
  >,
  res: BandStoreResponse<HttpTypes.AdminShippingProfileResponse>
) => {
  const { id } = req.params

  await updateShippingProfilesWorkflow(req.scope).run({
    input: { selector: { id }, update: req.body },
  })

  const shippingProfile = await refetchShippingProfile(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({
    shipping_profile: shippingProfile,
  })
}
