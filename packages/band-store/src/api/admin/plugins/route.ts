import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { ContainerRegistrationKeys, isString } from "@band-store/framework/utils"

export const GET = async (
  req: BandStoreRequest<unknown>,
  res: BandStoreResponse<HttpTypes.AdminPluginsListResponse>
) => {
  const configModule = req.scope.resolve(
    ContainerRegistrationKeys.CONFIG_MODULE
  )

  const configPlugins = configModule.plugins ?? []

  const plugins = configPlugins.map((plugin) => ({
    name: isString(plugin) ? plugin : plugin.resolve,
  }))

  res.json({
    plugins,
  })
}
