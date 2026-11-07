import {
  Authenticatedband-storeRequest,
  BandStoreRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { IAuthModuleService } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { VerificationConfirmRequestType } from "../../validators"

/**
 * @since 2.16.0
 */
export const POST = async (
  req:
    | BandStoreRequest<VerificationConfirmRequestType>
    | Authenticatedband-storeRequest<VerificationConfirmRequestType>,
  res: BandStoreResponse
) => {
  const { code, code_provider } = req.validatedBody

  const authService = req.scope.resolve<IAuthModuleService>(Modules.AUTH)
  const result = await authService.confirmAuthVerification({
    auth_identity_id:
      "auth_context" in req ? req.auth_context.auth_identity_id : undefined,
    code,
    code_provider,
  })

  return res.status(200).json({
    entity_id: result.entity_id,
    entity_type: result.entity_type,
    code_provider: result.code_provider,
    verified_at: result.verified_at,
  })
}
