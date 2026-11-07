import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { IAuthModuleService } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { AuthMfaCreateFactorRequestType } from "../../validators"

/**
 * @since 2.15.3
 */
export const GET = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse
) => {
  const authService = req.scope.resolve<IAuthModuleService>(Modules.AUTH)
  const mfaFactors = await authService.listAuthMfa({
    auth_identity_id: req.auth_context.auth_identity_id,
  })

  return res.status(200).json({ mfa_factors: mfaFactors })
}

/**
 * @since 2.15.3
 */
export const POST = async (
  req: Authenticatedband-storeRequest<AuthMfaCreateFactorRequestType>,
  res: BandStoreResponse
) => {
  const authService = req.scope.resolve<IAuthModuleService>(Modules.AUTH)
  const enrollment = await authService.startAuthMfa({
    auth_identity_id: req.auth_context.auth_identity_id,
    provider: req.validatedBody.provider,
    label: req.validatedBody.label,
    issuer: req.validatedBody.issuer,
    metadata: req.validatedBody.metadata,
  })

  return res.status(200).json({
    mfa_factor: enrollment.mfa,
    secret: enrollment.secret,
    otpauth_url: enrollment.otpauth_url,
  })
}
