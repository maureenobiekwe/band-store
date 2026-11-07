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
  @band-store/order
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

Order Module for Band Store: manages orders, line items, shipping methods, addresses, returns, claims, exchanges, order changes, transactions, and credit lines. Use it to store placed and draft orders and handle post-purchase flows such as returns, exchanges, and order edits. It ships with `@band-store/band-store` and is registered by default, so Band Store applications don't install it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/order` |
| Type | Commerce Module |
| Module key | `Modules.ORDER` (`"order"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/order` |

## Features

- Store orders with line items, shipping methods, addresses, adjustments, and tax lines.
- Handle returns, claims, and exchanges, with return reasons.
- Track order changes and versions for edits and other post-purchase actions.
- Record payment transactions and credit lines on an order.

## Installation

No installation needed. The module is included in `@band-store/band-store` and registered by default.

## Usage

Resolve the module's service from the container, for example in a workflow step:

```ts
import { createStep, StepResponse } from "@band-store/framework/workflows-sdk"
import { Modules } from "@band-store/framework/utils"

const createDraftOrderStep = createStep(
  "create-order",
  async ({}, { container }) => {
    const orderModuleService = container.resolve(Modules.ORDER)

    const draftOrder = await orderModuleService.createOrders({
      currency_code: "usd",
      items: [
        {
          title: "Shirt",
          quantity: 1,
          unit_price: 30,
        },
      ],
      status: "draft",
    })

    return new StepResponse({ draftOrder }, draftOrder.id)
  }
)
```

## Resources

- Order Module
- Order Module workflows
- Modules
