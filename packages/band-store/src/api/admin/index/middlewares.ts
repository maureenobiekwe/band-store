import { validateAndTransformBody } from "@band-store/framework"
import {
  Authenticatedband-storeRequest,
  authorize,
  BandStoreNextFunction,
  BandStoreResponse,
  MiddlewareRoute,
} from "@band-store/framework/http"
import { Logger } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  FeatureFlag,
  BandStoreError,
  Modules,
} from "@band-store/framework/utils"
import IndexEngineFeatureFlag from "../../../feature-flags/index-engine"
import { authenticate } from "../../../utils/middlewares/authenticate-middleware"
import { AdminIndexSyncPayload } from "./validator"

const isIndexEnabledMiddleware = (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse,
  next: BandStoreNextFunction
) => {
  const indexService = req.scope.resolve(Modules.INDEX, {
    allowUnregistered: true,
  })
  const logger =
    req.scope.resolve(ContainerRegistrationKeys.LOGGER, {
      allowUnregistered: true,
    }) ?? (console as unknown as Logger)

  if (
    !indexService ||
    !FeatureFlag.isFeatureEnabled(IndexEngineFeatureFlag.key)
  ) {
    const message =
      "Trying to access '/admin/index/*' route but the index module is not configured"
    logger.warn(message)
    return next(new BandStoreError(BandStoreError.Types.NOT_FOUND, message))
  }

  return next()
}

export const adminIndexRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/index/details",
    middlewares: [
      authenticate("user", ["session", "bearer", "api-key"]),
      isIndexEnabledMiddleware,
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/index/sync",
    middlewares: [
      authenticate("user", ["session", "bearer", "api-key"]),
      authorize({ resource: "*", operation: "*" }),
      isIndexEnabledMiddleware,
      validateAndTransformBody(AdminIndexSyncPayload),
    ],
  },
]
