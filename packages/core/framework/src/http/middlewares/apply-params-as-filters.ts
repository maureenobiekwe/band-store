import type {
  BandStoreNextFunction,
  BandStoreRequest,
  BandStoreResponse,
} from "../types"

export function applyParamsAsFilters(mappings: { [param: string]: string }) {
  return async function paramsAsFiltersMiddleware(
    req: BandStoreRequest,
    _: BandStoreResponse,
    next: BandStoreNextFunction
  ) {
    for (const [param, paramValue] of Object.entries(req.params)) {
      if (mappings[param]) {
        req.filterableFields[mappings[param]] = paramValue
      }
    }

    return next()
  }
}
