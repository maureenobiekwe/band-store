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
  @band-store/deps
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

`@band-store/deps` pins and re-exports the third-party dependencies Band Store shares across its packages: MikroORM, OpenTelemetry, `awilix`, `pg`, and `zod`. It's an internal dependency of `@band-store/framework`, which re-exports the same entry points, so apps should import from `@band-store/framework/*` (for example, `@band-store/framework/zod`) instead of this package.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/deps` |
| Type | Internal tooling |
| Import from | `@band-store/framework/<subpath>` |

## Entry points

| `@band-store/deps` subpath | Re-exports | `@band-store/framework` equivalent |
| --- | --- | --- |
| `./mikro-orm/core` | `@mikro-orm/core` | `@band-store/framework/mikro-orm/core` |
| `./mikro-orm/knex` | `@mikro-orm/knex` | `@band-store/framework/mikro-orm/knex` |
| `./mikro-orm/postgresql` | `@mikro-orm/postgresql` | `@band-store/framework/mikro-orm/postgresql` |
| `./mikro-orm/migrations` | `@mikro-orm/migrations` | `@band-store/framework/mikro-orm/migrations` |
| `./mikro-orm/cli` | `@mikro-orm/cli` | `@band-store/framework/mikro-orm/cli` |
| `./opentelemetry/api` | `@opentelemetry/api` | `@band-store/framework/opentelemetry/api` |
| `./opentelemetry/resources` | `@opentelemetry/resources` | `@band-store/framework/opentelemetry/resources` |
| `./opentelemetry/sdk-node` | `@opentelemetry/sdk-node` | `@band-store/framework/opentelemetry/sdk-node` |
| `./opentelemetry/sdk-trace-node` | `@opentelemetry/sdk-trace-node` | `@band-store/framework/opentelemetry/sdk-trace-node` |
| `./opentelemetry/instrumentation-pg` | `@opentelemetry/instrumentation-pg` | `@band-store/framework/opentelemetry/instrumentation-pg` |
| `./awilix` | `awilix` | `@band-store/framework/awilix` |
| `./pg` | `pg` | `@band-store/framework/pg` |
| `./zod` | `zod` | `@band-store/framework/zod` |

There is no root (`@band-store/deps`) import; use a subpath.
