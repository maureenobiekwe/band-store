import {
  deletePricePreferencesWorkflow,
  updatePricePreferencesWorkflow,
} from "@band-store/core-flows"

import { HttpTypes } from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
  refetchEntity,
} from "@band-store/framework/http"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetPricePreferenceParams>,
  res: BandStoreResponse<HttpTypes.AdminPricePreferenceResponse>
) => {
  const price_preference = await refetchEntity({
    entity: "price_preference",
    idOrFilter: req.params.id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ price_preference })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminUpdatePricePreference,
    HttpTypes.AdminGetPricePreferenceParams
  >,
  res: BandStoreResponse<HttpTypes.AdminPricePreferenceResponse>
) => {
  const id = req.params.id
  const workflow = updatePricePreferencesWorkflow(req.scope)

  await workflow.run({
    input: { selector: { id: [id] }, update: req.body },
  })

  const price_preference = await refetchEntity({
    entity: "price_preference",
    idOrFilter: id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ price_preference })
}

export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminPricePreferenceDeleteResponse>
) => {
  const id = req.params.id
  const workflow = deletePricePreferencesWorkflow(req.scope)

  await workflow.run({
    input: [id],
  })

  res.status(200).json({
    id,
    object: "price_preference",
    deleted: true,
  })
}
