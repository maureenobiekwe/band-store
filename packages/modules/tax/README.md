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
  @band-store/tax
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

Tax Module for Band Store: manages tax regions, tax rates, tax rate rules, and tax providers, and calculates tax lines for carts and orders. Tax calculation is delegated to Tax Module Providers: the built-in `system` provider (`tp_system`) is always available, and you can register custom or third-party providers (for example, to integrate a tax service) through the module's `providers` option. It's installed and registered by default with `@band-store/band-store`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/tax` |
| Type | Commerce Module |
| Module key | `Modules.TAX` (`"tax"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/tax` |

## Installation

No installation needed. The module ships with `@band-store/band-store` and is registered by `defineConfig`.

## Usage

To register a custom tax provider, add it to the module's `providers` option in `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/tax",
      options: {
        providers: [
          {
            resolve: "./src/modules/my-tax-provider",
            id: "my-provider",
          },
        ],
      },
    },
  ],
})
```

The registered provider's ID has the format `tp_{identifier}_{id}`, where `identifier` is the provider class's static `identifier` property and `id` is the `id` set above. Assign it to a tax region to use it for that region's tax calculations.

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `providers` | `{ resolve: string, id?: string, options?: Record<string, unknown> }[]` | Tax Module Providers to register in addition to the built-in `system` provider. | `[]` |

## Resources

- Tax Module
- Tax Module Provider
- Module Options
- Tax Calculation with the Tax Provider
- Tax Rates and Rules
- Tax Region
