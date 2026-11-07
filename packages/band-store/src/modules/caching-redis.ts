import RedisCachingProvider from "@band-store/caching-redis"

export * from "@band-store/caching-redis"

export default RedisCachingProvider
export const discoveryPath = require.resolve("@band-store/caching-redis")
