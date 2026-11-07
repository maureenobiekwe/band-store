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
  @band-store/notification-local
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

Local Notification Module Provider for Band Store: simulates sending notifications by logging their recipient, channel, template, and data with the Band Store logger. Use it in development and tests, or to audit notifications without a real delivery service. It's registered by default for the `feed` channel and ships with `@band-store/band-store`, registered through the `@band-store/band-store/notification-local` path.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/notification-local` |
| Type | Module Provider (Notification Module) |
| Provider ID | `notification-local` |
| Registered by default | Yes, with `id: "local"` and `channels: ["feed"]` |
| Import from | `@band-store/band-store/notification-local` |

## Installation

No installation needed. The provider is a dependency of `@band-store/band-store` and is registered by default.

## Usage

Register it yourself to use it for other channels, such as `email`. Each channel can be handled by only one provider.

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
            resolve: "@band-store/band-store/notification-local",
            id: "local",
            options: {
              channels: ["email"],
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
| `channels` | `string[]` | Read by the Notification Module. The channels this provider handles; it isn't used for other channels. | `[]` |

## Resources

- Local Notification Module Provider
- Notification Module
