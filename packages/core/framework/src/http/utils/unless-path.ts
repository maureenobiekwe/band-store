import {
  BandStoreNextFunction,
  BandStoreRequest,
  BandStoreResponse,
  MiddlewareFunction,
} from "../types"

/**
 * Due to how our route loader works, where we load all middlewares before routes, ambiguous routes * end up having all middlewares on different routes executed before the route handler is.
 */
/**
 * This function allows us to skip middlewares for particular routes, so we can temporarily solve * * this without completely breaking the route loader for everyone.
 */
export const unlessPath =
  (onPath: RegExp, middleware: MiddlewareFunction) =>
  (req: BandStoreRequest, res: BandStoreResponse, next: BandStoreNextFunction) => {
    onPath.lastIndex = 0
    if (onPath.test(req.path)) {
      return next()
    } else {
      return middleware(req, res, next)
    }
  }
