# @band-store/notification-local

Notification Module provider that logs notifications with the Band Store logger instead of sending them. Registered by default by `defineConfig` for the `feed` channel. For development and testing.

## Using this package

```ts
module.exports = defineConfig({
  modules: [
    {
      resolve: "@band-store/band-store/notification",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/notification-local",
            id: "local",
            options: {
              channels: ["email"],
            },
          },
        ],
      },
    },
  ],
})
```

- `channels` (read by the Notification Module, not the provider) decides which notifications are routed here. The provider itself takes no options.
- Send through `Modules.NOTIFICATION` (`createNotifications`) or the `sendNotificationsStep`; the provider is never called directly.
- Docs:
- Build a custom notification provider:

## Architecture

- `src/services/local.ts`: `LocalNotificationService extends AbstractNotificationProviderService` (from `@band-store/framework/utils`), `static identifier = "notification-local"`.
- Implements only `send(notification)`: logs `to`, `channel`, `template`, `data` at `info` level and returns `{}`. Smallest reference for a custom notification provider.

## Development

- `yarn build`, `yarn test`
- `yarn test:integration`: `integration-tests/__tests__/services.spec.ts`.

## Gotchas

- Overriding the Notification Module's `providers` replaces the default registration (this provider on the `feed` channel); include a `feed` provider again if you send `feed` notifications.
- Each channel can have only one provider: registering this for `email` alongside SendGrid throws `Multiple providers are configured for the same channel: email`.
- If no provider handles `email` and Band Store Cloud email credentials are configured, the Notification Module auto-registers its cloud email provider; registering this provider for `email` disables that.
