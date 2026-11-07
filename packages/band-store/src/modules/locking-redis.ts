import RedisLockingProvider from "@band-store/locking-redis"

export * from "@band-store/locking-redis"

export default RedisLockingProvider
export const discoveryPath = require.resolve("@band-store/locking-redis")
