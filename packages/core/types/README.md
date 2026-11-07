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
  @band-store/types
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

`@band-store/types` contains the shared TypeScript type definitions for Band Store: module service interfaces (for example, `ICartModuleService`), DTOs, data model and DAL types, workflow types, and the `HttpTypes` namespace for API request and response shapes. Applications, plugins, and modules should import it through `@band-store/framework/types`, which re-exports this package; import `@band-store/types` directly only when you can't depend on `@band-store/framework`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/types` |
| Type | Core library |
| Import from | `@band-store/framework/types` |

## Features

- Module service interfaces and DTOs for every commerce and infrastructure module.
- `HttpTypes` namespace with Store and Admin API request and response types, also used by `@band-store/js-sdk`.
- Namespaced groups such as `CartTypes`, `ProductTypes`, `OrderTypes`, `DAL`, and `WorkflowTypes`.
- `BandStoreContainer`, `ConfigModule`, and other framework-level types.

## Usage

```ts
import type { HttpTypes, ICartModuleService } from "@band-store/framework/types"
```

## Resources

- Service factory reference
- Commerce Modules
