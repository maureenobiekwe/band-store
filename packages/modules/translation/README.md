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
  @band-store/translation
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

Translation Module for Band Store: manages locales, translations of entity fields (such as product titles and descriptions), and translation settings that define which entities and fields are translatable. Use it to add multi-language support to a Band Store store. It ships with `@band-store/band-store` and is only enabled when the `translation` feature flag is on.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/translation` |
| Type | Commerce Module |
| Module key | `Modules.TRANSLATION` (`"translation"`) |
| Registered by default | Yes, but disabled unless the `translation` feature flag is enabled |
| Import from | `@band-store/band-store/translation` |

## Installation

No installation needed. The module ships with `@band-store/band-store`. Enable the `translation` feature flag in `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  featureFlags: {
    translation: true,
  },
})
```

Then run the migrations:

```bash
npx bandStore db:migrate
```

## Configuration

| Environment variable | Description | Default |
| --- | --- | --- |
| `BAND_STORE_FF_TRANSLATION` | Enables the `translation` feature flag, as an alternative to `featureFlags.translation` in `band-store-config.ts`. | `false` |

## Resources

- Translation Module
- Translation Concepts
- Translate Custom Data Models
- Links to Other Modules
