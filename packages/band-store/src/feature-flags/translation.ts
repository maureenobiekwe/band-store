import { FlagSettings } from "@band-store/framework/feature-flags"

const TranslationFeatureFlag: FlagSettings = {
  key: "translation",
  default_val: false,
  env_key: "BAND_STORE_FF_TRANSLATION",
  description: "Enable multi-language support and entity translations",
}

export default TranslationFeatureFlag
