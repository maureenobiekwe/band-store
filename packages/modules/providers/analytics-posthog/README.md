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
  @band-store/analytics-posthog
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

PostHog Analytics Module Provider for Band Store: sends events and identities tracked through the Analytics Module to PostHog. Use it to track commerce events (such as orders placed or carts updated) in PostHog from your workflows and subscribers. It ships with `@band-store/band-store` and is registered through the `@band-store/band-store/analytics-posthog` path.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/analytics-posthog` |
| Type | Module Provider (Analytics Module) |
| Provider ID | `analytics-posthog` |
| Registered by default | No |
| Import from | `@band-store/band-store/analytics-posthog` |

## Installation

No installation needed. The provider is a dependency of `@band-store/band-store`.

## Usage

Register the provider in the Analytics Module's `providers` array in `band-store-config.ts`. The Analytics Module accepts exactly one provider.

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/analytics",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/analytics-posthog",
            id: "posthog",
            options: {
              posthogEventsKey: process.env.POSTHOG_EVENTS_API_KEY,
              posthogHost: process.env.POSTHOG_HOST,
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
| `posthogEventsKey` | `string` | Required. The PostHog project API key used to send events. | - |
| `posthogHost` | `string` | The PostHog instance URL. | `https://eu.i.posthog.com` |

| Environment variable | Description |
| --- | --- |
| `POSTHOG_EVENTS_API_KEY` | Value for `posthogEventsKey`, as used in the example above. |
| `POSTHOG_HOST` | Value for `posthogHost`, as used in the example above. |

## Resources

- PostHog Analytics Module Provider
- Analytics Module
