export const Modules = {
  ANALYTICS: "analytics",
  AUTH: "auth",
  CACHE: "cache",
  CART: "cart",
  CUSTOMER: "customer",
  EVENT_BUS: "event_bus",
  INVENTORY: "inventory",
  LINK: "link_modules",
  PAYMENT: "payment",
  PRICING: "pricing",
  PRODUCT: "product",
  PROMOTION: "promotion",
  SALES_CHANNEL: "sales_channel",
  TAX: "tax",
  FULFILLMENT: "fulfillment",
  STOCK_LOCATION: "stock_location",
  USER: "user",
  WORKFLOW_ENGINE: "workflows",
  REGION: "region",
  ORDER: "order",
  API_KEY: "api_key",
  STORE: "store",
  CURRENCY: "currency",
  FILE: "file",
  NOTIFICATION: "notification",
  INDEX: "index",
  SEARCH: "search",
  LOCKING: "locking",
  SETTINGS: "settings",
  CACHING: "caching",
  TRANSLATION: "translation",
  RBAC: "rbac",
} as const

export const MODULE_PACKAGE_NAMES = {
  [Modules.ANALYTICS]: "@band-store/band-store/analytics",
  [Modules.AUTH]: "@band-store/band-store/auth",
  [Modules.CACHE]: "@band-store/band-store/cache-inmemory",
  [Modules.CART]: "@band-store/band-store/cart",
  [Modules.CUSTOMER]: "@band-store/band-store/customer",
  [Modules.EVENT_BUS]: "@band-store/band-store/event-bus-local",
  [Modules.INVENTORY]: "@band-store/band-store/inventory",
  [Modules.LINK]: "@band-store/band-store/link-modules",
  [Modules.PAYMENT]: "@band-store/band-store/payment",
  [Modules.PRICING]: "@band-store/band-store/pricing",
  [Modules.PRODUCT]: "@band-store/band-store/product",
  [Modules.PROMOTION]: "@band-store/band-store/promotion",
  [Modules.SALES_CHANNEL]: "@band-store/band-store/sales-channel",
  [Modules.FULFILLMENT]: "@band-store/band-store/fulfillment",
  [Modules.STOCK_LOCATION]: "@band-store/band-store/stock-location",
  [Modules.TAX]: "@band-store/band-store/tax",
  [Modules.USER]: "@band-store/band-store/user",
  [Modules.WORKFLOW_ENGINE]: "@band-store/band-store/workflow-engine-inmemory",
  [Modules.REGION]: "@band-store/band-store/region",
  [Modules.ORDER]: "@band-store/band-store/order",
  [Modules.API_KEY]: "@band-store/band-store/api-key",
  [Modules.STORE]: "@band-store/band-store/store",
  [Modules.CURRENCY]: "@band-store/band-store/currency",
  [Modules.FILE]: "@band-store/band-store/file",
  [Modules.NOTIFICATION]: "@band-store/band-store/notification",
  [Modules.INDEX]: "@band-store/band-store/index-module",
  [Modules.SEARCH]: "@band-store/band-store/search",
  [Modules.LOCKING]: "@band-store/band-store/locking",
  [Modules.SETTINGS]: "@band-store/band-store/settings",
  [Modules.CACHING]: "@band-store/band-store/caching",
  [Modules.TRANSLATION]: "@band-store/band-store/translation",
  [Modules.RBAC]: "@band-store/band-store/rbac",
}

export const REVERSED_MODULE_PACKAGE_NAMES = Object.entries(
  MODULE_PACKAGE_NAMES
).reduce((acc, [key, value]) => {
  acc[value] = key
  return acc
}, {})

// TODO: temporary fix until the event bus, cache and workflow engine are migrated to use providers and therefore only a single resolution will be good
export const TEMPORARY_REDIS_MODULE_PACKAGE_NAMES = {
  [Modules.EVENT_BUS]: "@band-store/band-store/event-bus-redis",
  [Modules.CACHE]: "@band-store/band-store/cache-redis",
  [Modules.WORKFLOW_ENGINE]: "@band-store/band-store/workflow-engine-redis",
  [Modules.LOCKING]: "@band-store/band-store/locking-redis",
}

REVERSED_MODULE_PACKAGE_NAMES[
  TEMPORARY_REDIS_MODULE_PACKAGE_NAMES[Modules.EVENT_BUS]
] = Modules.EVENT_BUS
REVERSED_MODULE_PACKAGE_NAMES[
  TEMPORARY_REDIS_MODULE_PACKAGE_NAMES[Modules.CACHE]
] = Modules.CACHE
REVERSED_MODULE_PACKAGE_NAMES[
  TEMPORARY_REDIS_MODULE_PACKAGE_NAMES[Modules.WORKFLOW_ENGINE]
] = Modules.WORKFLOW_ENGINE
REVERSED_MODULE_PACKAGE_NAMES[
  TEMPORARY_REDIS_MODULE_PACKAGE_NAMES[Modules.LOCKING]
] = Modules.LOCKING

/**
 * Making modules be referenced as a type as well.
 */
export type Modules = (typeof Modules)[keyof typeof Modules]
export const ModuleRegistrationName = Modules
