import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: BandStoreRequest<unknown>,
  res: BandStoreResponse<HttpTypes.AdminModulesListResponse>
) => {
  const modules = BandStoreModule.getModuleKeys().map((key) => ({ key }))

  res.json({
    modules,
  })
}
