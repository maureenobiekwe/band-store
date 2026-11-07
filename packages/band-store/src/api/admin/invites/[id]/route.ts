import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { BandStoreError } from "@band-store/framework/utils"

import { deleteInvitesWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import { refetchInvite } from "../helpers"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetInviteParams>,
  res: BandStoreResponse<HttpTypes.AdminInviteResponse>
) => {
  const { id } = req.params
  const invite = await refetchInvite(req, id)

  if (!invite) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Invite with id: ${id} was not found`
    )
  }

  res.status(200).json({ invite })
}

export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminInviteDeleteResponse>
) => {
  const { id } = req.params
  const workflow = deleteInvitesWorkflow(req.scope)

  await workflow.run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "invite",
    deleted: true,
  })
}
