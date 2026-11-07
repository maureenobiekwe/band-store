import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { IAuthModuleService } from "@band-store/framework/types"
import { AuthEvents, BandStoreError, Modules } from "@band-store/framework/utils"
import { AuthMfaGenerateRecoveryCodesRequestType } from "../../validators"

/**
 * @since 2.15.3
 */
export const POST = async (
  req: Authenticatedband-storeRequest<AuthMfaGenerateRecoveryCodesRequestType>,
  res: BandStoreResponse
) => {
  const authService = req.scope.resolve<IAuthModuleService>(Modules.AUTH)
  const factors = await authService.listAuthMfa({
    auth_identity_id: req.auth_context.auth_identity_id,
    status: "enabled",
  })

  if (!factors.length) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_ALLOWED,
      "Recovery codes require an enabled MFA factor"
    )
  }

  const { codes } = await authService.generateAuthMfaRecoveryCodes({
    auth_identity_id: req.auth_context.auth_identity_id,
    count: req.validatedBody.count,
  })

  await req.scope.resolve(Modules.EVENT_BUS).emit({
    name: AuthEvents.MFA_RECOVERY_CODES_GENERATED,
    data: {
      auth_identity_id: req.auth_context.auth_identity_id,
      count: codes.length,
    },
  })

  return res.status(200).json({ recovery_codes: codes })
}
