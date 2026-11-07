# Integration tests

Full-stack integration tests for the Band Store monorepo. Test files boot a Band Store application against a fresh PostgreSQL database, mostly through `bandStoreIntegrationTestRunner` from [`@band-store/test-utils`](../packages/band-store-test-utils).

## Suites

| Path | Workspace | What it tests |
| --- | --- | --- |
| [`http`](./http) | `integration-tests-http` | Store and Admin API routes over HTTP, grouped by resource under `http/__tests__`. App config: `http/band-store-config.js`. |
| [`modules`](./modules) | `integration-tests-modules` | Modules, links, Query, workflows, and subscribers running inside a Band Store application, under `modules/__tests__`. App config: `modules/band-store-config.ts`. |

Shared code:

- [`helpers`](./helpers): fixtures and helpers such as `createAdminUser` and `adminHeaders`.
- [`environment-helpers`](./environment-helpers): helpers to bootstrap and run a test server.
- [`setup-env.js`](./setup-env.js): Jest setup file used by both suites. Loads `.env.test` and sets a test license for license-gated packages.

Integration tests of individual packages live in each package's own `integration-tests` directory and run with `yarn test:integration:packages`, not from here.

## Prerequisites

- PostgreSQL running and reachable with a user allowed to create databases. The test runner creates and drops its own databases.
- Built packages. The suites import the packages' build output, so run `yarn build` from the repo root first, and again after changing package source.

## Environment variables

Defaults are loaded from [`.env.test`](./.env.test). Variables already set in your shell take precedence.

| Variable | Description | Default |
| --- | --- | --- |
| `DB_HOST` | PostgreSQL host | `localhost` |
| `DB_PORT` | PostgreSQL port | `5432` |
| `DB_USERNAME` | PostgreSQL user | `postgres` |
| `DB_PASSWORD` | PostgreSQL password | empty |
| `LOG_LEVEL` | Band Store log level during tests | `error` |

## Running the tests

From the repo root, run a whole suite:

```bash
yarn test:integration:http
yarn test:integration:modules
```

Extra Jest flags are passed through, for example `yarn test:integration:http -- --shard=1/4`.

To run a single file or directory, run Jest from the suite's directory:

```bash
cd integration-tests/http
yarn test:integration __tests__/product/admin/product-export.spec.ts
```
