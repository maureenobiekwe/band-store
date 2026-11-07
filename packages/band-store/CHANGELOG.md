# Change Log

## 2.22.4

### Patch Changes

- #17655 `7167fa2` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(core-flows,Band Store): document RBAC workflows and API routes

- Updated dependencies [`d8b4839`, `3a0cbbb`, `3d85f84`, `7167fa2`, `62339fd`, `199c263`]:
  - @band-store/auth@2.22.4
  - @band-store/auth-emailpass@2.22.4
  - @band-store/framework@2.22.4
  - @band-store/core-flows@2.22.4
  - @band-store/notification-sendgrid@2.22.4
  - @band-store/draft-order@2.22.4
  - @band-store/telemetry@2.22.4
  - @band-store/admin-bundler@2.22.4
  - @band-store/analytics@2.22.4
  - @band-store/api-key@2.22.4
  - @band-store/caching@2.22.4
  - @band-store/cart@2.22.4
  - @band-store/currency@2.22.4
  - @band-store/customer@2.22.4
  - @band-store/file@2.22.4
  - @band-store/fulfillment@2.22.4
  - @band-store/index@2.22.4
  - @band-store/inventory@2.22.4
  - @band-store/link-modules@2.22.4
  - @band-store/locking@2.22.4
  - @band-store/notification@2.22.4
  - @band-store/order@2.22.4
  - @band-store/payment@2.22.4
  - @band-store/pricing@2.22.4
  - @band-store/product@2.22.4
  - @band-store/promotion@2.22.4
  - @band-store/search-postgres@2.22.4
  - @band-store/rbac@2.22.4
  - @band-store/region@2.22.4
  - @band-store/sales-channel@2.22.4
  - @band-store/search@2.22.4
  - @band-store/settings@2.22.4
  - @band-store/stock-location@2.22.4
  - @band-store/store@2.22.4
  - @band-store/tax@2.22.4
  - @band-store/translation@2.22.4
  - @band-store/user@2.22.4
  - @band-store/workflow-engine-inmemory@2.22.4
  - @band-store/workflow-engine-redis@2.22.4
  - @band-store/cache-inmemory@2.22.4
  - @band-store/cache-redis@2.22.4
  - @band-store/event-bus-local@2.22.4
  - @band-store/event-bus-redis@2.22.4
  - @band-store/analytics-local@2.22.4
  - @band-store/analytics-posthog@2.22.4
  - @band-store/auth-github@2.22.4
  - @band-store/auth-google@2.22.4
  - @band-store/auth-oidc@2.22.4
  - @band-store/caching-redis@2.22.4
  - @band-store/file-local@2.22.4
  - @band-store/file-s3@2.22.4
  - @band-store/fulfillment-manual@2.22.4
  - @band-store/locking-postgres@2.22.4
  - @band-store/locking-redis@2.22.4
  - @band-store/notification-local@2.22.4
  - @band-store/payment-adyen@2.22.4
  - @band-store/payment-stripe@2.22.4

## 2.22.3

### Patch Changes

- #17584 `2e0d8ae` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(framework,Band Store): update chokidar to v6

- #17618 `385c4ff` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: update jest to v30.5.2 and use the `--testPathPatterns` flag in test scripts

- #15620 `a6a4254` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): require the nested resource's policy for nested writes in admin product, inventory item, tax region, promotion, and invite routes

- #15620 `a6a4254` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,core-flows,framework,js-sdk,modules-sdk,types,utils,link-modules,rbac): end to end RBAC implementation

- #17616 `536d630` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): forward with_deleted to the query in GET /admin/shipping-options

- #17638 `954edc7` Thanks @band-store-os-bot! - fix(Band Store): apply the request locale in the store product options routes

- Updated dependencies [`0ae4aed`, `4df78b3`, `9692b99`, `2e0d8ae`, `73874df`, `503c646`, `d4db323`, `d4494d9`, `39fb481`, `ae1da4d`, `385c4ff`, `255f87a`, `2276c84`, `a6a4254`, `4df78b3`, `2e3b55d`]:
  - @band-store/payment-adyen@2.22.3
  - @band-store/auth@2.22.3
  - @band-store/caching@2.22.3
  - @band-store/framework@2.22.3
  - @band-store/workflow-engine-inmemory@2.22.3
  - @band-store/auth-google@2.22.3
  - @band-store/auth-oidc@2.22.3
  - @band-store/payment-stripe@2.22.3
  - @band-store/payment@2.22.3
  - @band-store/file-s3@2.22.3
  - @band-store/workflow-engine-redis@2.22.3
  - @band-store/telemetry@2.22.3
  - @band-store/draft-order@2.22.3
  - @band-store/analytics@2.22.3
  - @band-store/api-key@2.22.3
  - @band-store/auth-emailpass@2.22.3
  - @band-store/auth-github@2.22.3
  - @band-store/cart@2.22.3
  - @band-store/currency@2.22.3
  - @band-store/customer@2.22.3
  - @band-store/event-bus-local@2.22.3
  - @band-store/event-bus-redis@2.22.3
  - @band-store/file@2.22.3
  - @band-store/file-local@2.22.3
  - @band-store/fulfillment@2.22.3
  - @band-store/index@2.22.3
  - @band-store/inventory@2.22.3
  - @band-store/link-modules@2.22.3
  - @band-store/locking@2.22.3
  - @band-store/locking-postgres@2.22.3
  - @band-store/locking-redis@2.22.3
  - @band-store/notification@2.22.3
  - @band-store/notification-local@2.22.3
  - @band-store/notification-sendgrid@2.22.3
  - @band-store/order@2.22.3
  - @band-store/pricing@2.22.3
  - @band-store/product@2.22.3
  - @band-store/promotion@2.22.3
  - @band-store/rbac@2.22.3
  - @band-store/region@2.22.3
  - @band-store/sales-channel@2.22.3
  - @band-store/search@2.22.3
  - @band-store/search-postgres@2.22.3
  - @band-store/settings@2.22.3
  - @band-store/stock-location@2.22.3
  - @band-store/store@2.22.3
  - @band-store/tax@2.22.3
  - @band-store/translation@2.22.3
  - @band-store/user@2.22.3
  - @band-store/core-flows@2.22.3
  - @band-store/admin-bundler@2.22.3
  - @band-store/cache-inmemory@2.22.3
  - @band-store/cache-redis@2.22.3
  - @band-store/analytics-local@2.22.3
  - @band-store/analytics-posthog@2.22.3
  - @band-store/caching-redis@2.22.3
  - @band-store/fulfillment-manual@2.22.3

## 2.22.2

### Patch Changes

- #17577 `d5e0ddf` Thanks [@sradevski](https://github.com/sradevski)! - feat(payment-adyen): add Adyen payment provider

- #17517 `7e30ecb` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(Band Store): bump multer to ^2.5.0

- #17532 `8e7ed52` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(analytics-posthog): update posthog-node to ^5.57.0

- #17527 `9d55082` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(dashboard,js-sdk,Band Store): update qs to ^6.16.1

- #17515 `7b34df3` Thanks [@dependabot](https://github.com/apps/dependabot)! - chore(deps): bump zod from 4.2.0 to 4.6.6

- #17567 `52caddd` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(deps): update development and test tooling (cross-env 10.1.0, esbuild 0.28.2, tsup 9.0.0, expect-type 1.4.0, @faker-js/faker 10.6.0, jsdom 30.1.3, @types/jsonwebtoken 9.0.10, msw 3.0.3, rimraf 6.1.3, Testing Library, turbo 2.11.10, @types/node 22, boxen 9.0.0, chalk 6.0.1, ci-info 4.4.0, commander 15.0.0, configstore 8.0.0, dotenv 18.0.9, execa 10.2.1, get-port 7.2.0, inquirer 14.2.4, @inquirer/checkbox 5.2.7, @inquirer/confirm 6.3.4, @inquirer/input 5.1.8, is-docker 4.0.0, meant 2.0.1, open 11.0.4, openapi3-ts 4.6.2, ora 9.4.1, @readme/openapi-parser 10.0.0, @redocly/cli 2.71.0, stack-trace 1.0.0, swagger-inline 8.1.0, yargs 18.2.0) and remove unused development dependencies; drop hosted-git-info from @band-store/cli; fix the band-store-oas-cli circular patch recommendation crashing on references nested in inline schemas; `band-store-oas docs --preview` now serves a static Redoc 3 build since Redocly removed `preview-docs`; replace chalk with Node's built-in `util.styleText` in CommonJS packages; replace uuid with Node's built-in `crypto.randomUUID`; replace get-port with a built-in free-port helper in @band-store/test-utils

- #17538 `c61fea6` Thanks [@Mezzle](https://github.com/Mezzle)! - fix(Band Store): reject payment webhooks for nonexistent providers before emitting an event

- #17494 `029fb31` Thanks @band-store-os-bot! - fix(Band Store): stop logging user emails in the super admin role migration script

- Updated dependencies [`d5e0ddf`, `1b554a9`, `6d38bc8`, `ca881e5`, `9d55082`, `6d38bc8`, `9d55082`, `26e5807`, `9d55082`, `8e7ed52`, `8e7ed52`, `7b34df3`, `c78a95a`, `33dbbfc`, `842d781`, `52caddd`, `2b1234b`, `04c0303`, `c7dd4e5`, `7d39751`, `bdf5c20`, `4beaf52`, `33dbbfc`, `56ea83b`, `56ea83b`]:
  - @band-store/payment-adyen@2.22.2
  - @band-store/payment@2.22.2
  - @band-store/admin-bundler@2.22.2
  - @band-store/file-s3@2.22.2
  - @band-store/framework@2.22.2
  - @band-store/telemetry@2.22.2
  - @band-store/draft-order@2.22.2
  - @band-store/cache-redis@2.22.2
  - @band-store/event-bus-redis@2.22.2
  - @band-store/caching-redis@2.22.2
  - @band-store/locking-redis@2.22.2
  - @band-store/workflow-engine-redis@2.22.2
  - @band-store/core-flows@2.22.2
  - @band-store/auth@2.22.2
  - @band-store/analytics-posthog@2.22.2
  - @band-store/caching@2.22.2
  - @band-store/link-modules@2.22.2
  - @band-store/auth-google@2.22.2
  - @band-store/inventory@2.22.2
  - @band-store/order@2.22.2
  - @band-store/pricing@2.22.2
  - @band-store/promotion@2.22.2
  - @band-store/search@2.22.2
  - @band-store/analytics@2.22.2
  - @band-store/api-key@2.22.2
  - @band-store/cache-inmemory@2.22.2
  - @band-store/cart@2.22.2
  - @band-store/currency@2.22.2
  - @band-store/customer@2.22.2
  - @band-store/event-bus-local@2.22.2
  - @band-store/file@2.22.2
  - @band-store/fulfillment@2.22.2
  - @band-store/index@2.22.2
  - @band-store/locking@2.22.2
  - @band-store/notification@2.22.2
  - @band-store/product@2.22.2
  - @band-store/analytics-local@2.22.2
  - @band-store/auth-emailpass@2.22.2
  - @band-store/auth-github@2.22.2
  - @band-store/auth-oidc@2.22.2
  - @band-store/file-local@2.22.2
  - @band-store/fulfillment-manual@2.22.2
  - @band-store/locking-postgres@2.22.2
  - @band-store/notification-local@2.22.2
  - @band-store/notification-sendgrid@2.22.2
  - @band-store/payment-stripe@2.22.2
  - @band-store/search-postgres@2.22.2
  - @band-store/rbac@2.22.2
  - @band-store/region@2.22.2
  - @band-store/sales-channel@2.22.2
  - @band-store/settings@2.22.2
  - @band-store/stock-location@2.22.2
  - @band-store/store@2.22.2
  - @band-store/tax@2.22.2
  - @band-store/translation@2.22.2
  - @band-store/user@2.22.2
  - @band-store/workflow-engine-inmemory@2.22.2

## 2.22.1

### Patch Changes

- #17442 `ea2d48190febf36389aa66242247c180f9f48212` Thanks @band-store-os-bot! - fix(Band Store): respond with 404 on /admin/index routes when the index module is off

- #17449 `52f4c751d2277ab704c1a184c7971a6684e11a74` Thanks @band-store-os-bot! - fix(Band Store): reject deleting a variant through a product it doesn't belong to

- #17432 `7c3b0339379efeda7863f48b9f60e3391cece091` Thanks [@sradevski](https://github.com/sradevski)! - feat(Band Store,core-flows,types,js-sdk): add store route to update a payment session's client data

- Updated dependencies [`64d564119d212b439e7f6192f71ec48ffbe6ff93`, `9e1b2ae94330588cd172a71307bc0874fd8228cc`, `0a4b00585cd7d9c7d99a11c3502ca9da0cdd75aa`, `67aa48d6b1bbac622d261808b4351521fad8cf42`, `afa4b15c1653d045fde6c2371395ce5df2987822`, `5aebc3e4a163c0e401d8794b2e961021eea5aea0`, `7ce874c0ce4df5d9942130a28067ced8b23b126d`, `a0b1fffe7082ee326f16f50a1e2bfc978032a2bf`, `9fd5fda64ac453b986cbf6480e05b6429efe335d`, `85d1481f546e0a7ca34ab2fc888606cfa5772817`, `f7d822b12fcb09120b5c8392f9a5ad10bfcdeb22`, `0b533907ac11d9cb3a80355ae7dee6ac51cba150`, `b07a970d9f1ff305b5421cc5e27436d1f5624a8a`, `4e723121b0f9e3792b61306af5cbf2ebd9e84d20`, `347a34dc5a193ac2117cbbda6956c3932f40e693`, `c959d5e3e7d4b482d0784eef67ef8ef766442d5e`, `879fb81983bc33ae3901a9aecba63dfebe040c43`, `99bcfeb5ee60b9e2df56d3d2d38e82470eaab68d`, `7c3b0339379efeda7863f48b9f60e3391cece091`, `4a75f02fbadb204f390bd5989dd0302f8a3f6774`, `e07eb2b001fa52621e3176efb36fdf53863d4a80`]:
  - @band-store/promotion@2.22.1
  - @band-store/caching@2.22.1
  - @band-store/core-flows@2.22.1
  - @band-store/locking@2.22.1
  - @band-store/locking-redis@2.22.1
  - @band-store/translation@2.22.1
  - @band-store/index@2.22.1
  - @band-store/pricing@2.22.1
  - @band-store/order@2.22.1
  - @band-store/payment@2.22.1
  - @band-store/search-postgres@2.22.1
  - @band-store/framework@2.22.1
  - @band-store/event-bus-redis@2.22.1
  - @band-store/admin-bundler@2.22.1
  - @band-store/draft-order@2.22.1
  - @band-store/analytics@2.22.1
  - @band-store/api-key@2.22.1
  - @band-store/auth@2.22.1
  - @band-store/cart@2.22.1
  - @band-store/currency@2.22.1
  - @band-store/customer@2.22.1
  - @band-store/file@2.22.1
  - @band-store/fulfillment@2.22.1
  - @band-store/inventory@2.22.1
  - @band-store/link-modules@2.22.1
  - @band-store/notification@2.22.1
  - @band-store/product@2.22.1
  - @band-store/rbac@2.22.1
  - @band-store/region@2.22.1
  - @band-store/sales-channel@2.22.1
  - @band-store/search@2.22.1
  - @band-store/settings@2.22.1
  - @band-store/stock-location@2.22.1
  - @band-store/store@2.22.1
  - @band-store/tax@2.22.1
  - @band-store/user@2.22.1
  - @band-store/workflow-engine-inmemory@2.22.1
  - @band-store/workflow-engine-redis@2.22.1
  - @band-store/cache-inmemory@2.22.1
  - @band-store/cache-redis@2.22.1
  - @band-store/event-bus-local@2.22.1
  - @band-store/analytics-local@2.22.1
  - @band-store/analytics-posthog@2.22.1
  - @band-store/auth-emailpass@2.22.1
  - @band-store/auth-github@2.22.1
  - @band-store/auth-google@2.22.1
  - @band-store/auth-oidc@2.22.1
  - @band-store/caching-redis@2.22.1
  - @band-store/file-local@2.22.1
  - @band-store/file-s3@2.22.1
  - @band-store/fulfillment-manual@2.22.1
  - @band-store/locking-postgres@2.22.1
  - @band-store/notification-local@2.22.1
  - @band-store/notification-sendgrid@2.22.1
  - @band-store/payment-stripe@2.22.1
  - @band-store/telemetry@2.22.1

## 2.22.0

### Minor Changes

- #17089 `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: drop Node.js 20 support and require Node.js v22.22.0 or later

### Patch Changes

- #17035 `9aa921a62139888fed08aee7db1480cff0a3ee40` Thanks [@gautamyash](https://github.com/gautamyash)! - fix(Band Store): report a failed migration script instead of exiting 0

  `db:migrate` forked `db:migrate:scripts` as a child process and discarded its exit code, unlike the `db:migrate:search` call a few lines above which already checks it. A migration script that threw logged the error but the parent process still exited 0, so a CI/CD pipeline or deploy step trusting `db:migrate`'s exit code carried on as if every script had succeeded.

  `db:migrate` now checks the child's exit code the same way it already does for `db:migrate:search`, and returns false (non-zero exit) when a migration script fails.

- #17347 `673d03edafd30beef18286bbef8a737ff332d541` Thanks @band-store-agents! - fix(Band Store,types): add `http.requireActorAssociation` config to refuse logins on actor types an auth identity isn't associated with

- #17314 `06bc7ec543e823c92321d582e1faa7f800985fb9` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): remove undefined `allowed` from admin customers export query config

- #17147 `14499a2e9309d653c0e4ec6aec3f88079751b4d2` Thanks [@dependabot](https://github.com/apps/dependabot)! - chore(admin-bundler, framework, Band Store, deps): dependency updates

- #16964 `780a69aad3ea20beadf82e9c5351a6633de45b64` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(payment,core-flows,Band Store,types,utils): let refunds be retried safely with an idempotency key

- #17313 `906433ac6b1d5ec3cc23f88c8297d29fa87427fd` Thanks @band-store-agents! - fix(Band Store): accept case-insensitive order directions on POST /store/search

- #16678 `44db0ca6357ab4d4681a8004e869fde339c3117a` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(Band Store,framework,utils,modules-sdk,test-utils): add license key checks

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- #16142 `a491ca71f438e1f35a496d63d29141e15bc56c93` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(dashboard, core-flows, js-sdk, types, Band Store): add export customers feature

- #17361 `3755f0f08c02548fb97a7b3f5c3403c2f1919ab6` Thanks @band-store-agents! - fix(Band Store): stop exporting sensitive HTTP headers in spans, and redact URL query param values outside a configurable allowlist

- Updated dependencies [`6fd40674ee9b8956cbdf377a80f49342177bf818`, `0e087453a34fea61d39d1e416a52ef3417220b2e`, `6adae2ca2e3185cec3af9afbefdf58a378dcf1ca`, `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a`, `09814617a5e117dd42b12c5026d79e8536244fcd`, `b3db8ecc2888a84897528636027af8dc446d4ae6`, `14499a2e9309d653c0e4ec6aec3f88079751b4d2`, `735231340d130af0c3565bc7340f1163863c283f`, `dab83ec94a8d60446e15eb982617b7c1cc7589a2`, `65260a9d80d666916ad1e4b59d346123e1fa7991`, `597cf9af9ac6ddcf233fc0605d37e8925dc4b7ce`, `fdac7de4c3268ccf0f86c47c140662d84c141832`, `780a69aad3ea20beadf82e9c5351a6633de45b64`, `b561a37343f4132d0f3a243e7722260797c3cf85`, `44db0ca6357ab4d4681a8004e869fde339c3117a`, `1db74006ede40300afe64970024688a1a9c2a936`, `a491ca71f438e1f35a496d63d29141e15bc56c93`]:
  - @band-store/payment-stripe@2.22.0
  - @band-store/core-flows@2.22.0
  - @band-store/draft-order@2.22.0
  - @band-store/admin-bundler@2.22.0
  - @band-store/analytics-local@2.22.0
  - @band-store/analytics-posthog@2.22.0
  - @band-store/analytics@2.22.0
  - @band-store/api-key@2.22.0
  - @band-store/auth-emailpass@2.22.0
  - @band-store/auth-github@2.22.0
  - @band-store/auth-google@2.22.0
  - @band-store/auth-oidc@2.22.0
  - @band-store/auth@2.22.0
  - @band-store/cache-inmemory@2.22.0
  - @band-store/cache-redis@2.22.0
  - @band-store/caching-redis@2.22.0
  - @band-store/cart@2.22.0
  - @band-store/currency@2.22.0
  - @band-store/customer@2.22.0
  - @band-store/event-bus-local@2.22.0
  - @band-store/event-bus-redis@2.22.0
  - @band-store/file-local@2.22.0
  - @band-store/file-s3@2.22.0
  - @band-store/file@2.22.0
  - @band-store/framework@2.22.0
  - @band-store/fulfillment-manual@2.22.0
  - @band-store/fulfillment@2.22.0
  - @band-store/index@2.22.0
  - @band-store/inventory@2.22.0
  - @band-store/link-modules@2.22.0
  - @band-store/locking-postgres@2.22.0
  - @band-store/locking-redis@2.22.0
  - @band-store/notification-local@2.22.0
  - @band-store/notification-sendgrid@2.22.0
  - @band-store/notification@2.22.0
  - @band-store/order@2.22.0
  - @band-store/payment@2.22.0
  - @band-store/pricing@2.22.0
  - @band-store/product@2.22.0
  - @band-store/promotion@2.22.0
  - @band-store/rbac@2.22.0
  - @band-store/region@2.22.0
  - @band-store/sales-channel@2.22.0
  - @band-store/search-postgres@2.22.0
  - @band-store/search@2.22.0
  - @band-store/settings@2.22.0
  - @band-store/stock-location@2.22.0
  - @band-store/store@2.22.0
  - @band-store/tax@2.22.0
  - @band-store/translation@2.22.0
  - @band-store/user@2.22.0
  - @band-store/workflow-engine-inmemory@2.22.0
  - @band-store/workflow-engine-redis@2.22.0
  - @band-store/caching@2.22.0
  - @band-store/locking@2.22.0
  - @band-store/telemetry@2.22.0

## 2.21.2

### Patch Changes

- #16959 `2aaf53962055fce8e302a76dd416e4eb6ead5929` Thanks [@Dextheking1](https://github.com/Dextheking1)! - fix(Band Store): allow omitting deprecated options in admin product updates

- #17044 `41d8204e67dc02f600b74b2002f74860ee764fb5` Thanks [@sradevski](https://github.com/sradevski)! - fix(Band Store): limit the `fields` of a `/store/search` query to the fields the index can return. A field the index doesn't hold is rejected instead of being hydrated from the graph

- #16908 `989880a6c51f3659453473b2a5b068e83ce4fc78` Thanks [@Dextheking1](https://github.com/Dextheking1)! - fix(@band-store/utils, @band-store/band-store): correct misspelled parameter name in getSetDifference

- Updated dependencies [`494745b8e6b63024e1b7741fe95caa4d03b464b0`, `3718c46fa637e6556461fd50703425ee2cd33bfd`, `847de248bcd0d70c558364591df44ac645c90245`, `5f12d59a33c718aef7fc68150e8950f88087f80e`, `aff9d3e847f254bfa36c55c9daa4d6261a4b8e23`, `08f73ec78e17a3a5b6db112290e28f8b3ed79ef6`, `7054b05d1fa2bebfd168766737bdebc9ef1a15a3`]:
  - @band-store/search@2.21.2
  - @band-store/promotion@2.21.2
  - @band-store/draft-order@2.21.2
  - @band-store/payment@2.21.2
  - @band-store/workflow-engine-redis@2.21.2
  - @band-store/framework@2.21.2
  - @band-store/event-bus-redis@2.21.2
  - @band-store/admin-bundler@2.21.2
  - @band-store/core-flows@2.21.2
  - @band-store/analytics@2.21.2
  - @band-store/api-key@2.21.2
  - @band-store/auth@2.21.2
  - @band-store/cache-inmemory@2.21.2
  - @band-store/cache-redis@2.21.2
  - @band-store/caching@2.21.2
  - @band-store/cart@2.21.2
  - @band-store/currency@2.21.2
  - @band-store/customer@2.21.2
  - @band-store/event-bus-local@2.21.2
  - @band-store/file@2.21.2
  - @band-store/fulfillment@2.21.2
  - @band-store/index@2.21.2
  - @band-store/inventory@2.21.2
  - @band-store/link-modules@2.21.2
  - @band-store/locking@2.21.2
  - @band-store/notification@2.21.2
  - @band-store/order@2.21.2
  - @band-store/pricing@2.21.2
  - @band-store/product@2.21.2
  - @band-store/analytics-local@2.21.2
  - @band-store/analytics-posthog@2.21.2
  - @band-store/auth-emailpass@2.21.2
  - @band-store/auth-github@2.21.2
  - @band-store/auth-google@2.21.2
  - @band-store/auth-oidc@2.21.2
  - @band-store/caching-redis@2.21.2
  - @band-store/file-local@2.21.2
  - @band-store/file-s3@2.21.2
  - @band-store/fulfillment-manual@2.21.2
  - @band-store/locking-postgres@2.21.2
  - @band-store/locking-redis@2.21.2
  - @band-store/notification-local@2.21.2
  - @band-store/notification-sendgrid@2.21.2
  - @band-store/payment-stripe@2.21.2
  - @band-store/search-postgres@2.21.2
  - @band-store/rbac@2.21.2
  - @band-store/region@2.21.2
  - @band-store/sales-channel@2.21.2
  - @band-store/settings@2.21.2
  - @band-store/stock-location@2.21.2
  - @band-store/store@2.21.2
  - @band-store/tax@2.21.2
  - @band-store/translation@2.21.2
  - @band-store/user@2.21.2
  - @band-store/workflow-engine-inmemory@2.21.2
  - @band-store/telemetry@2.21.2

## 2.21.1

### Patch Changes

- #16816 `1c1607cced6c1e552e9e800cf571a2235098d0fd` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store, utils): apply default http.authMethodsPerActor and gate `/auth/:auth_provider/user` by config

- #16648 `bb4c7cbafe45212f3df408a2a09d73253c3d0b40` Thanks [@itzzdev09](https://github.com/itzzdev09)! - fix(Band Store): pass failOnError: false to runLintStep in build

- #16858 `c000d377f1a90d14bcda41500b1ed5bc2734902e` Thanks [@sradevski](https://github.com/sradevski)! - feat(Band Store,types,framework): add a generic, InstantSearch-compatible store search endpoint

  `POST /store/search` takes the `SearchQuery` batch `@band-store/instantsearch-adapter`
  sends, runs each query against the index it names, and answers with the search
  engine's own results — hits, scores, highlights and facets. It replaces
  `/store/products/search`, whose `GET` shape neither InstantSearch nor the adapter
  could talk to.

  Nothing is searchable until a store opts an index in with the new
  `configureStoreSearch` middleware, which is also where it narrows what a query
  may reach within an allowed index. A product index is narrowed to published
  products in the publishable key's sales channels automatically, wherever it
  declares those fields, as every other store product read is.

- #16868 `7a0cb956645aef3ed13a20c18fc3faf8961ca535` Thanks [@sradevski](https://github.com/sradevski)! - feat(Band Store,search,types): drop search indexes no definition declares any more

  `db:migrate` now plans a `drop` for every search index left without a definition,
  the way it already plans deletions for removed links. It asks which ones to drop
  before touching them; `--execute-all-search` drops them all without prompting and
  `--execute-safe-search` leaves them alone, mirroring the link flags. Unattended
  runs with neither flag skip the drops rather than hang on a prompt.

- #16894 `854a42c10f14735785fccf74b2f0b53b3b46204f` Thanks [@sradevski](https://github.com/sradevski)! - feat(Band Store,search,core-flows,types,js-sdk,dashboard): delete a search index and everything built for it

  `DELETE /admin/search-indexes/:id` drops every physical index ever built for an
  index, along with its versions and sync history, so the next migration recreates
  it from scratch at version 1. Useful when an index' physical state has drifted
  past what a reindex can repair.

  Available as `searchModuleService.deleteIndex`, `deleteSearchIndexWorkflow`,
  `sdk.admin.search.deleteIndex`, and a confirmed action in the admin dashboard.

- Updated dependencies [`d3d5c7729a324732725b27f443693901c8e2b72c`, `f8dce55556a1e68d6ea9b2fb88852b2a76fbd73c`, `ad0e98df856f71872c2f1e7c3b5983cfa37d4d51`, `414f04ae69012858a6c935972a93d0fdd9a25b33`, `b18e369e76ece5a9079289a934425673100b9e58`, `1caeb1ab62de9b51c1f385e0e051bb8a10c66aee`, `2b34b80cb9e88cc5a71dfe04cc09bf38872b88c8`, `c000d377f1a90d14bcda41500b1ed5bc2734902e`, `03dcfb5ff450478585a57b88743ce8f9efb5ea23`, `7ff721850c22a886af25f251685f6bca59434664`, `6498af41624810de111da30a8c9c90d1a7ef820e`, `989e83d74d19bdbe4cde290c23aea5a0693ad9e8`, `e607b4f7f9fc5388e545ce00e5a2765f7a3a1fee`, `8c224dc79070dd173a783aea0c6c76785f7ab71c`, `7a0cb956645aef3ed13a20c18fc3faf8961ca535`, `854a42c10f14735785fccf74b2f0b53b3b46204f`]:
  - @band-store/admin-bundler@2.21.1
  - @band-store/core-flows@2.21.1
  - @band-store/search@2.21.1
  - @band-store/search-postgres@2.21.1
  - @band-store/caching@2.21.1
  - @band-store/framework@2.21.1
  - @band-store/link-modules@2.21.1
  - @band-store/order@2.21.1
  - @band-store/auth-emailpass@2.21.1
  - @band-store/payment-stripe@2.21.1
  - @band-store/event-bus-redis@2.21.1
  - @band-store/draft-order@2.21.1
  - @band-store/analytics@2.21.1
  - @band-store/api-key@2.21.1
  - @band-store/auth@2.21.1
  - @band-store/cache-inmemory@2.21.1
  - @band-store/cache-redis@2.21.1
  - @band-store/cart@2.21.1
  - @band-store/currency@2.21.1
  - @band-store/customer@2.21.1
  - @band-store/event-bus-local@2.21.1
  - @band-store/file@2.21.1
  - @band-store/fulfillment@2.21.1
  - @band-store/index@2.21.1
  - @band-store/inventory@2.21.1
  - @band-store/locking@2.21.1
  - @band-store/notification@2.21.1
  - @band-store/payment@2.21.1
  - @band-store/pricing@2.21.1
  - @band-store/product@2.21.1
  - @band-store/promotion@2.21.1
  - @band-store/analytics-local@2.21.1
  - @band-store/analytics-posthog@2.21.1
  - @band-store/auth-github@2.21.1
  - @band-store/auth-google@2.21.1
  - @band-store/auth-oidc@2.21.1
  - @band-store/caching-redis@2.21.1
  - @band-store/file-local@2.21.1
  - @band-store/file-s3@2.21.1
  - @band-store/fulfillment-manual@2.21.1
  - @band-store/locking-postgres@2.21.1
  - @band-store/locking-redis@2.21.1
  - @band-store/notification-local@2.21.1
  - @band-store/notification-sendgrid@2.21.1
  - @band-store/rbac@2.21.1
  - @band-store/region@2.21.1
  - @band-store/sales-channel@2.21.1
  - @band-store/settings@2.21.1
  - @band-store/stock-location@2.21.1
  - @band-store/store@2.21.1
  - @band-store/tax@2.21.1
  - @band-store/translation@2.21.1
  - @band-store/user@2.21.1
  - @band-store/workflow-engine-inmemory@2.21.1
  - @band-store/workflow-engine-redis@2.21.1
  - @band-store/telemetry@2.21.1

## 2.21.0

### Minor Changes

- #16702 `df8c278d615229436be5b299ebdc76a576695fc3` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(framework, Band Store, loyalty-plugin): set a strict allowed list for store API routes

### Patch Changes

- #16587 `c511dbb072270b01cddc52a0b77040701ffe34ff` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(dashboard,Band Store): name admin search entities after their graph entity

- #16762 `cbd48e2e0169ef9c016fb25703ae08d70827ff34` Thanks [@sradevski](https://github.com/sradevski)! - Add search helpers for better DX

- #16719 `0ef6fa815681dfd1771ece1edc921ffbfbc2ef4b` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(dashboard, types, Band Store): add support for metadata management for promotions

- #16787 `c07aa54827922badb6348ed942f73d8d7ebc1d62` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(Band Store): revert using cross-modules back to index module

- #16674 `ebc8aeea3880dd2531c2536b7e2c762ff7ca2c17` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(product, utils, Band Store): return published products only for tags, collections, categories, and type store routes

- #16716 `e9d1f84dbfacd35d7787d1af03215a6ae5a176d8` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(framework,Band Store): allow overriding a route's disallowed query fields from a global middleware

- Updated dependencies [`cbd48e2e0169ef9c016fb25703ae08d70827ff34`, `ce19ae663c3edaa6b58bd596a406bcde24d5956f`, `2097e7b43f3d4525b1a909dbe4cb6fb634765893`, `0f08725d4c0dc0b65d48e3240e72237027cbd34a`, `a85c552b236772253d075279ab4dacbf9cc9041d`, `14e630faa1c31d37626068004e3f00acad1fd51d`, `8f2f438b29d0037f826cf0e6328f2f451d55ccd9`, `ebc8aeea3880dd2531c2536b7e2c762ff7ca2c17`, `e9d1f84dbfacd35d7787d1af03215a6ae5a176d8`, `9508d6ebaa7bd6222b37a25c0f62eb6264411600`, `a4c0a845e8b3a7a5acfaacbb0c093cd539ac713b`, `c8701e77534f7b615c8b86814f8d5789c0104382`, `df8c278d615229436be5b299ebdc76a576695fc3`]:
  - @band-store/search@2.21.0
  - @band-store/promotion@2.21.0
  - @band-store/core-flows@2.21.0
  - @band-store/event-bus-redis@2.21.0
  - @band-store/fulfillment@2.21.0
  - @band-store/notification@2.21.0
  - @band-store/product@2.21.0
  - @band-store/framework@2.21.0
  - @band-store/payment@2.21.0
  - @band-store/admin-bundler@2.21.0
  - @band-store/draft-order@2.21.0
  - @band-store/analytics@2.21.0
  - @band-store/api-key@2.21.0
  - @band-store/auth@2.21.0
  - @band-store/cache-inmemory@2.21.0
  - @band-store/cache-redis@2.21.0
  - @band-store/caching@2.21.0
  - @band-store/cart@2.21.0
  - @band-store/currency@2.21.0
  - @band-store/customer@2.21.0
  - @band-store/event-bus-local@2.21.0
  - @band-store/file@2.21.0
  - @band-store/index@2.21.0
  - @band-store/inventory@2.21.0
  - @band-store/link-modules@2.21.0
  - @band-store/locking@2.21.0
  - @band-store/order@2.21.0
  - @band-store/pricing@2.21.0
  - @band-store/analytics-local@2.21.0
  - @band-store/analytics-posthog@2.21.0
  - @band-store/auth-emailpass@2.21.0
  - @band-store/auth-github@2.21.0
  - @band-store/auth-google@2.21.0
  - @band-store/auth-oidc@2.21.0
  - @band-store/caching-redis@2.21.0
  - @band-store/file-local@2.21.0
  - @band-store/file-s3@2.21.0
  - @band-store/fulfillment-manual@2.21.0
  - @band-store/locking-postgres@2.21.0
  - @band-store/locking-redis@2.21.0
  - @band-store/notification-local@2.21.0
  - @band-store/notification-sendgrid@2.21.0
  - @band-store/payment-stripe@2.21.0
  - @band-store/search-postgres@2.21.0
  - @band-store/rbac@2.21.0
  - @band-store/region@2.21.0
  - @band-store/sales-channel@2.21.0
  - @band-store/settings@2.21.0
  - @band-store/stock-location@2.21.0
  - @band-store/store@2.21.0
  - @band-store/tax@2.21.0
  - @band-store/translation@2.21.0
  - @band-store/user@2.21.0
  - @band-store/workflow-engine-inmemory@2.21.0
  - @band-store/workflow-engine-redis@2.21.0
  - @band-store/telemetry@2.21.0

## 2.20.1

### Patch Changes

- Updated dependencies [`75c26e85f3bebc0c921064e9aa37987a76cc24ae`, `f373c17dd60cb1e7df1d0c70db31d516d2a0cb4f`, `f373c17dd60cb1e7df1d0c70db31d516d2a0cb4f`]:
  - @band-store/search-postgres@2.20.1
  - @band-store/search@2.20.1
  - @band-store/core-flows@2.20.1
  - @band-store/framework@2.20.1
  - @band-store/admin-bundler@2.20.1
  - @band-store/event-bus-redis@2.20.1
  - @band-store/draft-order@2.20.1
  - @band-store/analytics@2.20.1
  - @band-store/api-key@2.20.1
  - @band-store/auth@2.20.1
  - @band-store/cache-inmemory@2.20.1
  - @band-store/cache-redis@2.20.1
  - @band-store/caching@2.20.1
  - @band-store/cart@2.20.1
  - @band-store/currency@2.20.1
  - @band-store/customer@2.20.1
  - @band-store/event-bus-local@2.20.1
  - @band-store/file@2.20.1
  - @band-store/fulfillment@2.20.1
  - @band-store/index@2.20.1
  - @band-store/inventory@2.20.1
  - @band-store/link-modules@2.20.1
  - @band-store/locking@2.20.1
  - @band-store/notification@2.20.1
  - @band-store/order@2.20.1
  - @band-store/payment@2.20.1
  - @band-store/pricing@2.20.1
  - @band-store/product@2.20.1
  - @band-store/promotion@2.20.1
  - @band-store/analytics-local@2.20.1
  - @band-store/analytics-posthog@2.20.1
  - @band-store/auth-emailpass@2.20.1
  - @band-store/auth-github@2.20.1
  - @band-store/auth-google@2.20.1
  - @band-store/auth-oidc@2.20.1
  - @band-store/caching-redis@2.20.1
  - @band-store/file-local@2.20.1
  - @band-store/file-s3@2.20.1
  - @band-store/fulfillment-manual@2.20.1
  - @band-store/locking-postgres@2.20.1
  - @band-store/locking-redis@2.20.1
  - @band-store/notification-local@2.20.1
  - @band-store/notification-sendgrid@2.20.1
  - @band-store/payment-stripe@2.20.1
  - @band-store/rbac@2.20.1
  - @band-store/region@2.20.1
  - @band-store/sales-channel@2.20.1
  - @band-store/settings@2.20.1
  - @band-store/stock-location@2.20.1
  - @band-store/store@2.20.1
  - @band-store/tax@2.20.1
  - @band-store/translation@2.20.1
  - @band-store/user@2.20.1
  - @band-store/workflow-engine-inmemory@2.20.1
  - @band-store/workflow-engine-redis@2.20.1
  - @band-store/telemetry@2.20.1

## 2.20.0

### Minor Changes

- #16688 `6a2fce501f3bcd459c21a67f586c7a15b905ff0f` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(framework, types, Band Store): set relations limit for store routes for optimal performance

### Patch Changes

- #16545 `4857d15bdcaf5a0648e7adc5b0b40312e23b5c02` Thanks [@sradevski](https://github.com/sradevski)! - Match admin search prefixes on the last query term so "dtc sta" still finds "Dtc starter".

- #16444 `884e8a810d75be52a255d58bfcf01581e738d7d8` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): automatically select required variant fields when inventory quantity is required, and handle null variants

- #16545 `4857d15bdcaf5a0648e7adc5b0b40312e23b5c02` Thanks [@sradevski](https://github.com/sradevski)! - Remove the in-memory local search provider. Indexes are created only by `db:migrate`, never at application start.

- #16361 `51c48dcb472c3b232b88337030945b2b651e90f8` Thanks [@sradevski](https://github.com/sradevski)! - Add a postgres search provider

- #16453 `785fd2b8a978201638a4d8d5ae9eea483958c0fb` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(framework,Band Store): log jwt verification failure

- #16457 `693310310610cf439fabb73230187028f2755696` Thanks [@sradevski](https://github.com/sradevski)! - Implement Band Store Cloud as a built-in search provider

- #16610 `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(framework,Band Store,auth,types): require a completed MFA challenge on MFA routes

- #16582 `578a5416ad7d789966d68f1525bc9d55d3a53020` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): set created_by on fulfillment/shipment creation

- #16541 `c1e5a8f63988698df7f92b8f1e75f63ab8fdee64` Thanks [@sradevski](https://github.com/sradevski)! - Drop the previous search provider's indexes when `db:migrate` switches engines.

  Log seed/reindex progress (count, rate, last key) so large catalogs can be followed.

- #16461 `f3b3bd838ed53b6b2e1adead27d6b1006ea6e6e4` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(inventory,link-modules,Band Store,types,core-flows): support fractional inventory quantities and unit of measure

- #16480 `7479b07071e51f4fc6a7ddafe2c778e85c6eb61d` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): block field expansion pivots on the store order routes

- #16415 `c5d55adb2375d19b8ae3be750e9aca52cf22e964` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,js-sdk,types): request and copy reset password link from dashboard

- #16561 `5e06e544a296b9033f20f71f11c559f81a0e5739` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(framework,Band Store): prevent setting 4xx request span status to Error

- #16643 `e01b039f256cb8224dd70a99662a49d0e8cf65d1` Thanks [@sradevski](https://github.com/sradevski)! - Add multiple query support in query.search, move searchMany to provider

- Updated dependencies [`4857d15bdcaf5a0648e7adc5b0b40312e23b5c02`, `2101adb7eac34bdb90fa9606e875995105cf7f7c`, `a1a784b66ac872b1a863ae23180630ebf2bf839a`, `faa9c0c160cf69d90ca495aac6ad2c1341c62b1c`, `c4a823a19e4787bb69f2c3238a3cb5cb0918d7cc`, `4857d15bdcaf5a0648e7adc5b0b40312e23b5c02`, `51c48dcb472c3b232b88337030945b2b651e90f8`, `13a43089f38c12364e14a0cfdb1561ad0c8f29dd`, `4528357cfe3c3bcf76a20b2ac2fe3637fb649a9d`, `c26c1551ac8700061267ac6b8e0ac380e5404d3c`, `a6fff7ec920f3fa15b2f35429e186ebd76d0f1d4`, `847612908fdd1c11a4df09ccc2e8ab44d338bb04`, `4e5a02bdcb47a410ac427a23f3d2a50440ab5379`, `c660642e0dcba2a581086b5176ab8fbc06127ed8`, `90841150c76acbd31d8e94bd2edd585ccdff1db7`, `fcee02e4215ba3d7d2f97d24adeb3bed583f43ee`, `785fd2b8a978201638a4d8d5ae9eea483958c0fb`, `693310310610cf439fabb73230187028f2755696`, `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9`, `8334cf11071e925c1ea0877f80a18cd86b32cade`, `a1a0a969099ac59ce22e4ba3ea64347cba102dc4`, `3dbc8c91e9618277d178f4339d2f602d3563beb5`, `b2eaae16e512c0a82390dad6d072330852b2e3c4`, `4dd4d90f814fb499239b8718a69f7f0dc04ae86a`, `001923667da67b4969d4bdcdd72fe23eadb1cd7f`, `c1e5a8f63988698df7f92b8f1e75f63ab8fdee64`, `f7317903600e5b64f06c21c29a73e0e569d2fe3a`, `f3b3bd838ed53b6b2e1adead27d6b1006ea6e6e4`, `2a5dd813a7e1d5094cb81f688e2e9e7cc8fd3543`, `184f222fb32b913778ce75fdd61164ca038ec03d`, `6a2fce501f3bcd459c21a67f586c7a15b905ff0f`, `5e06e544a296b9033f20f71f11c559f81a0e5739`, `6b2d37e9f132973789b241cd065497e4f7d95fe4`, `e01b039f256cb8224dd70a99662a49d0e8cf65d1`, `2aa3e3d57b8c10acddf9a5516032758b9a2ccaa9`]:
  - @band-store/search-postgres@2.20.0
  - @band-store/search@2.20.0
  - @band-store/admin-bundler@2.20.0
  - @band-store/draft-order@2.20.0
  - @band-store/core-flows@2.20.0
  - @band-store/caching@2.20.0
  - @band-store/caching-redis@2.20.0
  - @band-store/settings@2.20.0
  - @band-store/framework@2.20.0
  - @band-store/auth@2.20.0
  - @band-store/order@2.20.0
  - @band-store/product@2.20.0
  - @band-store/file-s3@2.20.0
  - @band-store/workflow-engine-redis@2.20.0
  - @band-store/link-modules@2.20.0
  - @band-store/inventory@2.20.0
  - @band-store/event-bus-redis@2.20.0
  - @band-store/analytics@2.20.0
  - @band-store/api-key@2.20.0
  - @band-store/cart@2.20.0
  - @band-store/currency@2.20.0
  - @band-store/customer@2.20.0
  - @band-store/file@2.20.0
  - @band-store/fulfillment@2.20.0
  - @band-store/index@2.20.0
  - @band-store/locking@2.20.0
  - @band-store/notification@2.20.0
  - @band-store/payment@2.20.0
  - @band-store/pricing@2.20.0
  - @band-store/promotion@2.20.0
  - @band-store/rbac@2.20.0
  - @band-store/region@2.20.0
  - @band-store/sales-channel@2.20.0
  - @band-store/stock-location@2.20.0
  - @band-store/store@2.20.0
  - @band-store/tax@2.20.0
  - @band-store/translation@2.20.0
  - @band-store/user@2.20.0
  - @band-store/workflow-engine-inmemory@2.20.0
  - @band-store/cache-inmemory@2.20.0
  - @band-store/cache-redis@2.20.0
  - @band-store/event-bus-local@2.20.0
  - @band-store/analytics-local@2.20.0
  - @band-store/analytics-posthog@2.20.0
  - @band-store/auth-emailpass@2.20.0
  - @band-store/auth-github@2.20.0
  - @band-store/auth-google@2.20.0
  - @band-store/auth-oidc@2.20.0
  - @band-store/file-local@2.20.0
  - @band-store/fulfillment-manual@2.20.0
  - @band-store/locking-postgres@2.20.0
  - @band-store/locking-redis@2.20.0
  - @band-store/notification-local@2.20.0
  - @band-store/notification-sendgrid@2.20.0
  - @band-store/payment-stripe@2.20.0
  - @band-store/telemetry@2.20.0

## 2.19.0

### Minor Changes

- #16314 `5105fec20908cf7bcd7f5f859674acdd8a38b982` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(Band Store): require node 20.19 or newer

  **Breaking:** the minimum Node version is now **20.19.0** (or 22.12.0+), raised from 20.0.0 to match Vite 7's requirement. Node 20.0–20.18 and 22.0–22.11 are no longer supported for `bandStore develop`, `bandStore build` or `bandStore plugin:build`.

### Patch Changes

- #16133 `0e1ccf49654caefa8305fe91a4c9abd573ca1143` Thanks [@GBreg19](https://github.com/GBreg19)! - fix(Band Store): allow admin draft orders without an email or customer_id

  `POST /admin/draft-orders` previously rejected requests missing both `email` and `customer_id`, even though `createOrderWorkflow` and the order data model already support neither being set. This blocked use cases with no captured customer identity (e.g. POS/walk-in orders). The admin validator no longer requires either field.

  Also fixes a related bug the relaxed validator exposed: the route's customer-lookup fallback queried `customer` with `filters: { id: undefined }` when `customer_id` was omitted, which matched an arbitrary customer instead of none, leaking an unrelated customer's email onto the draft order. The lookup now only runs when `customer_id` is actually provided.

- #16308 `be4ccf3f6a5ae40eff1ed55743d3518bdefeb07d` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(test-utils, modules-sdk, utils, Band Store): fix plugin:add for monorepo projects

- #16315 `c13aaa96b3968b7f021131529f630b1de7bd6970` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(product, types, utils, Band Store): optimize migration script for product options

- #16223 `e2b2a5c5c2c51dfc0973b024d4cbb5c6c2f49158` Thanks [@srindom](https://github.com/srindom)! - feat(core-flows,Band Store,dashboard,js-sdk,types): add inventory item export with per-location levels

- #16323 `5641bab6ea2d6f0eb7cb9188486656d555ce4d60` Thanks [@lazerg](https://github.com/lazerg)! - fix(Band Store): document the invite accept token as a query parameter

  `POST /admin/invites/accept` passed its query params type as the request body type, so the API reference listed `token` as a body field. The route reads `token` from the query string and its body validator is strict, so anyone following the reference got `Unrecognized fields: 'token'` with the token in the body and `Field 'token' is required` without it. The route now types the body and the query params separately.

- #16238 `18e02fb06f5c925c0b3ebc1943407bf58f83e7b7` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,dashboard,js-sdk, Band Store,types,utils): support notification preferences for order edits

- #16298 `5f4d93c374b0ad0b0a31e75de98c7557e0415677` Thanks [@sradevski](https://github.com/sradevski)! - Add the Search Module: provider-backed search with an in-memory (Orama) provider, the `query.search` primitive, index definition discovery from `search/`, index migrations through `db:migrate`, event-driven ingestion, and an `/admin/search` endpoint

- #16023 `3ff26b6f7f036392ad1a97e67daea6b83c3fee23` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(auth-oidc,dashboard,auth,js-sdk,types,Band Store): generic OIDC auth provider

- #16188 `5c54d68fd0f4020291deb3746eb21dccf498ca45` Thanks [@irontaek](https://github.com/irontaek)! - perf(Band Store): avoid O(n²) matching in the translations batch endpoint by using Sets for created/updated id lookups

- #16139 `9fa4bd9eb941a266c560b35683e8230af33a3352` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(fulfillment, core-flows, types, utils, Band Store): support custom delivery address + pass additional data to createFulfillment

- Updated dependencies [`a42ee0825b07409cab68cd351516c35b74238150`, `a4791af3b2e566684b18e7ea07b086c579ec874f`, `5cc7fdef1893d8c4afac8de8e3cfa32d451e69a5`, `f2c9d7d3c11507f92142b440a1d90ad74c2a03de`, `e037c71ff11add91583124a600840ce793421fe7`, `7a5ef2d1f79b2e278625b686dba0b9cfe53a9cc9`, `aeea1f46bf4947ca36577e950b4c79a1faba8ba1`, `c13aaa96b3968b7f021131529f630b1de7bd6970`, `43cdf13c724dc99c08d6f625cfccc3dd28d2bc0c`, `01f31bc58b1ff729a7326bdf54c65f92e35b0725`, `11d58f75f22691e63ef4258f8c40d63a3d12332b`, `e2b2a5c5c2c51dfc0973b024d4cbb5c6c2f49158`, `c6188c23f2efda5dafcb8bea83f71dc02d375f19`, `372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30`, `18e02fb06f5c925c0b3ebc1943407bf58f83e7b7`, `941fd67d59b6f506efc18e255b051c4d3ab14f64`, `65040fc503f75428f6f582969e1e7abe27c00987`, `5f4d93c374b0ad0b0a31e75de98c7557e0415677`, `4f2b8a2b435870a379b029d5e6348a3c06cc4093`, `3ff26b6f7f036392ad1a97e67daea6b83c3fee23`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`, `9fa4bd9eb941a266c560b35683e8230af33a3352`]:
  - @band-store/core-flows@2.19.0
  - @band-store/order@2.19.0
  - @band-store/product@2.19.0
  - @band-store/draft-order@2.19.0
  - @band-store/cart@2.19.0
  - @band-store/file-s3@2.19.0
  - @band-store/caching@2.19.0
  - @band-store/framework@2.19.0
  - @band-store/pricing@2.19.0
  - @band-store/index@2.19.0
  - @band-store/search-local@2.19.0
  - @band-store/search@2.19.0
  - @band-store/auth-oidc@2.19.0
  - @band-store/auth@2.19.0
  - @band-store/admin-bundler@2.19.0
  - @band-store/fulfillment@2.19.0
  - @band-store/event-bus-redis@2.19.0
  - @band-store/analytics@2.19.0
  - @band-store/api-key@2.19.0
  - @band-store/currency@2.19.0
  - @band-store/customer@2.19.0
  - @band-store/file@2.19.0
  - @band-store/inventory@2.19.0
  - @band-store/link-modules@2.19.0
  - @band-store/locking@2.19.0
  - @band-store/notification@2.19.0
  - @band-store/payment@2.19.0
  - @band-store/promotion@2.19.0
  - @band-store/rbac@2.19.0
  - @band-store/region@2.19.0
  - @band-store/sales-channel@2.19.0
  - @band-store/settings@2.19.0
  - @band-store/stock-location@2.19.0
  - @band-store/store@2.19.0
  - @band-store/tax@2.19.0
  - @band-store/translation@2.19.0
  - @band-store/user@2.19.0
  - @band-store/workflow-engine-inmemory@2.19.0
  - @band-store/workflow-engine-redis@2.19.0
  - @band-store/cache-inmemory@2.19.0
  - @band-store/cache-redis@2.19.0
  - @band-store/event-bus-local@2.19.0
  - @band-store/analytics-local@2.19.0
  - @band-store/analytics-posthog@2.19.0
  - @band-store/auth-emailpass@2.19.0
  - @band-store/auth-github@2.19.0
  - @band-store/auth-google@2.19.0
  - @band-store/caching-redis@2.19.0
  - @band-store/file-local@2.19.0
  - @band-store/fulfillment-manual@2.19.0
  - @band-store/locking-postgres@2.19.0
  - @band-store/locking-redis@2.19.0
  - @band-store/notification-local@2.19.0
  - @band-store/notification-sendgrid@2.19.0
  - @band-store/payment-stripe@2.19.0
  - @band-store/telemetry@2.19.0

## 2.18.0

### Patch Changes

- #15834 `04daac9a7639435a89446578b9012ad0a673ac6b` Thanks [@leobenzol](https://github.com/leobenzol)! - fix(Band Store,utils): defineConfig typed modules

- #15840 `dfdcdd7467ede40e1bb80ce866bfe2c256b8ff86` Thanks [@nam-stx](https://github.com/nam-stx)! - feat(core-flows,order,cart,types,Band Store): Add data and metadata fields to tax line models

- #16125 `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(framework, types, Band Store): add disallowed query config to restrict retrieved fields

- #15302 `3af18a52c12a2db2933bdb376ed4308ccb0b6519` Thanks [@Ultron03](https://github.com/Ultron03)! - fix(Band Store, cli): db commands now exit with code 1 when container initialization fails
  chore(loyalty,draft-order): update build process to handle plugin build without cyclic deps issue

- #16083 `d6b2a87da1dbfd065336c80e41cb7c086dc2a340` Thanks [@dependabot](https://github.com/apps/dependabot)! - chore(create-band-store-app, admin-bundler, dashboard, core-flows, framework, js-sdk, Band Store): dependabot dependencies update

- #15926 `c2fc62507a54f0ab73367d4369c783bbbdccf022` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,Band Store,types,js-sdk,dashboard): transfer order to guest customer

- #16036 `142ad068e7d892a24a6e2cf8c20e143409d27bde` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(payment, Band Store): reject refunds and captures of negative or 0 amount

- #15614 `3382c8189bfc9f44e86123496ef3665e92ac91c9` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,types,utils,Band Store): support global product options in imports

- #16083 `d6b2a87da1dbfd065336c80e41cb7c086dc2a340` Thanks [@dependabot](https://github.com/apps/dependabot)! - chore(deps,Band Store): update OpenTelemetry SDK to 2.9.0. `OTEL_RESOURCE_ATTRIBUTES` is now parsed strictly per the W3C Baggage spec. A single malformed entry silently discards the entire variable, values containing whitespace must be percent-encoded (` ` -> `%20`), and double quotes are treated as literal characters rather than value wrappers. If you set this env var, audit it so resource attributes like `service.name` still apply.

- #15819 `04b19ba7b861447c5f2a944a47f5533ee64e0acf` Thanks [@shafi-VM](https://github.com/shafi-VM)! - fix(Band Store): return 400 instead of 500 for an invalid promotion rule attribute with a value filter

  `GET /admin/promotions/rule-value-options/:rule_type/:rule_attribute_id` dereferenced the rule's query configuration before validating the attribute, so an invalid `rule_attribute_id` combined with a `value` query param threw a `TypeError` (500) instead of the proper "Invalid rule attribute" 400. The attribute is now validated before its query configuration is used.

- #16035 `dd5b3ee61ed5e4a8965c39eb34e2141908c664ce` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows,Band Store): refresh cart tax lines on any tax-relevant shipping address change

- #16055 `e329681099bb3d602a8c1f8ec3c0472e1716f45f` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): use email compatible validation with zod

- #15923 `d5c6d183e187a24d5cf6d39bca8d79d72a4f1f71` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,types): filter notifications in admin dashboard for logged in user

- #15930 `ffe9f4c4a98f6ee6a0b26d695f0ffc612cc70e89` Thanks [@rodriguescarson](https://github.com/rodriguescarson)! - fix(Band Store): skip payment webhook events with an intermediate `pending` action (e.g. Stripe `payment_intent.created`/`processing`) in the payment webhook subscriber, so they no longer trigger premature cart completion

- Updated dependencies [`344c3e386293f003edfc96e4fbf13f0f3250a326`, `1621e14330fe64a968510991408ace8fdac84ce9`, `1359d1bf6237aa058910b805395932cd070d2043`, `e61285a935b0cae42603f8bb9e10569fd0a51169`, `dfdcdd7467ede40e1bb80ce866bfe2c256b8ff86`, `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09`, [`de9b40ce77aff031093e7e46db5e173660f20972`](undefined), [`72db6e821fa97aa4bec512e94a77f1245a5d2f3b`](undefined), [`f0e86a06ada4e43cf61383a65603dab7ef5e8039`](undefined), [`83ec164e5e475880603188bdd29991964a8136d1`](undefined), `d76952b5b0e4b287747a7e08f2cb745510143aae`, `0e7973e2fc3c45da39136cf3f66c90358571ffc5`, `d6b2a87da1dbfd065336c80e41cb7c086dc2a340`, [`d40cdaddb06eb284041aa9e5c27dba235aed9735`](undefined), `c2fc62507a54f0ab73367d4369c783bbbdccf022`, `142ad068e7d892a24a6e2cf8c20e143409d27bde`, `7d7edad6fdf47ae36c06cd5f5b71232c9d51c70b`, [`8078ac6c62994ebc6d279c2612472086c20ce346`](undefined), `7c0f94c207796bc443fd36d3999f1533bba255be`, `3382c8189bfc9f44e86123496ef3665e92ac91c9`, [`09abcfab45f44932450c18de4717a6ab3acc6b0b`](undefined), [`8673b8bc671db80d5b88b15c71084a158e154854`](undefined), `935a14c0098580a2b6ef8af11321e931c8ac80da`, `8f97e3f3710a2bae662415dac7098e1c6e60c3c9`, [`dea11e3d011a0dd1c95b1fc4ab2292fd07ec4857`](undefined), `e78ef6ce51a00e6b303b654c5046cd1e60c8dc68`, [`ce410177897f2de3f35825096df7870ebf5b2f8f`](undefined), `dd5b3ee61ed5e4a8965c39eb34e2141908c664ce`, [`631c2f2311f1931fe4a688d8796a7a81c2191243`](undefined), [`0b678b4c8b3f22d5fa1a63d1cfefd2bb78cdef47`](undefined), [`e3ef3c2bf43c28bcb8f99d73094ddf42274966a5`](undefined), [`917ddbe0e56b4e739fa828140cd7973d823d1bbd`](undefined), `6ef16b6fdc6f04b900583a5f2714a863011ed19a`, `70c122753875f3cca03ff49b8a0ea9fe2c5e1165`, [`b15b8522126f094eeb435a0c479d25837a63c260`](undefined), [`812687d1195645a2ae223553c400c9142c91f74c`](undefined), [`3a51849b0d9aa754975c6d9654508961ce14f998`](undefined), `144c47aba88f6e08fb7c99634c9fec8474721b0a`, `513c01a5a7f587cb52c92677e2379e54bd990361`]:
  - @band-store/admin-bundler@2.18.0
  - @band-store/framework@2.18.0
  - @band-store/file-s3@2.18.0
  - @band-store/settings@2.18.0
  - @band-store/core-flows@2.18.0
  - @band-store/order@2.18.0
  - @band-store/cart@2.18.0
  - @band-store/caching-redis@2.18.0
  - @band-store/file-local@2.18.0
  - @band-store/link-modules@2.18.0
  - @band-store/product@2.18.0
  - @band-store/payment@2.18.0
  - @band-store/rbac@2.18.0
  - @band-store/promotion@2.18.0
  - @band-store/payment-stripe@2.18.0
  - @band-store/pricing@2.18.0
  - @band-store/event-bus-redis@2.18.0
  - @band-store/draft-order@2.18.0
  - @band-store/analytics@2.18.0
  - @band-store/api-key@2.18.0
  - @band-store/auth@2.18.0
  - @band-store/cache-inmemory@2.18.0
  - @band-store/cache-redis@2.18.0
  - @band-store/caching@2.18.0
  - @band-store/currency@2.18.0
  - @band-store/customer@2.18.0
  - @band-store/event-bus-local@2.18.0
  - @band-store/file@2.18.0
  - @band-store/fulfillment@2.18.0
  - @band-store/index@2.18.0
  - @band-store/inventory@2.18.0
  - @band-store/locking@2.18.0
  - @band-store/notification@2.18.0
  - @band-store/analytics-local@2.18.0
  - @band-store/analytics-posthog@2.18.0
  - @band-store/auth-emailpass@2.18.0
  - @band-store/auth-github@2.18.0
  - @band-store/auth-google@2.18.0
  - @band-store/fulfillment-manual@2.18.0
  - @band-store/locking-postgres@2.18.0
  - @band-store/locking-redis@2.18.0
  - @band-store/notification-local@2.18.0
  - @band-store/notification-sendgrid@2.18.0
  - @band-store/region@2.18.0
  - @band-store/sales-channel@2.18.0
  - @band-store/stock-location@2.18.0
  - @band-store/store@2.18.0
  - @band-store/tax@2.18.0
  - @band-store/translation@2.18.0
  - @band-store/user@2.18.0
  - @band-store/workflow-engine-inmemory@2.18.0
  - @band-store/workflow-engine-redis@2.18.0
  - @band-store/telemetry@2.18.0

## 2.17.2

### Patch Changes

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

- #15085 `b50a9dbaf3eeb29753fa28afbc1b529c44ec5a51` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(payment,payment-stripe,core-flows,Band Store,dashboard,js-sdk,utils,types): introduce async payment methods support

- #15721 `7686adc8637b41879c4551ca422829ad2d63d6a9` Thanks [@leobenzol](https://github.com/leobenzol)! - feat: drag&drop LayoutComposer, settings db persistence

- Updated dependencies [`cb454a097b6792a06564a7b601489e2cd651e00e`, `385819ba1469b4310832a7737060eb23226f135d`, `a04f1e06fcb99373becfe705c09a85910b73cb4c`, `448498c1450bd75b19d00a515544db61dcdc71e1`, `de58ec503bcd82aae3fe576f9a404c36e2525f4c`, `b50a9dbaf3eeb29753fa28afbc1b529c44ec5a51`, [`5d7d02a3813586ff0b381944d804a9065a37b996`](undefined), `5296f51121d4796b1757b65852c48e97e0e1e197`, `7686adc8637b41879c4551ca422829ad2d63d6a9`]:
  - @band-store/event-bus-redis@2.17.2
  - @band-store/core-flows@2.17.2
  - @band-store/order@2.17.2
  - @band-store/admin-bundler@2.17.2
  - @band-store/analytics@2.17.2
  - @band-store/analytics-local@2.17.2
  - @band-store/analytics-posthog@2.17.2
  - @band-store/api-key@2.17.2
  - @band-store/auth@2.17.2
  - @band-store/auth-emailpass@2.17.2
  - @band-store/auth-github@2.17.2
  - @band-store/auth-google@2.17.2
  - @band-store/cache-inmemory@2.17.2
  - @band-store/cache-redis@2.17.2
  - @band-store/caching@2.17.2
  - @band-store/caching-redis@2.17.2
  - @band-store/cart@2.17.2
  - @band-store/currency@2.17.2
  - @band-store/customer@2.17.2
  - @band-store/draft-order@2.17.2
  - @band-store/event-bus-local@2.17.2
  - @band-store/file@2.17.2
  - @band-store/file-local@2.17.2
  - @band-store/file-s3@2.17.2
  - @band-store/framework@2.17.2
  - @band-store/fulfillment@2.17.2
  - @band-store/fulfillment-manual@2.17.2
  - @band-store/index@2.17.2
  - @band-store/inventory@2.17.2
  - @band-store/link-modules@2.17.2
  - @band-store/locking@2.17.2
  - @band-store/locking-postgres@2.17.2
  - @band-store/locking-redis@2.17.2
  - @band-store/notification@2.17.2
  - @band-store/notification-local@2.17.2
  - @band-store/notification-sendgrid@2.17.2
  - @band-store/payment@2.17.2
  - @band-store/payment-stripe@2.17.2
  - @band-store/pricing@2.17.2
  - @band-store/product@2.17.2
  - @band-store/promotion@2.17.2
  - @band-store/rbac@2.17.2
  - @band-store/region@2.17.2
  - @band-store/sales-channel@2.17.2
  - @band-store/settings@2.17.2
  - @band-store/stock-location@2.17.2
  - @band-store/store@2.17.2
  - @band-store/tax@2.17.2
  - @band-store/telemetry@2.17.2
  - @band-store/translation@2.17.2
  - @band-store/user@2.17.2
  - @band-store/workflow-engine-inmemory@2.17.2
  - @band-store/workflow-engine-redis@2.17.2

## 2.17.1

### Patch Changes

- Updated dependencies [`975313f62b22055ddaacf7852f33cf7b0f4af5df`, `4f5e1cc97f4511f43cf4790af412781dafb2ba86`]:
  - @band-store/workflow-engine-inmemory@2.17.1
  - @band-store/workflow-engine-redis@2.17.1
  - @band-store/framework@2.17.1
  - @band-store/event-bus-local@2.17.1
  - @band-store/event-bus-redis@2.17.1
  - @band-store/core-flows@2.17.1
  - @band-store/analytics@2.17.1
  - @band-store/api-key@2.17.1
  - @band-store/auth@2.17.1
  - @band-store/cache-inmemory@2.17.1
  - @band-store/cache-redis@2.17.1
  - @band-store/caching@2.17.1
  - @band-store/cart@2.17.1
  - @band-store/currency@2.17.1
  - @band-store/customer@2.17.1
  - @band-store/file@2.17.1
  - @band-store/fulfillment@2.17.1
  - @band-store/index@2.17.1
  - @band-store/inventory@2.17.1
  - @band-store/link-modules@2.17.1
  - @band-store/locking@2.17.1
  - @band-store/notification@2.17.1
  - @band-store/order@2.17.1
  - @band-store/payment@2.17.1
  - @band-store/pricing@2.17.1
  - @band-store/product@2.17.1
  - @band-store/promotion@2.17.1
  - @band-store/analytics-local@2.17.1
  - @band-store/analytics-posthog@2.17.1
  - @band-store/auth-emailpass@2.17.1
  - @band-store/auth-github@2.17.1
  - @band-store/auth-google@2.17.1
  - @band-store/caching-redis@2.17.1
  - @band-store/file-local@2.17.1
  - @band-store/file-s3@2.17.1
  - @band-store/fulfillment-manual@2.17.1
  - @band-store/locking-postgres@2.17.1
  - @band-store/locking-redis@2.17.1
  - @band-store/notification-local@2.17.1
  - @band-store/notification-sendgrid@2.17.1
  - @band-store/payment-stripe@2.17.1
  - @band-store/rbac@2.17.1
  - @band-store/region@2.17.1
  - @band-store/sales-channel@2.17.1
  - @band-store/settings@2.17.1
  - @band-store/stock-location@2.17.1
  - @band-store/store@2.17.1
  - @band-store/tax@2.17.1
  - @band-store/translation@2.17.1
  - @band-store/user@2.17.1
  - @band-store/draft-order@2.17.1
  - @band-store/admin-bundler@2.17.1
  - @band-store/telemetry@2.17.1

## 2.17.0

### Minor Changes

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(Band Store,product,core-flows,types): product options redesign (server-side)

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(): allow linking a subset of an option's values to the product

### Patch Changes

- #15776 `f2d563a56b5f70834e113998ad36bcab30824cf8` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): maintain ESLint config detection

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(admin-shared,dashboard,core-flows,product,js-sdk,types,Band Store): rework product option values views and add dedicated endpoints

- Updated dependencies [`c97a2ecaf4d29d16a1a8541b07722163d5015160`, `5770fe15c8b63407705cb96d0e77c6f7c76b5219`, `2221e527701c7a47f243d808b0f4fe8c7f44f2f8`, `57b8e74d0fea8fb0e9dccd76eb6df06f0380071a`, `6eff86709de4dddc359f35fa84a2462fed85b753`, `6eff86709de4dddc359f35fa84a2462fed85b753`, `6617a612ef57a0fa1b5fdea72b10e78205af56e9`, `6eff86709de4dddc359f35fa84a2462fed85b753`, `06358e3a3b4bebf8b2cf5e6f9227a63b84937fb9`]:
  - @band-store/caching@2.17.0
  - @band-store/core-flows@2.17.0
  - @band-store/file-s3@2.17.0
  - @band-store/framework@2.17.0
  - @band-store/product@2.17.0
  - @band-store/order@2.17.0
  - @band-store/workflow-engine-inmemory@2.17.0
  - @band-store/draft-order@2.17.0
  - @band-store/admin-bundler@2.17.0
  - @band-store/event-bus-redis@2.17.0
  - @band-store/analytics@2.17.0
  - @band-store/api-key@2.17.0
  - @band-store/auth@2.17.0
  - @band-store/cache-inmemory@2.17.0
  - @band-store/cache-redis@2.17.0
  - @band-store/cart@2.17.0
  - @band-store/currency@2.17.0
  - @band-store/customer@2.17.0
  - @band-store/event-bus-local@2.17.0
  - @band-store/file@2.17.0
  - @band-store/fulfillment@2.17.0
  - @band-store/index@2.17.0
  - @band-store/inventory@2.17.0
  - @band-store/link-modules@2.17.0
  - @band-store/locking@2.17.0
  - @band-store/notification@2.17.0
  - @band-store/payment@2.17.0
  - @band-store/pricing@2.17.0
  - @band-store/promotion@2.17.0
  - @band-store/analytics-local@2.17.0
  - @band-store/analytics-posthog@2.17.0
  - @band-store/auth-emailpass@2.17.0
  - @band-store/auth-github@2.17.0
  - @band-store/auth-google@2.17.0
  - @band-store/caching-redis@2.17.0
  - @band-store/file-local@2.17.0
  - @band-store/fulfillment-manual@2.17.0
  - @band-store/locking-postgres@2.17.0
  - @band-store/locking-redis@2.17.0
  - @band-store/notification-local@2.17.0
  - @band-store/notification-sendgrid@2.17.0
  - @band-store/payment-stripe@2.17.0
  - @band-store/rbac@2.17.0
  - @band-store/region@2.17.0
  - @band-store/sales-channel@2.17.0
  - @band-store/settings@2.17.0
  - @band-store/stock-location@2.17.0
  - @band-store/store@2.17.0
  - @band-store/tax@2.17.0
  - @band-store/translation@2.17.0
  - @band-store/user@2.17.0
  - @band-store/workflow-engine-redis@2.17.0
  - @band-store/telemetry@2.17.0

## 2.16.0

### Minor Changes

- [`30f6d407cfaca510939ad161fbbe74feebb97883`](undefined) - feat(auth-emailpass, types, Band Store): require verification by actor type

### Patch Changes

- #15528 `2b7e6782c61af8b38ec9789736f3c708576b2620` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): add missing policies for translation module

- #15600 `8a6664d6d445f875f56078fad21fe12a185b9627` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(framework, utils, Band Store): centralize NODE_ENV production check and tighten secret defaults

- #15511 `7cea59f0c674a49380acb3638cbf86c590461b23` Thanks [@puneetdixit200](https://github.com/puneetdixit200)! - Include `address_name` in default customer address fields for store and admin customer address responses.

- #15407 `46271f2c4f9b4d107a43b588b1082a3e572fbe76` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,Band Store,types): add multi shipping method carts support

- #15523 `68f7a0e792a90c2edc04f27454178b75fd3b05f4` Thanks [@addemod](https://github.com/addemod)! - fix(plugin:develop): invoke yalc via process.execPath on Windows

  The watch-mode publisher in `bandStore plugin:develop` now spawns the yalc CLI with `node yalc.js …` instead of relying on yalc's shebang. Windows does not honor shebangs, so the previous `execFile(yalcBin, …)` threw `Error: spawn EFTYPE` on every file change and the post-build yalc push never ran — `yarn dev` was effectively unusable for plugin authors on Windows.

- #15619 `5cd86b7b0899bb3bace07da3299cc70826afbd64` Thanks [@sanidhyasin](https://github.com/sanidhyasin)! - fix(Band Store): allow updating buyget promotions via PATCH /admin/promotions/:id

- #15595 `beb1b5e6bcbfeda02659cbaa0e04d5dbc1ba64cd` Thanks [@leobenzol](https://github.com/leobenzol)! - feat(Band Store,utils): plugin type augmentations

- #14674 `06b05343b4158e7bb96f8f0fbd7e6836a1818e44` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,admin-shared,core-flows,js-sdk,types,Band Store,link-modules): RBAC admin dashboard CRUD

- #15561 `1344c10503f34e392bd03f733820bcd5a12a2766` Thanks [@GBreg19](https://github.com/GBreg19)! - feat(Band Store,core-flows,js-sdk,types): allow provider_id when marking a payment collection as paid

  The `mark-as-paid` admin route and the `markPaymentCollectionAsPaid` workflow now accept an optional `provider_id`. When provided, the captured payment is recorded under that provider instead of always using `pp_system_default`. Omitting it preserves the previous behavior. This completes the admin payment-provider flow started in #15169.

- [`a46961ed421dc69fe991891d02b0f1c66f6180ab`](undefined) - fix(core-flows, auth, types, Band Store): bind password reset tokens to a single-use server record

- #15630 `740132b7576d937b82e913c1ccf4cfabe56777d6` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(create-band-store-app, telemetry, dashboard, Band Store): update react-router-dom and uuid packages

- #15726 `66610b87efb112e37b78c7c9536d95070b8d6b11` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(framework,Band Store): surface real error and terminate process on db commands

- [`8a27881086307b14bfd1f74f13e2b9db51cc0c03`](undefined) - fix(Band Store): clear session cookie on DELETE /auth/session

  The logout route now sends a `Set-Cookie` header to clear the session cookie on the client after destroying the server-side session. Previously, `req.session.destroy()` was called fire-and-forget and no clearing header was emitted, leaving a stale cookie in the browser after logout (contradicting the documented behavior). The cookie name and options are sourced from the project config so customized session names continue to work.

- #15732 `3f3b339ea732670de449ee6ace4635523ff44ab0` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows, loyalty-plugin, Band Store): fix Band Store lint errors

- #15719 `a1fd4d648b923cbd68240dba49f1c46ad0e98f39` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(cli, eslint-plugin, Band Store): add linting to Band Store CLI

- #15690 `60d63bd2c0e400f06b985d5275b86c72681e4f62` Thanks [@Tusharkhadde](https://github.com/Tusharkhadde)! - feat(dashboard,Band Store,types): add internal note support to order edits

- [`f58de022857e00d12fa60f55fb80fcc7eff357d8`](undefined) - fix(Band Store): type product category create response

- #15605 `af4dc161cf3ca90f68214138212416bc7b54209b` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(dashboard, Band Store): validate http(s) scheme on fulfillment label URLs

- [`762195f2329745e9ead1653ea8cdf54120530c96`](undefined) - chore(Band Store): remove emojis from migration script

- Updated dependencies [`f2e576f895ae6579dfa4e29b75d8a0a9c9cf9326`, `8a6664d6d445f875f56078fad21fe12a185b9627`, [`27874782c29890d8eb4c07f3eaafa3c71ebf3949`](undefined), [`528b12cbd50f85079e157b920be306dec7c89938`](undefined), [`55be5103e41ffe367400cc9317a3bd6dbaa1e0cf`](undefined), `46271f2c4f9b4d107a43b588b1082a3e572fbe76`, [`a67af142f80438b05a20599af7d26176904a8be7`](undefined), [`8b3b9f7dc97731688e4a5f1c0bb2714e00483bc6`](undefined), [`801dbdb2ae70152aaa5917590885bd36bd44efc4`](undefined), `06b05343b4158e7bb96f8f0fbd7e6836a1818e44`, [`e1697b65ff73257939c714dd2c8afdb5efa5e947`](undefined), [`1c5ce279aaf792789be371fae70ca304f710cb73`](undefined), [`2bd3b0d18d7d4fe9c6f36bdffb76d1104f58f47b`](undefined), [`46c806036c1f469e949c2da76ae55909c8920bd9`](undefined), [`18474de124868370298addf195e5229ca6792f81`](undefined), [`ab832fcf1e4f51e1469a20aeb8e1ded125bd19c6`](undefined), `5c20d034de9a0b32189963f20dd3d8e426f0e67b`, [`30f6d407cfaca510939ad161fbbe74feebb97883`](undefined), `1344c10503f34e392bd03f733820bcd5a12a2766`, [`a46961ed421dc69fe991891d02b0f1c66f6180ab`](undefined), [`6dd06189fdcb610e85fe2cd59e96862e6ad474df`](undefined), `20352f4fa2f31e5b491c8b1b244c407392939fbf`, [`42e54eb549209f0609b0668d822f962676e81bb1`](undefined), [`ffae1bee3fe51c6c5dc68f27ace7b257da2327b4`](undefined), `90af038c95c835dee5168ffd19cda5182d81b904`, `13c5dd22802593f5fb5c0a97076a966704aa56c9`, `740132b7576d937b82e913c1ccf4cfabe56777d6`, [`333b08a120dcd40ef1066d05be0c124a8c3b1ff7`](undefined), [`a63e47d0014fbe309a8594458fc84926dd107a79`](undefined), [`42aa9bf7ec8cf8dede96ce4da13e12e3ef319e90`](undefined), `66610b87efb112e37b78c7c9536d95070b8d6b11`, [`a3af5a25e4acea97514ad9b8362941c1a352bb0c`](undefined), `3f3b339ea732670de449ee6ace4635523ff44ab0`]:
  - @band-store/draft-order@2.16.0
  - @band-store/framework@2.16.0
  - @band-store/core-flows@2.16.0
  - @band-store/order@2.16.0
  - @band-store/payment-stripe@2.16.0
  - @band-store/product@2.16.0
  - @band-store/link-modules@2.16.0
  - @band-store/file-local@2.16.0
  - @band-store/promotion@2.16.0
  - @band-store/payment@2.16.0
  - @band-store/index@2.16.0
  - @band-store/auth-emailpass@2.16.0
  - @band-store/auth@2.16.0
  - @band-store/user@2.16.0
  - @band-store/pricing@2.16.0
  - @band-store/telemetry@2.16.0
  - @band-store/auth-google@2.16.0
  - @band-store/admin-bundler@2.16.0
  - @band-store/analytics@2.16.0
  - @band-store/api-key@2.16.0
  - @band-store/cache-inmemory@2.16.0
  - @band-store/cache-redis@2.16.0
  - @band-store/caching@2.16.0
  - @band-store/cart@2.16.0
  - @band-store/currency@2.16.0
  - @band-store/customer@2.16.0
  - @band-store/event-bus-local@2.16.0
  - @band-store/event-bus-redis@2.16.0
  - @band-store/file@2.16.0
  - @band-store/fulfillment@2.16.0
  - @band-store/inventory@2.16.0
  - @band-store/locking@2.16.0
  - @band-store/notification@2.16.0
  - @band-store/analytics-local@2.16.0
  - @band-store/analytics-posthog@2.16.0
  - @band-store/auth-github@2.16.0
  - @band-store/caching-redis@2.16.0
  - @band-store/file-s3@2.16.0
  - @band-store/fulfillment-manual@2.16.0
  - @band-store/locking-postgres@2.16.0
  - @band-store/locking-redis@2.16.0
  - @band-store/notification-local@2.16.0
  - @band-store/notification-sendgrid@2.16.0
  - @band-store/rbac@2.16.0
  - @band-store/region@2.16.0
  - @band-store/sales-channel@2.16.0
  - @band-store/settings@2.16.0
  - @band-store/stock-location@2.16.0
  - @band-store/store@2.16.0
  - @band-store/tax@2.16.0
  - @band-store/translation@2.16.0
  - @band-store/workflow-engine-inmemory@2.16.0
  - @band-store/workflow-engine-redis@2.16.0

## 2.15.5

### Patch Changes

- #15496 `ace1822bccbb21afa533665937460140e36aa995` Thanks [@christiananese](https://github.com/christiananese)! - Add auth verification primitives for emailpass.

- #14593 `538f98da78ae2d741f1182e6ef315ba8efac6911` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,framework,rbac,js-sdk,types,utils,Band Store): rbac admin dashboard utils

- Updated dependencies [`ace1822bccbb21afa533665937460140e36aa995`, `2535bd63f3bf2745034abb11ac38469df6f4a588`, `e6c632ada9ced677e44198f145097422890abc63`, `8122633a8b33164a6094f5a39896e356efde1747`, `538f98da78ae2d741f1182e6ef315ba8efac6911`]:
  - @band-store/auth@2.15.5
  - @band-store/auth-emailpass@2.15.5
  - @band-store/core-flows@2.15.5
  - @band-store/framework@2.15.5
  - @band-store/rbac@2.15.5
  - @band-store/draft-order@2.15.5
  - @band-store/admin-bundler@2.15.5
  - @band-store/event-bus-redis@2.15.5
  - @band-store/analytics@2.15.5
  - @band-store/api-key@2.15.5
  - @band-store/cache-inmemory@2.15.5
  - @band-store/cache-redis@2.15.5
  - @band-store/caching@2.15.5
  - @band-store/cart@2.15.5
  - @band-store/currency@2.15.5
  - @band-store/customer@2.15.5
  - @band-store/event-bus-local@2.15.5
  - @band-store/file@2.15.5
  - @band-store/fulfillment@2.15.5
  - @band-store/index@2.15.5
  - @band-store/inventory@2.15.5
  - @band-store/link-modules@2.15.5
  - @band-store/locking@2.15.5
  - @band-store/notification@2.15.5
  - @band-store/order@2.15.5
  - @band-store/payment@2.15.5
  - @band-store/pricing@2.15.5
  - @band-store/product@2.15.5
  - @band-store/promotion@2.15.5
  - @band-store/analytics-local@2.15.5
  - @band-store/analytics-posthog@2.15.5
  - @band-store/auth-github@2.15.5
  - @band-store/auth-google@2.15.5
  - @band-store/caching-redis@2.15.5
  - @band-store/file-local@2.15.5
  - @band-store/file-s3@2.15.5
  - @band-store/fulfillment-manual@2.15.5
  - @band-store/locking-postgres@2.15.5
  - @band-store/locking-redis@2.15.5
  - @band-store/notification-local@2.15.5
  - @band-store/notification-sendgrid@2.15.5
  - @band-store/payment-stripe@2.15.5
  - @band-store/region@2.15.5
  - @band-store/sales-channel@2.15.5
  - @band-store/settings@2.15.5
  - @band-store/stock-location@2.15.5
  - @band-store/store@2.15.5
  - @band-store/tax@2.15.5
  - @band-store/translation@2.15.5
  - @band-store/user@2.15.5
  - @band-store/workflow-engine-inmemory@2.15.5
  - @band-store/workflow-engine-redis@2.15.5
  - @band-store/telemetry@2.15.5

## 2.15.4

### Patch Changes

- #15465 `94a3ee29d2a2ec441791d671e42deb24108df7f3` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows,Band Store): align validate user permissions check with hasPermission util

- Updated dependencies [`fe9636daba55fd65213fe338ba818ec1429783fa`, `08912969605975ca8dafae3bc87776f1ae184e08`, `94a3ee29d2a2ec441791d671e42deb24108df7f3`]:
  - @band-store/core-flows@2.15.4
  - @band-store/auth@2.15.4
  - @band-store/admin-bundler@2.15.4
  - @band-store/analytics@2.15.4
  - @band-store/api-key@2.15.4
  - @band-store/caching@2.15.4
  - @band-store/cart@2.15.4
  - @band-store/currency@2.15.4
  - @band-store/customer@2.15.4
  - @band-store/file@2.15.4
  - @band-store/fulfillment@2.15.4
  - @band-store/index@2.15.4
  - @band-store/inventory@2.15.4
  - @band-store/link-modules@2.15.4
  - @band-store/locking@2.15.4
  - @band-store/notification@2.15.4
  - @band-store/order@2.15.4
  - @band-store/payment@2.15.4
  - @band-store/pricing@2.15.4
  - @band-store/product@2.15.4
  - @band-store/promotion@2.15.4
  - @band-store/rbac@2.15.4
  - @band-store/region@2.15.4
  - @band-store/sales-channel@2.15.4
  - @band-store/settings@2.15.4
  - @band-store/stock-location@2.15.4
  - @band-store/store@2.15.4
  - @band-store/tax@2.15.4
  - @band-store/translation@2.15.4
  - @band-store/user@2.15.4
  - @band-store/workflow-engine-inmemory@2.15.4
  - @band-store/workflow-engine-redis@2.15.4
  - @band-store/draft-order@2.15.4
  - @band-store/framework@2.15.4
  - @band-store/telemetry@2.15.4
  - @band-store/cache-inmemory@2.15.4
  - @band-store/cache-redis@2.15.4
  - @band-store/event-bus-local@2.15.4
  - @band-store/event-bus-redis@2.15.4
  - @band-store/analytics-local@2.15.4
  - @band-store/analytics-posthog@2.15.4
  - @band-store/auth-emailpass@2.15.4
  - @band-store/auth-github@2.15.4
  - @band-store/auth-google@2.15.4
  - @band-store/caching-redis@2.15.4
  - @band-store/file-local@2.15.4
  - @band-store/file-s3@2.15.4
  - @band-store/fulfillment-manual@2.15.4
  - @band-store/locking-postgres@2.15.4
  - @band-store/locking-redis@2.15.4
  - @band-store/notification-local@2.15.4
  - @band-store/notification-sendgrid@2.15.4
  - @band-store/payment-stripe@2.15.4

## 2.15.3

### Patch Changes

- #15396 `d0f4df0c6307555737a46f54ab7b99dd81c6c75b` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,types): surface skipped promo codes due to budget/promotion limits

- #15405 `5d14db303b5192c3459a5aa5302c292286a54ff6` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): fix filtering by categories and tags in /store/products with the index module

- #15423 `0697de72f2e59e9674e8b6489febf72587e3feef` Thanks [@christiananese](https://github.com/christiananese)! - feat(auth): add MFA API routes

- #15397 `d36790f6ccc1a8d7fa729027f9e9d75ad8c9d418` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(inventory,core-flows,Band Store): add missing locking to reservation steps

- Updated dependencies [`e0b8251bbd04a400dffa635e990e3e587f9f2986`, `22fa3e373aa5377b79e7f80b006b69b33eac7434`, `d0f4df0c6307555737a46f54ab7b99dd81c6c75b`, `ad14455d087d045eba3b3197ac37bf66e42d4e64`, `d36790f6ccc1a8d7fa729027f9e9d75ad8c9d418`, `de43962211feb705d27b2f388384e3f3f4b6d466`]:
  - @band-store/link-modules@2.15.3
  - @band-store/core-flows@2.15.3
  - @band-store/inventory@2.15.3
  - @band-store/framework@2.15.3
  - @band-store/event-bus-redis@2.15.3
  - @band-store/admin-bundler@2.15.3
  - @band-store/draft-order@2.15.3
  - @band-store/analytics@2.15.3
  - @band-store/api-key@2.15.3
  - @band-store/auth@2.15.3
  - @band-store/caching@2.15.3
  - @band-store/cart@2.15.3
  - @band-store/currency@2.15.3
  - @band-store/customer@2.15.3
  - @band-store/file@2.15.3
  - @band-store/fulfillment@2.15.3
  - @band-store/index@2.15.3
  - @band-store/locking@2.15.3
  - @band-store/notification@2.15.3
  - @band-store/order@2.15.3
  - @band-store/payment@2.15.3
  - @band-store/pricing@2.15.3
  - @band-store/product@2.15.3
  - @band-store/promotion@2.15.3
  - @band-store/rbac@2.15.3
  - @band-store/region@2.15.3
  - @band-store/sales-channel@2.15.3
  - @band-store/settings@2.15.3
  - @band-store/stock-location@2.15.3
  - @band-store/store@2.15.3
  - @band-store/tax@2.15.3
  - @band-store/translation@2.15.3
  - @band-store/user@2.15.3
  - @band-store/workflow-engine-inmemory@2.15.3
  - @band-store/workflow-engine-redis@2.15.3
  - @band-store/cache-inmemory@2.15.3
  - @band-store/cache-redis@2.15.3
  - @band-store/event-bus-local@2.15.3
  - @band-store/analytics-local@2.15.3
  - @band-store/analytics-posthog@2.15.3
  - @band-store/auth-emailpass@2.15.3
  - @band-store/auth-github@2.15.3
  - @band-store/auth-google@2.15.3
  - @band-store/caching-redis@2.15.3
  - @band-store/file-local@2.15.3
  - @band-store/file-s3@2.15.3
  - @band-store/fulfillment-manual@2.15.3
  - @band-store/locking-postgres@2.15.3
  - @band-store/locking-redis@2.15.3
  - @band-store/notification-local@2.15.3
  - @band-store/notification-sendgrid@2.15.3
  - @band-store/payment-stripe@2.15.3
  - @band-store/telemetry@2.15.3

## 2.15.2

### Patch Changes

- #15383 `2b21d15640ae459386b0acea4c83804c6f502b9d` Thanks [@peterlgh7](https://github.com/peterlgh7)! - builds should fail if band-store-config throws

- #15386 `5e8fc904fe00d8c89b6615cfbbdbde66531d2337` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(Band Store): enable index when querying products via promotion attribute values and enable sku search in products entrypoint

- Updated dependencies [`370676c2a737fb3b558a745ad452a2c9d4ae6de5`, `2b21d15640ae459386b0acea4c83804c6f502b9d`]:
  - @band-store/locking-redis@2.15.2
  - @band-store/framework@2.15.2
  - @band-store/event-bus-redis@2.15.2
  - @band-store/core-flows@2.15.2
  - @band-store/analytics@2.15.2
  - @band-store/api-key@2.15.2
  - @band-store/auth@2.15.2
  - @band-store/cache-inmemory@2.15.2
  - @band-store/cache-redis@2.15.2
  - @band-store/caching@2.15.2
  - @band-store/cart@2.15.2
  - @band-store/currency@2.15.2
  - @band-store/customer@2.15.2
  - @band-store/event-bus-local@2.15.2
  - @band-store/file@2.15.2
  - @band-store/fulfillment@2.15.2
  - @band-store/index@2.15.2
  - @band-store/inventory@2.15.2
  - @band-store/link-modules@2.15.2
  - @band-store/locking@2.15.2
  - @band-store/notification@2.15.2
  - @band-store/order@2.15.2
  - @band-store/payment@2.15.2
  - @band-store/pricing@2.15.2
  - @band-store/product@2.15.2
  - @band-store/promotion@2.15.2
  - @band-store/analytics-local@2.15.2
  - @band-store/analytics-posthog@2.15.2
  - @band-store/auth-emailpass@2.15.2
  - @band-store/auth-github@2.15.2
  - @band-store/auth-google@2.15.2
  - @band-store/caching-redis@2.15.2
  - @band-store/file-local@2.15.2
  - @band-store/file-s3@2.15.2
  - @band-store/fulfillment-manual@2.15.2
  - @band-store/locking-postgres@2.15.2
  - @band-store/notification-local@2.15.2
  - @band-store/notification-sendgrid@2.15.2
  - @band-store/payment-stripe@2.15.2
  - @band-store/rbac@2.15.2
  - @band-store/region@2.15.2
  - @band-store/sales-channel@2.15.2
  - @band-store/settings@2.15.2
  - @band-store/stock-location@2.15.2
  - @band-store/store@2.15.2
  - @band-store/tax@2.15.2
  - @band-store/translation@2.15.2
  - @band-store/user@2.15.2
  - @band-store/workflow-engine-inmemory@2.15.2
  - @band-store/workflow-engine-redis@2.15.2
  - @band-store/draft-order@2.15.2
  - @band-store/admin-bundler@2.15.2
  - @band-store/telemetry@2.15.2

## 2.15.1

### Patch Changes

- Updated dependencies [`d784e637bd0762033601b8503633871dba779bfb`]:
  - @band-store/index@2.15.1
  - @band-store/analytics@2.15.1
  - @band-store/api-key@2.15.1
  - @band-store/auth@2.15.1
  - @band-store/caching@2.15.1
  - @band-store/cart@2.15.1
  - @band-store/currency@2.15.1
  - @band-store/customer@2.15.1
  - @band-store/file@2.15.1
  - @band-store/fulfillment@2.15.1
  - @band-store/inventory@2.15.1
  - @band-store/link-modules@2.15.1
  - @band-store/locking@2.15.1
  - @band-store/notification@2.15.1
  - @band-store/order@2.15.1
  - @band-store/payment@2.15.1
  - @band-store/pricing@2.15.1
  - @band-store/product@2.15.1
  - @band-store/promotion@2.15.1
  - @band-store/rbac@2.15.1
  - @band-store/region@2.15.1
  - @band-store/sales-channel@2.15.1
  - @band-store/settings@2.15.1
  - @band-store/stock-location@2.15.1
  - @band-store/store@2.15.1
  - @band-store/tax@2.15.1
  - @band-store/translation@2.15.1
  - @band-store/user@2.15.1
  - @band-store/workflow-engine-inmemory@2.15.1
  - @band-store/workflow-engine-redis@2.15.1
  - @band-store/draft-order@2.15.1
  - @band-store/admin-bundler@2.15.1
  - @band-store/core-flows@2.15.1
  - @band-store/framework@2.15.1
  - @band-store/telemetry@2.15.1
  - @band-store/cache-inmemory@2.15.1
  - @band-store/cache-redis@2.15.1
  - @band-store/event-bus-local@2.15.1
  - @band-store/event-bus-redis@2.15.1
  - @band-store/analytics-local@2.15.1
  - @band-store/analytics-posthog@2.15.1
  - @band-store/auth-emailpass@2.15.1
  - @band-store/auth-github@2.15.1
  - @band-store/auth-google@2.15.1
  - @band-store/caching-redis@2.15.1
  - @band-store/file-local@2.15.1
  - @band-store/file-s3@2.15.1
  - @band-store/fulfillment-manual@2.15.1
  - @band-store/locking-postgres@2.15.1
  - @band-store/locking-redis@2.15.1
  - @band-store/notification-local@2.15.1
  - @band-store/notification-sendgrid@2.15.1
  - @band-store/payment-stripe@2.15.1

## 2.15.0

### Patch Changes

- #15260 `b1c4aeea58293e2c2ad0c72d15e9bf45e6168131` Thanks [@AKIB473](https://github.com/AKIB473)! - fix(Band Store): load WorkflowLoader during db:migrate so workflow hooks are registered

- #14718 `4a3f9ed2e076713f47d4fb2458dee528b36b864e` Thanks [@shubhamchoudhary-2003](https://github.com/shubhamchoudhary-2003)! - fix(Band Store): prevent plugin:db:generate crash when model files export enums

- Updated dependencies [`a843721b150cf0fa32cebf4d6ecb75476391e666`, `fdec6f0358bedfcbfe6b78fb0294b1b2c639cc02`, `876bdba41d0d00a6d14e25c5deea830aa009b2ad`, `7747d0510b24bcce5e68bf32236559d809dabdee`, `37aa3154336e46b0f6c48aa964d6dfeca4f03b9c`, `45a03cd92ce04ffe8301fb2217cff5e46722bf47`, `5a7b0142367491236167477e613de763f10b7e32`, `436f549e326563cc3da4b7b142c12072fb89eed4`, `34f326d729aa9e1bafd6ef644ccb47621bf2a14e`, `4715ef174e9945600ef1082ddeb69ca0fdc5eaba`, `15c938bef93e30fe62f59a78d09cdf412fb92f5a`, `8539bc71a554ba0dd6bc48511aa980d93d3f2664`, `6d0fd2fb38d56e76580b52d4e6ea74d34db2000e`, `ae7bbaed1011e1a74f814c6c01c0da483f300338`, `f57b942b8bbd385f32203965e2f54a3964e812eb`, `cd22b7df5120993f2311cf6fecc8f213c383f16b`]:
  - @band-store/workflow-engine-redis@2.15.0
  - @band-store/order@2.15.0
  - @band-store/payment@2.15.0
  - @band-store/core-flows@2.15.0
  - @band-store/settings@2.15.0
  - @band-store/file-s3@2.15.0
  - @band-store/product@2.15.0
  - @band-store/pricing@2.15.0
  - @band-store/index@2.15.0
  - @band-store/framework@2.15.0
  - @band-store/admin-bundler@2.15.0
  - @band-store/event-bus-redis@2.15.0
  - @band-store/draft-order@2.15.0
  - @band-store/analytics@2.15.0
  - @band-store/api-key@2.15.0
  - @band-store/auth@2.15.0
  - @band-store/caching@2.15.0
  - @band-store/cart@2.15.0
  - @band-store/currency@2.15.0
  - @band-store/customer@2.15.0
  - @band-store/file@2.15.0
  - @band-store/fulfillment@2.15.0
  - @band-store/inventory@2.15.0
  - @band-store/link-modules@2.15.0
  - @band-store/locking@2.15.0
  - @band-store/notification@2.15.0
  - @band-store/promotion@2.15.0
  - @band-store/rbac@2.15.0
  - @band-store/region@2.15.0
  - @band-store/sales-channel@2.15.0
  - @band-store/stock-location@2.15.0
  - @band-store/store@2.15.0
  - @band-store/tax@2.15.0
  - @band-store/translation@2.15.0
  - @band-store/user@2.15.0
  - @band-store/workflow-engine-inmemory@2.15.0
  - @band-store/cache-inmemory@2.15.0
  - @band-store/cache-redis@2.15.0
  - @band-store/event-bus-local@2.15.0
  - @band-store/analytics-local@2.15.0
  - @band-store/analytics-posthog@2.15.0
  - @band-store/auth-emailpass@2.15.0
  - @band-store/auth-github@2.15.0
  - @band-store/auth-google@2.15.0
  - @band-store/caching-redis@2.15.0
  - @band-store/file-local@2.15.0
  - @band-store/fulfillment-manual@2.15.0
  - @band-store/locking-postgres@2.15.0
  - @band-store/locking-redis@2.15.0
  - @band-store/notification-local@2.15.0
  - @band-store/notification-sendgrid@2.15.0
  - @band-store/payment-stripe@2.15.0
  - @band-store/telemetry@2.15.0

## 2.14.2

### Patch Changes

- #15169 `aa407641ce6ddcd2e27352315b0f7b911a2c0acf` Thanks [@GBreg19](https://github.com/GBreg19)! - feat(Band Store,js-sdk,types): add POST /admin/payment-collections/:id/payment-sessions route

- #15238 `d29b9a1d80580d4b5dce926387c465260936e5ec` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(pricing,Band Store,dashboard,types): add metadata support for price lists

- #15249 `650938944e2b5b6fbe3f044b8ced8d260b6742a0` Thanks [@srindom](https://github.com/srindom)! - feat(index, Band Store): resolve `price_list_id` filter on `GET /admin/products` natively through the index engine.

  - `@band-store/index`: the default schema now exposes `price_list_id` on `Price`. On upgrade, existing index-engine users will trigger a one-time re-sync of the `Price` entity (driven by the existing schema-change detection); during that window, `price_list_id` filters served from the index may return incomplete results.
  - `@band-store/band-store`: `getProductsWithIndexEngine` now translates `price_list_id` into the nested filter `variants.prices.price_list_id`, and `maybeApplyPriceListsFilter` skips its in-JS variant-id expansion when the index engine path will handle the filter (i.e. `index_engine` flag enabled and no `tags`/`categories` filters forcing the non-index fallback).

  For users with the `index_engine` feature flag enabled and large price lists this removes the multi-second middleware overhead on the price-list detail page.

- #15247 `cce180c48ed1378847ab191f39adbcbbc325bfda` Thanks [@srindom](https://github.com/srindom)! - fix(Band Store): `GET /admin/products?price_list_id=...` is significantly faster on large price lists. The `maybeApplyPriceListsFilter` middleware now queries the `price` entry point directly (filtered by `price_list_id`) instead of expanding the entire `price_list → prices → price_set → variant` graph through `price_list`. Variant ids are also de-duplicated before being applied to the products filter.

- #15103 `0303d7f30b7c636037c1df496f39aa04c0556248` Thanks [@AKIB473](https://github.com/AKIB473)! - fix(Band Store): pass container to BandStoreAppLoader in runMigrationScripts to resolve AwilixResolutionError for `query` during migration scripts

- #15137 `be0b8817a1e2e48e1c6c579de6598c6f5e9bf4b0` Thanks [@saheersk](https://github.com/saheersk)! - fix(Band Store,framework): preserve app_metadata and user_metadata across token refresh

- #15134 `243e88510cd7bb4187169ee383519a9be7594854` Thanks [@v0eak](https://github.com/v0eak)! - fix(Band Store,js-sdk): Refactor Workflow Subscription & Fix SSE Stream

- #15189 `a0e57e419cd3e597526460fdbfed7e3e4842aa9b` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store,types,loyalty-plugin): remove unused parameter + export step

- Updated dependencies [`d29b9a1d80580d4b5dce926387c465260936e5ec`, `650938944e2b5b6fbe3f044b8ced8d260b6742a0`, `be0b8817a1e2e48e1c6c579de6598c6f5e9bf4b0`, `7c659ff3d69c43bd7477bcc8a1c0afd092ea1c23`, `bd162f7a93e326c73b9929918b5bb9e3a458cc77`, `e434f5f117d8a19752ff50b2f1a49a6af7164df1`]:
  - @band-store/pricing@2.14.2
  - @band-store/index@2.14.2
  - @band-store/framework@2.14.2
  - @band-store/core-flows@2.14.2
  - @band-store/region@2.14.2
  - @band-store/draft-order@2.14.2
  - @band-store/admin-bundler@2.14.2
  - @band-store/event-bus-redis@2.14.2
  - @band-store/analytics@2.14.2
  - @band-store/api-key@2.14.2
  - @band-store/auth@2.14.2
  - @band-store/cache-inmemory@2.14.2
  - @band-store/cache-redis@2.14.2
  - @band-store/caching@2.14.2
  - @band-store/cart@2.14.2
  - @band-store/currency@2.14.2
  - @band-store/customer@2.14.2
  - @band-store/event-bus-local@2.14.2
  - @band-store/file@2.14.2
  - @band-store/fulfillment@2.14.2
  - @band-store/inventory@2.14.2
  - @band-store/link-modules@2.14.2
  - @band-store/locking@2.14.2
  - @band-store/notification@2.14.2
  - @band-store/order@2.14.2
  - @band-store/payment@2.14.2
  - @band-store/product@2.14.2
  - @band-store/promotion@2.14.2
  - @band-store/analytics-local@2.14.2
  - @band-store/analytics-posthog@2.14.2
  - @band-store/auth-emailpass@2.14.2
  - @band-store/auth-github@2.14.2
  - @band-store/auth-google@2.14.2
  - @band-store/caching-redis@2.14.2
  - @band-store/file-local@2.14.2
  - @band-store/file-s3@2.14.2
  - @band-store/fulfillment-manual@2.14.2
  - @band-store/locking-postgres@2.14.2
  - @band-store/locking-redis@2.14.2
  - @band-store/notification-local@2.14.2
  - @band-store/notification-sendgrid@2.14.2
  - @band-store/payment-stripe@2.14.2
  - @band-store/rbac@2.14.2
  - @band-store/sales-channel@2.14.2
  - @band-store/settings@2.14.2
  - @band-store/stock-location@2.14.2
  - @band-store/store@2.14.2
  - @band-store/tax@2.14.2
  - @band-store/translation@2.14.2
  - @band-store/user@2.14.2
  - @band-store/workflow-engine-inmemory@2.14.2
  - @band-store/workflow-engine-redis@2.14.2
  - @band-store/telemetry@2.14.2

## 2.14.1

### Patch Changes

- #15182 `9b369cb735c46724b2ca08e2edfdd86ea7bfa314` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(create-band-store-app,Band Store): ask to install claude code plugin

- Updated dependencies []:
  - @band-store/admin-bundler@2.14.1
  - @band-store/analytics@2.14.1
  - @band-store/api-key@2.14.1
  - @band-store/auth@2.14.1
  - @band-store/caching@2.14.1
  - @band-store/cart@2.14.1
  - @band-store/currency@2.14.1
  - @band-store/customer@2.14.1
  - @band-store/file@2.14.1
  - @band-store/fulfillment@2.14.1
  - @band-store/index@2.14.1
  - @band-store/inventory@2.14.1
  - @band-store/link-modules@2.14.1
  - @band-store/locking@2.14.1
  - @band-store/notification@2.14.1
  - @band-store/order@2.14.1
  - @band-store/payment@2.14.1
  - @band-store/pricing@2.14.1
  - @band-store/product@2.14.1
  - @band-store/promotion@2.14.1
  - @band-store/rbac@2.14.1
  - @band-store/region@2.14.1
  - @band-store/sales-channel@2.14.1
  - @band-store/settings@2.14.1
  - @band-store/stock-location@2.14.1
  - @band-store/store@2.14.1
  - @band-store/tax@2.14.1
  - @band-store/translation@2.14.1
  - @band-store/user@2.14.1
  - @band-store/workflow-engine-inmemory@2.14.1
  - @band-store/workflow-engine-redis@2.14.1
  - @band-store/draft-order@2.14.1
  - @band-store/core-flows@2.14.1
  - @band-store/framework@2.14.1
  - @band-store/telemetry@2.14.1
  - @band-store/cache-inmemory@2.14.1
  - @band-store/cache-redis@2.14.1
  - @band-store/event-bus-local@2.14.1
  - @band-store/event-bus-redis@2.14.1
  - @band-store/analytics-local@2.14.1
  - @band-store/analytics-posthog@2.14.1
  - @band-store/auth-emailpass@2.14.1
  - @band-store/auth-github@2.14.1
  - @band-store/auth-google@2.14.1
  - @band-store/caching-redis@2.14.1
  - @band-store/file-local@2.14.1
  - @band-store/file-s3@2.14.1
  - @band-store/fulfillment-manual@2.14.1
  - @band-store/locking-postgres@2.14.1
  - @band-store/locking-redis@2.14.1
  - @band-store/notification-local@2.14.1
  - @band-store/notification-sendgrid@2.14.1
  - @band-store/payment-stripe@2.14.1

## 2.14.0

### Patch Changes

- #15106 `1a28af3d7412466022dc941c425a06c762a43d75` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,Band Store,types): add no_notification to markOrderFulfillmentAsDeliveredWorkflow

- #15017 `15085e1adb9c50743ca07d2da94f23cc09b6852a` Thanks [@shahednasser](https://github.com/shahednasser)! - fix: fix http types not matching validators

- #14309 `843dbfe7c8f27b732486c7a8da7b6d63f2fdf967` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): upgrade zod to latest

- #13975 `67499a8aa6b3b53cbdecb5be9fcc358b4e466696` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(currency,payment,pricing,region,order,store,cart,core-flows,Band Store,utils): repo wide currency_code normalization

- #14650 `965adfe2fc15a024270ac384f819479e8b274e10` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(view configuration): Generic introspection and generation

- #14711 `9e145bfb27cb5792f7b8d1331f2b076fb00355d9` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(loyalty-plugin,Band Store,utils): open source loyalty plugin

- #15114 `2ee9b39b6793d1352cc27a974e964049a053c9c0` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): conditionally updated index_data for currency code normalization

- #15165 `41dc2a8a6fea39a158d93a3b0e1c9793e746ca3c` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): optimize currency code normalization migration

- #14886 `5ef7953ec3bbcdafe452db813e5c5b07a1c1f0ba` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(Band Store,core-flows): include variant images in product export

- #14826 `923a869a7d462c2e0399619ac2b35c16132e079c` Thanks [@asgerjensen](https://github.com/asgerjensen)! - chore(Band Store,types): allow filtering on variant sku/barcode/ean/upc on both /store and /admin apis

- #14570 `9e1e7082c3437ee2ae01d6752b624d4b4d905604` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): update item metadata on item_update change action

- #14855 `b94f7ae1f5f66dfca7f73c7ee8d53afdcbf26ee5` Thanks [@asgerjensen](https://github.com/asgerjensen)! - feat(product,Band Store,types): add external id to product tags, collections and types

- #14482 `d9af2f5efba391f612ea9f6183702756c3fa4732` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): Version shipping method adjustments & implement missing creation flow for versioned adjustments

- #14436 `32533eb829d904d4c1a89c841f06d9c209460ac7` Thanks [@bhagwatiprasad](https://github.com/bhagwatiprasad)! - fix(Band Store, utils): add delay between module migrations to prevent timestamp collision

- #14799 `a92ca32b93eaf7f5a8e1fc8b2bbb01763867f6c1` Thanks [@asgerjensen](https://github.com/asgerjensen)! - add external_id to product-category

- Updated dependencies [`1a28af3d7412466022dc941c425a06c762a43d75`, `b4558c61a4a157fff105eb6f3e9b3ebf8dea7799`, `3ae4162e0f027c4b7035028e183c07c9936fd0c1`, `d3a4ec0123d0bfb6910ff38d6d74ece00083e819`, `0929b8d192833e10b6b91795f1ffc478938c3fb7`, `843dbfe7c8f27b732486c7a8da7b6d63f2fdf967`, `834553b311aa66b2f2f85131398badb0d6b55b13`, `6a958d2374b9e109dfd2f0662e69791fd513cbff`, `67499a8aa6b3b53cbdecb5be9fcc358b4e466696`, `e489aebaf301ea2eb2834449af65bc3da7f7465a`, `965adfe2fc15a024270ac384f819479e8b274e10`, `5ef7953ec3bbcdafe452db813e5c5b07a1c1f0ba`, `3717530011fc3adf1e7d2c57db41c833ba83c7fb`, `41ee12ccde939a7c02360c63e725b8e4ad488c55`, `9e1e7082c3437ee2ae01d6752b624d4b4d905604`, `e4ecbfaea3a374f812b77890d203a81e6aab238d`, `d9af2f5efba391f612ea9f6183702756c3fa4732`, `d72499ddb490a6e6e61929b1f3b5d467308f7e48`, `c18e1f49a88c3b6a426171afeaf6f7691e8c5bde`, `b94f7ae1f5f66dfca7f73c7ee8d53afdcbf26ee5`, `d9af2f5efba391f612ea9f6183702756c3fa4732`, `2045c776de29534b86e9c4e0438f7d29f9b79e91`, `a92ca32b93eaf7f5a8e1fc8b2bbb01763867f6c1`]:
  - @band-store/core-flows@2.14.0
  - @band-store/framework@2.14.0
  - @band-store/promotion@2.14.0
  - @band-store/notification-sendgrid@2.14.0
  - @band-store/currency@2.14.0
  - @band-store/payment@2.14.0
  - @band-store/pricing@2.14.0
  - @band-store/region@2.14.0
  - @band-store/order@2.14.0
  - @band-store/store@2.14.0
  - @band-store/cart@2.14.0
  - @band-store/workflow-engine-inmemory@2.14.0
  - @band-store/workflow-engine-redis@2.14.0
  - @band-store/stock-location@2.14.0
  - @band-store/fulfillment@2.14.0
  - @band-store/inventory@2.14.0
  - @band-store/product@2.14.0
  - @band-store/settings@2.14.0
  - @band-store/caching-redis@2.14.0
  - @band-store/admin-bundler@2.14.0
  - @band-store/event-bus-redis@2.14.0
  - @band-store/draft-order@2.14.0
  - @band-store/analytics@2.14.0
  - @band-store/api-key@2.14.0
  - @band-store/auth@2.14.0
  - @band-store/cache-inmemory@2.14.0
  - @band-store/cache-redis@2.14.0
  - @band-store/caching@2.14.0
  - @band-store/customer@2.14.0
  - @band-store/event-bus-local@2.14.0
  - @band-store/file@2.14.0
  - @band-store/index@2.14.0
  - @band-store/link-modules@2.14.0
  - @band-store/locking@2.14.0
  - @band-store/notification@2.14.0
  - @band-store/analytics-local@2.14.0
  - @band-store/analytics-posthog@2.14.0
  - @band-store/auth-emailpass@2.14.0
  - @band-store/auth-github@2.14.0
  - @band-store/auth-google@2.14.0
  - @band-store/file-local@2.14.0
  - @band-store/file-s3@2.14.0
  - @band-store/fulfillment-manual@2.14.0
  - @band-store/locking-postgres@2.14.0
  - @band-store/locking-redis@2.14.0
  - @band-store/notification-local@2.14.0
  - @band-store/payment-stripe@2.14.0
  - @band-store/rbac@2.14.0
  - @band-store/sales-channel@2.14.0
  - @band-store/tax@2.14.0
  - @band-store/translation@2.14.0
  - @band-store/user@2.14.0
  - @band-store/telemetry@2.14.0

## 2.13.6

### Patch Changes

- #14935 `5b655f6d7c24323bd84dc1b684938725873a33ac` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,types): improve order timeline UI

- Updated dependencies [`19839a44d6551038890c41e02cdff7cf0b45e268`, `2b0cd5ff0ce00bf1de1d99632f1bda4073ac035d`, `6442b3274e51b97b14a43e5a0674dfee1cea1a49`]:
  - @band-store/core-flows@2.13.6
  - @band-store/admin-bundler@2.13.6
  - @band-store/framework@2.13.6
  - @band-store/locking-redis@2.13.6
  - @band-store/event-bus-redis@2.13.6
  - @band-store/draft-order@2.13.6
  - @band-store/analytics@2.13.6
  - @band-store/api-key@2.13.6
  - @band-store/auth@2.13.6
  - @band-store/cache-inmemory@2.13.6
  - @band-store/cache-redis@2.13.6
  - @band-store/caching@2.13.6
  - @band-store/cart@2.13.6
  - @band-store/currency@2.13.6
  - @band-store/customer@2.13.6
  - @band-store/event-bus-local@2.13.6
  - @band-store/file@2.13.6
  - @band-store/fulfillment@2.13.6
  - @band-store/index@2.13.6
  - @band-store/inventory@2.13.6
  - @band-store/link-modules@2.13.6
  - @band-store/locking@2.13.6
  - @band-store/notification@2.13.6
  - @band-store/order@2.13.6
  - @band-store/payment@2.13.6
  - @band-store/pricing@2.13.6
  - @band-store/product@2.13.6
  - @band-store/promotion@2.13.6
  - @band-store/analytics-local@2.13.6
  - @band-store/analytics-posthog@2.13.6
  - @band-store/auth-emailpass@2.13.6
  - @band-store/auth-github@2.13.6
  - @band-store/auth-google@2.13.6
  - @band-store/caching-redis@2.13.6
  - @band-store/file-local@2.13.6
  - @band-store/file-s3@2.13.6
  - @band-store/fulfillment-manual@2.13.6
  - @band-store/locking-postgres@2.13.6
  - @band-store/notification-local@2.13.6
  - @band-store/notification-sendgrid@2.13.6
  - @band-store/payment-stripe@2.13.6
  - @band-store/rbac@2.13.6
  - @band-store/region@2.13.6
  - @band-store/sales-channel@2.13.6
  - @band-store/settings@2.13.6
  - @band-store/stock-location@2.13.6
  - @band-store/store@2.13.6
  - @band-store/tax@2.13.6
  - @band-store/translation@2.13.6
  - @band-store/user@2.13.6
  - @band-store/workflow-engine-inmemory@2.13.6
  - @band-store/workflow-engine-redis@2.13.6
  - @band-store/telemetry@2.13.6

## 2.13.5

### Patch Changes

- #14898 `991e61fbda7d6096e2ce1b4f713cf55aee2e9404` Thanks [@sradevski](https://github.com/sradevski)! - Improved filtering support for workflow executions

- Updated dependencies [`5dbda9c14007e554720d5a2a640fc010ff54c696`, `f01da61c0d973d399bb6c3693bd06b01ee557df6`]:
  - @band-store/link-modules@2.13.5
  - @band-store/core-flows@2.13.5
  - @band-store/admin-bundler@2.13.5
  - @band-store/framework@2.13.5
  - @band-store/event-bus-redis@2.13.5
  - @band-store/draft-order@2.13.5
  - @band-store/analytics@2.13.5
  - @band-store/api-key@2.13.5
  - @band-store/auth@2.13.5
  - @band-store/cache-inmemory@2.13.5
  - @band-store/cache-redis@2.13.5
  - @band-store/caching@2.13.5
  - @band-store/cart@2.13.5
  - @band-store/currency@2.13.5
  - @band-store/customer@2.13.5
  - @band-store/event-bus-local@2.13.5
  - @band-store/file@2.13.5
  - @band-store/fulfillment@2.13.5
  - @band-store/index@2.13.5
  - @band-store/inventory@2.13.5
  - @band-store/locking@2.13.5
  - @band-store/notification@2.13.5
  - @band-store/order@2.13.5
  - @band-store/payment@2.13.5
  - @band-store/pricing@2.13.5
  - @band-store/product@2.13.5
  - @band-store/promotion@2.13.5
  - @band-store/analytics-local@2.13.5
  - @band-store/analytics-posthog@2.13.5
  - @band-store/auth-emailpass@2.13.5
  - @band-store/auth-github@2.13.5
  - @band-store/auth-google@2.13.5
  - @band-store/caching-redis@2.13.5
  - @band-store/file-local@2.13.5
  - @band-store/file-s3@2.13.5
  - @band-store/fulfillment-manual@2.13.5
  - @band-store/locking-postgres@2.13.5
  - @band-store/locking-redis@2.13.5
  - @band-store/notification-local@2.13.5
  - @band-store/notification-sendgrid@2.13.5
  - @band-store/payment-stripe@2.13.5
  - @band-store/rbac@2.13.5
  - @band-store/region@2.13.5
  - @band-store/sales-channel@2.13.5
  - @band-store/settings@2.13.5
  - @band-store/stock-location@2.13.5
  - @band-store/store@2.13.5
  - @band-store/tax@2.13.5
  - @band-store/translation@2.13.5
  - @band-store/user@2.13.5
  - @band-store/workflow-engine-inmemory@2.13.5
  - @band-store/workflow-engine-redis@2.13.5
  - @band-store/telemetry@2.13.5

## 2.13.4

### Patch Changes

- #14852 `4b21cc6b8564740818e7f51a42cae86cf86e7331` Thanks [@peterlgh7](https://github.com/peterlgh7)! - exit build with error if type generation fails

- Updated dependencies [`c191ea5ede6e9b35a2764093ed00057e200e800f`, `fea64dd5d70a5e5fe4e1ea201bbe8a4329ce8703`, `d07f70750362e6c78298aba673de4c9db96d3ad6`]:
  - @band-store/payment@2.13.4
  - @band-store/order@2.13.4
  - @band-store/core-flows@2.13.4
  - @band-store/draft-order@2.13.4
  - @band-store/admin-bundler@2.13.4
  - @band-store/analytics@2.13.4
  - @band-store/api-key@2.13.4
  - @band-store/auth@2.13.4
  - @band-store/caching@2.13.4
  - @band-store/cart@2.13.4
  - @band-store/currency@2.13.4
  - @band-store/customer@2.13.4
  - @band-store/file@2.13.4
  - @band-store/fulfillment@2.13.4
  - @band-store/index@2.13.4
  - @band-store/inventory@2.13.4
  - @band-store/link-modules@2.13.4
  - @band-store/locking@2.13.4
  - @band-store/notification@2.13.4
  - @band-store/pricing@2.13.4
  - @band-store/product@2.13.4
  - @band-store/promotion@2.13.4
  - @band-store/rbac@2.13.4
  - @band-store/region@2.13.4
  - @band-store/sales-channel@2.13.4
  - @band-store/settings@2.13.4
  - @band-store/stock-location@2.13.4
  - @band-store/store@2.13.4
  - @band-store/tax@2.13.4
  - @band-store/translation@2.13.4
  - @band-store/user@2.13.4
  - @band-store/workflow-engine-inmemory@2.13.4
  - @band-store/workflow-engine-redis@2.13.4
  - @band-store/framework@2.13.4
  - @band-store/telemetry@2.13.4
  - @band-store/cache-inmemory@2.13.4
  - @band-store/cache-redis@2.13.4
  - @band-store/event-bus-local@2.13.4
  - @band-store/event-bus-redis@2.13.4
  - @band-store/analytics-local@2.13.4
  - @band-store/analytics-posthog@2.13.4
  - @band-store/auth-emailpass@2.13.4
  - @band-store/auth-github@2.13.4
  - @band-store/auth-google@2.13.4
  - @band-store/caching-redis@2.13.4
  - @band-store/file-local@2.13.4
  - @band-store/file-s3@2.13.4
  - @band-store/fulfillment-manual@2.13.4
  - @band-store/locking-postgres@2.13.4
  - @band-store/locking-redis@2.13.4
  - @band-store/notification-local@2.13.4
  - @band-store/notification-sendgrid@2.13.4
  - @band-store/payment-stripe@2.13.4

## 2.13.3

### Patch Changes

- Updated dependencies [`dbaae9630d26a0806751d5614beadef3e0b4bf07`, `5ccd523b41efaae2f2aaa6d5833b5ce88558d37b`]:
  - @band-store/framework@2.13.3
  - @band-store/core-flows@2.13.3
  - @band-store/analytics@2.13.3
  - @band-store/api-key@2.13.3
  - @band-store/auth@2.13.3
  - @band-store/cache-inmemory@2.13.3
  - @band-store/cache-redis@2.13.3
  - @band-store/caching@2.13.3
  - @band-store/cart@2.13.3
  - @band-store/currency@2.13.3
  - @band-store/customer@2.13.3
  - @band-store/event-bus-local@2.13.3
  - @band-store/event-bus-redis@2.13.3
  - @band-store/file@2.13.3
  - @band-store/fulfillment@2.13.3
  - @band-store/index@2.13.3
  - @band-store/inventory@2.13.3
  - @band-store/link-modules@2.13.3
  - @band-store/locking@2.13.3
  - @band-store/notification@2.13.3
  - @band-store/order@2.13.3
  - @band-store/payment@2.13.3
  - @band-store/pricing@2.13.3
  - @band-store/product@2.13.3
  - @band-store/promotion@2.13.3
  - @band-store/analytics-local@2.13.3
  - @band-store/analytics-posthog@2.13.3
  - @band-store/auth-emailpass@2.13.3
  - @band-store/auth-github@2.13.3
  - @band-store/auth-google@2.13.3
  - @band-store/caching-redis@2.13.3
  - @band-store/file-local@2.13.3
  - @band-store/file-s3@2.13.3
  - @band-store/fulfillment-manual@2.13.3
  - @band-store/locking-postgres@2.13.3
  - @band-store/locking-redis@2.13.3
  - @band-store/notification-local@2.13.3
  - @band-store/notification-sendgrid@2.13.3
  - @band-store/payment-stripe@2.13.3
  - @band-store/rbac@2.13.3
  - @band-store/region@2.13.3
  - @band-store/sales-channel@2.13.3
  - @band-store/settings@2.13.3
  - @band-store/stock-location@2.13.3
  - @band-store/store@2.13.3
  - @band-store/tax@2.13.3
  - @band-store/translation@2.13.3
  - @band-store/user@2.13.3
  - @band-store/workflow-engine-inmemory@2.13.3
  - @band-store/workflow-engine-redis@2.13.3
  - @band-store/draft-order@2.13.3
  - @band-store/admin-bundler@2.13.3
  - @band-store/telemetry@2.13.3

## 2.13.2

### Patch Changes

- #14660 `05262c0197bcc3c9cec89a3d95863916dba47af3` Thanks [@Fadyy22](https://github.com/Fadyy22)! - chore(core-flows,Band Store): Pass `created_by` to `createOrderShipmentWorkflow` in create order shipment admin endpoint and pass `marked_shipped_by` to `createShipmentWorkflow`

- #14146 `d2ce360875bafc3fc0c367384b9b631e77130726` Thanks [@adevinwild](https://github.com/adevinwild)! - Introduce filtering orders by total price on the API and Admin UI

- #14557 `42322f44eaaf997e9ab7af2ca1e8621a08a8ca01` Thanks [@bouazzaayyoub](https://github.com/bouazzaayyoub)! - feat(Band Store,types): add metadata field to AdminUpsertStockLocationAddress and validators

- #14053 `074a3ea05f2b86ce72a5e668a7616768e81293dd` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): resolve user_id from user linked to secret key on draft order edit with api-key auth

- #14676 `1b5e5739b1d553d230b5602092f4c809479cf572` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(Band Store): add role users endpoint

- #14663 `dc2b87810254ccabd382ececca0ae771cb9e64be` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(Band Store): admin list policies

- Updated dependencies [`05262c0197bcc3c9cec89a3d95863916dba47af3`, `f37f029799cad7ee0337aeab625df5e272de2363`, `ff80a437e3fed60a48698c21b2cb325cd75b1f07`, `09a80ab97aad62b65320c745899eb8517d256b40`, `29d3dee13700d36a70aa55b8f2a01a5cbc0b42d0`, `7aca778ae56069371f5d26a757d3b2276d524776`, `7a27e8ad8d7771eeecd1fb648a458f56abab71f9`, `77d899e135ed75668ca7d7b01a8ed4f0c1fe0ac8`, `ec8f2566aa2547921f68d5aeba8d11ec4bcea9a2`, `fe529f214a789b7e94fd0438c631d9f6b5cf5290`, `63b7d5f1bee265959db73236c509dc7c9d0c1525`, `2b795b6cc1ca1b0787f014784c9cbf06d6ab6e96`]:
  - @band-store/core-flows@2.13.2
  - @band-store/admin-bundler@2.13.2
  - @band-store/payment-stripe@2.13.2
  - @band-store/order@2.13.2
  - @band-store/framework@2.13.2
  - @band-store/event-bus-redis@2.13.2
  - @band-store/draft-order@2.13.2
  - @band-store/analytics@2.13.2
  - @band-store/api-key@2.13.2
  - @band-store/auth@2.13.2
  - @band-store/cache-inmemory@2.13.2
  - @band-store/cache-redis@2.13.2
  - @band-store/caching@2.13.2
  - @band-store/cart@2.13.2
  - @band-store/currency@2.13.2
  - @band-store/customer@2.13.2
  - @band-store/event-bus-local@2.13.2
  - @band-store/file@2.13.2
  - @band-store/fulfillment@2.13.2
  - @band-store/index@2.13.2
  - @band-store/inventory@2.13.2
  - @band-store/link-modules@2.13.2
  - @band-store/locking@2.13.2
  - @band-store/notification@2.13.2
  - @band-store/payment@2.13.2
  - @band-store/pricing@2.13.2
  - @band-store/product@2.13.2
  - @band-store/promotion@2.13.2
  - @band-store/analytics-local@2.13.2
  - @band-store/analytics-posthog@2.13.2
  - @band-store/auth-emailpass@2.13.2
  - @band-store/auth-github@2.13.2
  - @band-store/auth-google@2.13.2
  - @band-store/caching-redis@2.13.2
  - @band-store/file-local@2.13.2
  - @band-store/file-s3@2.13.2
  - @band-store/fulfillment-manual@2.13.2
  - @band-store/locking-postgres@2.13.2
  - @band-store/locking-redis@2.13.2
  - @band-store/notification-local@2.13.2
  - @band-store/notification-sendgrid@2.13.2
  - @band-store/rbac@2.13.2
  - @band-store/region@2.13.2
  - @band-store/sales-channel@2.13.2
  - @band-store/settings@2.13.2
  - @band-store/stock-location@2.13.2
  - @band-store/store@2.13.2
  - @band-store/tax@2.13.2
  - @band-store/translation@2.13.2
  - @band-store/user@2.13.2
  - @band-store/workflow-engine-inmemory@2.13.2
  - @band-store/workflow-engine-redis@2.13.2
  - @band-store/telemetry@2.13.2

## 2.13.1

### Patch Changes

- #14612 `de08ea732b599374a071c016fa8af2e4f3e31075` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): use http type for batch translation settings request

- Updated dependencies [`4021571067d33fdd415456fc538ee0035ccd0753`, `2e2fad6c62a51373f97adcd06941f9182657d9d0`]:
  - @band-store/order@2.13.1
  - @band-store/core-flows@2.13.1
  - @band-store/analytics@2.13.1
  - @band-store/api-key@2.13.1
  - @band-store/auth@2.13.1
  - @band-store/caching@2.13.1
  - @band-store/cart@2.13.1
  - @band-store/currency@2.13.1
  - @band-store/customer@2.13.1
  - @band-store/file@2.13.1
  - @band-store/fulfillment@2.13.1
  - @band-store/index@2.13.1
  - @band-store/inventory@2.13.1
  - @band-store/link-modules@2.13.1
  - @band-store/locking@2.13.1
  - @band-store/notification@2.13.1
  - @band-store/payment@2.13.1
  - @band-store/pricing@2.13.1
  - @band-store/product@2.13.1
  - @band-store/promotion@2.13.1
  - @band-store/region@2.13.1
  - @band-store/sales-channel@2.13.1
  - @band-store/settings@2.13.1
  - @band-store/stock-location@2.13.1
  - @band-store/store@2.13.1
  - @band-store/tax@2.13.1
  - @band-store/translation@2.13.1
  - @band-store/user@2.13.1
  - @band-store/workflow-engine-inmemory@2.13.1
  - @band-store/workflow-engine-redis@2.13.1
  - @band-store/draft-order@2.13.1
  - @band-store/admin-bundler@2.13.1
  - @band-store/framework@2.13.1
  - @band-store/telemetry@2.13.1
  - @band-store/cache-inmemory@2.13.1
  - @band-store/cache-redis@2.13.1
  - @band-store/event-bus-local@2.13.1
  - @band-store/event-bus-redis@2.13.1
  - @band-store/analytics-local@2.13.1
  - @band-store/analytics-posthog@2.13.1
  - @band-store/auth-emailpass@2.13.1
  - @band-store/auth-github@2.13.1
  - @band-store/auth-google@2.13.1
  - @band-store/caching-redis@2.13.1
  - @band-store/file-local@2.13.1
  - @band-store/file-s3@2.13.1
  - @band-store/fulfillment-manual@2.13.1
  - @band-store/locking-postgres@2.13.1
  - @band-store/locking-redis@2.13.1
  - @band-store/notification-local@2.13.1
  - @band-store/notification-sendgrid@2.13.1
  - @band-store/payment-stripe@2.13.1

## 2.13.0

### Minor Changes

- `a31e72c31c5235240cead2d04e39e5927688eec7` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor bump

### Patch Changes

- Updated dependencies [`a31e72c31c5235240cead2d04e39e5927688eec7`, `4a33c44f79808a3b5b907e2b053427d2ba6d7015`]:
  - @band-store/admin-bundler@2.13.0
  - @band-store/core-flows@2.13.0
  - @band-store/framework@2.13.0
  - @band-store/telemetry@2.13.0
  - @band-store/analytics@2.13.0
  - @band-store/api-key@2.13.0
  - @band-store/auth@2.13.0
  - @band-store/cache-inmemory@2.13.0
  - @band-store/cache-redis@2.13.0
  - @band-store/caching@2.13.0
  - @band-store/cart@2.13.0
  - @band-store/currency@2.13.0
  - @band-store/customer@2.13.0
  - @band-store/event-bus-local@2.13.0
  - @band-store/event-bus-redis@2.13.0
  - @band-store/file@2.13.0
  - @band-store/fulfillment@2.13.0
  - @band-store/index@2.13.0
  - @band-store/inventory@2.13.0
  - @band-store/link-modules@2.13.0
  - @band-store/locking@2.13.0
  - @band-store/notification@2.13.0
  - @band-store/order@2.13.0
  - @band-store/payment@2.13.0
  - @band-store/pricing@2.13.0
  - @band-store/product@2.13.0
  - @band-store/promotion@2.13.0
  - @band-store/analytics-local@2.13.0
  - @band-store/analytics-posthog@2.13.0
  - @band-store/auth-emailpass@2.13.0
  - @band-store/auth-github@2.13.0
  - @band-store/auth-google@2.13.0
  - @band-store/caching-redis@2.13.0
  - @band-store/file-local@2.13.0
  - @band-store/file-s3@2.13.0
  - @band-store/fulfillment-manual@2.13.0
  - @band-store/locking-postgres@2.13.0
  - @band-store/locking-redis@2.13.0
  - @band-store/notification-local@2.13.0
  - @band-store/notification-sendgrid@2.13.0
  - @band-store/payment-stripe@2.13.0
  - @band-store/region@2.13.0
  - @band-store/sales-channel@2.13.0
  - @band-store/settings@2.13.0
  - @band-store/stock-location@2.13.0
  - @band-store/store@2.13.0
  - @band-store/tax@2.13.0
  - @band-store/translation@2.13.0
  - @band-store/user@2.13.0
  - @band-store/workflow-engine-inmemory@2.13.0
  - @band-store/workflow-engine-redis@2.13.0
  - @band-store/draft-order@2.13.0

## 2.12.6

### Patch Changes

- #14541 `a9b5797e2de093e26286808876262b724e26671a` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,translation,js-sdk,Band Store,types): Translation settings management UI

- #14536 `d60ea7268a00f386f803f0f9e6ffeec4bced50bf` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(translation,fulfillment,customer,product,region,tax,core-flows,Band Store,types): Implement dynamic translation settings management

- #14540 `8890f284705a4843a57a3800820208f593689a2a` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Prevent build command from throwing on missing config

- #14359 `cec8b8e428131d4743d6da98cd5fa0974b8ab9e1` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,types,utils,Band Store): Translate tax lines

- #14441 `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(deps,framework): add zod as framework dependency

- Updated dependencies [`d5cea0e0c84539027e20cefc2007d53990933175`, `13476988763368b3b333fa5bc3f613e8eb174fdf`, `514cc329f8fccd05a9497bf03fb27ba2de0265f4`, `e91ce2ee4b0d15948d4021b2d74c1c9744ef0ae2`, `dfb27a638d913916ee534ecb0a06ae30f6f8a9de`, `a9b5797e2de093e26286808876262b724e26671a`, `d60ea7268a00f386f803f0f9e6ffeec4bced50bf`, `5c695b5d499519d153be7c925e865c227301097b`, `8890f284705a4843a57a3800820208f593689a2a`, `733026f96c23f01d1ceb2fb09f88aa2b9bb65841`, `cec8b8e428131d4743d6da98cd5fa0974b8ab9e1`, `28fae96ceed68e2c15c3f27316c5b8601f06c478`, `3751b10337c056c3a61a4726046ebf4c31a3530b`, [`6cbbd033e4efdae5ea2a758b507bcc1a0fef26c2`](undefined), `cbc9f3d059a65cc5ee26595e5cbccf7f05781e41`, `7307a5e63fdf8ed6f0ff201a0383f0a0bbfc7002`, `b615b71a8e4e273018a09528a8b61116fca6de8b`, `d5cea0e0c84539027e20cefc2007d53990933175`, `3df466dadde91b24f52504097c07e1ced4b2b8ff`, `89e6e3e5cbe96f1f64e2cdb33cc2e0d6a221f7a2`, `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b`]:
  - @band-store/analytics-posthog@2.12.6
  - @band-store/event-bus-redis@2.12.6
  - @band-store/draft-order@2.12.6
  - @band-store/framework@2.12.6
  - @band-store/translation@2.12.6
  - @band-store/core-flows@2.12.6
  - @band-store/fulfillment@2.12.6
  - @band-store/customer@2.12.6
  - @band-store/product@2.12.6
  - @band-store/region@2.12.6
  - @band-store/tax@2.12.6
  - @band-store/order@2.12.6
  - @band-store/analytics@2.12.6
  - @band-store/api-key@2.12.6
  - @band-store/auth@2.12.6
  - @band-store/cache-inmemory@2.12.6
  - @band-store/cache-redis@2.12.6
  - @band-store/caching@2.12.6
  - @band-store/cart@2.12.6
  - @band-store/currency@2.12.6
  - @band-store/event-bus-local@2.12.6
  - @band-store/file@2.12.6
  - @band-store/index@2.12.6
  - @band-store/inventory@2.12.6
  - @band-store/link-modules@2.12.6
  - @band-store/locking@2.12.6
  - @band-store/notification@2.12.6
  - @band-store/payment@2.12.6
  - @band-store/pricing@2.12.6
  - @band-store/promotion@2.12.6
  - @band-store/analytics-local@2.12.6
  - @band-store/auth-emailpass@2.12.6
  - @band-store/auth-github@2.12.6
  - @band-store/auth-google@2.12.6
  - @band-store/caching-redis@2.12.6
  - @band-store/file-local@2.12.6
  - @band-store/file-s3@2.12.6
  - @band-store/fulfillment-manual@2.12.6
  - @band-store/locking-postgres@2.12.6
  - @band-store/locking-redis@2.12.6
  - @band-store/notification-local@2.12.6
  - @band-store/notification-sendgrid@2.12.6
  - @band-store/payment-stripe@2.12.6
  - @band-store/sales-channel@2.12.6
  - @band-store/settings@2.12.6
  - @band-store/stock-location@2.12.6
  - @band-store/store@2.12.6
  - @band-store/user@2.12.6
  - @band-store/workflow-engine-inmemory@2.12.6
  - @band-store/workflow-engine-redis@2.12.6
  - @band-store/admin-bundler@2.12.6
  - @band-store/telemetry@2.12.6

## 2.12.5

### Patch Changes

- #14502 `233ec261be200fac83002415aa7c0df082339a3f` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/add schema only flag

- Updated dependencies [`bb599a26deed6d5b98e6ce6308c447dca5b90f10`, `568742826fae7240b33e6cc7356a12c3715d05b1`, `233ec261be200fac83002415aa7c0df082339a3f`]:
  - @band-store/link-modules@2.12.5
  - @band-store/analytics@2.12.5
  - @band-store/auth@2.12.5
  - @band-store/cache-redis@2.12.5
  - @band-store/caching@2.12.5
  - @band-store/event-bus-redis@2.12.5
  - @band-store/file@2.12.5
  - @band-store/locking@2.12.5
  - @band-store/notification@2.12.5
  - @band-store/payment@2.12.5
  - @band-store/workflow-engine-redis@2.12.5
  - @band-store/framework@2.12.5
  - @band-store/admin-bundler@2.12.5
  - @band-store/draft-order@2.12.5
  - @band-store/core-flows@2.12.5
  - @band-store/api-key@2.12.5
  - @band-store/cache-inmemory@2.12.5
  - @band-store/cart@2.12.5
  - @band-store/currency@2.12.5
  - @band-store/customer@2.12.5
  - @band-store/event-bus-local@2.12.5
  - @band-store/fulfillment@2.12.5
  - @band-store/index@2.12.5
  - @band-store/inventory@2.12.5
  - @band-store/order@2.12.5
  - @band-store/pricing@2.12.5
  - @band-store/product@2.12.5
  - @band-store/promotion@2.12.5
  - @band-store/analytics-local@2.12.5
  - @band-store/analytics-posthog@2.12.5
  - @band-store/auth-emailpass@2.12.5
  - @band-store/auth-github@2.12.5
  - @band-store/auth-google@2.12.5
  - @band-store/caching-redis@2.12.5
  - @band-store/file-local@2.12.5
  - @band-store/file-s3@2.12.5
  - @band-store/fulfillment-manual@2.12.5
  - @band-store/locking-postgres@2.12.5
  - @band-store/locking-redis@2.12.5
  - @band-store/notification-local@2.12.5
  - @band-store/notification-sendgrid@2.12.5
  - @band-store/payment-stripe@2.12.5
  - @band-store/region@2.12.5
  - @band-store/sales-channel@2.12.5
  - @band-store/settings@2.12.5
  - @band-store/stock-location@2.12.5
  - @band-store/store@2.12.5
  - @band-store/tax@2.12.5
  - @band-store/translation@2.12.5
  - @band-store/user@2.12.5
  - @band-store/workflow-engine-inmemory@2.12.5
  - @band-store/telemetry@2.12.5

## 2.12.4

### Patch Changes

- #14454 `0ffd79010953315494c1b2ba1def477b7b1d9e4b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(translation): Add support for locale to the graph query

- #14381 `6380c1fdf42d023f7a103260ba204efbe37d5c0f` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): allow passing null to cart API routes

- #14448 `9cad05c8df1c3f2591da46b5efa415b4850e0602` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(Band Store): add missing fields and filters to product variants endpoint

- #14355 `b21a599d118f126e64d2993d46ba60f4a4e94545` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Translation settings + user configuration + js/admin

- #14337 `181d5fa67122e4e5f38b91f6b716d35f2d08a204` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Auto generated types generation upon build

- #14390 `d347e369ce555064e24f2dc3cd93b9e4e73a006d` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(Band Store,framework): hmr file watch

- #14417 `43305a562cfba914654da056b0a7e03c40849678` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,utils,core-flows): add reset password metdata

- #14342 `92d240d7493ed350aed8b8af80c1dfc62b07a88c` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): fix type of product variant request param

- Updated dependencies [`5f807ee657c81178f1bf04f695b20ebdb996762c`, `a464e9d907e30bca86a1e8677f8ebf22c38638a2`, `60f68ff492bc98013fc2f6e0b0b252182a1ee59c`, `9d2c78db4eac010d60b8943e769e68d506cfd529`, `0ffd79010953315494c1b2ba1def477b7b1d9e4b`, `bf4cc12545edc5bf249edc6ecec115c5f7a2b31f`, `c0ec54fc15fece373ac77f547706ab85eb5bc844`, `0277062fecc278e630bf2110761a545339f6b9fe`, `fb6a6b52fa36128d9a03f09ec168744ded881308`, `b21a599d118f126e64d2993d46ba60f4a4e94545`, `181d5fa67122e4e5f38b91f6b716d35f2d08a204`, `001923da2bbebb3d42373f0f66e517830d9c0187`, `d347e369ce555064e24f2dc3cd93b9e4e73a006d`, `8055a79c5268528261c88d5f6f245d1003d87a6d`, `1c89acc536b9b15a7a2984a34783cf3b08db6317`, `43305a562cfba914654da056b0a7e03c40849678`, `242f1d7d7f96ec27f3d2c9aafa8324f2ee9b28fd`, `11de7e3e3449f3a93724aaeed770a66840ffcaf9`, `7e3ed913a6008a25974634d489f9339c40066125`]:
  - @band-store/order@2.12.4
  - @band-store/core-flows@2.12.4
  - @band-store/translation@2.12.4
  - @band-store/framework@2.12.4
  - @band-store/auth@2.12.4
  - @band-store/draft-order@2.12.4
  - @band-store/admin-bundler@2.12.4
  - @band-store/analytics@2.12.4
  - @band-store/api-key@2.12.4
  - @band-store/cache-inmemory@2.12.4
  - @band-store/cache-redis@2.12.4
  - @band-store/caching@2.12.4
  - @band-store/cart@2.12.4
  - @band-store/currency@2.12.4
  - @band-store/customer@2.12.4
  - @band-store/event-bus-local@2.12.4
  - @band-store/event-bus-redis@2.12.4
  - @band-store/file@2.12.4
  - @band-store/fulfillment@2.12.4
  - @band-store/index@2.12.4
  - @band-store/inventory@2.12.4
  - @band-store/link-modules@2.12.4
  - @band-store/locking@2.12.4
  - @band-store/notification@2.12.4
  - @band-store/payment@2.12.4
  - @band-store/pricing@2.12.4
  - @band-store/product@2.12.4
  - @band-store/promotion@2.12.4
  - @band-store/analytics-local@2.12.4
  - @band-store/analytics-posthog@2.12.4
  - @band-store/auth-emailpass@2.12.4
  - @band-store/auth-github@2.12.4
  - @band-store/auth-google@2.12.4
  - @band-store/caching-redis@2.12.4
  - @band-store/file-local@2.12.4
  - @band-store/file-s3@2.12.4
  - @band-store/fulfillment-manual@2.12.4
  - @band-store/locking-postgres@2.12.4
  - @band-store/locking-redis@2.12.4
  - @band-store/notification-local@2.12.4
  - @band-store/notification-sendgrid@2.12.4
  - @band-store/payment-stripe@2.12.4
  - @band-store/region@2.12.4
  - @band-store/sales-channel@2.12.4
  - @band-store/settings@2.12.4
  - @band-store/stock-location@2.12.4
  - @band-store/store@2.12.4
  - @band-store/tax@2.12.4
  - @band-store/user@2.12.4
  - @band-store/workflow-engine-inmemory@2.12.4
  - @band-store/workflow-engine-redis@2.12.4
  - @band-store/telemetry@2.12.4

## 2.12.3

### Patch Changes

- #14314 `accb778039a52fae8eefbada77044c527b136114` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(js-sdk,types,Band Store): add list locales store method to JS SDK

- #14305 `7b4dda5a179c78de5e099231ec407836db4c8dbd` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): apply locale middleware to all store routes

- #14300 `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(): Remove default_locale from StoreLocale

- #14319 `6815b3d7dbad2931895ba81c6de19208427d9c50` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Apply translation feature flag broaderly

- #14311 `e94e1a4676d68950df76a496a30a9acc61e4b799` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add product type and collection translation support

- #14299 `ba6ed8d9dd22be8646d311d9531c65aea1b7986a` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Translation statistics

- #14138 `70929ecac3e5610d90d47a40a517eac3cf3173a4` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(dashboard,Band Store,types): improve performance for price list prices retrieval

- #14267 `f13c23a4b709e31f9b2d42e98acc6e342c494403` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Sync order translations

- #14307 `0f1566c64456a6f29a7bfb1dda5a7c470a84ace7` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add support for store locales end point

- Updated dependencies [`b3cb904e9bce3bfad649e500a9e1be0c9bff0e1a`, `31a057558c0ec6ff7233489a28edc1fda0ec5375`, `e199f1eb01ed8e25e0864f77580e75f19412d6c5`, `7b4dda5a179c78de5e099231ec407836db4c8dbd`, `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29`, `e94e1a4676d68950df76a496a30a9acc61e4b799`, `dd3eb10b1afd0659a6095b6a642d0bf5322285cd`, `f5ec359c4c4c81c007d57069df32ad6cc1f31c5d`, `ba6ed8d9dd22be8646d311d9531c65aea1b7986a`, `1743ed7f04585c597c9398a99899817b11310463`, `b5edbb994084b6095ee523e018b835f19e73df3a`, `f13c23a4b709e31f9b2d42e98acc6e342c494403`, `8c29d85f0f7fdd27b67974d26e3b774e3270e5a9`, `c8a7122ba918751b215dc0b19cf9b09b2c011ab8`, `d813fc4ff91e98b475a4eae11780ddc00caf66a8`, `0f1566c64456a6f29a7bfb1dda5a7c470a84ace7`]:
  - @band-store/core-flows@2.12.3
  - @band-store/index@2.12.3
  - @band-store/framework@2.12.3
  - @band-store/store@2.12.3
  - @band-store/translation@2.12.3
  - @band-store/link-modules@2.12.3
  - @band-store/pricing@2.12.3
  - @band-store/order@2.12.3
  - @band-store/cart@2.12.3
  - @band-store/fulfillment@2.12.3
  - @band-store/notification@2.12.3
  - @band-store/payment@2.12.3
  - @band-store/product@2.12.3
  - @band-store/promotion@2.12.3
  - @band-store/admin-bundler@2.12.3
  - @band-store/draft-order@2.12.3
  - @band-store/analytics@2.12.3
  - @band-store/api-key@2.12.3
  - @band-store/auth@2.12.3
  - @band-store/cache-inmemory@2.12.3
  - @band-store/cache-redis@2.12.3
  - @band-store/caching@2.12.3
  - @band-store/currency@2.12.3
  - @band-store/customer@2.12.3
  - @band-store/event-bus-local@2.12.3
  - @band-store/event-bus-redis@2.12.3
  - @band-store/file@2.12.3
  - @band-store/inventory@2.12.3
  - @band-store/locking@2.12.3
  - @band-store/analytics-local@2.12.3
  - @band-store/analytics-posthog@2.12.3
  - @band-store/auth-emailpass@2.12.3
  - @band-store/auth-github@2.12.3
  - @band-store/auth-google@2.12.3
  - @band-store/caching-redis@2.12.3
  - @band-store/file-local@2.12.3
  - @band-store/file-s3@2.12.3
  - @band-store/fulfillment-manual@2.12.3
  - @band-store/locking-postgres@2.12.3
  - @band-store/locking-redis@2.12.3
  - @band-store/notification-local@2.12.3
  - @band-store/notification-sendgrid@2.12.3
  - @band-store/payment-stripe@2.12.3
  - @band-store/region@2.12.3
  - @band-store/sales-channel@2.12.3
  - @band-store/settings@2.12.3
  - @band-store/stock-location@2.12.3
  - @band-store/tax@2.12.3
  - @band-store/user@2.12.3
  - @band-store/workflow-engine-inmemory@2.12.3
  - @band-store/workflow-engine-redis@2.12.3
  - @band-store/telemetry@2.12.3

## 2.12.2

### Patch Changes

- #14226 `e4877616c38777f583fe0b58bb10d1c7cf41c0b3` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): sync cart translation synced

- #14074 `fe49b567d6d55ae224095c06c710d31d40887653` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Backend HMR (expriemental)

- #14202 `24c469d2173e814a567e18454f5cc5c81f5dcc6a` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Run some commands in server mode only

- #13841 `fdc2b722d91f446499123d71386e64d9da9265eb` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): Allow 'id' in shipping_address and billing_address in validator of store udpate cart route
  fix(core-flows): Update addresses nested fields when 'id' is provided in payload for update-carts step

- #14262 `356283c359e5c30e0d31e6c6fd0fb8e16c025b78` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Accept an extra agument 'all-or-nothing' on the migrate command

- #14266 `dd74ce34ba4e273719d1205a2ec6d76f06c7c94e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Add translations/locale integration tests and fix locale end…

- #14004 `5b7e3c0e7649a3a61b0a4fe796f37e5f7fbe9a3a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(link-modules): ignore duplicates link creation

- #14238 `4de555b546c33c67653a211987aca5f80341e637` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): use customer query config on delete address route

- Updated dependencies [`6176f93ac5ad403dd5fb733d6d22632747ccfca3`, `9f7846ae0babbad39947a1f33d236bff8b5098d0`, `e4877616c38777f583fe0b58bb10d1c7cf41c0b3`, `a78f68fa46dceb8e201fe60e770bd9ea654390d8`, `fe49b567d6d55ae224095c06c710d31d40887653`, `842c0f500721e08d448b6c5c80a725072106ccff`, `bca145bdbe674a73731f1672047ca44d426a37c1`, `6dc0b8bed84a330c1c24f4f1331f1ed078430a47`, `bff0142e7a0d65c9204864b04a28cada2caaa894`, `fdc2b722d91f446499123d71386e64d9da9265eb`, `356283c359e5c30e0d31e6c6fd0fb8e16c025b78`, `b7adfb225b4e81bd388c01afe254e2de140266b9`, `144f0f4e2ef4bf27e0e3fc48dd7d79bb6fbedef9`, `8bd1d22765edef3b3d2ff31c8f8935049d8b280a`, `5b7e3c0e7649a3a61b0a4fe796f37e5f7fbe9a3a`, `fea3d4ec49c3a7f7eb7d66bd58499e55ae9ec648`, `d7398736e84cfab77db70a8eddf832bb64e89fe5`, `9852a7c74d3c27d38b60f865061fd39bc0c46911`]:
  - @band-store/order@2.12.2
  - @band-store/framework@2.12.2
  - @band-store/cart@2.12.2
  - @band-store/core-flows@2.12.2
  - @band-store/event-bus-local@2.12.2
  - @band-store/product@2.12.2
  - @band-store/customer@2.12.2
  - @band-store/promotion@2.12.2
  - @band-store/file-s3@2.12.2
  - @band-store/event-bus-redis@2.12.2
  - @band-store/workflow-engine-redis@2.12.2
  - @band-store/link-modules@2.12.2
  - @band-store/admin-bundler@2.12.2
  - @band-store/analytics@2.12.2
  - @band-store/api-key@2.12.2
  - @band-store/auth@2.12.2
  - @band-store/cache-inmemory@2.12.2
  - @band-store/cache-redis@2.12.2
  - @band-store/caching@2.12.2
  - @band-store/currency@2.12.2
  - @band-store/file@2.12.2
  - @band-store/fulfillment@2.12.2
  - @band-store/index@2.12.2
  - @band-store/inventory@2.12.2
  - @band-store/locking@2.12.2
  - @band-store/notification@2.12.2
  - @band-store/payment@2.12.2
  - @band-store/pricing@2.12.2
  - @band-store/analytics-local@2.12.2
  - @band-store/analytics-posthog@2.12.2
  - @band-store/auth-emailpass@2.12.2
  - @band-store/auth-github@2.12.2
  - @band-store/auth-google@2.12.2
  - @band-store/caching-redis@2.12.2
  - @band-store/file-local@2.12.2
  - @band-store/fulfillment-manual@2.12.2
  - @band-store/locking-postgres@2.12.2
  - @band-store/locking-redis@2.12.2
  - @band-store/notification-local@2.12.2
  - @band-store/notification-sendgrid@2.12.2
  - @band-store/payment-stripe@2.12.2
  - @band-store/region@2.12.2
  - @band-store/sales-channel@2.12.2
  - @band-store/settings@2.12.2
  - @band-store/stock-location@2.12.2
  - @band-store/store@2.12.2
  - @band-store/tax@2.12.2
  - @band-store/translation@2.12.2
  - @band-store/user@2.12.2
  - @band-store/workflow-engine-inmemory@2.12.2
  - @band-store/draft-order@2.12.2
  - @band-store/telemetry@2.12.2

## 2.12.1

### Patch Changes

- #14196 `391d8dc6cd50c79b678059fdeb7774a72e243143` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): event emitting

- Updated dependencies [`ef162f8b5ff32c9ce779119eb8eabffea62655be`]:
  - @band-store/order@2.12.1
  - @band-store/framework@2.12.1
  - @band-store/analytics@2.12.1
  - @band-store/api-key@2.12.1
  - @band-store/auth@2.12.1
  - @band-store/caching@2.12.1
  - @band-store/cart@2.12.1
  - @band-store/currency@2.12.1
  - @band-store/customer@2.12.1
  - @band-store/file@2.12.1
  - @band-store/fulfillment@2.12.1
  - @band-store/index@2.12.1
  - @band-store/inventory@2.12.1
  - @band-store/link-modules@2.12.1
  - @band-store/locking@2.12.1
  - @band-store/notification@2.12.1
  - @band-store/payment@2.12.1
  - @band-store/pricing@2.12.1
  - @band-store/product@2.12.1
  - @band-store/promotion@2.12.1
  - @band-store/region@2.12.1
  - @band-store/sales-channel@2.12.1
  - @band-store/settings@2.12.1
  - @band-store/stock-location@2.12.1
  - @band-store/store@2.12.1
  - @band-store/tax@2.12.1
  - @band-store/user@2.12.1
  - @band-store/workflow-engine-inmemory@2.12.1
  - @band-store/workflow-engine-redis@2.12.1
  - @band-store/draft-order@2.12.1
  - @band-store/core-flows@2.12.1
  - @band-store/cache-inmemory@2.12.1
  - @band-store/cache-redis@2.12.1
  - @band-store/event-bus-local@2.12.1
  - @band-store/event-bus-redis@2.12.1
  - @band-store/analytics-local@2.12.1
  - @band-store/analytics-posthog@2.12.1
  - @band-store/auth-emailpass@2.12.1
  - @band-store/auth-github@2.12.1
  - @band-store/auth-google@2.12.1
  - @band-store/caching-redis@2.12.1
  - @band-store/file-local@2.12.1
  - @band-store/file-s3@2.12.1
  - @band-store/fulfillment-manual@2.12.1
  - @band-store/locking-postgres@2.12.1
  - @band-store/locking-redis@2.12.1
  - @band-store/notification-local@2.12.1
  - @band-store/notification-sendgrid@2.12.1
  - @band-store/payment-stripe@2.12.1
  - @band-store/admin-bundler@2.12.1
  - @band-store/telemetry@2.12.1

## 2.12.0

### Patch Changes

- #13977 `9fdc00350a4aa006e4bfc3eddcc499737f18bdf3` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Lock process payment to prevent ingesting payment processing t…

- #14145 `bbf294fc31ac12d3dcdd1687340e58574fb4cfea` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Update Band Store exec worker mode

- #13960 `6b4f2c1d3282501fce5b9a4f35bbcecf8a18fe93` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(Band Store): allow users deletion

- #14023 `7e3eb6e41316d7b04d32bc7186ed0c78de1aa539` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: cleanup/improve bootstrap

- #14066 `32eaa9dd81a58e9208cce700b0087d14eec8cd5c` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): avoid throwing on error on set step failure endpoint

- #13974 `aae92d5447c067fce9889403da30f3abcdf5be23` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(Band Store): fix query http type parameter for get claim route

- #14082 `1cfc88ee5530d1d45dc583412234d86d6fe7a777` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve product list when there is a single sales channel

- #14169 `00aa2c13bc37223029e40b38f3e2bedd8ed1e816` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(js-sdk,types,Band Store): add HTTP types for update order change API route

- #13760 `536a3f802c92960b1eab48c37db25a8c542fd231` Thanks [@fPolic](https://github.com/fPolic)! - feat: promotion usage limit

- #14128 `5da51064d7936c6d7a459cfa8b34eada65163e03` Thanks [@fPolic](https://github.com/fPolic)! - feat: carry over promotions toggle on exchanges

- #13997 `4bbf0d23674856f2d9fd0a9d137a478bc90b4cdb` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): preprocess `version` as number in AdminGetOrdersOrderParams validator

- #14024 `6746fecd727823b233a90edb1819d08555124464` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore/order custom display

- Updated dependencies [`83dd1b616a9e78810001645bb815347cacc5b4d1`, `9fdc00350a4aa006e4bfc3eddcc499737f18bdf3`, `0ddd9e36b51267f774ec53e8dd110b601196fa51`, `113f200a99ccb2f0fbef0017340da5107c700a74`, `5499cd27494a68836a242cd34eb70fe9c141a713`, `929607f6925581da67a9e955eedded2aab2bdc16`, `c2c3ad5ba53f1959422fb2d37297a8de8d714782`, `ef15868ca8b309dc902470b2da0096255da82c5d`, `3e2991e44719c2a829696215862ae5fbd368fe37`, `7e3eb6e41316d7b04d32bc7186ed0c78de1aa539`, `beb91d88a2f224075e4fcf35a0ee9483b3124504`, `a5c6f6b1fb944a730b605a120f84b4f38f608f9f`, `78842af1c30de9c7561f10b4129aba4e1f30db27`, `91499081f4584d53690db07f6a9c9f104cd5674e`, `e75e67f27d2966a16214ac4aa780fe15ef2501c1`, `0e73d8d5e3d04d62d444d17138f9cf61b7a236a2`, `8ddf8b4d764ae359d279498f08d85146d55077f0`, `79582bc94eb420f02ad49a81bcbcc02521e5c414`, `536a3f802c92960b1eab48c37db25a8c542fd231`, `5da51064d7936c6d7a459cfa8b34eada65163e03`, `0cb12021efd2b8ad1cd6dc6801c5f29a87b28ad1`, `a9d33bc8d11637230052f1729e85af5e174b2423`, `0a0c2f41d8ef2c70f6e3b73251eb34499e83ea32`, `1ea932a56f1d85fd1ebbe4a77f3619fe58d2947a`, `b81f958d4126ab99f09b9fef3b1f790b4bca1515`, `62d103b44f6402529a156202e37ec5ece01244b4`, `e59cdae3365981339d55ec01224f09995250e67d`, `6bc5bf4fc976a827ea1d1a5b095e370e717a9b24`, `3a1ed748390865c80d487133e4c8e9df030eb4f7`, `b74ef4a784d3728ff2c657a8186095e87fc3f0d4`, `6746fecd727823b233a90edb1819d08555124464`, `a85778679e99c40421b3be0122d153f991efbc80`, `6c3ec528f146738f55a29e69ee13e9cdb8e3c9b5`, `c93f77d1b20395db171016b2710a6ddf95da9851`, `f67bfb9f92b9ea4c06910ea203c685e18fafe1d7`]:
  - @band-store/core-flows@2.12.0
  - @band-store/product@2.12.0
  - @band-store/event-bus-local@2.12.0
  - @band-store/event-bus-redis@2.12.0
  - @band-store/framework@2.12.0
  - @band-store/admin-bundler@2.12.0
  - @band-store/telemetry@2.12.0
  - @band-store/promotion@2.12.0
  - @band-store/order@2.12.0
  - @band-store/draft-order@2.12.0
  - @band-store/workflow-engine-inmemory@2.12.0
  - @band-store/workflow-engine-redis@2.12.0
  - @band-store/notification@2.12.0
  - @band-store/payment@2.12.0
  - @band-store/link-modules@2.12.0
  - @band-store/payment-stripe@2.12.0
  - @band-store/fulfillment@2.12.0
  - @band-store/analytics@2.12.0
  - @band-store/api-key@2.12.0
  - @band-store/auth@2.12.0
  - @band-store/cache-inmemory@2.12.0
  - @band-store/cache-redis@2.12.0
  - @band-store/caching@2.12.0
  - @band-store/cart@2.12.0
  - @band-store/currency@2.12.0
  - @band-store/customer@2.12.0
  - @band-store/file@2.12.0
  - @band-store/index@2.12.0
  - @band-store/inventory@2.12.0
  - @band-store/locking@2.12.0
  - @band-store/pricing@2.12.0
  - @band-store/analytics-local@2.12.0
  - @band-store/analytics-posthog@2.12.0
  - @band-store/auth-emailpass@2.12.0
  - @band-store/auth-github@2.12.0
  - @band-store/auth-google@2.12.0
  - @band-store/caching-redis@2.12.0
  - @band-store/file-local@2.12.0
  - @band-store/file-s3@2.12.0
  - @band-store/fulfillment-manual@2.12.0
  - @band-store/locking-postgres@2.12.0
  - @band-store/locking-redis@2.12.0
  - @band-store/notification-local@2.12.0
  - @band-store/notification-sendgrid@2.12.0
  - @band-store/region@2.12.0
  - @band-store/sales-channel@2.12.0
  - @band-store/settings@2.12.0
  - @band-store/stock-location@2.12.0
  - @band-store/store@2.12.0
  - @band-store/tax@2.12.0
  - @band-store/user@2.12.0

## 2.11.3

### Patch Changes

- #13928 `42b270ed2df09474f528d8d23816e0affcf4bd25` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types, Band Store): fixes to http types and validators

- #13961 `018871f8cd6121ea6af40644f784256891b11849` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - Fix regression preventing region_id to be resolved from store's default region when retrieving priced products

- #13910 `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Dependencies cleanup and improvements

- #13931 `990691e78a77a46bc581353de47945dd8f5d6928` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(Band Store): do not use transactionId for cart operations

- #13932 `37563987b8fe75c9acfe62957a33e8398977647a` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Fix dependencies vulnerabilities

- #13898 `13d7d15be594ca413785eebe8f86b47c36cb9830` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(modules-sdk): parallel migrations

- Updated dependencies [`28c3ea68f5634792848f146ac6af5b27c848bf21`, `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d`, `afb40d437b3cc4ceb015df70985b2f005f40eaff`, `990691e78a77a46bc581353de47945dd8f5d6928`, `37563987b8fe75c9acfe62957a33e8398977647a`, `7c72e7bae960088df1efca1cba7275d95ecdaf12`, `13d7d15be594ca413785eebe8f86b47c36cb9830`]:
  - @band-store/framework@2.11.3
  - @band-store/admin-bundler@2.11.3
  - @band-store/analytics@2.11.3
  - @band-store/analytics-local@2.11.3
  - @band-store/analytics-posthog@2.11.3
  - @band-store/api-key@2.11.3
  - @band-store/auth@2.11.3
  - @band-store/auth-emailpass@2.11.3
  - @band-store/auth-github@2.11.3
  - @band-store/auth-google@2.11.3
  - @band-store/cache-inmemory@2.11.3
  - @band-store/cache-redis@2.11.3
  - @band-store/caching@2.11.3
  - @band-store/caching-redis@2.11.3
  - @band-store/cart@2.11.3
  - @band-store/core-flows@2.11.3
  - @band-store/currency@2.11.3
  - @band-store/customer@2.11.3
  - @band-store/draft-order@2.11.3
  - @band-store/event-bus-local@2.11.3
  - @band-store/event-bus-redis@2.11.3
  - @band-store/file@2.11.3
  - @band-store/file-local@2.11.3
  - @band-store/file-s3@2.11.3
  - @band-store/fulfillment@2.11.3
  - @band-store/fulfillment-manual@2.11.3
  - @band-store/index@2.11.3
  - @band-store/inventory@2.11.3
  - @band-store/link-modules@2.11.3
  - @band-store/locking@2.11.3
  - @band-store/locking-postgres@2.11.3
  - @band-store/locking-redis@2.11.3
  - @band-store/notification@2.11.3
  - @band-store/notification-local@2.11.3
  - @band-store/notification-sendgrid@2.11.3
  - @band-store/order@2.11.3
  - @band-store/payment@2.11.3
  - @band-store/payment-stripe@2.11.3
  - @band-store/pricing@2.11.3
  - @band-store/product@2.11.3
  - @band-store/promotion@2.11.3
  - @band-store/region@2.11.3
  - @band-store/sales-channel@2.11.3
  - @band-store/settings@2.11.3
  - @band-store/stock-location@2.11.3
  - @band-store/store@2.11.3
  - @band-store/tax@2.11.3
  - @band-store/telemetry@2.11.3
  - @band-store/user@2.11.3
  - @band-store/workflow-engine-inmemory@2.11.3
  - @band-store/workflow-engine-redis@2.11.3

## 2.11.2

### Patch Changes

- #13730 `25a20ca95f702dfb8a34fe9e4f3c565a47c2655e` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store,types): product variant store endpoints

- #13833 `ec4443287601f5fe1544b305873f3aa151ed1bd7` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(types,Band Store): clean up HTTP and request type arguments

- #13623 `47572816778e21432d0201f4b2642a765c86fdbc` Thanks [@fPolic](https://github.com/fPolic)! - feat: scoped variant images

- #13869 `85b1f3d43aa8d8e0269a545ef7867733fd0eb8e2` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(index): Add support for API end points to interact with the index module

- Updated dependencies [`f055bfd723e47b381a780b23dc230203b989088c`, `cc2614ded7f83cdbe7e7f7f809d05f5ab6059fe4`, `01ee437926f0a4ec587510c65f8282620bf72d3f`, `0f79f22ebc35b3e4d8151789b92c932f014de85e`, `47572816778e21432d0201f4b2642a765c86fdbc`, `ef7b9b937562144d1f077a16ceb8279c84f3b6af`, `0b202cc50946fdd0d0ccf4c76ae2d4f801895378`, `85b1f3d43aa8d8e0269a545ef7867733fd0eb8e2`, `1defb3c29bfe018fd5f89b5a9e27fc8a31d72cdd`]:
  - @band-store/pricing@2.11.2
  - @band-store/notification@2.11.2
  - @band-store/payment@2.11.2
  - @band-store/core-flows@2.11.2
  - @band-store/product@2.11.2
  - @band-store/index@2.11.2
  - @band-store/framework@2.11.2
  - @band-store/admin-bundler@2.11.2
  - @band-store/draft-order@2.11.2
  - @band-store/analytics@2.11.2
  - @band-store/api-key@2.11.2
  - @band-store/auth@2.11.2
  - @band-store/cache-inmemory@2.11.2
  - @band-store/cache-redis@2.11.2
  - @band-store/caching@2.11.2
  - @band-store/cart@2.11.2
  - @band-store/currency@2.11.2
  - @band-store/customer@2.11.2
  - @band-store/event-bus-local@2.11.2
  - @band-store/event-bus-redis@2.11.2
  - @band-store/file@2.11.2
  - @band-store/fulfillment@2.11.2
  - @band-store/inventory@2.11.2
  - @band-store/link-modules@2.11.2
  - @band-store/locking@2.11.2
  - @band-store/order@2.11.2
  - @band-store/promotion@2.11.2
  - @band-store/analytics-local@2.11.2
  - @band-store/analytics-posthog@2.11.2
  - @band-store/auth-emailpass@2.11.2
  - @band-store/auth-github@2.11.2
  - @band-store/auth-google@2.11.2
  - @band-store/caching-redis@2.11.2
  - @band-store/file-local@2.11.2
  - @band-store/file-s3@2.11.2
  - @band-store/fulfillment-manual@2.11.2
  - @band-store/locking-postgres@2.11.2
  - @band-store/locking-redis@2.11.2
  - @band-store/notification-local@2.11.2
  - @band-store/notification-sendgrid@2.11.2
  - @band-store/payment-stripe@2.11.2
  - @band-store/region@2.11.2
  - @band-store/sales-channel@2.11.2
  - @band-store/settings@2.11.2
  - @band-store/stock-location@2.11.2
  - @band-store/store@2.11.2
  - @band-store/tax@2.11.2
  - @band-store/user@2.11.2
  - @band-store/workflow-engine-inmemory@2.11.2
  - @band-store/workflow-engine-redis@2.11.2
  - @band-store/telemetry@2.11.2

## 2.11.1

### Patch Changes

- #13813 `90162ebeacf6e093a06b70ac2e87de9f12674a17` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): images recreate on product update

- Updated dependencies [`226984cf0f229bec00ee33a3a1a981b57889c11a`, `d51ae2768be0dad5ece49324aa4866bb591e7ad0`, `bad0858348dca100533bb6fcdcdefe90b0668407`, `17fb3e2e10e4e53bfb4d7d33e004c59225a71861`, `fe4e7481a9ee6e360623d15ecfaf51f3df00f9d7`, `5df903f5fb52d1e37d13bfe72ed9c226c1eb46b4`, `a34fcfab351a79badfb24255602ca3c6ff60bffd`]:
  - @band-store/admin-bundler@2.11.1
  - @band-store/workflow-engine-inmemory@2.11.1
  - @band-store/workflow-engine-redis@2.11.1
  - @band-store/payment-stripe@2.11.1
  - @band-store/order@2.11.1
  - @band-store/core-flows@2.11.1
  - @band-store/cart@2.11.1
  - @band-store/customer@2.11.1
  - @band-store/inventory@2.11.1
  - @band-store/product@2.11.1
  - @band-store/framework@2.11.1
  - @band-store/draft-order@2.11.1
  - @band-store/analytics@2.11.1
  - @band-store/api-key@2.11.1
  - @band-store/auth@2.11.1
  - @band-store/caching@2.11.1
  - @band-store/currency@2.11.1
  - @band-store/file@2.11.1
  - @band-store/fulfillment@2.11.1
  - @band-store/index@2.11.1
  - @band-store/link-modules@2.11.1
  - @band-store/locking@2.11.1
  - @band-store/notification@2.11.1
  - @band-store/payment@2.11.1
  - @band-store/pricing@2.11.1
  - @band-store/promotion@2.11.1
  - @band-store/region@2.11.1
  - @band-store/sales-channel@2.11.1
  - @band-store/settings@2.11.1
  - @band-store/stock-location@2.11.1
  - @band-store/store@2.11.1
  - @band-store/tax@2.11.1
  - @band-store/user@2.11.1
  - @band-store/cache-inmemory@2.11.1
  - @band-store/cache-redis@2.11.1
  - @band-store/event-bus-local@2.11.1
  - @band-store/event-bus-redis@2.11.1
  - @band-store/analytics-local@2.11.1
  - @band-store/analytics-posthog@2.11.1
  - @band-store/auth-emailpass@2.11.1
  - @band-store/auth-github@2.11.1
  - @band-store/auth-google@2.11.1
  - @band-store/caching-redis@2.11.1
  - @band-store/file-local@2.11.1
  - @band-store/file-s3@2.11.1
  - @band-store/fulfillment-manual@2.11.1
  - @band-store/locking-postgres@2.11.1
  - @band-store/locking-redis@2.11.1
  - @band-store/notification-local@2.11.1
  - @band-store/notification-sendgrid@2.11.1
  - @band-store/telemetry@2.11.1

## 2.11.0

### Minor Changes

- [`57030fa43e084ed8300e6b74399c5402b1587e80`](undefined) - chore: Prepare minor bump

### Patch Changes

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- #13703 `c61f3150c138de016c6886e79d79984bc267273c` Thanks [@willbouch](https://github.com/willbouch)! - fix(Band Store,utils,types): inventory management nullable

- #13451 `7dc3b0c5ffdf8eb7070ee5cfd8155c6c4de5c0b1` Thanks [@fPolic](https://github.com/fPolic)! - feat: support limiting promotion usage by attribute

- #13645 `76aa4a48b3cbec519ab16c96cc87ee3288de28de` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/workflows concurrency

- [`5c77b10fa64d28c315e5196da1c9608c1c0a2ab7`](undefined) - fix(Band Store): plugin:db:generate skip modules with no data models

- [`9d8ed70130867466f81834adf13b7b60bdfc0b6a`](undefined) - feat(cli): servers and workers in cluster mode

- [`730d73306d699634121a793f2b4049fd3e09bc47`](undefined) - chore(Band Store): remove empty object type for set cart's customer route

- #13435 `b9d6f73320c36c53235b12fb8397b30a448917f0` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(): distributed caching

- [`71014bafa6942709d4b763cbc82dc7f6d4860ba6`](undefined) - fix(Band Store): fixes db setup command to not load connection before creating db

- #13450 `8ece06d8ed6a197ebb370918c49a3ec5c21dd186` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Upgrade mikro orm 6.5.4

- #13649 `bb08edd41fd954306b0feacf6a6a69b87d9287dd` Thanks [@willbouch](https://github.com/willbouch)! - fix(Band Store,file-local,file-s3,core-flows): fix csv parsing special characters

- #13566 `459fbcdf998a506d80abb758bc7648126c6c96f8` Thanks [@docloulou](https://github.com/docloulou)! - feat(Band Store,dashboard): Add support for configurable additional columns in entity views

- [`137b237c8498fe4c195a3b8344e16b61193b9329`](undefined) - feat(Band Store): export feature-flags config objects

- [`907fbc89a2566f516c65a4eefdfeeb4f9dcb3579`](undefined) - feat(Band Store): include user_metadata in auth routes jwt

- #13527 `458dd04bbf70159ec42254e91675c7a1f1d344d8` Thanks [@leobenzol](https://github.com/leobenzol)! - fix(core-flows,types,Band Store): pass /store/shipping-options fields to workflow

- [`3960c80e9f55bdf41f9f257e12ed72c713577598`](undefined) - fix(Band Store): start cluster

- [`9d3c71fefd12d09ecd3be1aeff7744e809872481`](undefined) - fix(Band Store): cart now returns 404 when not found

- Updated dependencies [`0695c5844f7e28e46dc3a6087b981e69ed4e41ba`, `0cbd9f0bc315b3eda1770ac301061f1576856387`, `12a96a7c7015f011f5e29a1d387f835e514ba536`, `9c957e1da04c1f86d1caa7de279993453b76bb63`, `1b57e5c58ab5c656da398b69444c2b9baba2e35e`, [`a501364b2d26a3ca0670eb345d9933b83964abc1`](undefined), `7dc3b0c5ffdf8eb7070ee5cfd8155c6c4de5c0b1`, `9c7c1d48c7779023172d5e7003674b2d7107b733`, [`0c7cbfb2e7bfeab89759cbd9cdf25462a3df1711`](undefined), [`3758303a1dd95332383bbf0b13746b8d771085c5`](undefined), `76aa4a48b3cbec519ab16c96cc87ee3288de28de`, `6e806942c7961eeb1d80abca0f9b4bf2e663f6b3`, [`62d340b897685631dc1a10122fe7b64f9206bf77`](undefined), [`5346079d4717933d31d57f549d4158f3d433551c`](undefined), [`5b135a41fe40ccda9ef0e867748a77c619214d0a`](undefined), `150aa50397825ae800f3acf4bbc68fe28e397582`, [`9fc32ba7c7454b083a62deca2b74112a0e9f0c5c`](undefined), [`4c1c1dd4c0790597d7d881bb979bb9c8d8fd35e3`](undefined), `b9d6f73320c36c53235b12fb8397b30a448917f0`, [`9633e0676e0d0b8ff681b45e47ef97402d8a9831`](undefined), `924564bee505fc8787945c6d683243cef5799625`, [`cb716856b653c31178a5977b17ec77eed4c9c241`](undefined), [`9361f9c25aae3ce2107f8d3d585517b767c3d3d1`](undefined), [`2d45ba7be12bf5edab13934365041d428473fcfd`](undefined), `51859c38a728c5f05cf30f09f4c6a55657895de7`, `8acfb88c2b627ba6ba4a2827bcb78c3bb74c22f8`, [`b43b285125a66455ed6567543414eddcbe54781e`](undefined), `41651721450c99e5f38cfbb87a6a47ab067ece86`, `a61d1825eaef4bece20704fe6ae21d9da841b2f2`, [`d58462c9c91a3e335d03f758438e109caad1f839`](undefined), `087887fefb948e6676001ad2dc2cb265ae6f7430`, `5e827ec95d0f721e62c0d4e8c603bda7ddc0929c`, `8ece06d8ed6a197ebb370918c49a3ec5c21dd186`, [`8fb7e04be7d586453d32ee73e292834ca2de2378`](undefined), `fc67fd0b36f53f0c0897df54ecea02061e65e816`, `bb08edd41fd954306b0feacf6a6a69b87d9287dd`, [`ea3d0100a9d4994f15e901f518a45390d596bebf`](undefined), `5ea32aaa44a47b143c46f895032478334b7379ca`, `c54c5ed6de2c9686f89aeef86c5c607c4b5f1cf3`, `1d2b4566fda0bdd826c3d1fe090b1ee3efdbd9bd`, `458dd04bbf70159ec42254e91675c7a1f1d344d8`, [`ee1c77a01f6463dd7a1d8bc2046e91b932900602`](undefined), `86c975258b7f3a2f1d49117f7a4139806812a8e7`, [`68a643bb3aafc6bb8f7d15ebc49870dd7f53976e`](undefined), `92d30b28f45b4037cd73c180c8f257070cf49bd4`, [`ca334b7cc1eef297cbde2356746adfd0121d348f`](undefined), `fc2ded4b100432236a14d9f6409e8c6ea5a84269`, `02b6d013822b9665f868c4ea6d1b5cfe58723459`, `4e3090ab263b8c0da97e91d6586275d0f8609db5`, `516f5a38960f1ea05a2c696e0079d2e4c34d5c86`]:
  - @band-store/auth-emailpass@2.11.0
  - @band-store/core-flows@2.11.0
  - @band-store/framework@2.11.0
  - @band-store/analytics@2.11.0
  - @band-store/api-key@2.11.0
  - @band-store/auth@2.11.0
  - @band-store/cache-redis@2.11.0
  - @band-store/cart@2.11.0
  - @band-store/currency@2.11.0
  - @band-store/customer@2.11.0
  - @band-store/event-bus-redis@2.11.0
  - @band-store/file@2.11.0
  - @band-store/fulfillment@2.11.0
  - @band-store/index@2.11.0
  - @band-store/inventory@2.11.0
  - @band-store/link-modules@2.11.0
  - @band-store/locking@2.11.0
  - @band-store/notification@2.11.0
  - @band-store/order@2.11.0
  - @band-store/payment@2.11.0
  - @band-store/pricing@2.11.0
  - @band-store/product@2.11.0
  - @band-store/promotion@2.11.0
  - @band-store/locking-postgres@2.11.0
  - @band-store/payment-stripe@2.11.0
  - @band-store/region@2.11.0
  - @band-store/sales-channel@2.11.0
  - @band-store/settings@2.11.0
  - @band-store/stock-location@2.11.0
  - @band-store/store@2.11.0
  - @band-store/tax@2.11.0
  - @band-store/user@2.11.0
  - @band-store/workflow-engine-inmemory@2.11.0
  - @band-store/workflow-engine-redis@2.11.0
  - @band-store/draft-order@2.11.0
  - @band-store/caching@2.11.0
  - @band-store/event-bus-local@2.11.0
  - @band-store/caching-redis@2.11.0
  - @band-store/file-local@2.11.0
  - @band-store/file-s3@2.11.0
  - @band-store/admin-bundler@2.11.0
  - @band-store/cache-inmemory@2.11.0
  - @band-store/analytics-local@2.11.0
  - @band-store/analytics-posthog@2.11.0
  - @band-store/auth-github@2.11.0
  - @band-store/auth-google@2.11.0
  - @band-store/fulfillment-manual@2.11.0
  - @band-store/locking-redis@2.11.0
  - @band-store/notification-local@2.11.0
  - @band-store/notification-sendgrid@2.11.0
  - @band-store/telemetry@2.11.0

## 2.10.3

### Patch Changes

- #13516 `25634b038248ab6501af719faec79b59b496bada` Thanks [@adrien2p](https://github.com/adrien2p)! - test(): test dynamic max workers and improve CI

- #13497 `9563ee446f2b3a2e0cd4a4a33959ed55be5f268a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(utils): subtotal calculation discounting returned items

- #13495 `90cc3f42d98bce04d45a72165399193e7933a54f` Thanks [@willbouch](https://github.com/willbouch)! - feat(Band Store): allow filtering by id for collections

- #13508 `8565dcfc46c9ccc923a44582bb215c615ac2792f` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows,Band Store): don't allow negative line item quantity

- Updated dependencies [`ebf33bea43bb6fe03a60a3099b2bc62608f0d13b`, `25634b038248ab6501af719faec79b59b496bada`, `57897c232e23db042f523cbe83b6318b97de519d`, `9563ee446f2b3a2e0cd4a4a33959ed55be5f268a`, `4736c58da5de67f6868b4552351a093e67715e4b`, `1071296236d84b70b3b31034eb95984445feb020`, `040fbf3220420b43871e33acc6686a6cedcf88fc`, `8565dcfc46c9ccc923a44582bb215c615ac2792f`]:
  - @band-store/workflow-engine-inmemory@2.10.3
  - @band-store/workflow-engine-redis@2.10.3
  - @band-store/analytics@2.10.3
  - @band-store/api-key@2.10.3
  - @band-store/auth@2.10.3
  - @band-store/cart@2.10.3
  - @band-store/currency@2.10.3
  - @band-store/customer@2.10.3
  - @band-store/event-bus-local@2.10.3
  - @band-store/event-bus-redis@2.10.3
  - @band-store/file@2.10.3
  - @band-store/fulfillment@2.10.3
  - @band-store/index@2.10.3
  - @band-store/inventory@2.10.3
  - @band-store/link-modules@2.10.3
  - @band-store/core-flows@2.10.3
  - @band-store/framework@2.10.3
  - @band-store/promotion@2.10.3
  - @band-store/order@2.10.3
  - @band-store/admin-bundler@2.10.3
  - @band-store/draft-order@2.10.3
  - @band-store/cache-inmemory@2.10.3
  - @band-store/cache-redis@2.10.3
  - @band-store/locking@2.10.3
  - @band-store/notification@2.10.3
  - @band-store/payment@2.10.3
  - @band-store/pricing@2.10.3
  - @band-store/product@2.10.3
  - @band-store/analytics-local@2.10.3
  - @band-store/analytics-posthog@2.10.3
  - @band-store/auth-emailpass@2.10.3
  - @band-store/auth-github@2.10.3
  - @band-store/auth-google@2.10.3
  - @band-store/file-local@2.10.3
  - @band-store/file-s3@2.10.3
  - @band-store/fulfillment-manual@2.10.3
  - @band-store/locking-postgres@2.10.3
  - @band-store/locking-redis@2.10.3
  - @band-store/notification-local@2.10.3
  - @band-store/notification-sendgrid@2.10.3
  - @band-store/payment-stripe@2.10.3
  - @band-store/region@2.10.3
  - @band-store/sales-channel@2.10.3
  - @band-store/settings@2.10.3
  - @band-store/stock-location@2.10.3
  - @band-store/store@2.10.3
  - @band-store/tax@2.10.3
  - @band-store/user@2.10.3
  - @band-store/telemetry@2.10.3

## 2.10.2

### Patch Changes

- #13376 `0000ed69982b95f4bff80fd6182347291d25f7b8` Thanks [@fPolic](https://github.com/fPolic)! - fix(draft-order,Band Store,types): draft order promotion UI polish

- #13312 `b4c0f131b70ba950339c1ca4d81b5ce062a588a3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(framework): load custom flags before Band Store config

- #13469 `d622c61ce2008f3efdfbbaa4154c4329d7978d2b` Thanks [@v0eak](https://github.com/v0eak)! - chore(Band Store): add metadata field to AdminCreateInvite

- #13429 `637d4cf7ef792622830d49446283d3c578c4f09c` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Fix issue with missing DB traces

- #13487 `4fded2602bfbb63c8d648d2af717c2eb3bbb6f49` Thanks [@willbouch](https://github.com/willbouch)! - fix(Band Store,product): fix ordering product categories

- #13375 `8e119988950479345c90e88b541198eba53496a3` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Use default logger in plugin:develop

- #13477 `29dca1ca481e34cc17678b7b4f0e854d3a404acd` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): update cart line item route fetching

- #13438 `e0943f3c9012a4a7b63c455bc23ade6ada26b33e` Thanks [@willbouch](https://github.com/willbouch)! - "fix(Band Store): stop loading entry points in exec command

- Updated dependencies [`e8822f3e693bde33fdfd8b0d6140b4e59b40af98`, `0000ed69982b95f4bff80fd6182347291d25f7b8`, `71d8a0031f2b75de24c4c4e80ef3314661020420`, `2b89510df3b87c153beae5207b1f9184002129d7`, `de9a21a9da38b82c6de28bd6272c9e87ca72bccc`, `d828005354587d248f699656d04c7cb4cbe1fc87`, `49a4caa62daf9f12eda0999c236bb39ea01fccb9`, `bd206cb2505a832d0e426040f7a8cf10a947d346`, `8dd9ae3d35b90b54f3490df3e0da61180f671ca4`, `b4c0f131b70ba950339c1ca4d81b5ce062a588a3`, `fb71bc64052ff7ddf4e5a44c6e91e6a3a3636317`, `afe21741c43efb3ae233da82eba0227cbc74a6f8`, `8e849074e44fe3b967dbfb3bbbef527f4aed3eed`, `b776fd55dcd959fdd495dd11ff9b006a31a623ce`, `d7692100e7a2b2f078756cac9ca2b33784d3d1ff`, `55a35e47218c65190e36a1a6088031890edc1b14`, `4fded2602bfbb63c8d648d2af717c2eb3bbb6f49`, `2fe68a975b75a925e1e16c7e08c245abf63db0c5`, `fc4d5f0ac94afaf48fdf39f1d6bd3ac97259a8c5`, `ac09b3cbeffc11c76b8e5972ee25688b17e5fa58`, `58e20fa3fc266cbecc69b45998ef1fadd7056f9a`, `29dca1ca481e34cc17678b7b4f0e854d3a404acd`, `368c1d1e1737fb9cd1e60632c8a2c46a2ce34f46`, `ca471eb8f45d01cebe3eb65644de1b10e796e7ba`, `a4b72f9a21fd1d278c622fcd45d24bb9bfb1e0a8`, `823a5c75ff97cf0acbd4ddf00f43ab3b49f0f210`, `1b681a79da02aec3f872baa2213a4b2423d73e97`]:
  - @band-store/api-key@2.10.2
  - @band-store/cart@2.10.2
  - @band-store/customer@2.10.2
  - @band-store/fulfillment@2.10.2
  - @band-store/inventory@2.10.2
  - @band-store/notification@2.10.2
  - @band-store/order@2.10.2
  - @band-store/payment@2.10.2
  - @band-store/pricing@2.10.2
  - @band-store/product@2.10.2
  - @band-store/draft-order@2.10.2
  - @band-store/index@2.10.2
  - @band-store/workflow-engine-inmemory@2.10.2
  - @band-store/workflow-engine-redis@2.10.2
  - @band-store/link-modules@2.10.2
  - @band-store/framework@2.10.2
  - @band-store/core-flows@2.10.2
  - @band-store/sales-channel@2.10.2
  - @band-store/event-bus-local@2.10.2
  - @band-store/promotion@2.10.2
  - @band-store/currency@2.10.2
  - @band-store/admin-bundler@2.10.2
  - @band-store/analytics@2.10.2
  - @band-store/auth@2.10.2
  - @band-store/file@2.10.2
  - @band-store/locking@2.10.2
  - @band-store/region@2.10.2
  - @band-store/settings@2.10.2
  - @band-store/stock-location@2.10.2
  - @band-store/store@2.10.2
  - @band-store/tax@2.10.2
  - @band-store/user@2.10.2
  - @band-store/cache-inmemory@2.10.2
  - @band-store/cache-redis@2.10.2
  - @band-store/event-bus-redis@2.10.2
  - @band-store/analytics-local@2.10.2
  - @band-store/analytics-posthog@2.10.2
  - @band-store/auth-emailpass@2.10.2
  - @band-store/auth-github@2.10.2
  - @band-store/auth-google@2.10.2
  - @band-store/file-local@2.10.2
  - @band-store/file-s3@2.10.2
  - @band-store/fulfillment-manual@2.10.2
  - @band-store/locking-postgres@2.10.2
  - @band-store/locking-redis@2.10.2
  - @band-store/notification-local@2.10.2
  - @band-store/notification-sendgrid@2.10.2
  - @band-store/payment-stripe@2.10.2
  - @band-store/telemetry@2.10.2

## 2.10.1

### Patch Changes

- Updated dependencies [`8176d0f684be95331ce3bec31d67c5f857f9c85a`]:
  - @band-store/core-flows@2.10.1
  - @band-store/analytics@2.10.1
  - @band-store/api-key@2.10.1
  - @band-store/auth@2.10.1
  - @band-store/cart@2.10.1
  - @band-store/currency@2.10.1
  - @band-store/customer@2.10.1
  - @band-store/file@2.10.1
  - @band-store/fulfillment@2.10.1
  - @band-store/index@2.10.1
  - @band-store/inventory@2.10.1
  - @band-store/link-modules@2.10.1
  - @band-store/locking@2.10.1
  - @band-store/notification@2.10.1
  - @band-store/order@2.10.1
  - @band-store/payment@2.10.1
  - @band-store/pricing@2.10.1
  - @band-store/product@2.10.1
  - @band-store/promotion@2.10.1
  - @band-store/region@2.10.1
  - @band-store/sales-channel@2.10.1
  - @band-store/settings@2.10.1
  - @band-store/stock-location@2.10.1
  - @band-store/store@2.10.1
  - @band-store/tax@2.10.1
  - @band-store/user@2.10.1
  - @band-store/workflow-engine-inmemory@2.10.1
  - @band-store/workflow-engine-redis@2.10.1
  - @band-store/draft-order@2.10.1
  - @band-store/admin-bundler@2.10.1
  - @band-store/framework@2.10.1
  - @band-store/telemetry@2.10.1
  - @band-store/cache-inmemory@2.10.1
  - @band-store/cache-redis@2.10.1
  - @band-store/event-bus-local@2.10.1
  - @band-store/event-bus-redis@2.10.1
  - @band-store/analytics-local@2.10.1
  - @band-store/analytics-posthog@2.10.1
  - @band-store/auth-emailpass@2.10.1
  - @band-store/auth-github@2.10.1
  - @band-store/auth-google@2.10.1
  - @band-store/file-local@2.10.1
  - @band-store/file-s3@2.10.1
  - @band-store/fulfillment-manual@2.10.1
  - @band-store/locking-postgres@2.10.1
  - @band-store/locking-redis@2.10.1
  - @band-store/notification-local@2.10.1
  - @band-store/notification-sendgrid@2.10.1
  - @band-store/payment-stripe@2.10.1

## 2.10.0

### Minor Changes

- #13236 `9412669e654c994e2dbee9cf61c18004d79f6475` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): idempotent cart operations and nested workflow deletion lifecycle fix

### Patch Changes

- #13283 `e413cfefc2e0579ba7c5299dc4f4270310e39c2c` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: define file config and improved feature flag support

- #13314 `cbaa40374480a6254d9e568c3003517308be0a44` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Enable draft order plugin by default

- #13226 `67d3660abf3ceeac3f04006fe5e92d2fa7c0ccad` Thanks [@willbouch](https://github.com/willbouch)! - feat(dashboard, core-flows): associate shipping option to type

- #13020 `71818e43cb6c90d26d5173d01c476d2480355110` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): fetching a product without a category with categories filed passed

- #13156 `e2213448ac9eb93318570fde2807a3036108d44b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: custom logger on band-store-config

- #13272 `7f5b9fc5fa47e8e73c7afe54aa1bde4dd035086e` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store,dashboard): Retrieve `metadata` for product_tags by default and add metadta UI to product tag domain in admin dashboard

- #13191 `34c3c14e0a1491ab80473605018b97981544167d` Thanks [@willbouch](https://github.com/willbouch)! - chore(types, api): support shipping option type api endpoints

- #13242 `492e0189573ffad4977a3559d71f39bf94d8b45d` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,core-flows,js-sdk,types,Band Store): listing order's shipping option

- #13244 `6602e893b88f1c8f0c8165101dd609baaf60d925` Thanks [@willbouch](https://github.com/willbouch)! - chore(Band Store): fetch shipping related attributes

- Updated dependencies [`486621383a79e83c831933c1a0ffdae58a695cb0`, `2f594291ad8d227b499b80a5bfe66f5963d42d6a`, `5382afccfa0740bba04372a8613c537ff6a69cbe`, `e413cfefc2e0579ba7c5299dc4f4270310e39c2c`, `cbaa40374480a6254d9e568c3003517308be0a44`, `67d3660abf3ceeac3f04006fe5e92d2fa7c0ccad`, `338a42f72808052f8d4dcbda8e070b97048bac87`, `9412669e654c994e2dbee9cf61c18004d79f6475`, `57077406f9ce5d3bc1008b643a055f294de838eb`, `059bfc147590b01458432539be4a7746bc433c51`, `83d2ce762c952c01b8d3e83cc64fd95c9e9573f5`, `b111d01898a621c4280457021677d9b89e20e10d`, `f764b3a36471a0ad9e9e05f125183464680e3a2d`, `a0fca165701a85f0f2b71efa590ee42f0cc2fd69`, `06ef9197f825c78b9d8d3e1f4f3a0ca995853331`, `fc4925327334c540c0125a91e81794c3c1f340e7`, `e2213448ac9eb93318570fde2807a3036108d44b`, `6b04fbcc50cef6bbe2b65269d1b7d88949e4fa37`, `34c3c14e0a1491ab80473605018b97981544167d`, `ff152e7ace60232c02932bbd06a759e555a823d4`, `eb376eb4cf9cc6fe0ce2a6724e0df81b27bc7b87`, `4b3c43fe92d99a98b3d7b9ee6705114de01cbc5d`, `492e0189573ffad4977a3559d71f39bf94d8b45d`, `6264a6262b0220c70ad35c0d56a93a39218ccb80`, `be62cf87c7ed975bd0880133588cc806751715cb`]:
  - @band-store/link-modules@2.10.0
  - @band-store/promotion@2.10.0
  - @band-store/core-flows@2.10.0
  - @band-store/framework@2.10.0
  - @band-store/draft-order@2.10.0
  - @band-store/fulfillment@2.10.0
  - @band-store/workflow-engine-inmemory@2.10.0
  - @band-store/workflow-engine-redis@2.10.0
  - @band-store/locking-redis@2.10.0
  - @band-store/index@2.10.0
  - @band-store/pricing@2.10.0
  - @band-store/event-bus-local@2.10.0
  - @band-store/event-bus-redis@2.10.0
  - @band-store/admin-bundler@2.10.0
  - @band-store/analytics@2.10.0
  - @band-store/api-key@2.10.0
  - @band-store/auth@2.10.0
  - @band-store/cache-inmemory@2.10.0
  - @band-store/cache-redis@2.10.0
  - @band-store/cart@2.10.0
  - @band-store/currency@2.10.0
  - @band-store/customer@2.10.0
  - @band-store/file@2.10.0
  - @band-store/inventory@2.10.0
  - @band-store/locking@2.10.0
  - @band-store/notification@2.10.0
  - @band-store/order@2.10.0
  - @band-store/payment@2.10.0
  - @band-store/product@2.10.0
  - @band-store/analytics-local@2.10.0
  - @band-store/analytics-posthog@2.10.0
  - @band-store/auth-emailpass@2.10.0
  - @band-store/auth-github@2.10.0
  - @band-store/auth-google@2.10.0
  - @band-store/file-local@2.10.0
  - @band-store/file-s3@2.10.0
  - @band-store/fulfillment-manual@2.10.0
  - @band-store/locking-postgres@2.10.0
  - @band-store/notification-local@2.10.0
  - @band-store/notification-sendgrid@2.10.0
  - @band-store/payment-stripe@2.10.0
  - @band-store/region@2.10.0
  - @band-store/sales-channel@2.10.0
  - @band-store/settings@2.10.0
  - @band-store/stock-location@2.10.0
  - @band-store/store@2.10.0
  - @band-store/tax@2.10.0
  - @band-store/user@2.10.0
  - @band-store/telemetry@2.10.0

## 2.9.0

### Patch Changes

- #12960 `1bdf602f1c1da181e2839858d2f7e8aea503573a` Thanks [@scherddel](https://github.com/scherddel)! - This fixes the discount\_ calculation logic and promotion tax inclusiveness calculation

- Updated dependencies [`9fb5baa912674b6d35492b147e0f22d8f8330a24`, `02dd83f59a0f02badd99f6e05c083aabbe6daa96`, `9725bff25d321011da7ba5096fe0946c5a8f0059`, `93d7a93b2806d7e7660a6702c9e9b60d01dfe936`, `f6736d96616aaff51399b2733905f9e340efc8be`, `acf6bbc2ec1d90e3b0100c86f56e96b38fa7c67a`, `1bdf602f1c1da181e2839858d2f7e8aea503573a`, `75320e744f680afba06d8ad852f169242736fb19`, `6e66e36d0814a524440c05a99c849c3d62e48ed3`, `9766570827ebf50d49d8daf956deecce6666a8cc`, `b1cba9fdeba901c9d4c7bddd414ed2fd085fa7b0`]:
  - @band-store/core-flows@2.9.0
  - @band-store/pricing@2.9.0
  - @band-store/index@2.9.0
  - @band-store/link-modules@2.9.0
  - @band-store/promotion@2.9.0
  - @band-store/cart@2.9.0
  - @band-store/workflow-engine-inmemory@2.9.0
  - @band-store/framework@2.9.0
  - @band-store/admin-bundler@2.9.0
  - @band-store/analytics@2.9.0
  - @band-store/api-key@2.9.0
  - @band-store/auth@2.9.0
  - @band-store/cache-inmemory@2.9.0
  - @band-store/cache-redis@2.9.0
  - @band-store/currency@2.9.0
  - @band-store/customer@2.9.0
  - @band-store/event-bus-local@2.9.0
  - @band-store/event-bus-redis@2.9.0
  - @band-store/file@2.9.0
  - @band-store/fulfillment@2.9.0
  - @band-store/inventory@2.9.0
  - @band-store/locking@2.9.0
  - @band-store/notification@2.9.0
  - @band-store/order@2.9.0
  - @band-store/payment@2.9.0
  - @band-store/product@2.9.0
  - @band-store/analytics-local@2.9.0
  - @band-store/analytics-posthog@2.9.0
  - @band-store/auth-emailpass@2.9.0
  - @band-store/auth-github@2.9.0
  - @band-store/auth-google@2.9.0
  - @band-store/file-local@2.9.0
  - @band-store/file-s3@2.9.0
  - @band-store/fulfillment-manual@2.9.0
  - @band-store/locking-postgres@2.9.0
  - @band-store/locking-redis@2.9.0
  - @band-store/notification-local@2.9.0
  - @band-store/notification-sendgrid@2.9.0
  - @band-store/payment-stripe@2.9.0
  - @band-store/region@2.9.0
  - @band-store/sales-channel@2.9.0
  - @band-store/stock-location@2.9.0
  - @band-store/store@2.9.0
  - @band-store/tax@2.9.0
  - @band-store/user@2.9.0
  - @band-store/workflow-engine-redis@2.9.0
  - @band-store/telemetry@2.9.0

## 2.8.8

### Patch Changes

- Updated dependencies [`a28226af80a8880afbdb926a5001f0cb0d89fdc9`, `40625c82d6deb28ecb4e4c0f911c28fdd7356bf7`, `822217fa366d4399d3f6a0407451c9649197d5d9`, `97a8e5cb2e8819672803bfcd9cde19cb1ce1acc0`, `7b1debfe12fc096f7b4e20f13bdeb925c96085c1`, `43fb06ecc2d87ea2a11e12524679c142eb890ec7`, `eb83954f23077c0714125b6f2f19fd0ef0f288f9`, `8c4228fc42e717f9ab72230040e708f606a585b7`, `439c7118450c5f9ee0b541de9014093a42b7d0ea`, `238e7d53c13a1c033886d7c33254919f8b5b22dc`, `7669dbb03e2f65fa76cff1c5b90a0777e475cb47`, `2c2528a08751945d6f0363473605f1a8ef1a8a2a`, `798ac0068ed841d31f6aefc11c58738dc6bf8bd0`]:
  - @band-store/core-flows@2.8.8
  - @band-store/pricing@2.8.8
  - @band-store/link-modules@2.8.8
  - @band-store/workflow-engine-inmemory@2.8.8
  - @band-store/framework@2.8.8
  - @band-store/workflow-engine-redis@2.8.8
  - @band-store/product@2.8.8
  - @band-store/payment@2.8.8
  - @band-store/admin-bundler@2.8.8
  - @band-store/analytics@2.8.8
  - @band-store/api-key@2.8.8
  - @band-store/auth@2.8.8
  - @band-store/cache-inmemory@2.8.8
  - @band-store/cache-redis@2.8.8
  - @band-store/cart@2.8.8
  - @band-store/currency@2.8.8
  - @band-store/customer@2.8.8
  - @band-store/event-bus-local@2.8.8
  - @band-store/event-bus-redis@2.8.8
  - @band-store/file@2.8.8
  - @band-store/fulfillment@2.8.8
  - @band-store/index@2.8.8
  - @band-store/inventory@2.8.8
  - @band-store/locking@2.8.8
  - @band-store/notification@2.8.8
  - @band-store/order@2.8.8
  - @band-store/promotion@2.8.8
  - @band-store/analytics-local@2.8.8
  - @band-store/analytics-posthog@2.8.8
  - @band-store/auth-emailpass@2.8.8
  - @band-store/auth-github@2.8.8
  - @band-store/auth-google@2.8.8
  - @band-store/file-local@2.8.8
  - @band-store/file-s3@2.8.8
  - @band-store/fulfillment-manual@2.8.8
  - @band-store/locking-postgres@2.8.8
  - @band-store/locking-redis@2.8.8
  - @band-store/notification-local@2.8.8
  - @band-store/notification-sendgrid@2.8.8
  - @band-store/payment-stripe@2.8.8
  - @band-store/region@2.8.8
  - @band-store/sales-channel@2.8.8
  - @band-store/stock-location@2.8.8
  - @band-store/store@2.8.8
  - @band-store/tax@2.8.8
  - @band-store/user@2.8.8
  - @band-store/telemetry@2.8.8

## 2.8.7

### Patch Changes

- #12885 `42be9a88d61a11db7aebde2d6f4d96d43f54ea79` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix: Update TIP on promotions

- Updated dependencies [`46bf7ae7aead3f33485ce8adebb602eda305088c`, `2f70f133511857b499a992b65a0a4d6170e03ab9`, `fa76f85bba253528964bacf86c061fef6d3d0742`]:
  - @band-store/core-flows@2.8.7
  - @band-store/api-key@2.8.7
  - @band-store/auth@2.8.7
  - @band-store/cart@2.8.7
  - @band-store/currency@2.8.7
  - @band-store/file@2.8.7
  - @band-store/fulfillment@2.8.7
  - @band-store/index@2.8.7
  - @band-store/inventory@2.8.7
  - @band-store/locking@2.8.7
  - @band-store/notification@2.8.7
  - @band-store/order@2.8.7
  - @band-store/payment@2.8.7
  - @band-store/pricing@2.8.7
  - @band-store/product@2.8.7
  - @band-store/promotion@2.8.7
  - @band-store/region@2.8.7
  - @band-store/sales-channel@2.8.7
  - @band-store/stock-location@2.8.7
  - @band-store/store@2.8.7
  - @band-store/locking-postgres@2.8.7
  - @band-store/admin-bundler@2.8.7
  - @band-store/analytics@2.8.7
  - @band-store/customer@2.8.7
  - @band-store/link-modules@2.8.7
  - @band-store/tax@2.8.7
  - @band-store/user@2.8.7
  - @band-store/workflow-engine-inmemory@2.8.7
  - @band-store/workflow-engine-redis@2.8.7
  - @band-store/framework@2.8.7
  - @band-store/cache-inmemory@2.8.7
  - @band-store/cache-redis@2.8.7
  - @band-store/event-bus-local@2.8.7
  - @band-store/event-bus-redis@2.8.7
  - @band-store/analytics-local@2.8.7
  - @band-store/analytics-posthog@2.8.7
  - @band-store/auth-emailpass@2.8.7
  - @band-store/auth-github@2.8.7
  - @band-store/auth-google@2.8.7
  - @band-store/file-local@2.8.7
  - @band-store/file-s3@2.8.7
  - @band-store/fulfillment-manual@2.8.7
  - @band-store/locking-redis@2.8.7
  - @band-store/notification-local@2.8.7
  - @band-store/notification-sendgrid@2.8.7
  - @band-store/payment-stripe@2.8.7
  - @band-store/telemetry@2.8.7

## 2.8.6

### Patch Changes

- Updated dependencies [`9a62f359f1c954bcc09c57e4660f90d4b010e51c`, `95d282e8ef8f2185737d493dea8b6f1677684543`, `10dff3e26663bf23e3154f7d7c79b53280d57e8e`]:
  - @band-store/core-flows@2.8.6
  - @band-store/workflow-engine-inmemory@2.8.6
  - @band-store/workflow-engine-redis@2.8.6
  - @band-store/file-s3@2.8.6
  - @band-store/framework@2.8.6
  - @band-store/analytics@2.8.6
  - @band-store/api-key@2.8.6
  - @band-store/auth@2.8.6
  - @band-store/cart@2.8.6
  - @band-store/currency@2.8.6
  - @band-store/customer@2.8.6
  - @band-store/file@2.8.6
  - @band-store/fulfillment@2.8.6
  - @band-store/index@2.8.6
  - @band-store/inventory@2.8.6
  - @band-store/link-modules@2.8.6
  - @band-store/locking@2.8.6
  - @band-store/notification@2.8.6
  - @band-store/order@2.8.6
  - @band-store/payment@2.8.6
  - @band-store/pricing@2.8.6
  - @band-store/product@2.8.6
  - @band-store/promotion@2.8.6
  - @band-store/region@2.8.6
  - @band-store/sales-channel@2.8.6
  - @band-store/stock-location@2.8.6
  - @band-store/store@2.8.6
  - @band-store/tax@2.8.6
  - @band-store/user@2.8.6
  - @band-store/cache-inmemory@2.8.6
  - @band-store/cache-redis@2.8.6
  - @band-store/event-bus-local@2.8.6
  - @band-store/event-bus-redis@2.8.6
  - @band-store/analytics-local@2.8.6
  - @band-store/analytics-posthog@2.8.6
  - @band-store/auth-emailpass@2.8.6
  - @band-store/auth-github@2.8.6
  - @band-store/auth-google@2.8.6
  - @band-store/file-local@2.8.6
  - @band-store/fulfillment-manual@2.8.6
  - @band-store/locking-postgres@2.8.6
  - @band-store/locking-redis@2.8.6
  - @band-store/notification-local@2.8.6
  - @band-store/notification-sendgrid@2.8.6
  - @band-store/payment-stripe@2.8.6
  - @band-store/admin-bundler@2.8.6
  - @band-store/telemetry@2.8.6

## 2.8.5

### Patch Changes

- #12815 `6ca755ede7bfe3211464447412ca0d97e1207742` Thanks [@anteprimorac](https://github.com/anteprimorac)! - Enable filtering admin products API by variant EAN, UPC, and barcode

- #12713 `cbf3644eb7c8a24eaed879647b58c9ece3373c0e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Add retry strategy to database connection

- #12813 `d517dbd66a47817d1270c278b03add9a5c4244cb` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add support for jwt asymetric keys

- #12412 `2621f00bb035a6b909f9498a2bc98fdba8570ba9` Thanks [@fPolic](https://github.com/fPolic)! - feat(promotion, dashboard, core-flows, cart, types, utils, Band Store): tax inclusive promotions

- #12761 `94b62c67249d13ec6342411cf7efdedfd0ac47e1` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: fallback to console with req.scope is undefined

- Updated dependencies [`ab634a14ba709f1b1d12eb4cd5c7f3db6bfe6470`, `ba1e6595b74ae69f4ee066d545f8def8aff77dd3`, `f2cb528a5650fe112ca8eeb4bdffc5f0b217338a`, `cbf3644eb7c8a24eaed879647b58c9ece3373c0e`, `d517dbd66a47817d1270c278b03add9a5c4244cb`, `820a936b9836ae83e7a45de1e1ed0488d8cde2fd`, `2621f00bb035a6b909f9498a2bc98fdba8570ba9`, `672871b733c6e82bd9e68cf90300ff78cf44727a`, `bd6d9777c50d69115a20334a103a8ab9997b259d`, `316a325b63e92003df25452faf88e577e9133064`, `00505b4f8e49873123111752adfda47ccb35ab46`, `7a8f639b382e20328879ce6d9e93ea2c79f380b5`, `94b62c67249d13ec6342411cf7efdedfd0ac47e1`, `1a7847660890ae84648123567ce8dc4c9a0eca03`]:
  - @band-store/auth@2.8.5
  - @band-store/customer@2.8.5
  - @band-store/fulfillment@2.8.5
  - @band-store/inventory@2.8.5
  - @band-store/payment@2.8.5
  - @band-store/file-local@2.8.5
  - @band-store/core-flows@2.8.5
  - @band-store/framework@2.8.5
  - @band-store/user@2.8.5
  - @band-store/auth-google@2.8.5
  - @band-store/promotion@2.8.5
  - @band-store/cart@2.8.5
  - @band-store/workflow-engine-inmemory@2.8.5
  - @band-store/workflow-engine-redis@2.8.5
  - @band-store/admin-bundler@2.8.5
  - @band-store/analytics@2.8.5
  - @band-store/api-key@2.8.5
  - @band-store/currency@2.8.5
  - @band-store/file@2.8.5
  - @band-store/index@2.8.5
  - @band-store/link-modules@2.8.5
  - @band-store/locking@2.8.5
  - @band-store/notification@2.8.5
  - @band-store/order@2.8.5
  - @band-store/pricing@2.8.5
  - @band-store/product@2.8.5
  - @band-store/region@2.8.5
  - @band-store/sales-channel@2.8.5
  - @band-store/stock-location@2.8.5
  - @band-store/store@2.8.5
  - @band-store/tax@2.8.5
  - @band-store/cache-inmemory@2.8.5
  - @band-store/cache-redis@2.8.5
  - @band-store/event-bus-local@2.8.5
  - @band-store/event-bus-redis@2.8.5
  - @band-store/analytics-local@2.8.5
  - @band-store/analytics-posthog@2.8.5
  - @band-store/auth-emailpass@2.8.5
  - @band-store/auth-github@2.8.5
  - @band-store/file-s3@2.8.5
  - @band-store/fulfillment-manual@2.8.5
  - @band-store/locking-postgres@2.8.5
  - @band-store/locking-redis@2.8.5
  - @band-store/notification-local@2.8.5
  - @band-store/notification-sendgrid@2.8.5
  - @band-store/payment-stripe@2.8.5
  - @band-store/telemetry@2.8.5

## 2.8.4

### Patch Changes

- Updated dependencies [`7685d66c0775167994150e61a8b628ad6289ce23`, `820965e21aa7b7cfb57936ef903c6d1f5a7a7a77`, `791276e80f5745c8885352b7979c0faa979110f4`, `c4dd29046183bfe3c99b7ec00414449e53478d22`, `490bd7647fca30951d14c7c78c1b809379ebd870`, `cf0297f74af1b043363ffbd5a23ca0933097a69d`, `1f5f50010ae42f8d5b9924edcd75612b1f336463`]:
  - @band-store/framework@2.8.4
  - @band-store/analytics@2.8.4
  - @band-store/file@2.8.4
  - @band-store/file-local@2.8.4
  - @band-store/file-s3@2.8.4
  - @band-store/core-flows@2.8.4
  - @band-store/api-key@2.8.4
  - @band-store/auth@2.8.4
  - @band-store/cache-inmemory@2.8.4
  - @band-store/cache-redis@2.8.4
  - @band-store/cart@2.8.4
  - @band-store/currency@2.8.4
  - @band-store/customer@2.8.4
  - @band-store/event-bus-local@2.8.4
  - @band-store/event-bus-redis@2.8.4
  - @band-store/fulfillment@2.8.4
  - @band-store/index@2.8.4
  - @band-store/inventory@2.8.4
  - @band-store/link-modules@2.8.4
  - @band-store/locking@2.8.4
  - @band-store/notification@2.8.4
  - @band-store/order@2.8.4
  - @band-store/payment@2.8.4
  - @band-store/pricing@2.8.4
  - @band-store/product@2.8.4
  - @band-store/promotion@2.8.4
  - @band-store/analytics-local@2.8.4
  - @band-store/analytics-posthog@2.8.4
  - @band-store/auth-emailpass@2.8.4
  - @band-store/auth-github@2.8.4
  - @band-store/auth-google@2.8.4
  - @band-store/fulfillment-manual@2.8.4
  - @band-store/locking-postgres@2.8.4
  - @band-store/locking-redis@2.8.4
  - @band-store/notification-local@2.8.4
  - @band-store/notification-sendgrid@2.8.4
  - @band-store/payment-stripe@2.8.4
  - @band-store/region@2.8.4
  - @band-store/sales-channel@2.8.4
  - @band-store/stock-location@2.8.4
  - @band-store/store@2.8.4
  - @band-store/tax@2.8.4
  - @band-store/user@2.8.4
  - @band-store/workflow-engine-inmemory@2.8.4
  - @band-store/workflow-engine-redis@2.8.4
  - @band-store/admin-bundler@2.8.4
  - @band-store/telemetry@2.8.4

## 2.8.3

### Patch Changes

- #12539 `d9fdabe96d05108355c01081ea15d39467e40268` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: mark posthog-node as a peer dependency

- #12527 `fca5ad77b41856867ec68b1e46d04f1bb71cbc76` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: process import from pre-processed chunks

- #12467 `32be40a2c09be2f793b5d348a3dd62e9312f46c9` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(Band Store): add estimate count property on admin/products

- Updated dependencies [`dd667204048d3d9e0a6a9edc5426128293145c86`, `d9fdabe96d05108355c01081ea15d39467e40268`, `fca5ad77b41856867ec68b1e46d04f1bb71cbc76`, `ac49eb9a6c4ba0bd82b146f465790fd4546701c9`, `4e49cebcf0f053cb89012276e935a7ec62a12046`, `59bbff62d81861282d55a32d6c0c45285203c4e0`, `499381d1194b33c8212e6e995a3208364c3ab188`, `52bd9f9a53f6e63e5fbe0beb1fb2c650d88f7c88`, `ebe5cc7acddb7c61dc82fd8ec7f2fe3779104a99`, `41054a34199168f0b949c3cda0bbe667da2c5993`, `c5a6573e26b403b86f53b88c307ea311a1bd9230`, `3071d09a03205597158afe79d55dd43643a97026`]:
  - @band-store/index@2.8.3
  - @band-store/analytics-posthog@2.8.3
  - @band-store/core-flows@2.8.3
  - @band-store/link-modules@2.8.3
  - @band-store/product@2.8.3
  - @band-store/admin-bundler@2.8.3
  - @band-store/framework@2.8.3
  - @band-store/analytics@2.8.3
  - @band-store/api-key@2.8.3
  - @band-store/auth@2.8.3
  - @band-store/cart@2.8.3
  - @band-store/currency@2.8.3
  - @band-store/customer@2.8.3
  - @band-store/file@2.8.3
  - @band-store/fulfillment@2.8.3
  - @band-store/inventory@2.8.3
  - @band-store/locking@2.8.3
  - @band-store/notification@2.8.3
  - @band-store/order@2.8.3
  - @band-store/payment@2.8.3
  - @band-store/pricing@2.8.3
  - @band-store/promotion@2.8.3
  - @band-store/region@2.8.3
  - @band-store/sales-channel@2.8.3
  - @band-store/stock-location@2.8.3
  - @band-store/store@2.8.3
  - @band-store/tax@2.8.3
  - @band-store/user@2.8.3
  - @band-store/workflow-engine-inmemory@2.8.3
  - @band-store/workflow-engine-redis@2.8.3
  - @band-store/cache-inmemory@2.8.3
  - @band-store/cache-redis@2.8.3
  - @band-store/event-bus-local@2.8.3
  - @band-store/event-bus-redis@2.8.3
  - @band-store/analytics-local@2.8.3
  - @band-store/auth-emailpass@2.8.3
  - @band-store/auth-github@2.8.3
  - @band-store/auth-google@2.8.3
  - @band-store/file-local@2.8.3
  - @band-store/file-s3@2.8.3
  - @band-store/fulfillment-manual@2.8.3
  - @band-store/locking-postgres@2.8.3
  - @band-store/locking-redis@2.8.3
  - @band-store/notification-local@2.8.3
  - @band-store/notification-sendgrid@2.8.3
  - @band-store/payment-stripe@2.8.3
  - @band-store/telemetry@2.8.3

## 2.8.2

### Patch Changes

- Updated dependencies [`9f4d32b2201d8c87d84c59b9a1ca59e00bcc6af1`, `e149a998862272fff80573a623c4d9010cb0b104`]:
  - @band-store/core-flows@2.8.2
  - @band-store/admin-bundler@2.8.2
  - @band-store/framework@2.8.2
  - @band-store/api-key@2.8.2
  - @band-store/auth@2.8.2
  - @band-store/cache-inmemory@2.8.2
  - @band-store/cache-redis@2.8.2
  - @band-store/cart@2.8.2
  - @band-store/currency@2.8.2
  - @band-store/customer@2.8.2
  - @band-store/event-bus-local@2.8.2
  - @band-store/event-bus-redis@2.8.2
  - @band-store/file@2.8.2
  - @band-store/fulfillment@2.8.2
  - @band-store/index@2.8.2
  - @band-store/inventory@2.8.2
  - @band-store/link-modules@2.8.2
  - @band-store/locking@2.8.2
  - @band-store/notification@2.8.2
  - @band-store/order@2.8.2
  - @band-store/payment@2.8.2
  - @band-store/pricing@2.8.2
  - @band-store/product@2.8.2
  - @band-store/promotion@2.8.2
  - @band-store/auth-emailpass@2.8.2
  - @band-store/auth-github@2.8.2
  - @band-store/auth-google@2.8.2
  - @band-store/file-local@2.8.2
  - @band-store/file-s3@2.8.2
  - @band-store/fulfillment-manual@2.8.2
  - @band-store/locking-postgres@2.8.2
  - @band-store/locking-redis@2.8.2
  - @band-store/notification-local@2.8.2
  - @band-store/notification-sendgrid@2.8.2
  - @band-store/payment-stripe@2.8.2
  - @band-store/region@2.8.2
  - @band-store/sales-channel@2.8.2
  - @band-store/stock-location@2.8.2
  - @band-store/store@2.8.2
  - @band-store/tax@2.8.2
  - @band-store/user@2.8.2
  - @band-store/workflow-engine-inmemory@2.8.2
  - @band-store/workflow-engine-redis@2.8.2
  - @band-store/telemetry@2.8.2

## 2.8.1

### Patch Changes

- Updated dependencies [`4602163b568962f8115b83971d67a6c55c2b8a98`, `c661e064885ca0a874a443b293f9bb48b2742cf7`, `ab22faaa52008ad952d50f0a3b6b1148515b10c9`, `142a1f0a5be60d2cc013ecb174bca7b1381c6551`]:
  - @band-store/core-flows@2.8.1
  - @band-store/index@2.8.1
  - @band-store/workflow-engine-inmemory@2.8.1
  - @band-store/workflow-engine-redis@2.8.1
  - @band-store/product@2.8.1
  - @band-store/framework@2.8.1
  - @band-store/api-key@2.8.1
  - @band-store/auth@2.8.1
  - @band-store/cart@2.8.1
  - @band-store/currency@2.8.1
  - @band-store/customer@2.8.1
  - @band-store/file@2.8.1
  - @band-store/fulfillment@2.8.1
  - @band-store/inventory@2.8.1
  - @band-store/link-modules@2.8.1
  - @band-store/locking@2.8.1
  - @band-store/notification@2.8.1
  - @band-store/order@2.8.1
  - @band-store/payment@2.8.1
  - @band-store/pricing@2.8.1
  - @band-store/promotion@2.8.1
  - @band-store/region@2.8.1
  - @band-store/sales-channel@2.8.1
  - @band-store/stock-location@2.8.1
  - @band-store/store@2.8.1
  - @band-store/tax@2.8.1
  - @band-store/user@2.8.1
  - @band-store/cache-inmemory@2.8.1
  - @band-store/cache-redis@2.8.1
  - @band-store/event-bus-local@2.8.1
  - @band-store/event-bus-redis@2.8.1
  - @band-store/auth-emailpass@2.8.1
  - @band-store/auth-github@2.8.1
  - @band-store/auth-google@2.8.1
  - @band-store/file-local@2.8.1
  - @band-store/file-s3@2.8.1
  - @band-store/fulfillment-manual@2.8.1
  - @band-store/locking-postgres@2.8.1
  - @band-store/locking-redis@2.8.1
  - @band-store/notification-local@2.8.1
  - @band-store/notification-sendgrid@2.8.1
  - @band-store/payment-stripe@2.8.1
  - @band-store/admin-bundler@2.8.1
  - @band-store/telemetry@2.8.1

## 2.8.0

### Patch Changes

- #12353 `469ecef3c52797b812c9cb8a4410f632e8de8b8c` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor revamp of cart completion

- #12345 `aba4cba373aa6499ca7cce77e7515613c38c681d` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Support additional data on admin/collections

- #12393 `2dd885ebc12303b9b1741a2785560da44d4e4e28` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): check if tax module is installed when running tax migration script

- #12266 `cb53b8a5290708b395e1cf1f1a75ec6ff518f7b7` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: upgrade opentelemetry packages to support the latest release

- #12297 `9cedeb182dc19d6127b602fc06e4b8850490e2a9` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard, js-sdk, Band Store, tax, types): custom tax providers

- #12450 `32e0194772cd44efa1930f2ee99f147fa2976f1f` Thanks [@fPolic](https://github.com/fPolic)! - fix(dashboard, Band Store): validate provider exists when creating a top level tax region

- Updated dependencies [`469ecef3c52797b812c9cb8a4410f632e8de8b8c`, `0d8af119c5f000addcbc2431c61711b51e7b34b1`, `77c3023200f5c718a77220f39b300e9149a92a4f`, `a53d645f8aab30135baebac29f9645dd35d47632`, `90c61d189806894c56bfd5686807406c800cfdeb`, `c4dd805849fee483d52ee61078e15f9be111b414`, `89859987565b1fc872c7cd1c6d23144b97f454bc`, `2c49e8b7332420c9fc949f9429a339fcbf5637af`, `9cedeb182dc19d6127b602fc06e4b8850490e2a9`, `e4d853185f103ffc81fcf14df02e84cd5c538f9a`, `d7a273ff2def96420054f31114a46294be6ee968`, `fff285f8d2f3020a24b83066fa4250130fdcf229`, `b868a4ef4deb7df09d6156a907f4c883cd55a3fd`, `80007f3afda76eabd5b148fa6bb5590fa6987265`, `5fe0e8250d0255866a68db32d4b54dab8ab66e52`]:
  - @band-store/core-flows@2.8.0
  - @band-store/product@2.8.0
  - @band-store/tax@2.8.0
  - @band-store/index@2.8.0
  - @band-store/framework@2.8.0
  - @band-store/link-modules@2.8.0
  - @band-store/pricing@2.8.0
  - @band-store/workflow-engine-inmemory@2.8.0
  - @band-store/workflow-engine-redis@2.8.0
  - @band-store/admin-bundler@2.8.0
  - @band-store/api-key@2.8.0
  - @band-store/auth@2.8.0
  - @band-store/cache-inmemory@2.8.0
  - @band-store/cache-redis@2.8.0
  - @band-store/cart@2.8.0
  - @band-store/currency@2.8.0
  - @band-store/customer@2.8.0
  - @band-store/event-bus-local@2.8.0
  - @band-store/event-bus-redis@2.8.0
  - @band-store/file@2.8.0
  - @band-store/fulfillment@2.8.0
  - @band-store/inventory@2.8.0
  - @band-store/locking@2.8.0
  - @band-store/notification@2.8.0
  - @band-store/order@2.8.0
  - @band-store/payment@2.8.0
  - @band-store/promotion@2.8.0
  - @band-store/auth-emailpass@2.8.0
  - @band-store/auth-github@2.8.0
  - @band-store/auth-google@2.8.0
  - @band-store/file-local@2.8.0
  - @band-store/file-s3@2.8.0
  - @band-store/fulfillment-manual@2.8.0
  - @band-store/locking-postgres@2.8.0
  - @band-store/locking-redis@2.8.0
  - @band-store/notification-local@2.8.0
  - @band-store/notification-sendgrid@2.8.0
  - @band-store/payment-stripe@2.8.0
  - @band-store/region@2.8.0
  - @band-store/sales-channel@2.8.0
  - @band-store/stock-location@2.8.0
  - @band-store/store@2.8.0
  - @band-store/user@2.8.0
  - @band-store/telemetry@2.8.0

## 2.7.1

### Patch Changes

- #12124 `01542f69737b48346d924670296c551e4c4b47ec` Thanks [@fPolic](https://github.com/fPolic)! - feat(core-flows,js-sdk,Band Store): draft order shipping removal

- Updated dependencies [`24af8f2d8e27d0f842e6e596bc4c695882f67737`, `ee35f3ce9097832c10cdf2fd168763088e6c3fcb`, `01542f69737b48346d924670296c551e4c4b47ec`, `413a0da26c7e9acffe9cc087fd77500efc76191a`, `4ea1a2e09fc220555166c9bb013c0e11c99b4235`, `2f6963a5fbea05537680cb1b1f6a2b9822c36325`, `b8902637251e9ed4f8762ef280659bbab6d967de`, `ad74ba2ca4c86b38c91c342edfad077cd132cc2f`, `8618e6ee3843069ea189ea64d5191d93db52dc9d`, `19d71fdc63547886cfc238c6b680370a80d50b50`]:
  - @band-store/core-flows@2.7.1
  - @band-store/framework@2.7.1
  - @band-store/index@2.7.1
  - @band-store/event-bus-local@2.7.1
  - @band-store/workflow-engine-inmemory@2.7.1
  - @band-store/workflow-engine-redis@2.7.1
  - @band-store/api-key@2.7.1
  - @band-store/auth@2.7.1
  - @band-store/cache-inmemory@2.7.1
  - @band-store/cache-redis@2.7.1
  - @band-store/cart@2.7.1
  - @band-store/currency@2.7.1
  - @band-store/customer@2.7.1
  - @band-store/event-bus-redis@2.7.1
  - @band-store/file@2.7.1
  - @band-store/fulfillment@2.7.1
  - @band-store/inventory@2.7.1
  - @band-store/link-modules@2.7.1
  - @band-store/locking@2.7.1
  - @band-store/notification@2.7.1
  - @band-store/order@2.7.1
  - @band-store/payment@2.7.1
  - @band-store/pricing@2.7.1
  - @band-store/product@2.7.1
  - @band-store/promotion@2.7.1
  - @band-store/auth-emailpass@2.7.1
  - @band-store/auth-github@2.7.1
  - @band-store/auth-google@2.7.1
  - @band-store/file-local@2.7.1
  - @band-store/file-s3@2.7.1
  - @band-store/fulfillment-manual@2.7.1
  - @band-store/locking-postgres@2.7.1
  - @band-store/locking-redis@2.7.1
  - @band-store/notification-local@2.7.1
  - @band-store/notification-sendgrid@2.7.1
  - @band-store/payment-stripe@2.7.1
  - @band-store/region@2.7.1
  - @band-store/sales-channel@2.7.1
  - @band-store/stock-location@2.7.1
  - @band-store/store@2.7.1
  - @band-store/tax@2.7.1
  - @band-store/user@2.7.1
  - @band-store/admin-bundler@2.7.1
  - @band-store/telemetry@2.7.1

## 2.7.0

### Patch Changes

- #11720 `ec56a8bc857a74788df6523af25914da95c4c1d8` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store,utils,test-utils,types,framework,dashboard,admin-vite-plugin,admib-bundler): Fix broken plugin dependencies in development server

- #12113 `2a18a75353f872b0cb4c203afc08cfd82f778428` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(framework): slightly improve maybe apply link filter middleware

- #11876 `c3440e5e3812e3d1c6b82e9d4e41287398451611` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types,js-sdk): add enabled plugins route

- #12028 `3dba58785fb2d8e79f1ea89daa9e4ab8810821c8` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(dashboard,Band Store,types): allow searching for promotion rule options

- #12006 `1895d8cc1141b28525acfc21715f6f523b8194a2` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(Band Store): skip index module when tags or categories present

- #11821 `5cf0bf4d93b5fd965680223dd448324c5135426e` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: transform filter before query.index

- #11569 `cb6249320e7322e8eabfec8434f1278f8d63e96c` Thanks [@riqwan](https://github.com/riqwan)! - feat(order,types,Band Store,core-flows): fix(types,order,Band Store,core-flows): create order credit lines during order refund

- #12025 `2f7eb0ee030966844b45dd00b2259e68b9fb0e83` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: validate module names to disallow unallowed characters

- Updated dependencies [`386205d0f41828b82d519d2f5b8e07b41907a8ae`, `07252691c59f0e945730e987d0f1a97976b4c7f0`, `9bf1e52d25131d0a976b50992ad4cd230ac90d8e`, `74381addc3d6af42f0292e778948aabb60a6dad9`, `ec56a8bc857a74788df6523af25914da95c4c1d8`, `2a18a75353f872b0cb4c203afc08cfd82f778428`, `5f3a82f5c341d4a98a7a2ab92563f6cdae1cdce1`, `72d2cf92075b3e0849251f233517e2972de1b19c`, `95e89a39f347c8af6a5960943af56965bc3a07ba`, `b1b3b484747a110f720d9c1d086696bbfba86bda`, `67b308c8eb52950991df34ac1c8d007a14cfaa1e`, `fc652ea51e4fdc19e8b15f1ac8a08effbc68ea30`, `0625f76cd4f040963829b61dcc70563e1d1b7070`, `aa6d5aa3cf45a07f6276bea8592ad0743c846165`, `cae47d9e49e9a17d8395f7b390f6ec0a2f9b8dc2`, `3a1cf2212ac3d92eebee1bbea07e8731e53e4c72`, `d87b25203c3e1aa9b975dc68818d66fe877657a6`, `5cf0bf4d93b5fd965680223dd448324c5135426e`, `cb26c224ea3e0e06fa9efb1c317d4529bfcb2d49`, `cb6249320e7322e8eabfec8434f1278f8d63e96c`, `6053ec3976d5ebd18680eba5eff3c71038a108cb`, `1f8fab36361aa8e473ffe6c411c8598a916a6d3f`, `13e159d8ad7ebb3e6977969b4bb10877d7bb7850`, `6015dcc16d6d9af15575bee98fb5727c6a6d9fd2`, `8385a5e34d9528eb3d80d16f391ee7f44a6e5d90`, `a8513019db08d1345e79a15aea7f11389b4918d4`, `9dd62d93bd9e2acccc2e9f22bc029fd2b0df3234`, `2270f29ec544b14c26b246a59f80be121f8014a1`, `01089d5bc81bc92311bb43b2d57d987fee378030`, `c870a7a1baf7db748a831265f06dd4b7378b262e`, `9ac74eead4760d6c92676d451e6f25c2305b1852`]:
  - @band-store/core-flows@2.7.0
  - @band-store/link-modules@2.7.0
  - @band-store/pricing@2.7.0
  - @band-store/order@2.7.0
  - @band-store/fulfillment@2.7.0
  - @band-store/index@2.7.0
  - @band-store/inventory@2.7.0
  - @band-store/user@2.7.0
  - @band-store/admin-bundler@2.7.0
  - @band-store/framework@2.7.0
  - @band-store/workflow-engine-inmemory@2.7.0
  - @band-store/workflow-engine-redis@2.7.0
  - @band-store/promotion@2.7.0
  - @band-store/locking@2.7.0
  - @band-store/cart@2.7.0
  - @band-store/product@2.7.0
  - @band-store/api-key@2.7.0
  - @band-store/auth@2.7.0
  - @band-store/currency@2.7.0
  - @band-store/customer@2.7.0
  - @band-store/file@2.7.0
  - @band-store/notification@2.7.0
  - @band-store/payment@2.7.0
  - @band-store/region@2.7.0
  - @band-store/sales-channel@2.7.0
  - @band-store/stock-location@2.7.0
  - @band-store/store@2.7.0
  - @band-store/tax@2.7.0
  - @band-store/cache-inmemory@2.7.0
  - @band-store/cache-redis@2.7.0
  - @band-store/event-bus-local@2.7.0
  - @band-store/event-bus-redis@2.7.0
  - @band-store/auth-emailpass@2.7.0
  - @band-store/auth-github@2.7.0
  - @band-store/auth-google@2.7.0
  - @band-store/file-local@2.7.0
  - @band-store/file-s3@2.7.0
  - @band-store/fulfillment-manual@2.7.0
  - @band-store/locking-postgres@2.7.0
  - @band-store/locking-redis@2.7.0
  - @band-store/notification-local@2.7.0
  - @band-store/notification-sendgrid@2.7.0
  - @band-store/payment-stripe@2.7.0
  - @band-store/telemetry@2.7.0

## 2.6.1

### Patch Changes

- #11789 `62e429178f3abe0a528f7a574eb6a09ac525bf9c` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Use correct query config for customer address

- #11788 `90964a404edbb079d7de332a11ab97c4f5643d67` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Apply middleware to GET customers/:id/addresses/:address_id

- #11724 `cc1309d3709b251683a0cda0ced448f8bf9f514e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(product): Improve product normalization

- #11738 `3b470f41427e487c68f89b8ee8155de716ffe861` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove ranges on Band Store packages

- #11759 `2a0bd86204c9dd51a012763016f2de822d3c45b6` Thanks [@thetutlage](https://github.com/thetutlage)! - chore: pin swc to 1.5.7

- Updated dependencies [`b7678983a9b3e5c4d88282054b37b6c517329bd7`, `cc1309d3709b251683a0cda0ced448f8bf9f514e`, `70eaaa91965dbe3a641dc634b4e81069d73846ed`, `3b470f41427e487c68f89b8ee8155de716ffe861`, `20cd59e622463fbd46506275648ce681869adcdf`, `84f991192ec288f90af36c5352448b2785901d1a`, `16d7294de805e314f36b302c7b3bbdb126ae5c96`, `cc8422d3a163d18492e1bd6de50e0796ca34a41f`]:
  - @band-store/core-flows@2.6.1
  - @band-store/cart@2.6.1
  - @band-store/product@2.6.1
  - @band-store/framework@2.6.1
  - @band-store/notification-sendgrid@2.6.1
  - @band-store/fulfillment-manual@2.6.1
  - @band-store/notification-local@2.6.1
  - @band-store/locking-postgres@2.6.1
  - @band-store/auth-emailpass@2.6.1
  - @band-store/payment-stripe@2.6.1
  - @band-store/workflow-engine-inmemory@2.6.1
  - @band-store/locking-redis@2.6.1
  - @band-store/auth-github@2.6.1
  - @band-store/auth-google@2.6.1
  - @band-store/workflow-engine-redis@2.6.1
  - @band-store/file-local@2.6.1
  - @band-store/file-s3@2.6.1
  - @band-store/event-bus-local@2.6.1
  - @band-store/event-bus-redis@2.6.1
  - @band-store/cache-inmemory@2.6.1
  - @band-store/stock-location@2.6.1
  - @band-store/sales-channel@2.6.1
  - @band-store/link-modules@2.6.1
  - @band-store/notification@2.6.1
  - @band-store/admin-bundler@2.6.1
  - @band-store/cache-redis@2.6.1
  - @band-store/fulfillment@2.6.1
  - @band-store/inventory@2.6.1
  - @band-store/promotion@2.6.1
  - @band-store/currency@2.6.1
  - @band-store/customer@2.6.1
  - @band-store/api-key@2.6.1
  - @band-store/locking@2.6.1
  - @band-store/payment@2.6.1
  - @band-store/pricing@2.6.1
  - @band-store/region@2.6.1
  - @band-store/index@2.6.1
  - @band-store/order@2.6.1
  - @band-store/store@2.6.1
  - @band-store/auth@2.6.1
  - @band-store/file@2.6.1
  - @band-store/user@2.6.1
  - @band-store/tax@2.6.1
  - @band-store/telemetry@2.6.1

## 2.6.0

### Minor Changes

- `d172ad8ebc4677bba73c36465c973f4784dc50ae` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Move token from query params to authorization header

### Patch Changes

- #11604 `8bb0a25f573c62ca1d1bcd7af184b0d0cf98e125` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types, Band Store): remove fulfillment and payment status filters from validator + http types

- #11692 `51b0af193c7dde4899a696a515b59373b465d907` Thanks [@riqwan](https://github.com/riqwan)! - fix(types,Band Store): calculate taxes for original price

- #11226 `93cbc6b6695f236fa39b66169de971228888f1b9` Thanks [@bouazzaayyoub](https://github.com/bouazzaayyoub)! - fix: add additionl data to product categories hook

- #11664 `e23f204b7ca0f195e36fef2ba0bae7a686b8da4f` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows, dashboard, Band Store): prevent creatiion of a fulfilment without items

- #11646 `aabbbb7292a59ec029a6165451aa6d949844b2ea` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: Replace existing router with the new implementation

- Updated dependencies [`eeebb35758ea443468dd2355a7ea761dfe24babc`, `93cbc6b6695f236fa39b66169de971228888f1b9`, `322d108c0395757b4655a1e0055d722acf127b36`, `d1efad9bf05ca80959e8b50d74b74167fc1b0064`, `caf83cf78cb6d2dbd1837f6814062dafecbd04fa`, `c250de79192bda1b1cd217bcca37f458c693de1d`, `228b7b608dfa935618179684fa3d005f7a9aaf01`, `38beeb157eadcd7dabe814119c48b5ddbc17fe20`, `b42f151be31161a5d7a73132ee6794b990403d76`, `03731c7660fe5dca3c6d3c38a2a71eb2ea89e192`, `cad8b40c130e371d615d3bd953bb466fb4ac54a8`, `7dbec10b3bdde8a9f869080d5ef2c3c97fca1077`, `fa1793e8e92164251c776859dea7a5e312ef9432`, `e23f204b7ca0f195e36fef2ba0bae7a686b8da4f`]:
  - @band-store/product@2.6.0
  - @band-store/core-flows@2.6.0
  - @band-store/cart@2.6.0
  - @band-store/cache-redis@2.6.0
  - @band-store/event-bus-redis@2.6.0
  - @band-store/workflow-engine-redis@2.6.0
  - @band-store/locking-redis@2.6.0
  - @band-store/link-modules@2.6.0
  - @band-store/inventory@2.6.0
  - @band-store/order@2.6.0
  - @band-store/admin-bundler@2.6.0
  - @band-store/telemetry@2.6.0
  - @band-store/api-key@2.6.0
  - @band-store/auth@2.6.0
  - @band-store/cache-inmemory@2.6.0
  - @band-store/currency@2.6.0
  - @band-store/customer@2.6.0
  - @band-store/event-bus-local@2.6.0
  - @band-store/file@2.6.0
  - @band-store/fulfillment@2.6.0
  - @band-store/index@2.6.0
  - @band-store/locking@2.6.0
  - @band-store/notification@2.6.0
  - @band-store/payment@2.6.0
  - @band-store/pricing@2.6.0
  - @band-store/promotion@2.6.0
  - @band-store/auth-emailpass@2.6.0
  - @band-store/auth-github@2.6.0
  - @band-store/auth-google@2.6.0
  - @band-store/file-local@2.6.0
  - @band-store/file-s3@2.6.0
  - @band-store/fulfillment-manual@2.6.0
  - @band-store/locking-postgres@2.6.0
  - @band-store/notification-local@2.6.0
  - @band-store/notification-sendgrid@2.6.0
  - @band-store/payment-stripe@2.6.0
  - @band-store/region@2.6.0
  - @band-store/sales-channel@2.6.0
  - @band-store/stock-location@2.6.0
  - @band-store/store@2.6.0
  - @band-store/tax@2.6.0
  - @band-store/user@2.6.0
  - @band-store/workflow-engine-inmemory@2.6.0

## 2.5.1

### Patch Changes

- #11485 `a5ff1b92cefe6744bc1abfc164cdcd6515b1a6d4` Thanks [@thetutlage](https://github.com/thetutlage)! - refactor: remove host from the server ready log

- #11460 `bc02fde2367c257738bbf9b8ac2ad02cbe2a8f55` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: allow all NodeSDK options via registerOtel

- #11398 `681121bb192145669b500ce3a01ad7d06356a396` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Make Shipping Methods optional on create draft orders endpoint, and allow passing a address ID for both billing and shipping address.

- #11472 `825b8ad260df1e71843fbd62c7f4b2978617033d` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Allow filtering products by handle and title as either string or array of strings

- #11514 `3b4997840e624ef8da1a75744b4bfb5c5a371f7c` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store,js-sdk,types): Add basic draft order operations to js-sdk

- #11431 `448dbcb5963c732c9c3b822b81330556bcf883cd` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): index engine feature flag

- #11519 `0e6ffad30f1bd9e9f18c9040447c63077df09da2` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: allow setting DB_PORT and DATABASE_URL env variables

- #11468 `32c5015f563b7d60221a472635b44820fe4ef1f6` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: generate posix paths for migrations

- #11464 `ceb99d073a3cb1d1b63b3c5dffd193c7664d75eb` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Re throw error in instrumentation after reporting it

- Updated dependencies [`22276648ad0aef12206464b555efdce97e316bb4`, `77f37c5f97562825895900861ca9b27327cee5fb`, `d6c03ee5427457237e3c739545a8816cc3a3198e`, `efd66c0d59e043218fa66163a7e9cd72bb6b5de1`, `0c957350a6688c78572361b51c1f16a452a31aed`, `448dbcb5963c732c9c3b822b81330556bcf883cd`, `065df75e7d5b90a4de43873d8c08e1aab65e3fd7`, `47edd01deec79b394552cea349f1e41b7b88723b`, `b37010857ab1bccda96b4694298659cc6d8f14ef`]:
  - @band-store/index@2.5.1
  - @band-store/file@2.5.1
  - @band-store/core-flows@2.5.1
  - @band-store/order@2.5.1
  - @band-store/product@2.5.1
  - @band-store/admin-bundler@2.5.1
  - @band-store/telemetry@2.5.1
  - @band-store/api-key@2.5.1
  - @band-store/auth@2.5.1
  - @band-store/cache-inmemory@2.5.1
  - @band-store/cache-redis@2.5.1
  - @band-store/cart@2.5.1
  - @band-store/currency@2.5.1
  - @band-store/customer@2.5.1
  - @band-store/event-bus-local@2.5.1
  - @band-store/event-bus-redis@2.5.1
  - @band-store/fulfillment@2.5.1
  - @band-store/inventory@2.5.1
  - @band-store/link-modules@2.5.1
  - @band-store/locking@2.5.1
  - @band-store/notification@2.5.1
  - @band-store/payment@2.5.1
  - @band-store/pricing@2.5.1
  - @band-store/promotion@2.5.1
  - @band-store/auth-emailpass@2.5.1
  - @band-store/auth-github@2.5.1
  - @band-store/auth-google@2.5.1
  - @band-store/file-local@2.5.1
  - @band-store/file-s3@2.5.1
  - @band-store/fulfillment-manual@2.5.1
  - @band-store/locking-postgres@2.5.1
  - @band-store/locking-redis@2.5.1
  - @band-store/notification-local@2.5.1
  - @band-store/notification-sendgrid@2.5.1
  - @band-store/payment-stripe@2.5.1
  - @band-store/region@2.5.1
  - @band-store/sales-channel@2.5.1
  - @band-store/stock-location@2.5.1
  - @band-store/store@2.5.1
  - @band-store/tax@2.5.1
  - @band-store/user@2.5.1
  - @band-store/workflow-engine-inmemory@2.5.1
  - @band-store/workflow-engine-redis@2.5.1

## 2.5.0

### Patch Changes

- #11304 `9f1a3b2a4214ef23a22972e6d28c5f43f87da353` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store, types): fix promotion HTTP types in cart

- #11206 `716de2cb3ab5d504ec763fc322dc11b542b7e8ca` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: exit process with a status code when build fails

- #11170 `040b7b274ee602e31f2b0ffa16605d6f38285f3e` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): use correct request / response types

- #11272 `f4c2cd112ed54757ed35a55297b46b36152829cb` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: issues with peer dependencies

- #11285 `f07af7b93c86673e730dc4e5eba8df2572013f9f` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(dashboard,core-flows,types,Band Store): Allow editing Order metadata

- Updated dependencies [`e98d3c615e8a42e09974ded9cc3ca3277e3a9217`, `da25980d2445a09a51220c0d4f005f41659057a6`, `016e332e9b98f316cded6eb999927fc942ce56c5`, `a33aebd8957f4bab10afd5e50a810cf738879b0d`, `65d8d6dc0eae23c7c969664d0c2d127511cc0bd9`, `c8376a9f15ba728506411e567ed4389c7b64406f`, `16fe43f214ecd1fb7fe6622c0c6e825e998c1be9`, `f4c2cd112ed54757ed35a55297b46b36152829cb`, `acefcd7d8052601308d75daf004069e95eb78a89`, `f07af7b93c86673e730dc4e5eba8df2572013f9f`, `d3bf59bb7a208a9a280743212601522da5448c1b`]:
  - @band-store/core-flows@2.5.0
  - @band-store/api-key@2.5.0
  - @band-store/auth@2.5.0
  - @band-store/cart@2.5.0
  - @band-store/customer@2.5.0
  - @band-store/fulfillment@2.5.0
  - @band-store/inventory@2.5.0
  - @band-store/notification@2.5.0
  - @band-store/order@2.5.0
  - @band-store/payment@2.5.0
  - @band-store/pricing@2.5.0
  - @band-store/product@2.5.0
  - @band-store/promotion@2.5.0
  - @band-store/region@2.5.0
  - @band-store/sales-channel@2.5.0
  - @band-store/stock-location@2.5.0
  - @band-store/store@2.5.0
  - @band-store/tax@2.5.0
  - @band-store/user@2.5.0
  - @band-store/index@2.5.0
  - @band-store/admin-bundler@2.5.0
  - @band-store/workflow-engine-inmemory@2.5.0
  - @band-store/workflow-engine-redis@2.5.0
  - @band-store/telemetry@2.5.0
  - @band-store/cache-inmemory@2.5.0
  - @band-store/cache-redis@2.5.0
  - @band-store/currency@2.5.0
  - @band-store/event-bus-local@2.5.0
  - @band-store/event-bus-redis@2.5.0
  - @band-store/file@2.5.0
  - @band-store/link-modules@2.5.0
  - @band-store/locking@2.5.0
  - @band-store/auth-emailpass@2.5.0
  - @band-store/auth-github@2.5.0
  - @band-store/auth-google@2.5.0
  - @band-store/file-local@2.5.0
  - @band-store/file-s3@2.5.0
  - @band-store/fulfillment-manual@2.5.0
  - @band-store/locking-postgres@2.5.0
  - @band-store/locking-redis@2.5.0
  - @band-store/notification-local@2.5.0
  - @band-store/notification-sendgrid@2.5.0
  - @band-store/payment-stripe@2.5.0

## 2.4.0

### Minor Changes

- #10292 `cc73802ab3821d2c667942bd887efb7476205547` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: upgrade to mikro-orm 6

### Patch Changes

- #11110 `0deffe7b9b9a1055813249b17057b7bba01b78ac` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: switch from tsc watch to chokidar

- #11072 `13fe2f6776b22c401d131f184fc3600ef4008383` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(framework): migration scripts regexp

- #11055 `45b47bf8136d05b1b9939b81cd892d4426b569f2` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): use correct request and response types for batch location levels route

- #11084 `e53b8b0a9708d2eb46258ca417b6ff6abbd5f3d9` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: Flaky behavior of Yalc

- Updated dependencies [`0deffe7b9b9a1055813249b17057b7bba01b78ac`, `2d0e50624fa37af5f74e46048a83ce3b39b210aa`, `cc73802ab3821d2c667942bd887efb7476205547`, `8119d9964b1617ef2a8b06998f02ce4486484344`, `57892bee0054eb5f3e9075014b1f6b966dc531db`, `ecc8efcb049f5c77cb7e38c2b6a273860590a5f4`, `13fe2f6776b22c401d131f184fc3600ef4008383`, `da3906efa42ee729c11696e2d3255a60ac3fa958`, `e53b8b0a9708d2eb46258ca417b6ff6abbd5f3d9`, `5aa47978734b4deae5139a4fd5eba15fd20cb874`, `b9c469a6d445dfb2f692bc16753c660426a48bdc`]:
  - @band-store/framework@2.4.0
  - @band-store/core-flows@2.4.0
  - @band-store/locking-postgres@2.4.0
  - @band-store/workflow-engine-inmemory@2.4.0
  - @band-store/workflow-engine-redis@2.4.0
  - @band-store/stock-location@2.4.0
  - @band-store/sales-channel@2.4.0
  - @band-store/link-modules@2.4.0
  - @band-store/notification@2.4.0
  - @band-store/fulfillment@2.4.0
  - @band-store/inventory@2.4.0
  - @band-store/promotion@2.4.0
  - @band-store/currency@2.4.0
  - @band-store/customer@2.4.0
  - @band-store/api-key@2.4.0
  - @band-store/locking@2.4.0
  - @band-store/payment@2.4.0
  - @band-store/pricing@2.4.0
  - @band-store/product@2.4.0
  - @band-store/region@2.4.0
  - @band-store/index@2.4.0
  - @band-store/order@2.4.0
  - @band-store/store@2.4.0
  - @band-store/auth@2.4.0
  - @band-store/cart@2.4.0
  - @band-store/file@2.4.0
  - @band-store/user@2.4.0
  - @band-store/tax@2.4.0
  - @band-store/admin-bundler@2.4.0
  - @band-store/event-bus-local@2.4.0
  - @band-store/telemetry@2.4.0
  - @band-store/cache-inmemory@2.4.0
  - @band-store/cache-redis@2.4.0
  - @band-store/event-bus-redis@2.4.0
  - @band-store/auth-emailpass@2.4.0
  - @band-store/auth-github@2.4.0
  - @band-store/auth-google@2.4.0
  - @band-store/file-local@2.4.0
  - @band-store/file-s3@2.4.0
  - @band-store/fulfillment-manual@2.4.0
  - @band-store/locking-redis@2.4.0
  - @band-store/notification-local@2.4.0
  - @band-store/notification-sendgrid@2.4.0
  - @band-store/payment-stripe@2.4.0

## 2.3.1

### Patch Changes

- Updated dependencies []:
  - @band-store/admin-bundler@2.3.1
  - @band-store/core-flows@2.3.1
  - @band-store/telemetry@2.3.1
  - @band-store/api-key@2.3.1
  - @band-store/auth@2.3.1
  - @band-store/cache-inmemory@2.3.1
  - @band-store/cache-redis@2.3.1
  - @band-store/cart@2.3.1
  - @band-store/currency@2.3.1
  - @band-store/customer@2.3.1
  - @band-store/event-bus-local@2.3.1
  - @band-store/event-bus-redis@2.3.1
  - @band-store/file@2.3.1
  - @band-store/fulfillment@2.3.1
  - @band-store/index@2.3.1
  - @band-store/inventory@2.3.1
  - @band-store/link-modules@2.3.1
  - @band-store/locking@2.3.1
  - @band-store/notification@2.3.1
  - @band-store/order@2.3.1
  - @band-store/payment@2.3.1
  - @band-store/pricing@2.3.1
  - @band-store/product@2.3.1
  - @band-store/promotion@2.3.1
  - @band-store/auth-emailpass@2.3.1
  - @band-store/auth-github@2.3.1
  - @band-store/auth-google@2.3.1
  - @band-store/file-local@2.3.1
  - @band-store/file-s3@2.3.1
  - @band-store/fulfillment-manual@2.3.1
  - @band-store/locking-postgres@2.3.1
  - @band-store/locking-redis@2.3.1
  - @band-store/notification-local@2.3.1
  - @band-store/notification-sendgrid@2.3.1
  - @band-store/payment-stripe@2.3.1
  - @band-store/region@2.3.1
  - @band-store/sales-channel@2.3.1
  - @band-store/stock-location@2.3.1
  - @band-store/store@2.3.1
  - @band-store/tax@2.3.1
  - @band-store/user@2.3.1
  - @band-store/workflow-engine-inmemory@2.3.1
  - @band-store/workflow-engine-redis@2.3.1

## 2.3.0

### Patch Changes

- #10935 `b0f581cc7cb9f173666502d9ed2ea2c128b517be` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: add plugin build command

- #10941 `4bc3f5b845f832959bed3d5f2bd320b55a8fb50f` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(Band Store,admin-bundler,cli,framework): Integrate admin extensions into plugin build

- #11012 `7be47354e1eb95141f420ef9c74f98b3e2bd8315` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows,Band Store): use deleteRefundReasonsWorkflow in delete /admin/refund-reasons/:id

- #10926 `69e2a6d6951c133295947d00fa1f99547da467d2` Thanks [@thetutlage](https://github.com/thetutlage)! - Feat/plugin develop

- #10938 `b7a37598249a60c91ce70c999ff8b0dfa6246e49` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(cli): Add plugin:publish and plugin:add commands support

- #10835 `899b1fba4afeed61c343aa0ff5d171bfe6dc5ca8` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Add handler path to the http tracing to be able to group by

- #10950 `5eab9e739919594ae7e7e416942ec93d84b699fd` Thanks [@riqwan](https://github.com/riqwan)! - feat(promotion,dashboard,types,utils,Band Store): Add statuses to promotions

- #10975 `c75678d6d41d3b88d07681ad7e24472d6cbde672` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: add support for loading admin extensions from the source

- #10988 `0cfaab5bb16daf403966e9d0a5931e2c64d44138` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(Band Store, cli): plugin db generate

- #10960 `0924164e86ecc256e2fa56a4e8c504abf7663131` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(core, Band Store, cli): Enable migration scripts

- #10869 `1ba2fadf22a30de9f94aee4f195163ef5e9e84d2` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(admin-bundler,admin-vite-plugin): Support loading loading admin extensions from plugins.

- #10996 `114b2133aa7a82b7a152022e95d29e1a489ad99e` Thanks [@thetutlage](https://github.com/thetutlage)! - chore: lazy import admin-bundler and run scripts during publish

- #10895 `c1930bd6568043d145e34d8360015e7207e18e4a` Thanks [@thetutlage](https://github.com/thetutlage)! - Feat/merge plugin modules

- #10874 `28febfc6438351fddb5b214b86f96aff89db688e` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: remove dead code and refactor the logic of resolving plugins

- #10630 `bc22b81cdf9591912744f448c74d45bcb0f11e0c` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(inventory,dashboard,core-flows,js-sdk,types,Band Store): Improve inventory management UX

- #10904 `428fce53134bd0b224f636a9a15d369d1f03cde8` Thanks [@thetutlage](https://github.com/thetutlage)! - chore: move build utilities to Compiler class

- Updated dependencies [`4bc3f5b845f832959bed3d5f2bd320b55a8fb50f`, `1758bfb8d042fa9fc82f23c36ccd61e4a439448e`, `7be47354e1eb95141f420ef9c74f98b3e2bd8315`, `c5a207144e2f04f232a1beb3586422fc93047ed2`, `5eab9e739919594ae7e7e416942ec93d84b699fd`, `3fec01ab494dcd91ee5b2f17597e24e653ddc801`, `8792d0c062d9da15da3ff3cbb92c6c06ec4102c0`, `5faf48b8c236007cd9b229219d466681c9c884c0`, `a625bce7b022c28a256f81777b7ebab15ab1d930`, `11f98f374cb0b77b1c80e72328fc68b5e22d5b87`, `7232a8a93053adedd964659c1f370aa9fddc0e44`, `1ba2fadf22a30de9f94aee4f195163ef5e9e84d2`, `bc22b81cdf9591912744f448c74d45bcb0f11e0c`]:
  - @band-store/admin-bundler@2.3.0
  - @band-store/core-flows@2.3.0
  - @band-store/promotion@2.3.0
  - @band-store/pricing@2.3.0
  - @band-store/index@2.3.0
  - @band-store/payment@2.3.0
  - @band-store/inventory@2.3.0
  - @band-store/telemetry@2.3.0
  - @band-store/api-key@2.3.0
  - @band-store/auth@2.3.0
  - @band-store/cache-inmemory@2.3.0
  - @band-store/cache-redis@2.3.0
  - @band-store/cart@2.3.0
  - @band-store/currency@2.3.0
  - @band-store/customer@2.3.0
  - @band-store/event-bus-local@2.3.0
  - @band-store/event-bus-redis@2.3.0
  - @band-store/file@2.3.0
  - @band-store/fulfillment@2.3.0
  - @band-store/link-modules@2.3.0
  - @band-store/locking@2.3.0
  - @band-store/notification@2.3.0
  - @band-store/order@2.3.0
  - @band-store/product@2.3.0
  - @band-store/auth-emailpass@2.3.0
  - @band-store/auth-github@2.3.0
  - @band-store/auth-google@2.3.0
  - @band-store/file-local@2.3.0
  - @band-store/file-s3@2.3.0
  - @band-store/fulfillment-manual@2.3.0
  - @band-store/locking-postgres@2.3.0
  - @band-store/locking-redis@2.3.0
  - @band-store/notification-local@2.3.0
  - @band-store/notification-sendgrid@2.3.0
  - @band-store/payment-stripe@2.3.0
  - @band-store/region@2.3.0
  - @band-store/sales-channel@2.3.0
  - @band-store/stock-location@2.3.0
  - @band-store/store@2.3.0
  - @band-store/tax@2.3.0
  - @band-store/user@2.3.0
  - @band-store/workflow-engine-inmemory@2.3.0
  - @band-store/workflow-engine-redis@2.3.0

## 2.2.0

### Patch Changes

- #10791 `ecc09fd77db01fcb7e8eb8e60cd19e16e2b5ea81` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: generate modules mappings at runtime

- #10707 `13ddf27c68fc2831b3661940bc5f27bab23ce8c0` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store,types,js-sdk): fix request query parameter types for store product routes

- #10773 `5e9d86d75d1f2745c24a4bcd4a5c0df066578ef5` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: deprecate remoteQueryConfig in favor of queryConfig

- #10717 `83925f5c7a2de5ffd7db21f620d6864bcf59fd04` Thanks [@ranjithkumar8352](https://github.com/ranjithkumar8352)! - Fix Band Store develop command crashing on file change on windows

- #10808 `988931a5513fadb12f24d1fda9ed7af32b3128af` Thanks [@thetutlage](https://github.com/thetutlage)! - Fix/product variants filter

- #10831 `e40878d9f387314c93e7ae1df36c3289240193c7` Thanks [@thetutlage](https://github.com/thetutlage)! - chore: rename remote-query-entry-points.d.ts to query-entry-points.d.ts

- #10667 `47594192b79fbc798cfaf21821b60673745d1374` Thanks [@riqwan](https://github.com/riqwan)! - feat(dashboard,core-flows,types,utils,Band Store,order): Order cancelations will refund payments

- Updated dependencies [`699bb6dc2424053bdc73e70eecdd8fb8372b32a4`, `99a06102a246c119f69d1873f3cdeee9ff1241a0`, `4f897661eb7a855a881d460c565c2da6459367eb`, `bbf790ea44d0ce0a128a07e66224735f5a2dccf0`, `6d989bc8cdcb2a0c8e33742e2b4c9f52b37beb57`, `f7ffa3540f6e293507a1a96c0993b784a58ea507`, `3a0c69fbe0acd5fac907a86393a8ccf86d9837af`, `47594192b79fbc798cfaf21821b60673745d1374`]:
  - @band-store/core-flows@2.2.0
  - @band-store/stock-location@2.2.0
  - @band-store/auth@2.2.0
  - @band-store/auth-github@2.2.0
  - @band-store/auth-google@2.2.0
  - @band-store/pricing@2.2.0
  - @band-store/promotion@2.2.0
  - @band-store/fulfillment@2.2.0
  - @band-store/order@2.2.0
  - @band-store/admin-bundler@2.2.0
  - @band-store/telemetry@2.2.0
  - @band-store/api-key@2.2.0
  - @band-store/cache-inmemory@2.2.0
  - @band-store/cache-redis@2.2.0
  - @band-store/cart@2.2.0
  - @band-store/currency@2.2.0
  - @band-store/customer@2.2.0
  - @band-store/event-bus-local@2.2.0
  - @band-store/event-bus-redis@2.2.0
  - @band-store/file@2.2.0
  - @band-store/index@2.2.0
  - @band-store/inventory@2.2.0
  - @band-store/link-modules@2.2.0
  - @band-store/locking@2.2.0
  - @band-store/notification@2.2.0
  - @band-store/payment@2.2.0
  - @band-store/product@2.2.0
  - @band-store/auth-emailpass@2.2.0
  - @band-store/file-local@2.2.0
  - @band-store/file-s3@2.2.0
  - @band-store/fulfillment-manual@2.2.0
  - @band-store/locking-postgres@2.2.0
  - @band-store/locking-redis@2.2.0
  - @band-store/notification-local@2.2.0
  - @band-store/notification-sendgrid@2.2.0
  - @band-store/payment-stripe@2.2.0
  - @band-store/region@2.2.0
  - @band-store/sales-channel@2.2.0
  - @band-store/store@2.2.0
  - @band-store/tax@2.2.0
  - @band-store/user@2.2.0
  - @band-store/workflow-engine-inmemory@2.2.0
  - @band-store/workflow-engine-redis@2.2.0

## 2.1.3

### Patch Changes

- #10617 `100da64242838739816351ed259461f2d7c258e3` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: fulfillment module DML

- #10408 `c9b8db04c1b35f1cf129bb9ad74789fbc2881815` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Support custom line items

- Updated dependencies [`100da64242838739816351ed259461f2d7c258e3`, `d08b71f9b87c68350e57016e62e406a9bdd82342`, `c9b8db04c1b35f1cf129bb9ad74789fbc2881815`, `9d85e663b8bac2240ec3e3bf99377dd0eac72160`, `5d1098ceb9713225186fce16c0306b0539d71fc5`, `1232a43fcec50b01477149089bbb957dec15ba76`]:
  - @band-store/fulfillment@2.1.3
  - @band-store/product@2.1.3
  - @band-store/core-flows@2.1.3
  - @band-store/cart@2.1.3
  - @band-store/admin-bundler@2.1.3
  - @band-store/telemetry@2.1.3
  - @band-store/api-key@2.1.3
  - @band-store/auth@2.1.3
  - @band-store/cache-inmemory@2.1.3
  - @band-store/cache-redis@2.1.3
  - @band-store/currency@2.1.3
  - @band-store/customer@2.1.3
  - @band-store/event-bus-local@2.1.3
  - @band-store/event-bus-redis@2.1.3
  - @band-store/file@2.1.3
  - @band-store/index@2.1.3
  - @band-store/inventory@2.1.3
  - @band-store/link-modules@2.1.3
  - @band-store/locking@2.1.3
  - @band-store/notification@2.1.3
  - @band-store/order@2.1.3
  - @band-store/payment@2.1.3
  - @band-store/pricing@2.1.3
  - @band-store/promotion@2.1.3
  - @band-store/auth-emailpass@2.1.3
  - @band-store/auth-github@2.1.3
  - @band-store/auth-google@2.1.3
  - @band-store/file-local@2.1.3
  - @band-store/file-s3@2.1.3
  - @band-store/fulfillment-manual@2.1.3
  - @band-store/locking-postgres@2.1.3
  - @band-store/locking-redis@2.1.3
  - @band-store/notification-local@2.1.3
  - @band-store/notification-sendgrid@2.1.3
  - @band-store/payment-stripe@2.1.3
  - @band-store/region@2.1.3
  - @band-store/sales-channel@2.1.3
  - @band-store/stock-location@2.1.3
  - @band-store/store@2.1.3
  - @band-store/tax@2.1.3
  - @band-store/user@2.1.3
  - @band-store/workflow-engine-inmemory@2.1.3
  - @band-store/workflow-engine-redis@2.1.3

## 2.1.2

### Patch Changes

- #10579 `6367bccde88158d524dfa01e5a8123ffa3461c10` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, pricing): Cart workflows handle pricing context accurately

- Updated dependencies [`729eb5da7b6daf9781b8bdcbc2fab344e942d444`, `16192d9b3077e36c6b1df7409a0c0f26f643cc6d`, `95baacfd00f54de028226731b016917caacde5af`, `16d27ea6e4c2e4290820fe2328f08557534fcb8f`, `fad85a9d293acee1dae784afa223a080b9b8b85b`, `4ad9ac1e5f3b583514015ffd35b88d0f60b2b38a`, `90ad2566fdde2215447100d10c3fe9b17ce826b5`, `0264294ab55fc34a728834b5d217e0c8a7bf5a90`, `e021c9258cd3bf7b92213b0bd2d529f72200142e`, `6367bccde88158d524dfa01e5a8123ffa3461c10`]:
  - @band-store/inventory@2.1.2
  - @band-store/product@2.1.2
  - @band-store/cart@2.1.2
  - @band-store/customer@2.1.2
  - @band-store/promotion@2.1.2
  - @band-store/stock-location@2.1.2
  - @band-store/fulfillment@2.1.2
  - @band-store/payment@2.1.2
  - @band-store/tax@2.1.2
  - @band-store/core-flows@2.1.2
  - @band-store/pricing@2.1.2
  - @band-store/admin-bundler@2.1.2
  - @band-store/telemetry@2.1.2
  - @band-store/api-key@2.1.2
  - @band-store/auth@2.1.2
  - @band-store/cache-inmemory@2.1.2
  - @band-store/cache-redis@2.1.2
  - @band-store/currency@2.1.2
  - @band-store/event-bus-local@2.1.2
  - @band-store/event-bus-redis@2.1.2
  - @band-store/file@2.1.2
  - @band-store/index@2.1.2
  - @band-store/link-modules@2.1.2
  - @band-store/locking@2.1.2
  - @band-store/notification@2.1.2
  - @band-store/order@2.1.2
  - @band-store/auth-emailpass@2.1.2
  - @band-store/auth-github@2.1.2
  - @band-store/auth-google@2.1.2
  - @band-store/file-local@2.1.2
  - @band-store/file-s3@2.1.2
  - @band-store/fulfillment-manual@2.1.2
  - @band-store/locking-postgres@2.1.2
  - @band-store/locking-redis@2.1.2
  - @band-store/notification-local@2.1.2
  - @band-store/notification-sendgrid@2.1.2
  - @band-store/payment-stripe@2.1.2
  - @band-store/region@2.1.2
  - @band-store/sales-channel@2.1.2
  - @band-store/store@2.1.2
  - @band-store/user@2.1.2
  - @band-store/workflow-engine-inmemory@2.1.2
  - @band-store/workflow-engine-redis@2.1.2

## 2.1.1

### Patch Changes

- #10469 `c8cb9b5c1addb5dcd30ca559813b96e5fba1d6a3` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): add query type argument to RequestWithContext

- Updated dependencies [`90ae187e097c42a224c701f31cbc2924ea6ee86b`, `0a077d48e14976bafcf19705fc48e66756362fd6`, `a04238a7f1b77e6f6fe0e51951251286cd207115`, `70d77ea22fb73021bc1f4da0780a2235f1e86fb7`, `f95c4e240c4a5ca0fb88a09636c3d8a2266de279`, `f3c91c908a1c8d38eb31c21dbd94d4ad6cea9688`, `559fc6587aa02cd4f8fbc9e97ff1f1ba094a4b1a`, `b0448a7c35135f5a0e41e0195a507b10ce4b2131`, `be15240909c5da4c585f30a1c3b5f0212121f8f5`, `0a16efa4266f93302b31589349e777bc8d24dc07`, `69f4c4f4e06022990fcd9c66d8f1a68ff0ff97b1`]:
  - @band-store/workflow-engine-redis@2.1.1
  - @band-store/core-flows@2.1.1
  - @band-store/workflow-engine-inmemory@2.1.1
  - @band-store/payment@2.1.1
  - @band-store/api-key@2.1.1
  - @band-store/promotion@2.1.1
  - @band-store/store@2.1.1
  - @band-store/locking-postgres@2.1.1
  - @band-store/sales-channel@2.1.1
  - @band-store/cart@2.1.1
  - @band-store/index@2.1.1
  - @band-store/admin-bundler@2.1.1
  - @band-store/telemetry@2.1.1
  - @band-store/auth@2.1.1
  - @band-store/cache-inmemory@2.1.1
  - @band-store/cache-redis@2.1.1
  - @band-store/currency@2.1.1
  - @band-store/customer@2.1.1
  - @band-store/event-bus-local@2.1.1
  - @band-store/event-bus-redis@2.1.1
  - @band-store/file@2.1.1
  - @band-store/fulfillment@2.1.1
  - @band-store/inventory@2.1.1
  - @band-store/link-modules@2.1.1
  - @band-store/locking@2.1.1
  - @band-store/notification@2.1.1
  - @band-store/order@2.1.1
  - @band-store/pricing@2.1.1
  - @band-store/product@2.1.1
  - @band-store/auth-emailpass@2.1.1
  - @band-store/auth-github@2.1.1
  - @band-store/auth-google@2.1.1
  - @band-store/file-local@2.1.1
  - @band-store/file-s3@2.1.1
  - @band-store/fulfillment-manual@2.1.1
  - @band-store/locking-redis@2.1.1
  - @band-store/notification-local@2.1.1
  - @band-store/notification-sendgrid@2.1.1
  - @band-store/payment-stripe@2.1.1
  - @band-store/region@2.1.1
  - @band-store/stock-location@2.1.1
  - @band-store/tax@2.1.1
  - @band-store/user@2.1.1

## 2.1.0

### Patch Changes

- #10327 `ef046844cca26deddc02008cd50675fcfb4c8af4` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): remove request body type argument from cancel order transfer routes

- #10374 `11bd55613304350a5478fd4c001e2309cca3a995` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,framework,Band Store): list shipping options pass in cart as pricing context

- Updated dependencies [`324b4ab438662f44de495ffe4d9137677a032a00`, `4ef353a7b9e807f727d97025954306c9312ff786`, `2838100efc8f1bef7f1bea022912dfbfa064bb56`, `ac7958523218fe01528ad25ef6a203f620ecb6dd`, `11bd55613304350a5478fd4c001e2309cca3a995`]:
  - @band-store/pricing@2.1.0
  - @band-store/auth@2.1.0
  - @band-store/product@2.1.0
  - @band-store/user@2.1.0
  - @band-store/core-flows@2.1.0
  - @band-store/admin-bundler@2.1.0
  - @band-store/telemetry@2.1.0
  - @band-store/api-key@2.1.0
  - @band-store/cache-inmemory@2.1.0
  - @band-store/cache-redis@2.1.0
  - @band-store/cart@2.1.0
  - @band-store/currency@2.1.0
  - @band-store/customer@2.1.0
  - @band-store/event-bus-local@2.1.0
  - @band-store/event-bus-redis@2.1.0
  - @band-store/file@2.1.0
  - @band-store/fulfillment@2.1.0
  - @band-store/index@2.1.0
  - @band-store/inventory@2.1.0
  - @band-store/link-modules@2.1.0
  - @band-store/locking@2.1.0
  - @band-store/notification@2.1.0
  - @band-store/order@2.1.0
  - @band-store/payment@2.1.0
  - @band-store/promotion@2.1.0
  - @band-store/auth-emailpass@2.1.0
  - @band-store/auth-github@2.1.0
  - @band-store/auth-google@2.1.0
  - @band-store/file-local@2.1.0
  - @band-store/file-s3@2.1.0
  - @band-store/fulfillment-manual@2.1.0
  - @band-store/locking-postgres@2.1.0
  - @band-store/locking-redis@2.1.0
  - @band-store/notification-local@2.1.0
  - @band-store/notification-sendgrid@2.1.0
  - @band-store/payment-stripe@2.1.0
  - @band-store/region@2.1.0
  - @band-store/sales-channel@2.1.0
  - @band-store/stock-location@2.1.0
  - @band-store/store@2.1.0
  - @band-store/tax@2.1.0
  - @band-store/workflow-engine-inmemory@2.1.0
  - @band-store/workflow-engine-redis@2.1.0

## 2.0.7

### Patch Changes

- Updated dependencies [`030ee871506cfe178702853714feaaa33f1d9cf4`]:
  - @band-store/core-flows@2.0.7
  - @band-store/admin-bundler@2.0.7
  - @band-store/telemetry@2.0.7
  - @band-store/api-key@2.0.7
  - @band-store/auth@2.0.7
  - @band-store/cache-inmemory@2.0.7
  - @band-store/cache-redis@2.0.7
  - @band-store/cart@2.0.7
  - @band-store/currency@2.0.7
  - @band-store/customer@2.0.7
  - @band-store/event-bus-local@2.0.7
  - @band-store/event-bus-redis@2.0.7
  - @band-store/file@2.0.7
  - @band-store/fulfillment@2.0.7
  - @band-store/index@2.0.7
  - @band-store/inventory@2.0.7
  - @band-store/link-modules@2.0.7
  - @band-store/locking@2.0.7
  - @band-store/notification@2.0.7
  - @band-store/order@2.0.7
  - @band-store/payment@2.0.7
  - @band-store/pricing@2.0.7
  - @band-store/product@2.0.7
  - @band-store/promotion@2.0.7
  - @band-store/auth-emailpass@2.0.7
  - @band-store/auth-github@2.0.7
  - @band-store/auth-google@2.0.7
  - @band-store/file-local@2.0.7
  - @band-store/file-s3@2.0.7
  - @band-store/fulfillment-manual@2.0.7
  - @band-store/locking-postgres@2.0.7
  - @band-store/locking-redis@2.0.7
  - @band-store/notification-local@2.0.7
  - @band-store/notification-sendgrid@2.0.7
  - @band-store/payment-stripe@2.0.7
  - @band-store/region@2.0.7
  - @band-store/sales-channel@2.0.7
  - @band-store/stock-location@2.0.7
  - @band-store/store@2.0.7
  - @band-store/tax@2.0.7
  - @band-store/user@2.0.7
  - @band-store/workflow-engine-inmemory@2.0.7
  - @band-store/workflow-engine-redis@2.0.7

## 2.0.6

### Patch Changes

- Updated dependencies [`c28d0db1647a5c8edaf0ba0faba6426e8a740399`]:
  - @band-store/product@2.0.6
  - @band-store/admin-bundler@2.0.6
  - @band-store/core-flows@2.0.6
  - @band-store/telemetry@2.0.6
  - @band-store/api-key@2.0.6
  - @band-store/auth@2.0.6
  - @band-store/cache-inmemory@2.0.6
  - @band-store/cache-redis@2.0.6
  - @band-store/cart@2.0.6
  - @band-store/currency@2.0.6
  - @band-store/customer@2.0.6
  - @band-store/event-bus-local@2.0.6
  - @band-store/event-bus-redis@2.0.6
  - @band-store/file@2.0.6
  - @band-store/fulfillment@2.0.6
  - @band-store/index@2.0.6
  - @band-store/inventory@2.0.6
  - @band-store/link-modules@2.0.6
  - @band-store/locking@2.0.6
  - @band-store/notification@2.0.6
  - @band-store/order@2.0.6
  - @band-store/payment@2.0.6
  - @band-store/pricing@2.0.6
  - @band-store/promotion@2.0.6
  - @band-store/auth-emailpass@2.0.6
  - @band-store/auth-github@2.0.6
  - @band-store/auth-google@2.0.6
  - @band-store/file-local@2.0.6
  - @band-store/file-s3@2.0.6
  - @band-store/fulfillment-manual@2.0.6
  - @band-store/locking-postgres@2.0.6
  - @band-store/locking-redis@2.0.6
  - @band-store/notification-local@2.0.6
  - @band-store/notification-sendgrid@2.0.6
  - @band-store/payment-stripe@2.0.6
  - @band-store/region@2.0.6
  - @band-store/sales-channel@2.0.6
  - @band-store/stock-location@2.0.6
  - @band-store/store@2.0.6
  - @band-store/tax@2.0.6
  - @band-store/user@2.0.6
  - @band-store/workflow-engine-inmemory@2.0.6
  - @band-store/workflow-engine-redis@2.0.6

## 2.0.5

### Patch Changes

- #10073 `d9d4e575f60b303f8143815ea8a3b3d9d14cd0ec` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: do not update the .env.template file with the database name

- #10136 `d933b3f1e4a92e841e881a1fd173df806008cc4a` Thanks [@thetutlage](https://github.com/thetutlage)! - Refactor/finish rename order

- #10207 `6486f2bcce1d128ae8126091f252e67aa896ff17` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store): remove cart customer validation + rename workflow

- #9980 `2344012d1ccfae998bceb0c2b75ba9a17f84c18b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Create Order before payment capture

- Updated dependencies [`47ca1d4b54de78fe952619a7d331ea4b0ab3d7a6`, `1659c9be5d3ace1bed9f3a6e7206fe54e60645c0`, `4c983557f9483cb5ace561974b27697911cee7cc`, `fc5d2b5fcacddc7e4451997b8cd1c70e6f95326c`, `1f44281ed6bc2de0ba8ffec43f0671902b711520`, `d933b3f1e4a92e841e881a1fd173df806008cc4a`, `6486f2bcce1d128ae8126091f252e67aa896ff17`, `3e265229f2ae5c3d55f64a445574c13c40b52c14`, `2822972e04f12d2ca9378dd09529ab6ca308a286`, `06ce16c90ba1cc20daa8c10fadab067d9381a7d1`, `b1b7a4abf10956d2d2863ba2b7e08e39b1abfbc1`, `1eef324af33cfb70b414ac564788f28dfd6d2c18`, `2344012d1ccfae998bceb0c2b75ba9a17f84c18b`, `7aa990795cf262f98b86adb7f14d6f146620bc1d`]:
  - @band-store/inventory@2.0.5
  - @band-store/product@2.0.5
  - @band-store/auth-google@2.0.5
  - @band-store/core-flows@2.0.5
  - @band-store/event-bus-local@2.0.5
  - @band-store/event-bus-redis@2.0.5
  - @band-store/api-key@2.0.5
  - @band-store/auth@2.0.5
  - @band-store/cart@2.0.5
  - @band-store/currency@2.0.5
  - @band-store/file@2.0.5
  - @band-store/fulfillment@2.0.5
  - @band-store/index@2.0.5
  - @band-store/locking@2.0.5
  - @band-store/notification@2.0.5
  - @band-store/order@2.0.5
  - @band-store/payment@2.0.5
  - @band-store/pricing@2.0.5
  - @band-store/promotion@2.0.5
  - @band-store/region@2.0.5
  - @band-store/sales-channel@2.0.5
  - @band-store/stock-location@2.0.5
  - @band-store/store@2.0.5
  - @band-store/tax@2.0.5
  - @band-store/user@2.0.5
  - @band-store/workflow-engine-inmemory@2.0.5
  - @band-store/workflow-engine-redis@2.0.5
  - @band-store/locking-postgres@2.0.5
  - @band-store/file-local@2.0.5
  - @band-store/payment-stripe@2.0.5
  - @band-store/admin-bundler@2.0.5
  - @band-store/telemetry@2.0.5
  - @band-store/cache-inmemory@2.0.5
  - @band-store/cache-redis@2.0.5
  - @band-store/customer@2.0.5
  - @band-store/link-modules@2.0.5
  - @band-store/auth-emailpass@2.0.5
  - @band-store/auth-github@2.0.5
  - @band-store/file-s3@2.0.5
  - @band-store/fulfillment-manual@2.0.5
  - @band-store/locking-redis@2.0.5
  - @band-store/notification-local@2.0.5
  - @band-store/notification-sendgrid@2.0.5

## 2.0.4

### Patch Changes

- #10027 `0ef92cce2848ed447028434c43e4041f094cb402` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(Band Store): show success message after user is created

- Updated dependencies []:
  - @band-store/admin-bundler@2.0.4
  - @band-store/core-flows@2.0.4
  - @band-store/telemetry@2.0.4
  - @band-store/api-key@2.0.4
  - @band-store/auth@2.0.4
  - @band-store/cache-inmemory@2.0.4
  - @band-store/cache-redis@2.0.4
  - @band-store/cart@2.0.4
  - @band-store/currency@2.0.4
  - @band-store/customer@2.0.4
  - @band-store/event-bus-local@2.0.4
  - @band-store/event-bus-redis@2.0.4
  - @band-store/file@2.0.4
  - @band-store/fulfillment@2.0.4
  - @band-store/index@2.0.4
  - @band-store/inventory@2.0.4
  - @band-store/link-modules@2.0.4
  - @band-store/locking@2.0.4
  - @band-store/notification@2.0.4
  - @band-store/order@2.0.4
  - @band-store/payment@2.0.4
  - @band-store/pricing@2.0.4
  - @band-store/product@2.0.4
  - @band-store/promotion@2.0.4
  - @band-store/auth-emailpass@2.0.4
  - @band-store/auth-github@2.0.4
  - @band-store/auth-google@2.0.4
  - @band-store/file-local@2.0.4
  - @band-store/file-s3@2.0.4
  - @band-store/fulfillment-manual@2.0.4
  - @band-store/locking-postgres@2.0.4
  - @band-store/locking-redis@2.0.4
  - @band-store/notification-local@2.0.4
  - @band-store/notification-sendgrid@2.0.4
  - @band-store/payment-stripe@2.0.4
  - @band-store/region@2.0.4
  - @band-store/sales-channel@2.0.4
  - @band-store/stock-location@2.0.4
  - @band-store/store@2.0.4
  - @band-store/tax@2.0.4
  - @band-store/user@2.0.4
  - @band-store/workflow-engine-inmemory@2.0.4
  - @band-store/workflow-engine-redis@2.0.4

## 2.0.3

### Patch Changes

- Updated dependencies [`cd578e89ff4cc26f2fd570c34858e44bb0143e10`, `1bae311a293096c9a8019b825a2fcd07e1918632`, `03f4b66b90625634f13409be35cd57081f0eb7d5`, `6ead7bf92d69036c7900bf5b1a8af67bbd7585ae`]:
  - @band-store/auth-google@2.0.3
  - @band-store/core-flows@2.0.3
  - @band-store/link-modules@2.0.3
  - @band-store/payment-stripe@2.0.3
  - @band-store/admin-bundler@2.0.3
  - @band-store/telemetry@2.0.3
  - @band-store/api-key@2.0.3
  - @band-store/auth@2.0.3
  - @band-store/cache-inmemory@2.0.3
  - @band-store/cache-redis@2.0.3
  - @band-store/cart@2.0.3
  - @band-store/currency@2.0.3
  - @band-store/customer@2.0.3
  - @band-store/event-bus-local@2.0.3
  - @band-store/event-bus-redis@2.0.3
  - @band-store/file@2.0.3
  - @band-store/fulfillment@2.0.3
  - @band-store/index@2.0.3
  - @band-store/inventory@2.0.3
  - @band-store/locking@2.0.3
  - @band-store/notification@2.0.3
  - @band-store/order@2.0.3
  - @band-store/payment@2.0.3
  - @band-store/pricing@2.0.3
  - @band-store/product@2.0.3
  - @band-store/promotion@2.0.3
  - @band-store/auth-emailpass@2.0.3
  - @band-store/auth-github@2.0.3
  - @band-store/file-local@2.0.3
  - @band-store/file-s3@2.0.3
  - @band-store/fulfillment-manual@2.0.3
  - @band-store/locking-postgres@2.0.3
  - @band-store/locking-redis@2.0.3
  - @band-store/notification-local@2.0.3
  - @band-store/notification-sendgrid@2.0.3
  - @band-store/region@2.0.3
  - @band-store/sales-channel@2.0.3
  - @band-store/stock-location@2.0.3
  - @band-store/store@2.0.3
  - @band-store/tax@2.0.3
  - @band-store/user@2.0.3
  - @band-store/workflow-engine-inmemory@2.0.3
  - @band-store/workflow-engine-redis@2.0.3

## 2.0.2

### Patch Changes

- #9939 `de228d209f30dfbb5b500d5cb49932b63e06f52a` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(telemetry): Pointing and resolving packages wrongly

- #9929 `c1c85ef952441eacfe8b6c2ffa9304ac4433053f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(core-flows,Band Store): Include region_id in shipping option retrieval

- Updated dependencies [`de228d209f30dfbb5b500d5cb49932b63e06f52a`, `c1c85ef952441eacfe8b6c2ffa9304ac4433053f`, `898a437db0c411aae9fa15d4ceefbdc3eeb5e335`]:
  - @band-store/telemetry@2.0.2
  - @band-store/core-flows@2.0.2
  - @band-store/locking@2.0.2
  - @band-store/admin-bundler@2.0.2
  - @band-store/api-key@2.0.2
  - @band-store/auth@2.0.2
  - @band-store/cache-inmemory@2.0.2
  - @band-store/cache-redis@2.0.2
  - @band-store/cart@2.0.2
  - @band-store/currency@2.0.2
  - @band-store/customer@2.0.2
  - @band-store/event-bus-local@2.0.2
  - @band-store/event-bus-redis@2.0.2
  - @band-store/file@2.0.2
  - @band-store/fulfillment@2.0.2
  - @band-store/index@2.0.2
  - @band-store/inventory@2.0.2
  - @band-store/link-modules@2.0.2
  - @band-store/notification@2.0.2
  - @band-store/order@2.0.2
  - @band-store/payment@2.0.2
  - @band-store/pricing@2.0.2
  - @band-store/product@2.0.2
  - @band-store/promotion@2.0.2
  - @band-store/auth-emailpass@2.0.2
  - @band-store/auth-github@2.0.2
  - @band-store/auth-google@2.0.2
  - @band-store/file-local@2.0.2
  - @band-store/file-s3@2.0.2
  - @band-store/fulfillment-manual@2.0.2
  - @band-store/locking-postgres@2.0.2
  - @band-store/locking-redis@2.0.2
  - @band-store/notification-local@2.0.2
  - @band-store/notification-sendgrid@2.0.2
  - @band-store/payment-stripe@2.0.2
  - @band-store/region@2.0.2
  - @band-store/sales-channel@2.0.2
  - @band-store/stock-location@2.0.2
  - @band-store/store@2.0.2
  - @band-store/tax@2.0.2
  - @band-store/user@2.0.2
  - @band-store/workflow-engine-inmemory@2.0.2
  - @band-store/workflow-engine-redis@2.0.2

## 2.0.1

### Patch Changes

- #9748 `471f7e4a10fe415064480b2a0aa5b8b23174c141` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Admin validator filtering and pagination

- Updated dependencies []:
  - @band-store/admin-bundler@2.0.1
  - @band-store/core-flows@2.0.1
  - @band-store/telemetry@2.0.1
  - @band-store/api-key@2.0.1
  - @band-store/auth@2.0.1
  - @band-store/cache-inmemory@2.0.1
  - @band-store/cache-redis@2.0.1
  - @band-store/cart@2.0.1
  - @band-store/currency@2.0.1
  - @band-store/customer@2.0.1
  - @band-store/event-bus-local@2.0.1
  - @band-store/event-bus-redis@2.0.1
  - @band-store/file@2.0.1
  - @band-store/fulfillment@2.0.1
  - @band-store/index@2.0.1
  - @band-store/inventory@2.0.1
  - @band-store/link-modules@2.0.1
  - @band-store/locking@2.0.1
  - @band-store/notification@2.0.1
  - @band-store/order@2.0.1
  - @band-store/payment@2.0.1
  - @band-store/pricing@2.0.1
  - @band-store/product@2.0.1
  - @band-store/promotion@2.0.1
  - @band-store/auth-emailpass@2.0.1
  - @band-store/auth-github@2.0.1
  - @band-store/auth-google@2.0.1
  - @band-store/file-local@2.0.1
  - @band-store/file-s3@2.0.1
  - @band-store/fulfillment-manual@2.0.1
  - @band-store/locking-postgres@2.0.1
  - @band-store/locking-redis@2.0.1
  - @band-store/notification-local@2.0.1
  - @band-store/notification-sendgrid@2.0.1
  - @band-store/payment-stripe@2.0.1
  - @band-store/region@2.0.1
  - @band-store/sales-channel@2.0.1
  - @band-store/stock-location@2.0.1
  - @band-store/store@2.0.1
  - @band-store/tax@2.0.1
  - @band-store/user@2.0.1
  - @band-store/workflow-engine-inmemory@2.0.1
  - @band-store/workflow-engine-redis@2.0.1

## 2.0.0

### Major Changes

- #7341 `2e42e053d4c9d5445d227bdc268c66713aad8e2e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Band Store 2.0

### Patch Changes

- Updated dependencies [`2e42e053d4c9d5445d227bdc268c66713aad8e2e`]:
  - @band-store/core-flows@2.0.0
  - @band-store/telemetry@2.0.0
  - @band-store/api-key@2.0.0
  - @band-store/auth@2.0.0
  - @band-store/auth-emailpass@2.0.0
  - @band-store/auth-google@2.0.0
  - @band-store/cache-inmemory@2.0.0
  - @band-store/cache-redis@2.0.0
  - @band-store/cart@2.0.0
  - @band-store/currency@2.0.0
  - @band-store/customer@2.0.0
  - @band-store/event-bus-local@2.0.0
  - @band-store/event-bus-redis@2.0.0
  - @band-store/file@2.0.0
  - @band-store/fulfillment@2.0.0
  - @band-store/inventory@2.0.0
  - @band-store/link-modules@2.0.0
  - @band-store/notification@2.0.0
  - @band-store/order@2.0.0
  - @band-store/payment@2.0.0
  - @band-store/pricing@2.0.0
  - @band-store/product@2.0.0
  - @band-store/promotion@2.0.0
  - @band-store/file-local@2.0.0
  - @band-store/file-s3@2.0.0
  - @band-store/fulfillment-manual@2.0.0
  - @band-store/notification-local@2.0.0
  - @band-store/notification-sendgrid@2.0.0
  - @band-store/payment-stripe@2.0.0
  - @band-store/region@2.0.0
  - @band-store/sales-channel@2.0.0
  - @band-store/stock-location@2.0.0
  - @band-store/store@2.0.0
  - @band-store/tax@2.0.0
  - @band-store/user@2.0.0
  - @band-store/workflow-engine-inmemory@2.0.0
  - @band-store/workflow-engine-redis@2.0.0
  - @band-store/admin-bundler@2.0.0
  - @band-store/framework@2.0.0
  - @band-store/index@2.0.0
  - @band-store/locking@2.0.0
  - @band-store/locking-redis@2.0.0
  - @band-store/locking-postgres@2.0.0
  - @band-store/auth-github@2.0.0

## 1.20.5

### Patch Changes

- #6827 `0c0b425de7` Thanks [@riqwan](https://github.com/riqwan)! - feat(band-store-react,Band Store,types,dashboard): added empty state for promotions list page

- #6913 `49f16ab08d` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Fix get-query-config backward compatiblity

- #7077 `8d356217bd` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows,types): add batch updates to price list prices

- #6850 `e58e81fd25` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): associate refund with order when calling `refundFromPayment`

- #7128 `40686ba980` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store,admin-ui): Remove forced `backendUrl` from develop command. Allow specifying an alternative host value

- #6864 `e944a627f0` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: region payment providers management workflows/api

- #6880 `1a48fe0282` Thanks [@sradevski](https://github.com/sradevski)! - Add v2 product type endpoints and adjust the product module

- #6911 `483bf98a49` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): added endpoints for rule attribute/operator/values options

- #7166 `08a9297f76` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Remove require id from update shipping options validator

- `cc557c8752` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Order endpoints and Cart totals

- #6943 `58c68f6715` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store, types): list payment providers endpoint

- #6876 `1bcb13f892` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Remove sales channels from pub keys

- #6901 `82a176e30e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(band-store-test-utils): Handle errors gracefully + Do not set Distributed storage on partial loading

- #7144 `11517f0faf` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): added store apis for products

- #6878 `85a27c3572` Thanks [@gempain](https://github.com/gempain)! - Fix logging error when trying to migrate products for enabling inventory module.

- #7095 `62b9dcc6c1` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): cancel fulfillments API

- #7089 `82cb6cfd36` Thanks [@kevinfurmanski](https://github.com/kevinfurmanski)! - fix: correct calculations of subtotal for shipping option requirements

- #6851 `ea8d9d4d42` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: API key sales channel link

- #7175 `e26cda4b6a` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, core-flows, types): Allow to update the rules from a shipping options

- #6837 `6113af0a66` Thanks [@pepijn-vanvlaanderen](https://github.com/pepijn-vanvlaanderen)! - Fix deleted discount missing on order

- #7178 `efa3308d78` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): add middleware filters + scope products

- #6977 `bc06ad2db4` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/shipping options api 3

- #7101 `18f3aacee6` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): add create shipment api for fulfillments

- #7124 `38c971f111` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): add fulfillment provider list api

- #6858 `6bf4d40856` Thanks [@srindom](https://github.com/srindom)! - chore(band-store-test-utils): create declaration file

- #6883 `eadc5e8a79` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Admin V2 API keys

- #6882 `5e30b8cce6` Thanks [@riqwan](https://github.com/riqwan)! - feat(dashboard): added details page for promotions

- #6962 `65794f4bb5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: Create shipping options API

- #6917 `b3a3993423` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(band-store-test-utils): recompute driver options

- #7029 `93ef94cad3` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): create promotion flows

- #6905 `edafe7db47` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(link-modules, core-flows, Band Store): add sales channel location management endpoint

- #6800 `4cf71af07d` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, Band Store): add update stock location endpoint to api-v2

- #7028 `c78915c7c5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add support for shipping options prices update

- #7101 `18f3aacee6` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): fulfillment API: create

- #7150 `d2393f004e` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows, Band Store): add shipping methods to cart API

- #7130 `2446151420` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): migrate store cart endpoints to zod

- #7018 `f175cac4af` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, Band Store, types): add reservation item endpoints

- #6995 `0a9b9b073d` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store, core-flows,types): delete fulfillment set, delete shipping profile

- #6998 `4f88743591` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store, customer): Add list filtering capabilities for customers

- #7026 `00e6b21bb5` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): added tax flows end to end

- #6788 `18438a695a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store, stock-location-next): add list-stock-locations endpoint to api-v2

- #6865 `8fd1488938` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Band Store shutdown

- #7081 `7e66dd0dd0` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Fix validation of V2 POST /customers and POST /customers/:id

- Updated dependencies [`e603726985`, `8d356217bd`, `d333db0842`, `1eeb1e9de3`, `20e8df914e`, `a164c0d512`, `e0b02a1012`, `e944a627f0`, `1a48fe0282`, `86f499de2f`, `cc557c8752`, `dd35a4dbff`, `1bcb13f892`, `82a176e30e`, `62b9dcc6c1`, `5d9aea053c`, `ea8d9d4d42`, `e26cda4b6a`, `18f3aacee6`, `232322d035`, `45c49e89f2`, `71aeda7347`, `c3efac5a0d`, `528ef4ca90`, `65794f4bb5`, `edafe7db47`, `4cf71af07d`, `4b57c5d286`, `c78915c7c5`, `18f3aacee6`, `3affcc2525`, `667c8609cc`, `d2393f004e`, `f175cac4af`, `edcafa140c`, `0a9b9b073d`, `a6562d2a41`, `8fd1488938`, `1c6ba4468e`]:
  - @band-store/workflows-sdk@0.1.6
  - @band-store/orchestration@0.5.7
  - @band-store/core-flows@0.0.9
  - @band-store/modules-sdk@1.12.11
  - @band-store/utils@1.11.9
  - @band-store/link-modules@0.2.11
  - band-store-core-utils@1.2.2

## 1.20.4

### Patch Changes

- #6803 `0168c819da` Thanks [@srindom](https://github.com/srindom)! - fix(band-store-test-utils): make module test runner models configurable

- #6759 `70859397c0` Thanks [@sradevski](https://github.com/sradevski)! - Align the v2 product HTTP endpoints to follow conventions

- #6801 `deab12e27e` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(types, Band Store, core-flows): add delete-stock-location endpoint to api-v2

- #6739 `56481e683d` Thanks [@srindom](https://github.com/srindom)! - feat: v2 - add worker mode

- #6796 `9073d7aba3` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): rename psma to prices

- #6819 `7bc7adeeb4` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Create user account

- #6820 `509ddf9a56` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): migrate Band Store unit tests to run with swc jest

- #6787 `68b9812aa1` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, Band Store): add create stock location endpoint for api-v2

- #6771 `205573f5e3` Thanks [@srindom](https://github.com/srindom)! - fix(Band Store): ensure feature flags are loaded properly in migrate command

- #6680 `26531c5a38` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(ui-preset): Pull latest styles from Figma.
  fix(ui): Fix invalid state styling of Select, so it correctly shows when aria-invalid is true.
  fix(Band Store): Align query params between `/admin/products/:id/variants` and `/admin/variants`.
  chore(client-types): Update `bandStore` client types to reflect changes to the API.

- #6772 `1ef9c78cea` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: v2 - deprecate extra in favor of driver options

- #6791 `20132d7cea` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store, core-flows): add retrieve stock location endpoint to api-v2

- Updated dependencies [`0168c819da`, `70859397c0`, `06f22bb48a`, `deab12e27e`, `60070fb65f`, `7e93eda1a4`, `56481e683d`, `9073d7aba3`, `7bc7adeeb4`, `68b9812aa1`, `4974f5e455`, `05e857d256`, `3ca957ec0f`, `1ef9c78cea`, `20132d7cea`]:
  - band-store-test-utils@1.1.43
  - @band-store/core-flows@0.0.8
  - @band-store/modules-sdk@1.12.10
  - @band-store/orchestration@0.5.6
  - @band-store/link-modules@0.2.10
  - @band-store/workflows-sdk@0.1.5
  - @band-store/utils@1.11.8

## 1.20.3

### Patch Changes

- #6648 `9288f53327` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,utils): added price list prices upsert and delete workflows + endpoints

- #6633 `e124762873` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Allows to filter price list products by multiple ids.

- #6678 `d4b921f3db` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,pricing,types): added get endpoints for pricing rule types

- #6539 `557d86afbf` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows): update cart adjustments on item updates

- #6474 `ac86362e81` Thanks [@riqwan](https://github.com/riqwan)! - feat(workflows-sdk,core-flows,Band Store,types): add workflow to add promotions to cart

- #6580 `e4acde1aa2` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows,types): add cart <> tax integration workflows + steps

- #6697 `1a661adf3e` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): GET admin promotion endpoint to fetch by code

- #6711 `0c705d7bd4` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): rework prices add/remove to batch spec

- #6631 `56504c99f0` Thanks [@madsleejensen](https://github.com/madsleejensen)! - bug: fix constraint on customer table to allow soft-deletes

- #6703 `c3f26a6826` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Include `country` in draft orders' carts' default relations to allow properly displaying addresses.

- #6696 `04a532e5ef` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): remove rules from promotion endpoints + workflows

- #6595 `f0ef0a8784` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: integration-tests/modules

- #6544 `296d7faad4` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: V2 core loader + modules integration-tests

- #6330 `0c2a460751` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Workflow engine API

- #6677 `25d176b851` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: List shipping options for cart

- #6418 `1ba35b02dd` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Cart SalesChannel link

- #6617 `7c46b0f88b` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): added list price list products endpoint

- #6411 `586df9da25` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix custom modules loader

- #6692 `640eccd5dd` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): add rules to promotion endpoints + workflow

- #6550 `fb25471e92` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Adds updated_at query param to list-reservations. Fixes OAS for list-inventory-items.

- #6667 `c3c4f49fc2` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): add automatic-taxes to region + generate tax lines endpoint

- #6606 `c2d56ca12b` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Fixes pagination on list Tax Rate endpoint, and also adds missing query params like order, search and filters.

- #6648 `9288f53327` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,pricing,types,utils): added price list workflows + endpoints

- #6684 `b78f863d80` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store): added api + workflows for rule types CRUD

- #6441 `8dad2b51a2` Thanks [@riqwan](https://github.com/riqwan)! - feat(band-store-react,Band Store,utils): fix login for Band Store v2 admin next dashboard

- #6564 `2d00625729` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store,ui) Export param types for workflow endpoints. Add support for JSON to CodeBlock component.

- #6731 `873c21355c` Thanks [@srindom](https://github.com/srindom)! - fix(Band Store): make subscribers work in v2

- #6490 `608c10383a` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): add `order` param to discounts list

- #6711 `0c705d7bd4` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): split upsert workflow to create and update

- #6658 `78e5ec459a` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Add missing query params to draft order list endpoint

- #6380 `d37ff8024d` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store,ui): Fixes list query params for the following endpoints: "/admin/customers", "/admin/customer-groups", "/admin/gift-cards", and "/admin/collections".

- #6701 `7be0a2cf6d` Thanks [@riqwan](https://github.com/riqwan)! - chore(Band Store): use batch/add and batch/remove endpoints for promotion rules

- #6408 `1d91b7429b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(fulfillment): implementation part 2

- #6483 `e076590ff2` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Add query params to Pub. API key endpoint

- #6727 `c20eb15cd9` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store, core-flows, types): Add delete-location-level api-v2 endpoints

- #6702 `e5945479e0` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows,types): adds update promotion rule endpoint + workflow

- #6514 `f5c2256286` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): adds update cart API with promotions

- #6592 `000eb61e33` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing,Band Store,utils): added list + get endpoints for price lists

- #6708 `62d5803b20` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store, core-flows, inventory-next): add delete-inventory-item endpoint

- #6700 `8f8a4f9b13` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Version all modules to allow for initial testing

- #6704 `56a6ec0227` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): add get-inventory-item endpoint to api v2

- #6543 `4d38eb3bf8` Thanks [@sradevski](https://github.com/sradevski)! - chore: Use default countries and currencies from utils

- #6311 `ce39b9b66e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(payment-stripe): new Stripe payment provider

- #6327 `4d51f095b3` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, types, utils, Band Store): add user endpoints to api-v2

- #6415 `8ff838970e` Thanks [@fPolic](https://github.com/fPolic)! - fix(maedusa): register logger when running migrations

- #6428 `44d43e8155` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(Band Store,band-store-js,band-store-react,icons): Fixes GET /admin/products/:id/variants endpoint in the core, and band-store-js and band-store-react. Pulls latest icons from Figma into `@band-store/icons`.

- #6698 `cc1b66842c` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): add/remove fulfillment shipping option rules

- #6392 `24fb102a56` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: CartRegion link, definition + workflow

- Updated dependencies [`9288f53327`, `557d86afbf`, `ac86362e81`, `e4acde1aa2`, `56d97ebef9`, `56cbf88115`, `36a61658f9`, `04a532e5ef`, `f0ef0a8784`, `0c2a460751`, `25d176b851`, `1ba35b02dd`, `c319edb8e0`, `0b9fcb6324`, `586df9da25`, `b3d826497b`, `a86c87fe14`, `640eccd5dd`, `8ea37d03c9`, `339a946f38`, `c3c4f49fc2`, `9288f53327`, `b78f863d80`, `8dad2b51a2`, `0c705d7bd4`, `8a946beb75`, `a6d7070dd6`, `1d91b7429b`, `168f02f138`, `c20eb15cd9`, `e5945479e0`, `f5c2256286`, `000eb61e33`, `d550be3685`, `62d5803b20`, `4b06c17dc0`, `62a7bcc30c`, `f611865553`, `a8794d48de`, `8f8a4f9b13`, `6500f18b9b`, `ce39b9b66e`, `a6a4b3f01a`, `4d51f095b3`, `51bb6f1e89`, `4625bd1241`, `56b0b45304`, `cc1b66842c`, `24fb102a56`, `e85463b2a7`]:
  - @band-store/core-flows@0.0.7
  - @band-store/utils@1.11.7
  - @band-store/workflows-sdk@0.1.4
  - band-store-test-utils@1.1.42
  - @band-store/orchestration@0.5.5
  - @band-store/link-modules@0.2.9
  - @band-store/modules-sdk@1.12.9

## 1.20.2

### Patch Changes

- #5923 `3db2f95e65` Thanks [@fPolic](https://github.com/fPolic)! - feat: Sales Channel module

- #6258 `90cff0777` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Adds support for ordering GET /admin/orders

- #6263 `45134e4d1` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Workflows passing BandStoreContext as argument

- #6333 `82c728bec` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Allow configuring of staged job polling batch size

- #6218 `884428a1b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Feat: Event Aggregator

- #6197 `d1c18a309` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(stock-location, Band Store, types): add `q` and `order` query parameters to stock locations list endpoint

- #6259 `3ded2314a` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): fix constructor container type for abstract services

- #6240 `360c71e39a` Thanks [@srindom](https://github.com/srindom)! - fix(Band Store): improve error message on incorrect service export

- Updated dependencies [`12054f5c0`, `3db2f95e65`, `96ba49329`, `45134e4d1`, `884428a1b`, `882aa549b`]:
  - @band-store/utils@1.11.5
  - @band-store/modules-sdk@1.12.8
  - @band-store/core-flows@0.0.6
  - @band-store/link-modules@0.2.8
  - @band-store/orchestration@0.5.4
  - @band-store/workflows-sdk@0.1.3

## 1.20.1

### Patch Changes

- #6201 `489b7effb` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Support q search in currencies

- #6152 `99045848f` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types,core-flows,utils): added delete endpoints for campaigns and promotions

- #6125 `af7af7374` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,utils): added campaign get endpoints

- #6155 `db4da5602` Thanks [@lukebui](https://github.com/lukebui)! - fix(@band-store/band-store-js): correct invite resend path

- #6208 `134af7766` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Enable pagination, search and ordering of shipping option list endpoint

- #6110 `a12c28b7d5` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): add promotion list and get endpoint

- #6190 `d68089b2a` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Implements `listAndCount` method for UserService, and updates list endpoint to accept the expected params.
  fix(band-store-js): Update `admin.users.list` to accept query params.
  fix(band-store-react): Update `useAdminUsers` hook to accept query params.

- #6204 `6404b9abd` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Update list return type of `GET /admin/users`.

- #6130 `da5cc4cf7` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,utils): promotion and campaign create/update endpoint

- #6100 `4792c5522` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(@band-store/band-store): add missing constructor to some services
  fix(@band-store/file-local): Fix argument passed to the constructor
  fix(band-store-file-minio): Fix argument passed to the constructor
  fix(band-store-file-s3): Fix argument passed to the constructor

- #6202 `8ad7539eb` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Support q search and order in list regions

- #6159 `68d8daccd` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): added buyget support for modules

- Updated dependencies [`68ddd866a5`, `72bc52231c`, `99045848f`, `a9b4214503`, `d85fee42e`, `5e655dd59`, `b782d3bcb7`, `2b9f98895e`, `302323916`, `da5cc4cf7`, `daecd82a7`, `738e9115e`, `06b33a9b4`, `b6ac768698`, `19bbae61f8`, `130c641e5c`, `fade8ea7bf`, `8472460f53`]:
  - @band-store/utils@1.11.4
  - @band-store/core-flows@0.0.5
  - @band-store/modules-sdk@1.12.7
  - @band-store/orchestration@0.5.3
  - @band-store/workflows-sdk@0.1.2
  - @band-store/link-modules@0.2.7

## 1.20.0

### Minor Changes

- `f4734a7ac` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Add missing changeset

## 1.19.1

### Patch Changes

- #5869 `45996d58a2` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store, interfaces, utils, webshiper): Uniformise class checks

- #5450 `1d7888afca` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store, link-module): SalesChannel<>Product joiner config

- #5853 `6b0b3fed7` Thanks [@Sajarin-M](https://github.com/Sajarin-M)! - Fix typo in discounts error message

- #5901 `1a2f513d53` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Passport loader resolving to early

- #5952 `487067fb4` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Resolve babel executable with npx

- #6020 `fbee006e5` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store, orchestration, utils, workflows-sdk): add transaction options support and cleanup

- #5838 `99a4f94db` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(band-store-payment-stripe): Add delay to Stripe webhook

- #6001 `46d610bc5` Thanks [@abusaidm](https://github.com/abusaidm)! - Add missing country in admin region and set Libya to formal name

- #5926 `f25ca30b3` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store, band-store-js): publishable api key bugs

- #5857 `2d79eeeecc` Thanks [@riqwan](https://github.com/riqwan)! - chore(Band Store): add currency to region responses

- #5820 `6fc6a9de6` Thanks [@fPolic](https://github.com/fPolic)! - feat: PubKey <> SC joiner config

- #5980 `278b7fb20` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Update cart sales channel should not remove all line items

- #5995 `37fba9a16` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): cart completion payment sessions

- #5991 `7f62ab1b5` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, band-store-payment-stripe): fix stripe error handling

- #5814 `496dcf10c4` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/cart completion conflict fixes

- #5990 `47be2ad72` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Ordering management using joins and pagination

- #5810 `fe007d01b` Thanks [@fPolic](https://github.com/fPolic)! - feat: sales channel <> order link

- #5459 `76332ca6c` Thanks [@fPolic](https://github.com/fPolic)! - feat: SalesChannel <> Cart joiner config

- Updated dependencies [`6d1e3cc02`, `42cc8ae3f`, `45996d58a2`, `1d7888afca`, `9cc787cac4`, `bf63c4e6a`, `355075097`, `f86877586`, `8402f4697`, `925feea04`, `3f6d79961`, `fbee006e5`, `c41f3002f`, `46d610bc5`, `a0dd18c12`, `d16d10619`, `6fc6a9de6`, `890e76a5c`, `fe007d01b`, `76332ca6c`]:
  - @band-store/modules-sdk@1.12.6
  - @band-store/utils@1.11.3
  - @band-store/link-modules@0.2.6
  - @band-store/orchestration@0.5.2
  - @band-store/workflows-sdk@0.1.1
  - band-store-core-utils@1.2.1
  - band-store-test-utils@1.1.41
  - @band-store/core-flows@0.0.4

## 1.19.0

### Minor Changes

- #5766 `428331a65` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Respond with order when cart is already completed

- #5656 `a53ae1e29` Thanks [@pepijn-vanvlaanderen](https://github.com/pepijn-vanvlaanderen)! - Replaced Node Redis with ioredis

### Patch Changes

- #5752 `079f0da83` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,pricing,Band Store,pricing,types,utils): Price List Prices can have their own rules

- #5811 `07107f356` Thanks [@riqwan](https://github.com/riqwan)! - feat(orchestration,core-flows,Band Store): product import uses workflows

- #5825 `d9e29e8e4` Thanks [@josetr](https://github.com/josetr)! - Updating note doesn't require loading author relationship

- #5723 `fd317f1a6` Thanks [@driver005](https://github.com/driver005)! - feat(Band Store): add monorepo support command develop

- #5846 `b5748ab59` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Prefer logger instead of console.log

- #5867 `2826605b0` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Order edit confirmation conflict line items update

- #5701 `6975eacb3` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, band-store-cli): Improve add line item + cluster starting with Band Store cli

- #5745 `e4bfa6c88` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): raise error properly in api-key middleware if product is not found

- #5816 `6f96ced40` Thanks [@Arsenalist](https://github.com/Arsenalist)! - Emit event when discount is created

- #5725 `85cda7ce3` Thanks [@adrien2p](https://github.com/adrien2p)! - slightly improve create cart workflow

- #5781 `9b447f99f` Thanks [@mortenengel](https://github.com/mortenengel)! - fix(Band Store): Product option values in CSV Export

- Updated dependencies [`079f0da83`, `c4deeee48`, `07107f356`, `6975eacb3`, `85cda7ce3`, `8f25ed8a1`]:
  - @band-store/core-flows@0.0.3
  - @band-store/utils@1.11.2
  - @band-store/modules-sdk@1.12.5
  - @band-store/orchestration@0.5.1
  - @band-store/band-store-cli@1.3.22
  - @band-store/link-modules@0.2.5

## 1.18.1

### Patch Changes

- #5685 `1e39a95f8` Thanks [@riqwan](https://github.com/riqwan)! - fix(workflows, pricing, Band Store): update region variants fix + pricing module migration scripts

- #5703 `22bea2724` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Exclude subscribers correctly on Windows

- #5705 `ddbeed4ea` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(workflows, core-flows, ...): Split workflows tooling and definitions

- #5713 `18afe0b9a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(stock-location, inventory, Band Store, types, utils): allow buildQuery to take null as an argument in order to prevent default pagination

- #5708 `712c4496c` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): update default admin query with product categories

- #5715 `aa6c4cbac` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): alwyas add price_list_id and price_list to money_amounts when listing for pricing module

- #5711 `fc1ef29ed` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store,pricing,types): rules only gets updated/deleted upon passing an explicit object

- #5730 `2e6b11031` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store,pricing): fix migrations for existing databases

- #5607 `9f9db3969` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Workflows composer api

- #5536 `dc5750dd6` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,types,workflows,utils,product,pricing): PricingModule Integration of PriceLists into Core

- Updated dependencies [`1e39a95f8`, `a39ce125c`, `ddbeed4ea`, `18afe0b9a`, `de8f74867`, `ffb0c7b4c`, `010560fd2`, `9f9db3969`, `dc5750dd6`]:
  - @band-store/workflows-sdk@0.1.0
  - @band-store/core-flows@0.0.2
  - @band-store/orchestration@0.5.0
  - @band-store/utils@1.11.1
  - @band-store/link-modules@0.2.4
  - @band-store/modules-sdk@1.12.4

## 1.18.0

### Minor Changes

- #5603 `cedab5833` Thanks [@riqwan](https://github.com/riqwan)! - feat(workflows,Band Store,utils): add Band Store v2 feature flag

- `b53ab22a7` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(changesets): Minor-bump @band-store/band-store

### Patch Changes

- #5597 `2947f57db` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Update wrapHandler so that it is also able to catch errors for sync handlers

- #5624 `57573ed4d` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(Band Store): Adds a new alternative syntax for creating Subscribers in Band Store, as well as adding a new API for creating scheduled jobs.

- #5599 `b3093c3e3` Thanks [@bqst](https://github.com/bqst)! - feat(Band Store): Add `metadata` to Product Category

- #5635 `7226f5b69` Thanks [@chemicalkosek](https://github.com/chemicalkosek)! - fix(Band Store): Add missing import of promiseAll

- #5634 `52800710a` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Ensure that errorHandler middleware is applied if no middleware config exists

- Updated dependencies [`cedab5833`]:
  - @band-store/workflows@0.3.0
  - @band-store/utils@1.11.0

## 1.17.4

### Patch Changes

- #5594 `4ad66c179` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Load legacy modules entities

- #5582 `91615f9c4` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(@band-store/client-types): Fix types and TSDocs
  fix(band-store-react): Fix response type of Publishable API Key's list sales channels.
  fix(@band-store/band-store-js): Fix incorrect parameter and response types.
  fix(@band-store/band-store): Fix incorrect types and add TSDocs
  fix(@band-store/types): Fix incorrect types and add TSDocs

- #5510 `203e1fccb` Thanks [@adamlamaa](https://github.com/adamlamaa)! - feat(Band Store): Include Product Collections in Seed command

- #5496 `154c9b43b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, modules-sdk, types, utils): Re work modules loading and remove legacy functions

- #5543 `f90ba0208` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils): Introduce promiseAll util

- Updated dependencies [`c39bf69a5`, `154c9b43b`]:
  - @band-store/modules-sdk@1.12.3
  - @band-store/orchestration@0.4.4
  - @band-store/utils@1.10.5
  - @band-store/workflows@0.2.5
  - @band-store/link-modules@0.2.3

## 1.17.3

### Patch Changes

- #5304 `148f537b4` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): add migration script for pricing module

- #5075 `e64823d1b` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): totals calculation with gift card

- #5187 `9ff22110a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): decorate inventory for variants returned through carts

- #5468 `a45da9215` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, modules-sdk, modules): Module loading was missing the expected dependencies and remote query reference fix

- #5497 `2548ea8e5` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Ensures that file based routing is compatible with Windows pathing

- #5428 `ebba93e03` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Update status type in API payload definition

- #5304 `148f537b4` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): integrate pricing into reads

- #5410 `4d52082bf` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): variant creation with prices in productservice.create

- #5480 `a780b92b8` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): admin get product should return prices when expected

- Updated dependencies [`a45da9215`, `5c77029cb`]:
  - @band-store/link-modules@0.2.2
  - @band-store/modules-sdk@1.12.2
  - @band-store/orchestration@0.4.3

## 1.17.2

### Patch Changes

- #5408 `c1cabac72` Thanks [@FlorentQuienne42](https://github.com/FlorentQuienne42)! - Dont 'set' in cache if ignore_cache option is true

- #5281 `69cf7215f` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, types): Mark properties as nullable to reflect their correct types

- #5385 `0d7c5543d` Thanks [@pepijn-vanvlaanderen](https://github.com/pepijn-vanvlaanderen)! - Expose item tax total and shipping tax total

- #5247 `ec27d02d9` Thanks [@DidierGuyon](https://github.com/DidierGuyon)! - Fixed filter statement in partitionItems\_ method of Fulfillment Service

- #5365 `ddff91965` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(Band Store): Introduces a new file based routing system as an alternative to the current approach. File based routing is optional, and the previous approach can still be used. The two approaches can also be used together allowing for incremental adoption.

- #5301 `66413d094` Thanks [@srindom](https://github.com/srindom)! - fix: move create inventory workflow to @band-store/workflows

- #5394 `a0963f0ed` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(admin-ui): Remove t() on product.status update

- Updated dependencies [`378ca1b36`, `b62af612c`, `e47461d95`, `66413d094`]:
  - @band-store/utils@1.10.4
  - @band-store/link-modules@0.2.1
  - @band-store/modules-sdk@1.12.1
  - @band-store/orchestration@0.4.2
  - @band-store/workflows@0.2.4

## 1.17.1

### Patch Changes

- #5275 `90e24c593` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): update unit_price for line-items with quantity pricing when merging on create

- #5242 `130cbc1f4` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Modules exporting schema with entities and fields

- #5279 `f9264c479` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Accept invite should not require first/last name

- #5233 `0f34e0f38` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(admin-ui, Band Store, band-store-react, band-store-js): Price List UI revamp

- Updated dependencies [`eeceec791`, `130cbc1f4`, `cb569c2df`]:
  - @band-store/utils@1.10.3
  - @band-store/modules-sdk@1.12.0
  - @band-store/link-modules@0.2.0

## 1.17.0

### Minor Changes

- #4064 `2caff2efc` Thanks [@dPreininger](https://github.com/dPreininger)! - feat(Band Store): Authentication overhaul

### Patch Changes

- #5200 `240c439be` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Product model before insert hook

- #5137 `2b91049f5` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): quantity prices for line item updates

- #5046 `f1512605d` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): admin list product with product isolated module

- #5168 `dfa5d041c` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/update cart product isolation

- #5081 `202049f8a` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, workflows): Create product workflow with Isolated modules + module registration

- #5054 `5f76b967d` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Admin get product with isolated module

- #5196 `f285a6712` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Remove create product unnecessary input config workflow

- #5207 `a9972d7d6` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(band-store-react): `@band-store/band-store-js` import

- #5224 `c68ba63c1` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): In product isolation, throw if product not found

- #5177 `c1b8f089e` Thanks [@srindom](https://github.com/srindom)! - fix(band-store-payment-stripe): adds missing undefined check

- Updated dependencies [`cc4169a94`, `30233712c`, `dfa5d041c`, `202049f8a`, `1e7db5a5c`]:
  - @band-store/utils@1.10.2
  - @band-store/orchestration@0.4.1
  - @band-store/modules-sdk@1.11.3
  - @band-store/workflows@0.2.3

## 1.16.1

### Patch Changes

- #5145 `6c808dd6d` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Handle variant error during line item generation

- Updated dependencies [`47603f479`]:
  - @band-store/modules-sdk@1.11.2

## 1.16.0

### Minor Changes

- `77c85fc6c` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor bump @band-store/band-store

### Patch Changes

- #5037 `7231f6583` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Prevent default SC to be assigned if the isolated product flag is enabled

- #5018 `4fa675ec2` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store, modules-sdk, types): Refactor modules loading from Band Store

- #5053 `dc94f053d` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Support `fields` param in list-variants

- #4961 `6273b4b16` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils, module-sdk, Band Store, types): Extract pg connection utils to utils package

- #4556 `2b078f06d` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): include default sales channel for store/variant endpoints if no other channel is selected

- #4969 `30863fee5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: store List products remote query with product isolation

- #5042 `5362bfc34` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Migrations to remove FKs related to product

- #5071 `60360d2fd` Thanks [@adrien2p](https://github.com/adrien2p)! - style(Band Store): Fix order service linting issues

- #5010 `05a32683a` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Get product with isolated product module

- #5029 `05fcfd803` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix duplicated migration - AddTimestempsToProductShippingProfiles1692870898425

- Updated dependencies [`d8649baca`, `4fa675ec2`, `6273b4b16`, `30863fee5`, `3d68be2b6`, `107aaa371`]:
  - @band-store/orchestration@0.4.0
  - @band-store/modules-sdk@1.11.0
  - @band-store/utils@1.10.1
  - @band-store/workflows@0.2.2

## 1.15.1

### Patch Changes

- #4899 `bb5ea9d5c` Thanks [@josipmatichr](https://github.com/josipmatichr)! - fix(Band Store): Double tax issue on return refund amount

- #4913 `4bf8acbdd` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): csv parser check `match` prop on column

- #4884 `046b0dcfa` Thanks [@pevey](https://github.com/pevey)! - Chore(band-store-file-s3): Add cache-control option, fix delete function, update to sdk v3

- #4855 `4d439bed3` Thanks [@hanam1ni](https://github.com/hanam1ni)! - fix(Band Store): Make event enqueuer reconnect the database when it lost the connection

- #4922 `17d91c276` Thanks [@olivermrbl](https://github.com/olivermrbl)! - [wip] feat(Band Store): Add AbstractFulfillmentService

- #4963 `b71776738` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Event bus db failure handling

- #4846 `c7b149a7b` Thanks [@josipmatichr](https://github.com/josipmatichr)! - feat(band-store-fulfillment-webshipper): Create webshipper return order

- #4953 `9781089ca` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store): fix types for upload endpoints

- #4834 `470379e63` Thanks [@StephixOne](https://github.com/StephixOne)! - fix(Band Store, admin-ui): Allow soft-deleted return reason restoration

- #4889 `a1110b343` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store): category_id and q params for list products endpoint should work

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - introduce @band-store/link-modules

- #4925 `a4906d0ac` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Use BandStoreApp on core and initial JoinerConfig for internal services

- Updated dependencies [`c3dba0694`, `460161a69`, `240b03800`, `fcb6b4f51`, `4d16acf5f`, `4d16acf5f`, `87bade096`, `4d16acf5f`, `a4906d0ac`]:
  - @band-store/modules-sdk@1.10.0
  - @band-store/orchestration@0.3.0
  - @band-store/utils@1.10.0
  - @band-store/band-store-cli@1.3.21
  - @band-store/workflows@0.2.1

## 1.15.0

### Minor Changes

- #4788 `d8a6e3e0d` Thanks [@fPolic](https://github.com/fPolic)! - feat(band-store-file-local): local file service streaming methods

### Patch Changes

- #4771 `edf9ed4e5` Thanks [@fPolic](https://github.com/fPolic)! - fix(band-store-interfaces, band-store-file-\*): add `ìsPrivate` flag to the streaming methods, fix minio default bucket

- #4842 `8b860416d` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store): `PriceListImportStrategy` descriptive error handling

- Updated dependencies [`c58588904`]:
  - band-store-telemetry@0.0.17
  - @band-store/band-store-cli@1.3.20

## 1.14.0

### Minor Changes

- `5cf59a5b9` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Add minor changeset for @band-store/band-store

### Patch Changes

- #4710 `d1e298f5d` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove FlagRouter from core

- #4716 `ac866ebb5` Thanks [@adrien2p](https://github.com/adrien2p)! - test(): Test the create product workflow compensation
  fix(orchestration): Fix the transaction state after compensating with no compensation steps in the middle
  chore(workflows): Export and naming
  feat(types): Update product workflow input types
  feat(Band Store): Update product workflow usage and cleanup endpoint

- #4725 `d8a908bd8` Thanks [@SimonsThijs](https://github.com/SimonsThijs)! - fix(Band Store): removal of shipping methods on addOrUpdateLineItems

- #4626 `3f3a84262` Thanks [@adrien2p](https://github.com/adrien2p)! - [WIP] feat(types, product, utils, Band Store): Include shared connection for modules

- #4761 `f1a05f472` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(admin, admin-ui, Band Store, band-store-js, band-store-react, stripe-plugin): Support admin extensions

- #4715 `a2d7540e4` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Remove shipping on updates to `cart.items`

- #4751 `9d8f87b03` Thanks [@srindom](https://github.com/srindom)! - fix: ignore region_id update w/o value change

- #4685 `281b0746c` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,workflows,types) Create cart workflow

- Updated dependencies [`8ae31aff4`, `ac866ebb5`, `3f3a84262`, `30ce35b16`, `281b0746c`, `c0ca00290`]:
  - @band-store/workflows@0.2.0
  - @band-store/orchestration@0.2.0
  - @band-store/modules-sdk@1.9.2
  - @band-store/utils@1.9.6
  - @band-store/band-store-cli@1.3.19

## 1.13.1

### Patch Changes

- #4662 `fc6c9df03` Thanks [@zhangpengchen](https://github.com/zhangpengchen)! - fix(Band Store): Assign metadata when creating a draft order or creating a line item

- #4630 `dae34297e` Thanks [@zhangpengchen](https://github.com/zhangpengchen)! - feat(Band Store): Expose commonly used utils isType, validator, cleanResponseData

- #4696 `03fb0479c` Thanks [@pevey](https://github.com/pevey)! - Feat/allow logging to file

- #4701 `5c60aad17` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store, utils): Allow object feature flags

- #4636 `9c682ce28` Thanks [@pevey](https://github.com/pevey)! - feat(Band Store): update request-ip dependency version

- Updated dependencies [`03fb0479c`, `4b80ba8a3`, `8af55aed8`, `5c60aad17`, `e78c47b66`, `43f34866c`, `4073b7313`]:
  - @band-store/band-store-cli@1.3.18
  - @band-store/modules-sdk@1.9.1
  - @band-store/utils@1.9.5
  - @band-store/workflows@0.1.1

## 1.13.0

### Minor Changes

- `30e8bb275` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Add changeset with minor bump

- #4553 `f12299deb` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Band Store workflows package

### Patch Changes

- #4600 `9129ca08a` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Clean response data should takes the full path of sub relations

- #4595 `ae33f4825` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Removing the line items should remove the tax lines as well

- #4578 `c9989529e` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): update how price lists are filtered in price selection strategy

- #4609 `f18f1b9bf` Thanks [@zhangpengchen](https://github.com/zhangpengchen)! - feat(Band Store): Expose error handler from middlewares

- Updated dependencies [`131477faf`, `379c83933`, `f174bb6fa`, `f12299deb`]:
  - @band-store/utils@1.9.3
  - @band-store/modules-sdk@1.9.0
  - @band-store/orchestration@0.1.0

## 1.12.3

### Patch Changes

- #4459 `befc2f1c8` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(product): product module create - delete - soft delete - restore - create workflow

- #4503 `d184d23c6` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,inventory,types,brightpearl): update some inventory methods to be bulk-operation enabled

- #4514 `56d1d326d` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): provide correct count of regions

- #4472 `43427b889` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Transaction Orchestrator Flow Builder

- #4230 `2f283996f` Thanks [@erikengervall](https://github.com/erikengervall)! - feat(Band Store): Add `metadata` to `StorePostCartsCartLineItemsItemReq`

## 1.12.2

### Patch Changes

- #4410 `85eb12883` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Improve error messaging in plugin loader

- #4389 `9dcdc0041` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, utils): fix the way selects are consumed alongside the relations

- #4397 `01245ac89` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Allow to register extended validators seemlesly

- #4420 `6f1fa244f` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(band-store-cli): Cleanup plugin setup + include Logger type update which is used across multiple packages

- #4443 `bdd9c5a7e` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): model loader with customizations

- #4398 `9760d4a96` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, utils): improve devx for core entity customizations

- #4442 `4264302f2` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, stripe, paypal): Add update payment session support to the abstract payment processor API

- #4367 `7bf7d2ade` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Concurrently get the items and count instead of sequentially

- Updated dependencies [`499c3478c`, `9dcdc0041`, `6f1fa244f`, `9760d4a96`]:
  - @band-store/utils@1.9.2
  - @band-store/band-store-cli@1.3.17

## 1.12.1

### Patch Changes

- #4293 `2c0074031` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): getAvailableContext should first check if the inventory service is present

- #4338 `13294fff3` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Band Store develop does not take execArgv into account properly

- #1860 `ca477c86a` Thanks [@liamjcooper](https://github.com/liamjcooper)! - feat(Band Store): Preserve node flags in develop command

- #4115 `79cca2ab8` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): add `created_by` as a filter for reservations

- #4211 `d76ba0cd2` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Order edit missing transaction when consuming the inventory module

- #4294 `8e708aadd` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Remove items.refundable from the order default store fields

- #4213 `02b1bd07c` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Query parser issues with large array

- #4203 `eadf13cb2` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): add allowed relation to expand params for product and variant endpoints

- #4254 `2db6a1d40` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Improve database loader error handling

- #4221 `109096465` Thanks [@josipmatichr](https://github.com/josipmatichr)! - fix(band-store-fulfillment-manual): Missing retrieveDocuments override

- #4268 `81dfeb43e` Thanks [@dwene](https://github.com/dwene)! - feat(Band Store): add ability to prefix all redis cache keys in project config

- #4232 `af2dc4f75` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, inventory, stock-location): Remove unnecessary transaction usage in the modules and list products end points

- #4192 `8676ee7a2` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(Band Store,band-store-cli): Added an invite option to the create user command, and allow seeding publishable api keys

- #4214 `260dc55b6` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(Band Store,band-store-cli): Clean up new command + fix CI

- #4267 `f8643361c` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store, admin-ui): remove reservations feature flag

- #4276 `afd1b67f1` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Use caret range

- Updated dependencies [`f98ba5bde`, `14c0f62f8`, `8676ee7a2`, `260dc55b6`, `afd1b67f1`]:
  - @band-store/band-store-cli@1.3.16
  - @band-store/utils@1.9.1
  - @band-store/modules-sdk@1.8.8

## 1.12.0

### Minor Changes

- `81eeaa329` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(Band Store): Minor bump

### Patch Changes

- #4154 `0a35f21af` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Feat(Band Store,inventory): search inventory items based on title and description

- #4066 `4fb443c0e` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,client-types): add location_id filtering to list-location levels

- #4071 `0476f5251` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feaet(Band Store): add description to reservation default fields

- #4184 `0f87d3d64` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(Band Store,admin-ui): Add reservations FF

- #3703 `ed382f2ee` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Improve prices flow

- #4174 `92f01cefb` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): fix CSV parsing issues by downgrading the version of the parsing library

- #3956 `e3cfbcd4a` Thanks [@dwene](https://github.com/dwene)! - fix(Band Store): migrations cli should look for migrations in plugin dist folder

- #4189 `6998666c6` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Upserting tax rates

- #4094 `e2d29d35c` Thanks [@juanzgc](https://github.com/juanzgc)! - feat(plugins): Pass Config Modules to plugin

- #3979 `3a38c84f8` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(client-types, inventory, Band Store, types): add additional filtering capabilities to list-reservations

- #4081 `4f3c8f5d7` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,client-types,band-store-js,admin-ui,band-store-react): add reservation table and creation

- #4026 `a91987fab` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Remove sqlite support

- #4130 `bf18bd0c8` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Revert pricing service setVariantPrices API

- #4146 `db4199530` Thanks [@fPolic](https://github.com/fPolic)! - chore(Band Store, utils, inventory, stock-location): clear deps in the utils package

- Updated dependencies [`3a38c84f8`, `a91987fab`, `e73c3e51c`, `db4199530`, `c0e527d6e`]:
  - @band-store/types@1.8.7
  - @band-store/band-store-cli@1.3.15
  - @band-store/utils@1.9.0
  - @band-store/modules-sdk@1.8.7

## 1.11.0

### Minor Changes

- `26963acc0` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor bump @band-store/band-store

### Patch Changes

- #4083 `a66646233` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Cart custom query strategy

- #4084 `9518efcca` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Revert product repo to prevent typeorm issues + cleanup and improvements

- #4073 `a86f0e815` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(Band Store): Expose `ioredis` options

- #4046 `cdbac2c84` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, band-store-utils): Add support for multiple where condition on the same column

- Updated dependencies [`a86f0e815`, `cdbac2c84`, `6511959e2`]:
  - @band-store/types@1.8.6
  - @band-store/utils@1.8.5
  - @band-store/modules-sdk@1.8.6
  - @band-store/band-store-cli@1.3.14

## 1.10.1

### Patch Changes

- #4018 `3d6bcaaf6` Thanks [@patpich](https://github.com/patpich)! - fix(Band Store): ShippingOptionService.list method param type

- #3971 `7fd22ecb4` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Feat(client-types, inventory, Band Store, types): add `title`, `thumbnail` and `description to inventory item and `description` to reservation item.

- #4023 `bd53adb23` Thanks [@dwene](https://github.com/dwene)! - fix(variant-update): hasChanges function incorrectly calculates if there are changes

- #4032 `1ea57c3a6` Thanks [@pevey](https://github.com/pevey)! - update class-validator to 0.14.0 in utils package

- #3967 `0c58ead6d` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): validate `customer_id` when completing a cart

- #4025 `cff54d732` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(band-store-payment-stripe): Catch on idempotency key retrieve if not found

- #3842 `a8e73942e` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store): handle product categories in import/export strategies

- #4008 `ff37cd190` Thanks [@patpich](https://github.com/patpich)! - fix(search): add missing default product relations

- Updated dependencies [`7fd22ecb4`, `1ea57c3a6`]:
  - @band-store/types@1.8.5
  - @band-store/utils@1.8.4
  - @band-store/modules-sdk@1.8.5
  - @band-store/band-store-cli@1.3.13

## 1.10.0

### Minor Changes

- `8b93bae8f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(Band Store): Minor bump

### Patch Changes

- #4002 `0e488e71b` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, event-bus-redis, event-bus-local): Revert retrieveSubscribers as the wildcard prevent us from filtering

- #3098 `538c9874b` Thanks [@rajshrimohanks](https://github.com/rajshrimohanks)! - fix(Band Store): Fix broken migration in the case of fresh installations

- #3981 `d539c6fee` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Bump Typeorm to Band Store fork

- #3984 `b7a782639` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Use query relation load strategy on Carts

- #3921 `983872319` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): update query performance for getting product and variant avaiability

- #4010 `284f1eed9` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Only set product availability if variants are requested

- #3926 `4e8045a0a` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store): products retrieve uses query strategy for performance

- #3998 `d2443d83e` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Feat(Band Store): Add sales_channel_id to create-swap

- Updated dependencies [`0e488e71b`, `d539c6fee`]:
  - @band-store/types@1.8.4
  - @band-store/utils@1.8.3
  - @band-store/modules-sdk@1.8.4
  - @band-store/band-store-cli@1.3.12

## 1.9.0

### Minor Changes

- #3835 `af710f1b4` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Bulk create variant and pass transaction to the inventory service context methods

### Patch Changes

- #3884 `440f900af` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(band-store-plugin-ip-lookup): Remove outdated Typeorm usage

- #3870 `366b12fce` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Add missing relations when creating return

- #3879 `7e213f210` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store,band-store-fulfillment-webshipper): Add missing variant + product relation on items

- #3845 `d2826872f` Thanks [@pevey](https://github.com/pevey)! - Bump package versions to address security vulnerabilities

- #3881 `0d0e9bf20` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix(Band Store): inventory quantity calculations

- #3811 `2be144ff0` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): add purchasable property

- #3914 `935abeae6` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store): fix category list api bug where limit skews results

- #3694 `3a77e8a88` Thanks [@StephixOne](https://github.com/StephixOne)! - feat(Band Store): Middleware to add default SC on store products query if no SC provided

- #3905 `491566df6` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store,utils): Searching indexing product subscriber

- #3883 `966ddd2f1` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(inventory): Minor fixes to upserting inventory items

- #3909 `3b3236cc0` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Remove discounts.regions relation from cart retrieval

- #3192 `4a8562743` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(band-store-plugin-brightpearl, inventory, Band Store): Multiwarehouse integration for brightpearl

- Updated dependencies [`af710f1b4`, `491566df6`]:
  - @band-store/types@1.8.3
  - @band-store/utils@1.8.2
  - @band-store/modules-sdk@1.8.3
  - @band-store/band-store-cli@1.3.11

## 1.8.2

### Patch Changes

- #3829 `6bb1654b6` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): List products end points

- #3825 `95d338262` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): allow category api to be filtered by handle

- #3785 `4f58ddee0` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,utils): add server level configurable http compression

- Updated dependencies [`4f58ddee0`]:
  - @band-store/types@1.8.2
  - @band-store/modules-sdk@1.8.2

## 1.8.1

### Patch Changes

- #3797 `78ff64e78` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store); validate customer id when applying a customer group discount

- #3766 `1a60c6f58` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Throw upon draft order creation if a variant does not have any prices

- #3728 `713d85a92` Thanks [@riqwan](https://github.com/riqwan)! - chore(Band Store): migrate SalesChannel / ProductCategory repository

- #3699 `914d57336` Thanks [@adrien2p](https://github.com/adrien2p)! - chores(Band Store): cleanup registrations life time

- #3724 `60abb91b7` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Migrate payment repository api

- #3695 `089f1eb19` Thanks @patrick-band-storejs! - feat(tests): harmonize and clean-up yarn test commands convention

- #3739 `08f85fa33` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): invalidate price selection cache on update

- #3725 `282e239df` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Migrate price list repository

- #3738 `abdb74d99` Thanks [@riqwan](https://github.com/riqwan)! - chore(Band Store, utils): rename buildLegacyFieldsListFrom to objectToStringPath

- #3726 `eab2d22f7` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Migrate product tag repository

- #3739 `08f85fa33` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): align prices formating in the import & export strategies

- #3704 `085fedb1f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(Band Store): Upgrade ioredis-mock

- #3727 `4d69d8ef6` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Migrate product type repository

- #3777 `7f6dc44be` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Add totals when retrieving order by cart id

- #3768 `d533caa4c` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, admin-ui): add description field to product categories

- Updated dependencies [`654a54622`, `abdb74d99`]:
  - @band-store/types@1.8.1
  - @band-store/utils@1.8.1
  - @band-store/modules-sdk@1.8.1
  - @band-store/band-store-cli@1.3.10

## 1.8.0

### Minor Changes

- #3041 `121b42acf` Thanks [@riqwan](https://github.com/riqwan)! - chore(Band Store): Typeorm fixes / enhancements

  - upgrade typeorm from 0.2.51 to 0.3.11
  - Plugin repository loader to work with Typeorm update

- #3554 `5fd74b38a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): remove reservations if cart completion fails after reservation creation

- #3257 `589d1c09b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(band-store-payment-stripe): Implement payment processor API on stripe plugin and fix web hook issues

- #3552 `0695ff642` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): remove limit of the number of levels to list when joining levels

- #3172 `5eb61fa0e` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add inventory management to create-fulfillment flow

- #3586 `e359d3f85` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix(Band Store): include quantities when listing admin products with an inventory module installed

- #3544 `5e405be02` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): remove reservations for all old line items when an order edit is accepted

- #3408 `54dcc1871` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Http Server Graceful Shutdown

- #3329 `77d46220c` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Inventory and Stock location modules supporting isolated connection

- #2599 `ef5ef9f5a` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store,event-bus-local,event-bus-redis): Event Bus module (Redis + Local)

- #3187 `f97b3d7cc` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store, cache-redis, cache-inmemory): Added cache modules

### Patch Changes

- #3350 `d6b1ad1cc` Thanks [@adrien2p](https://github.com/adrien2p)! - Chores(Band Store): draft order create improvement perf (first step)

- #3345 `e143a8697` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Plugin repository loader to work with Typeorm update

- #3374 `84e448968` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Little improvement in draft order creation

- #3362 `33c6ccf05` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(medeusa): Transform query includes options should only be added to allowed props if there is already at least one allowed props

- #3676 `788ddc0f4` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(admin-ui, band-store-react, Band Store): Minor fixes to GC domain in admin UI. Also fixes GC update payload type in band-store-react and band-store.

- #3462 `30a320364` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Include location_id in fulfillment body

- #3391 `240d0ea7b` Thanks @patrick-band-storejs! - fix(ci,oas) move oas ci script to a package under the oas workspace

- #3087 `6c0462472` Thanks [@fPolic](https://github.com/fPolic)! - chore(feature-flag): Remove PublishableAPIKeys feature flag

- #3414 `530740889` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(band-store-payment-paypal): Migrate to the new payment processor API

- #3483 `13f40d721` Thanks @patrick-band-storejs! - feat(oas): declare x-expanded-relations - Admin

- #3644 `4342ac884` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(admin-ui): Adds metadata forms to all applicable domains in the UI.
  fix(Band Store): Fixes an issue where metadata was not being set for order addresses using `setMetadata`.

- #3435 `fe9eea4c1` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add create-inventory-item endpoint

- #3670 `a5ad6c054` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix(admin-ui,Band Store): Ensure stock locations are created with a name

- #3665 `748833383` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): draft order adjustments for mw

- #3686 `7f87c4f2c` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(band-store-react): Query key invalidation

- #3705 `e5a2e9c8d` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): circular loading

- #3328 `0a02b70e5` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Register reservation endpoints + Fix a type issue for get variant inventory

- #3685 `8ddb3952c` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Fix RC package versions

- #3495 `fe4b8feb7` Thanks [@davorbacic](https://github.com/davorbacic)! - feat(Band Store): Add event emitter to ProductCollectionService

- #3352 `aa690beed` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(Band Store): Modules initializer

  ### Loading modules in a project

  Example

  ```typescript
  import {
    InventoryServiceInitializeOptions,
    initialize,
  } from "@band-store/inventory"

  const options: InventoryServiceInitializeOptions = {
    database: {
      type: "postgres",
      url: DB_URL,
    },
  }

  const inventoryService = await initialize(options)
  const newInventoryItem = await inventoryService.createInventoryItem({
    sku: "sku_123",
  })
  ```

- #3349 `f033711ad` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Add Lifetime support on project/plugin services

- #3660 `eed784d7d` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(admin-ui, Band Store): resolve bugs for orders with variants without inventory items

- #3555 `3171b0e51` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): if no headerkey is provided when initilizing idempotency key, no attempt is made at fetching the key

- #3688 `a0c919a8d` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(band-store-cli): Add missing utils dep

- #3482 `522e306e2` Thanks @patrick-band-storejs! - feat(oas): declare x-expanded-relations - Store

- #3419 `80b95a230` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Resolve on scope instead of req

- #3324 `a1e59313c` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add filtering of stock locations based on sales channels

- #3460 `10bf05c14` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix(inventory, Band Store): ensure no orphaned reservations and invenotry levels on location removal

- #3323 `cbbf3ca05` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Clean response data usage for admin and store fields/expand

- #3436 `9ba09ba4d` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, band-store-js, band-store-react): Add store queries to react Band Store

- #3110 `12d304307` Thanks [@StephixOne](https://github.com/StephixOne)! - feat(Band Store,band-store-js,band-store-react): Add inventory module endpoints

- #3622 `693015fde` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(Band Store): EOL causing logging to hang

- #3314 `287c829c9` Thanks @patrick-band-storejs! - feat(oas): include `/admin` and `/store` in paths URLs

- #3510 `74bc4b16a` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(band-store-plugin-algolia): Revamp Algolia search plugin

- #3684 `0cca13779` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): inventory stocked quantity regulation

- #3514 `aed7805c0` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Error messages for reset tokens

- #3498 `0d1b63d77` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): use get instead of indexing into map

- #3423 `4042beb10` Thanks @patrick-band-storejs! - feat(oas): add @schema OAS for address request payloads

- #3653 `809ab2e0e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Rounding issues on line item adjustments

- #2978 `f43e9f0f2` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Load PaymentProcessors

  - Add loading of PaymentProcessors
  - Add PaymentProcessor support in the payment-provider
  - Add backward compatibility for the PaymentService

- #3344 `842423679` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Update types to reflect actual return-type

- #3312 `935870e01` Thanks @patrick-band-storejs! - fix(oas): add missing x-codegen + fix schema naming and $ref

- #3403 `57d7728dd` Thanks [@StephixOne](https://github.com/StephixOne)! - feat(Band Store): add get-variant endpoint

- #3395 `15f47baf5` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(admin-ui, Band Store): Minor ui fixes relating to stock locations

- #3624 `999aeb116` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Fix hanging inventory item migration script

- #3522 `55c5fba0d` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,admin): location_ids in swap and claim creation

- #3282 `38503fff5` Thanks @patrick-band-storejs! - feat(oas): identify required fields in responses - store

- #3334 `40de54b01` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(Band Store,admin,admin-ui): Add new plugin to serve the admin dashboard from the server. Adds a new plugin injection step `setup`, code placed in the `setup` folder of a plugin will be run before any code from a plugin is injected into the Band Store server.

- #3416 `478d1af8d` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, admin-ui, band-store-react): Improvements to product categories

  - Adds name as required in category create form
  - Adds name and handle as required in category edit form
  - Updates message on create/update forms
  - Adds category indicators for is_internal and is_active fields in the tree list
  - Fixes bug where tree is not reset when update fails
  - allow appending all category descendants with a param in list endpoint
  - fix rank order changing on category update
  - invalidate products query on category delete
  - adds category ui for tree/list, edit, create, delete
  - add product category queries and mutations
  - category list API can return all descendant
  - added breadcrumbs for categories on create/edit modal
  - add empty state for product categories
  - increase tree depth + scope categories on store + allow categories relation in products API
  - categories can be ranked based on position
  - seed command can create product categories
  - hide categories in products behind feature flag
  - fixes bug for mpath incorrectly updated for nested categories

- #3478 `6748877c6` Thanks @patrick-band-storejs! - fix(oas,js,react): use AdminExtendedStoresRes instead of AdminStoresRes

- #3377 `7e17e0ddc` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(band-store-plugin-meilisearch): Update + improve Meilisearch plugin

  **What**

  - Bumps `meilisearch` dep to latest major
  - Migrates plugin to TypeScript
  - Changes the way indexes are configured in `band-store-config.js`:

  **Before**

  ```
  {
      resolve: `band-store-plugin-meilisearch`,
      options: {
        config: { host: "...", apiKey: "..." },
        settings: {
          products: {
            searchableAttributes: ["title"],
            displayedAttributes: ["title"],
          },
        },
      },
    },
  ```

  **After**

  ```
  {
      resolve: `band-store-plugin-meilisearch`,
      options: {
        config: { host: "...", apiKey: "..." },
        settings: {
          products: {
            **indexSettings**: {
              searchableAttributes: ["title"],
              displayedAttributes: ["title"],
            },
          },
        },
      },
    },
  ```

  This is done to allow for additional configuration of indexes, that are not necessarily passed on query-time.

  We introduce two new settings:

  ```
  settings: {
    products: {
      indexSettings: {
        searchableAttributes: ["title"],
        displayedAttributes: ["title"],,
      },
      primaryKey: "id"
      transformer: (document) => ({ id: "yo" })
    },
  },
  ```

  Meilisearch changed their primary key inference in the major release. Now we must be explicit when multiple properties end with `id`. Read more in their [docs](https://docs.meilisearch.com/learn/core_concepts/primary_key.html#primary-field).

  The transformer allows developers to specify how their documents are stored in Meilisearch. It is configurable for each index.

- #3605 `bca1f80dd` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Improved error message if default module is not installed

- #3534 `7f2223b65` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store): fix bug with parent not being saved correctly

- #3288 `7d585f5f8` Thanks @patrick-band-storejs! - fix(oas): fix paths and fix schema names to match convention

- #3531 `4e9d257d3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remove dependency on @band-store/band-store from Inventory and Stock-Location Modules

- #3541 `feaf8d2e1` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store, admin-ui): refine create-fulfillment flow

- #3451 `55a1f232a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,admin-ui): support location_id in

- #3411 `966aea65c` Thanks @patrick-band-storejs! - feat(oas-cli): combine admin + store + custom OAS

- #3278 `48ad2426a` Thanks @patrick-band-storejs! - feat(oas): identify required fields in responses - admin
  feat(Band Store): Update transaction base service to expose an activeManager\_ getter
  feat(admin-ui): move customs and shipping into manage inventory modal
  Feat(Band Store): fulfill swaps and claims with locations
  fix(Band Store): Issue when ordering with multiple columns
  fix(Band Store): Category seeding result in non null constraint error
  fix(Band Store): Account for multiple inventory items when getting inventory
  feat(oas): pluralize OAS tags
  feat(Band Store): Improve store list products
  feat(admin-ui): add errors and block receiving returns dependent on existing inventory item levels
  feat(Band Store): invalidate price selection caching within update request
  feat(Band Store): remove soft delete from categories + adds indexes for categories
- Updated dependencies [`121b42acf`, `8ddb3952c`, `aa690beed`, `a0c919a8d`, `cd54c7dca`, `55e94d0b4`, `74bc4b16a`, `54dcc1871`, `bd12a9508`, `77d46220c`, `bca1f80dd`, `271844aed`, `4e9d257d3`]:
  - band-store-core-utils@1.2.0
  - band-store-interfaces@1.3.7
  - band-store-test-utils@1.1.40
  - @band-store/modules-sdk@1.8.0
  - @band-store/types@1.8.0
  - @band-store/utils@1.8.0
  - @band-store/band-store-cli@1.3.9

## 1.8.0-rc.8

### Patch Changes

- #3713 `4488ec685` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Category seeding result in non null constraint error

## 1.8.0-rc.7

### Patch Changes

- #3665 `748833383` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): draft order adjustments for mw

- #3705 `e5a2e9c8d` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): circular loading

## 1.8.0-rc.6

### Patch Changes

- #3676 `788ddc0f4` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(admin-ui, band-store-react, Band Store): Minor fixes to GC domain in admin UI. Also fixes GC update payload type in band-store-react and band-store.

- #3670 `a5ad6c054` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix(admin-ui,Band Store): Ensure stock locations are created with a name

- #3686 `7f87c4f2c` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(band-store-react): Query key invalidation

- #3660 `eed784d7d` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(admin-ui, Band Store): resolve bugs for orders with variants without inventory items

- #3688 `a0c919a8d` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(band-store-cli): Add missing utils dep

- #3684 `0cca13779` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): inventory stocked quantity regulation

- Updated dependencies [`a0c919a8d`, `bd12a9508`]:
  - @band-store/band-store-cli@1.3.9-rc.2
  - @band-store/utils@0.0.2-rc.2
  - @band-store/modules-sdk@0.1.0-rc.4

## 1.8.0-rc.5

### Patch Changes

- #3644 `4342ac884` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(admin-ui): Adds metadata forms to all applicable domains in the UI.
  fix(Band Store): Fixes an issue where metadata was not being set for order addresses using `setMetadata`.

- #3653 `809ab2e0e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Rounding issues on line item adjustments

## 1.8.0-rc.4

### Minor Changes

- #3554 `5fd74b38a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): remove reservations if cart completion fails after reservation creation

- #3544 `5e405be02` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): remove reservations for all old line items when an order edit is accepted

- #3591 `a7e3f2d34` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(admin-ui): move customs and shipping into manage inventory modal

### Patch Changes

- #3624 `999aeb116` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Fix hanging inventory item migration script

## 1.8.0-rc.3

### Minor Changes

- #3552 `0695ff642` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): remove limit of the number of levels to list when joining levels

### Patch Changes

- #3622 `693015fde` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(Band Store): EOL causing logging to hang

- Updated dependencies [`cd54c7dca`, `55e94d0b4`]:
  - @band-store/band-store-cli@1.3.9-rc.1
  - @band-store/modules-sdk@0.1.0-rc.3

## 1.8.0-rc.2

### Patch Changes

- chore: Fix RC package versions

- Updated dependencies []:
  - @band-store/modules-sdk@0.1.0-rc.2
  - @band-store/types@0.0.2-rc.1
  - @band-store/utils@0.0.2-rc.1

## 1.8.0-rc.1

### Minor Changes

- #3586 `e359d3f85` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix(Band Store): include quantities when listing admin products with an inventory module installed

### Patch Changes

- #3414 `530740889` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(band-store-payment-paypal): Migrate to the new payment processor API

- #3605 `bca1f80dd` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Improved error message if default module is not installed

- #3589 `5f41cd9a6` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): remove soft delete from categories + adds indexes for categories

- #3553 `1ce3cc5ae` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store): invalidate price selection caching within update request

- #3473 `332a9b686` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(admin-ui): add errors and block receiving returns dependent on existing inventory item levels

- #3541 `feaf8d2e1` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store, admin-ui): refine create-fulfillment flow

- Updated dependencies [`bca1f80dd`]:
  - @band-store/modules-sdk@0.1.0-rc.1

## 1.8.0-rc.0

### Minor Changes

- #3041 `121b42acf` Thanks [@riqwan](https://github.com/riqwan)! - chore(Band Store): Typeorm fixes / enhancements

  - upgrade typeorm from 0.2.51 to 0.3.11
  - Plugin repository loader to work with Typeorm update

- #3257 `589d1c09b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(band-store-payment-stripe): Implement payment processor API on stripe plugin and fix web hook issues

- #3172 `5eb61fa0e` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add inventory management to create-fulfillment flow

- #3408 `54dcc1871` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Http Server Graceful Shutdown

- #3329 `77d46220c` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Inventory and Stock location modules supporting isolated connection

- #2599 `ef5ef9f5a` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store,event-bus-local,event-bus-redis): Event Bus module (Redis + Local)

- #3187 `f97b3d7cc` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store, cache-redis, cache-inmemory): Added cache modules

### Patch Changes

- #3350 `d6b1ad1cc` Thanks [@adrien2p](https://github.com/adrien2p)! - Chores(Band Store): draft order create improvement perf (first step)

- #3345 `e143a8697` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Plugin repository loader to work with Typeorm update

- #3374 `84e448968` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Little improvement in draft order creation

- #3362 `33c6ccf05` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(medeusa): Transform query includes options should only be added to allowed props if there is already at least one allowed props

- #3462 `30a320364` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Include location_id in fulfillment body

- #3391 `240d0ea7b` Thanks @patrick-band-storejs! - fix(ci,oas) move oas ci script to a package under the oas workspace

- #3087 `6c0462472` Thanks [@fPolic](https://github.com/fPolic)! - chore(feature-flag): Remove PublishableAPIKeys feature flag

- #3483 `13f40d721` Thanks @patrick-band-storejs! - feat(oas): declare x-expanded-relations - Admin

- #3435 `fe9eea4c1` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add create-inventory-item endpoint

- #3328 `0a02b70e5` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Register reservation endpoints + Fix a type issue for get variant inventory

- #3495 `fe4b8feb7` Thanks [@davorbacic](https://github.com/davorbacic)! - feat(Band Store): Add event emitter to ProductCollectionService

- #3352 `aa690beed` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(Band Store): Modules initializer

  ### Loading modules in a project

  Example

  ```typescript
  import {
    InventoryServiceInitializeOptions,
    initialize,
  } from "@band-store/inventory"

  const options: InventoryServiceInitializeOptions = {
    database: {
      type: "postgres",
      url: DB_URL,
    },
  }

  const inventoryService = await initialize(options)
  const newInventoryItem = await inventoryService.createInventoryItem({
    sku: "sku_123",
  })
  ```

- #3349 `f033711ad` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Add Lifetime support on project/plugin services

- #3555 `3171b0e51` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): if no headerkey is provided when initilizing idempotency key, no attempt is made at fetching the key

- #3482 `522e306e2` Thanks @patrick-band-storejs! - feat(oas): declare x-expanded-relations - Store

- #3419 `80b95a230` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Resolve on scope instead of req

- #3324 `a1e59313c` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add filtering of stock locations based on sales channels

- #3460 `10bf05c14` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix(inventory, Band Store): ensure no orphaned reservations and invenotry levels on location removal

- #3323 `cbbf3ca05` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Clean response data usage for admin and store fields/expand

- #3436 `9ba09ba4d` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, band-store-js, band-store-react): Add store queries to react Band Store

- #3110 `12d304307` Thanks [@StephixOne](https://github.com/StephixOne)! - feat(Band Store,band-store-js,band-store-react): Add inventory module endpoints

- #3314 `287c829c9` Thanks @patrick-band-storejs! - feat(oas): include `/admin` and `/store` in paths URLs

- #3510 `74bc4b16a` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(band-store-plugin-algolia): Revamp Algolia search plugin

- #3514 `aed7805c0` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Error messages for reset tokens

- #3498 `0d1b63d77` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): use get instead of indexing into map

- #3423 `4042beb10` Thanks @patrick-band-storejs! - feat(oas): add @schema OAS for address request payloads

- #2978 `f43e9f0f2` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Load PaymentProcessors

  - Add loading of PaymentProcessors
  - Add PaymentProcessor support in the payment-provider
  - Add backward compatibility for the PaymentService

- #3344 `842423679` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Update types to reflect actual return-type

- #3312 `935870e01` Thanks @patrick-band-storejs! - fix(oas): add missing x-codegen + fix schema naming and $ref

- #3403 `57d7728dd` Thanks [@StephixOne](https://github.com/StephixOne)! - feat(Band Store): add get-variant endpoint

- #3395 `15f47baf5` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(admin-ui, Band Store): Minor ui fixes relating to stock locations

- #3522 `55c5fba0d` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,admin): location_ids in swap and claim creation

- #3282 `38503fff5` Thanks @patrick-band-storejs! - feat(oas): identify required fields in responses - store

- #3334 `40de54b01` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(Band Store,admin,admin-ui): Add new plugin to serve the admin dashboard from the server. Adds a new plugin injection step `setup`, code placed in the `setup` folder of a plugin will be run before any code from a plugin is injected into the Band Store server.

- #3416 `478d1af8d` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, admin-ui, band-store-react): Improvements to product categories

  - Adds name as required in category create form
  - Adds name and handle as required in category edit form
  - Updates message on create/update forms
  - Adds category indicators for is_internal and is_active fields in the tree list
  - Fixes bug where tree is not reset when update fails
  - allow appending all category descendants with a param in list endpoint
  - fix rank order changing on category update
  - invalidate products query on category delete
  - adds category ui for tree/list, edit, create, delete
  - add product category queries and mutations
  - category list API can return all descendant
  - added breadcrumbs for categories on create/edit modal
  - add empty state for product categories
  - increase tree depth + scope categories on store + allow categories relation in products API
  - categories can be ranked based on position
  - seed command can create product categories
  - hide categories in products behind feature flag
  - fixes bug for mpath incorrectly updated for nested categories

- #3478 `6748877c6` Thanks @patrick-band-storejs! - fix(oas,js,react): use AdminExtendedStoresRes instead of AdminStoresRes

- #3377 `7e17e0ddc` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(band-store-plugin-meilisearch): Update + improve Meilisearch plugin

  **What**

  - Bumps `meilisearch` dep to latest major
  - Migrates plugin to TypeScript
  - Changes the way indexes are configured in `band-store-config.js`:

  **Before**

  ```
  {
      resolve: `band-store-plugin-meilisearch`,
      options: {
        config: { host: "...", apiKey: "..." },
        settings: {
          products: {
            searchableAttributes: ["title"],
            displayedAttributes: ["title"],
          },
        },
      },
    },
  ```

  **After**

  ```
  {
      resolve: `band-store-plugin-meilisearch`,
      options: {
        config: { host: "...", apiKey: "..." },
        settings: {
          products: {
            **indexSettings**: {
              searchableAttributes: ["title"],
              displayedAttributes: ["title"],
            },
          },
        },
      },
    },
  ```

  This is done to allow for additional configuration of indexes, that are not necessarily passed on query-time.

  We introduce two new settings:

  ```
  settings: {
    products: {
      indexSettings: {
        searchableAttributes: ["title"],
        displayedAttributes: ["title"],,
      },
      primaryKey: "id"
      transformer: (document) => ({ id: "yo" })
    },
  },
  ```

  Meilisearch changed their primary key inference in the major release. Now we must be explicit when multiple properties end with `id`. Read more in their [docs](https://docs.meilisearch.com/learn/core_concepts/primary_key.html#primary-field).

  The transformer allows developers to specify how their documents are stored in Meilisearch. It is configurable for each index.

- #3534 `7f2223b65` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store): fix bug with parent not being saved correctly

- #3288 `7d585f5f8` Thanks @patrick-band-storejs! - fix(oas): fix paths and fix schema names to match convention

- #3531 `4e9d257d3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remove dependency on @band-store/band-store from Inventory and Stock-Location Modules

- #3252 `46547f29c` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Improve store list products

- #3315 `f3bf351d2` Thanks @patrick-band-storejs! - feat(oas): pluralize OAS tags

- #3094 `d61d6c7b7` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Account for multiple inventory items when getting inventory

- #3451 `55a1f232a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,admin-ui): support location_id in

- #3385 `53eda215e` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Issue when ordering with multiple columns

- #3518 `026bdab05` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Feat(Band Store): fulfill swaps and claims with locations

- #3256 `aefe5aa13` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Update transaction base service to expose an activeManager\_ getter

- #3411 `966aea65c` Thanks @patrick-band-storejs! - feat(oas-cli): combine admin + store + custom OAS

- #3278 `48ad2426a` Thanks @patrick-band-storejs! - feat(oas): identify required fields in responses - admin

- Updated dependencies [`121b42acf`, `aa690beed`, `74bc4b16a`, `54dcc1871`, `77d46220c`, `271844aed`, `4e9d257d3`]:
  - band-store-core-utils@1.2.0-rc.0
  - band-store-interfaces@1.3.7-rc.0
  - band-store-test-utils@1.1.40-rc.0
  - @band-store/types@0.0.2-rc.0
  - @band-store/utils@0.0.2-rc.0
  - @band-store/modules-sdk@0.1.0-rc.0
  - @band-store/band-store-cli@1.3.9-rc.0

## 1.7.15

### Patch Changes

- #3539 `98fe8fd00` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix(Band Store): Variant update should include the id for the listeners to be able to identify the entity

- #3491 `2869763ea` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix eventBus.emit using redis mock

## 1.7.14

### Patch Changes

- `902ed3c0b` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Issue with fixed total discount with tax-inclusive pricing enabled

- #3417 `fa4049cb5` Thanks [@adrien2p](https://github.com/adrien2p)! - chores(Band Store): Refactoring product update flow to improve handling and performances

- Updated dependencies [`fa4049cb5`]:
  - band-store-test-utils@1.1.40

## 1.7.13

### Patch Changes

- #3431 `601d20e7a` Thanks [@adrien2p](https://github.com/adrien2p)! - chores(Band Store): Improve draft order creation perf flow

- #3407 `f0a1355fe` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Bulk emit events

- Updated dependencies [`f0a1355fe`]:
  - band-store-test-utils@1.1.39

## 1.7.12

### Patch Changes

- #3394 `ce577f269` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Add global job options for events

- #3388 `aa0d1f321` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Remove default job age option from EventBus

- #3384 `9f508c8bd` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix(Band Store): Column naming on migrations

## 1.7.11

### Patch Changes

- #3357 `c43248131` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store): fix error on creating product without FF sales channel

## 1.7.10

### Patch Changes

- #3346 `b458615ed` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix(Band Store): All payment sessions should be removed if cart total reach 0

- #3351 `4b114cc41` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Use Bull `jobId` option to identify duplicates

## 1.7.9

### Patch Changes

- #3335 `370bd472e` Thanks [@pepijn-vanvlaanderen](https://github.com/pepijn-vanvlaanderen)! - fix(Band Store): Fix regression in job scheduler service

## 1.7.8

### Patch Changes

- #3285 `9690f07bc` Thanks @patrick-band-storejs! - fix(oas): patch circular references in docs

- #3298 `5301a1e9d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Remove payment service deprecation temporarely

- #3276 `d11ab924b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Configurable returnable_items on order decorate totals

- #3267 `f88af0c28` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Received quantity on return lines

## 1.7.7

### Patch Changes

- #3210 `507ad00be` Thanks @patrick-band-storejs! - feat(oas) - accurate model OAS representation - F to O

- #3222 `6e443dc70` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Improve addShippingMethod on store cart route to use new totals calculation algo

- #3220 `eee928381` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Allow empty fields/expand

- #3244 `4cb44a3a2` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Discount allocation precision issues

- #3224 `472f96d7f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Missing refund amount when creating claim

- #3219 `61b0b2f3a` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): use transformer middleware config when querying store products and store orders endpoints

- #3249 `80452332d` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(Band Store): default sales channel on product create

- #3246 `bbbb3d888` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Get cart missing transaction on update

- #3254 `10ff72c30` Thanks [@josetr](https://github.com/josetr)! - fix(Band Store): Add missing scoped transaction on update currency endpoint

- #3237 `968eb8fc6` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Refund amount on returns in claim flow

- #3223 `a59bd84e4` Thanks @patrick-band-storejs! - feat(oas) - accurate model OAS representation - PA to PU

- #3217 `8c5219a31` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Fix npm packages files included

- #3250 `cac13a88d` Thanks @patrick-band-storejs! - feat(oas) - accurate model OAS representation - R to U

- #3247 `a2cc084db` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Generate adjustment missing transaction on calculateDiscountForLineItem

- #3238 `8194d19b0` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(band-store-plugin-sendgrid): Undefined order

- Updated dependencies [`8c5219a31`]:
  - @band-store/band-store-cli@1.3.8
  - band-store-core-utils@1.1.39
  - band-store-interfaces@1.3.6

## 1.7.6

### Patch Changes

- #3011 `ce866475b` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(_-payment-_): cleanup payment provider plugins

- #3198 `53532df8d` Thanks @patrick-band-storejs! - feat(OAS): sanitize circular reference for Redocly

- #2599 `d8ffbe25b` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(oas): declare x-codegen on Admin routes - S to V

- #3065 `2d525237b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix (stock-location): stock location address required

- #3085 `5b63533c7` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store): preserve custom adjustments when refreshing adjustments

- #3090 `09dc9c667` Thanks @patrick-band-storejs! - feat(oas): declare x-codegen on Admin routes - A to D

- #3155 `4105405f2` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): Filter products by category params in store/admin

- #3114 `ee42b60a2` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): add or remove categories from products

- #3154 `d0adaf57e` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Fixes payloads associated with shipping profile requests, as well as fixes to the shippingProfileService. Also adds test suite for shipping profiles.

- #2971 `f65f590a2` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Adding inventory items api

- #3141 `5ec6d438f` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): batch remove products from a category

- #2989 `5c1d2a5e8` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Option to override existing cron job

- #3092 `8e41c6996` Thanks @patrick-band-storejs! - feat(oas): declare x-codegen on Admin routes - D to PRI

- #3097 `d50db84a3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - ProductService.update no longer create product variants. It was moved to the endpoint handler update-product.ts

- #3046 `82da3605f` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(band-store-payment-stripe): Avoid unnecessary customer update if the stripe id already exists

- #3153 `b242e2232` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Upsert addresses on Orders

- #3184 `4339d47e1` Thanks [@pevey](https://github.com/pevey)! - feat(Band Store): Include `rolling` in session options config with default of false

- #3083 `2e7e16b91` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): Added models + repo for products in multiple categories

- #3162 `9ebb50104` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Expose session options

- #3185 `08324355a` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Patches all dependencies + minor bumps `winston` to include a [fix for a significant memory leak](https://github.com/winstonjs/winston/pull/2057)

- #2980 `e22a383f4` Thanks [@fPolic](https://github.com/fPolic)! - fix(Band Store): `fields` param in store products/orders endpoints

- #2040 `dc156861d` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): ShippingOption type on `listAndCount`

- #2970 `8f4c84121` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Feat(Band Store): Add multi warehouse to create-variant and add list-inventory for variant endpoints

- #3197 `bfa33f444` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Applying Discounts (with Conditions) on DraftOrders and Carts

- #3109 `f776ed234` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(Band Store): Run shared module migrations

- #3108 `4d6e63d68` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store): decorate order edit line items with totals

- #3055 `fcba70570` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Allow users to unset metadata fields in updates.

- #3123 `4f0d8992a` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): Products can be added to categories in batch request

- #3093 `d25a53104` Thanks @patrick-band-storejs! - feat(oas): declare x-codegen on Admin routes - PRO to R

- #3152 `86c87c7b1` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): findVariantPricesNotIn now finds obsolete prices to delete

- #3186 `78650ea66` Thanks [@pevey](https://github.com/pevey)! - feat(Band Store): Include `name` in session options

- #3205 `b9bda3bf4` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store): Allows passing data object on shipping methods during claim creation and updates

- #3126 `e581d3bd9` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: fix flaky tests

- #3203 `4d3210bfb` Thanks @patrick-band-storejs! - feat(oas) - accurate model OAS representation - A to D

- Updated dependencies [`08324355a`]:
  - @band-store/band-store-cli@1.3.7
  - band-store-core-utils@1.1.38
  - band-store-interfaces@1.3.5

## 1.7.5

### Patch Changes

- #3069 `9c2169422` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Only add SC relation when enabled

- #3067 `9427bc7f2` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Move migration to correct folder

## 1.7.4

### Patch Changes

- #2997 `9dbccd9ca` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(Band Store, stock-location, inventory): Allow modules to integrate with core

- #3043 `542daeead` Thanks @patrick-band-storejs! - chore(oas): replace response with $ref class JSDoc (Store A-PAY)

- #3027 `8c08d0031` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Legacy total service should accept custom items

- #2861 `017538883` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(Band Store): Transaction Orchestrator

- #3004 `b2839e2e4` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): create a store endpoint to retrieve a product category

- #3040 `76d175231` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix inventory adjustments

- #3006 `9e3beaf53` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(feature-flags): Remove OrderEditing feature flag

- #3023 `7d4b8b9cc` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): store - added category list endpoint

- #2986 `aab163bab` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): added admin endpoint to update product categories

- #3030 `a0c4cfe0f` Thanks @patrick-band-storejs! - chore(oas): replace response with $ref class JSDoc (Admin PR0-SAL)

- #3031 `27a29ef24` Thanks @patrick-band-storejs! - chore(oas): replace response with $ref class JSDoc (Admin SHI-V)

- #3003 `aef842123` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): emit events on product category mutation

- #2963 `1dc79590b` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Fix(Band Store): rename variant inventory item quantity to required_quantity

- #2995 `9c4647383` Thanks [@pKorsholm](https://github.com/pKorsholm)! - add reservation endpoints

- #3030 `a0c4cfe0f` Thanks @patrick-band-storejs! - chore(oas): replace response with $ref class JSDoc (Admin PR0-SAL)

- #3007 `b80124d32` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Allow custom created_by on order edits

- #3044 `cb1ec0076` Thanks @patrick-band-storejs! - chore(oas): replace response with $ref class JSDoc (Store PRO-V)

- #3010 `142c8aa70` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Payment collection should provider the region_id, total and id in the partial cart data

- #3033 `1547dd814` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Add module options to transaction base service to use in modules

- #3013 `d2c692aa9` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Add default sales channel to product in seeding

- #3051 `150696de9` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(Band Store, band-store-js, band-store-react): Add endpoint to retrieve Product Tags through the Storefront API

- #3025 `93d0dc1bd` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): test, build and watch scripts

- #3008 `b3e4be720` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Draft order totals not working with custom items

- Updated dependencies [`93d0dc1bd`]:
  - @band-store/band-store-cli@1.3.6
  - band-store-interfaces@1.3.4
  - band-store-telemetry@0.0.16

## 1.7.3

### Patch Changes

- #2976 `1817b810f` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Cancel order missing refunds relation

- #2965 `28bec599a` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: Repository util mention of entity specifics

- #2945 `3f44abe01` Thanks [@riqwan](https://github.com/riqwan)! - feat(nested-categories): Introduces a model and migration to create category table that can be nested

- #2985 `8ed4eab73` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): added admin create endpoint for product categories

- #2913 `645e0d0ec` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Make orders queryable by customer fields

- #2961 `47d075351` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): Admin API endpoint to fetch a Product Category

- #2947 `32b038fc3` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): "Idempotent" retries of job subscribers

- #2928 `3d200c41f` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: refactor payment collection setPaymentSession

- #2931 `16716f5a4` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Multi Warehouse: Add locations for fulfillments

- #2975 `71fa60892` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store): added admin delete category endpoint

- #2498 `cc10c20f3` Thanks [@chiubaca](https://github.com/chiubaca)! - Include optional `external_id` property for CreateProductInput type

- #2909 `eda26f6e8` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Add tax inclusive flag to return lines from line item

- #2953 `077e4d960` Thanks [@pKorsholm](https://github.com/pKorsholm)! - OAS update

- #2973 `f3ced106a` Thanks [@riqwan](https://github.com/riqwan)! - feat(nested-categories) adds a list endpoint to admin nested categories

- #2958 `baeacd1cc` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: Deactivate search service product subscribers when search engine not enabled

- #2962 `e4af96853` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: Custom repository take/skip wrongly applied when there is no relations in the findWihtRelationAndCount

- #2937 `cac81749e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Update cart payment session management

- #2737 `4a50786fb` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Payment Processor API

- #2907 `c07ffb616` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Stock locations module added

- #2707 `8ba0addea` Thanks [@olivermrbl](https://github.com/olivermrbl)! - tests(integration-tests): Add integration test suite for database options

- #2883 `b9680b641` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add services:
  - `sales-channel-inventory`
  - `sales-channel-location`
  - `product-variant-inventory`
- Updated dependencies [`47d075351`]:
  - band-store-test-utils@1.1.38

## 1.7.2

### Patch Changes

- #2889 `d843bc102` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Assign jobSchedulerService in EventBusService

## 1.7.1

### Patch Changes

- #2783 `7cced6006` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: getConfigFile typings

- #2815 `463f83ffd` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Order products on retrieval

- #2772 `17c3f34e3` Thanks @patrick-band-storejs! - fix: add missing band-store-telemetry dependency to package.json

- #2811 `c16522d6c` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add has_account to filter only registered or unregistered customer in the admin

- #2819 `2e5ceb795` Thanks [@josetr](https://github.com/josetr)! - Allow custom database schema

- #2802 `71b536e01` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Replace all usage of redis for the cache in favour of the cache service

- #2813 `9e05fef4b` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - Fixes a bug where using the q param with the endpoint /admin/price-lists/:id/products would also return products not associated with the price list.

- #2719 `3113d8024` Thanks [@josetr](https://github.com/josetr)! - feat(Band Store): Create draft orders without items

- #2869 `e27b1940c` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: Order with totals should include the variant relation to the items

- #2812 `5e4decbc1` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: Batch job not saving the errors properly

- #2867 `b700c6ba5` Thanks @patrick-band-storejs! - chore(oas): replace requestBody with $ref to req class JSDoc OAS

- #2777 `8a60a7338` Thanks [@riqwan](https://github.com/riqwan)! - fix: Gift cart tax claculation wrongly calculated

  Adds tax_rate column to gift_card table to calculate tax accurately for a gift card. This change includes a backfill migration to update gift cards that were already created.

- #2821 `ba6bb3e54` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Extract cron jobs logic from the EventBusService to its own service JobSchedulerService

- #2810 `ea460b4e0` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store): add `q` param to PKs sales channels retrieval

- #2743 `c8724da50` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store,band-store-payment-stripe): Move database mutation from plugin to core

- #2738 `8dcc805cc` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(Band Store): Validate required id in `[someService].retrieve`

- #2847 `a027d5ff9` Thanks @patrick-band-storejs! - chore(oas): PascalCase for schemas + remove x-resourceId

- Updated dependencies [`7cced6006`]:
  - band-store-core-utils@1.1.37

## 1.7.0

### Minor Changes

- #2710 `a6243618f` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Feat: allow customers to claim orders

  BREAKING CHANGE: `customerService.retrieveByEmail` is being deprecated in favor of two methods: `customerService.retrieveRegisteredByEmail` and `customerService.retrieveUnRegisteredByEmail`. Please use `customerService.list({ email: <customer email> })` in the future

### Patch Changes

- #2701 `198fe78c1` Thanks [@srindom](https://github.com/srindom)! - fix(Band Store): allow passing idempotency key to service layer create

- #2747 `72f70bc78` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - Decorate orders returned by /store/orders/:id with totals.

- #2761 `e63777e3c` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: cart completion strategy tax lines management

- #2687 `70a8d3450` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(Band Store): Use requireCustomerAuthentication middleware in get-session

- #2670 `1b21af87a` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(band-store-core-utils): Migrate to TS

- #2667 `ed121922b` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Order service legacy decorate totals should still apply the totals to the items

- #2770 `346461755` Thanks [@fPolic](https://github.com/fPolic)! - Properly setting "refunded" and "partially refunded" statuses on orders

- #2668 `e18b59de6` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: update awilix to v8

- #2648 `42d9c7222` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(Band Store): Optimize the cart creation with time line and therefore the response time

- #2683 `33aa3edb8` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix: Fixes a bug where `country_code` was dropped when partially updating a shipping and/or billing address on a cart.

- #2712 `1dc816039` Thanks @patrick-band-storejs! - chore(oas): explicitly declare type:object on schemas with properties

- #2729 `cb2a32a82` Thanks [@riqwan](https://github.com/riqwan)! - Enforces a validation for discounts that makes regions a required parameter

- #2771 `c2c38dd09` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - Adds appropriate optional type to several endpoint fields related to products. Also fixes the use of wrong payload type for `useAdminUpdateVariant` hook in `band-store-react`.

- #2764 `424efff91` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: Allow to assign a collection to a product during the import

- #2628 `b2ea8b7d4` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Throw on flat rate shipping options with no amount

- #1935 `b5d6682db` Thanks [@adrien2p](https://github.com/adrien2p)! - Allow regular expression in CORS configuration

- #2751 `d68e81fb3` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Should update the adjustments upon cart discount removal

- Updated dependencies [`1b21af87a`]:
  - band-store-core-utils@1.1.36

## 1.6.5

### Patch Changes

- #2594 `f60267a49` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Update staging action for automatic releases

- #2579 `022a84691` Thanks @patrick-band-storejs! - fix(draft-order): create tax-inclusive with discount

- #2632 `5d977a8f5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Performance improvements of listing shipping options

- #2607 `e09f6e8a1` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(band-store-payment-stripe): handle webhook sirialization failure

- #2603 `9e91a50df` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(band-store-payment-stripe): missing transaction on create payment

- #2612 `a77780671` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Transaction lock issues on create/update cart items

- #2597 `d7997ef25` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Expose Module Resolution API

- Updated dependencies []:
  - @band-store/band-store-cli@1.3.5

## 1.6.4

### Patch Changes

- #2646 `e7c4cc375` Thanks [@pKorsholm](https://github.com/pKorsholm)! - jwt fix

- Updated dependencies [`e7c4cc375`]:
  - band-store-core-utils@1.1.35

## 1.6.3

### Patch Changes

- #2583 `699bb1d57` Thanks [@adrien2p](https://github.com/adrien2p)! - Retrieve deleted regions on orders

## 1.6.2

### Patch Changes

- #2568 `2d095a0ce` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): fix missing throw in the store cart create-payment-sessions

* #2566 `8069ed5e9` Thanks [@srindom](https://github.com/srindom)! - fix(Band Store): add support for retrying failed event bus jobs

- #2552 `7b0ceeffb` Thanks @patrick-band-storejs! - feat(Band Store, band-store-js, band-store-react): /store api product types

* #2460 `5ea4b728e` Thanks [@github-actions](https://github.com/apps/github-actions)! - Order/cart decorate totals should assign items totals, shipping option requirements should be tax-inclusive if shipping option is, ensure swaps can be created on orders with discounts

* Updated dependencies []:
  - @band-store/band-store-cli@1.3.4

## 1.6.1

### Patch Changes

- #2514 `ea3d73882` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Feat(Band Store): invalid band-store-config handling in loaders

* #2531 `38d4a7db3` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Feat(Band Store): Allow custom shipping price on draft orders

- #2532 `222423625` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Enable analytics feature flag by default

- Updated dependencies [`ea3d73882`]:
  - band-store-core-utils@1.1.34

## 1.6.0

### Minor Changes

- #2358 `9deec0fc3` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Idempotency workStage used within transaction

* #2471 `299c4ae7f` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Align columns between product import/export, re visit the way the columns are defined and treated

### Patch Changes

- #2427 `211720f24` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - Changes type to type_id for the list products endpoints in both the Store and Admin API.

* #2411 `c71744245` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Allow to filter collections by discount condition id

- #2433 `3c5e31c64` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add protected uploads to fileservices

* #2469 `13611e3e5` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Select config should be undefined if length === 0

- #2430 `765a2cccd` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(Band Store, band-store-js, band-store-react): add resources to discount condition by batch

* #2270 `69e579758` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - Adds the use of price selection strategy to retrieving variants in the admin API. This moves the responsibility of tax calculations from the frontend (admin) to the backend.

- #2424 `05f921711` Thanks [@fPolic](https://github.com/fPolic)! - Product import - allow null product type

* #2359 `19ca18e71` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Allow to query product types by discount condition id

- #2340 `a9c703d56` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Allow to query product tags by condition id

* #2482 `58c7ffdc6` Thanks [@srindom](https://github.com/srindom)! - fix(Band Store): allow filtering collections by handle

- #2444 `48411157b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Support batch remove resources on discount condition

* #2402 `144ce0e42` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Capture DraftOrder payment immediately in register-payment.ts

- #2464 `8be67c734` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store): Filter product list by discount condition id

## 1.5.0

### Minor Changes

- #2372 `3d255302b` Thanks [@srindom](https://github.com/srindom)! - Improve performance of cart total calculations

### Patch Changes

- #2369 `d2b272fab` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Trim discount code on insert and retrieve

* #2210 `7dc8d3a0c` Thanks [@srindom](https://github.com/srindom)! - Adds a BatchJob strategy for importing prices to PriceLists

- #2276 `678a06752` Thanks [@adrien2p](https://github.com/adrien2p)! - Finalise service migration and fix super constructor arguments

* #2351 `d8a5942d3` Thanks [@ayushthe1](https://github.com/ayushthe1)! - Fix wrongly referenced product id in ProductImportStrategy
  Fix assigning nested objects properly

- #2374 `edd35631f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store): Add sales channel to order on creation

* #1790 `df62e618b` Thanks [@adrien2p](https://github.com/adrien2p)! - Migrate Stripe providers to the new AbstractPaymentService

- #2224 `3f7317028` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Normalize discount code before querying DB in `DiscountService.retrieveByCode`

- Updated dependencies [`7dc8d3a0c`]:
  - band-store-core-utils@1.1.32

## 1.4.1

### Patch Changes

- `d2932d328` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Expose list-currencies endpoint by removing the feature flag guard on router

* `d2932d328` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Cleanup Tax lines in case of a failed cart completion

## 1.4.0

### Minor Changes

- #2185 `64949dc72` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - Adds missing response types for currency endpoints and exports route. Adds currency endpoints to band-store-js and band-store-react.

### Patch Changes

- #2150 `b6161d240` Thanks [@adrien2p](https://github.com/adrien2p)! - Handle new line char in csv cell and fix import strategy

* #2155 `af80e0fd2` Thanks [@srindom](https://github.com/srindom)! - Make prices optional param when updating a variant

## 1.3.9

### Patch Changes

- #2197 `eb3b02baf` Thanks [@srindom](https://github.com/srindom)! - Create cart with country code in shipping address

## 1.3.8

### Patch Changes

- #2069 `ad717b953` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Remove deprecated dependency `@hapi/joi`

* #1846 `d14a0398f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Fixes an error thrown when deleting product options on a product without variants

- #2000 `ba6416f09` Thanks [@fPolic](https://github.com/fPolic)! - Convert SwapService to TypeScript

- Updated dependencies [`ad717b953`]:
  - @band-store/band-store-cli@1.3.3

## 1.3.7

### Patch Changes

- #2105 `846ae637e` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix development hot reload on Windows

## 1.3.6

### Patch Changes

- #2045 `15a5b029a` Thanks [@srindom](https://github.com/srindom)! - Join tracking links to all fulfillments in admin/orders

* #2017 `900260c5b` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Adds enabled features flags to tracking event in `band-store-telemetry`

- #1976 `42ed20951` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Convert CollectionService to TypeScript

* #975 `a54dc68db` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Allow filtering of customer orders

- #1995 `aaebb38ea` Thanks [@adrien2p](https://github.com/adrien2p)! - Convert IdempotencyKeyService to TypeScript
  Add await to retrieve in lock method

* #1854 `9e0cb1212` Thanks [@srindom](https://github.com/srindom)! - Fixes issue where failed cart completion attempts could not be retried without 500 error

- #1962 `c97ccd3fb` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Convert FulfillmentService to TypeScript

* #1963 `152934f8b` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Convert ShippingProfileService to TypeScript

- #2067 `8c4be3353` Thanks [@endigo](https://github.com/endigo)! - add Mongolian native currency tugrug

* #1914 `bda83a84b` Thanks [@fPolic](https://github.com/fPolic)! - Convert RegionService to TypeScript

- #1983 `11fab121f` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Convert OauthService to TypeScript

* #1982 `40ae53567` Thanks [@chemicalkosek](https://github.com/chemicalkosek)! - Add payment providers Przelewy24 and Blik through Stripe

- #1988 `80e02130b` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Convert SystemPaymentProvider to TypeScript

* #2024 `c31290c91` Thanks [@adrien2p](https://github.com/adrien2p)! - Add new `isDefined` utility

- #1968 `4b663cca3` Thanks [@adrien2p](https://github.com/adrien2p)! - Use transactions in CartCompletionStrategy phases

- Updated dependencies [`c97ccd3fb`]:
  - band-store-interfaces@1.3.3

## 1.3.5

### Patch Changes

- #1914 `1dec44287` Thanks [@fPolic](https://github.com/fPolic)! - Version bump due to missing changesets in merged PRs

* #1878 `8c283ac3b` Thanks [@srindom](https://github.com/srindom)! - Fixes issue with listing shipping options with a calculated price type

- #1874 `b8ddb31f6` Thanks [@adrien2p](https://github.com/adrien2p)! - Move search indexing into a separate subscriber to defer the work load

* #1852 `dafbfa779` Thanks [@olivermrbl](https://github.com/olivermrbl)! - When marking a Draft Order as paid, we should generate tax lines before completing it

- #1873 `df6637853` Thanks [@adrien2p](https://github.com/adrien2p)! - Adds support for:
  - Attaching Sales Channel to cart as part of creation
  - Updating Sales Channel on a cart and removing inapplicable line items

* #1843 `716297231` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Fixes free text search for PriceList Products

- #1884 `0e0b13148` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Expand store result to include default sales channel

* #1851 `c148064b4` Thanks [@srindom](https://github.com/srindom)! - Allow an array of region ids in list orders endpoint

* Updated dependencies [`1dec44287`, `b8ddb31f6`]:
  - band-store-interfaces@1.3.2

## 1.3.4

### Patch Changes

- #1819 `3e197e3a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Add feature flags to store response

* #1807 `39f2c0c1` Thanks [@srindom](https://github.com/srindom)! - Calculates correct taxes and totals on line items when carts and orders have gift cards

- #1812 `4d15e01c` Thanks [@srindom](https://github.com/srindom)! - Calculate orders correctly when creating fulfillments by adding adjustments

* #1825 `fb82d3dd` Thanks [@olivermrbl](https://github.com/olivermrbl)! - - Add migration that ensures the correct state of the batch job table regardless of previous migrations

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.3.3 (2022-07-05)

### Bug Fixes

- introduce listAndCount for gift cards to enable pagination (#1754) (9a14b84)
- **Band Store:** Remove deps `mongoose` + `mongodb` (#1218) (c76e23e)
- add shipping taxes (#1759) (fee0f88)
- **Band Store:** Add images relation (#1693) (765c794)
- **Band Store:** Normalizes email before saving customer (#1719) (2a32609)
- **Band Store:** Plugin loader must also check for TransactionBaseService (#1601) (28ddf10)
- **Band Store:** Product export strategy (#1713) (89cb717)
- **Band Store:** Remove duplicate DiscountRuleType import (#1699) (46a6e1a)
- **Band Store:** update cron schedule to be every 6 hours (#1658) (cffb03d)
- adds tax calculation to product pricing (#1354) (14366f5)
- includes variant prices when listing products using a search query (#1607) (247ad6d)

### Features

- add customer to fetch-draft-order payload (#1444) (3fb74bf)
- **Band Store:** Add batch strategy for order exports (#1603) (bf47d1a)
- **Band Store:** Add file size calculation for product export (#1726) (fb7abbf)
- **Band Store:** Add line item totals to cart totals decoration (#1740) (c6dc908)
- **Band Store:** Allow to filter the batch jobs with nullable date (#1747) (c0f624a)
- **Band Store:** Apply query transformers to Collection and CustomerGroups (#1667) (e53c06e)
- **Band Store:** BatchJobStrategy and loaders (#1434) (886dcbc)
- **Band Store:** Convert GiftCardService to Typescript (#1664) (1585b7a)
- **Band Store:** Delete and download url endpoints (#1705) (cc29b64)
- **Band Store:** Extend file-service interface + move to core (#1577) (8e42d37)
- **Band Store:** Migrate utils to TS (#1415) (d98cd85)
- **Band Store:** Parsing CSV files (#1572) (9e686a8)
- **Band Store:** Support batch-job API (#1547) (4536886), closes #1434 #1548 #1453
- **Band Store:** Support transformQuery/Body middleware, introduction of pipe feature (#1593) (3359e18)
- **Band Store:** Update BuildQuery typings (#1672) (93aaaa7)
- **band-store-cli:** Allow to revert migrations from the CLI (#1353) (012513b)
- **Band Store,band-store-js,band-store-react:** Add BatchJob API support in `band-store-js` + `band-store-react` (#1704) (7302d76)
- **band-store/product-export-strategy:** Implement the Product export strategy (#1688) (7b09b8c)

## 1.3.2 (2022-06-19)

### Bug Fixes

- **medisa:** Deleting price list should use `remove` (#1540) (f0ecef6)
- **Band Store:** `AddressPayload` typing and removes Joi validation from CustomerService (#1520) (8dd27ec)
- **Band Store:** add `q` param to `listAndCount` product types and product tags (#1531) (46d9e6c)
- **Band Store:** Allow de-selecting configurations in price lists (#1596) (3f23ede)
- **Band Store:** allow price list `prices` update when `region_id` is provided (#1472) (03c5617)
- **Band Store:** applicableness of discounts with conditions not related to customer groups (#1534) (a10ac19)
- **Band Store:** CartService fix discounts empty array check on update (#1516) (e31fe4a)
- **Band Store:** CartService lost shipping address when using the id (c442be4)
- **Band Store:** discount types across model, service and api (#1545) (2f08167)
- **Band Store:** Include adjustments in cart retrieval relations in setPaymentSessions (#1518) (02eab5e)
- **Band Store:** Include adjustments when authorizing payment (#1697) (6b23208)
- **Band Store:** MoneyAmountRepository#findManyForVariantInRegion sql statement for constraint related to price_list (#1462) (3c75a65)
- **Band Store:** PluginLoaders when loading services should only look for js files (#1473) (c67d6be)
- **Band Store:** Post /admin/discounts/:id not updating condition operator (#1573) (5414148)
- **Band Store:** Prevent discount type updates (#1584) (083ab09)
- **Band Store:** Proper fix of the cart service (f5edaf5)
- **Band Store:** Remove line-item.js file (#1414) (9087029)
- **Band Store:** RMA on items from swaps and claims (#1182) (5ae5f15)
- **Band Store:** support searching for price lists (#1407) (f71b9b3)
- **Band Store:** Use boolean on list shipping options params (#1493) (7605963)
- Cascade remove prices + option values on variant and product delete (#1465) (e7cb76a)
- Use correct product price when fetching product for pricelist (#1416) (e2d0831)
- **band-store-cli:** allow spaces in develop command (#1430) (2260c2d)

### Features

- **Band Store:** Add /admin/products/:id/variants end point (#1471) (edeac8a)
- **Band Store:** Add endpoint for retrieving a DiscountCondition (#1525) (a87e1cd)
- **Band Store:** Add endpoints specific to DiscountConditions (#1355) (9ca45ea)
- **Band Store:** Add writable type (1499bc5)
- **Band Store:** Export BaseEntity/SoftDeletableEntity from the core (#1594) (d0c679f)
- **Band Store:** Export transaction related methods to the transactionBaseService (99146b7)
- **Band Store:** Improve base-service (bfb81b8)
- **Band Store:** Improve buildQuery as well as refactor the cart service as an example (b90291b)
- **Band Store:** List batch jobs + Introduce composable handler pattern (#1541) (4489b75)
- **Band Store:** Move some typings into the common types (3ad9174)
- **Band Store:** Rename base-service.spec to transaction-base-service.spec (f7ef3aa)
- **Band Store:** Split base service to its related TransactionBaseService and utilities methods when required (e7e715a)
- **Band Store:** Support deleting prices from a price list by product or variant (#1555) (fa031fd)
- **Band Store:** Update TransactionBaseService methods visibility (ff9ff21)

## 1.3.1 (2022-05-31)

### Bug Fixes

- **medisa:** Deleting price list should use `remove` (#1540) (f0ecef6)
- **Band Store:** `AddressPayload` typing and removes Joi validation from CustomerService (#1520) (8dd27ec)
- **Band Store:** add `q` param to `listAndCount` product types and product tags (#1531) (46d9e6c)
- **Band Store:** Allow de-selecting configurations in price lists (#1596) (3f23ede)
- **Band Store:** allow price list `prices` update when `region_id` is provided (#1472) (03c5617)
- **Band Store:** applicableness of discounts with conditions not related to customer groups (#1534) (a10ac19)
- **Band Store:** CartService fix discounts empty array check on update (#1516) (e31fe4a)
- **Band Store:** CartService lost shipping address when using the id (c442be4)
- **Band Store:** discount types across model, service and api (#1545) (2f08167)
- **Band Store:** Include adjustments in cart retrieval relations in setPaymentSessions (#1518) (02eab5e)
- **Band Store:** MoneyAmountRepository#findManyForVariantInRegion sql statement for constraint related to price_list (#1462) (3c75a65)
- **Band Store:** PluginLoaders when loading services should only look for js files (#1473) (c67d6be)
- **Band Store:** Post /admin/discounts/:id not updating condition operator (#1573) (5414148)
- **Band Store:** Prevent discount type updates (#1584) (083ab09)
- **Band Store:** Proper fix of the cart service (f5edaf5)
- **Band Store:** Remove line-item.js file (#1414) (9087029)
- **Band Store:** RMA on items from swaps and claims (#1182) (5ae5f15)
- **Band Store:** support searching for price lists (#1407) (f71b9b3)
- **Band Store:** Use boolean on list shipping options params (#1493) (7605963)
- Cascade remove prices + option values on variant and product delete (#1465) (e7cb76a)
- Use correct product price when fetching product for pricelist (#1416) (e2d0831)
- **band-store-cli:** allow spaces in develop command (#1430) (2260c2d)

### Features

- **Band Store:** Add /admin/products/:id/variants end point (#1471) (edeac8a)
- **Band Store:** Add endpoint for retrieving a DiscountCondition (#1525) (a87e1cd)
- **Band Store:** Add endpoints specific to DiscountConditions (#1355) (9ca45ea)
- **Band Store:** Add writable type (1499bc5)
- **Band Store:** Export BaseEntity/SoftDeletableEntity from the core (#1594) (d0c679f)
- **Band Store:** Export transaction related methods to the transactionBaseService (99146b7)
- **Band Store:** Improve base-service (bfb81b8)
- **Band Store:** Improve buildQuery as well as refactor the cart service as an example (b90291b)
- **Band Store:** List batch jobs + Introduce composable handler pattern (#1541) (4489b75)
- **Band Store:** Move some typings into the common types (3ad9174)
- **Band Store:** Rename base-service.spec to transaction-base-service.spec (f7ef3aa)
- **Band Store:** Split base service to its related TransactionBaseService and utilities methods when required (e7e715a)
- **Band Store:** Support deleting prices from a price list by product or variant (#1555) (fa031fd)
- **Band Store:** Update TransactionBaseService methods visibility (ff9ff21)

# 1.3.0 (2022-05-01)

### Bug Fixes

- Invoke canCalculate with an entire shipping option (#1397) (40b63d0)
- Update `is_giftcard` type when filtering products (#1427) (f7386bf)
- **Band Store:** Lint and missing transaction usage (#1297) (ab2d81f)
- **Band Store:** Remove unsupported Discount endpoints (#1367) (9acee27)
- **Band Store:** Remove updatePaymentMethod store cart route (#1382) (89a6de4)
- add tax service registration (#1225) (491b6eb)
- adds date filters on store collection + region list api (#1216) (3cd4108)
- allow offset and limit in products free text search (#1082) (c2241d1)
- ensures no duplicate tax lines when completing cart (#1262) (607a382)
- exists flag on /store/auth/:email endpoint (#1122) (e844f4a)
- export params type (4ee2af2)
- export request types from add and remove product endpoints (#1078) (449e666)
- list customers query error (#1226) (932f4b2)
- merge conflicts (562a1b4)
- Remove `region_id` from countries on region deletes (#1330) (edc6d9d)
- storefront product filtering (#1189) (e3655b5)
- unit test case for `CustomerGroupServiceMock.retrieve` (def8763)
- variant price update (#1093) (cb7b211)

### Features

- line item adjustment migration script (#1255) (b8f1ae9)
- **Band Store:** Improve config loading (#1290) (313cb06)
- **Band Store:** Improve exported Band Store API (#1335) (6830a12)
- add `extend` param for customer groups (ecd6ed8)
- add and remove products to/from collection in bulk endpoints (#1032) (6629403)
- Add BatchJob entity (#1324) (8c420f4)
- Add DiscountConditions (#1230) (a610805), closes #1146 #1149 #1156 #1170 #1172 #1212 #1224 #1228
- customer group update (#1098) (694e2df)
- customer groups client endpoints (#1147) (93426bf)
- GET customer group endpoint (21d99a4)
- Implement PriceList and extend MoneyAmount (#1152) (5300926)
- line item adjustments (#1319) (1cfeb5d), closes #1241 #1279 #1242 #1243
- list customer groups (#1099) (a514d84)
- new tax api (#979) (c56660f), closes #885 #896 #911 #945 #950 #951 #954 #969 #998 #1017 #1110
- price list products (#1239) (fb33dba)
- update customer groups (#1075) (75fb2ce)

## 1.2.1 (2022-02-28)

### Bug Fixes

- Add tax repo to withTransaction in region service (#1126) (549ad3b)
- allow offset and limit in products free text search (#1082) (a81def2)
- export params type (9d6489d)
- export request types from add and remove product endpoints (#1078) (1f2ee04)
- unit test case for `CustomerGroupServiceMock.retrieve` (aa8bbfd)
- variant price update (#1093) (59d5d8a)

### Features

- add `extend` param for customer groups (bf3e04f)
- add and remove products to/from collection in bulk endpoints (#1032) (1e4cc2f)
- customer group update (#1098) (d80eaa1)
- GET customer group endpoint (de06b47)
- new tax api (#979) (47588e7), closes #885 #896 #911 #945 #950 #951 #954 #969 #998 #1017 #1110
- update customer groups (#1075) (73359a6)

# 1.2.0 (2022-02-25)

### Bug Fixes

- allow offset and limit in products free text search (#1082) (c2241d1)
- export params type (4ee2af2)
- export request types from add and remove product endpoints (#1078) (449e666)
- unit test case for `CustomerGroupServiceMock.retrieve` (def8763)
- variant price update (#1093) (cb7b211)

### Features

- add `extend` param for customer groups (ecd6ed8)
- add and remove products to/from collection in bulk endpoints (#1032) (6629403)
- customer group update (#1098) (694e2df)
- GET customer group endpoint (21d99a4)
- new tax api (#979) (c56660f), closes #885 #896 #911 #945 #950 #951 #954 #969 #998 #1017 #1110
- update customer groups (#1075) (75fb2ce)

## 1.1.64 (2022-02-06)

### Bug Fixes

- release (fc3fbc8)

## 1.1.63 (2022-02-06)

### Bug Fixes

- adds order by functionality to products (#1021) (3bf32e5)
- adds return reasons to swaps (#1026) (7d2b5b8)
- admin collections default relations (#1023) (d2a7534)
- Support array of payment status filters when listing orders (#1013) (fdc493d)
- Updating store currencies (#984) (59bb413)

### Features

- band-store-react admin hooks (#978) (2e38484), closes #1019

## 1.1.62 (2022-01-11)

### Bug Fixes

- Adds default currency to store currencies on create (#982) (a0a21d1)
- api claim types + tests (#967) (d365839)
- Type in AdminProductListTagsRes to use tags instead of types (#958) (0ac52b7)

### Features

- expand store product filtering (#973) (f61eaee)

## 1.1.61 (2021-12-29)

**Note:** Version bump only for package @band-store/band-store

## 1.1.60 (2021-12-17)

### Features

- Add Discount Admin endpoint to JS client (#919) (2ca1a87)
- add band-store-react (#913) (d0d8dd7)
- add returns admin endpoints to band-store-js (#935) (b9d6f95)
- add store admin endpoints to band-store-js (#938) (31fad74)
- Adds Auth Admin API to `band-store-js` (#917) (5c47184)
- Adds Customer Admin routes to JS client (#918) (25fe224)
- Band Store js admin regions (#939) (8532c96)
- Band Store js admin shipping options (#934) (8b1b551)
- band-store-js admin return reasons (#931) (0acc462)

## 1.1.59 (2021-12-08)

### Bug Fixes

- complete cart return type (#902) (2e837fc)

## 1.1.58 (2021-12-08)

### Bug Fixes

- create cart with items (#851) (74bc9c6)
- ensures that delayed restock notifications are being sent (#881) (329767e)
- band-store-js complete cart types + oas comments (#889) (487356a)
- **Band Store:** migrate cart service to typescript (#884) (ed04132)
- **Band Store:** order tax_rate type (#879) (89472b7)
- refresh payment session oas comment (#888) (efadffe)
- return reasons type (#893) (e8b6d21)
- widen range of discount limit conditions (#895) (7d6fc5c)

### Features

- Admin shipping options routes to Typescript (#891) (6579c13)
- band-store-source-shopify loader (#563) (577bcc2)

## 1.1.57 (2021-11-23)

### Bug Fixes

- bumps class-transformer to 0.5.1 (#837) (38b0e29)

## 1.1.56 (2021-11-22)

### Bug Fixes

- Addresses breaking change from library `class-transformer` (#835) (f387b49)

## 1.1.55 (2021-11-19)

### Bug Fixes

- /api/routes/store/auth pass linting (#645) (40ad748)
- /api/routes/store/customers pass linting (#646) (7cc94dc)
- add product count to storefront (#719) (45b344f)
- adds options to default relations in storefront product endpoints (#712) (e82737a)
- api/routes/store/products pass linting (#644) (2966242)
- delete region causes cascade error (#672) (0a65eca)
- lint in packages/band-store/src/services/swap.js pass linting (#587) (3156a0d)
- make /api/routes/admin/gift-cards,routes/store/gift-cards,/routes/store/orders pass linting (#643) (60e9432)
- make /swaps pass eslint (#665) (623d5f2)
- make api/routes/admin/apps pass eslint (#641) (c9234c2)
- make api/routes/store/swaps pass eslint (#678) (d9ee127)
- make discounts pass eslint (3df2b42)
- make it possible to update order shipping address (#668) (e0fa06f)
- make packages/band-store/src/api/routes/admin/auth and 3 others pass eslint (#666) (95f80f8)
- make packages/band-store/src/api/routes/admin/notes pass eslint (#690) (f011662)
- make packages/band-store/src/api/routes/admin/orders pass eslint (#649) (dc88210)
- make packages/band-store/src/api/routes/admin/return-reasons pass eslint (#654) (a8fc89a)
- make packages/band-store/src/api/routes/admin/returns pass eslint (#653) (2f7deea)
- make packages/band-store/src/api/routes/admin/shipping-options pass eslint (#674) (bd86d3c)
- make packages/band-store/src/api/routes/admin/shipping-profiles pass eslint (#642) (ce4d361)
- make packages/band-store/src/api/routes/admin/store pass eslint (#686) (7a230ec)
- make packages/band-store/src/api/routes/admin/upload pass eslint (#627) (5fbce42)
- make packages/band-store/src/api/routes/admin/users pass eslint (a6a612c)
- make packages/band-store/src/api/routes/store/carts pass eslint (#652) (1ba63cc)
- make packages/band-store/src/api/routes/store/shipping-options pass linting (#648) (5cb1b56)
- make packages/band-store/src/services/cart.js pass eslint (#700) (0caba0d)
- Make packages/band-store/src/services/claim-item.js pass linting (#626) (0d30369)
- Make packages/band-store/src/services/oauth.js pass linting (#604) (14608b0)
- make packages/band-store/src/services/payment-provider.js pass eslint (#549) (caf4357), closes #692
- Make packages/band-store/src/services/product-variant.js pass linting (#693) (a351398)
- make packages/band-store/src/services/shipping-profile.js pass eslint (#582) (2c415ea)
- make packages/band-store/src/services/totals.js pass eslint (23e83af)
- make variants pass eslint (a1e446c)
- make variants pass eslint (#647) (f4307c7)
- **Band Store:** add total count for list queries in product (#710) (109d400)
- Prepare routes for linting (#603) (3e68069)
- release (5fa4848)
- updates documentation and fixes script blockers (#765) (3ea6aea)

### Features

- admin api - allow customers to be created and updated with metadata (#824) (2d9879e)
- Algolia plugin for Band Store (#718) (8ce9b20)
- Allow retrieval of soft-deleted products (#723) (1e50aee)
- **Band Store:** adds collection endpoints to storefront (#711) (5812756)
- Typescript for API layer (#817) (373532e)

## 1.1.54 (2021-11-19)

### Bug Fixes

- /api/routes/store/auth pass linting (#645) (40ad748)
- /api/routes/store/customers pass linting (#646) (7cc94dc)
- add product count to storefront (#719) (45b344f)
- adds options to default relations in storefront product endpoints (#712) (e82737a)
- api/routes/store/products pass linting (#644) (2966242)
- delete region causes cascade error (#672) (0a65eca)
- lint in packages/band-store/src/services/swap.js pass linting (#587) (3156a0d)
- make /api/routes/admin/gift-cards,routes/store/gift-cards,/routes/store/orders pass linting (#643) (60e9432)
- make /swaps pass eslint (#665) (623d5f2)
- make api/routes/admin/apps pass eslint (#641) (c9234c2)
- make api/routes/store/swaps pass eslint (#678) (d9ee127)
- make discounts pass eslint (3df2b42)
- make it possible to update order shipping address (#668) (e0fa06f)
- make packages/band-store/src/api/routes/admin/auth and 3 others pass eslint (#666) (95f80f8)
- make packages/band-store/src/api/routes/admin/notes pass eslint (#690) (f011662)
- make packages/band-store/src/api/routes/admin/orders pass eslint (#649) (dc88210)
- make packages/band-store/src/api/routes/admin/return-reasons pass eslint (#654) (a8fc89a)
- make packages/band-store/src/api/routes/admin/returns pass eslint (#653) (2f7deea)
- make packages/band-store/src/api/routes/admin/shipping-options pass eslint (#674) (bd86d3c)
- make packages/band-store/src/api/routes/admin/shipping-profiles pass eslint (#642) (ce4d361)
- make packages/band-store/src/api/routes/admin/store pass eslint (#686) (7a230ec)
- make packages/band-store/src/api/routes/admin/upload pass eslint (#627) (5fbce42)
- make packages/band-store/src/api/routes/admin/users pass eslint (a6a612c)
- make packages/band-store/src/api/routes/store/carts pass eslint (#652) (1ba63cc)
- make packages/band-store/src/api/routes/store/shipping-options pass linting (#648) (5cb1b56)
- make packages/band-store/src/services/cart.js pass eslint (#700) (0caba0d)
- Make packages/band-store/src/services/claim-item.js pass linting (#626) (0d30369)
- Make packages/band-store/src/services/oauth.js pass linting (#604) (14608b0)
- make packages/band-store/src/services/payment-provider.js pass eslint (#549) (caf4357), closes #692
- Make packages/band-store/src/services/product-variant.js pass linting (#693) (a351398)
- make packages/band-store/src/services/shipping-profile.js pass eslint (#582) (2c415ea)
- make packages/band-store/src/services/totals.js pass eslint (23e83af)
- make variants pass eslint (a1e446c)
- make variants pass eslint (#647) (f4307c7)
- **Band Store:** add total count for list queries in product (#710) (109d400)
- Prepare routes for linting (#603) (3e68069)
- updates documentation and fixes script blockers (#765) (3ea6aea)

### Features

- admin api - allow customers to be created and updated with metadata (#824) (2d9879e)
- Algolia plugin for Band Store (#718) (8ce9b20)
- Allow retrieval of soft-deleted products (#723) (1e50aee)
- **Band Store:** adds collection endpoints to storefront (#711) (5812756)
- Typescript for API layer (#817) (373532e)

## 1.1.53 (2021-11-19)

### Bug Fixes

- /api/routes/store/auth pass linting (#645) (40ad748)
- /api/routes/store/customers pass linting (#646) (7cc94dc)
- add product count to storefront (#719) (45b344f)
- adds options to default relations in storefront product endpoints (#712) (e82737a)
- api/routes/store/products pass linting (#644) (2966242)
- delete region causes cascade error (#672) (0a65eca)
- lint in packages/band-store/src/services/swap.js pass linting (#587) (3156a0d)
- make /api/routes/admin/gift-cards,routes/store/gift-cards,/routes/store/orders pass linting (#643) (60e9432)
- make /swaps pass eslint (#665) (623d5f2)
- make api/routes/admin/apps pass eslint (#641) (c9234c2)
- make api/routes/store/swaps pass eslint (#678) (d9ee127)
- make discounts pass eslint (3df2b42)
- make it possible to update order shipping address (#668) (e0fa06f)
- make packages/band-store/src/api/routes/admin/auth and 3 others pass eslint (#666) (95f80f8)
- make packages/band-store/src/api/routes/admin/notes pass eslint (#690) (f011662)
- make packages/band-store/src/api/routes/admin/orders pass eslint (#649) (dc88210)
- make packages/band-store/src/api/routes/admin/return-reasons pass eslint (#654) (a8fc89a)
- make packages/band-store/src/api/routes/admin/returns pass eslint (#653) (2f7deea)
- make packages/band-store/src/api/routes/admin/shipping-options pass eslint (#674) (bd86d3c)
- make packages/band-store/src/api/routes/admin/shipping-profiles pass eslint (#642) (ce4d361)
- make packages/band-store/src/api/routes/admin/store pass eslint (#686) (7a230ec)
- make packages/band-store/src/api/routes/admin/upload pass eslint (#627) (5fbce42)
- make packages/band-store/src/api/routes/admin/users pass eslint (a6a612c)
- make packages/band-store/src/api/routes/store/carts pass eslint (#652) (1ba63cc)
- make packages/band-store/src/api/routes/store/shipping-options pass linting (#648) (5cb1b56)
- make packages/band-store/src/services/cart.js pass eslint (#700) (0caba0d)
- Make packages/band-store/src/services/claim-item.js pass linting (#626) (0d30369)
- Make packages/band-store/src/services/oauth.js pass linting (#604) (14608b0)
- make packages/band-store/src/services/payment-provider.js pass eslint (#549) (caf4357), closes #692
- Make packages/band-store/src/services/product-variant.js pass linting (#693) (a351398)
- make packages/band-store/src/services/shipping-profile.js pass eslint (#582) (2c415ea)
- make packages/band-store/src/services/totals.js pass eslint (23e83af)
- make variants pass eslint (a1e446c)
- make variants pass eslint (#647) (f4307c7)
- **Band Store:** add total count for list queries in product (#710) (109d400)
- Prepare routes for linting (#603) (3e68069)
- updates documentation and fixes script blockers (#765) (3ea6aea)

### Features

- admin api - allow customers to be created and updated with metadata (#824) (2d9879e)
- Algolia plugin for Band Store (#718) (8ce9b20)
- Allow retrieval of soft-deleted products (#723) (1e50aee)
- **Band Store:** adds collection endpoints to storefront (#711) (5812756)
- Typescript for API layer (#817) (373532e)

## 1.1.52 (2021-11-09)

**Note:** Version bump only for package @band-store/band-store

## 1.1.51 (2021-11-03)

### Bug Fixes

- include discount rule in swap retrieval (#682) (a5fe1c2)

## 1.1.50 (2021-11-02)

**Note:** Version bump only for package @band-store/band-store

## 1.1.49 (2021-10-26)

### Bug Fixes

- allow empty string to search product route (52c47ab)

## 1.1.48 (2021-10-25)

### Bug Fixes

- make contentful data sync (548f6c7)

## 1.1.47 (2021-10-23)

### Bug Fixes

- pull missing fields (b82b43b)

## 1.1.46 (2021-10-19)

### Bug Fixes

- add integration test (38813ec)
- allow changing regions safely (06f5fe2)
- cleanup (5441d47)
- prettier (5a67d1e)

## 1.1.45 (2021-10-18)

**Note:** Version bump only for package @band-store/band-store

## 1.1.44 (2021-10-18)

### Bug Fixes

- undefined references (5afd0df)

## 1.1.43 (2021-10-18)

### Bug Fixes

- add possiblity to unset billing address (dc7ecc9)
- adjustments based on feedback (52be911)
- adjustments based on seb's feedback (dba1d5b)
- allow custom shipping options to bypass option requirements (75e59ec)
- autofix (d9608e1)
- Creating shipping options with requirements (#428) (ae0ab03)
- customer endpoints shouldn't use customer id already provided through authentication (#402) (bf43896)
- example (43a2b07)
- failing integration tests (9c72acd)
- ILIKE operator not supported in sqlite (#393) (49a1329)
- include shipping profile and requirement relations when fetching custom shipping options (569595d)
- jsdoc (02ce006)
- jsdoc custom shipping option service (f7c7659)
- make /packages/band-store/src/services/gift-card.js pass eslint (#533) (06ee5df)
- make /packages/band-store/src/services/line-item.js pass eslint (#555) (f2d97df)
- make band-store/src/services/fulfillment.js pass eslint (#557) (fe599c7)
- make packages/band-store/src/services/claim.js pass eslint (#551) (ddeaf57)
- make packages/band-store/src/services/discount.js pass eslint (#553) (1e13c83)
- make packages/band-store/src/services/draft-order.js pass eslint (#554) (1791acb)
- make packages/band-store/src/services/idempotency-key.js pass linting (#568) (5b3c0c4)
- make packages/band-store/src/services/note.js pass eslint (#565) (275a0f1)
- make packages/band-store/src/services/notification.js pass eslint (#566) (38559b5)
- make packages/band-store/src/services/region.js pass eslint (#542) (f926e02)
- Make packages/band-store/src/services/transaction.js pass linting (#534) (10f1d9d)
- make return-reason.js pass eslint (#539) (b6efa6f)
- make system-payment-provider.js pass eslint (#574) (8e59ec8)
- **Band Store:** hide password hash (#429) (cd4afd1)
- meiliesearch README.md + remove: searchService from silentResolver (1444353)
- merge conflicts (153366c)
- merge conflicts (632ad17)
- merge develop (2297a84)
- more adjustments (3d088c3)
- move subscriber to core (700f8c3)
- options relations on GET variant (#532) (fc50aac)
- product ordering (57a6612)
- remove custom shipping options from swapService create method call (71d433c)
- remove verbose mode in integration test + fix jsdoc (36aeb4f)
- shipping option updates (#426) (22f3f2a)
- tests (db83448)
- Throw on cart creation when no region exist (#455) (17b192f)
- update event (6d21d0d)
- update product images (#494) (c0e947f)
- update seeder to product published (#423) (d8e5318)
- use type to choose transformer before adding or replacing documents (24eecd2)

### Features

- add product status (#400) (a82332d)
- Allow backorder on swaps (#404) (00ab03f)
- allow product selection on discounts allocated to a specific item (#395) (84d4d79)
- customer-information (#413) (a70e3ed)
- Product filtering (#439) (5ef2a3f)
- rma shipping option + unit tests (77ee0bf)

### Reverts

- Revert "fixed linting errors on packages/band-store/src/services/user.js #531 (#543)" (#547) (ba2d923), closes #531 #543 #547

## 1.1.42 (2021-10-18)

### Bug Fixes

- add possiblity to unset billing address (dc7ecc9)
- adjustments based on feedback (52be911)
- adjustments based on seb's feedback (dba1d5b)
- allow custom shipping options to bypass option requirements (75e59ec)
- autofix (d9608e1)
- Creating shipping options with requirements (#428) (ae0ab03)
- customer endpoints shouldn't use customer id already provided through authentication (#402) (bf43896)
- example (43a2b07)
- failing integration tests (9c72acd)
- ILIKE operator not supported in sqlite (#393) (49a1329)
- include shipping profile and requirement relations when fetching custom shipping options (569595d)
- jsdoc (02ce006)
- jsdoc custom shipping option service (f7c7659)
- make /packages/band-store/src/services/gift-card.js pass eslint (#533) (06ee5df)
- make /packages/band-store/src/services/line-item.js pass eslint (#555) (f2d97df)
- make band-store/src/services/fulfillment.js pass eslint (#557) (fe599c7)
- make packages/band-store/src/services/claim.js pass eslint (#551) (ddeaf57)
- make packages/band-store/src/services/discount.js pass eslint (#553) (1e13c83)
- make packages/band-store/src/services/draft-order.js pass eslint (#554) (1791acb)
- make packages/band-store/src/services/idempotency-key.js pass linting (#568) (5b3c0c4)
- make packages/band-store/src/services/note.js pass eslint (#565) (275a0f1)
- make packages/band-store/src/services/notification.js pass eslint (#566) (38559b5)
- make packages/band-store/src/services/region.js pass eslint (#542) (f926e02)
- Make packages/band-store/src/services/transaction.js pass linting (#534) (10f1d9d)
- make return-reason.js pass eslint (#539) (b6efa6f)
- make system-payment-provider.js pass eslint (#574) (8e59ec8)
- **Band Store:** hide password hash (#429) (cd4afd1)
- meiliesearch README.md + remove: searchService from silentResolver (1444353)
- merge conflicts (153366c)
- merge conflicts (632ad17)
- merge develop (2297a84)
- more adjustments (3d088c3)
- move subscriber to core (700f8c3)
- options relations on GET variant (#532) (fc50aac)
- product ordering (57a6612)
- remove custom shipping options from swapService create method call (71d433c)
- remove verbose mode in integration test + fix jsdoc (36aeb4f)
- shipping option updates (#426) (22f3f2a)
- tests (db83448)
- Throw on cart creation when no region exist (#455) (17b192f)
- update event (6d21d0d)
- update product images (#494) (c0e947f)
- update seeder to product published (#423) (d8e5318)
- use type to choose transformer before adding or replacing documents (24eecd2)

### Features

- add product status (#400) (a82332d)
- Allow backorder on swaps (#404) (00ab03f)
- allow product selection on discounts allocated to a specific item (#395) (84d4d79)
- customer-information (#413) (a70e3ed)
- Product filtering (#439) (5ef2a3f)
- rma shipping option + unit tests (77ee0bf)

### Reverts

- Revert "fixed linting errors on packages/band-store/src/services/user.js #531 (#543)" (#547) (ba2d923), closes #531 #543 #547

## 1.1.41 (2021-09-15)

### Bug Fixes

- 404 product (8c8c589)
- add default relations to variants to include prices (#394) (d477ca9)
- Ensure uniqueness for products, variants, collections and discounts (#382) (2715095)
- make shipping_option_id on requirements optional (#340) (16b0fa3)

### Features

- update and cancel swaps, claims, and returns (#310) (cf66f97)

## 1.1.40 (2021-09-15)

### Bug Fixes

- 404 product (8c8c589)
- add default relations to variants to include prices (#394) (d477ca9)
- Ensure uniqueness for products, variants, collections and discounts (#382) (2715095)
- make shipping_option_id on requirements optional (#340) (16b0fa3)

### Features

- update and cancel swaps, claims, and returns (#310) (cf66f97)

## 1.1.39 (2021-09-14)

### Bug Fixes

- 404 product (8c8c589)
- add default relations to variants to include prices (#394) (d477ca9)
- Ensure uniqueness for products, variants, collections and discounts (#382) (2715095)
- make shipping_option_id on requirements optional (#340) (16b0fa3)

### Features

- update and cancel swaps, claims, and returns (#310) (cf66f97)

## 1.1.40 (2021-09-02)

### Bug Fixes

- Account for non-discountable items in getRefundTotal (#347) (fd14e24)

### Features

- creates support for swaps on the storefront (#355) (ae82cfc)

## 1.1.39 (2021-08-31)

### Bug Fixes

- Account for non-discountable items in getRefundTotal (#347) (fd14e24)

### Features

- creates support for swaps on the storefront (#355) (ae82cfc)

## 1.1.38 (2021-08-17)

### Bug Fixes

- add cross-spawn (#341) (8f60f43)

## 1.1.37 (2021-08-17)

### Bug Fixes

- build openapi (#338) (9467f7e)

## 1.1.36 (2021-08-11)

### Bug Fixes

- improves integration tests (#332) (9a701ff)

## 1.1.35 (2021-08-09)

**Note:** Version bump only for package @band-store/band-store

## 1.1.34 (2021-08-05)

### Bug Fixes

- canary assist (b988b67)
- product and variant api route validation (#331) (b101725)
- return lines allow_discounts (1295ceb)

### Features

- Add discountable flag to product (#329) (6053c4a)
- add route for retrieving a swap (#326) (821d8be)
- In band inventory updates (#311) (f07cc0f)
- band-store-telemetry (#328) (cfe19f7)

## 1.1.33 (2021-07-26)

### Bug Fixes

- enforce 1 shipping method per profile (#322) (b378a4f)
- parameterize integration tests' db credentials (#319) (06fd882)

### Features

- CLI + local linking (#313) (f4a7138), closes #320

## 1.1.32 (2021-07-16)

**Note:** Version bump only for package @band-store/band-store

## 1.1.31 (2021-07-15)

**Note:** Version bump only for package @band-store/band-store

## 1.1.30 (2021-07-15)

### Bug Fixes

- adds tracking links to customer orders (c013270)
- allow updating billing address on customer (5a1cbc6)
- better store/customer support (6342e68)
- create fulfillment (0603a86)
- **Band Store:** Resolve issue with soft-delete and unique indexes in DB (#296) (6358f8f)

## 1.1.29 (2021-07-02)

**Note:** Version bump only for package @band-store/band-store

## 1.1.28 (2021-06-24)

**Note:** Version bump only for package @band-store/band-store

## 1.1.27 (2021-06-22)

### Bug Fixes

- adds transformer to map field names to field_id names (88d96a2)
- giftcard-order relation (c88c407)
- lint (5829550)
- mobile pay support (91511cb)
- region sync (8e29e6e)
- release assist (668e8a7)

## 1.1.26 (2021-06-10)

### Bug Fixes

- avoid error message (0a62590)

## 1.1.25 (2021-06-09)

**Note:** Version bump only for package @band-store/band-store

## 1.1.24 (2021-06-09)

### Bug Fixes

- babel (813a1c9)
- bearer user id login development (df50186)
- common registration name formatter (f4f67a3)
- migration dirs (57a2de6)
- migration dirs (e764d8e)
- order order (245ccdc)
- PR (e20ba1e)
- setup to allow login to Band Store Cloud (bbd2f02)
- test name registration (e59dc3b)
- wip (42d9a48)
- **Band Store:** Add free shipping functionality (#241) (fb0613d)

### Features

- **cli:** adds seed script (5136c77)
- allow custom address on claims (586f4d8)
- **Band Store:** Swaps on swaps (#229) (f8f1f57)

## 1.1.23 (2021-06-09)

### Bug Fixes

- babel (813a1c9)
- bearer user id login development (df50186)
- common registration name formatter (f4f67a3)
- migration dirs (57a2de6)
- migration dirs (e764d8e)
- order order (245ccdc)
- PR (e20ba1e)
- setup to allow login to Band Store Cloud (bbd2f02)
- test name registration (e59dc3b)
- wip (42d9a48)
- **Band Store:** Add free shipping functionality (#241) (fb0613d)

### Features

- **cli:** adds seed script (5136c77)
- allow custom address on claims (586f4d8)
- **Band Store:** Swaps on swaps (#229) (f8f1f57)

## 1.1.22 (2021-06-09)

### Bug Fixes

- babel (813a1c9)
- bearer user id login development (df50186)
- common registration name formatter (f4f67a3)
- migration dirs (57a2de6)
- migration dirs (e764d8e)
- order order (245ccdc)
- PR (e20ba1e)
- setup to allow login to Band Store Cloud (bbd2f02)
- test name registration (e59dc3b)
- wip (42d9a48)
- **Band Store:** Add free shipping functionality (#241) (fb0613d)

### Features

- **cli:** adds seed script (5136c77)
- allow custom address on claims (586f4d8)
- **Band Store:** Swaps on swaps (#229) (f8f1f57)

## 1.1.20 (2021-06-08)

### Bug Fixes

- babel (813a1c9)
- bearer user id login development (df50186)
- common registration name formatter (f4f67a3)
- migration dirs (57a2de6)
- migration dirs (e764d8e)
- PR (e20ba1e)
- setup to allow login to Band Store Cloud (bbd2f02)
- test name registration (e59dc3b)
- wip (42d9a48)
- **Band Store:** Add free shipping functionality (#241) (fb0613d)

### Features

- **cli:** adds seed script (5136c77)
- allow custom address on claims (586f4d8)
- **Band Store:** Swaps on swaps (#229) (f8f1f57)

## 1.1.23 (2021-04-29)

**Note:** Version bump only for package @band-store/band-store

## 1.1.22 (2021-04-28)

**Note:** Version bump only for package @band-store/band-store

## 1.1.21 (2021-04-20)

**Note:** Version bump only for package @band-store/band-store

## 1.1.20 (2021-04-20)

### Features

- **Band Store:** Swaps on swaps (#229) (f8f1f57)

## 1.1.19 (2021-04-13)

### Bug Fixes

- adds tests (69442a1)
- creates restock functionality (2b25550)
- deps (a9ea38c)
- merge develop (a468c45)
- working api (9d81097)
- **Band Store:** Move discount usage from rule to discount (d9cd52a)

### Features

- restock service (8bd5fa8)

## 1.1.18 (2021-04-09)

### Bug Fixes

- adds tests (69442a1)
- creates restock functionality (2b25550)
- deps (a9ea38c)
- working api (9d81097)
- **Band Store:** Move discount usage from rule to discount (d9cd52a)

### Features

- restock service (8bd5fa8)

## 1.1.17 (2021-03-30)

### Bug Fixes

- publish assist (7719957)

## 1.1.16 (2021-03-30)

### Bug Fixes

- publish assist (7719957)

## 1.1.15 (2021-03-30)

### Bug Fixes

- publish assist (7719957)

## 1.1.16 (2021-03-26)

**Note:** Version bump only for package @band-store/band-store

## 1.1.15 (2021-03-18)

**Note:** Version bump only for package @band-store/band-store

## 1.1.14 (2021-03-17)

### Bug Fixes

- expose statusses on order (a26b12a)
- **Band Store:** Add usage_count + usage_limit to discount (c513813)

## 1.1.13 (2021-03-17)

### Bug Fixes

- add region to gift-cards (ffac0d3)
- adds integration test to create endpoint (521d306)
- allows shipping option filters in return (#202) (7c7f86e)
- contentful sync (#206) (227cdb6)
- enable gift-card creation without order_id (9ce935a)
- enable gift-card creation without order_id (#195) (1263d24)
- merge (49f1d0f)
- merge (31d5bb0)
- **Band Store:** expose items.refundable (3fbf38f)
- merge api (6ad2b0e)
- **Band Store:** Upsert product images (#200) (a031f1f)
- round totals (a1ba2e8)
- test (caf1ecf)

### Features

- **Band Store:** Add support for filtering with gt, lt, gte and lte (#190) (dd0491f)
- **Band Store:** cart context (#201) (dd7b306)
- **Band Store:** storefront return (#194) (252db5e)

## 1.1.12 (2021-03-17)

### Bug Fixes

- add region to gift-cards (ffac0d3)
- adds integration test to create endpoint (521d306)
- allows shipping option filters in return (#202) (7c7f86e)
- contentful sync (#206) (227cdb6)
- enable gift-card creation without order_id (9ce935a)
- enable gift-card creation without order_id (#195) (1263d24)
- merge (49f1d0f)
- merge (31d5bb0)
- **Band Store:** expose items.refundable (3fbf38f)
- merge api (6ad2b0e)
- **Band Store:** Upsert product images (#200) (a031f1f)
- round totals (a1ba2e8)
- test (caf1ecf)

### Features

- **Band Store:** Add support for filtering with gt, lt, gte and lte (#190) (dd0491f)
- **Band Store:** cart context (#201) (dd7b306)
- **Band Store:** storefront return (#194) (252db5e)

## 1.1.11 (2021-02-25)

### Bug Fixes

- **Band Store:** Add querying func. on customer retrievals (#181) (22be418)

## 1.1.10 (2021-02-25)

**Note:** Version bump only for package @band-store/band-store

## 1.1.10-next.1 (2021-02-25)

### Bug Fixes

- update-product (0320788)

## 1.1.10-next.0 (2021-02-22)

### Features

- **Band Store:** tracking links (#177) (99ad43b)

## 1.1.9 (2021-02-18)

### Bug Fixes

- performant relations (5659d10)

## 1.1.8 (2021-02-17)

### Bug Fixes

- test (4229e24)
- use parallel relation fetching (#173) (46006e4)

### Features

- notifications (#172) (7308946)
- **Band Store:** Product category, type and tags (c4d1203)

## 1.1.7 (2021-02-08)

### Features

- adds paypal (#168) (#169) (427ae25)

## 1.1.6 (2021-02-03)

**Note:** Version bump only for package @band-store/band-store

## 1.1.5 (2021-02-03)

### Features

- **Band Store,brightpearl,segment,webshipper:** claims (#163) (690d339)

## 1.1.4 (2021-01-29)

**Note:** Version bump only for package @band-store/band-store

## 1.1.3 (2021-01-27)

### Bug Fixes

- tax_rate extraction in totals service (#156) (178d12f)

## 1.1.2 (2021-01-27)

### Features

- adds discount code search functionality (#155) (7e14da1)

## 1.1.1 (2021-01-26)

### Bug Fixes

- customer not found (#152) (282eaae)

# 1.1.0 (2021-01-26)

**Note:** Version bump only for package @band-store/band-store

## 1.0.56 (2021-01-06)

**Note:** Version bump only for package @band-store/band-store

## 1.0.55 (2021-01-06)

**Note:** Version bump only for package @band-store/band-store

## 1.0.54 (2020-12-28)

### Features

- **Band Store:** Adds filtering to order listing for use in admin (#149) (09d7ed2)

## 1.0.53 (2020-12-17)

### Features

- **Band Store:** Adds product variant sale price (#148) (451451a)

## 1.0.52 (2020-12-09)

### Bug Fixes

- .gitignore (ed4d2b4)

## 1.0.51 (2020-12-09)

**Note:** Version bump only for package @band-store/band-store

## 1.0.50 (2020-12-08)

**Note:** Version bump only for package @band-store/band-store

## 1.0.49 (2020-12-04)

**Note:** Version bump only for package @band-store/band-store

## 1.0.48 (2020-12-02)

### Bug Fixes

- allow swaps with total < 0 (#143) (304431e)

## 1.0.47 (2020-11-29)

### Bug Fixes

- swaps with discounts (#142) (aae8d5e)

## 1.0.46 (2020-11-28)

**Note:** Version bump only for package @band-store/band-store

## 1.0.45 (2020-11-26)

**Note:** Version bump only for package @band-store/band-store

## 1.0.44 (2020-11-24)

**Note:** Version bump only for package @band-store/band-store

## 1.0.43 (2020-11-24)

**Note:** Version bump only for package @band-store/band-store

## 1.0.42 (2020-11-13)

**Note:** Version bump only for package @band-store/band-store

## 1.0.41 (2020-11-13)

**Note:** Version bump only for package @band-store/band-store

## 1.0.40 (2020-11-13)

### Features

- **Band Store:** Adds shipped status to line items + Capture fails will give payment_status = requires_action (6a3c545)

## 1.0.39 (2020-11-05)

**Note:** Version bump only for package @band-store/band-store

## 1.0.38 (2020-11-05)

**Note:** Version bump only for package @band-store/band-store

## 1.0.37 (2020-11-04)

**Note:** Version bump only for package @band-store/band-store

## 1.0.36 (2020-11-04)

### Features

- **Band Store:** Adds set and delete metadata endpoints for region and orders (#131) (d67b6e6)

## 1.0.35 (2020-11-02)

### Bug Fixes

- add country code on preCartCreation (e3faa64)

## 1.0.34 (2020-10-31)

### Bug Fixes

- adds field selection to list order endpoint (#133) (b1786ce)

## 1.0.33 (2020-10-28)

### Features

- **Band Store:** adds support for gift cards (#132) (f2c62cd)

## 1.0.32 (2020-10-20)

**Note:** Version bump only for package @band-store/band-store

## 1.0.31 (2020-10-20)

### Features

- **band-store-interfaces:** Adds schema options to base model (cc23a3b)

## 1.0.30 (2020-10-20)

**Note:** Version bump only for package @band-store/band-store

## 1.0.29 (2020-10-20)

**Note:** Version bump only for package @band-store/band-store

## 1.0.28 (2020-10-19)

**Note:** Version bump only for package @band-store/band-store

## 1.0.27 (2020-10-17)

**Note:** Version bump only for package @band-store/band-store

## 1.0.26 (2020-10-14)

### Features

- return shipping and flow (#125) (c1e821d)

## 1.0.25 (2020-10-08)

**Note:** Version bump only for package @band-store/band-store

## 1.0.24 (2020-10-08)

**Note:** Version bump only for package @band-store/band-store

## 1.0.23 (2020-10-06)

**Note:** Version bump only for package @band-store/band-store

## 1.0.22 (2020-10-06)

**Note:** Version bump only for package @band-store/band-store

## 1.0.21 (2020-10-05)

### Bug Fixes

- **band-store-plugin-brightpearl:** reliable oauth (#119) (0889059)

## 1.0.20 (2020-10-05)

### Bug Fixes

- **band-store-plugin-addon:** Fixes admin endpoints, Adds flag to avoid merging add-on line-items (d8483cd)

### Features

- webshipper (#118) (893a7f6)

## 1.0.19 (2020-09-21)

**Note:** Version bump only for package @band-store/band-store

## 1.0.18 (2020-09-21)

**Note:** Version bump only for package @band-store/band-store

## 1.0.17 (2020-09-18)

**Note:** Version bump only for package @band-store/band-store

## 1.0.16 (2020-09-11)

### Bug Fixes

- **Band Store:** add line item to order.gift_card_created event (c5019ca)

## 1.0.15 (2020-09-10)

### Bug Fixes

- cron jobs and brightpearl auto refresh (#107) (c7bd783)

## 1.0.14 (2020-09-09)

**Note:** Version bump only for package @band-store/band-store

## 1.0.13 (2020-09-09)

**Note:** Version bump only for package @band-store/band-store

## 1.0.12 (2020-09-09)

### Features

- **plugins:** Adds add-on plugin (3de1e6d)

## 1.0.11 (2020-09-09)

## 1.0.10 (2020-09-09)

### Bug Fixes

- updates license (db519fb)

## 1.0.9 (2020-09-08)

## 1.0.8 (2020-09-08)

### Bug Fixes

- fulfillment api (#104) (1e04be9)

## 1.0.7 (2020-09-07)

## 1.0.6 (2020-09-07)

### Bug Fixes

- **Band Store:** secure cookies in staging (7e2446f)

## 1.0.1 (2020-09-05)

### Bug Fixes

- **Band Store:** adds fulfillment_created event in order service (#101) (021544d)

## 1.0.1-beta.0 (2020-09-04)

### Bug Fixes

- **Band Store:** product variant metadata (#98) (520115a)

# 1.0.0 (2020-09-03)

# 1.0.0-y.25 (2020-09-03)

# 1.0.0-y.17 (2020-09-01)

### Bug Fixes

- all redis urls correct (473d702)

# 1.0.0-y.16 (2020-09-01)

### Bug Fixes

- all redis urls correct (11a9f38)

# 1.0.0-y.15 (2020-09-01)

### Bug Fixes

- debug (aece0ff)

# 1.0.0-y.14 (2020-09-01)

### Bug Fixes

- pass config to service loader (d7cd7e9)

# 1.0.0-y.13 (2020-09-01)

### Bug Fixes

- use Band Store config for env vars (61dc478)

# 1.0.0-y.12 (2020-09-01)

### Bug Fixes

- asValue registrations (5504281)

# 1.0.0-y.11 (2020-09-01)

### Bug Fixes

- use fewer redis connections (b5ee323)

# 1.0.0-y.9 (2020-09-01)

### Bug Fixes

- more economical use of redis clients (b85417a)

# 1.0.0-y.8 (2020-09-01)

### Bug Fixes

- more economical use of redis clients (fdfc213)

# 1.0.0-y.4 (2020-08-31)

### Bug Fixes

- add tax_code to regions (e8afb6b)

# 1.0.0-y.3 (2020-08-31)

### Bug Fixes

- auto pick country in 1 country regions (d11eb8f)

# 1.0.0-y.0 (2020-08-30)

### Bug Fixes

- removes unnecessary import (270645d)

# 1.0.0-alpha.37 (2020-08-30)

### Bug Fixes

- update password hashing (16d3c88)

# 1.0.0-alpha.36 (2020-08-30)

# 1.0.0-alpha.31 (2020-08-28)

### Bug Fixes

- better rounding of totals (3093cba)

# 1.0.0-alpha.30 (2020-08-28)

# 1.0.0-alpha.27 (2020-08-27)

### Bug Fixes

- **completeOrder:** removes payment capture (db3c332)
- **contentful-plugin:** Keep existing entry fields (eb47896)
- **discount:** allow all updates on discounts (d8aac75)
- **Band Store:** allow multiple fulfillments (0856645)
- **order:** Adds display_id to free text search (cfa7417)

### Features

- **pagination:** Adds MVP pagination to orders and products for admin routes (9dc6999)

# 1.0.0-alpha.24 (2020-08-27)

# 1.0.0-alpha.22 (2020-08-25)

# 1.0.0-alpha.21 (2020-08-25)

### Bug Fixes

- **order:** sends order to fulfillment provider (450f7d9)

# 1.0.0-alpha.15 (2020-08-22)

# 1.0.0-alpha.14 (2020-08-22)

# 1.0.0-alpha.13 (2020-08-22)

# 1.0.0-alpha.12 (2020-08-22)

# 1.0.0-alpha.11 (2020-08-22)

# 1.0.0-alpha.10 (2020-08-22)

# 1.0.0-alpha.9 (2020-08-21)

# 1.0.0-alpha.8 (2020-08-21)

# 1.0.0-alpha.7 (2020-08-21)

# 1.0.0-alpha.6 (2020-08-21)

# 1.0.0-alpha.4 (2020-08-20)

# 1.0.0-alpha.3 (2020-08-20)

# 1.0.0-alpha.2 (2020-08-20)

# 1.0.0-alpha.1 (2020-08-20)

# 1.0.0-alpha.0 (2020-08-20)

# 0.3.0 (2020-04-06)

# 0.2.0 (2020-04-06)

# 0.2.0-alpha.0 (2020-04-04)

## 0.1.12-alpha.0 (2020-03-24)

## 0.1.11-alpha.0 (2020-03-24)

## 0.1.10-alpha.0 (2020-03-24)

## 0.1.9-alpha.0 (2020-03-24)

## 0.1.8-alpha.0 (2020-03-24)

## 0.1.7-alpha.0 (2020-03-24)

## 0.1.6-alpha.0 (2020-03-24)

## 0.1.5-alpha.0 (2020-03-24)

## 0.1.4-alpha.0 (2020-03-24)

## 0.1.3-alpha.0 (2020-03-24)

## 0.1.2-alpha.0 (2020-03-24)

## 0.1.1-alpha.0 (2020-03-24)

# 0.1.0-alpha.0 (2020-03-24)

## 1.0.10 (2020-09-09)

### Bug Fixes

- updates license (db519fb)
