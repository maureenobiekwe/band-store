export function BandStoreContext() {
  return function (
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    if (!Object.prototype.hasOwnProperty.call(target, "BandStoreContextIndex_")) {
      target.BandStoreContextIndex_ = { ...(target.BandStoreContextIndex_ ?? {}) }
    }

    target.BandStoreContextIndex_[propertyKey] = parameterIndex
  }
}

BandStoreContext.getIndex = function (
  target: any,
  propertyKey: string
): number | undefined {
  return target.BandStoreContextIndex_?.[propertyKey]
}

export const BandStoreContextType = "BandStoreContext"
