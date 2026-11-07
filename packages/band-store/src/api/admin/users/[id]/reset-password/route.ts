import { generateResetPasswordTokenWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
} from "@band-store/framework/utils"

/**
 * @since 2.20.0
 */
export const POST = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminUserResetPasswordTokenResponse>
) => {
  const { id } = req.params
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [user],
  } = await query.graph({
    entity: "user",
    fields: ["email"],
    filters: {
      id,
    },
  })

  if (!user) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `User with id: ${id} was not found`
    )
  }

  const { http } = req.scope.resolve(
    ContainerRegistrationKeys.CONFIG_MODULE
  ).projectConfig

  const { result: token } = await generateResetPasswordTokenWorkflow(
    req.scope
  ).run({
    input: {
      entityId: user.email,
      actorType: "user",
      actor_id: id,
      granting_actor_id: req.auth_context.actor_id,
      granting_actor: req.auth_context.actor_type,
      granting_scope: req.rbac_context?.scope,
      provider: "emailpass",
      secret: http.jwtSecret!,
      jwtOptions: http.jwtOptions,
    },
  })

  res.status(200).json({ token })
}
