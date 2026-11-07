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
  @band-store/rbac
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

RBAC (role-based access control) Module for Band Store: manages roles, policies, role-policy assignments, and role assignments. Use it to control which admin users can perform which operations on which resources. It ships with `@band-store/band-store` and is registered by adding it to the `modules` of your `band-store-config.ts`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/rbac` |
| Type | Commerce Module |
| Module key | `Modules.RBAC` (`"rbac"`) |
| Registered by default | No |
| Import from | `@band-store/band-store/rbac` |

## Features

- Define policies as a resource and operation pair, such as `product:read`.
- Group policies into roles, and assign roles to users and other references.
- Seeds a Super Admin role with a wildcard policy that grants full access.
- Powers the `/rbac/*` Admin API routes and the `authorize` route middleware, which are active only while the module is installed.

## Installation

No installation needed. The module is included in `@band-store/band-store`. Register it in `band-store-config.ts`.

## Usage

Add the module to `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/rbac",
    },
  ],
})
```

Then run migrations with `npx bandStore db:migrate`.

## Resources

- Modules
