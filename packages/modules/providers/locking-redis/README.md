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
  @band-store/locking-redis
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

Redis Locking Module Provider for Band Store: implements the Locking Module's locks in Redis, so locks are shared across all Band Store instances. It's the recommended locking provider for production. It ships with `@band-store/band-store` and is registered through the `@band-store/band-store/locking-redis` path.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/locking-redis` |
| Type | Module Provider (Locking Module) |
| Provider ID | `locking-redis` |
| Registered by default | No (on Band Store Cloud, registered as the default when `REDIS_URL` is set) |
| Import from | `@band-store/band-store/locking-redis` |

## Installation

No installation needed. The provider is a dependency of `@band-store/band-store`. You need a running Redis server.

## Usage

Register the provider in the Locking Module's `providers` array in `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/locking",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/locking-redis",
            id: "locking-redis",
            // makes this the default locking provider
            is_default: true,
            options: {
              redisUrl: process.env.LOCKING_REDIS_URL,
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
| `redisOptions` | `RedisOptions` | Options passed to the `ioredis` client. | - |
| `namespace` | `string` | Prefix for lock keys. | `"medusa_lock:"` |
| `waitLockingTimeout` | `number` | Default time to wait to acquire a lock, in seconds. | `5` |
| `defaultRetryInterval` | `number` | Initial interval between lock attempts, in milliseconds. | `20` |
| `maximumRetryInterval` | `number` | Maximum interval between lock attempts, in milliseconds. | `1000` |
| `backoffFactor` | `number` | Multiplier applied to the retry interval after each attempt. | `2` |

| Environment variable | Description |
| --- | --- |
| `LOCKING_REDIS_URL` | Value for `redisUrl`, as used in the example above. |
| `REDIS_URL` | On Band Store Cloud, `defineConfig` registers this provider as the default with this URL. |

## Resources

- Redis Locking Module Provider
- Locking Module
