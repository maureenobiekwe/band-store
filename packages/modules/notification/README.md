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
  @band-store/notification
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

Notification Module for Band Store: sends notifications through channels such as email, SMS, or an in-app feed, and stores a record of each notification and the providers that send them. Each channel is handled by a Notification Module Provider, and only one provider can be configured per channel. It ships with `@band-store/band-store` and is registered by default; resolve it in your code with `container.resolve(Modules.NOTIFICATION)`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/notification` |
| Type | Infrastructure Module |
| Module key | `Modules.NOTIFICATION` (`"notification"`) |
| Registered by default | Yes (with the Local provider on the `feed` channel) |

## Providers

Official providers:

| Package | Register with |
| --- | --- |
| [`@band-store/notification-local`](../providers/notification-local) | `@band-store/band-store/notification-local` |
| [`@band-store/notification-sendgrid`](../providers/notification-sendgrid) | `@band-store/band-store/notification-sendgrid` |

On Band Store Cloud, a built-in Band Store Cloud email provider is registered automatically when no provider handles the `email` channel.

## Installation

No installation needed. The module ships with `@band-store/band-store`.

## Usage

Register providers in `band-store-config.ts`. Overriding `providers` replaces the default list:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/notification",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/notification-sendgrid",
            id: "sendgrid",
            options: {
              channels: ["email"],
              api_key: process.env.SENDGRID_API_KEY,
              from: process.env.SENDGRID_FROM,
            },
          },
        ],
      },
    },
  ],
})
```

Then send a notification:

```ts
import { Modules } from "@band-store/framework/utils"

const notificationModuleService = container.resolve(Modules.NOTIFICATION)

await notificationModuleService.createNotifications({
  to: "customer@example.com",
  channel: "email",
  template: "order-placed",
  data: { order_id: "order_123" },
})
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `providers` | `{ resolve: string, id: string, options: { channels: string[], ... } }[]` | Notification providers to register. `options.channels` lists the channels the provider handles; two providers can't share a channel. | Local provider (`id: "local"`, `channels: ["feed"]`) |

## Resources

- Notification Module
- Send a Notification
- Local Notification Module Provider
- SendGrid Notification Module Provider
