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
  @band-store/test-utils
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

`@band-store/test-utils` provides Jest test runners for Band Store: `bandStoreIntegrationTestRunner` boots a full Band Store application against a test database for HTTP and workflow integration tests, and `moduleIntegrationTestRunner` boots a single module for module integration tests. Use it as a dev dependency in Band Store applications, plugins, and module packages.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/test-utils` |
| Type | Core library |
| Import from | `@band-store/test-utils` |

## Features

- `bandStoreIntegrationTestRunner`: runs a test suite against a running Band Store application, passing `api` (an HTTP client), `getContainer`, `dbConnection`, and `utils.waitWorkflowExecutions`.
- `moduleIntegrationTestRunner`: runs a test suite against one module, passing its `service`, `bandStoreApp`, and `MikroOrmWrapper`. Accepts `moduleName`, `resolve`, `moduleModels`, `moduleOptions`, and `injectedDependencies`.
- `initModules`: initializes a set of modules for custom test setups.
- `TestEventUtils.waitSubscribersExecution`: waits until subscribers of an event finish running.
- `MockEventBusService`, `TestDatabaseUtils`, `JestUtils`, and `normalizeBigNumbers` helpers.
- A Jest preset (`preset: "@band-store/test-utils"`) that lets Jest load the ESM-only packages Band Store depends on.

## Installation

```bash
npm install --save-dev @band-store/test-utils jest @types/jest @swc/jest
```

Requires `@band-store/framework` as a peer dependency; `@band-store/band-store` and `@band-store/core-flows` are optional peers.

## Usage

```ts
import { bandStoreIntegrationTestRunner } from "@band-store/test-utils"

bandStoreIntegrationTestRunner({
  testSuite: ({ api, getContainer }) => {
    // TODO write tests...
  },
})

jest.setTimeout(60 * 1000)
```

## Configuration

The runners create a test database per Jest worker and connect to PostgreSQL with these environment variables:

| Environment variable | Description | Default |
| --- | --- | --- |
| `DB_HOST` | PostgreSQL host. | `localhost` |
| `DB_PORT` | PostgreSQL port. | `5432` |
| `DB_USERNAME` | PostgreSQL user. | - |
| `DB_PASSWORD` | PostgreSQL password. | - |

## Resources

- Testing tools
- Integration tests
- Module tests
