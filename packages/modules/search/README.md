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
  @band-store/search
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

Search Module for Band Store: manages search indexes, their versions, and their sync history, and serves full-text search with filtering, sorting, and faceting through pluggable search providers. Use it to make products or other entities searchable in the storefront or admin. It ships with `@band-store/band-store` and is registered by default with the PostgreSQL provider, so Band Store applications don't install it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/search` |
| Type | Infrastructure Module |
| Module key | `Modules.SEARCH` (`"search"`) |
| Registered by default | Yes, with the `search-postgres` provider |
| Import from | `@band-store/band-store/search` |

## Features

- Declare search indexes in `src/search` with `defineSearchIndex` from `@band-store/framework/utils`.
- Create, migrate, and fill indexes, and keep them up to date from events.
- Register more than one provider and point each index at a different engine.
- Registers the Band Store Search provider (`search-band-store`) automatically when Band Store Cloud search credentials are configured.

## Search providers

The module delegates indexing and querying to Search Module Providers, registered through the `providers` option.

Official providers in this repository:

- [`@band-store/search-postgres`](../providers/search-postgres) (PostgreSQL, backed by `tsvector` and `pg_trgm`)

## Installation

No installation needed. The module is included in `@band-store/band-store` and registered by default.

## Usage

To change the default configuration, register the module in `band-store-config.ts`:

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
            id: "search-postgres",
          },
        ],
      },
    },
  ],
})
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `providers` | `{ resolve: string, id: string, options?: Record<string, unknown> }[]` | Search Module Providers to register. | The PostgreSQL provider |
| `default_provider` | `string` | Identifier of the provider for indexes that don't name one, such as `search-postgres`. Required when more than one provider is registered. | The only registered provider |
| `index_prefix` | `string` | Prefix added to every physical index name, for search engines shared by multiple applications. | - |
| `reindex.batch_size` | `number` | Documents written to the engine per request while filling an index. | `100` |

## Resources

- Search Module
- Search Module Providers
- PostgreSQL Search Module Provider
- Index definitions
- Reindexing
