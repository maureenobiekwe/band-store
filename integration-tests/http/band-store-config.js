const { defineConfig, Modules } = require("@band-store/utils")
const os = require("os")
const path = require("path")

const DB_HOST = process.env.DB_HOST
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_TEMP_NAME
const DB_URL = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
process.env.DATABASE_URL = DB_URL
process.env.LOG_LEVEL = "error"

const customFulfillmentProvider = {
  resolve: "@band-store/fulfillment-manual",
  id: "test-provider",
}

const customFulfillmentProviderCalculated = {
  resolve: require("./dist/utils/providers/fulfillment-manual-calculated")
    .default,
  id: "test-provider-calculated",
}

const customPendingAuthPaymentProvider = {
  resolve: require("./dist/utils/providers/payment-pending-authorization")
    .default,
  id: "pending-auth",
}

const customTaxDataProvider = {
  resolve: require("./dist/utils/providers/tax-data-provider").default,
  id: "data-provider",
}

// A second instance of the built-in system payment provider, registered under a
// distinct id (`pp_system_default_2`) so tests can assert a non-default provider
// is honored. The always-present `pp_system_default` is unaffected.
const customPaymentProvider = {
  resolve: {
    services: [require("@band-store/payment/dist/providers/system").default],
  },
  id: "default_2",
}

const customPaymentProviderAccountHolder = {
  resolve: require("./dist/utils/providers/payment-account-holder").default,
  id: "test",
}

const modules = {
  [Modules.TAX]: {
    resolve: "@band-store/tax",
    options: {
      providers: [customTaxDataProvider],
    },
  },
  [Modules.PAYMENT]: {
    resolve: "@band-store/payment",
    /** @type {import('@band-store/payment').PaymentModuleOptions} */
    options: {
      providers: [
        customPaymentProvider,
        customPaymentProviderAccountHolder,
        customPendingAuthPaymentProvider,
      ],
      webhook_delay: 0,
      webhook_retries: 0,
    },
  },
  [Modules.FULFILLMENT]: {
    /** @type {import('@band-store/fulfillment').FulfillmentModuleOptions} */
    options: {
      providers: [
        customFulfillmentProvider,
        customFulfillmentProviderCalculated,
      ],
    },
  },
  [Modules.NOTIFICATION]: {
    resolve: "@band-store/notification",
    options: {
      providers: [
        {
          resolve: "@band-store/notification-local",
          id: "local",
          options: {
            name: "Local Notification Provider",
            channels: ["feed"],
          },
        },
      ],
    },
  },
  [Modules.FILE]: {
    resolve: "@band-store/file",
    options: {
      providers: [
        {
          resolve: "@band-store/file-local",
          id: "local",
          options: {
            // This is the directory where we can reliably write in CI environments
            upload_dir: path.join(os.tmpdir(), "uploads"),
            private_upload_dir: path.join(os.tmpdir(), "static"),
          },
        },
      ],
    },
  },
  [Modules.INDEX]: {
    resolve: "@band-store/index",
    disable: process.env.ENABLE_INDEX_MODULE !== "true",
  },
  [Modules.SEARCH]: {
    resolve: "@band-store/search",
    options: {
      providers: [
        {
          resolve: "@band-store/search-postgres",
          id: "postgres",
        },
      ],
      // Passed in rather than discovered: this app has no `search/` folder, and
      // the module takes one input either way. The fixture declares through
      // `defineSearchIndex`, so these are already-normalized definitions.
      indexes: require("./dist/fixtures/search").default,
    },
  },
  [Modules.RBAC]: {
    resolve: "@band-store/rbac",
    disable: process.env.ENABLE_RBAC_MODULE !== "true",
  },
  [Modules.AUTH]: {
    options: {
      mfa: {
        encryption_key: "test-mfa-encryption-key",
      },
      providers: [
        {
          resolve: "@band-store/band-store/auth-emailpass",
          id: "emailpass",
        },
      ],
    },
  },
}

// The Caching Module isn't a default module, so specs
// enabling the caching feature flag get it with the built-in memory provider.
if (process.env.BAND_STORE_FF_CACHING === "true") {
  modules[Modules.CACHING] = {
    resolve: "@band-store/caching",
    options: {
      in_memory: { enable: true },
    },
  }
}

if (process.env.BAND_STORE_FF_TRANSLATION === "true") {
  modules[Modules.TRANSLATION] = {
    resolve: "@band-store/translation",
  }
}

module.exports = defineConfig({
  admin: {
    disable: true,
  },
  projectConfig: {
    http: {
      jwtSecret: "test",
      // `user` defaults to ["emailpass"], so the SSO provider the auth tests
      // drive has to be opted in explicitly.
      authMethodsPerActor: {
        user: ["emailpass", "oidc-okta"],
      },
    },
  },
  featureFlags: {
    index_engine: process.env.ENABLE_INDEX_MODULE === "true",
    translation: process.env.BAND_STORE_FF_TRANSLATION === "true",
  },
  modules,
  plugins: [
    {
      resolve: "@band-store/loyalty-plugin",
      options: {},
    },
  ],
})
