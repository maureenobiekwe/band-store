import { HttpTypes } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminOrderPreviewResponse>
) => {
  const { id } = req.params

  // NOTE: Consider replacing with remoteQuery when possible
  const orderModuleService = req.scope.resolve(Modules.ORDER)

  const order = (await orderModuleService.previewOrderChange(
    id
  )) as unknown as HttpTypes.AdminOrderPreview

  res.status(200).json({ order })
}
