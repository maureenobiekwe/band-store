# @band-store/cli

The `bandStore` binary. It is a thin yargs front end: it parses commands and flags, then loads the real implementation from the project's installed `@band-store/band-store` package (`@band-store/band-store/commands/<name>`).

## Using this package

Run commands from the root of a Band Store application or plugin (`npx bandStore <command>`):

| Command | Notable flags |
| --- | --- |
| `develop` | `-H/--host`, `-p/--port` (default `PORT` env or `9000`), `--types` (default `true`), `--lint`, `--fix` |
| `start` | `-H`, `-p`, `--types` (default `false`), `--cluster [n or %]`, `--workers`, `--servers` |
| `build` | `--admin-only` (outputs `.band-store/admin`), `--lint`, `--fix`, `--quiet` |
| `lint [paths...]` | `--fix`, `--quiet` |
| `db:setup` / `db:create` | `--db <name>`, `--no-interactive`; `db:setup` also takes the `db:migrate` link/search flags |
| `db:migrate` | `--skip-scripts`, `--skip-links`, `--skip-search`, `--execute-all-links`, `--execute-safe-links`, `--execute-all-search`, `--execute-safe-search`, `--concurrency <n>`, `--all-or-nothing` |
| `db:generate <modules...>` / `db:rollback <modules...>` | module names are required |
| `db:sync-links` | `--execute-all`, `--execute-safe`, `--concurrency` |
| `db:migrate:scripts`, `db:migrate:search` | run only migration scripts / search index changes |
| `plugin:build`, `plugin:develop`, `plugin:publish`, `plugin:add <names...>`, `plugin:db:generate` | plugin authoring (local registry flow) |
| `user` | `-e/--email`, `-p/--password`, `-i/--id`, `--invite` (prints an invite token instead of creating the user) |
| `exec [file] [args..]` | runs a script's default export with the container |
| `new [root] [starter]` | legacy scaffolder; clones `medusajs/dtc-starter` by default. Prefer `create-band-store-app` |
| `codemod <name>` | `--dry-run`; available: `replace-zod-imports` (rewrites `zod` imports to `@band-store/framework/zod`) |
| `telemetry` | `--enable`, `--disable` |
| `mcloud [args..]` | forwards to the `mcloud` CLI, offering to install `@band-store/mcloud` globally if missing |

Global flags: `--verbose`, `--no-color`, `--json`. `bandStore -v` prints both CLI and project `@band-store/band-store` versions.

Docs:  plus per-command pages such as  and

## Architecture

- `cli.js`: bin entry. Registers `ts-node` + `tsconfig-paths` (warns if unavailable outside `NODE_ENV=production`), loads `.env` via `dotenv`, then requires `dist/index.js`. When the app's `typescript` is 7.x, ts-node runs on the optional peer `@typescript/typescript6`, since TS 7 has no compiler API. If that package is missing, the CLI prints an install message and exits with code 1 (outside `NODE_ENV=production`).
- `src/create-cli.ts`: every command definition and flag lives here. Handlers call `getCommandHandler("<path>")`, which resolves `@band-store/band-store/commands/<path>` from the cwd. Command logic belongs in `packages/band-store/src/commands/` (e.g. `db/migrate.ts`, `plugin/build.ts`), not here.
- `src/commands/new.ts`: the only command implemented in this package.
- `src/codemods/`: codemod registry (`index.ts`); each codemod implements `Codemod` from `types.ts`.
- `src/reporter/`: winston/ora based logger used by `new` and `codemod`.

Adding a command: define it in `create-cli.ts`, implement it as `packages/band-store/src/commands/<path>.ts` with a default export, and make sure `@band-store/band-store`'s `./commands/*` export (`dist/commands/*.js`) covers the path.

## Development

```bash
yarn build                 # rimraf dist && tsc --build
yarn watch
yarn test                  # jest over src
../../../node_modules/.bin/jest src/codemods/__tests__/replace-zod-imports.test.ts
```

Tests live next to the code in `__tests__/` (`commands/__tests__/new.test.ts`, `codemods/__tests__/`, `reporter/__tests__/`). Tests for the actual command implementations are in `packages/band-store/src/commands/**/__tests__`.

## Gotchas

- Any command other than `new` exits with an error unless `./package.json` lists `@band-store/band-store` or `@band-store/cli` in dependencies/devDependencies. The `@band-store/cli` check exists because plugins (e.g. `@band-store/draft-order`) can't depend on `@band-store/band-store`.
- Most handlers default `NODE_ENV` to `development` if unset; `start` defaults it to `production`. `user` and `exec` don't set it.
- Long-running handlers (`develop`, `start`, `build`, `user`, `exec`, `plugin:*`, `mcloud`) call the command without awaiting it and return a never-resolving promise, so the wrapper never calls `process.exit`. The command itself must exit the process when done.
- `--lint` defaults to `true` on `build`/`develop` only when `@band-store/eslint-plugin` resolves from the project directory.
- yargs runs in `.strict()` mode: unknown flags fail and print a "did you mean" suggestion (`src/did-you-mean.ts`). `mcloud` turns on `unknown-options-as-args` so its flags pass through.
- The `new --v2` flag is a leftover and has no effect on the cloned starter.
