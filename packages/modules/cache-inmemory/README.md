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
  @band-store/cache-inmemory
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

In-Memory Cache Module for Band Store: stores cached data in the Node.js process memory, for development and testing. **Deprecated since Band Store v2.11.0**: use the [Caching Module](../caching) (`@band-store/caching`) instead. It ships with `@band-store/band-store` and is the default Cache Module when no Redis Cache Module is configured.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/cache-inmemory` |
| Type | Infrastructure Module (deprecated) |
| Module key | `Modules.CACHE` (`"cache"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/cache-inmemory` |

## Installation

No installation needed. The module ships with `@band-store/band-store` and is registered by default.

## Usage

To change its options, register it in `band-store-config.ts`:

```ts title="band-store-config.ts"
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/cache-inmemory",
      options: {
        ttl: 30,
      },
    },
  ],
})
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `ttl` | `number` | Time to keep data in the cache, in seconds. | `30` |

## Resources

- In-Memory Cache Module
- Migrate from the Cache Module to the Caching Module
