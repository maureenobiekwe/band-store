import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

import { createInvitesWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import { redactInviteTokens, refetchInvite } from "./helpers"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetInvitesParams>,
  res: BandStoreResponse<HttpTypes.AdminInviteListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "invite",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows, metadata } = await remoteQuery(queryObject)
  const invites = await redactInviteTokens(req, rows)

  res.json({
    invites,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminCreateInvite,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.AdminInviteResponse>
) => {
  const workflow = createInvitesWorkflow(req.scope)

  const input = {
    input: {
      invites: [req.validatedBody],
      rbac_context: {
        actor_id: req.auth_context.actor_id,
        actor: req.auth_context.actor_type,
        scope: req.rbac_context?.scope,
      },
    },
  }

  const { result } = await workflow.run(input)

  const invite = await refetchInvite(req, result[0].id)

  res.status(200).json({ invite })
}
