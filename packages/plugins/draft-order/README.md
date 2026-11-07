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
  @band-store/draft-order
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

Draft Order Plugin for Band Store: adds pages to the Band Store Admin for creating and managing draft orders on behalf of customers, such as for phone, in-store, or customer support orders. It's an admin-only plugin; the draft order data, API routes (`/admin/draft-orders`), and workflows it uses are part of `@band-store/band-store`. It ships as a dependency of `@band-store/band-store` and is registered by default, so no installation or configuration is needed.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/draft-order` |
| Type | Plugin |
| Registered by default | Yes |

## Features

- **Orders > Drafts** page in the Band Store Admin to list and create draft orders.
- Manage a draft order's items and custom items, shipping methods, promotions, customer and email, shipping and billing addresses, sales channel, and metadata.
- Convert a draft order to a regular order.

## Installation

No installation needed: `defineConfig` adds `{ resolve: "@band-store/draft-order", options: {} }` to `plugins` automatically.

## Resources

- Draft Orders Plugin
- Draft orders user guide
- Plugins
