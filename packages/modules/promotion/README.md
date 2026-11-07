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
  @band-store/promotion
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

Promotion Module for Band Store: manages promotions, promotion rules, application methods, campaigns, and campaign budgets. Use it to create discounts and coupon codes that apply to carts and orders based on rules, and to group them in budget-limited campaigns. It ships with `@band-store/band-store` and is registered by default, so Band Store applications don't install it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/promotion` |
| Type | Commerce Module |
| Module key | `Modules.PROMOTION` (`"promotion"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/promotion` |

## Features

- Create standard and buy-get promotions with fixed or percentage discounts.
- Choose whether a buy-get promotion discounts the most expensive or the cheapest eligible items.
- Apply discounts to an order, its items, or its shipping methods.
- Restrict when a promotion applies with rules.
- Group promotions in campaigns with start and end dates and spend or usage budgets.

## Installation

No installation needed. The module is included in `@band-store/band-store` and registered by default.

## Usage

Resolve the module's service from the container, for example in a workflow step:

```ts
import { createStep, StepResponse } from "@band-store/framework/workflows-sdk"
import { Modules } from "@band-store/framework/utils"

const createPromotionStep = createStep(
  "create-promotion",
  async ({}, { container }) => {
    const promotionModuleService = container.resolve(Modules.PROMOTION)

    const promotion = await promotionModuleService.createPromotions({
      code: "10%OFF",
      type: "standard",
      application_method: {
        type: "percentage",
        target_type: "order",
        value: 10,
        currency_code: "usd",
      },
    })

    return new StepResponse({ promotion }, promotion.id)
  }
)
```

## Resources

- Promotion Module
- Promotion concepts
- Application method
- Campaigns
