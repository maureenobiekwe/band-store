import RedisCacheModule from "@band-store/cache-redis"

export * from "@band-store/cache-redis"

export default RedisCacheModule
export const discoveryPath = require.resolve("@band-store/cache-redis")
