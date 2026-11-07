import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { addOrRemoveCampaignPromotionsWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import { refetchCampaign } from "../../helpers"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminBatchLink,
    HttpTypes.AdminGetCampaignParams
  >,
  res: BandStoreResponse<HttpTypes.AdminCampaignResponse>
) => {
  const { id } = req.params
  const { add, remove } = req.validatedBody
  await addOrRemoveCampaignPromotionsWorkflow(req.scope).run({
    input: { id, add, remove },
  })

  const campaign = await refetchCampaign(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ campaign })
}
