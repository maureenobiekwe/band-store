import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { IAuthModuleService } from "@band-store/framework/types"
import { BandStoreError, Modules } from "@band-store/framework/utils"

export const POST = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse
) => {
  const { auth_provider } = req.params

  const authService = req.scope.resolve<IAuthModuleService>(Modules.AUTH)

  const updateData = {
    ...(req.body as Record<string, unknown>),
    entity_id: req.auth_context.actor_id, // comes from the validated token
  }

  const { authIdentity, success, error } = await authService.updateProvider(
    auth_provider,
    updateData
  )

  if (success && authIdentity) {
    return res.status(200).json({ success: true })
  }

  throw new BandStoreError(BandStoreError.Types.UNAUTHORIZED, error || "Unauthorized")
}
