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
  @band-store/cache-redis
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

Redis Cache Module for Band Store: stores cached data in Redis. **Deprecated since Band Store v2.11.0**: use the [Caching Module](../caching) with the [Redis Caching Module Provider](../providers/caching-redis) (`@band-store/caching-redis`) instead. It ships with `@band-store/band-store` and is registered from `@band-store/band-store/cache-redis`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/cache-redis` |
| Type | Infrastructure Module (deprecated) |
| Module key | `Modules.CACHE` (`"cache"`) |
| Registered by default | No (the In-Memory Cache Module is the default) |
| Import from | `@band-store/band-store/cache-redis` |

## Installation

No installation needed. The module ships with `@band-store/band-store`, but you must register it in `band-store-config.ts`.

## Usage

```ts title="band-store-config.ts"
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/cache-redis",
      options: {
        redisUrl: process.env.CACHE_REDIS_URL,
      },
    },
  ],
})
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `redisUrl` | `string` | Redis connection URL. | - |
| `redisOptions` | `RedisOptions` (from `ioredis`) | Options passed to the Redis client. | - |
| `ttl` | `number` | Time to keep data in the cache, in seconds. | `30` |
| `namespace` | `string` | Prefix added to cache keys. | `"bandStore"` |

## Resources

- Redis Cache Module
- Migrate from the Cache Module to the Caching Module
