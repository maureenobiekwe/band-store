# @band-store/band-store-oas-cli

The `band-store-oas` CLI. It compiles Band Store's Admin/Store OpenAPI specs (optionally merging a project's own JSDoc OAS), then sanitizes and splits them for Redocly. The monorepo uses it, via `@band-store/oas-github-ci`, to produce `www/apps/api-reference/specs`.

## Using this package

```bash
yarn band-store-oas oas --type admin --out-dir ./oas                 # root script, runs src via ts-node
yarn band-store-oas oas --type store --paths ./src --base ./custom.oas.base.yaml
yarn band-store-oas docs --src-file ./oas/store.oas.json --out-dir ./docs --split
```

`oas` options:

- `-t, --type <admin|store|combined>` (required). `combined` merges admin and store.
- The command builds from this repo's `www/utils/generated/oas-output/{operations/<type>,schemas,base}` plus error schemas in `@band-store/band-store/dist/utils/middlewares`.
- `-p, --paths <dirs...>`: extra directories to crawl for swagger-inline JSDoc (each must be a directory). `-b, --base <file>`: custom base OAS (default `oas/default.oas.base.yaml`).
- `-o, --out-dir` (default cwd), `-D, --dry-run`, `-F, --force` (write even if validation fails).
- Output: `<type>.oas.json`, with `info.version` set to the installed `@band-store/band-store` version.

`docs` options: `-s, --src-file` (required), `-o, --out-dir`, `--config <.json|.yaml>` (merged over `redocly/redocly-config.yaml`), `--clean`, `--split`, `--preview`, `--html`, `--main-file-name` (default `openapi.yaml`), `-D, --dry-run`.

## Architecture

- `src/index.ts`: commander root; registers `command-oas.ts` and `command-docs.ts`.
- `src/command-oas.ts`: swagger-inline + `@readme/openapi-parser` validation; `src/utils/merge-oas.ts` / `combine-oas.ts` merge custom and combined specs.
- `src/command-docs.ts`: Redocly pipeline (bundle, optional split, preview, build-docs) using `@redocly/cli`, with the custom plugin in `redocly/plugins/band-store` (`circular-patch` decorator).
- `redocly/redocly-config.yaml`: the list of schema properties to patch to break circular references.

## Development

```bash
yarn build                                          # tsc --build
../../../../node_modules/.bin/jest                  # no test script; uses jest.config.js (ts-jest)
../../../../node_modules/.bin/jest src/__tests__/command-oas.test.ts
yarn openapi:generate --dry-run                     # from repo root: full CI pipeline into a temp dir
```

`oas` needs a built `@band-store/band-store` (it reads `dist/utils/middlewares`) and an up-to-date `www/utils/generated/oas-output`, which is regenerated with `yarn generate:oas` in `www/utils`.

## Gotchas

- `oas` generates its input from the local codebase; it does not fetch a published specification.
- `docs` detects unhandled circular references and appends them to this package's `redocly/redocly-config.yaml` on disk. Expect that file to show up in your diff after a run, and commit the change if it's intended.
- Invalid OAS calls `process.exit(1)` unless `--force` is passed.
- `docs --dry-run` runs `git checkout` on `redocly/redocly-config.yaml` to undo its own edits, which also discards your unstaged changes to that file. Stage them before a dry run.
- The Redocly plugin is CommonJS, so its files must keep the `.cjs` extension: Redocly CLI v2 is ESM. The `circular-patch` decorator patches refs on `leave`, because Redocly still reads `$ref` after the enter visitor runs.
- The local OAS paths are resolved relative to the compiled file (`../../../../../www/...`), so the command only works from inside this monorepo layout.
