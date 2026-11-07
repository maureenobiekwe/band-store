import { FlagSettings } from "@band-store/framework/feature-flags"

const IndexEngineFeatureFlag: FlagSettings = {
  key: "index_engine",
  default_val: false,
  env_key: "BAND_STORE_FF_INDEX_ENGINE",
  description: "Enable BandStore to use the index engine in some part of the core",
}

export default IndexEngineFeatureFlag
