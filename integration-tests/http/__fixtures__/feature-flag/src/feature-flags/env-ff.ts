import { FlagSettings } from "@band-store/framework/feature-flags"

export const EnvFeatureFlag: FlagSettings = {
  key: "env_ff",
  default_val: true,
  env_key: "ENV_FF",
  description: "Environment feature flag",
}
