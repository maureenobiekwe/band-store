# @band-store/types

## 2.22.4

## 2.22.3

### Patch Changes

- #17619 `4df78b3` Thanks [@sradevski](https://github.com/sradevski)! - feat(auth,types,utils): read the Band Store Cloud OAuth client secret from BAND_STORE_CLOUD_OAUTH_CLIENT_SECRET, falling back to the API key

- #17574 `9692b99` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(deps,caching,framework,types,utils): update awilix to 13.0.5

- #15620 `a6a4254` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,core-flows,framework,js-sdk,modules-sdk,types,utils,link-modules,rbac): end to end RBAC implementation

- #17619 `4df78b3` Thanks [@sradevski](https://github.com/sradevski)! - chore(auth,notification,payment,types,utils): remove the unused Band Store Cloud sandbox handle

## 2.22.2

### Patch Changes

- #17533 `26e5807` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: update ioredis to ^5.11.1

- #17503 `c78a95a` Thanks @band-store-os-bot! - fix(caching): close the in-memory cache provider's client on application shutdown

- #17575 `2f0b2e9` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(types,utils,dashboard): update bignumber.js to 11.1.5

## 2.22.1

### Patch Changes

- #17428 `081bcd2ef57e3d8e946ded205f2bdbd99c2834ba` Thanks @band-store-agents! - fix(types): add attribute, value and operator to FilterablePriceRuleProps

- #17432 `7c3b0339379efeda7863f48b9f60e3391cece091` Thanks [@sradevski](https://github.com/sradevski)! - feat(Band Store,core-flows,types,js-sdk): add store route to update a payment session's client data

## 2.22.0

### Minor Changes

- #17089 `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: drop Node.js 20 support and require Node.js v22.22.0 or later

### Patch Changes

- #17347 `673d03edafd30beef18286bbef8a737ff332d541` Thanks @band-store-agents! - fix(Band Store,types): add `http.requireActorAssociation` config to refuse logins on actor types an auth identity isn't associated with

- [`09c7800e9c53ebc654fedcd593b8febde8fc5142`](undefined) - fix(types): type the `status` filter of product list params as an array of statuses

- #17099 `dab83ec94a8d60446e15eb982617b7c1cc7589a2` Thanks [@sradevski](https://github.com/sradevski)! - feat(payment): register a Band Store Payments provider per Band Store Cloud payment account

- #16964 `780a69aad3ea20beadf82e9c5351a6633de45b64` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(payment,core-flows,Band Store,types,utils): let refunds be retried safely with an idempotency key

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- #16142 `a491ca71f438e1f35a496d63d29141e15bc56c93` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(dashboard, core-flows, js-sdk, types, Band Store): add export customers feature

## 2.21.2

## 2.21.1

### Patch Changes

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

## 2.21.0

### Patch Changes

- #16762 `cbd48e2e0169ef9c016fb25703ae08d70827ff34` Thanks [@sradevski](https://github.com/sradevski)! - Add search helpers for better DX

- #16719 `0ef6fa815681dfd1771ece1edc921ffbfbc2ef4b` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(dashboard, types, Band Store): add support for metadata management for promotions

## 2.20.1

### Patch Changes

- #16703 `75c26e85f3bebc0c921064e9aa37987a76cc24ae` Thanks [@sradevski](https://github.com/sradevski)! - Remove correlated flag on search until supported

## 2.20.0

### Minor Changes

- #16688 `6a2fce501f3bcd459c21a67f586c7a15b905ff0f` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(framework, types, Band Store): set relations limit for store routes for optimal performance

### Patch Changes

- #16545 `4857d15bdcaf5a0648e7adc5b0b40312e23b5c02` Thanks [@sradevski](https://github.com/sradevski)! - Match admin search prefixes on the last query term so "dtc sta" still finds "Dtc starter".

- #16545 `4857d15bdcaf5a0648e7adc5b0b40312e23b5c02` Thanks [@sradevski](https://github.com/sradevski)! - Remove the in-memory local search provider. Indexes are created only by `db:migrate`, never at application start.

- #16508 `c660642e0dcba2a581086b5176ab8fbc06127ed8` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(search, query, types): return fields and relations not in the search index

- #15857 `90841150c76acbd31d8e94bd2edd585ccdff1db7` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,types): support calculated shipping options in draft orders

- #16457 `693310310610cf439fabb73230187028f2755696` Thanks [@sradevski](https://github.com/sradevski)! - Implement Band Store Cloud as a built-in search provider

- #16610 `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(framework,Band Store,auth,types): require a completed MFA challenge on MFA routes

- #16541 `c1e5a8f63988698df7f92b8f1e75f63ab8fdee64` Thanks [@sradevski](https://github.com/sradevski)! - Drop the previous search provider's indexes when `db:migrate` switches engines.

  Log seed/reindex progress (count, rate, last key) so large catalogs can be followed.

- #16461 `f3b3bd838ed53b6b2e1adead27d6b1006ea6e6e4` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(inventory,link-modules,Band Store,types,core-flows): support fractional inventory quantities and unit of measure

- #16415 `c5d55adb2375d19b8ae3be750e9aca52cf22e964` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,js-sdk,types): request and copy reset password link from dashboard

- #16643 `e01b039f256cb8224dd70a99662a49d0e8cf65d1` Thanks [@sradevski](https://github.com/sradevski)! - Add multiple query support in query.search, move searchMany to provider

## 2.19.0

### Patch Changes

- #15731 `f2c9d7d3c11507f92142b440a1d90ad74c2a03de` Thanks [@shafi-VM](https://github.com/shafi-VM)! - fix(core-flows,types): respect item-level allow_backorder when confirming inventory

  When adding an item, the `allow_backorder` flag passed on the item is now honored during inventory confirmation, overriding the variant's own `allow_backorder` setting for that item only. Previously the flag was accepted by the API but ignored, making it impossible to add an out-of-stock variant to a draft order even with `allow_backorder: true`.

- #16315 `c13aaa96b3968b7f021131529f630b1de7bd6970` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(product, types, utils, Band Store): optimize migration script for product options

- #16223 `e2b2a5c5c2c51dfc0973b024d4cbb5c6c2f49158` Thanks [@srindom](https://github.com/srindom)! - feat(core-flows,Band Store,dashboard,js-sdk,types): add inventory item export with per-location levels

- #16354 `372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(caching,core-flows,framework,query,types,utils): pass non automatically computed tags to various cached queries.

- #16238 `18e02fb06f5c925c0b3ebc1943407bf58f83e7b7` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,dashboard,js-sdk, Band Store,types,utils): support notification preferences for order edits

- #16298 `5f4d93c374b0ad0b0a31e75de98c7557e0415677` Thanks [@sradevski](https://github.com/sradevski)! - Add the Search Module: provider-backed search with an in-memory (Orama) provider, the `query.search` primitive, index definition discovery from `search/`, index migrations through `db:migrate`, event-driven ingestion, and an `/admin/search` endpoint

- #16023 `3ff26b6f7f036392ad1a97e67daea6b83c3fee23` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(auth-oidc,dashboard,auth,js-sdk,types,Band Store): generic OIDC auth provider

- #16314 `5105fec20908cf7bcd7f5f859674acdd8a38b982` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): widen the vite peer range so consumers on any vite major can install

  The optional `vite` peer was `^5.4.21`, and npm enforces optional peers that are present but conflicting, so `npm install @band-store/types` failed with `ERESOLVE` in any project running Vite 6 or newer. The constraint is transitive, so storefronts were affected too. Vite is used here for a single type-only import, so the range is now `>=5` and should stay open-ended.

- #16139 `9fa4bd9eb941a266c560b35683e8230af33a3352` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(fulfillment, core-flows, types, utils, Band Store): support custom delivery address + pass additional data to createFulfillment

## 2.18.0

### Minor Changes

- #15989 `0e7973e2fc3c45da39136cf3f66c90358571ffc5` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): fix delete operation when primary key is not `id`

### Patch Changes

- #16025 `e61285a935b0cae42603f8bb9e10569fd0a51169` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,settings,ui,types): implement configurable data tables end to end in admin dashboard

- #15840 `dfdcdd7467ede40e1bb80ce866bfe2c256b8ff86` Thanks [@nam-stx](https://github.com/nam-stx)! - feat(core-flows,order,cart,types,Band Store): Add data and metadata fields to tax line models

- #16125 `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(framework, types, Band Store): add disallowed query config to restrict retrieved fields

- #15926 `c2fc62507a54f0ab73367d4369c783bbbdccf022` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,Band Store,types,js-sdk,dashboard): transfer order to guest customer

- #15614 `3382c8189bfc9f44e86123496ef3665e92ac91c9` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,types,utils,Band Store): support global product options in imports

- #14661 `8f97e3f3710a2bae662415dac7098e1c6e60c3c9` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,admin-vite-plugin,admin-shared,ui,settings,js-sdk,types): view configuration UI enhancements — dynamic filter/sort resolution, custom cell renderer registration, property labels management UI

- #15686 `99f2ea9c85a64a08c56196ba963db2c8dd0b7923` Thanks [@mrpackethead](https://github.com/mrpackethead)! - feat(utils): support dynamic password function in createPgConnection for RDS IAM auth

  Pass `driverOptions.dynamicPassword` and `driverOptions.expirationChecker` through to the Knex connection config, enabling AWS RDS IAM authentication and other rotating-credential patterns.

- #15923 `d5c6d183e187a24d5cf6d39bca8d79d72a4f1f71` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,types): filter notifications in admin dashboard for logged in user

## 2.17.2

### Patch Changes

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

- #15085 `b50a9dbaf3eeb29753fa28afbc1b529c44ec5a51` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(payment,payment-stripe,core-flows,Band Store,dashboard,js-sdk,utils,types): introduce async payment methods support

- #15721 `7686adc8637b41879c4551ca422829ad2d63d6a9` Thanks [@leobenzol](https://github.com/leobenzol)! - feat: drag&drop LayoutComposer, settings db persistence

## 2.17.1

### Patch Changes

- #15814 `4f5e1cc97f4511f43cf4790af412781dafb2ba86` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add created_at and published_at to EventMetadata

## 2.17.0

### Minor Changes

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(Band Store,product,core-flows,types): product options redesign (server-side)

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(): allow linking a subset of an option's values to the product

### Patch Changes

- #15764 `2221e527701c7a47f243d808b0f4fe8c7f44f2f8` Thanks [@mrpackethead](https://github.com/mrpackethead)! - feat(file-s3): add `acl` option to disable ACL headers on uploads

  Adds an `acl` configuration option to the S3 file provider:

  - `undefined` (default): existing behaviour (public-read for public, private for private)
  - `false`: omit the ACL header entirely, required for buckets with BucketOwnerEnforced Object Ownership or Block Public Access enabled
  - A canned ACL string: use that ACL for all uploads

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(admin-shared,dashboard,core-flows,product,js-sdk,types,Band Store): rework product option values views and add dedicated endpoints

## 2.16.0

### Minor Changes

- [`30f6d407cfaca510939ad161fbbe74feebb97883`](undefined) - feat(auth-emailpass, types, Band Store): require verification by actor type

### Patch Changes

- [`528b12cbd50f85079e157b920be306dec7c89938`](undefined) - feat(order,types): add line_item_metadata to order responses

- [`55be5103e41ffe367400cc9317a3bd6dbaa1e0cf`](undefined) - feat(core-flows,types): add setTaxLineContext hook

- #15407 `46271f2c4f9b4d107a43b588b1082a3e572fbe76` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,Band Store,types): add multi shipping method carts support

- #14674 `06b05343b4158e7bb96f8f0fbd7e6836a1818e44` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,admin-shared,core-flows,js-sdk,types,Band Store,link-modules): RBAC admin dashboard CRUD

- [`2bd3b0d18d7d4fe9c6f36bdffb76d1104f58f47b`](undefined) - Add support for deleting a payment method

- #15561 `1344c10503f34e392bd03f733820bcd5a12a2766` Thanks [@GBreg19](https://github.com/GBreg19)! - feat(Band Store,core-flows,js-sdk,types): allow provider_id when marking a payment collection as paid

  The `mark-as-paid` admin route and the `markPaymentCollectionAsPaid` workflow now accept an optional `provider_id`. When provided, the captured payment is recorded under that provider instead of always using `pp_system_default`. Omitting it preserves the previous behavior. This completes the admin payment-provider flow started in #15169.

- [`a46961ed421dc69fe991891d02b0f1c66f6180ab`](undefined) - fix(core-flows, auth, types, Band Store): bind password reset tokens to a single-use server record

- [`b74b5b19569534412a67835ffae8fb3afbf6f5c5`](undefined) - fix(http-types-generator, types): correctly generate types for OperatorMap

- #15571 `13c5dd22802593f5fb5c0a97076a966704aa56c9` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(dashboard,js-sdk,types,auth): extract MFA and recovery code provider interfaces to types package

- #15690 `60d63bd2c0e400f06b985d5275b86c72681e4f62` Thanks [@Tusharkhadde](https://github.com/Tusharkhadde)! - feat(dashboard,Band Store,types): add internal note support to order edits

## 2.15.5

### Patch Changes

- #15496 `ace1822bccbb21afa533665937460140e36aa995` Thanks [@christiananese](https://github.com/christiananese)! - Add auth verification primitives for emailpass.

- #14593 `538f98da78ae2d741f1182e6ef315ba8efac6911` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,framework,rbac,js-sdk,types,utils,Band Store): rbac admin dashboard utils

## 2.15.4

## 2.15.3

### Patch Changes

- #15396 `d0f4df0c6307555737a46f54ab7b99dd81c6c75b` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,types): surface skipped promo codes due to budget/promotion limits

## 2.15.2

## 2.15.1

## 2.15.0

### Patch Changes

- #15273 `f57b942b8bbd385f32203965e2f54a3964e812eb` Thanks [@Metbcy](https://github.com/Metbcy)! - fix(core-flows, payment, types): expose `metadata` on refund creation through `refundPaymentsWorkflow`

  The `Refund` data model supports a `metadata` field, but it was not exposed on
  `CreateRefundDTO`, `RefundPaymentsStepInput`, or `RefundPaymentsWorkflowInput`,
  making it impossible to set metadata on a refund created via
  `refundPaymentsWorkflow`. This adds the optional field to all three types and
  threads it through `PaymentModuleService.refundPayment` so the value reaches
  the underlying refund row.

## 2.14.2

### Patch Changes

- #15169 `aa407641ce6ddcd2e27352315b0f7b911a2c0acf` Thanks [@GBreg19](https://github.com/GBreg19)! - feat(Band Store,js-sdk,types): add POST /admin/payment-collections/:id/payment-sessions route

- #15223 `a9617312ef55be2be8ac5823cc990dd5d6e72c4c` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): fixes to some HTTP types

- #15238 `d29b9a1d80580d4b5dce926387c465260936e5ec` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(pricing,Band Store,dashboard,types): add metadata support for price lists

- #15189 `a0e57e419cd3e597526460fdbfed7e3e4842aa9b` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store,types,loyalty-plugin): remove unused parameter + export step

## 2.14.1

## 2.14.0

### Patch Changes

- #15106 `1a28af3d7412466022dc941c425a06c762a43d75` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,Band Store,types): add no_notification to markOrderFulfillmentAsDeliveredWorkflow

- #15017 `15085e1adb9c50743ca07d2da94f23cc09b6852a` Thanks [@shahednasser](https://github.com/shahednasser)! - fix: fix http types not matching validators

- #14650 `965adfe2fc15a024270ac384f819479e8b274e10` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(view configuration): Generic introspection and generation

- #14826 `923a869a7d462c2e0399619ac2b35c16132e079c` Thanks [@asgerjensen](https://github.com/asgerjensen)! - chore(Band Store,types): allow filtering on variant sku/barcode/ean/upc on both /store and /admin apis

- #14570 `9e1e7082c3437ee2ae01d6752b624d4b4d905604` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): update item metadata on item_update change action

- #14450 `c18e1f49a88c3b6a426171afeaf6f7691e8c5bde` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows,types): Fix product export breaking when `sales_channel_id` filter is passed

- #14855 `b94f7ae1f5f66dfca7f73c7ee8d53afdcbf26ee5` Thanks [@asgerjensen](https://github.com/asgerjensen)! - feat(product,Band Store,types): add external id to product tags, collections and types

- #14482 `d9af2f5efba391f612ea9f6183702756c3fa4732` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): Version shipping method adjustments & implement missing creation flow for versioned adjustments

- #15025 `2ae3978edb454efb0b647889071bd2b8349299f0` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,types): add metadata form to Stock Location

- #14799 `a92ca32b93eaf7f5a8e1fc8b2bbb01763867f6c1` Thanks [@asgerjensen](https://github.com/asgerjensen)! - add external_id to product-category

## 2.13.6

### Patch Changes

- #14935 `5b655f6d7c24323bd84dc1b684938725873a33ac` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,types): improve order timeline UI

## 2.13.5

## 2.13.4

## 2.13.3

### Patch Changes

- #14802 `9fecbd2b0487b10736879507cf11ed426d9523d5` Thanks [@asgerjensen](https://github.com/asgerjensen)! - chore(types): add external_id to product list params type

## 2.13.2

### Patch Changes

- #14658 `495b823a370c86c25142e02a5daabfeccdc6e518` Thanks [@webgodo](https://github.com/webgodo)! - feat(types): Add `completed_at` filterable property to `FilterableCartProps` interface to enable filtering carts by completion date.

- #14720 `f37f029799cad7ee0337aeab625df5e272de2363` Thanks [@arjusmoon860](https://github.com/arjusmoon860)! - feat(dashboard, admin-bundler, utils, types): add configurable maximum file upload size

- #14557 `42322f44eaaf997e9ab7af2ca1e8621a08a8ca01` Thanks [@bouazzaayyoub](https://github.com/bouazzaayyoub)! - feat(Band Store,types): add metadata field to AdminUpsertStockLocationAddress and validators

- #14725 `69ff277f1d2cbf148f432747474b134520b2addb` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): fix item type for shipping option price calculation

- #14689 `6c0990afa9c7df80a8a4da9c3c63f04e02fd5cbb` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): make images of product variant optional

## 2.13.1

## 2.13.0

### Minor Changes

- `a31e72c31c5235240cead2d04e39e5927688eec7` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor bump

## 2.12.6

### Patch Changes

- #14478 `13476988763368b3b333fa5bc3f613e8eb174fdf` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/enable event configuration in Band Store config
  enables event priority configuration through the Band Store config, allowing users to configure event processing options (like priority) for specific events at the module level.

- #14541 `a9b5797e2de093e26286808876262b724e26671a` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,translation,js-sdk,Band Store,types): Translation settings management UI

- #14536 `d60ea7268a00f386f803f0f9e6ffeec4bced50bf` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(translation,fulfillment,customer,product,region,tax,core-flows,Band Store,types): Implement dynamic translation settings management

- #14359 `cec8b8e428131d4743d6da98cd5fa0974b8ab9e1` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,types,utils,Band Store): Translate tax lines

- #14597 `b615b71a8e4e273018a09528a8b61116fca6de8b` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows, types): ensure promotion calculation context has required rules data

- #14598 `89e6e3e5cbe96f1f64e2cdb33cc2e0d6a221f7a2` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows, types): improve product exports memory consumption

## 2.12.5

### Patch Changes

- #14494 `08c55e703573f3c11532228d2c626f7b7f16228f` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(DML): Add a new translatable property modifier applicable on text

## 2.12.4

### Patch Changes

- #14454 `0ffd79010953315494c1b2ba1def477b7b1d9e4b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(translation): Add support for locale to the graph query

- #14412 `89a0adc6122a78891cd9d56dfaadf6fc7af04efb` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): add missing completed_at property for carts

- #14355 `b21a599d118f126e64d2993d46ba60f4a4e94545` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Translation settings + user configuration + js/admin

- #14395 `001923da2bbebb3d42373f0f66e517830d9c0187` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add Band Store Cloud auth provider

## 2.12.3

### Patch Changes

- #14278 `31a057558c0ec6ff7233489a28edc1fda0ec5375` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types,translations): fix types for translation and locale updates

- #14282 `8bb2ac654ce928edf1c3a2040f35614c924800c8` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): add locale to the query parameters of product query types

- #14314 `accb778039a52fae8eefbada77044c527b136114` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(js-sdk,types,Band Store): add list locales store method to JS SDK

- #14300 `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(): Remove default_locale from StoreLocale

- #14299 `ba6ed8d9dd22be8646d311d9531c65aea1b7986a` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Translation statistics

- #14138 `70929ecac3e5610d90d47a40a517eac3cf3173a4` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(dashboard,Band Store,types): improve performance for price list prices retrieval

- #14267 `f13c23a4b709e31f9b2d42e98acc6e342c494403` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Sync order translations

## 2.12.2

### Patch Changes

- #14226 `e4877616c38777f583fe0b58bb10d1c7cf41c0b3` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): sync cart translation synced

## 2.12.1

## 2.12.0

### Minor Changes

- #14061 `b74ef4a784d3728ff2c657a8186095e87fc3f0d4` Thanks [@fPolic](https://github.com/fPolic)! - fix(fulfillment, types): make relationship between SO and SO type M:1

### Patch Changes

- #14042 `c2c3ad5ba53f1959422fb2d37297a8de8d714782` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Upgrade vit to non vulnerable one

- #13306 `78842af1c30de9c7561f10b4129aba4e1f30db27` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix: Compute "virtual" adjustments for order previews

- #14176 `8ddf8b4d764ae359d279498f08d85146d55077f0` Thanks [@fPolic](https://github.com/fPolic)! - fix: skip promotion usage limit checks on edit flows

- #14169 `00aa2c13bc37223029e40b38f3e2bedd8ed1e816` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(js-sdk,types,Band Store): add HTTP types for update order change API route

- #13760 `536a3f802c92960b1eab48c37db25a8c542fd231` Thanks [@fPolic](https://github.com/fPolic)! - feat: promotion usage limit

- #14128 `5da51064d7936c6d7a459cfa8b34eada65163e03` Thanks [@fPolic](https://github.com/fPolic)! - feat: carry over promotions toggle on exchanges

- #13809 `a9d33bc8d11637230052f1729e85af5e174b2423` Thanks [@willbouch](https://github.com/willbouch)! - fix(core-flows,types): change doc for upload file functions

- #14104 `b81f958d4126ab99f09b9fef3b1f790b4bca1515` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add provider_data to notification model

- #14073 `62d103b44f6402529a156202e37ec5ece01244b4` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(payment): Double idempotent capture called with auto capture behavior

- #14024 `6746fecd727823b233a90edb1819d08555124464` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore/order custom display

- #14026 `a85778679e99c40421b3be0122d153f991efbc80` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(product, types): add missing types for variant images and thumbnails

- #14102 `f67bfb9f92b9ea4c06910ea203c685e18fafe1d7` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add from to notification model

## 2.11.3

### Patch Changes

- #13928 `42b270ed2df09474f528d8d23816e0affcf4bd25` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types, Band Store): fixes to http types and validators

- #13910 `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Dependencies cleanup and improvements

- #13940 `afb40d437b3cc4ceb015df70985b2f005f40eaff` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Cleanup and organize deps

- #13927 `516e217dbb848b71810e006c4eab914a40d7ecfc` Thanks [@juanzgc](https://github.com/juanzgc)! - Update Providers to enable mixed provider entries.

## 2.11.2

### Patch Changes

- #13781 `cc2614ded7f83cdbe7e7f7f809d05f5ab6059fe4` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add Band Store Cloud Email provider

- #13889 `01ee437926f0a4ec587510c65f8282620bf72d3f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Make template nullable on emails

- #13730 `25a20ca95f702dfb8a34fe9e4f3c565a47c2655e` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store,types): product variant store endpoints

- #13833 `ec4443287601f5fe1544b305873f3aa151ed1bd7` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(types,Band Store): clean up HTTP and request type arguments

- #13623 `47572816778e21432d0201f4b2642a765c86fdbc` Thanks [@fPolic](https://github.com/fPolic)! - feat: scoped variant images

- #13869 `85b1f3d43aa8d8e0269a545ef7867733fd0eb8e2` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(index): Add support for API end points to interact with the index module

- #13879 `1defb3c29bfe018fd5f89b5a9e27fc8a31d72cdd` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Inject sandbox handle in cloud config

## 2.11.1

### Patch Changes

- #13747 `5df903f5fb52d1e37d13bfe72ed9c226c1eb46b4` Thanks [@pepijn-vanvlaanderen](https://github.com/pepijn-vanvlaanderen)! - Added shipping method data to tax module context

## 2.11.0

### Patch Changes

- #13702 `0cbd9f0bc315b3eda1770ac301061f1576856387` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve caching rollout

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- #13703 `c61f3150c138de016c6886e79d79984bc267273c` Thanks [@willbouch](https://github.com/willbouch)! - fix(Band Store,utils,types): inventory management nullable

- #13451 `7dc3b0c5ffdf8eb7070ee5cfd8155c6c4de5c0b1` Thanks [@fPolic](https://github.com/fPolic)! - feat: support limiting promotion usage by attribute

- #13626 `9c7c1d48c7779023172d5e7003674b2d7107b733` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Pricing preference context loss

- #13555 `513b352da3f580d87e556fd5cd54e7005313ce2f` Thanks [@bqst](https://github.com/bqst)! - fix(types): resolve circular type reference in StoreCollectionListParams interface

- #13559 `8a4c10d7f8b74fc68296e9825c777e3e2fc57d0a` Thanks [@willbouch](https://github.com/willbouch)! - fix(types): missing service zone in shipping option

- #13784 `150aa50397825ae800f3acf4bbc68fe28e397582` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(tax,types): Add method to retrieve a Tax Module Provider's service

- #13435 `b9d6f73320c36c53235b12fb8397b30a448917f0` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(): distributed caching

- #13669 `28d57b7bf8bceee62449564228b9e08d4f706cd7` Thanks [@willbouch](https://github.com/willbouch)! - fix(types): missing rules in prices types

- #13575 `5e827ec95d0f721e62c0d4e8c603bda7ddc0929c` Thanks [@willbouch](https://github.com/willbouch)! - feat(admin-shared,dashboard,js-sdk,types,payment): refund reasons in dashboard

- #13450 `8ece06d8ed6a197ebb370918c49a3ec5c21dd186` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Upgrade mikro orm 6.5.4

- #13527 `458dd04bbf70159ec42254e91675c7a1f1d344d8` Thanks [@leobenzol](https://github.com/leobenzol)! - fix(core-flows,types,Band Store): pass /store/shipping-options fields to workflow

## 2.10.3

### Patch Changes

- #13509 `2a29c6f82c73ff6720cc21e885125c984419226c` Thanks [@willbouch](https://github.com/willbouch)! - fix(types): cart item totals optional

- #13497 `9563ee446f2b3a2e0cd4a4a33959ed55be5f268a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(utils): subtotal calculation discounting returned items

- #13461 `88748ba09d6578608d3d9858718fbbfba956f67b` Thanks [@willbouch](https://github.com/willbouch)! - fix(types): pluralize words ending in s like status

## 2.10.2

### Patch Changes

- #13376 `0000ed69982b95f4bff80fd6182347291d25f7b8` Thanks [@fPolic](https://github.com/fPolic)! - fix(draft-order,Band Store,types): draft order promotion UI polish

- #13391 `d7692100e7a2b2f078756cac9ca2b33784d3d1ff` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(orchestration): add support for autoRetry step configuration

- #12313 `6634765cedc68f605f005766845350d611db142c` Thanks [@SteelRazor47](https://github.com/SteelRazor47)! - fix(types): add missing retrieveProductOptionValue to module interface

- #13313 `2f6edf367abb9d3e71f398c3b98a749b73517ea6` Thanks [@willbouch](https://github.com/willbouch)! - feat(dashboard,cart,types,utils): refine order details summary

## 2.10.1

## 2.10.0

### Minor Changes

- #13236 `9412669e654c994e2dbee9cf61c18004d79f6475` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): idempotent cart operations and nested workflow deletion lifecycle fix

### Patch Changes

- #13263 `486621383a79e83c831933c1a0ffdae58a695cb0` Thanks [@willbouch](https://github.com/willbouch)! - feat(dashboard,core-flows,js-sdk,link-modules,promotion): free shipping promotion in dashboard

- #12572 `2f594291ad8d227b499b80a5bfe66f5963d42d6a` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows, dashboard, types): improve allocation flows in Admin

- #13283 `e413cfefc2e0579ba7c5299dc4f4270310e39c2c` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: define file config and improved feature flag support

- #13226 `67d3660abf3ceeac3f04006fe5e92d2fa7c0ccad` Thanks [@willbouch](https://github.com/willbouch)! - feat(dashboard, core-flows): associate shipping option to type

- #13289 `f764b3a36471a0ad9e9e05f125183464680e3a2d` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(index): $nin and $not operators

- #13281 `fc4925327334c540c0125a91e81794c3c1f340e7` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(core, event-bus): Compensate emit event step utility

- #13156 `e2213448ac9eb93318570fde2807a3036108d44b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: custom logger on band-store-config

- #13191 `34c3c14e0a1491ab80473605018b97981544167d` Thanks [@willbouch](https://github.com/willbouch)! - chore(types, api): support shipping option type api endpoints

- #13242 `492e0189573ffad4977a3559d71f39bf94d8b45d` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,core-flows,js-sdk,types,Band Store): listing order's shipping option

- #13251 `6264a6262b0220c70ad35c0d56a93a39218ccb80` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Cart operation should calculate item prices accounting for quantity

## 2.9.0

### Patch Changes

- #13185 `f1da73cb588a45afdeb80572d7d59987b5559252` Thanks [@willbouch](https://github.com/willbouch)! - fix(types): remove order_id in apis that do not handle it

- #12960 `1bdf602f1c1da181e2839858d2f7e8aea503573a` Thanks [@scherddel](https://github.com/scherddel)! - This fixes the discount\_ calculation logic and promotion tax inclusiveness calculation

- #13106 `9766570827ebf50d49d8daf956deecce6666a8cc` Thanks [@scherddel](https://github.com/scherddel)! - Moved calculation logic from total to original_total to ensure consistent base values

## 2.8.8

### Patch Changes

- #13002 `468b81c2cbdbc24b26e31bf6e347d3633a4fb4f8` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(modules-sdk): Entity types

- #12936 `919c53e44e2c7bb16bc513b5c96c93ac47bd6ce5` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): add attachments to CreateNotificationDTO type

## 2.8.7

### Patch Changes

- #12885 `42be9a88d61a11db7aebde2d6f4d96d43f54ea79` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix: Update TIP on promotions

## 2.8.6

## 2.8.5

### Patch Changes

- #12815 `6ca755ede7bfe3211464447412ca0d97e1207742` Thanks [@anteprimorac](https://github.com/anteprimorac)! - Enable filtering admin products API by variant EAN, UPC, and barcode

- #12813 `d517dbd66a47817d1270c278b03add9a5c4244cb` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add support for jwt asymetric keys

- #12712 `b316924572fc2cf529e0d91b84955da20b34248a` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: remote query types

- #12720 `820a936b9836ae83e7a45de1e1ed0488d8cde2fd` Thanks [@riqwan](https://github.com/riqwan)! - feat(framework,types): add cookie options to project options

- #11885 `44d1d186890cd44b20e41b60d1e217bc3d4b2a51` Thanks [@riqwan](https://github.com/riqwan)! - feat(dashboard,types): add credit lines + loyalty changes

- #12412 `2621f00bb035a6b909f9498a2bc98fdba8570ba9` Thanks [@fPolic](https://github.com/fPolic)! - feat(promotion, dashboard, core-flows, cart, types, utils, Band Store): tax inclusive promotions

- #12644 `bd6d9777c50d69115a20334a103a8ab9997b259d` Thanks [@fPolic](https://github.com/fPolic)! - fix(promotion, types): non discountable items check

## 2.8.4

### Patch Changes

- #12614 `791276e80f5745c8885352b7979c0faa979110f4` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: introduce bulkDelete method for IFileProvider

## 2.8.3

### Patch Changes

- #12567 `4e49cebcf0f053cb89012276e935a7ec62a12046` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows, types): export steps and types related to credit lines

- #12501 `59bbff62d81861282d55a32d6c0c45285203c4e0` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(index): limit partition table name and index enum fields

- #12508 `52bd9f9a53f6e63e5fbe0beb1fb2c650d88f7c88` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(product, modules-sdk): Add missing index for select-in strategy + allow to pass top level strategy to force the behaviour

- #12543 `ebe5cc7acddb7c61dc82fd8ec7f2fe3779104a99` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(index): return ids only

## 2.8.2

### Patch Changes

- #12496 `b2984f48f5fcf535177c98e921baa58fcf45bbe5` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): change update signature of IAuthProvider

## 2.8.1

## 2.8.0

### Patch Changes

- #12297 `9cedeb182dc19d6127b602fc06e4b8850490e2a9` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard, js-sdk, Band Store, tax, types): custom tax providers

- #11898 `b868a4ef4deb7df09d6156a907f4c883cd55a3fd` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(index): add filterable fields to link definition

## 2.7.1

### Patch Changes

- #12027 `e180253d608103cd8dfba8fddd3af2ba6ff2455a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(workflows-sdk,orchestrator): step skip on permanent failure

- #12157 `2f6963a5fbea05537680cb1b1f6a2b9822c36325` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: event group propagation and event managements

- #12140 `b8902637251e9ed4f8762ef280659bbab6d967de` Thanks [@thetutlage](https://github.com/thetutlage)! - Add support for dynamoDB for storing sessions and some types cleanup

- #12160 `1f73281ab88c064404ecf7cc9dd0977dfd369723` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): fix type of application_method_type filter

## 2.7.0

### Patch Changes

- #12097 `74381addc3d6af42f0292e778948aabb60a6dad9` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Emit events in batch and index process event ids in batch

- #11720 `ec56a8bc857a74788df6523af25914da95c4c1d8` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store,utils,test-utils,types,framework,dashboard,admin-vite-plugin,admib-bundler): Fix broken plugin dependencies in development server

- #11832 `95e89a39f347c8af6a5960943af56965bc3a07ba` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): cancel/refund payment on cart complete error

- #11876 `c3440e5e3812e3d1c6b82e9d4e41287398451611` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types,js-sdk): add enabled plugins route

- #12028 `3dba58785fb2d8e79f1ea89daa9e4ab8810821c8` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(dashboard,Band Store,types): allow searching for promotion rule options

- #11844 `0625f76cd4f040963829b61dcc70563e1d1b7070` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(workflow-engine): expose cancel method

- #11975 `0cc306bf562d8f1f1f1c09d9658463e2c8def465` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(js-sdk, types): fixes types and deprecate duplicate methods

- #11569 `cb6249320e7322e8eabfec8434f1278f8d63e96c` Thanks [@riqwan](https://github.com/riqwan)! - feat(order,types,Band Store,core-flows): fix(types,order,Band Store,core-flows): create order credit lines during order refund

- #11994 `1f8fab36361aa8e473ffe6c411c8598a916a6d3f` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,types,order,cart): assign tax lines only to regular products

- #11873 `13e159d8ad7ebb3e6977969b4bb10877d7bb7850` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(workflow-engine-\*): Prevent passing shared context reference and workflow.cancel

- #11872 `9dd62d93bd9e2acccc2e9f22bc029fd2b0df3234` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,types,utils): make payment optional when cart balance is 0

- #12103 `9ac74eead4760d6c92676d451e6f25c2305b1852` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,types): export fetchShippingOptionForOrderWorkflow

## 2.6.1

### Patch Changes

- #11715 `b7678983a9b3e5c4d88282054b37b6c517329bd7` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: improve tax lines

## 2.6.0

### Patch Changes

- #11604 `8bb0a25f573c62ca1d1bcd7af184b0d0cf98e125` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types, Band Store): remove fulfillment and payment status filters from validator + http types

- #11597 `698a520729a3045cd13eed5ee0e5120a563e9261` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(types): change payment provider types to interfaces

- #11692 `51b0af193c7dde4899a696a515b59373b465d907` Thanks [@riqwan](https://github.com/riqwan)! - fix(types,Band Store): calculate taxes for original price

- #11226 `93cbc6b6695f236fa39b66169de971228888f1b9` Thanks [@bouazzaayyoub](https://github.com/bouazzaayyoub)! - fix: add additionl data to product categories hook

- #11666 `d1efad9bf05ca80959e8b50d74b74167fc1b0064` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve cart update line items

- #11581 `d814d9540e76256be23d733b73cf5a63aa380c8b` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(types): Allow providing either vite@5 or vite@6 for the peer dependency

- #11601 `b42f151be31161a5d7a73132ee6794b990403d76` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve internal repository delete algo

## 2.5.1

### Patch Changes

- #11348 `22276648ad0aef12206464b555efdce97e316bb4` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: query.index

- #11399 `d1cbe4c61ed99bbeccf1be49721e0aa7b74edd71` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: relationships to accept ids

- #11441 `1a3843a92a6db83b9249e9c0aece7b3d13a600a9` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: listVariantsList types

- #11514 `3b4997840e624ef8da1a75744b4bfb5c5a371f7c` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store,js-sdk,types): Add basic draft order operations to js-sdk

- #11518 `0c957350a6688c78572361b51c1f16a452a31aed` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(order): order edit flows with calculated taxes

- #11544 `065df75e7d5b90a4de43873d8c08e1aab65e3fd7` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): handle empty q filters - allow to query deleted records from graph API - staled_at fixes

- #11414 `47edd01deec79b394552cea349f1e41b7b88723b` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(admin-vite-plugin,admin-bundler,ui,icons,dashboard,framework,types): Update Vite dependencies

## 2.5.0

### Patch Changes

- #11300 `6db96c80d05730a9188937599baba2602f4e2a92` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(ui,types): Add Metadata form for collection

- #11304 `9f1a3b2a4214ef23a22972e6d28c5f43f87da353` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store, types): fix promotion HTTP types in cart

- #11263 `65fae943c9d919f658c8660e5b46626c1b302e31` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(orchestration): hydrate resultset

- #11285 `f07af7b93c86673e730dc4e5eba8df2572013f9f` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(dashboard,core-flows,types,Band Store): Allow editing Order metadata

- #11295 `3c51709daf07dcdd5563fa08fec2446a42cc8058` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: map container types for core services to interface

## 2.4.0

### Minor Changes

- #10292 `cc73802ab3821d2c667942bd887efb7476205547` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: upgrade to mikro-orm 6

### Patch Changes

- #10964 `d4e042e9ad838cfc3b3c83c342afaf76adb281d2` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(dashboard,js-sdk,types): Remove redundant body for markAsDelivered

## 2.3.1

## 2.3.0

### Patch Changes

- #10892 `ff725090bb4ec848cb82c5411bdc25c4b72252ab` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): add missing inventory_items to input of createProductsWorkflow

- #10950 `5eab9e739919594ae7e7e416942ec93d84b699fd` Thanks [@riqwan](https://github.com/riqwan)! - feat(promotion,dashboard,types,utils,Band Store): Add statuses to promotions

- #10975 `c75678d6d41d3b88d07681ad7e24472d6cbde672` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: add support for loading admin extensions from the source

- #10895 `c1930bd6568043d145e34d8360015e7207e18e4a` Thanks [@thetutlage](https://github.com/thetutlage)! - Feat/merge plugin modules

- #10874 `28febfc6438351fddb5b214b86f96aff89db688e` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: remove dead code and refactor the logic of resolving plugins

- #10630 `bc22b81cdf9591912744f448c74d45bcb0f11e0c` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(inventory,dashboard,core-flows,js-sdk,types,Band Store): Improve inventory management UX

## 2.2.0

### Minor Changes

- `4f897661eb7a855a881d460c565c2da6459367eb` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Custom callback to oauth providers

### Patch Changes

- #10791 `ecc09fd77db01fcb7e8eb8e60cd19e16e2b5ea81` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: generate modules mappings at runtime

- #10707 `13ddf27c68fc2831b3661940bc5f27bab23ce8c0` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store,types,js-sdk): fix request query parameter types for store product routes

- #10832 `99a06102a246c119f69d1873f3cdeee9ff1241a0` Thanks [@riqwan](https://github.com/riqwan)! - fix(stock-location,core-flows,types): update existing address when updating stock location address

- #10773 `5e9d86d75d1f2745c24a4bcd4a5c0df066578ef5` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: deprecate remoteQueryConfig in favor of queryConfig

- #10667 `47594192b79fbc798cfaf21821b60673745d1374` Thanks [@riqwan](https://github.com/riqwan)! - feat(dashboard,core-flows,types,utils,Band Store,order): Order cancelations will refund payments

- #10697 `0559d54c18d2e79c78c2b9a348b9873d1a786dea` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: pluralization of words ending in y, where y follows a vowel

## 2.1.3

### Patch Changes

- #10617 `100da64242838739816351ed259461f2d7c258e3` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: fulfillment module DML

- #10408 `c9b8db04c1b35f1cf129bb9ad74789fbc2881815` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Support custom line items

- #10606 `2ad08c4c440706dd2ffe2215807b89ee4a7f325b` Thanks [@vethan](https://github.com/vethan)! - Add description and Label to FilterableRefundReasonProps

- #10657 `048620884b5d458b109ac496e7a2056c202bd459` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(types): Keep intelisense while being more loosen

## 2.1.2

### Patch Changes

- #10569 `729eb5da7b6daf9781b8bdcbc2fab344e942d444` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: Inventory DML

- #10499 `16d27ea6e4c2e4290820fe2328f08557534fcb8f` Thanks [@thetutlage](https://github.com/thetutlage)! - Feat/customer dml

- #10551 `885c82ded63e504739bf39a113f820c87c9e2d52` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: add support for float properties

- #10602 `90ad2566fdde2215447100d10c3fe9b17ce826b5` Thanks [@riqwan](https://github.com/riqwan)! - feat(types,fulfillment): ability to delete a canceled fulfillment

- #10579 `6367bccde88158d524dfa01e5a8123ffa3461c10` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, pricing): Cart workflows handle pricing context accurately

## 2.1.1

### Patch Changes

- #10386 `a1a1e0e789424546443ce195b95f652d081d7b3b` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(dashboard,types): Add UI to manage conditional SO prices

- #10449 `16663ec8132e99bac7fbfe2adda542a5294d2384` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(dashboard,types): Add missing Metadata form for Region domain and fix types

- #10193 `559fc6587aa02cd4f8fbc9e97ff1f1ba094a4b1a` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Deleted default sales channel should be prevented

- #10457 `864f53011b892e1ed0abee2e241b662eccef7e6d` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(dashboard,types): Fix TS errors

- #10482 `69f4c4f4e06022990fcd9c66d8f1a68ff0ff97b1` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: index module to DML

## 2.1.0

### Patch Changes

- #10391 `3e98364bd1631f96846cd3199bf7497702cf5923` Thanks [@thetutlage](https://github.com/thetutlage)! - feature: add support for check constraints in DML

- #10350 `324b4ab438662f44de495ffe4d9137677a032a00` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing, types): add price rule operators to price calculations

## 2.0.7

## 2.0.6

## 2.0.5

### Patch Changes

- #10159 `9dff05cddeeca40fab47760fa15e07ca087664ed` Thanks [@thetutlage](https://github.com/thetutlage)! - Revert "feat: add optional fields"

- #10187 `1659c9be5d3ace1bed9f3a6e7206fe54e60645c0` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(dashboard): Allow re-ordering product images

- #10168 `3fee17747f059a331e9fbe40622205b968404faf` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): fix AdminBatchProductRequest to have product ID

## 2.0.4

### Patch Changes

- #10009 `34f4f695c0b8359a6e9efd45fd081ea743a1c439` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(types): Add AdminBatchUpdateProductVariant type, which includes ID.

- #10018 `bc2d556c2c57adab637308fb65247b17b8cd2ed5` Thanks [@thetutlage](https://github.com/thetutlage)! - breaking: pluralize type helper to account for uncountable nouns and special rules

## 2.0.3

### Patch Changes

- #9955 `03f4b66b90625634f13409be35cd57081f0eb7d5` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Generate graph schema with readonly links

## 2.0.2

### Patch Changes

- #9935 `bbf4af17258ea34adeeb8ff3a6cd213a12d67c76` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(types): Prev limit wrong values

- #9929 `c1c85ef952441eacfe8b6c2ffa9304ac4433053f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(core-flows,Band Store): Include region_id in shipping option retrieval

- #9947 `b3cbc160eb94025402b5a0ef21653c207bbe8ccd` Thanks [@sradevski](https://github.com/sradevski)! - fix: Default to a relative path for backend URL in admin

## 2.0.1

## 2.0.0

### Major Changes

- #7341 `2e42e053d4c9d5445d227bdc268c66713aad8e2e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Band Store 2.0

## 1.11.16

### Patch Changes

- #6827 `0c0b425de7` Thanks [@riqwan](https://github.com/riqwan)! - feat(band-store-react,Band Store,types,dashboard): added empty state for promotions list page

- #7077 `8d356217bd` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows,types): add batch updates to price list prices

- #6914 `27f4f0d724` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(fulfillment): Wrong type usage

- #6864 `e944a627f0` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: region payment providers management workflows/api

- #6880 `1a48fe0282` Thanks [@sradevski](https://github.com/sradevski)! - Add v2 product type endpoints and adjust the product module

- #6872 `86f499de2f` Thanks [@sradevski](https://github.com/sradevski)! - Aligned pricing module price set API with convention

- #6944 `09a2220569` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Add parents to product categories

- #7006 `78f603e4f1` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): remove duplicate CreateCustomerGroupDTO interface

- `cc557c8752` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Order endpoints and Cart totals

- #6943 `58c68f6715` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store, types): list payment providers endpoint

- #6901 `82a176e30e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(band-store-test-utils): Handle errors gracefully + Do not set Distributed storage on partial loading

- #7144 `11517f0faf` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): added store apis for products

- #7095 `62b9dcc6c1` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): cancel fulfillments API

- #7175 `e26cda4b6a` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, core-flows, types): Allow to update the rules from a shipping options

- #6977 `bc06ad2db4` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/shipping options api 3

- #7101 `18f3aacee6` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): add create shipment api for fulfillments

- #7124 `38c971f111` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): add fulfillment provider list api

- #6860 `45c49e89f2` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Add workflow idempotencyKey to shared context

- #6982 `528ef4ca90` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(modules-sdk): Select all should send undefined instead of an empty array

- #6962 `65794f4bb5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: Create shipping options API

- #7029 `93ef94cad3` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): create promotion flows

- #6800 `4cf71af07d` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, Band Store): add update stock location endpoint to api-v2

- #7153 `4b57c5d286` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remote query supporting context

- #7028 `c78915c7c5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add support for shipping options prices update

- #7101 `18f3aacee6` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): fulfillment API: create

- #7018 `f175cac4af` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, Band Store, types): add reservation item endpoints

- #6995 `0a9b9b073d` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store, core-flows,types): delete fulfillment set, delete shipping profile

- #6813 `a6562d2a41` Thanks [@sradevski](https://github.com/sradevski)! - Added an upsertWithReplace method to the mikro orm repository

- #7026 `00e6b21bb5` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): added tax flows end to end

- #6865 `8fd1488938` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Band Store shutdown

- #6849 `1c6ba4468e` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remote Joiner options to check if keys exist on entrypoints or relations

## 1.11.15

### Patch Changes

- #6801 `deab12e27e` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(types, Band Store, core-flows): add delete-stock-location endpoint to api-v2

- #6739 `56481e683d` Thanks [@srindom](https://github.com/srindom)! - feat: v2 - add worker mode

- #6796 `9073d7aba3` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): rename psma to prices

- #6748 `05e857d256` Thanks [@sradevski](https://github.com/sradevski)! - Updated the signature of the product module variant and options endpoints to follow our conventions

- #6772 `1ef9c78cea` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: v2 - deprecate extra in favor of driver options

## 1.11.14

### Patch Changes

- #6329 `1fd0457c15` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(fulfillment): Init dtos work and module service interface

- #6678 `d4b921f3db` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,pricing,types): added get endpoints for pricing rule types

- #6474 `ac86362e81` Thanks [@riqwan](https://github.com/riqwan)! - feat(workflows-sdk,core-flows,Band Store,types): add workflow to add promotions to cart

- #6580 `e4acde1aa2` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows,types): add cart <> tax integration workflows + steps

- #6697 `1a661adf3e` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): GET admin promotion endpoint to fetch by code

- #6696 `04a532e5ef` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): remove rules from promotion endpoints + workflows

- #6692 `640eccd5dd` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): add rules to promotion endpoints + workflow

- #6399 `339a946f38` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Initial Order module implementation

- #6507 `ac829fc67f` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(fulfillment): List shipping options filtered by context and rules

- #6630 `d9d5afc3cf` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/fulfillment module soft delete and providers enabled

- #6667 `c3c4f49fc2` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): add automatic-taxes to region + generate tax lines endpoint

- #6648 `9288f53327` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,pricing,types,utils): added price list workflows + endpoints

- #6522 `0d46abf0ff` Thanks [@riqwan](https://github.com/riqwan)! - feat(types): promotion module uses big number

- #6381 `fafde4f54d` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(fulfillment): Module service implementation first iteration

- #6711 `0c705d7bd4` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): split upsert workflow to create and update

- #6408 `1d91b7429b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(fulfillment): implementation part 2

- #6274 `1ed5f918c3` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(cart): `POST /store/carts/:id`

- #6727 `c20eb15cd9` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store, core-flows, types): Add delete-location-level api-v2 endpoints

- #6702 `e5945479e0` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows,types): adds update promotion rule endpoint + workflow

- #6514 `f5c2256286` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): adds update cart API with promotions

- #6524 `62a7bcc30c` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(fulfillment): service provider registration + fulfillment management

- #6700 `8f8a4f9b13` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Version all modules to allow for initial testing

- #6311 `ce39b9b66e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(payment-stripe): new Stripe payment provider

- #6308 `a6a4b3f01a` Thanks [@fPolic](https://github.com/fPolic)! - feat(types, utils): payment module - provider service

- #6327 `4d51f095b3` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, types, utils, Band Store): add user endpoints to api-v2

- #6435 `56b0b45304` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - BigNumberField decorator

- #6698 `cc1b66842c` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): add/remove fulfillment shipping option rules

- #6392 `24fb102a56` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: CartRegion link, definition + workflow

## 1.11.13

### Patch Changes

- #6328 `3fd68d197` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(fulfillment): Initialize models work

## 1.11.12

### Patch Changes

- #6319 `12054f5c0` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/shipping method init

- #5923 `3db2f95e65` Thanks [@fPolic](https://github.com/fPolic)! - feat: Sales Channel module

- #6312 `96ba49329` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Load custom modules by path

- #6263 `45134e4d1` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Workflows passing BandStoreContext as argument

- #6333 `82c728bec` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Allow configuring of staged job polling batch size

- #6272 `e749dd653` Thanks [@riqwan](https://github.com/riqwan)! - feat(types): added computed actions for automatic promotions

- #6218 `884428a1b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Feat: Event Aggregator

- #6197 `d1c18a309` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(stock-location, Band Store, types): add `q` and `order` query parameters to stock locations list endpoint

## 1.11.11

### Patch Changes

- #6094 `68ddd866a5` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils,types): add registerUsages for promotion's computed actions

- #6152 `99045848f` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types,core-flows,utils): added delete endpoints for campaigns and promotions

- #6125 `af7af7374` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,utils): added campaign get endpoints

- #6092 `fc6b1772a7` Thanks [@fPolic](https://github.com/fPolic)! - feat: Payment Module service interface

- #5763 `d85fee42e` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Band Store App loading modules reference

- #6127 `5e655dd59` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Hide repository creation if they are not custom + add upsert support by default

- #6114 `b132ff7669` Thanks [@olivermrbl](https://github.com/olivermrbl)! - Add line items in cart creation

- #6077 `e28fa7fbdf` Thanks [@riqwan](https://github.com/riqwan)! - feat(types): add campaign + promotion operations

- #6110 `a12c28b7d5` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): add promotion list and get endpoint

- #6050 `b782d3bcb7` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils,types): added item/shipping adjustments for order/items/shipping_methods

- #6101 `7f7cb2a263` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(cart): Shipping methods

- #6128 `302323916` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Modules: Workflows Engine in-memory and Redis

- #6055 `ce81cade88` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(cart): Add CartService and AddressService

- #6119 `fd78f5e24` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(cart): Shipping method adjustments

- #6012 `192bc336cc` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(cart): Partial module service implementation

- #6112 `06b33a9b4` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(cart): Line item adjustments

- #6087 `130c641e5c` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Abstract module services

- #6063 `fade8ea7bf` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils,types): campaigns and campaign budgets + services CRUD

- #6059 `8472460f53` Thanks [@fPolic](https://github.com/fPolic)! - feat: add Payment module package

- #6159 `68d8daccd` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types): added buyget support for modules

## 1.11.10

### Patch Changes

- #5943 `6d1e3cc02` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(modules-sdk, types): add initial authentication module configuration

- #5957 `42cc8ae3f` Thanks [@riqwan](https://github.com/riqwan)! - feat(types,utils): added promotion create with rules

- #5858 `355075097` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(pricing, types): add soft deletion for money-amounts
  feat(utils): cascade soft delete across 1:1 relationships

- #5988 `dc46ee118` Thanks [@riqwan](https://github.com/riqwan)! - feat(types): promotion delete / update / retrieve

- #5982 `925feea04` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(cart): Add cart module package

- #5920 `3f6d79961` Thanks [@riqwan](https://github.com/riqwan)! - feat(types,modules-sdk): basic module setup for promotions

- #5768 `c1c470e6b` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(types, pricing): separate internal pricing module types from types module

- #5945 `890e76a5c` Thanks [@riqwan](https://github.com/riqwan)! - feat(types,utils): add promotions create with application method

## 1.11.9

### Patch Changes

- #5752 `079f0da83` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,pricing,Band Store,pricing,types,utils): Price List Prices can have their own rules

## 1.11.8

### Patch Changes

- #5668 `a39ce125c` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(workflows, product, types): Fix issues relating to update-variant workflow and options

- #5713 `18afe0b9a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(stock-location, inventory, Band Store, types, utils): allow buildQuery to take null as an argument in order to prevent default pagination

- #5664 `6025c702f` Thanks [@riqwan](https://github.com/riqwan)! - fix(pricing,types): remove is_dynamic from model + types

- #5711 `fc1ef29ed` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store,pricing,types): rules only gets updated/deleted upon passing an explicit object

- #5709 `0df1c7d42` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(pricing, types): update pricingModule.calculateprices return type to match actual type

- #5536 `dc5750dd6` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,types,workflows,utils,product,pricing): PricingModule Integration of PriceLists into Core

## 1.11.7

### Patch Changes

- #5630 `61aef4aaa` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types): Fix types used in the IInventoryService

- #5498 `1772e80ed` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing,types): price list API + price calculations with price lists

## 1.11.6

### Patch Changes

- #5582 `91615f9c4` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(@band-store/client-types): Fix types and TSDocs
  fix(band-store-react): Fix response type of Publishable API Key's list sales channels.
  fix(@band-store/band-store-js): Fix incorrect parameter and response types.
  fix(@band-store/band-store): Fix incorrect types and add TSDocs
  fix(@band-store/types): Fix incorrect types and add TSDocs

- #5496 `154c9b43b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, modules-sdk, types, utils): Re work modules loading and remove legacy functions

## 1.11.5

### Patch Changes

- #5304 `148f537b4` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store): add migration script for pricing module

## 1.11.4

### Patch Changes

- #5294 `378ca1b36` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing,types,utils): Move calculate pricing query to a repository + rule type validation

- #5281 `69cf7215f` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, types): Mark properties as nullable to reflect their correct types

- #5387 `453297f52` Thanks [@riqwan](https://github.com/riqwan)! - chore(product,types): fix interfaces for product module

- #5301 `66413d094` Thanks [@srindom](https://github.com/srindom)! - fix: move create inventory workflow to @band-store/workflows

## 1.11.3

### Patch Changes

- #5242 `130cbc1f4` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Modules exporting schema with entities and fields

- #5237 `c5703a476` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing,types): addPrice and removePricremoveRules APIs

## 1.11.2

### Patch Changes

- #5214 `1e7db5a5c` Thanks [@riqwan](https://github.com/riqwan)! - feat(types,pricing,utils): Exact match based on context + fallback on rule priority if not

## 1.11.1

### Patch Changes

- #5018 `4fa675ec2` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store, modules-sdk, types): Refactor modules loading from Band Store

- #4961 `6273b4b16` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils, module-sdk, Band Store, types): Extract pg connection utils to utils package

- #4969 `30863fee5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: store List products remote query with product isolation

- #5025 `3d68be2b6` Thanks [@riqwan](https://github.com/riqwan)! - fix(orchestration,link-modules,pricing,types): fix shippingprofile error outside of core + change link alias name

- #4990 `a87d07655` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(link-modules): Fix link module initialization

- #4977 `edf90eecb` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(pricing,types): Add price set rule type

- #5023 `107aaa371` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(orchestration, types): Improve fieldAlias and prevent infinite loop by validating at development time

- #4978 `834da5c41` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing,types,link-modules): PriceSets as an entry point to pricing module

## 1.11.0

### Minor Changes

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Band Store App Loader

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - introduce @band-store/link-modules

### Patch Changes

- #4860 `460161a69` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing, types, utils, band-store-sdk): Pricing Module Setup + Currency service

- #4909 `fcb6b4f51` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing, utils, types): adds money amount to pricing module

- #4965 `66bd9a835` Thanks [@riqwan](https://github.com/riqwan)! - feat(products,types,pricing): allow scoping products by collection_id, allow scoping pricing by currency_code

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Add extra fields to link modules

## 1.10.3

### Patch Changes

- #4788 `d8a6e3e0d` Thanks [@fPolic](https://github.com/fPolic)! - feat(band-store-file-local): local file service streaming methods

## 1.10.2

### Patch Changes

- #4716 `ac866ebb5` Thanks [@adrien2p](https://github.com/adrien2p)! - test(): Test the create product workflow compensation
  fix(orchestration): Fix the transaction state after compensating with no compensation steps in the middle
  chore(workflows): Export and naming
  feat(types): Update product workflow input types
  feat(Band Store): Update product workflow usage and cleanup endpoint

- #4626 `3f3a84262` Thanks [@adrien2p](https://github.com/adrien2p)! - [WIP] feat(types, product, utils, Band Store): Include shared connection for modules

- #4685 `281b0746c` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,workflows,types) Create cart workflow

## 1.10.1

### Patch Changes

- #4654 `8af55aed8` Thanks [@riqwan](https://github.com/riqwan)! - feat(product,types): added event bus events for products

- #4701 `5c60aad17` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store, utils): Allow object feature flags

- #4631 `4073b7313` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(product): Move mikro orm utils to the utils package

## 1.10.0

### Minor Changes

- `ce3f914e0` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Add changeset with minor bump

### Patch Changes

- #4623 `107ae23a3` Thanks [@riqwan](https://github.com/riqwan)! - fix(utils, types, band-store-plugin-meilisearch, band-store-plugin-algolia): move SoftDeletableFilterKey, variantKeys, indexTypes from types to utils

## 1.9.0

### Minor Changes

- #4553 `f12299deb` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Band Store workflows package

### Patch Changes

- #4602 `585ebf245` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(product): Serialize typings

- #4535 `131477faf` Thanks [@riqwan](https://github.com/riqwan)! - feat(product,types,utils): Add tags, types, categories, collection and options CRUD to product module services

- #4504 `caea44ebf` Thanks [@riqwan](https://github.com/riqwan)! - feat(product, types): added product module service update

## 1.8.11

### Patch Changes

- #4503 `d184d23c6` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,inventory,types,brightpearl): update some inventory methods to be bulk-operation enabled

- #4459 `befc2f1c8` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: added collection methods for module and collection service

## 1.8.10

### Patch Changes

- #4098 `499c3478c` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: Remote Joiner

- #4420 `6f1fa244f` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(band-store-cli): Cleanup plugin setup + include Logger type update which is used across multiple packages

## 1.8.9

### Patch Changes

- #4348 `dc120121c` Thanks [@riqwan](https://github.com/riqwan)! - fix(product, types): correct path for migration files + fix types on product module service interface

## 1.8.8

### Patch Changes

- #4211 `d76ba0cd2` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Order edit missing transaction when consuming the inventory module

- #4161 `14c0f62f8` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(product): Experimental product module

## 1.8.7

### Patch Changes

- #3979 `3a38c84f8` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(client-types, inventory, Band Store, types): add additional filtering capabilities to list-reservations

## 1.8.6

### Patch Changes

- #4073 `a86f0e815` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(Band Store): Expose `ioredis` options

- #4072 `6511959e2` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Revert to official Typeorm package

## 1.8.5

### Patch Changes

- #3971 `7fd22ecb4` Thanks [@pKorsholm](https://github.com/pKorsholm)! - Feat(client-types, inventory, Band Store, types): add `title`, `thumbnail` and `description to inventory item and `description` to reservation item.

## 1.8.4

### Patch Changes

- #4002 `0e488e71b` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, event-bus-redis, event-bus-local): Revert retrieveSubscribers as the wildcard prevent us from filtering

- #3981 `d539c6fee` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Bump Typeorm to Band Store fork

## 1.8.3

### Patch Changes

- #3835 `af710f1b4` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Bulk create variant and pass transaction to the inventory service context methods

## 1.8.2

### Patch Changes

- #3785 `4f58ddee0` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,utils): add server level configurable http compression

## 1.8.1

### Patch Changes

- #3778 `654a54622` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Bump Typeorm

## 1.8.0

### Patch Changes

- #3685 `8ddb3952c` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Fix RC package versions

- #3510 `74bc4b16a` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(band-store-plugin-algolia): Revamp Algolia search plugin

- #3531 `4e9d257d3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remove dependency on @band-store/band-store from Inventory and Stock-Location Modules

## 0.0.2-rc.1

### Patch Changes

- chore: Fix RC package versions

## 0.0.2-rc.0

### Patch Changes

- #3510 `74bc4b16a` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(band-store-plugin-algolia): Revamp Algolia search plugin

- #3531 `4e9d257d3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remove dependency on @band-store/band-store from Inventory and Stock-Location Modules
