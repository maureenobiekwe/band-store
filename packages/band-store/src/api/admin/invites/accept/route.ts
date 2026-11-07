import { acceptInviteWorkflow } from "@band-store/core-flows"
import { HttpTypes, InviteWorkflow } from "@band-store/framework/types"
import { BandStoreError } from "@band-store/framework/utils"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminAcceptInvite,
    HttpTypes.AdminGetInviteAcceptParams
  >,
  res: BandStoreResponse<HttpTypes.AdminAcceptInviteResponse>
) => {
  if (req.auth_context.actor_id) {
    throw new BandStoreError(
      BandStoreError.Types.INVALID_DATA,
      "The user is already authenticated and cannot accept an invite."
    )
  }

  const input = {
    invite_token: req.filterableFields.token as string,
    auth_identity_id: req.auth_context.auth_identity_id,
    user: req.validatedBody,
  } as InviteWorkflow.AcceptInviteWorkflowInputDTO

  let users

  try {
    const { result } = await acceptInviteWorkflow(req.scope).run({ input })
    users = result
  } catch (e) {
    res.status(401).json({ message: "Unauthorized" })
    return
  }

  res.status(200).json({ user: users[0] })
}

export const AUTHENTICATE = false
