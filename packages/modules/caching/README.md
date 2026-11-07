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
  @band-store/caching
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

Caching Module for Band Store: caches data such as Query and Index Module results in a pluggable caching service like Redis. It replaces the deprecated Cache Modules (`@band-store/cache-inmemory`, `@band-store/cache-redis`) and uses a provider pattern, so the underlying store is a Caching Module Provider. It ships with `@band-store/band-store` and is registered from `@band-store/band-store/caching`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/caching` |
| Type | Infrastructure Module |
| Module key | `Modules.CACHING` (`"caching"`) |
| Registered by default | No |
| Import from | `@band-store/band-store/caching` |

## Features

- Cache Query and Index Module results, or cache any data directly through the module's service.
- Pluggable providers, with a default provider selected by `is_default` (or the only registered provider). Official provider:
  - [`@band-store/caching-redis`](../providers/caching-redis): stores cached data in Redis.

## Installation

No installation needed. The module ships with `@band-store/band-store`. To use it:

1. Enable the caching feature flag by setting `BAND_STORE_FF_CACHING=true` in your environment.
2. Register the module with at least one provider in `band-store-config.ts`. The module throws on startup if no provider is configured.

## Usage

```ts title="band-store-config.ts"
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/caching",
      options: {
        providers: [
          {
            resolve: "@band-store/caching-redis",
            id: "caching-redis",
            is_default: true,
            options: {
              redisUrl: process.env.CACHE_REDIS_URL,
            },
          },
        ],
      },
    },
  ],
})
```

Then resolve the service with `container.resolve(Modules.CACHING)`.

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `providers` | `{ resolve: string, id: string, is_default?: boolean, options?: Record<string, unknown> }[]` | Caching Module Providers to register. | - |
| `ttl` | `number` | Time to keep data in the cache, in seconds. | `3600` |

## Resources

- Caching Module
- Caching Module concepts
- Redis Caching Module Provider
- Migrate from the Cache Module
