import type { AwilixContainer, ResolveOptions } from "@band-store/deps/awilix"

/**
 * The following interface acts as a bucket that other modules or the
 * utils package can fill using declaration merging
 */
export interface ModuleImplementations {}

/**
 * The BandStore Container extends [Awilix](https://github.com/jeffijoe/awilix) to
 * provide dependency injection functionalities.
 */
export type BandStoreContainer<Cradle extends object = ModuleImplementations> =
  Omit<AwilixContainer<any>, "resolve" | "createScope"> & {
    resolve<K extends keyof Cradle>(
      key: K,
      resolveOptions?: ResolveOptions
    ): Cradle[K]
    resolve<T>(key: string, resolveOptions?: ResolveOptions): T

    /**
     * @ignore
     */
    registerAdd: <T>(name: string, registration: T) => BandStoreContainer
    /**
     * @ignore
     */
    createScope: () => BandStoreContainer
  }

export type ContainerLike = {
  resolve<T = unknown>(key: string): T
}
