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
  @band-store/event-bus-redis
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

Redis Event Bus Module for Band Store: a production-ready event bus that queues events and runs subscribers with [BullMQ](https://bullmq.io/) on top of Redis. Use it in production instead of the default local event bus, especially when running multiple Band Store instances or separate server and worker processes. It ships with `@band-store/band-store` and is registered as `@band-store/band-store/event-bus-redis`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/event-bus-redis` |
| Type | Infrastructure Module |
| Module key | `Modules.EVENT_BUS` (`"event_bus"`) |
| Registered by default | No (registered automatically on Band Store Cloud when `REDIS_URL` is set) |

## Installation

No installation needed. The module ships with `@band-store/band-store`. You need a running Redis server.

## Usage

Register the module in `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/event-bus-redis",
      options: {
        redisUrl: process.env.EVENTS_REDIS_URL,
      },
    },
  ],
})
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `redisUrl` | `string` | Redis connection URL. Required: the module throws on startup without it. | - |
| `redisOptions` | `RedisOptions` | [ioredis client options](https://redis.github.io/ioredis/interfaces/CommonRedisOptions.html), merged into the connection options. | `{}` |
| `queueName` | `string` | Name of the BullMQ queue. | `"events-queue"` |
| `queueOptions` | `Omit<QueueOptions, "connection">` | [BullMQ queue options](https://api.docs.bullmq.io/interfaces/v5.QueueOptions.html). | `{}` |
| `workerOptions` | `Omit<WorkerOptions, "connection">` | [BullMQ worker options](https://api.docs.bullmq.io/interfaces/v5.WorkerOptions.html), such as `concurrency`. | `{}` |
| `jobOptions` | `JobsOptions` | Default [BullMQ job options](https://api.docs.bullmq.io/interfaces/v5.BaseJobOptions.html) applied to every emitted event, such as `removeOnComplete` and `removeOnFail`. Options passed to `emit` override them. | `{}` |

## Resources

- Redis Event Module
- Event Module
- Events and Subscribers
