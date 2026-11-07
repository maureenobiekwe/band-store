import SearchPostgresProvider from "@band-store/search-postgres"

export * from "@band-store/search-postgres"

export default SearchPostgresProvider

export const discoveryPath = require.resolve("@band-store/search-postgres")
