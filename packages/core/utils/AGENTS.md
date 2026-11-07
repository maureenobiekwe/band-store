# @band-store/utils

Runtime helpers shared by Band Store core, modules, and plugins: the module service factory, the data model DSL, module/link definitions, decorators, `BandStoreError`, `defineConfig`, event name constants, and big-number math. Consumers get it as `@band-store/framework/utils`.

## Using this package

Always import from `@band-store/framework/utils` (it also loads the container type augmentation, so `container.resolve(Modules.X)` is typed).

Data model + service + module definition:

```ts
// src/modules/blog/models/post.ts
import { model } from "@band-store/framework/utils"

const Post = model.define("post", {
  id: model.id().primaryKey(),
  title: model.text().searchable(),
  price: model.bigNumber(),
  status: model.enum(["draft", "published"]).default("draft"),
})

export default Post
```

```ts
// src/modules/blog/service.ts
import { BandStoreService } from "@band-store/framework/utils"
import Post from "./models/post"

class BlogModuleService extends BandStoreService({ Post }) {}

export default BlogModuleService
```

```ts
// src/modules/blog/index.ts
import { Module } from "@band-store/framework/utils"
import BlogModuleService from "./service"

export const BLOG_MODULE = "blog"

export default Module(BLOG_MODULE, { service: BlogModuleService })
```

```ts
// src/links/product-post.ts
import { defineLink } from "@band-store/framework/utils"
import ProductModule from "@band-store/band-store/product"
import BlogModule from "../modules/blog"

export default defineLink(ProductModule.linkable.product, {
  linkable: BlogModule.linkable.post,
  isList: true,
})
```

- `BandStoreService({ Post })` generates `retrievePost`, `listPosts`, `listAndCountPosts`, `createPosts`, `updatePosts`, `deletePosts`, `softDeletePosts`, `restorePosts`. Names use the model key, pluralized; override with `{ Post: { dto, singular, plural } }`.
- Generated `update*` accepts `{ id, ...data }` objects or `{ selector, data }`.
- `defineLink` options: per side `linkable`, `isList`, `deleteCascade`, `filterable`, `field`; third arg `{ database: { table, idPrefix, extraColumns }, readOnly, pk }`.
- `ModuleProvider(Modules.FILE, { services: [MyProviderService] })` wraps provider packages; each service needs a static `identifier`.
- Other frequently used exports: `Modules`, `ContainerRegistrationKeys`, `BandStoreError` (`BandStoreError.Types.*`), `QueryContext`, `MathBN`/`BigNumber`, `promiseAll`, `generateEntityId`, `loadEnv`, `*WorkflowEvents` constants (`src/core-flows/events.ts`), `defineFileConfig`.
- Docs:

## Architecture

- `src/modules-sdk/`: `band-store-service.ts` (service factory), `band-store-internal-service.ts` (per-model CRUD service used inside modules), `module.ts` / `module-provider.ts`, `define-link.ts`, `definition.ts` (`Modules`, `MODULE_PACKAGE_NAMES`), `joiner-config-builder.ts`, `decorators/`, `migration-scripts/`.
- `src/dml/`: `entity-builder.ts` (`model`), `entity.ts` (`DmlEntity`: `.indexes()`, `.checks()`, `.cascades()`), `properties/`, `relations/`, `helpers/create-mikro-orm-entity.ts` (DML -> MikroORM entity).
- `src/common/define-config.ts`: `defineConfig` and the default module list (local vs. Band Store Cloud via `EXECUTION_CONTEXT=band-store-cloud`).
- `src/core-flows/events.ts`: event name constants emitted by core workflows.
- `src/dal/`: MikroORM repository factories and PostgreSQL helpers.

## Development

```bash
yarn build
yarn test                                   # unit tests, excludes integration-tests/
yarn test src/dml/__tests__/entity-builder.spec.ts
yarn test:integration                       # src/**/integration-tests/__tests__/*.spec.ts, needs Postgres
```

- Integration tests (`src/dml/`, `src/migrations/`, `src/pg/` `integration-tests/`) connect with `DB_HOST` (default `localhost`), `DB_USERNAME`, `DB_PASSWORD`.
- Changing event constants in `src/core-flows/events.ts` or exported TSDoc affects generated reference docs; use the `writing-tsdocs` skill for TSDoc.

## Gotchas

- `created_at`, `updated_at`, `deleted_at` are added to every DML model; declaring them throws `Cannot define field(s) ... as they are implicitly defined on every model`.
- `model.bigNumber()` also creates a `raw_<field>` JSON column; keep it in mind when writing raw queries or migrations.
- `model.define({ name, tableName })` throws if `tableName` is missing; a `"schema.table"` name sets a Postgres schema.
- Cascading delete from a `belongsTo` side throws `Child to parent cascades are not allowed`.
- Generated service methods are wrapped with `@BandStoreContext`, `@EmitEvents`, `@InjectManager` in that exact order (comment in `band-store-service.ts`). If you override one, re-apply `@InjectManager()` and `@BandStoreContext()` yourself.
- `@InjectManager` / `@InjectTransactionManager` throw unless a parameter is flagged with `@BandStoreContext()`, and they read the manager from `this.baseRepository_` by default.
- `BandStoreService` wires mutation-event subscribers only into container entries whose key ends in `Service` (internal services are registered as `<lowerCamelModel>Service`).
- `readOnly: true` links require `linkable` and `field` on the left side and reject `filterable`.
- Adding a core module requires updating `Modules` and `MODULE_PACKAGE_NAMES` here, the `ModuleImplementations` augmentation in `packages/core/framework/src/types/container.ts`, and the re-export under `packages/band-store/src/modules/`.
