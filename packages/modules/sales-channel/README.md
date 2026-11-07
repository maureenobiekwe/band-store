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
  @band-store/sales-channel
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

Sales Channel Module for Band Store: manages sales channels. Use it to model the channels you sell through, such as a website, a mobile app, or a B2B storefront, and scope product availability, carts, and orders to each one. It ships with `@band-store/band-store` and is registered by default, so Band Store applications don't install it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/sales-channel` |
| Type | Commerce Module |
| Module key | `Modules.SALES_CHANNEL` (`"sales_channel"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/sales-channel` |

## Features

- Create, update, and disable sales channels.
- Link sales channels to products, carts, orders, and stock locations through module links.
- Scope storefront requests to sales channels with publishable API keys.

## Installation

No installation needed. The module is included in `@band-store/band-store` and registered by default.

## Usage

Resolve the module's service from the container, for example in a workflow step:

```ts
import { createStep, StepResponse } from "@band-store/framework/workflows-sdk"
import { Modules } from "@band-store/framework/utils"

const createSalesChannelStep = createStep(
  "create-sales-channel",
  async ({}, { container }) => {
    const salesChannelModuleService = container.resolve(Modules.SALES_CHANNEL)

    const salesChannels = await salesChannelModuleService.createSalesChannels([
      {
        name: "B2B",
      },
      {
        name: "Mobile App",
      },
    ])

    return new StepResponse({ salesChannels }, salesChannels.map((sc) => sc.id))
  }
)
```

## Resources

- Sales Channel Module
- Publishable API keys with sales channels
- Links to other modules
