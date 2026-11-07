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
  @band-store/index
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

Index Module for Band Store: ingests data from multiple modules (by default products, variants, prices, and sales channels, plus linked models marked `filterable`) into a single Postgres-backed store so you can filter data by its linked records. Use it through Query's `index` method when `query.graph` can't filter across module links. It ships with `@band-store/band-store` but is not registered by default, and the `/store/products` and `/admin/products` routes only use it when the `index_engine` feature flag is enabled.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/index` |
| Type | Infrastructure Module |
| Module key | `Modules.INDEX` (`"index"`) |
| Registered by default | No |
| Feature flag | `index_engine` (env `BAND_STORE_FF_INDEX_ENGINE`), off by default |

## Installation

No separate installation needed when you use `@band-store/band-store`. Register the module, then run migrations:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/index-module",
    },
  ],
})
```

```bash
npx bandStore db:migrate
```

To make the core product API routes use the index, set `BAND_STORE_FF_INDEX_ENGINE=true`. Data is ingested when the application starts. Keeping the index in sync with changes as they happen requires the Redis Event Module.

## Usage

```ts
import { ContainerRegistrationKeys } from "@band-store/framework/utils"

const query = container.resolve(ContainerRegistrationKeys.QUERY)

const { data: products } = await query.index({
  entity: "product",
  fields: ["id", "title", "sales_channels.id"],
  filters: {
    sales_channels: {
      id: "sc_123",
    },
  },
})
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `schema` | `string` | GraphQL schema of the entities and fields to ingest. Replaces the default schema. | Product, ProductVariant, Price, and SalesChannel |

## Resources

- Index Module
- Query
- Feature Flags
