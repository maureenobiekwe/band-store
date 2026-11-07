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
  @band-store/pricing
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

Pricing Module for Band Store: manages price sets, prices, price rules, price lists, price list rules, and price preferences. Use it to store prices in multiple currencies, apply rule-based and tiered pricing, run sales or overrides with price lists, and calculate the price that applies in a given context. It ships with `@band-store/band-store` and is registered by default, so Band Store applications don't install it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/pricing` |
| Type | Commerce Module |
| Module key | `Modules.PRICING` (`"pricing"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/pricing` |

## Features

- Store prices per currency in price sets, with quantity tiers and rules.
- Create price lists for sales and price overrides.
- Calculate the best price for a context, such as currency, region, or customer group.
- Configure tax-inclusive pricing with price preferences.

## Installation

No installation needed. The module is included in `@band-store/band-store` and registered by default.

## Usage

Resolve the module's service from the container, for example in a workflow step:

```ts
import { createStep, StepResponse } from "@band-store/framework/workflows-sdk"
import { Modules } from "@band-store/framework/utils"

const createPriceSetStep = createStep(
  "create-price-set",
  async ({}, { container }) => {
    const pricingModuleService = container.resolve(Modules.PRICING)

    const priceSet = await pricingModuleService.createPriceSets({
      prices: [
        {
          amount: 500,
          currency_code: "USD",
        },
      ],
    })

    return new StepResponse({ priceSet }, priceSet.id)
  }
)
```

## Resources

- Pricing Module
- Price rules
- Price calculation
- Tax-inclusive pricing
