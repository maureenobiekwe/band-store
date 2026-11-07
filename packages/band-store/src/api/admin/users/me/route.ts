import { updateUsersWorkflow } from "@band-store/core-flows"
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

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminUserParams>,
  res: BandStoreResponse<HttpTypes.AdminUserResponse>
) => {
  const id = req.auth_context.actor_id
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  if (!id) {
    throw new BandStoreError(BandStoreError.Types.NOT_FOUND, `User ID not found`)
  }

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

/**
 * Updates the authenticated user's own profile. Unlike `POST /admin/users/:id`,
 * this route is not guarded by `user:update`: every user may edit itself.
 */
export const POST = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminUpdateUser>,
  res: BandStoreResponse<HttpTypes.AdminUserResponse>
) => {
  const id = req.auth_context.actor_id

  if (!id) {
    throw new BandStoreError(BandStoreError.Types.NOT_FOUND, `User ID not found`)
  }

  await updateUsersWorkflow(req.scope).run({
    input: { updates: [{ id, ...req.validatedBody } as UpdateUserDTO] },
  })

  const user = await refetchUser(id, req.scope, req.queryConfig.fields)

  res.status(200).json({ user })
}
