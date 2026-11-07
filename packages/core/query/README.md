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
  @band-store/query
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

Query and Remote Joiner for Band Store: the engine behind Query, which retrieves data across modules and their links in a single call. You don't import this package directly in a Band Store application; resolve Query from the Band Store container with `ContainerRegistrationKeys.QUERY` (`"query"`), or use `useQueryGraphStep` from `@band-store/band-store/core-flows` inside workflows.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/query` |
| Type | Core library |
| Import from | Resolved from the container as `ContainerRegistrationKeys.QUERY` (`"query"`) |

## Features

- `query.graph()` to retrieve records of a data model and their linked records from other modules.
- `query.index()` to filter across linked modules using the Index Module.
- `query.search()` to run search queries through the Search Module.
- `RemoteJoiner`, which resolves and joins data across module services.

## Installation

No separate installation is needed in a Band Store application. It's installed with `@band-store/framework` through `@band-store/modules-sdk`.

## Usage

```ts
import type { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"

export const GET = async (req: BandStoreRequest, res: BandStoreResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: products } = await query.graph({
    entity: "product",
    fields: ["id", "title", "variants.*"],
  })

  res.json({ products })
}
```

## Resources

- Query
- Query with the Index Module
- Query search
