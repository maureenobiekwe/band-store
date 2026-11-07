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
  @band-store/cart
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

Cart Module for Band Store: manages carts, line items, shipping methods, addresses, credit lines, and the adjustments and tax lines applied to line items and shipping methods. Use it to build checkout flows; storefronts reach it through Band Store's Store API and cart workflows in `@band-store/band-store/core-flows`. It ships with `@band-store/band-store` and is registered by default, so you normally use it through the Band Store application rather than installing it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/cart` |
| Type | Commerce Module |
| Module key | `Modules.CART` (`"cart"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/cart` |

## Features

- Store line items, shipping methods, and shipping and billing addresses on a cart.
- Store promotion adjustments and tax lines on line items and shipping methods.
- Store credit lines applied to a cart.

## Installation

No installation needed. The module ships with `@band-store/band-store` and is registered by default.

## Usage

Resolve the module's service from the container, for example in a workflow step:

```ts
import { Modules } from "@band-store/framework/utils"

const cartModuleService = container.resolve(Modules.CART)
```

## Resources

- Cart Module
- Cart concepts
- Cart totals
- Promotions in carts
- Tax lines in carts
