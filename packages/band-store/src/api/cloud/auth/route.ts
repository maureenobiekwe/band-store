import { BandStoreRequest, BandStoreResponse } from "@band-store/framework"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"

export const GET = async (req: BandStoreRequest, res: BandStoreResponse) => {
  const config = req.scope.resolve(ContainerRegistrationKeys.CONFIG_MODULE)

  res.status(200).json({
    enabled:
      !!config.projectConfig.http.authMethodsPerActor?.user?.includes("cloud"),
  })
}
