# @band-store/admin-bundler

Builds and serves the Band Store Admin for an application, and builds the admin extensions of a plugin. It wraps Vite with `@band-store/admin-vite-plugin`, `@vitejs/plugin-react`, and an injected Tailwind config, and renders `@band-store/dashboard` as the app shell.

## Using this package

Not imported by app code. The Band Store CLI calls it:

- `develop(options)`: Vite dev server in middleware mode, returned as an Express router. Used by `packages/band-store/src/loaders/admin.ts` in development.
- `serve({ outDir })`: serves a prebuilt admin with long-lived cache headers and an SPA fallback. Throws if `index.html` is missing ("run 'Band Store build'").
- `build(options)`: production build. Called from `packages/core/framework/src/build-tools/compiler.ts` (`bandStore build`).
- `plugin({ root, outDir })`: library build of a plugin's `src/admin` into `<outDir>/src/admin` (`bandStore plugin:build`).

`BundlerOptions` come from the app's `admin` config in `band-store-config.ts` (`AdminOptions` in `@band-store/types`), plus internal `outDir`, `sources`, and `plugins`:

```ts
module.exports = defineConfig({
  admin: {
    path: "/app",
    backendUrl: process.env.BAND_STORE_BACKEND_URL,
    storefrontUrl: "https://storefront.example.com",
    maxUploadFileSize: 1024 * 1024 * 10,
    vite: (config) => ({
      server: { allowedHosts: [".example.com"] },
    }),
  },
})
```

Values exposed to admin code:
- Build-time defines: `__BASE__`, `__BACKEND_URL__`, `__STOREFRONT_URL__`, `__AUTH_TYPE__` (from `ADMIN_AUTH_TYPE`), `__JWT_TOKEN_STORAGE_KEY__` (from `ADMIN_JWT_TOKEN_STORAGE_KEY`), `__MAX_UPLOAD_FILE_SIZE__`.
- `import.meta.env.VITE_*`: Vite's standard prefix.
- `process.env.X`: from any env var named `PLUGIN_X`, plus `process.env.BACKEND_URL`.

Docs:

## Architecture

- `src/utils/config.ts` (`getViteConfig`):
  - Vite root is `<cwd>/.band-store/client`. `writeStaticFiles` generates `index.html`, `index.css`, and an `entry.jsx` there that imports `@band-store/dashboard` and each plugin, then renders `<App plugins={[...]} />`.
  - Tailwind uses `@band-store/ui-preset`, with content globs covering `.band-store/client`, the dashboard, `@band-store/ui`, every admin source, and every plugin package. Extensions don't need their own Tailwind setup.
  - `admin.vite` output is merged last with Vite's `mergeConfig`.
- `src/commands/plugin.ts`:
  - Externalizes all of the plugin's `dependencies`, `peerDependencies`, and `devDependencies`, plus React, React Router, `react-i18next`, `@band-store/js-sdk`, `@band-store/admin-sdk`, and `@tanstack/react-query`.
  - Outputs `es` and `cjs` with chunks in `_chunks/`.
  - Forces `NODE_ENV=production` during the build.
- `src/commands/develop.ts` returns 403 for `/__open-in-editor` (GHSA-v6wh-96g9-6wx3). Keep that block.

## Development

```bash
yarn build   # tsup, then scripts/assert-esm-imports.mjs
```

No tests in this package. Exercise changes through a test app with `bandStore develop`, `bandStore build`, or `bandStore plugin:build`.

## Gotchas

- The package ships as CJS, but `vite` (v6+), `@vitejs/plugin-react` (v5+) and `get-port` (v6+) are ESM-only:
  - Always load them with `await import(...)`, never top-level imports.
  - `scripts/assert-esm-imports.mjs` fails the build if esbuild rewrites those imports into `require()`.
- `build.target` is pinned to `"baseline-widely-available"` in both `config.ts` and `plugin.ts`. Keep the two in sync: plugin bundles load inside the dashboard bundle.
- Dev HMR env vars:
  - `HMR_PORT` (default: a free port), `HMR_PROTOCOL`, `HMR_HOST`, `HMR_CLIENT_PORT`.
  - `HMR_BIND_HOST` is ignored when the merged config already sets `server.hmr.server`.
- `__band-store_ADMIN_ADDITIONAL_ALLOWED_HOSTS` (comma-separated) sets Vite `server.allowedHosts`.
- `optimizeDeps.exclude` must list every `VIRTUAL_MODULES` id. Vite pre-bundling would otherwise try to resolve them.
