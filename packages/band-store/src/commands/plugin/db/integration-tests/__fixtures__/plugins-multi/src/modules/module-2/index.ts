import { BandStoreService, Module } from "@band-store/framework/utils"

export default Module("module2", {
  service: class Module2Service extends BandStoreService({}) {},
})

