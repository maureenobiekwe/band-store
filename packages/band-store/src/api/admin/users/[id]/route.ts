import {
  removeUserAccountWorkflow,
  updateUsersWorkflow,
} from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes, UpdateUserDTO } from "@band-store/framework/types"

import {
  ContainerRegistrationKeys,
  BandStoreError,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import { refetchUser } from "../helpers"

// Get user
export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminUserParams>,
  res: BandStoreResponse<HttpTypes.AdminUserResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const { id } = req.params

  const query = remoteQueryObjectFromString({
    entryPoint: "user",
    variables: { id },
    fields: req.queryConfig.fields,
  })

  const [user] = await remoteQuery(query)
  if (!user) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `User with id: ${id} was not found`
    )
  }

  res.status(200).json({ user })
}

// update user
export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminUpdateUser,
    HttpTypes.AdminUserParams
  >,
  res: BandStoreResponse<HttpTypes.AdminUserResponse>
) => {
  const workflow = updateUsersWorkflow(req.scope)

  const input = {
    updates: [
      {
        id: req.params.id,
        ...req.validatedBody,
      } as UpdateUserDTO,
    ],
  }

  await workflow.run({ input })

  const user = await refetchUser(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ user })
}

// delete user
export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminUserDeleteResponse>
) => {
  const { id } = req.params
  const { actor_id } = req.auth_context

  if (actor_id === id) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_ALLOWED,
      "A user cannot delete itself"
    )
  }

  const workflow = removeUserAccountWorkflow(req.scope)

  await workflow.run({
    input: {
      userId: id,
      granting_actor_id: req.auth_context.actor_id,
      granting_actor: req.auth_context.actor_type,
      granting_scope: req.rbac_context?.scope,
    },
  })

  res.status(200).json({
    id,
    object: "user",
    deleted: true,
  })
}
