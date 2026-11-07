import { generateResetPasswordTokenWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"
import { ResetPasswordRequestType } from "../../../validators"

export const POST = async (
  req: Authenticatedband-storeRequest<ResetPasswordRequestType>,
  res: BandStoreResponse
) => {
  const { auth_provider, actor_type } = req.params
  const { identifier, metadata } = req.validatedBody

  const { http } = req.scope.resolve(
    ContainerRegistrationKeys.CONFIG_MODULE
  ).projectConfig

  await generateResetPasswordTokenWorkflow(req.scope).run({
    input: {
      entityId: identifier,
      actorType: actor_type,
      provider: auth_provider,
      secret: http.jwtSecret!,
      jwtOptions: http.jwtOptions,
      metadata,
    },
    throwOnError: false, // we don't want to throw on error to avoid leaking information about non-existing identities
  })

  res.sendStatus(201)
}
