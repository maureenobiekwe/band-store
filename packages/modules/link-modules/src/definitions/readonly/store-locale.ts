import { ModuleJoinerConfig } from "@band-store/framework/types"
import {
  FeatureFlag,
  BAND_STORE_SKIP_FILE,
  Modules,
} from "@band-store/framework/utils"

export const StoreLocales: ModuleJoinerConfig = {
  [BAND_STORE_SKIP_FILE]: !(
    FeatureFlag.isFeatureEnabled("translation") ||
    process.env.BAND_STORE_FF_TRANSLATION === "true"
  ),
  isLink: true,
  isReadOnlyLink: true,
  extends: [
    {
      serviceName: Modules.STORE,
      entity: "StoreLocale",
      relationship: {
        serviceName: Modules.TRANSLATION,
        entity: "Locale",
        primaryKey: "code",
        foreignKey: "locale_code",
        alias: "locale",
        args: {
          methodSuffix: "Locales",
        },
      },
    },
  ],
} as ModuleJoinerConfig
