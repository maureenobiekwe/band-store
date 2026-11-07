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
  @band-store/framework
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

`@band-store/framework` is the Band Store Framework: the single package Band Store applications, plugins, and custom modules import from to build API routes, workflows, modules, data models, subscribers, scheduled jobs, and configuration. It re-exports the core libraries (`@band-store/utils`, `@band-store/types`, `@band-store/workflows-sdk`, `@band-store/modules-sdk`, `@band-store/orchestration`) and pinned third-party dependencies through subpath entry points, so apps should import from `@band-store/framework/*` instead of those packages directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/framework` |
| Type | Core library |
| Import from | `@band-store/framework/<subpath>` |

## Entry points

| Import path | Provides |
| --- | --- |
| `@band-store/framework/utils` | Re-export of `@band-store/utils`: `defineConfig`, `loadEnv`, `Modules`, `ContainerRegistrationKeys`, `BandStoreError`, `BandStoreService`, `Module`, `ModuleProvider`, `model`, `defineLink`, and more |
| `@band-store/framework/types` | Re-export of `@band-store/types`: DTOs, module service interfaces, and the `HttpTypes` namespace |
| `@band-store/framework/workflows-sdk` | Re-export of `@band-store/workflows-sdk`: `createWorkflow`, `createStep`, `StepResponse`, `WorkflowResponse`, `transform`, `when`, `createHook` |
| `@band-store/framework/workflows-sdk/composer` | Re-export of `@band-store/workflows-sdk/composer` |
| `@band-store/framework/modules-sdk` | Re-export of `@band-store/modules-sdk` |
| `@band-store/framework/orchestration` | Re-export of `@band-store/orchestration` |
| `@band-store/framework/http` | `BandStoreRequest`, `AuthenticatedMedusaRequest`, `BandStoreResponse`, `defineMiddlewares`, `authenticate`, `validateAndTransformBody`, `validateAndTransformQuery` |
| `@band-store/framework/subscribers` | `SubscriberArgs`, `SubscriberConfig` |
| `@band-store/framework/jobs` | Scheduled job loader and types |
| `@band-store/framework/logger` | The Band Store `logger` |
| `@band-store/framework/config` | Config loader and `ConfigModule` types |
| `@band-store/framework/telemetry` | `Tracer` for OpenTelemetry instrumentation |
| `@band-store/framework/feature-flags` | Feature flag loader and router |
| `@band-store/framework/database`, `/links`, `/search`, `/workflows`, `/migrations`, `/build-tools` | Loaders and tooling used by the Band Store application and CLI |
| `@band-store/framework/zod` | Re-export of the `zod` version Band Store uses |
| `@band-store/framework/awilix`, `/pg` | Re-exports of `awilix` and `pg` |
| `@band-store/framework/mikro-orm/{core,knex,postgresql,migrations,cli}` | Re-exports of the pinned MikroORM packages |
| `@band-store/framework/opentelemetry/{api,resources,sdk-node,sdk-trace-node,instrumentation-pg}` | Re-exports of the pinned OpenTelemetry packages |

The package also ships a `band-store-mikro-orm` binary that wraps the MikroORM CLI.

## Installation

Projects created with `create-band-store-app` already include it. To add it to a plugin or module package:

```bash
npm install @band-store/framework
```

## Usage

```ts
import type {
  BandStoreRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

export const GET = (
  req: BandStoreRequest,
  res: BandStoreResponse
) => {
  res.json({
    message: "[GET] Hello world!",
  })
}
```

## Resources

- Framework overview
- API routes
- Workflows
- Modules
- Data models
- Band Store configuration
