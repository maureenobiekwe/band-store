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
  @band-store/modules-sdk
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

Modules SDK for Band Store: loads, registers, and links Band Store modules, and builds the Band Store application's module layer, including Query and module links. Band Store uses it internally at startup; in your own code you mostly need its `BandStoreModule` helpers, such as checking whether a module is installed. Import it through `@band-store/framework/modules-sdk`, which re-exports this package; importing `@band-store/modules-sdk` directly is discouraged.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/modules-sdk` |
| Type | Core library |
| Import from | `@band-store/framework/modules-sdk` |

## Features

- `BandStoreModule` to bootstrap modules and inspect loaded modules, for example with `BandStoreModule.isInstalled(moduleKey)`.
- `BandStoreApp` and the `BandStoreAppMigrateUp`, `BandStoreAppMigrateDown`, and `BandStoreAppMigrateGenerate` functions to load all modules and run their migrations.
- `ModulesDefinition` with the definitions of Band Store's built-in modules.
- `moduleProviderLoader` to load a module's providers.
- `Link` and `createQuery` to manage module links and query data across modules.

## Installation

No separate installation is needed in a Band Store application. It's installed with `@band-store/framework`.

## Usage

Check that a module is installed before using it, for example in a data migration script:

```ts
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { ExecArgs } from "@band-store/framework/types"
import { BLOG_MODULE } from "../modules/blog"

export default async function migrateBlogData({ container }: ExecArgs) {
  if (!BandStoreModule.isInstalled(BLOG_MODULE)) {
    return
  }

  // ...
}
```

## Resources

- Modules
- Module links
- Data migration scripts
