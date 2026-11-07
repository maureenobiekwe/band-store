import { defineConfig } from "@band-store/utils"

const { Modules } = require("@band-store/utils")

const DB_HOST = process.env.DB_HOST
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_TEMP_NAME
const DB_URL = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
process.env.POSTGRES_URL = DB_URL
process.env.LOG_LEVEL = "error"

const customTaxProviderRegistration = {
  resolve: {
    services: [require("@band-store/tax/dist/providers/system").default],
  },
  id: "system_2",
}

const customPaymentProvider = {
  resolve: {
    services: [require("@band-store/payment/dist/providers/system").default],
  },
  id: "default_2",
}

const customFulfillmentProvider = {
  resolve: "@band-store/fulfillment-manual",
  id: "test-provider",
}

const customFulfillmentProviderCalculated = {
  resolve: require("./dist/utils/providers/fulfillment-manual-calculated")
    .default,
  id: "test-provider-calculated",
}

module.exports = defineConfig({
  admin: {
    disable: true,
  },
  plugins: [
    {
      resolve: "@band-store/loyalty-plugin",
      options: {},
    },
  ],
  projectConfig: {
    databaseUrl: DB_URL,
    databaseType: "postgres",
    http: {
      jwtSecret: "test",
      cookieSecret: "test",
    },
  },
  featureFlags: {},
  modules: [
    {
      key: "testingModule",
      resolve: "__tests__/__fixtures__/testing-module",
    },
    {
      key: "auth",
      resolve: "@band-store/auth",
      options: {
        providers: [
          {
            id: "emailpass",
            resolve: "@band-store/auth-emailpass",
          },
        ],
      },
    },
    {
      key: Modules.USER,
      scope: "internal",
      resolve: "@band-store/user",
      options: {
        jwt_secret: "test",
      },
    },
    {
      key: Modules.CACHE,
      resolve: "@band-store/cache-inmemory",
      options: { ttl: 0 }, // Cache disabled
    },
    {
      key: Modules.LOCKING,
      resolve: "@band-store/locking",
    },
    {
      key: Modules.STOCK_LOCATION,
      resolve: "@band-store/stock-location",
      options: {},
    },
    {
      key: Modules.INVENTORY,
      resolve: "@band-store/inventory",
      options: {},
    },
    {
      key: Modules.PRODUCT,
      resolve: "@band-store/product",
    },
    {
      key: Modules.PRICING,
      resolve: "@band-store/pricing",
    },
    {
      key: Modules.PROMOTION,
      resolve: "@band-store/promotion",
    },
    {
      key: Modules.REGION,
      resolve: "@band-store/region",
    },
    {
      key: Modules.CUSTOMER,
      resolve: "@band-store/customer",
    },
    {
      key: Modules.SALES_CHANNEL,
      resolve: "@band-store/sales-channel",
    },
    {
      key: Modules.CART,
      resolve: "@band-store/cart",
    },
    {
      key: Modules.WORKFLOW_ENGINE,
      resolve: "@band-store/workflow-engine-inmemory",
    },
    {
      key: Modules.API_KEY,
      resolve: "@band-store/api-key",
    },
    {
      key: Modules.STORE,
      resolve: "@band-store/store",
    },
    {
      key: Modules.TAX,
      resolve: "@band-store/tax",
      options: {
        providers: [customTaxProviderRegistration],
      },
    },
    {
      key: Modules.CURRENCY,
      resolve: "@band-store/currency",
    },
    {
      key: Modules.ORDER,
      resolve: "@band-store/order",
    },
    {
      key: Modules.PAYMENT,
      resolve: "@band-store/payment",
      options: {
        providers: [customPaymentProvider],
      },
    },
    {
      key: Modules.FULFILLMENT,
      resolve: "@band-store/fulfillment",
      options: {
        providers: [
          customFulfillmentProvider,
          customFulfillmentProviderCalculated,
        ],
      },
    },
    {
      key: Modules.NOTIFICATION,
      options: {
        providers: [
          {
            resolve: "@band-store/notification-local",
            id: "local-notification-provider",
            options: {
              name: "Local Notification Provider",
              channels: ["log", "email"],
            },
          },
        ],
      },
    },
    {
      key: Modules.INDEX,
      resolve: "@band-store/index",
      disable: process.env.ENABLE_INDEX_MODULE !== "true",
    },
    {
      key: "brand",
      resolve: "src/modules/brand",
    },
    {
      key: Modules.RBAC,
      resolve: "@band-store/rbac",
    },
  ],
})
