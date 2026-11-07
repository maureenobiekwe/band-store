import PostgresLockingProvider from "@band-store/locking-postgres"

export * from "@band-store/locking-postgres"

export default PostgresLockingProvider
export const discoveryPath = require.resolve("@band-store/locking-postgres")
