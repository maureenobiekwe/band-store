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
  @band-store/caching-redis
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

Redis Caching Module Provider for Band Store: stores the Caching Module's cached data in Redis, with tag-based invalidation and compression of large values. Use it in production so cached data is shared across Band Store instances. It ships with `@band-store/band-store` and is registered through the `@band-store/band-store/caching-redis` path.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/caching-redis` |
| Type | Module Provider (Caching Module) |
| Provider ID | `cache-redis` |
| Registered by default | No (on Band Store Cloud, registered when `CACHE_REDIS_URL` is set) |
| Import from | `@band-store/band-store/caching-redis` |

## Installation

No installation needed. The provider is a dependency of `@band-store/band-store`. You need a running Redis server.

## Usage

The Caching Module is behind the `caching` feature flag. Enable it with `BAND_STORE_FF_CACHING=true`, then register the provider in the Caching Module's `providers` array in `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/caching",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/caching-redis",
            id: "caching-redis",
            // makes this the default caching provider
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

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `redisUrl` | `string` | Required. The Redis connection URL. | - |
| `redisOptions` | `RedisOptions` | Options passed to the `ioredis` client. Passing them at the top level of `options` is deprecated. | - |
| `ttl` | `number` | Default time-to-live of cached entries, in seconds. | `3600` |
| `prefix` | `string` | Prefix added to all cache keys. | `"mc:"` |
| `compressionThreshold` | `number` | Minimum size in bytes of a value before it's compressed. | `2048` |

| Environment variable | Description |
| --- | --- |
| `BAND_STORE_FF_CACHING` | Set to `true` to enable the Caching Module. |
| `CACHE_REDIS_URL` | Value for `redisUrl`, as used in the example above. |

## Resources

- Redis Caching Module Provider
- Caching Module Providers
- Caching Module
