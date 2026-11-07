import type {
  BandStoreNextFunction,
  BandStoreRequest,
  BandStoreResponse,
} from "../types"

export function clearFiltersByKey(keys: string[]) {
  return async function clearFiltersByKeyMiddleware(
    req: BandStoreRequest,
    _: BandStoreResponse,
    next: BandStoreNextFunction
  ) {
    keys.forEach((key) => {
      delete req.filterableFields[key]
    })

    return next()
  }
}
