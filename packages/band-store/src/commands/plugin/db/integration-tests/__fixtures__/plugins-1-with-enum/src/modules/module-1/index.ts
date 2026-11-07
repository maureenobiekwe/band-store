import { BandStoreService, Module } from "@band-store/framework/utils"
export default Module("module1_with_enum", {
  service: class Module1Service extends BandStoreService({}) {},
})
