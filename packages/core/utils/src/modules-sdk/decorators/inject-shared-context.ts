import { Context } from "@band-store/types"
import { BandStoreContextType } from "./context-parameter"

export function InjectSharedContext(): MethodDecorator {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: any
  ): void {
    if (!target.BandStoreContextIndex_) {
      throw new Error(
        `To apply @InjectSharedContext you have to flag a parameter using @BandStoreContext`
      )
    }

    const originalMethod = descriptor.value
    const argIndex = target.BandStoreContextIndex_[propertyKey]

    descriptor.value = function (...args: any[]) {
      const context: Context = {
        ...(args[argIndex] ?? { __type: BandStoreContextType }),
      }
      args[argIndex] = context

      return originalMethod.apply(this, args)
    }
  }
}
