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
  @band-store/settings
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

Settings Module for Band Store: manages view configurations, layout configurations, property labels, and user preferences. Use it to store admin dashboard personalization, such as data-table views, page layouts, and per-user preferences. It ships with `@band-store/band-store` and is registered by default, so Band Store applications don't install it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/settings` |
| Type | Commerce Module |
| Module key | `Modules.SETTINGS` (`"settings"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/settings` |

## Features

- Store data-table view configurations per entity, personal to a user or as a shared system default.
- Store per-zone layout configurations for a user or as a system default.
- Set custom labels and descriptions for an entity's properties.
- Store arbitrary user preferences as key-value pairs.

The Admin API routes for view configurations require the `view_configurations` feature flag (`BAND_STORE_FF_VIEW_CONFIGURATIONS`), which is disabled by default.

## Installation

No installation needed. The module is included in `@band-store/band-store` and registered by default.

## Usage

Resolve the module's service from the container, for example in a workflow step:

```ts
import { createStep, StepResponse } from "@band-store/framework/workflows-sdk"
import { Modules } from "@band-store/framework/utils"

const setPreferenceStep = createStep(
  "set-preference",
  async ({}, { container }) => {
    const settingsModuleService = container.resolve(Modules.SETTINGS)

    const preference = await settingsModuleService
      .setUserPreference("user_123", "theme", {
        mode: "dark",
      })

    return new StepResponse({ preference })
  }
)
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `entityOverrides` | `Record<string, EntityOverride>` | Overrides for how an entity's columns appear in data tables, such as default visible fields, field ordering, and computed columns, keyed by entity name. Merged with the built-in overrides, and your values take precedence. | `{}` |

## Resources

- Settings Module
- Configure view configurations
- View configurations
- User preferences
