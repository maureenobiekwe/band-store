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
  @band-store/analytics
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

Analytics Module for Band Store: tracks events and identifies users by forwarding them to third-party analytics services such as PostHog. It uses a provider pattern, so the service you send data to is a pluggable Analytics Module Provider. It ships with `@band-store/band-store` and is registered from `@band-store/band-store/analytics`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/analytics` |
| Type | Infrastructure Module |
| Module key | `Modules.ANALYTICS` (`"analytics"`) |
| Registered by default | No |
| Import from | `@band-store/band-store/analytics` |

## Features

- Track events (for example, order placed) and identify users from workflows, subscribers, or API routes.
- Pluggable providers. Official providers:
  - [`@band-store/analytics-local`](../providers/analytics-local): logs events with the Band Store logger, for development.
  - [`@band-store/analytics-posthog`](../providers/analytics-posthog): sends events to PostHog.

## Installation

No installation needed. The module ships with `@band-store/band-store`, but you must register it in `band-store-config.ts`.

## Usage

```ts title="band-store-config.ts"
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/analytics",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/analytics-local",
            id: "local",
          },
        ],
      },
    },
  ],
})
```

Then resolve the service with `container.resolve(Modules.ANALYTICS)` and call its `track` and `identify` methods.

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `providers` | `{ resolve: string, id: string, options?: Record<string, unknown> }[]` | Analytics Module Providers to register. `options` is passed to the provider. | `[]` |

## Resources

- Analytics Module
- Local Analytics Module Provider
- PostHog Analytics Module Provider
