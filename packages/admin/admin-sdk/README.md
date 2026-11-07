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
  @band-store/admin-sdk
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

Admin SDK for Band Store: helpers for configuring Band Store Admin dashboard extensions such as widgets, UI routes, and layouts. Import it in the `src/admin` directory of a Band Store application or plugin to export the config of each widget or UI route.

## At a glance

| | |
|---|---|
| Package | `@band-store/admin-sdk` |
| Type | Admin |
| Import from | `@band-store/admin-sdk` |

## Features

- `defineWidgetConfig`: set the injection zone(s) a widget is shown in, with an optional stable `id`.
- `defineRouteConfig`: set a UI route's sidebar `label`, `icon`, `nested` position, `rank`, `translationNs`, and the RBAC `permissions` required to open it.
- `defineLayoutConfig`: declare a custom layout's `id` and `sections`.
- Types: `WidgetConfig`, `RouteConfig`, `LayoutConfig`.

## Installation

```bash
npm install @band-store/admin-sdk
```

## Usage

```tsx title="src/admin/widgets/product-widget.tsx"
import { defineWidgetConfig } from "@band-store/admin-sdk"
import { Container, Heading } from "@band-store/ui"

const ProductWidget = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Product Widget</Heading>
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details",
})

export default ProductWidget
```

## Resources

- Admin Development
- Admin Widgets
- Admin UI Routes
- Widget Injection Zones
- Admin Components
