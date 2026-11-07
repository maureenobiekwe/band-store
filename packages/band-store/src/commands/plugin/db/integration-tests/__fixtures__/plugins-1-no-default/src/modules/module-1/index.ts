import { BandStoreService, Module } from "@band-store/framework/utils"

export const module1 = Module("module1", {
  service: class Module1Service extends BandStoreService({}) {},
})
