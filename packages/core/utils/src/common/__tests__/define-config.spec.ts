import path from "path"
import { Modules } from "../../modules-sdk"
import { defineConfig } from "../define-config"

const FIXTURES_ROOT = path.resolve(__dirname, "../__fixtures__")

expect.addSnapshotSerializer({
  test: (val) => typeof val === "string" && val.startsWith(FIXTURES_ROOT),
  serialize: (val: string) => `"<fixtures>${val.slice(FIXTURES_ROOT.length)}"`,
})

describe("defineConfig", function () {
  const CLOUD_ENV_VARS = [
    "BAND_STORE_CLOUD_ENVIRONMENT_HANDLE",
    "BAND_STORE_CLOUD_API_KEY",
    "BAND_STORE_CLOUD_WEBHOOK_SECRET",
    "BAND_STORE_CLOUD_EMAILS_ENDPOINT",
    "BAND_STORE_CLOUD_PAYMENTS_ENDPOINT",
    "BAND_STORE_CLOUD_SEARCH_ENDPOINT",
    "BAND_STORE_CLOUD_OAUTH_AUTHORIZE_ENDPOINT",
    "BAND_STORE_CLOUD_OAUTH_TOKEN_ENDPOINT",
    "BAND_STORE_CLOUD_OAUTH_CALLBACK_URL",
    "BAND_STORE_CLOUD_OAUTH_DISABLED",
    "BAND_STORE_CLOUD_OAUTH_JWKS_ENDPOINT",
    "BAND_STORE_CLOUD_OAUTH_AUDIENCE",
    "BAND_STORE_CLOUD_OAUTH_CLIENT_SECRET",
  ]
  const savedCloudEnv: Record<string, string | undefined> = {}

  beforeEach(() => {
    CLOUD_ENV_VARS.forEach((key) => {
      savedCloudEnv[key] = process.env[key]
      delete process.env[key]
    })
  })

  afterEach(() => {
    CLOUD_ENV_VARS.forEach((key) => {
      if (savedCloudEnv[key] === undefined) {
        delete process.env[key]
      } else {
        process.env[key] = savedCloudEnv[key]
      }
    })
  })

  it("should merge empty config with the defaults", function () {
    expect(defineConfig()).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@band-store/band-store/file-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "native",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should include auth mfa encryption key when configured", function () {
    const originalEnv = { ...process.env }
    process.env.AUTH_MFA_ENCRYPTION_KEY = "test-mfa-key"

    let config!: ReturnType<typeof defineConfig>
    try {
      config = defineConfig()
    } finally {
      process.env = { ...originalEnv }
    }

    expect(config.modules?.[Modules.AUTH]).toEqual(
      expect.objectContaining({
        options: expect.objectContaining({
          mfa: {
            encryption_key: "test-mfa-key",
          },
        }),
      })
    )
  })

  it("should include auth mfa encryption key when auth options are customized", function () {
    const originalEnv = { ...process.env }
    process.env.AUTH_MFA_ENCRYPTION_KEY = "test-mfa-key"

    let config!: ReturnType<typeof defineConfig>
    try {
      config = defineConfig({
        modules: [
          {
            resolve: "@band-store/band-store/auth",
            options: {
              providers: [
                {
                  resolve: "@band-store/band-store/auth-emailpass",
                  id: "emailpass",
                  options: {
                    require_verification: true,
                  },
                },
              ],
            },
          },
        ],
      })
    } finally {
      process.env = { ...originalEnv }
    }

    expect(config.modules?.[Modules.AUTH]).toEqual(
      expect.objectContaining({
        options: expect.objectContaining({
          mfa: {
            encryption_key: "test-mfa-key",
          },
          providers: [
            {
              resolve: "@band-store/band-store/auth-emailpass",
              id: "emailpass",
              options: {
                require_verification: true,
              },
            },
          ],
        }),
      })
    )
  })

  it("should include auth mfa encryption key when object-style auth options are customized", function () {
    const originalEnv = { ...process.env }
    process.env.AUTH_MFA_ENCRYPTION_KEY = "test-mfa-key"

    let config!: ReturnType<typeof defineConfig>
    try {
      config = defineConfig({
        modules: {
          auth: {
            options: {
              providers: [
                {
                  resolve: "@band-store/band-store/auth-emailpass",
                  id: "emailpass",
                  options: {
                    require_verification: true,
                  },
                },
              ],
            },
          },
        },
      })
    } finally {
      process.env = { ...originalEnv }
    }

    expect(config.modules?.[Modules.AUTH]).toEqual(
      expect.objectContaining({
        options: expect.objectContaining({
          mfa: {
            encryption_key: "test-mfa-key",
          },
          providers: [
            {
              resolve: "@band-store/band-store/auth-emailpass",
              id: "emailpass",
              options: {
                require_verification: true,
              },
            },
          ],
        }),
      })
    )
  })

  it("should preserve custom auth mfa encryption key", function () {
    const originalEnv = { ...process.env }
    process.env.AUTH_MFA_ENCRYPTION_KEY = "test-mfa-key"

    let config!: ReturnType<typeof defineConfig>
    try {
      config = defineConfig({
        modules: [
          {
            resolve: "@band-store/band-store/auth",
            options: {
              mfa: {
                encryption_key: "custom-mfa-key",
                challenge_ttl_seconds: 600,
              },
            },
          },
        ],
      })
    } finally {
      process.env = { ...originalEnv }
    }

    expect(config.modules?.[Modules.AUTH]).toEqual(
      expect.objectContaining({
        options: expect.objectContaining({
          mfa: {
            encryption_key: "custom-mfa-key",
            challenge_ttl_seconds: 600,
          },
        }),
      })
    )
  })

  it("should merge custom modules", function () {
    expect(
      defineConfig({
        modules: {
          GithubModuleService: {
            resolve: "./modules/github",
          },
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "GithubModuleService": {
            "resolve": "./modules/github",
          },
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@band-store/band-store/file-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "native",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should merge custom modules when an array is provided", function () {
    expect(
      defineConfig({
        modules: [
          {
            resolve: require.resolve("../__fixtures__/define-config/github"),
            options: {
              apiKey: "test",
            },
          },
        ],
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "GithubModuleService": {
            "options": {
              "apiKey": "test",
            },
            "resolve": "<fixtures>/define-config/github/index.ts",
          },
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@band-store/band-store/file-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "native",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should merge custom modules when an array is provided with a key to override the module registration name", function () {
    expect(
      defineConfig({
        modules: [
          {
            key: "GithubModuleServiceOverride",
            resolve: require.resolve("../__fixtures__/define-config/github"),
            options: {
              apiKey: "test",
            },
          },
        ],
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "GithubModuleServiceOverride": {
            "options": {
              "apiKey": "test",
            },
            "resolve": "<fixtures>/define-config/github/index.ts",
          },
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@band-store/band-store/file-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "native",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should merge custom project.http config", function () {
    expect(
      defineConfig({
        projectConfig: {
          http: {
            adminCors: "http://localhost:3000",
          } as any,
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@band-store/band-store/file-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "native",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:3000",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should include disabled modules", function () {
    expect(
      defineConfig({
        projectConfig: {
          http: {
            adminCors: "http://localhost:3000",
          } as any,
        },
        modules: {
          [Modules.CART]: false,
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "disable": true,
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@band-store/band-store/file-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "native",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:3000",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should include cloud-based modules when in cloud execution context", function () {
    const originalEnv = { ...process.env }

    process.env.EXECUTION_CONTEXT = "band-store-cloud"
    process.env.REDIS_URL = "redis://localhost:6379"
    process.env.CACHE_REDIS_URL = "redis://localhost:6379"
    process.env.S3_FILE_URL = ""
    process.env.S3_PREFIX = "test"
    process.env.S3_REGION = "us-east-1"
    process.env.S3_BUCKET = "band-store-cloud-test"
    process.env.S3_ENDPOINT = "https://s3.amazonaws.com"
    const res = defineConfig({})

    process.env = { ...originalEnv }

    expect(res).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "options": {
              "redisUrl": "redis://localhost:6379",
            },
            "resolve": "@band-store/band-store/cache-redis",
          },
          "caching": {
            "options": {
              "providers": [
                {
                  "id": "caching-redis",
                  "is_default": true,
                  "options": {
                    "redisUrl": "redis://localhost:6379",
                  },
                  "resolve": "@band-store/band-store/caching-redis",
                },
              ],
            },
            "resolve": "@band-store/band-store/caching",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "options": {
              "redisUrl": "redis://localhost:6379",
              "workerOptions": {
                "concurrency": 1,
              },
            },
            "resolve": "@band-store/band-store/event-bus-redis",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "s3",
                  "options": {
                    "authentication_method": "s3-iam-role",
                    "bucket": "band-store-cloud-test",
                    "endpoint": "https://s3.amazonaws.com",
                    "file_url": "",
                    "prefix": "test",
                    "region": "us-east-1",
                  },
                  "resolve": "@band-store/band-store/file-s3",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "options": {
              "providers": [
                {
                  "id": "locking-redis",
                  "is_default": true,
                  "options": {
                    "redisUrl": "redis://localhost:6379",
                  },
                  "resolve": "@band-store/band-store/locking-redis",
                },
              ],
            },
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "lakebase",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "options": {
              "redis": {
                "url": "redis://localhost:6379",
              },
            },
            "resolve": "@band-store/band-store/workflow-engine-redis",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "redisUrl": "redis://localhost:6379",
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should use inmemory modules in cloud environment if REDIS_URL is not set", function () {
    const originalEnv = { ...process.env }

    process.env.EXECUTION_CONTEXT = "band-store-cloud"
    delete process.env.REDIS_URL
    delete process.env.CACHE_REDIS_URL
    process.env.S3_FILE_URL = ""
    process.env.S3_PREFIX = "test"
    process.env.S3_REGION = "us-east-1"
    process.env.S3_BUCKET = "band-store-cloud-test"
    process.env.S3_ENDPOINT = "https://s3.amazonaws.com"
    const res = defineConfig({})

    process.env = { ...originalEnv }

    expect(res).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "s3",
                  "options": {
                    "authentication_method": "s3-iam-role",
                    "bucket": "band-store-cloud-test",
                    "endpoint": "https://s3.amazonaws.com",
                    "file_url": "",
                    "prefix": "test",
                    "region": "us-east-1",
                  },
                  "resolve": "@band-store/band-store/file-s3",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "lakebase",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "redisUrl": undefined,
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should include cloud-based config with dynamo db", function () {
    const originalEnv = { ...process.env }

    process.env.EXECUTION_CONTEXT = "band-store-cloud"
    process.env.REDIS_URL = "redis://localhost:6379"
    process.env.CACHE_REDIS_URL = "redis://localhost:6379"
    process.env.S3_FILE_URL = ""
    process.env.S3_PREFIX = "test"
    process.env.S3_REGION = "us-east-1"
    process.env.S3_BUCKET = "band-store-cloud-test"
    process.env.S3_ENDPOINT = "https://s3.amazonaws.com"
    process.env.SESSION_STORE = "dynamodb"
    const res = defineConfig({})

    process.env = { ...originalEnv }

    expect(res).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "options": {
              "redisUrl": "redis://localhost:6379",
            },
            "resolve": "@band-store/band-store/cache-redis",
          },
          "caching": {
            "options": {
              "providers": [
                {
                  "id": "caching-redis",
                  "is_default": true,
                  "options": {
                    "redisUrl": "redis://localhost:6379",
                  },
                  "resolve": "@band-store/band-store/caching-redis",
                },
              ],
            },
            "resolve": "@band-store/band-store/caching",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "options": {
              "redisUrl": "redis://localhost:6379",
              "workerOptions": {
                "concurrency": 1,
              },
            },
            "resolve": "@band-store/band-store/event-bus-redis",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "s3",
                  "options": {
                    "authentication_method": "s3-iam-role",
                    "bucket": "band-store-cloud-test",
                    "endpoint": "https://s3.amazonaws.com",
                    "file_url": "",
                    "prefix": "test",
                    "region": "us-east-1",
                  },
                  "resolve": "@band-store/band-store/file-s3",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "options": {
              "providers": [
                {
                  "id": "locking-redis",
                  "is_default": true,
                  "options": {
                    "redisUrl": "redis://localhost:6379",
                  },
                  "resolve": "@band-store/band-store/locking-redis",
                },
              ],
            },
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "lakebase",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "options": {
              "redis": {
                "url": "redis://localhost:6379",
              },
            },
            "resolve": "@band-store/band-store/workflow-engine-redis",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "redisUrl": "redis://localhost:6379",
          "sessionOptions": {
            "dynamodbOptions": {
              "hashKey": "id",
              "initialized": true,
              "prefix": "sess:",
              "readCapacityUnits": 5,
              "skipThrowMissingSpecialKeys": true,
              "table": "band-store-sessions",
              "writeCapacityUnits": 5,
            },
          },
        },
      }
    `)
  })

  it("should allow overriding cloud-only dynamodb config values via environment variables", function () {
    const originalEnv = { ...process.env }

    process.env.EXECUTION_CONTEXT = "band-store-cloud"
    process.env.REDIS_URL = "redis://localhost:6379"
    process.env.CACHE_REDIS_URL = "redis://localhost:6379"
    process.env.S3_FILE_URL = ""
    process.env.S3_PREFIX = "test"
    process.env.S3_REGION = "us-east-1"
    process.env.S3_BUCKET = "band-store-cloud-test"
    process.env.S3_ENDPOINT = "https://s3.amazonaws.com"
    process.env.SESSION_STORE = "dynamodb"
    process.env.DYNAMO_DB_SESSIONS_CREATE_TABLE = "true"
    process.env.DYNAMO_DB_SESSIONS_HASH_KEY = "user_id"
    process.env.DYNAMO_DB_SESSIONS_PREFIX = "my_session:"
    process.env.DYNAMO_DB_SESSIONS_TABLE = "test-sessions"
    process.env.DYNAMO_DB_SESSIONS_READ_UNITS = "10"
    process.env.DYNAMO_DB_SESSIONS_WRITE_UNITS = "10"
    const res = defineConfig({})

    process.env = { ...originalEnv }

    expect(res).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "options": {
              "redisUrl": "redis://localhost:6379",
            },
            "resolve": "@band-store/band-store/cache-redis",
          },
          "caching": {
            "options": {
              "providers": [
                {
                  "id": "caching-redis",
                  "is_default": true,
                  "options": {
                    "redisUrl": "redis://localhost:6379",
                  },
                  "resolve": "@band-store/band-store/caching-redis",
                },
              ],
            },
            "resolve": "@band-store/band-store/caching",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "options": {
              "redisUrl": "redis://localhost:6379",
              "workerOptions": {
                "concurrency": 1,
              },
            },
            "resolve": "@band-store/band-store/event-bus-redis",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "s3",
                  "options": {
                    "authentication_method": "s3-iam-role",
                    "bucket": "band-store-cloud-test",
                    "endpoint": "https://s3.amazonaws.com",
                    "file_url": "",
                    "prefix": "test",
                    "region": "us-east-1",
                  },
                  "resolve": "@band-store/band-store/file-s3",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "options": {
              "providers": [
                {
                  "id": "locking-redis",
                  "is_default": true,
                  "options": {
                    "redisUrl": "redis://localhost:6379",
                  },
                  "resolve": "@band-store/band-store/locking-redis",
                },
              ],
            },
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "lakebase",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "options": {
              "redis": {
                "url": "redis://localhost:6379",
              },
            },
            "resolve": "@band-store/band-store/workflow-engine-redis",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "redisUrl": "redis://localhost:6379",
          "sessionOptions": {
            "dynamodbOptions": {
              "hashKey": "user_id",
              "initialized": false,
              "prefix": "my_session:",
              "readCapacityUnits": 10,
              "skipThrowMissingSpecialKeys": true,
              "table": "test-sessions",
              "writeCapacityUnits": 10,
            },
          },
        },
      }
    `)
  })

  it("should include default plugins", function () {
    const config = defineConfig()
    expect(config.plugins).toEqual([
      { resolve: "@band-store/draft-order", options: {} },
    ])
  })

  it("should append custom plugins to defaults", function () {
    const config = defineConfig({
      plugins: [
        { resolve: "@band-store/custom-plugin", options: { key: "value" } },
      ],
    })
    expect(config.plugins).toEqual([
      { resolve: "@band-store/draft-order", options: {} },
      { resolve: "@band-store/custom-plugin", options: { key: "value" } },
    ])
  })

  it("should handle multiple custom plugins", function () {
    const config = defineConfig({
      plugins: [
        { resolve: "@band-store/plugin-one", options: { setting: "a" } },
        { resolve: "@band-store/plugin-two", options: { setting: "b" } },
        { resolve: "./local-plugin", options: {} },
      ],
    })
    expect(config.plugins).toEqual([
      { resolve: "@band-store/draft-order", options: {} },
      { resolve: "@band-store/plugin-one", options: { setting: "a" } },
      { resolve: "@band-store/plugin-two", options: { setting: "b" } },
      { resolve: "./local-plugin", options: {} },
    ])
  })

  it("should merge plugins", function () {
    const config = defineConfig({
      plugins: [
        { resolve: "@band-store/draft-order", options: { setting: "a" } },
      ],
    })
    expect(config.plugins).toEqual([
      { resolve: "@band-store/draft-order", options: { setting: "a" } },
    ])
  })

  it("should include plugins in cloud environment", function () {
    const originalEnv = { ...process.env }
    process.env.EXECUTION_CONTEXT = "band-store-cloud"

    const config = defineConfig({
      plugins: [
        { resolve: "@band-store/cloud-plugin", options: { cloud: true } },
      ],
    })

    process.env = { ...originalEnv }

    expect(config.plugins).toEqual([
      { resolve: "@band-store/draft-order", options: {} },
      { resolve: "@band-store/cloud-plugin", options: { cloud: true } },
    ])
  })

  it("should handle empty plugins array", function () {
    const config = defineConfig({
      plugins: [],
    })
    expect(config.plugins).toEqual([
      { resolve: "@band-store/draft-order", options: {} },
    ])
  })

  it("should handle undefined plugins", function () {
    const config = defineConfig({
      modules: {},
    })
    expect(config.plugins).toEqual([
      { resolve: "@band-store/draft-order", options: {} },
    ])
  })

  it("should allow custom dynamodb config", function () {
    expect(
      defineConfig({
        projectConfig: {
          http: {
            adminCors: "http://localhost:3000",
          } as any,
          sessionOptions: {
            dynamodbOptions: {
              clientOptions: {
                endpoint: "http://localhost:8000",
              },
              table: "band-store-sessions",
              writeCapacityUnits: 25,
              readCapacityUnits: 25,
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@band-store/band-store/file-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "native",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:3000",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "sessionOptions": {
            "dynamodbOptions": {
              "clientOptions": {
                "endpoint": "http://localhost:8000",
              },
              "readCapacityUnits": 25,
              "table": "band-store-sessions",
              "writeCapacityUnits": 25,
            },
          },
        },
      }
    `)
  })

  it("should add cloud options to the project config and relevant modules if the environment variables are set", function () {
    const originalEnv = { ...process.env }
    process.env.BAND_STORE_BACKEND_URL = "test-backend-url"
    process.env.BAND_STORE_CLOUD_ENVIRONMENT_HANDLE = "test-environment"
    process.env.BAND_STORE_CLOUD_API_KEY = "test-api-key"
    process.env.BAND_STORE_CLOUD_EMAILS_ENDPOINT = "test-emails-endpoint"
    process.env.BAND_STORE_CLOUD_PAYMENTS_ENDPOINT = "test-payments-endpoint"
    process.env.BAND_STORE_CLOUD_PAYMENT_ACCOUNTS = "default, eu"
    process.env.BAND_STORE_CLOUD_WEBHOOK_SECRET = "test-webhook-secret"
    process.env.BAND_STORE_CLOUD_OAUTH_AUTHORIZE_ENDPOINT =
      "test-oauth-authorize-endpoint"
    process.env.BAND_STORE_CLOUD_OAUTH_TOKEN_ENDPOINT = "test-oauth-token-endpoint"
    process.env.BAND_STORE_CLOUD_OAUTH_DISABLED = "true"
    process.env.BAND_STORE_CLOUD_OAUTH_CLIENT_SECRET = "test-oauth-client-secret"
    const config = defineConfig()
    process.env = { ...originalEnv }

    expect(config).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "test-backend-url",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "cloud": {
                "api_key": "test-api-key",
                "callback_url": "test-backend-url/app/login?auth_provider=cloud",
                "disabled": true,
                "environment_handle": "test-environment",
                "oauth_audience": undefined,
                "oauth_authorize_endpoint": "test-oauth-authorize-endpoint",
                "oauth_client_secret": "test-oauth-client-secret",
                "oauth_jwks_uri": undefined,
                "oauth_token_endpoint": "test-oauth-token-endpoint",
              },
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@band-store/band-store/file-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "cloud": {
                "api_key": "test-api-key",
                "endpoint": "test-emails-endpoint",
                "environment_handle": "test-environment",
              },
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "options": {
              "cloud": {
                "api_key": "test-api-key",
                "endpoint": "test-payments-endpoint",
                "environment_handle": "test-environment",
                "payment_accounts": [
                  "default",
                  "eu",
                ],
                "webhook_secret": "test-webhook-secret",
              },
            },
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "cloud": {
                "api_key": "test-api-key",
                "endpoint": undefined,
                "environment_handle": "test-environment",
              },
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "native",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "cloud": {
            "apiKey": "test-api-key",
            "emailsEndpoint": "test-emails-endpoint",
            "environmentHandle": "test-environment",
            "oauthAudience": undefined,
            "oauthAuthorizeEndpoint": "test-oauth-authorize-endpoint",
            "oauthCallbackUrl": undefined,
            "oauthClientSecret": "test-oauth-client-secret",
            "oauthDisabled": true,
            "oauthJwksUri": undefined,
            "oauthTokenEndpoint": "test-oauth-token-endpoint",
            "paymentAccounts": [
              "default",
              "eu",
            ],
            "paymentsEndpoint": "test-payments-endpoint",
            "searchEndpoint": undefined,
            "webhookSecret": "test-webhook-secret",
          },
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should merge custom projectConfig.cloud", function () {
    const originalEnv = { ...process.env }
    process.env.BAND_STORE_CLOUD_ENVIRONMENT_HANDLE = "test-environment"
    process.env.BAND_STORE_CLOUD_API_KEY = "test-api-key"
    process.env.BAND_STORE_CLOUD_EMAILS_ENDPOINT = "test-emails-endpoint"
    process.env.BAND_STORE_CLOUD_PAYMENTS_ENDPOINT = "test-payments-endpoint"
    process.env.BAND_STORE_CLOUD_WEBHOOK_SECRET = "test-webhook-secret"
    const config = defineConfig({
      projectConfig: {
        http: {} as any,
        cloud: {
          environmentHandle: "overriden-environment",
          apiKey: "overriden-api-key",
          webhookSecret: "overriden-webhook-secret",
          emailsEndpoint: "overriden-emails-endpoint",
          paymentsEndpoint: "overriden-payments-endpoint",
          oauthAuthorizeEndpoint: "overriden-oauth-authorize-endpoint",
          oauthTokenEndpoint: "overriden-oauth-token-endpoint",
          oauthDisabled: true,
        },
      },
    })
    process.env = { ...originalEnv }

    expect(config).toMatchInlineSnapshot(`
      {
        "admin": {
          "backendUrl": "/",
          "maxUploadFileSize": 1048576,
          "path": "/app",
        },
        "featureFlags": {},
        "logger": undefined,
        "modules": {
          "api_key": {
            "resolve": "@band-store/band-store/api-key",
          },
          "auth": {
            "options": {
              "cloud": {
                "api_key": "overriden-api-key",
                "callback_url": "//app/login?auth_provider=cloud",
                "disabled": true,
                "environment_handle": "overriden-environment",
                "oauth_audience": undefined,
                "oauth_authorize_endpoint": "overriden-oauth-authorize-endpoint",
                "oauth_client_secret": undefined,
                "oauth_jwks_uri": undefined,
                "oauth_token_endpoint": "overriden-oauth-token-endpoint",
              },
              "mfa": {
                "encryption_key": undefined,
              },
              "providers": [
                {
                  "id": "emailpass",
                  "resolve": "@band-store/band-store/auth-emailpass",
                },
              ],
            },
            "resolve": "@band-store/band-store/auth",
          },
          "cache": {
            "resolve": "@band-store/band-store/cache-inmemory",
          },
          "cart": {
            "resolve": "@band-store/band-store/cart",
          },
          "currency": {
            "resolve": "@band-store/band-store/currency",
          },
          "customer": {
            "resolve": "@band-store/band-store/customer",
          },
          "event_bus": {
            "resolve": "@band-store/band-store/event-bus-local",
          },
          "file": {
            "options": {
              "providers": [
                {
                  "id": "local",
                  "resolve": "@band-store/band-store/file-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/file",
          },
          "fulfillment": {
            "options": {
              "providers": [
                {
                  "id": "manual",
                  "resolve": "@band-store/band-store/fulfillment-manual",
                },
              ],
            },
            "resolve": "@band-store/band-store/fulfillment",
          },
          "inventory": {
            "resolve": "@band-store/band-store/inventory",
          },
          "locking": {
            "resolve": "@band-store/band-store/locking",
          },
          "notification": {
            "options": {
              "cloud": {
                "api_key": "overriden-api-key",
                "endpoint": "overriden-emails-endpoint",
                "environment_handle": "overriden-environment",
              },
              "providers": [
                {
                  "id": "local",
                  "options": {
                    "channels": [
                      "feed",
                    ],
                    "name": "Local Notification Provider",
                  },
                  "resolve": "@band-store/band-store/notification-local",
                },
              ],
            },
            "resolve": "@band-store/band-store/notification",
          },
          "order": {
            "resolve": "@band-store/band-store/order",
          },
          "payment": {
            "options": {
              "cloud": {
                "api_key": "overriden-api-key",
                "endpoint": "overriden-payments-endpoint",
                "environment_handle": "overriden-environment",
                "payment_accounts": undefined,
                "webhook_secret": "overriden-webhook-secret",
              },
            },
            "resolve": "@band-store/band-store/payment",
          },
          "pricing": {
            "resolve": "@band-store/band-store/pricing",
          },
          "product": {
            "resolve": "@band-store/band-store/product",
          },
          "promotion": {
            "resolve": "@band-store/band-store/promotion",
          },
          "region": {
            "resolve": "@band-store/band-store/region",
          },
          "sales_channel": {
            "resolve": "@band-store/band-store/sales-channel",
          },
          "search": {
            "options": {
              "cloud": {
                "api_key": "overriden-api-key",
                "endpoint": undefined,
                "environment_handle": "overriden-environment",
              },
              "providers": [
                {
                  "id": "postgres",
                  "options": {
                    "engine": "native",
                  },
                  "resolve": "@band-store/band-store/search-postgres",
                },
              ],
            },
            "resolve": "@band-store/band-store/search",
          },
          "settings": {
            "resolve": "@band-store/band-store/settings",
          },
          "stock_location": {
            "resolve": "@band-store/band-store/stock-location",
          },
          "store": {
            "resolve": "@band-store/band-store/store",
          },
          "tax": {
            "resolve": "@band-store/band-store/tax",
          },
          "translation": {
            "disable": true,
            "resolve": "@band-store/band-store/translation",
          },
          "user": {
            "options": {
              "jwt_options": undefined,
              "jwt_public_key": undefined,
              "jwt_secret": "supersecret",
              "jwt_verify_options": undefined,
            },
            "resolve": "@band-store/band-store/user",
          },
          "workflows": {
            "resolve": "@band-store/band-store/workflow-engine-inmemory",
          },
        },
        "plugins": [
          {
            "options": {},
            "resolve": "@band-store/draft-order",
          },
        ],
        "projectConfig": {
          "cloud": {
            "apiKey": "overriden-api-key",
            "emailsEndpoint": "overriden-emails-endpoint",
            "environmentHandle": "overriden-environment",
            "oauthAudience": undefined,
            "oauthAuthorizeEndpoint": "overriden-oauth-authorize-endpoint",
            "oauthCallbackUrl": undefined,
            "oauthClientSecret": undefined,
            "oauthDisabled": true,
            "oauthJwksUri": undefined,
            "oauthTokenEndpoint": "overriden-oauth-token-endpoint",
            "paymentAccounts": undefined,
            "paymentsEndpoint": "overriden-payments-endpoint",
            "searchEndpoint": undefined,
            "webhookSecret": "overriden-webhook-secret",
          },
          "databaseUrl": "postgres://localhost/band-store-starter-default",
          "http": {
            "adminCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authCors": "http://localhost:7000,http://localhost:7001,http://localhost:5173",
            "authMethodsPerActor": {
              "user": [
                "emailpass",
              ],
            },
            "cookieSecret": "supersecret",
            "jwtPublicKey": undefined,
            "jwtSecret": "supersecret",
            "rbacActorTypes": [
              "user",
            ],
            "restrictedFields": {
              "store": [
                "order",
                "orders",
              ],
            },
            "storeCors": "http://localhost:8000",
          },
          "redisOptions": {
            "retryStrategy": [Function],
          },
          "sessionOptions": {},
        },
      }
    `)
  })

  it("should use BandStore Cloud search when BAND_STORE_CLOUD_SEARCH_ENDPOINT is set in cloud", function () {
    const originalEnv = { ...process.env }

    process.env.EXECUTION_CONTEXT = "band-store-cloud"
    process.env.BAND_STORE_CLOUD_ENVIRONMENT_HANDLE = "test-environment"
    process.env.BAND_STORE_CLOUD_API_KEY = "test-api-key"
    process.env.BAND_STORE_CLOUD_SEARCH_ENDPOINT = ""

    const config = defineConfig()

    process.env = { ...originalEnv }

    expect(config.modules!["search"]).toEqual({
      resolve: "@band-store/band-store/search",
      options: {
        cloud: {
          api_key: "test-api-key",
          endpoint: "",
          environment_handle: "test-environment",
        },
        providers: [
          {
            id: "postgres",
            options: {
              engine: "lakebase",
            },
            resolve: "@band-store/band-store/search-postgres",
          },
        ],
        default_provider: "search-band-store",
      },
    })
    expect(config.projectConfig.cloud?.searchEndpoint).toBe(
      ""
    )
  })

  describe("secret defaults", function () {
    const originalNodeEnv = process.env.NODE_ENV
    const originalJwtSecret = process.env.JWT_SECRET
    const originalCookieSecret = process.env.COOKIE_SECRET

    afterEach(() => {
      process.env.NODE_ENV = originalNodeEnv
      if (originalJwtSecret === undefined) {
        delete process.env.JWT_SECRET
      } else {
        process.env.JWT_SECRET = originalJwtSecret
      }
      if (originalCookieSecret === undefined) {
        delete process.env.COOKIE_SECRET
      } else {
        process.env.COOKIE_SECRET = originalCookieSecret
      }
    })

    it("should apply the default secret in non-production environments when no env vars are set", function () {
      process.env.NODE_ENV = "development"
      delete process.env.JWT_SECRET
      delete process.env.COOKIE_SECRET

      const config = defineConfig()

      expect(config.projectConfig.http.jwtSecret).toBe("supersecret")
      expect(config.projectConfig.http.cookieSecret).toBe("supersecret")
      expect((config.modules!["user"] as any).options.jwt_secret).toBe(
        "supersecret"
      )
    })

    it("should not apply the default secret when NODE_ENV is production", function () {
      process.env.NODE_ENV = "production"
      delete process.env.JWT_SECRET
      delete process.env.COOKIE_SECRET

      const config = defineConfig()

      expect(config.projectConfig.http.jwtSecret).toBeUndefined()
      expect(config.projectConfig.http.cookieSecret).toBeUndefined()
      expect(
        (config.modules!["user"] as any).options.jwt_secret
      ).toBeUndefined()
    })

    it("should not apply the default secret when NODE_ENV is prod", function () {
      process.env.NODE_ENV = "prod"
      delete process.env.JWT_SECRET
      delete process.env.COOKIE_SECRET

      const config = defineConfig()

      expect(config.projectConfig.http.jwtSecret).toBeUndefined()
      expect(config.projectConfig.http.cookieSecret).toBeUndefined()
      expect(
        (config.modules!["user"] as any).options.jwt_secret
      ).toBeUndefined()
    })

    it("should use the configured env var secrets in production", function () {
      process.env.NODE_ENV = "production"
      process.env.JWT_SECRET = "prod-jwt-secret"
      process.env.COOKIE_SECRET = "prod-cookie-secret"

      const config = defineConfig()

      expect(config.projectConfig.http.jwtSecret).toBe("prod-jwt-secret")
      expect(config.projectConfig.http.cookieSecret).toBe("prod-cookie-secret")
      expect((config.modules!["user"] as any).options.jwt_secret).toBe(
        "prod-jwt-secret"
      )
    })

    it("should prefer user-provided jwtSecret in production over the missing env var", function () {
      process.env.NODE_ENV = "production"
      delete process.env.JWT_SECRET
      delete process.env.COOKIE_SECRET

      const config = defineConfig({
        projectConfig: {
          http: {
            jwtSecret: "configured-jwt-secret",
            cookieSecret: "configured-cookie-secret",
          },
        } as any,
      })

      expect(config.projectConfig.http.jwtSecret).toBe("configured-jwt-secret")
      expect(config.projectConfig.http.cookieSecret).toBe(
        "configured-cookie-secret"
      )
      expect((config.modules!["user"] as any).options.jwt_secret).toBe(
        "configured-jwt-secret"
      )
    })
  })
})
