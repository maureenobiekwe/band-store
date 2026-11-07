import { BandStoreService, Module } from "@band-store/framework/utils"

export default Module("moduleEmpty", {
  service: class ModuleEmptyService extends BandStoreService({}) {},
})

