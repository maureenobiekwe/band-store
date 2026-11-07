# @band-store/oas-github-ci

Private CI script that regenerates the Band Store Store and Admin API OpenAPI specs for the API reference docs. For each API, it runs `band-store-oas oas --local` (from `@band-store/band-store-oas-cli`) against the monorepo's `@band-store/band-store`, then `band-store-oas docs --clean --split` to write the result to `www/apps/api-reference/specs/<store|admin>`. It isn't published to npm.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/oas-github-ci` (private) |
| Type | Internal tooling |
| Entry point | `scripts/build-openapi.js` |

## Usage

From the repository root (this is what the `generate-public-references` GitHub workflow runs):

```bash
yarn openapi:generate
```

This runs `yarn ./packages/cli/oas/oas-github-ci run ci --with-full-file`. To validate the specs without writing to the docs app, run the script directly with `--dry-run`:

```bash
yarn ./packages/cli/oas/oas-github-ci run ci --dry-run
```

Preview the generated specs with Redocly:

```bash
yarn ./packages/cli/oas/oas-github-ci run preview:store
yarn ./packages/cli/oas/oas-github-ci run preview:admin
```

## Configuration

| Flag | Description |
| --- | --- |
| `--dry-run` | Generate into a temporary directory (`RUNNER_TEMP` on GitHub Actions, else the OS temp directory) and pass `--dry-run` to `band-store-oas docs`. Nothing is written to `www/apps/api-reference/specs`. |
| `--with-full-file` | Also write a single-file spec, `openapi.full.yaml`, next to the split output. |
| `--archive-version=<version>` | Before regenerating, copy the current `openapi.full.yaml` of each API to `specs/versions/<version>/<store\|admin>/`. Ignored with `--dry-run`. |
