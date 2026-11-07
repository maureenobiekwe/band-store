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
  @band-store/payment
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

Payment Module for Band Store: manages payment collections, payment sessions, payments, captures, refunds, refund reasons, account holders, and payment providers. Use it to process payments for carts, orders, or any resource through pluggable payment providers. It ships with `@band-store/band-store` and is registered by default, so Band Store applications don't install it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/payment` |
| Type | Commerce Module |
| Module key | `Modules.PAYMENT` (`"payment"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/payment` |

## Features

- Group payment sessions and payments for a resource in a payment collection.
- Authorize, capture, and refund payments, with refund reasons.
- Store account holders to save customers' payment methods with a provider.
- Handle provider webhook events.

## Payment providers

The module delegates payment processing to Payment Module Providers, registered through the `providers` option. A system provider (`pp_system_default`) is always registered for manual payments.

Official providers in this repository:

- [`@band-store/payment-stripe`](../providers/payment-stripe) (Stripe)
- [`@band-store/payment-adyen`](../providers/payment-adyen) (Adyen)

## Installation

No installation needed. The module is included in `@band-store/band-store` and registered by default.

## Usage

Register payment providers in `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/payment",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/payment-stripe",
            id: "stripe",
            options: {
              apiKey: process.env.STRIPE_API_KEY,
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
| `providers` | `{ resolve: string, id: string, options?: Record<string, unknown> }[]` | Payment Module Providers to register. | `[]` |

## Resources

- Payment Module
- Payment Module options
- Payment Module Providers
- Stripe Module Provider
