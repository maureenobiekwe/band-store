# @band-store/band-store

The main Band Store application package: every built-in Admin/Store/Auth API route, core subscribers, the server loaders, the `bandStore` CLI command implementations, and thin re-export entry points for every commerce/infrastructure module and provider. A Band Store app depends on it and extends it with its own `src/api`, `src/subscribers`, `src/jobs`, etc.

## Using this package

### Entry points (`package.json` `exports`)

- `@band-store/band-store/<module>`: module/provider wrappers in `src/modules/*.ts`, used as `resolve` in `band-store-config.ts`. These are the defaults in `MODULE_PACKAGE_NAMES` (`packages/core/utils/src/modules-sdk/definition.ts`). Note `@band-store/band-store/index-module` (Index Module) and `@band-store/band-store/link-modules`.

```ts
modules: [
  {
    resolve: "@band-store/band-store/file",
    options: {
      providers: [
        { resolve: "@band-store/band-store/file-s3", id: "s3", options: { /* ... */ } },
      ],
    },
  },
]
```

- `@band-store/band-store/core-flows`: re-export of `@band-store/core-flows`.
- `@band-store/band-store/api/*`: route internals apps may reuse, e.g. `createFindParams` from `@band-store/band-store/api/utils/validators`.
- `@band-store/band-store`: `registerOtel` (for `instrumentation.ts`), `defineMiddlewares`, `authenticate`/`errorHandler` middlewares, `SubscriberArgs`/`SubscriberConfig` types, `Commands`.
- `@band-store/band-store/commands/<name>`, `/loaders/*`, `/subscribers/*`, `/feature-flags/*`: used by `@band-store/cli` and `@band-store/test-utils`, not by apps.
- App code should import framework APIs (`BandStoreRequest`, `validateAndTransformQuery`, `allowFields`, `defineMiddlewares`) from `@band-store/framework/http`, not from this package.

### Extending the built-in API

- File-based routes: `src/api/<path>/route.ts` exporting `GET`/`POST`/`DELETE`/... ; `[param]` folders become `:param`.
- All middlewares live in one `src/api/middlewares.ts` (`defineMiddlewares({ routes: [...] })`). App middlewares are added to core routes; core middlewares can't be removed or replaced.
- `/admin/*` routes require an authenticated `user` (bearer, session, api-key); `/store/*` routes require a publishable API key and accept an optional `customer`. Opt out per route file with `export const AUTHENTICATE = false` (core example: `src/api/admin/invites/accept/route.ts`); `export const CORS = false` skips CORS.
- A route file at the same path as a core route replaces it (core routes load first, later registrations override). Prefer workflow hooks, `additional_data` (`additionalDataValidator` in middlewares), or a new route instead.
- Store routes only return fields in their `allowed` list; others in `?fields=` are silently dropped. To expose a linked model through a core store route, add a global middleware:

```ts
import { allowFields, defineMiddlewares } from "@band-store/framework/http"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/store/products",
      middlewares: [allowFields("brand.id", "brand.name")],
    },
  ],
})
```

- Docs:

## Architecture

- `src/api/{admin,store,auth,hooks,cloud}/<resource>/`: per resource, `route.ts` (+ nested `[id]/route.ts`), `middlewares.ts` (exports e.g. `adminProductRoutesMiddlewares: MiddlewareRoute[]`), `validators.ts` (Zod via `@band-store/framework/zod`), `query-config.ts` (`defaults`, `allowed`, `isList`, `defaultLimit`), optional `helpers.ts`.
- `src/api/middlewares.ts` spreads every resource's middleware array into one `defineMiddlewares([...])`. `src/api/__tests__/middlewares.spec.ts` fails if any array is spread twice.
- Route handlers stay thin: run a workflow from `@band-store/core-flows`, then re-read with `refetchEntity`/`refetchEntities` (`@band-store/framework/http`) using `req.queryConfig.fields`.
- Admin RBAC: middleware entries guard routes with `authorize([{ resource, operation: PolicyOperation.read }])` from `@band-store/framework/http`, and `authorizeIfNecessary(predicate, policies)` when a check only applies to some requests (e.g. `campaign:create` when `POST /admin/promotions` creates a campaign inline); routes whose resource is only known at request time use `filterReadableEntities` / `requireSuperAdmin` from `src/api/admin/utils/`. `GET`/`POST /admin/users/me` are deliberately unguarded so every user can read and update its own profile without `user:read`/`user:update`. Core resources (`CORE_POLICY_RESOURCES`) get one policy per operation, synced by the RBAC module's `core-policies` loader. Apps and plugins augment `PolicyResourceRegistry` and create their own policies with `createRbacPoliciesWorkflow` + `buildPolicies`, typically from a migration script disabled while RBAC isn't installed (see the loyalty plugin's `create-loyalty-rbac-policies.ts`). Policies are only enforced when RBAC is enabled.
- `src/loaders/index.ts`: feature flags (app first, then `src/feature-flags`) and config, container, links, modules (`BandStoreAppLoader`), workflows, subscribers, jobs, then entry points: `loaders/api.ts` (`ApiLoader` over this package's `src/api` plus each plugin's and the app's `api` dir) and `loaders/admin.ts`, and finally `createDefaultsWorkflow`.
- `src/subscribers/`: `payment-webhook.ts` (handles `PaymentWebhookEvents.WebhookReceived`, emitted by `src/api/hooks/payment/[provider]/route.ts` after confirming the provider is configured), `configurable-notifications.ts`, `search-ingestion.ts`. `src/jobs/` is currently empty.
- `src/commands/`: `develop`, `start`, `build`, `exec`, `user`, `lint`, `mcloud`, `db/*` (`migrate`, `rollback`, `generate`, `setup`, `create`, `sync-links`, `run-scripts`, `migrate-search`), `plugin/*`. `@band-store/cli` resolves them via `@band-store/band-store/commands/<command>`.
- `src/migration-scripts/`: one-off data migrations run by `bandStore db:migrate` (unless `skipScripts`) via `commands/db/run-scripts.ts`, alongside each plugin's `migration-scripts` dir.
- `src/modules/<name>.ts`: `export *` + default from the module package, plus `export const discoveryPath = require.resolve("<pkg>")`.

## Development

- `yarn build`, `yarn watch`, `yarn test` (unit tests under `src`, excluding `integration-tests`), `yarn test:integration` (`src/**/integration-tests/__tests__`, currently `src/commands/plugin/db`).
- Single unit test: `../../node_modules/.bin/jest src/api/__tests__/middlewares.spec.ts`.
- API route behavior is tested in `integration-tests/http/__tests__/<resource>/{admin,store}/*.spec.ts` with `bandStoreIntegrationTestRunner` (needs Postgres). The suite loads packages from `dist`, so rebuild what you changed first (`yarn workspace @band-store/band-store build`), then from `integration-tests/http`: `yarn build && yarn test:integration __tests__/product/admin/product.spec.ts`.
- New or changed route: add the HTTP request/response types in `packages/core/types/src/http/<resource>/`, the JS SDK method in `packages/core/js-sdk/src/{admin,store}/`, and TSDoc/OAS per `www/apps/api-reference/CLAUDE.md`.
- New store route: define `defaults` + `allowed` in its `query-config.ts` with `buildAllowedFields()` / `prefixAllowedFields()` from `src/api/store/utils/allowed-fields.ts`. List nested fields explicitly (`variants.sku`), not whole relations.
- New module/provider package: add it to `dependencies` and add `src/modules/<name>.ts` following the existing pattern (including `discoveryPath`).

## Gotchas

- `discoveryPath` is load-bearing: the module loader (`packages/core/modules-sdk/src/loaders/utils/load-internal.ts`) imports it to find the real package for migrations and models. Omitting it breaks module discovery through the re-export.
- `buildAllowedFields` strips leading `*` and trailing `.*` from defaults, so `*variants` in `defaults` allows `variants`, not `variants.*`.
- Store `query-config.ts` files may set `storeRelationsLimit` per route (e.g. `4` for products); a lower route value overrides `http.storeRelationsLimit` from `band-store-config`, and exceeding it is a `400`, not a silent drop.
- `workerMode: "worker"` skips loading API routes and the admin; scheduled jobs only load in `worker` or `shared` mode. Subscribers always load but only a worker/shared instance processes events.
- `loaders/api.ts` replaces Express' `req.query` parsing with `qs.parse(..., { arrayLimit: Infinity })` to work around an Express bug; don't rely on Express' default query parsing in core routes.
- Some list routes branch on `FeatureFlag.isFeatureEnabled(IndexEngineFeatureFlag.key)` (`BAND_STORE_FF_INDEX_ENGINE`) and use the Index Module path only when no unsupported filters (tags, categories, options) are present; test both paths when changing them (e.g. `src/api/admin/products/route.ts`, `src/api/store/products/middlewares.ts`).
