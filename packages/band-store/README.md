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
  @band-store/band-store
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

`@band-store/band-store` is the core Band Store application package: the commerce server with its Store, Admin, and Auth API routes, the implementations of the `bandStore` CLI commands, and all default commerce and infrastructure modules. Every Band Store application depends on it, and modules are registered from it by their `@band-store/band-store/<module>` path (for example, `@band-store/band-store/cart`).

## At a glance

| | |
| --- | --- |
| Package | `@band-store/band-store` |
| Type | Core library |
| Import from | `@band-store/band-store/<module>` for modules and providers, `@band-store/band-store/core-flows` for workflows |
| Entry points | `./<module>`, `./core-flows`, `./api/*`, `./commands/*`, `./subscribers/*`, `./jobs/*`, `./loaders/*`, `./feature-flags/*`, `./types`, `./utils` |

## Features

- **Commerce server**: Express-based HTTP server with the Store API (`/store`), Admin API (`/admin`), Auth API (`/auth`), and webhook routes (`/hooks`).
- **CLI commands**: implementations of `develop`, `start`, `build`, `exec`, `user`, `lint`, `db:*`, and `plugin:*`, run through the `bandStore` binary from `@band-store/cli`.
- **Default modules**: re-exports every official module and provider (Cart, Product, Order, Payment, Auth, File, Event Bus, Workflow Engine, and more) at `@band-store/band-store/<name>`, so they need no separate install.
- **Workflows**: re-exports `@band-store/core-flows` at `@band-store/band-store/core-flows`.

## Installation

Create a new Band Store application, which installs this package along with `@band-store/framework` and `@band-store/cli`:

```bash
npx create-band-store-app@latest my-band-store-store
```

Requires Node.js `>=22.22.0`.

## Usage

Register a module or provider shipped with this package by its `@band-store/band-store/<name>` path in `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
  },
  modules: [
    {
      resolve: "@band-store/band-store/file",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/file-s3",
            id: "s3",
            options: {
              // ...
            },
          },
        ],
      },
    },
  ],
})
```

Run the server with the Band Store CLI:

```bash
npx bandStore develop
```

## Resources

- Installation
- Architecture
- Band Store configuration
- Band Store CLI reference
- Commerce Modules
- Infrastructure Modules
- Workflows reference
- Upgrade guides
