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
  @band-store/loyalty-plugin
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

Loyalty Plugin for Band Store: adds gift cards and store credit to a Band Store application, including gift card products, redeeming gift cards and store credit at checkout, and store credit accounts for customers. It provides the Loyalty Module and Store Credit Module, Admin and Store API routes, workflows, and Band Store Admin pages. It isn't registered by default: install it and add it to `plugins` in `band-store-config.ts` (Band Store v2.14.0+).

## At a glance

| | |
| --- | --- |
| Package | `@band-store/loyalty-plugin` |
| Type | Plugin |
| Modules | Loyalty Module (`"loyalty"`), Store Credit Module (`"store_credit"`) |
| Registered by default | No |
| Import from | `@band-store/loyalty-plugin/workflows`, `@band-store/loyalty-plugin/types` |

## Features

- **Gift card products**: sell physical or digital gift cards; a gift card with a generated code is created for each one purchased when the order is placed.
- **Checkout**: apply gift cards and store credit to a cart as payment (`POST /store/carts/:id/gift-cards`, `POST /store/carts/:id/store-credits`).
- **Store credit accounts**: credit, debit, and view transactions (`/admin/store-credit-accounts`), and let customers view and claim accounts (`/store/store-credit-accounts`).
- **Admin API routes**: manage gift cards under `/admin/gift-cards`. **Store API routes**: look up a gift card with `GET /store/gift-cards/:idOrCode`.
- **Workflows** such as `createGiftCardsWorkflow`, `addGiftCardToCartWorkflow`, and `creditStoreCreditAccountWorkflow`, plus hooks into Band Store's cart completion, payment refresh, and order credit line flows.
- **Band Store Admin**: Gift Cards, Gift Card Products, and Store Credits pages, and widgets on the customer, order, and sales channel details pages.

## Installation

```bash
npm install @band-store/loyalty-plugin
```

## Usage

Register the plugin in `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  plugins: [
    {
      resolve: "@band-store/loyalty-plugin",
      options: {},
    },
  ],
})
```

Then run the migrations:

```bash
npx bandStore db:migrate
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `prefix` | `string` | Prefix of generated gift card codes. For example, `"GC"` generates `GC-XXXX-XXXX-XXXX-XXXX`. | `"GIFT"` |
| `sections` | `number` | Number of 4-character sections in generated gift card codes. For example, `3` generates `GIFT-XXXX-XXXX-XXXX`. | `4` |

## Resources

- Loyalty Module
- Store Credit Module
- Loyalty Plugin options
- Gift cards
- Loyalty workflows
- Loyalty user guide
