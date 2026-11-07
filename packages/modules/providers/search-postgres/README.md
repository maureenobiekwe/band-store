<p align="center">
  <a href="">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Band Store logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  @band-store/search-postgres
</h1>

<h4 align="center">
  Documentation |
  Website
</h4>

<p align="center">
  Building blocks for digital commerce
</p>
<p align="center">
  <a href="">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Band Store is released under the MIT license." />
  </a>
  <a href="">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="">
    <img src="" alt="Follow @band-store" />
  </a>
</p>

PostgreSQL Search Module Provider for Band Store: full-text search, typo tolerance, filters, and facets over your search indexes, stored in the application's own PostgreSQL database. It's the default search provider, so search works without an external search engine. It ships with `@band-store/band-store` and is registered through the `@band-store/band-store/search-postgres` path.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/search-postgres` |
| Type | Module Provider (Search Module) |
| Provider ID | `search-postgres` |
| Registered by default | Yes, with `id: "postgres"` (`engine: "native"` when self-hosted, `"lakebase"` on Band Store Cloud) |
| Import from | `@band-store/band-store/search-postgres` |

## Engines

| Engine | Where | Keyword search | Vector search |
| --- | --- | --- | --- |
| `native` (default) | Any PostgreSQL database | PostgreSQL full-text search (`tsvector`) with `pg_trgm` typo tolerance | Not supported |
| `lakebase` | Band Store Cloud only | BM25 (`lakebase_bm25`) with `pg_trgm` typo tolerance | ANN (`lakebase_ann`), and hybrid keyword + vector search |

## Features

- Free-text search with field weights and `match_strategy` `"all"` (default), `"any"`, or `"last"` (typeahead: the last term matches as a prefix).
- Filters with `$eq`, `$ne`, `$in`, `$nin`, range operators, and `$and` / `$or` / `$not`. On array fields, a bare value or `$eq` means "contains".
- Value, range, and stats facets scoped to the query's matches.
- `distinct` (one hit per value) and `min_score`.
- Vector and hybrid search on the `lakebase` engine. On `native`, vector fields are dropped from the index with a warning, and vector queries are rejected.

Highlighting, geo fields, cursor pagination, and query-time locales aren't supported and are rejected.

## Installation

No installation needed. The provider is a dependency of `@band-store/band-store` and is registered by default.

## Usage

Register the provider yourself to pass options:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/search",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/search-postgres",
            id: "postgres",
            options: {
              // requires a medusa_search_german text search configuration
              language: "german",
            },
          },
        ],
      },
    },
  ],
})
```

Then run the migrations, which enable the `pg_trgm` and `unaccent` extensions, create the `medusa_search_english` text search configuration, and create your search indexes:

```bash
npx bandStore db:migrate
```

To create or update only the search indexes, run `npx bandStore db:migrate:search`.

If you set `language` to anything other than `english`, create a matching `medusa_search_<language>` text search configuration yourself.

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `engine` | `"native" \| "lakebase"` | The search backend. `lakebase` works only on Band Store Cloud. | `"native"` |
| `language` | `string` | The PostgreSQL text search configuration language, such as `english` or `simple`. | `"english"` |
| `embedder` | `(text: string) => Promise<number[]>` | Turns text into an embedding. Required for vector fields that use `.embed()` and for `search_options.vector.query`. | - |
| `vector_distance` | `"cosine" \| "l2" \| "inner_product"` | Distance metric for vector indexes. | `"cosine"` |

## Resources

- PostgreSQL Search Module Provider
- Search Module
- Search Index Definitions
- Search with Query
