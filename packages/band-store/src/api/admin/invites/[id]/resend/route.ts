import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { refreshInviteTokensWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import { refetchInvite } from "../../helpers"

export const POST = async (
  req: Authenticatedband-storeRequest<{}, HttpTypes.SelectParams>,
  res: BandStoreResponse<HttpTypes.AdminInviteResponse>
) => {
  const workflow = refreshInviteTokensWorkflow(req.scope)

  const input = {
    invite_ids: [req.params.id],
  }

  const { result } = await workflow.run({ input })
  const invite = await refetchInvite(req, result[0].id)

  res.status(200).json({ invite })
}
