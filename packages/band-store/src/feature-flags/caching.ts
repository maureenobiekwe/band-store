import { FlagSettings } from "@band-store/framework/feature-flags"

const CachingFeatureFlag: FlagSettings = {
  key: "caching",
  default_val: false,
  env_key: "BAND_STORE_FF_CACHING",
  description: "[WIP] Enable core caching where applicable",
}

export default CachingFeatureFlag
