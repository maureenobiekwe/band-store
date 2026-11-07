# @band-store/analytics-local

Analytics Module provider that writes `track`/`identify` calls to the Band Store logger at `debug` level instead of sending them anywhere. Use it in development; swap for `@band-store/analytics-posthog` (or a custom provider) in production.

## Using this package

The Analytics Module isn't registered by default. Register it with this provider in `band-store-config.ts`:

```ts
module.exports = defineConfig({
  modules: [
    {
      resolve: "@band-store/band-store/analytics",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/analytics-local",
            id: "local",
          },
        ],
      },
    },
  ],
})
```

- No options (`LocalAnalyticsServiceOptions` is an empty interface).
- Resolve the module with `Modules.ANALYTICS` and call `track()` / `identify()` on it; this provider is never called directly.
- Docs:
- Build a custom analytics provider:

## Architecture

- `src/services/local-analytics.ts`: `LocalAnalyticsService extends AbstractAnalyticsProviderService` (from `@band-store/framework/utils`), `static identifier = "analytics-local"`. Registration key is `{identifier}_{id}` (e.g. `analytics-local_local`).
- Implements only `track(data)` and `identify(data)`. `shutdown()` is optional on providers and not implemented here.
- Smallest reference implementation for a custom analytics provider.

## Development

- `yarn build`, `yarn test` (no tests in this package; `--passWithNoTests`).

## Gotchas

- Output is logged with `logger.debug`, so nothing appears unless the log level includes debug (e.g. `LOG_LEVEL=debug`).
- The Analytics Module throws `Analytics module should be initialized with exactly one provider` if zero or more than one provider is registered.
