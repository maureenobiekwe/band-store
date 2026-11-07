import LocalEventBusModule from "@band-store/event-bus-local"

export * from "@band-store/event-bus-local"
export default LocalEventBusModule
export const discoveryPath = require.resolve("@band-store/event-bus-local")
