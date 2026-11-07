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
  @band-store/stock-location
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

Stock Location Module for Band Store: manages stock locations (such as warehouses) and their addresses. It's installed and registered by default with `@band-store/band-store`, so Band Store applications use it through the `Modules.STOCK_LOCATION` service rather than installing this package directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/stock-location` |
| Type | Commerce Module |
| Module key | `Modules.STOCK_LOCATION` (`"stock_location"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/stock-location` |

## Installation

No installation needed. The module ships with `@band-store/band-store` and is registered by `defineConfig`.

## Usage

Resolve the module's service from the Band Store container, for example in a workflow step:

```ts
import { createStep, StepResponse } from "@band-store/framework/workflows-sdk"
import { Modules } from "@band-store/framework/utils"

const createStockLocationStep = createStep(
  "create-stock-location",
  async ({}, { container }) => {
    const stockLocationModuleService = container.resolve(Modules.STOCK_LOCATION)

    const stockLocation = await stockLocationModuleService.createStockLocations({
      name: "Warehouse 1",
    })

    return new StepResponse({ stockLocation }, stockLocation.id)
  }
)
```

## Resources

- Stock Location Module
- Stock Location Concepts
- Links to Other Modules
