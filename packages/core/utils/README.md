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
  @band-store/utils
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

`@band-store/utils` is Band Store's shared utilities library: configuration helpers, module and data model builders, error classes, container keys, and helpers used across Band Store core, modules, and providers. Applications, plugins, and modules should import it through `@band-store/framework/utils`, which re-exports this package; import `@band-store/utils` directly only when you can't depend on `@band-store/framework`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/utils` |
| Type | Core library |
| Import from | `@band-store/framework/utils` |

## Features

- **Configuration**: `defineConfig` for `band-store-config.ts` and `loadEnv` for loading `.env` files.
- **Modules**: `Module`, `ModuleProvider`, `BandStoreService`, the `Modules` enum of module keys, and `defineLink` for module links.
- **Data models**: the `model` builder (DML) for defining data models.
- **Errors and container**: `BandStoreError` and `ContainerRegistrationKeys`.
- **Domain helpers**: utilities and enums for products, pricing, orders, payments, fulfillment, promotions, totals (`BigNumber`), and more.

## Usage

```ts
import { model } from "@band-store/framework/utils"

const Post = model.define("post", {
  id: model.id().primaryKey(),
  title: model.text(),
})

export default Post
```

## Resources

- Band Store configuration
- Data models
- Modules
- Service factory reference
