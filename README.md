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
  Band Store
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
    <img src="https://img.shields.io/badge/license-open--core-blue.svg" alt="Band Store uses an open-core licensing model." />
  </a>
  <a href="">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="">
    <img src="" alt="Follow @band-store" />
  </a>
</p>

Band Store is an open-source commerce platform with a built-in framework for customization. Use it to build B2B or DTC stores, marketplaces, distributor platforms, PoS systems, and other applications that need commerce primitives such as products, carts, orders, and payments, without reinventing core commerce logic.

## Getting Started

The fastest way to get started is with Band Store Cloud, a managed environment for Band Store applications with automated deployments, scaling, and maintenance. Get started on Band Store Cloud.

To create a Band Store application locally, you need Node.js v22.22.0 or later and a running PostgreSQL database. Then run:

```bash
npx create-band-store-app@latest my-band-store-store
```

This sets up the Band Store server and admin dashboard, and optionally the Next.js Starter Storefront. See the installation guide for all options, or install with Docker.

## Repository structure

This is a Yarn workspaces monorepo. Every Band Store package published to npm lives under [`packages`](./packages).

| Path | Contents |
| --- | --- |
| [`packages/band-store`](./packages/band-store) | `@band-store/band-store`: the main package installed in Band Store applications. Holds the Store and Admin API routes, CLI commands, subscribers, and jobs, and re-exports the modules and `@band-store/core-flows`. |
| [`packages/core/*`](./packages/core) | Core libraries: the framework runtime (`framework`), types, utils, Workflows SDK, Modules SDK, predefined workflows (`core-flows`), Query, orchestration, and the JS SDK. |
| [`packages/modules/*`](./packages/modules) | Commerce Modules (product, cart, order, pricing, payment, and more) and Infrastructure Modules (event bus, caching, file, locking, workflow engine, and more). |
| [`packages/modules/providers/*`](./packages/modules/providers) | Module Providers, such as Stripe payments, S3 file storage, SendGrid notifications, Redis locking and caching, and auth providers for email/password, GitHub, Google, and OIDC. |
| [`packages/admin/*`](./packages/admin) | The Band Store Admin dashboard and the SDK, Vite plugin, and bundler used to build and extend it. |
| [`packages/design-system/*`](./packages/design-system) | Band Store UI: the React component library, icons, Tailwind preset, and a Figma import tool. |
| [`packages/cli/*`](./packages/cli) | CLI tools: `create-band-store-app`, the `bandStore` CLI, OpenAPI tooling, and the HTTP types generator. |
| [`packages/plugins/*`](./packages/plugins) | Official plugins, such as draft orders and loyalty. |
| [`integration-tests`](./integration-tests) | HTTP and module integration test suites run against a real PostgreSQL database. |
| [`www`](./www) | The source of the Band Store documentation website. |

## About Band Store

Band Store's commerce modules are open-source and freely available on npm. Enterprise Edition features are identified separately in the repository.

Learn more about Band Store's architecture and Commerce Modules in the documentation.

## Upgrades & Integrations

Follow the Release Notes to keep your Band Store project up-to-date.

Check out all available Band Store integrations.

