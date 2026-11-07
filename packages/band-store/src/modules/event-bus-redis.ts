import RedisEventBusModule from "@band-store/event-bus-redis"

export * from "@band-store/event-bus-redis"

export default RedisEventBusModule
export const discoveryPath = require.resolve("@band-store/event-bus-redis")
