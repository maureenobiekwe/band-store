import { ModuleJoinerConfig } from "@band-store/framework/types"
import {
  FeatureFlag,
  BAND_STORE_SKIP_FILE,
  Modules,
} from "@band-store/framework/utils"

export const ProductTranslation: ModuleJoinerConfig = {
  [BAND_STORE_SKIP_FILE]: !(
    FeatureFlag.isFeatureEnabled("translation") ||
    process.env.BAND_STORE_FF_TRANSLATION === "true"
  ),
  isLink: true,
  isReadOnlyLink: true,
  extends: [
    {
      serviceName: Modules.PRODUCT,
      entity: "Product",
      relationship: {
        serviceName: Modules.TRANSLATION,
        entity: "Translation",
        primaryKey: "reference_id",
        foreignKey: "id",
        alias: "translations",
        isList: true,
        args: {
          methodSuffix: "Translations",
        },
      },
    },
    {
      serviceName: Modules.PRODUCT,
      entity: "ProductVariant",
      relationship: {
        serviceName: Modules.TRANSLATION,
        entity: "Translation",
        primaryKey: "reference_id",
        foreignKey: "id",
        alias: "translations",
        isList: true,
        args: {
          methodSuffix: "Translations",
        },
      },
    },
    {
      serviceName: Modules.PRODUCT,
      entity: "ProductCategory",
      relationship: {
        serviceName: Modules.TRANSLATION,
        entity: "Translation",
        primaryKey: "reference_id",
        foreignKey: "id",
        alias: "translations",
        isList: true,
        args: {
          methodSuffix: "Translations",
        },
      },
    },
    {
      serviceName: Modules.PRODUCT,
      entity: "ProductCollection",
      relationship: {
        serviceName: Modules.TRANSLATION,
        entity: "Translation",
        primaryKey: "reference_id",
        foreignKey: "id",
        alias: "translations",
        isList: true,
        args: {
          methodSuffix: "Translations",
        },
      },
    },
    {
      serviceName: Modules.PRODUCT,
      entity: "ProductTag",
      relationship: {
        serviceName: Modules.TRANSLATION,
        entity: "Translation",
        primaryKey: "reference_id",
        foreignKey: "id",
        alias: "translations",
        isList: true,
        args: {
          methodSuffix: "Translations",
        },
      },
    },
    {
      serviceName: Modules.PRODUCT,
      entity: "ProductType",
      relationship: {
        serviceName: Modules.TRANSLATION,
        entity: "Translation",
        primaryKey: "reference_id",
        foreignKey: "id",
        alias: "translations",
        isList: true,
        args: {
          methodSuffix: "Translations",
        },
      },
    },
    {
      serviceName: Modules.PRODUCT,
      entity: "ProductOption",
      relationship: {
        serviceName: Modules.TRANSLATION,
        entity: "Translation",
        primaryKey: "reference_id",
        foreignKey: "id",
        alias: "translations",
        isList: true,
        args: {
          methodSuffix: "Translations",
        },
      },
    },
    {
      serviceName: Modules.PRODUCT,
      entity: "ProductOptionValue",
      relationship: {
        serviceName: Modules.TRANSLATION,
        entity: "Translation",
        primaryKey: "reference_id",
        foreignKey: "id",
        alias: "translations",
        isList: true,
        args: {
          methodSuffix: "Translations",
        },
      },
    },
    {
      serviceName: Modules.TRANSLATION,
      entity: "Translation",
      relationship: {
        serviceName: Modules.PRODUCT,
        entity: "Product",
        primaryKey: "id",
        foreignKey: "reference_id",
        alias: "product",
        args: {
          methodSuffix: "Products",
        },
      },
    },
  ],
} as ModuleJoinerConfig
