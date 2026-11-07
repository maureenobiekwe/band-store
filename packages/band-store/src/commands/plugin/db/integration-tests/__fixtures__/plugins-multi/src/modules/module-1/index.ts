import { BandStoreService, Module } from "@band-store/framework/utils"

export default Module("module1", {
  service: class Module1Service extends BandStoreService({}) {},
})

