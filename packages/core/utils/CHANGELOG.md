# @band-store/utils

## 2.22.4

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.22.4

## 2.22.3

### Patch Changes

- #17613 `f0697e1` Thanks @band-store-os-bot! - fix(utils,dashboard,loyalty-plugin): add the Aruban Florin (AWG) currency

- #17619 `4df78b3` Thanks [@sradevski](https://github.com/sradevski)! - feat(auth,types,utils): read the Band Store Cloud OAuth client secret from BAND_STORE_CLOUD_OAUTH_CLIENT_SECRET, falling back to the API key

- #17574 `9692b99` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(deps,caching,framework,types,utils): update awilix to 13.0.5

- #17592 `12a5580` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(utils): update graphql to v17, graphql-tools and graphql-codegen to latest majors

- #17609 `39fb481` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(cli,orchestration,utils,workflows-sdk,test-utils,file-s3,workflow-engine-inmemory,workflow-engine-redis): update ulid to v3.0.2

- #17618 `385c4ff` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: update jest to v30.5.2 and use the `--testPathPatterns` flag in test scripts

- #15620 `a6a4254` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,core-flows,framework,js-sdk,modules-sdk,types,utils,link-modules,rbac): end to end RBAC implementation

- #17619 `4df78b3` Thanks [@sradevski](https://github.com/sradevski)! - chore(auth,notification,payment,types,utils): remove the unused Band Store Cloud sandbox handle

- #17608 `2e3b55d` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows,utils): skip customer account email validation when the auth identity has no email, and add a validate hook to createCustomerAccountWorkflow

- Updated dependencies [`9692b99`, `b1632c1`]:
  - @band-store/deps@2.22.3

## 2.22.2

### Patch Changes

- #17527 `9d55082` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(utils): update graphql to ^16.14.2

- #17533 `26e5807` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(utils): update pg-connection-string to ^2.14.1

- #17575 `2f0b2e9` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(types,utils,dashboard): update bignumber.js to 11.1.5

- #17567 `52caddd` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(deps): update development and test tooling (cross-env 10.1.0, esbuild 0.28.2, tsup 9.0.0, expect-type 1.4.0, @faker-js/faker 10.6.0, jsdom 30.1.3, @types/jsonwebtoken 9.0.10, msw 3.0.3, rimraf 6.1.3, Testing Library, turbo 2.11.10, @types/node 22, boxen 9.0.0, chalk 6.0.1, ci-info 4.4.0, commander 15.0.0, configstore 8.0.0, dotenv 18.0.9, execa 10.2.1, get-port 7.2.0, inquirer 14.2.4, @inquirer/checkbox 5.2.7, @inquirer/confirm 6.3.4, @inquirer/input 5.1.8, is-docker 4.0.0, meant 2.0.1, open 11.0.4, openapi3-ts 4.6.2, ora 9.4.1, @readme/openapi-parser 10.0.0, @redocly/cli 2.71.0, stack-trace 1.0.0, swagger-inline 8.1.0, yargs 18.2.0) and remove unused development dependencies; drop hosted-git-info from @band-store/cli; fix the band-store-oas-cli circular patch recommendation crashing on references nested in inline schemas; `band-store-oas docs --preview` now serves a static Redoc 3 build since Redocly removed `preview-docs`; replace chalk with Node's built-in `util.styleText` in CommonJS packages; replace uuid with Node's built-in `crypto.randomUUID`; replace get-port with a built-in free-port helper in @band-store/test-utils

- Updated dependencies [`26e5807`, `7b34df3`]:
  - @band-store/deps@2.22.2

## 2.22.1

### Patch Changes

- #17459 `3a3207347379b065142895fb0740442fea5f4033` Thanks @band-store-os-bot! - fix(utils,dashboard,loyalty-plugin): add the Haitian Gourde (HTG) currency

- #17441 `d731a694cdb83c158fb78b5d85ecba8909150945` Thanks @band-store-os-bot! - fix(utils): don't create module migration folders when running migrations

- #17440 `ccee953690a41e14e7520e7e2d97272f25d1ff69` Thanks @band-store-os-bot! - fix(utils): copy null-prototype objects and objects with a hasOwnProperty key

- #17464 `c959d5e3e7d4b482d0784eef67ef8ef766442d5e` Thanks @band-store-os-bot! - fix(utils,core-flows): import region price columns written by the product export

- #17451 `3a4fa0cc36a82dba9481e87c20e423cb65c2ee91` Thanks @band-store-os-bot! - fix(utils): ignore non-string ids from linked services when applying translations

- Updated dependencies []:
  - @band-store/deps@2.22.1

## 2.22.0

### Minor Changes

- #17089 `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: drop Node.js 20 support and require Node.js v22.22.0 or later

### Patch Changes

- #17153 `f104453af2c5b235dfdbdaa271c9f8a18195de69` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(utils): bump `@graphql-tools/merge` and `@graphql-tools/schema` to pull patched `@graphql-tools/utils`

- #17099 `dab83ec94a8d60446e15eb982617b7c1cc7589a2` Thanks [@sradevski](https://github.com/sradevski)! - feat(payment): register a Band Store Payments provider per Band Store Cloud payment account

- #17048 `e6510b1f51170834f136e927c3d30e463da32750` Thanks [@fadiroot](https://github.com/fadiroot)! - fix(utils): aggregate promise rejections whose reason is not an Error instead of throwing a TypeError

- #17067 `fdac7de4c3268ccf0f86c47c140662d84c141832` Thanks [@sradevski](https://github.com/sradevski)! - feat(core-flows,utils): emit events for price list changes and product link, variant price and variant image workflows

- #16964 `780a69aad3ea20beadf82e9c5351a6633de45b64` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(payment,core-flows,Band Store,types,utils): let refunds be retried safely with an idempotency key

- #16678 `44db0ca6357ab4d4681a8004e869fde339c3117a` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(Band Store,framework,utils,modules-sdk,test-utils): add license key checks

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- Updated dependencies [`d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a`, `14499a2e9309d653c0e4ec6aec3f88079751b4d2`, `1db74006ede40300afe64970024688a1a9c2a936`]:
  - @band-store/deps@2.22.0

## 2.21.2

### Patch Changes

- #16568 `1ba69082ceb941d47cfe390212f400e39a7166dd` Thanks [@wakqasahmed](https://github.com/wakqasahmed)! - fix(utils): strip g/y flags in buildRegexpIfValid for CORS origins

- #16908 `989880a6c51f3659453473b2a5b068e83ce4fc78` Thanks [@Dextheking1](https://github.com/Dextheking1)! - fix(@band-store/utils, @band-store/band-store): correct misspelled parameter name in getSetDifference

- Updated dependencies []:
  - @band-store/deps@2.21.2

## 2.21.1

### Patch Changes

- #16816 `1c1607cced6c1e552e9e800cf571a2235098d0fd` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(Band Store, utils): apply default http.authMethodsPerActor and gate `/auth/:auth_provider/user` by config

- #16749 `3538aab7bc5fcff61591a83bb98e6643823cb947` Thanks [@yfwmaniish](https://github.com/yfwmaniish)! - fix(utils): compare Date values by time in deepEqualObj

- #16467 `893d96850320f8f00c623c66f46e9fcde5ab1cdf` Thanks [@tushardev-365](https://github.com/tushardev-365)! - fix(utils): make the migration skip flag actually skip migrations

- #16903 `75f3d03b84b1404cc05b9f5f15c6be4a2c2f1d18` Thanks [@sradevski](https://github.com/sradevski)! - feat(utils): extend the `graphSeed` and `graphConsume` search helpers so an index whose documents need more than one `query.graph` read can use them instead of a hand-written `seed` and `consume`: a `context` option forwarded to every read including the catch-up pass (e.g. the pricing context `variants.calculated_price` needs), and a `transform` that receives the whole page, may be async, and marks a row as leaving the index by returning no document for it — so enrichment such as prices in several currencies costs a fixed number of reads per page, and an awaited `resolve_ids` that receives the ingestion context, so an event about a related entity can be mapped to the documents it affects

- Updated dependencies []:
  - @band-store/deps@2.21.1

## 2.21.0

### Patch Changes

- #16762 `cbd48e2e0169ef9c016fb25703ae08d70827ff34` Thanks [@sradevski](https://github.com/sradevski)! - Add search helpers for better DX

- #16674 `ebc8aeea3880dd2531c2536b7e2c762ff7ca2c17` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(product, utils, Band Store): return published products only for tags, collections, categories, and type store routes

- #16342 `b650b6c9a486f50ac437614ba36c7f42a203a458` Thanks [@Arunendra21](https://github.com/Arunendra21)! - fix(utils): honor decimalPlaces of 0 in MathBN.convert

  `MathBN.convert(value, decimalPlaces)` guarded the rounding step with `if (decimalPlaces)`, so passing `0` (round to an integer, e.g. for zero-decimal currencies) was treated the same as omitting the argument and no rounding was applied. It now checks `decimalPlaces != null` so `0` rounds as expected while an omitted argument still skips rounding.

- #16456 `bda24b9725ac697ec5e8f706b503013e20babf12` Thanks [@tushardev-365](https://github.com/tushardev-365)! - fix(utils): title-case script subtags in two-segment locales

- Updated dependencies []:
  - @band-store/deps@2.21.0

## 2.20.1

### Patch Changes

- #16703 `75c26e85f3bebc0c921064e9aa37987a76cc24ae` Thanks [@sradevski](https://github.com/sradevski)! - Remove correlated flag on search until supported

- Updated dependencies []:
  - @band-store/deps@2.20.1

## 2.20.0

### Patch Changes

- #16545 `4857d15bdcaf5a0648e7adc5b0b40312e23b5c02` Thanks [@sradevski](https://github.com/sradevski)! - Remove the in-memory local search provider. Indexes are created only by `db:migrate`, never at application start.

- #16361 `51c48dcb472c3b232b88337030945b2b651e90f8` Thanks [@sradevski](https://github.com/sradevski)! - Add a postgres search provider

- #16559 `4528357cfe3c3bcf76a20b2ac2fe3637fb649a9d` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,utils): add setCalculatedShippingPricingContext hook

- #16457 `693310310610cf439fabb73230187028f2755696` Thanks [@sradevski](https://github.com/sradevski)! - Implement Band Store Cloud as a built-in search provider

- [`b9f3d12440a7f02ec3b68443934195193e4ecba8`](undefined) - fix(utils): compare the credit line total against the currency epsilon by absolute value so a net negative total is not zeroed

- [`7f5bc532f92cd2cacea4c4750f64bc5b337f6f36`](undefined) - fix(utils): add overload for better type check error messages

- #16541 `c1e5a8f63988698df7f92b8f1e75f63ab8fdee64` Thanks [@sradevski](https://github.com/sradevski)! - Drop the previous search provider's indexes when `db:migrate` switches engines.

  Log seed/reindex progress (count, rate, last key) so large catalogs can be followed.

- #16533 `f7317903600e5b64f06c21c29a73e0e569d2fe3a` Thanks [@leobenzol](https://github.com/leobenzol)! - fix(workflow-engine-redis,link-modules,orchestration,utils): fix most flaky tests

- #16429 `2a5dd813a7e1d5094cb81f688e2e9e7cc8fd3543` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,utils): emit product-option-value.updated/deleted events

- #16643 `e01b039f256cb8224dd70a99662a49d0e8cf65d1` Thanks [@sradevski](https://github.com/sradevski)! - Add multiple query support in query.search, move searchMany to provider

- Updated dependencies []:
  - @band-store/deps@2.20.0

## 2.19.0

### Patch Changes

- #16192 `b31b64270e19a785ee1d396766a0e0c0a37f8354` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(utils): show helpful error message when a module's resolve isn't set

- #16308 `be4ccf3f6a5ae40eff1ed55743d3518bdefeb07d` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(test-utils, modules-sdk, utils, Band Store): fix plugin:add for monorepo projects

- #16315 `c13aaa96b3968b7f021131529f630b1de7bd6970` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(product, types, utils, Band Store): optimize migration script for product options

- #16354 `372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(caching,core-flows,framework,query,types,utils): pass non automatically computed tags to various cached queries.

- #16238 `18e02fb06f5c925c0b3ebc1943407bf58f83e7b7` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,dashboard,js-sdk, Band Store,types,utils): support notification preferences for order edits

- #16298 `5f4d93c374b0ad0b0a31e75de98c7557e0415677` Thanks [@sradevski](https://github.com/sradevski)! - Add the Search Module: provider-backed search with an in-memory (Orama) provider, the `query.search` primitive, index definition discovery from `search/`, index migrations through `db:migrate`, event-driven ingestion, and an `/admin/search` endpoint

- #16236 `1fb31df2728659578b2aab697322b80b7501b66b` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): support array and dynamic types for `.json` fields in DML

- #16139 `9fa4bd9eb941a266c560b35683e8230af33a3352` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(fulfillment, core-flows, types, utils, Band Store): support custom delivery address + pass additional data to createFulfillment

- Updated dependencies []:
  - @band-store/deps@2.19.0

## 2.18.0

### Minor Changes

- #15989 `0e7973e2fc3c45da39136cf3f66c90358571ffc5` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): fix delete operation when primary key is not `id`

- #16137 `7d7edad6fdf47ae36c06cd5f5b71232c9d51c70b` Thanks [@sradevski](https://github.com/sradevski)! - Use a BALANCED load strategy for the data

### Patch Changes

- #15948 `b83aeae9b03e52dedbf3cd37be5f838e23875014` Thanks [@KMLnk](https://github.com/KMLnk)! - feat(dashboard,utils,loyalty-plugin): Add Iranian Toman (IRT) to the default currency list

- #16100 `1621e14330fe64a968510991408ace8fdac84ce9` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(modules-sdk, framework): fail early when can't connect to the database

- #15797 `6d1622265c96e2417b64aa69fd867a89522e6b76` Thanks [@BIGSUS24](https://github.com/BIGSUS24)! - feat(dashboard,utils,loyalty-plugin): Add AOA (Angolan Kwanza) to the default currency list and stop the admin region editor from crashing on unknown currency codes

- #15834 `04daac9a7639435a89446578b9012ad0a673ac6b` Thanks [@leobenzol](https://github.com/leobenzol)! - fix(Band Store,utils): defineConfig typed modules

- #15806 `45646168b9769a306c3783fa605a7109f9df4ee9` Thanks [@dosacha](https://github.com/dosacha)! - Prevent nested MikroORM serialization from mutating parent key iteration state.

- #15694 `b18d4de91c2c229ba7a03a9d541e1b8de71f52a9` Thanks [@sawirricardo](https://github.com/sawirricardo)! - fix(utils): apply MikroORM onUpdate hooks before native batch updates

- #15968 `a48e78b953943efd11204f48890608020f7949e0` Thanks [@peterlgh7](https://github.com/peterlgh7)! - join only with link table if only filtering on target key

- #16013 `af4ab2f5f7721f8b99c80158c78fba3b5c4db64d` Thanks [@Venkat-jaswanth](https://github.com/Venkat-jaswanth)! - fix(utils): assign per-adjustment subtotal/total instead of the cumulative running sum

  `calculateAdjustmentTotal` wrote the plural running accumulators (`adjustmentsSubtotal`/`adjustmentsTotal`) onto each adjustment's own `subtotal`/`total`, instead of the singular per-adjustment values. Every adjustment after the first was inflated to the cumulative total; the bug was masked for lines with a single adjustment. The aggregate return values were unaffected.

- #16014 `f85473ca88249bed7bfed81b01326a7abc46ac12` Thanks [@Venkat-jaswanth](https://github.com/Venkat-jaswanth)! - fix(utils): add `BigNumber.toString()` to avoid `"[object Object]"` coercion

  `BigNumber` implemented `valueOf`, `toJSON`, and `[Symbol.toPrimitive]` but not `toString()`, so an explicit `bn.toString()` fell through to `Object.prototype.toString` and returned `"[object Object]"`. This silently broke callers such as `parseFloat(bn.toString())` (returned `NaN`). `toString()` is now the single source of truth for string coercion, returning the same value as the `[Symbol.toPrimitive]` string hint, which delegates to it so the two stay consistent.

- #16141 `7c0f94c207796bc443fd36d3999f1533bba255be` Thanks [@peterlgh7](https://github.com/peterlgh7)! - Always use left joins to avoid entities being hidden in query by a soft-deleted related entity

- #15614 `3382c8189bfc9f44e86123496ef3665e92ac91c9` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,types,utils,Band Store): support global product options in imports

- #15990 `935a14c0098580a2b6ef8af11321e931c8ac80da` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): apply select in strategy for single entity fetches

- #15991 `e78ef6ce51a00e6b303b654c5046cd1e60c8dc68` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows, utils): emit inventory-related events

- #15686 `99f2ea9c85a64a08c56196ba963db2c8dd0b7923` Thanks [@mrpackethead](https://github.com/mrpackethead)! - feat(utils): support dynamic password function in createPgConnection for RDS IAM auth

  Pass `driverOptions.dynamicPassword` and `driverOptions.expirationChecker` through to the Knex connection config, enabling AWS RDS IAM authentication and other rotating-credential patterns.

- #15886 `9cd0501b26c401431a11e0d7f4ae6719100b9296` Thanks [@shafi-VM](https://github.com/shafi-VM)! - fix(utils): do not double-count tax on discounts in refundable_total for non-tax-inclusive items

  `refundable_total` / `refundable_total_per_unit` were understated for a non-tax-inclusive line item that carries a discount (adjustment) and has a pending or partially received return. `setRefundableTotal` subtracted the tax-inclusive discount (`adjustmentsTotal`) and then applied tax to the remaining amount, which taxed the discount a second time.

  The discount basis now follows the item's tax inclusivity: tax-inclusive items keep using the tax-inclusive discount (the unit price already includes tax, and no tax is added back), while non-tax-inclusive items subtract the pre-tax discount before tax is applied once. For example, a non-tax-inclusive item at `unit_price 100`, `quantity 2`, `10%` tax, a `20` discount, with `1` unit requested for return now reports `refundable_total` `99` instead of `97.9`.

- #16123 `70c122753875f3cca03ff49b8a0ea9fe2c5e1165` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(framework, utils): defensive handling of dotted path segments

- #15968 `a48e78b953943efd11204f48890608020f7949e0` Thanks [@peterlgh7](https://github.com/peterlgh7)! - skip self-joins for read-only links in cross-module filters

- Updated dependencies [`d6b2a87da1dbfd065336c80e41cb7c086dc2a340`]:
  - @band-store/deps@2.18.0

## 2.17.2

### Patch Changes

- #15701 `8f2c71222afb2bcd1268438fc5fe9da6a63d7af2` Thanks [@kowalski21](https://github.com/kowalski21)! - fix(utils): add `alias` to `InputOptions` in `defineLink` so two links from the same source module to the same target module can be differentiated

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

- #15085 `b50a9dbaf3eeb29753fa28afbc1b529c44ec5a51` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(payment,payment-stripe,core-flows,Band Store,dashboard,js-sdk,utils,types): introduce async payment methods support

- Updated dependencies [`de58ec503bcd82aae3fe576f9a404c36e2525f4c`]:
  - @band-store/deps@2.17.2

## 2.17.1

### Patch Changes

- #15814 `4f5e1cc97f4511f43cf4790af412781dafb2ba86` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add created_at and published_at to EventMetadata

- Updated dependencies []:
  - @band-store/deps@2.17.1

## 2.17.0

### Minor Changes

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(): allow linking a subset of an option's values to the product

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.17.0

## 2.16.0

### Patch Changes

- #15600 `8a6664d6d445f875f56078fad21fe12a185b9627` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(framework, utils, Band Store): centralize NODE_ENV production check and tighten secret defaults

- [`34450089041ee90ebbeca40ad7977e945a53a7b7`](undefined) - fix(utils): InjectManager error message shows "undefined" instead of "baseRepository\_"

- #15266 `735e0aa51ef64274257057a59046776af54203f4` Thanks [@kzroo](https://github.com/kzroo)! - feat(utils, dashboard, loyalty-plugin): add GMD (Gambian Dalasi) to default currency lists

  Adds a `GMD` entry to the hardcoded currency maps in `packages/core/utils/src/defaults/currencies.ts`, `packages/admin/dashboard/src/lib/data/currencies.ts`, and `packages/plugins/loyalty/src/admin/lib/currencies.ts`. Without it, admin pages that map over `store.supported_currencies` and look each one up — most notably the Regions create/edit form — crash with `TypeError: Cannot read properties of undefined (reading 'code')` when a store has GMD as a supported currency.

- [`dc3e213a3be9d5ae8637863461eab0404bbc0e16`](undefined) - fix(utils): preserve Band Store context indexes on overridden service methods

- [`9f5194267fc5abdece31531af3822b0d05ed1fcc`](undefined) - fix(utils, workflows-sdk, create-band-store-app): correct "occured" -> "occurred" typo in error messages and docs

- [`8b3b9f7dc97731688e4a5f1c0bb2714e00483bc6`](undefined) - fix(product, utils): Support non-Latin characters in product handles

- [`801dbdb2ae70152aaa5917590885bd36bd44efc4`](undefined) - fix(utils,product): handle array of mikroORM entities serialization and fix variant image assignment serialization issue

- #15595 `beb1b5e6bcbfeda02659cbaa0e04d5dbc1ba64cd` Thanks [@leobenzol](https://github.com/leobenzol)! - feat(Band Store,utils): plugin type augmentations

- [`1c5ce279aaf792789be371fae70ca304f710cb73`](undefined) - fix(promotion): prevent negative taxable base when stacking tax-inclusive and non-tax-inclusive promotions

  The applied-promotions accumulator stored adjustment amounts in each promotion's own tax base, so a tax-inclusive promotion compared its remaining applicable amount (incl-tax) against amounts a previous non-tax-inclusive promotion recorded excl-tax. The mismatched bases let the combined discount exceed the line item value and drive the taxable base negative. Applied amounts are now tracked tax-exclusively and converted to the promotion's base before being subtracted, for both `each` and `across` allocations.

- [`18474de124868370298addf195e5229ca6792f81`](undefined) - chore(product, order, utils, deps, index): update MikroORM to v6.6.14

- [`14af163eae35be9a204f37c5a87d0b2b59b14054`](undefined) - fix(utils): preserve auth MFA defaults when auth options are customized

- Updated dependencies [[`456813f8b36ab1086dec09c6a89655d7ab0bae5b`](undefined), [`18474de124868370298addf195e5229ca6792f81`](undefined)]:
  - @band-store/deps@2.16.0

## 2.15.5

### Patch Changes

- #15496 `ace1822bccbb21afa533665937460140e36aa995` Thanks [@christiananese](https://github.com/christiananese)! - Add auth verification primitives for emailpass.

- #15493 `c8e37903177c2551ec27ba5f881804e351e819c4` Thanks [@christiananese](https://github.com/christiananese)! - Prepare new Band Store apps for admin MFA

- #15495 `8122633a8b33164a6094f5a39896e356efde1747` Thanks [@christiananese](https://github.com/christiananese)! - feat(auth): emit MFA lifecycle events

- #15518 `c7258f2ca2da8c09df430d81121ea8eae7f75cd9` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(utils): add mfa to inline snapshot test assertion

- #14593 `538f98da78ae2d741f1182e6ef315ba8efac6911` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,framework,rbac,js-sdk,types,utils,Band Store): rbac admin dashboard utils

- Updated dependencies []:
  - @band-store/deps@2.15.5

## 2.15.4

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.15.4

## 2.15.3

### Patch Changes

- #15275 `3063ea20314843c23ad8077ce5e2f5c01ce2c54c` Thanks [@Suh0161](https://github.com/Suh0161)! - fix(utils): implement tokenized free text search to support multi-word queries across different columns (e.g. first + last name)

- Updated dependencies []:
  - @band-store/deps@2.15.3

## 2.15.2

### Patch Changes

- #15382 `9990b69ab76f1a575c6a68875627d16764cc1564` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): disable generating snapshots on running migrations

- Updated dependencies []:
  - @band-store/deps@2.15.2

## 2.15.1

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.15.1

## 2.15.0

### Patch Changes

- #15293 `75b23ffcdf5afeedb5321689cbd844342f218846` Thanks [@Chicolll](https://github.com/Chicolll)! - fix(utils): preserve casing in toCamelCase for PascalCase identifiers with digits

- #15013 `667f3e213d847e2a44ba486522f9fb7b36c69e9a` Thanks [@asynchroza](https://github.com/asynchroza)! - fix(utils): skip empty string translations when applying locale

- Updated dependencies []:
  - @band-store/deps@2.15.0

## 2.14.2

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.14.2

## 2.14.1

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.14.1

## 2.14.0

### Patch Changes

- #14309 `843dbfe7c8f27b732486c7a8da7b6d63f2fdf967` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): upgrade zod to latest

- #13975 `67499a8aa6b3b53cbdecb5be9fcc358b4e466696` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(currency,payment,pricing,region,order,store,cart,core-flows,Band Store,utils): repo wide currency_code normalization

- #14650 `965adfe2fc15a024270ac384f819479e8b274e10` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(view configuration): Generic introspection and generation

- #14711 `9e145bfb27cb5792f7b8d1331f2b076fb00355d9` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(loyalty-plugin,Band Store,utils): open source loyalty plugin

- #14436 `32533eb829d904d4c1a89c841f06d9c209460ac7` Thanks [@bhagwatiprasad](https://github.com/bhagwatiprasad)! - fix(Band Store, utils): add delay between module migrations to prevent timestamp collision

- Updated dependencies []:
  - @band-store/deps@2.14.0

## 2.13.6

### Patch Changes

- #15018 `62e0760a2ad032c9f7ef219968d667193bf3c4a1` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: update mikro-orm to 6.6.10

- Updated dependencies [`62e0760a2ad032c9f7ef219968d667193bf3c4a1`]:
  - @band-store/deps@2.13.6

## 2.13.5

### Patch Changes

- #14932 `4eee16b932f4b532f81db2739194ed5d2b47f3ea` Thanks [@peterlgh7](https://github.com/peterlgh7)! - use in-memory modules if REDIS_URL unset

- Updated dependencies []:
  - @band-store/deps@2.13.5

## 2.13.4

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.13.4

## 2.13.3

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.13.3

## 2.13.2

### Patch Changes

- #14720 `f37f029799cad7ee0337aeab625df5e272de2363` Thanks [@arjusmoon860](https://github.com/arjusmoon860)! - feat(dashboard, admin-bundler, utils, types): add configurable maximum file upload size

- #14565 `d0e6f710c3f8305b58ac39131a125274987cae05` Thanks [@Mohammed-AlSharafi](https://github.com/Mohammed-AlSharafi)! - fix: Prevent translation crash when entity contains arrays of primitive values (e.g. strings)

- #14665 `77d899e135ed75668ca7d7b01a8ed4f0c1fe0ac8` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: add forbidden error 403

- Updated dependencies []:
  - @band-store/deps@2.13.2

## 2.13.1

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.13.1

## 2.13.0

### Minor Changes

- `a31e72c31c5235240cead2d04e39e5927688eec7` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor bump

### Patch Changes

- Updated dependencies [`a31e72c31c5235240cead2d04e39e5927688eec7`]:
  - @band-store/deps@2.13.0

## 2.12.6

### Patch Changes

- #14478 `13476988763368b3b333fa5bc3f613e8eb174fdf` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/enable event configuration in Band Store config
  enables event priority configuration through the Band Store config, allowing users to configure event processing options (like priority) for specific events at the module level.

- #14477 `55d2a704700433c34edd0f7f10dfd042d2f9333a` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(config): Default event worker concurrency to 3 on cloud

- #14595 `39b9f84affcdda267bca0ee486825daca2e4a896` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore/reset event worker concurrency to 1

- #14519 `41e1d5e5066719569d4f639415d3d1fdae1ddc0b` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): fix import of caching and translation modules

- #14359 `cec8b8e428131d4743d6da98cd5fa0974b8ab9e1` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,types,utils,Band Store): Translate tax lines

- #14576 `95e9dfdcaf008b86e2ed3d1ad273b369776bc90e` Thanks [@riqwan](https://github.com/riqwan)! - fix(utils): support both path and parentPath in migration file

- #14441 `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(deps,framework): add zod as framework dependency

- Updated dependencies [`1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b`]:
  - @band-store/deps@2.12.6

## 2.12.5

### Patch Changes

- #14494 `08c55e703573f3c11532228d2c626f7b7f16228f` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(DML): Add a new translatable property modifier applicable on text

- Updated dependencies []:
  - @band-store/deps@2.12.5

## 2.12.4

### Patch Changes

- #14388 `bf4cc12545edc5bf249edc6ecec115c5f7a2b31f` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,utils): Shipping options workflow events emission

- #14395 `001923da2bbebb3d42373f0f66e517830d9c0187` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add Band Store Cloud auth provider

- #14417 `43305a562cfba914654da056b0a7e03c40849678` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,utils,core-flows): add reset password metdata

- Updated dependencies []:
  - @band-store/deps@2.12.4

## 2.12.3

### Patch Changes

- #14225 `b3cb904e9bce3bfad649e500a9e1be0c9bff0e1a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(utils): currency epsilon

- #14315 `d813fc4ff91e98b475a4eae11780ddc00caf66a8` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Migration generator fix generated import

- Updated dependencies []:
  - @band-store/deps@2.12.3

## 2.12.2

### Patch Changes

- #14237 `4dbf46f2cb64240092843ebfdef766ec5b2a7116` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(utils): avoid inflating refundable_total for tax inclusive pricing

- #14277 `a78f68fa46dceb8e201fe60e770bd9ea654390d8` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils,core-flows): add events constant for translations and use it in workflows

- #14074 `fe49b567d6d55ae224095c06c710d31d40887653` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Backend HMR (expriemental)

- #14218 `b517137466726c15d5e31ab0c9f42aa57af90c4e` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): fix error when generating migrations for a module with existing snapshot

- #14190 `fd3965974dc0b750d377ff621387d34611760957` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Pluralized props for list readonly link

- Updated dependencies []:
  - @band-store/deps@2.12.2

## 2.12.1

### Patch Changes

- #14196 `391d8dc6cd50c79b678059fdeb7774a72e243143` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): event emitting

- Updated dependencies []:
  - @band-store/deps@2.12.1

## 2.12.0

### Patch Changes

- #13306 `78842af1c30de9c7561f10b4129aba4e1f30db27` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix: Compute "virtual" adjustments for order previews

- #13760 `536a3f802c92960b1eab48c37db25a8c542fd231` Thanks [@fPolic](https://github.com/fPolic)! - feat: promotion usage limit

- #14036 `e59cdae3365981339d55ec01224f09995250e67d` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Proper schema usage when running migrations

- [`9d9d0397a88c398683f75ac3d6f539c1a686d278`](undefined) - fix(): Index integration tests flackyness

- Updated dependencies []:
  - @band-store/deps@2.12.0

## 2.11.3

### Patch Changes

- #13910 `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Dependencies cleanup and improvements

- #13940 `afb40d437b3cc4ceb015df70985b2f005f40eaff` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Cleanup and organize deps

- #13938 `e66f7cf59e516f12e5446e191e9fdd1aede9c8ab` Thanks [@peterlgh7](https://github.com/peterlgh7)! - quote column names in created indexes

- #13932 `37563987b8fe75c9acfe62957a33e8398977647a` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Fix dependencies vulnerabilities

- #13898 `13d7d15be594ca413785eebe8f86b47c36cb9830` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(modules-sdk): parallel migrations

- Updated dependencies [`224ab39a81e8d3cf3d6fa3ff5eee82541f64728d`, `afb40d437b3cc4ceb015df70985b2f005f40eaff`]:
  - @band-store/deps@2.11.3

## 2.11.2

### Patch Changes

- #13781 `cc2614ded7f83cdbe7e7f7f809d05f5ab6059fe4` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add Band Store Cloud Email provider

- #13911 `66bbe39a8ee812ae88b7f06f7d911b8254b1c87e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Throw on migration up/down fail

- #13913 `c9701c70da33bb81aca1560ac5b96ea53fb61060` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(utils): db migration big number default value

- #13893 `6d7ba778f5ace76350ac6f249b855b21fb43a03e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Generate migrations with correct mikro orm import path

- #13879 `1defb3c29bfe018fd5f89b5a9e27fc8a31d72cdd` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Inject sandbox handle in cloud config

- Updated dependencies []:
  - @band-store/deps@2.11.2

## 2.11.1

### Patch Changes

- Updated dependencies []:
  - @band-store/deps@2.11.1

## 2.11.0

### Patch Changes

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- #13703 `c61f3150c138de016c6886e79d79984bc267273c` Thanks [@willbouch](https://github.com/willbouch)! - fix(Band Store,utils,types): inventory management nullable

- #13585 `45f180a2b558edcf69603f3d8da983e92c4e212d` Thanks [@aldo-roman](https://github.com/aldo-roman)! - Fix autogenerated type for float attributes

- #13451 `7dc3b0c5ffdf8eb7070ee5cfd8155c6c4de5c0b1` Thanks [@fPolic](https://github.com/fPolic)! - feat: support limiting promotion usage by attribute

- #13435 `b9d6f73320c36c53235b12fb8397b30a448917f0` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(): distributed caching

- #13663 `51859c38a728c5f05cf30f09f4c6a55657895de7` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Default caching configuration and gracefull redis error handling

- #13680 `41651721450c99e5f38cfbb87a6a47ab067ece86` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Test strategy

- #13724 `a61d1825eaef4bece20704fe6ae21d9da841b2f2` Thanks [@willbouch](https://github.com/willbouch)! - fix(utils,core-flows): fix import erasing tags, categories and others

- #13450 `8ece06d8ed6a197ebb370918c49a3ec5c21dd186` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Upgrade mikro orm 6.5.4

- #13580 `fc67fd0b36f53f0c0897df54ecea02061e65e816` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(utils): make upsert with replace more efficient

- #13712 `c54c5ed6de2c9686f89aeef86c5c607c4b5f1cf3` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): improve cart operations + Mikro orm 6.4.16

- #13568 `92d30b28f45b4037cd73c180c8f257070cf49bd4` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): remove ssl_mode from url and also use sslmode

- Updated dependencies [`0cbd9f0bc315b3eda1770ac301061f1576856387`, `12a96a7c7015f011f5e29a1d387f835e514ba536`, `41651721450c99e5f38cfbb87a6a47ab067ece86`, `fc67fd0b36f53f0c0897df54ecea02061e65e816`, `c54c5ed6de2c9686f89aeef86c5c607c4b5f1cf3`, `02b6d013822b9665f868c4ea6d1b5cfe58723459`]:
  - @band-store/deps@2.11.0

## 2.10.3

### Patch Changes

- #13516 `25634b038248ab6501af719faec79b59b496bada` Thanks [@adrien2p](https://github.com/adrien2p)! - test(): test dynamic max workers and improve CI

- #13497 `9563ee446f2b3a2e0cd4a4a33959ed55be5f268a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(utils): subtotal calculation discounting returned items

- Updated dependencies [`2a29c6f82c73ff6720cc21e885125c984419226c`, `9563ee446f2b3a2e0cd4a4a33959ed55be5f268a`, `88748ba09d6578608d3d9858718fbbfba956f67b`]:
  - @band-store/types@2.10.3

## 2.10.2

### Patch Changes

- #13296 `e8822f3e693bde33fdfd8b0d6140b4e59b40af98` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Module Internal Events

- #13312 `b4c0f131b70ba950339c1ca4d81b5ce062a588a3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(framework): load custom flags before Band Store config

- #13394 `faae150a589bb29d08719ebb1d2617234e1f5e3a` Thanks [@willbouch](https://github.com/willbouch)! - fix(utils): big bumber should give numeric value of 0 for small numbers

- #13413 `55a35e47218c65190e36a1a6088031890edc1b14` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(workflows-sdk, utils): Prevent unnecessary serialization

- #13325 `b85a46e85bb741b942e7fa23bef48f447d2b7c5a` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore/faster serialization

- #13421 `8e5c22a8e8c54daa313b4685e453e49699d75e9a` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve workflows sdk tooling

- #13313 `2f6edf367abb9d3e71f398c3b98a749b73517ea6` Thanks [@willbouch](https://github.com/willbouch)! - feat(dashboard,cart,types,utils): refine order details summary

- #13458 `0700a2448c54438482cd3b422e66c591bc5c1df8` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Remove extra manager fork

- #13462 `823a5c75ff97cf0acbd4ddf00f43ab3b49f0f210` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/order module index

- #13178 `1b681a79da02aec3f872baa2213a4b2423d73e97` Thanks [@Amirkhon](https://github.com/Amirkhon)! - feat(dashboard,currency): added Tajikistani somoni currency

- Updated dependencies [`0000ed69982b95f4bff80fd6182347291d25f7b8`, `d7692100e7a2b2f078756cac9ca2b33784d3d1ff`, `6634765cedc68f605f005766845350d611db142c`, `2f6edf367abb9d3e71f398c3b98a749b73517ea6`]:
  - @band-store/types@2.10.2

## 2.10.1

### Patch Changes

- Updated dependencies []:
  - @band-store/types@2.10.1

## 2.10.0

### Minor Changes

- #13225 `fd4e79142880f1b2da63a38adef8c647da9c48e4` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(utils): auto generated update method return

### Patch Changes

- #13283 `e413cfefc2e0579ba7c5299dc4f4270310e39c2c` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: define file config and improved feature flag support

- #13199 `3cc512ef39b6d64b1fe04c1bcdb2e23fa03526f6` Thanks [@riqwan](https://github.com/riqwan)! - fix(utils): fix promotion case of each allocation not applying its amount

- #13314 `cbaa40374480a6254d9e568c3003517308be0a44` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Enable draft order plugin by default

- #13200 `cbfe646ce14d8436adbaa72cda95d38e6cdcd908` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(utils): round to zero promotions and credit lines

- #13281 `fc4925327334c540c0125a91e81794c3c1f340e7` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(core, event-bus): Compensate emit event step utility

- #13156 `e2213448ac9eb93318570fde2807a3036108d44b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: custom logger on band-store-config

- #13191 `34c3c14e0a1491ab80473605018b97981544167d` Thanks [@willbouch](https://github.com/willbouch)! - chore(types, api): support shipping option type api endpoints

- Updated dependencies [`486621383a79e83c831933c1a0ffdae58a695cb0`, `2f594291ad8d227b499b80a5bfe66f5963d42d6a`, `e413cfefc2e0579ba7c5299dc4f4270310e39c2c`, `67d3660abf3ceeac3f04006fe5e92d2fa7c0ccad`, `9412669e654c994e2dbee9cf61c18004d79f6475`, `f764b3a36471a0ad9e9e05f125183464680e3a2d`, `fc4925327334c540c0125a91e81794c3c1f340e7`, `e2213448ac9eb93318570fde2807a3036108d44b`, `34c3c14e0a1491ab80473605018b97981544167d`, `492e0189573ffad4977a3559d71f39bf94d8b45d`, `6264a6262b0220c70ad35c0d56a93a39218ccb80`]:
  - @band-store/types@2.10.0

## 2.9.0

### Patch Changes

- #13145 `a52708769da675e2ade6cb6fe28e1cd9741c562d` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(utils): avoid limit precision for promotion value

- #13131 `51d4751d9502c0996ee5640f29d0253da980082a` Thanks [@scherddel](https://github.com/scherddel)! - Fix on precision for high quantities for items when promotion is applied

- #12960 `1bdf602f1c1da181e2839858d2f7e8aea503573a` Thanks [@scherddel](https://github.com/scherddel)! - This fixes the discount\_ calculation logic and promotion tax inclusiveness calculation

- #13106 `9766570827ebf50d49d8daf956deecce6666a8cc` Thanks [@scherddel](https://github.com/scherddel)! - Moved calculation logic from total to original_total to ensure consistent base values

- Updated dependencies [`f1da73cb588a45afdeb80572d7d59987b5559252`, `1bdf602f1c1da181e2839858d2f7e8aea503573a`, `9766570827ebf50d49d8daf956deecce6666a8cc`]:
  - @band-store/types@2.9.0

## 2.8.8

### Patch Changes

- #12969 `7669dbb03e2f65fa76cff1c5b90a0777e475cb47` Thanks [@juanzgc](https://github.com/juanzgc)! - fix: accepted values in import with template

- Updated dependencies [`468b81c2cbdbc24b26e31bf6e347d3633a4fb4f8`, `919c53e44e2c7bb16bc513b5c96c93ac47bd6ce5`]:
  - @band-store/types@2.8.8

## 2.8.7

### Patch Changes

- Updated dependencies [`42be9a88d61a11db7aebde2d6f4d96d43f54ea79`]:
  - @band-store/types@2.8.7

## 2.8.6

### Patch Changes

- #12834 `95d282e8ef8f2185737d493dea8b6f1677684543` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/test utils events

- Updated dependencies []:
  - @band-store/types@2.8.6

## 2.8.5

### Patch Changes

- #12715 `ab634a14ba709f1b1d12eb4cd5c7f3db6bfe6470` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(utils): Band Store internal service returned data should match typings

- #12803 `ba1e6595b74ae69f4ee066d545f8def8aff77dd3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(payment): round currency decimal precision

- #12713 `cbf3644eb7c8a24eaed879647b58c9ece3373c0e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Add retry strategy to database connection

- #12813 `d517dbd66a47817d1270c278b03add9a5c4244cb` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add support for jwt asymetric keys

- #12412 `2621f00bb035a6b909f9498a2bc98fdba8570ba9` Thanks [@fPolic](https://github.com/fPolic)! - feat(promotion, dashboard, core-flows, cart, types, utils, Band Store): tax inclusive promotions

- #12795 `316a325b63e92003df25452faf88e577e9133064` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(workflow-engine-\*): Cleanup expired executions

- Updated dependencies [`6ca755ede7bfe3211464447412ca0d97e1207742`, `d517dbd66a47817d1270c278b03add9a5c4244cb`, `b316924572fc2cf529e0d91b84955da20b34248a`, `820a936b9836ae83e7a45de1e1ed0488d8cde2fd`, `44d1d186890cd44b20e41b60d1e217bc3d4b2a51`, `2621f00bb035a6b909f9498a2bc98fdba8570ba9`, `bd6d9777c50d69115a20334a103a8ab9997b259d`]:
  - @band-store/types@2.8.5

## 2.8.4

### Patch Changes

- #12614 `791276e80f5745c8885352b7979c0faa979110f4` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: introduce bulkDelete method for IFileProvider

- #12636 `3d65807d9924c057ccce6ccaf1c6e0eee8e7c245` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): export payment events in core flows

- #12592 `f6f34cc0e419a0c4be0971f13eb59b2a1e3aa31d` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: module import paths to contain unix slash

- #12646 `490bd7647fca30951d14c7c78c1b809379ebd870` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(core-flows): use cart_id to complete cart on payment webhook and lock cart before completion

- #12574 `cf0297f74af1b043363ffbd5a23ca0933097a69d` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: implement stream based processing of the files

- Updated dependencies [`791276e80f5745c8885352b7979c0faa979110f4`]:
  - @band-store/types@2.8.4

## 2.8.3

### Patch Changes

- #12501 `59bbff62d81861282d55a32d6c0c45285203c4e0` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(index): limit partition table name and index enum fields

- #12518 `85d2b3c992cf361a9a18a14659484c57f4923197` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(utils): Missing zod deps

- #12478 `c5a6573e26b403b86f53b88c307ea311a1bd9230` Thanks [@fPolic](https://github.com/fPolic)! - fix(product, utils): handle metadata key deletion on product update

- Updated dependencies [`4e49cebcf0f053cb89012276e935a7ec62a12046`, `59bbff62d81861282d55a32d6c0c45285203c4e0`, `52bd9f9a53f6e63e5fbe0beb1fb2c650d88f7c88`, `ebe5cc7acddb7c61dc82fd8ec7f2fe3779104a99`]:
  - @band-store/types@2.8.3

## 2.8.2

### Patch Changes

- #12473 `e149a998862272fff80573a623c4d9010cb0b104` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: define validators and use normalize-products step

- Updated dependencies [`b2984f48f5fcf535177c98e921baa58fcf45bbe5`]:
  - @band-store/types@2.8.2

## 2.8.1

### Patch Changes

- #12396 `4602163b568962f8115b83971d67a6c55c2b8a98` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: create CSV normalizer to normalize a CSV file

- #12486 `142a1f0a5be60d2cc013ecb174bca7b1381c6551` Thanks [@peterlgh7](https://github.com/peterlgh7)! - fix returned updates order in upsertWithReplace

- Updated dependencies []:
  - @band-store/types@2.8.1

## 2.8.0

### Patch Changes

- #12338 `a53d645f8aab30135baebac29f9645dd35d47632` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows,utils): move fulfillment workflow events

- #12320 `89859987565b1fc872c7cd1c6d23144b97f454bc` Thanks [@fPolic](https://github.com/fPolic)! - feat(core-flows,utils): add Order Edit events

- #12425 `fff285f8d2f3020a24b83066fa4250130fdcf229` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(core-flows): Emit cart trasnferred customer

- #11898 `b868a4ef4deb7df09d6156a907f4c883cd55a3fd` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(index): add filterable fields to link definition

- #12418 `9d4bc81d0f1ac1614ab1ffb95d708f622c836ceb` Thanks [@Betanoir](https://github.com/Betanoir)! - fix(plugins): plugin admin folder loading with backslash on Windows

- Updated dependencies [`9cedeb182dc19d6127b602fc06e4b8850490e2a9`, `b868a4ef4deb7df09d6156a907f4c883cd55a3fd`]:
  - @band-store/types@2.8.0

## 2.7.1

### Patch Changes

- #12157 `2f6963a5fbea05537680cb1b1f6a2b9822c36325` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: event group propagation and event managements

- #12140 `b8902637251e9ed4f8762ef280659bbab6d967de` Thanks [@thetutlage](https://github.com/thetutlage)! - Add support for dynamoDB for storing sessions and some types cleanup

- Updated dependencies [`e180253d608103cd8dfba8fddd3af2ba6ff2455a`, `2f6963a5fbea05537680cb1b1f6a2b9822c36325`, `b8902637251e9ed4f8762ef280659bbab6d967de`, `1f73281ab88c064404ecf7cc9dd0977dfd369723`]:
  - @band-store/types@2.7.1

## 2.7.0

### Patch Changes

- #12097 `74381addc3d6af42f0292e778948aabb60a6dad9` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Emit events in batch and index process event ids in batch

- #11720 `ec56a8bc857a74788df6523af25914da95c4c1d8` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(Band Store,utils,test-utils,types,framework,dashboard,admin-vite-plugin,admib-bundler): Fix broken plugin dependencies in development server

- #11771 `72d2cf92075b3e0849251f233517e2972de1b19c` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: workflow retry interval race condition

- #11767 `cae47d9e49e9a17d8395f7b390f6ec0a2f9b8dc2` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: add check for uniqueness when creating links with isList=false

- #12017 `79cfc1a69ee166fec298aa706b994253a1284520` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(utils): Enable Redis locking by default in Cloud

- #11802 `375c4a5ab1b2805ef2a3d792327c325fa11740a5` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: use module name as the snapshot name

- #12025 `2f7eb0ee030966844b45dd00b2259e68b9fb0e83` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: validate module names to disallow unallowed characters

- #11872 `9dd62d93bd9e2acccc2e9f22bc029fd2b0df3234` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,types,utils): make payment optional when cart balance is 0

- #11992 `c870a7a1baf7db748a831265f06dd4b7378b262e` Thanks [@riqwan](https://github.com/riqwan)! - fix(promotion,utils): fix case where multiple percentage promotions werent applied

- Updated dependencies [`74381addc3d6af42f0292e778948aabb60a6dad9`, `ec56a8bc857a74788df6523af25914da95c4c1d8`, `95e89a39f347c8af6a5960943af56965bc3a07ba`, `c3440e5e3812e3d1c6b82e9d4e41287398451611`, `3dba58785fb2d8e79f1ea89daa9e4ab8810821c8`, `0625f76cd4f040963829b61dcc70563e1d1b7070`, `0cc306bf562d8f1f1f1c09d9658463e2c8def465`, `cb6249320e7322e8eabfec8434f1278f8d63e96c`, `1f8fab36361aa8e473ffe6c411c8598a916a6d3f`, `13e159d8ad7ebb3e6977969b4bb10877d7bb7850`, `9dd62d93bd9e2acccc2e9f22bc029fd2b0df3234`, `9ac74eead4760d6c92676d451e6f25c2305b1852`]:
  - @band-store/types@2.7.0

## 2.6.1

### Patch Changes

- #11738 `3b470f41427e487c68f89b8ee8155de716ffe861` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove ranges on Band Store packages

- Updated dependencies [`b7678983a9b3e5c4d88282054b37b6c517329bd7`]:
  - @band-store/types@2.6.1

## 2.6.0

### Patch Changes

- #11585 `eeebb35758ea443468dd2355a7ea761dfe24babc` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(product): Remove upsertWithReplace where needed

- #11636 `ca6a15717d05de112ca00ca56d65beb2ab0f2598` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Add support for extra pool configuration

- #11618 `d254b2ddba3fba4fb60e1076a6bc4e7d425bbd30` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve cascade soft deletetion and update

- #11601 `b42f151be31161a5d7a73132ee6794b990403d76` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve internal repository delete algo

- #11693 `ab96ad3b8213b117b067ae0ab66b94f74b8bd031` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils): add error message when manager is not found

- Updated dependencies [`8bb0a25f573c62ca1d1bcd7af184b0d0cf98e125`, `698a520729a3045cd13eed5ee0e5120a563e9261`, `51b0af193c7dde4899a696a515b59373b465d907`, `93cbc6b6695f236fa39b66169de971228888f1b9`, `d1efad9bf05ca80959e8b50d74b74167fc1b0064`, `d814d9540e76256be23d733b73cf5a63aa380c8b`, `b42f151be31161a5d7a73132ee6794b990403d76`]:
  - @band-store/types@2.6.0

## 2.5.1

### Patch Changes

- #11399 `d1cbe4c61ed99bbeccf1be49721e0aa7b74edd71` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: relationships to accept ids

- #11469 `63f0774569643ffe473daef2fcfd8944954d72c0` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils): Backport metadata management

- #11400 `d6c03ee5427457237e3c739545a8816cc3a3198e` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(utils): custom linkable keys

- #11431 `448dbcb5963c732c9c3b822b81330556bcf883cd` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): index engine feature flag

- #11468 `32c5015f563b7d60221a472635b44820fe4ef1f6` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: generate posix paths for migrations

- Updated dependencies [`22276648ad0aef12206464b555efdce97e316bb4`, `d1cbe4c61ed99bbeccf1be49721e0aa7b74edd71`, `1a3843a92a6db83b9249e9c0aece7b3d13a600a9`, `3b4997840e624ef8da1a75744b4bfb5c5a371f7c`, `0c957350a6688c78572361b51c1f16a452a31aed`, `065df75e7d5b90a4de43873d8c08e1aab65e3fd7`, `47edd01deec79b394552cea349f1e41b7b88723b`]:
  - @band-store/types@2.5.1

## 2.5.0

### Patch Changes

- #11344 `cb0f065c9dd59fe54a52c337f9b5392723f9db58` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): add static identifier to AbstractNotificationProviderService

- #11216 `016e332e9b98f316cded6eb999927fc942ce56c5` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: make AbstractModuleService create method type-safe

- #11178 `a33aebd8957f4bab10afd5e50a810cf738879b0d` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(indes): full sync

- #11188 `c9821171866a5a66ce5b7f0b8a414de48dbcdc7e` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: always load .env file alongside the environment specific file

- #11388 `244cd714b2e8dc742afbefd0d175649f8fc45eed` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: add foreign keys to the generated query types output

- #11295 `3c51709daf07dcdd5563fa08fec2446a42cc8058` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: map container types for core services to interface

- Updated dependencies [`6db96c80d05730a9188937599baba2602f4e2a92`, `9f1a3b2a4214ef23a22972e6d28c5f43f87da353`, `65fae943c9d919f658c8660e5b46626c1b302e31`, `f07af7b93c86673e730dc4e5eba8df2572013f9f`, `3c51709daf07dcdd5563fa08fec2446a42cc8058`]:
  - @band-store/types@2.5.0

## 2.4.0

### Minor Changes

- #10292 `cc73802ab3821d2c667942bd887efb7476205547` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: upgrade to mikro-orm 6

### Patch Changes

- #11136 `a76208ed0217e5a3993d48e1884e855966691fd8` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(utils): patch unique index migration

- #11047 `ecc8efcb049f5c77cb7e38c2b6a273860590a5f4` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(event): Subscriber ID missusage

- #11048 `da3906efa42ee729c11696e2d3255a60ac3fa958` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: Unique constraint should account for soft deleted records

- Updated dependencies [`d4e042e9ad838cfc3b3c83c342afaf76adb281d2`, `cc73802ab3821d2c667942bd887efb7476205547`]:
  - @band-store/types@2.4.0

## 2.3.1

### Patch Changes

- Updated dependencies []:
  - @band-store/types@2.3.1

## 2.3.0

### Patch Changes

- #10880 `67782350a9da278457c3280c300ebec65bdc6326` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: add default retry strategy for redis

- #10950 `5eab9e739919594ae7e7e416942ec93d84b699fd` Thanks [@riqwan](https://github.com/riqwan)! - feat(promotion,dashboard,types,utils,Band Store): Add statuses to promotions

- #10895 `c1930bd6568043d145e34d8360015e7207e18e4a` Thanks [@thetutlage](https://github.com/thetutlage)! - Feat/merge plugin modules

- #10874 `28febfc6438351fddb5b214b86f96aff89db688e` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: remove dead code and refactor the logic of resolving plugins

- Updated dependencies [`ff725090bb4ec848cb82c5411bdc25c4b72252ab`, `5eab9e739919594ae7e7e416942ec93d84b699fd`, `c75678d6d41d3b88d07681ad7e24472d6cbde672`, `c1930bd6568043d145e34d8360015e7207e18e4a`, `28febfc6438351fddb5b214b86f96aff89db688e`, `bc22b81cdf9591912744f448c74d45bcb0f11e0c`]:
  - @band-store/types@2.3.0

## 2.2.0

### Patch Changes

- #10791 `ecc09fd77db01fcb7e8eb8e60cd19e16e2b5ea81` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: generate modules mappings at runtime

- #10768 `bbf790ea44d0ce0a128a07e66224735f5a2dccf0` Thanks [@thetutlage](https://github.com/thetutlage)! - Refactor/deprecate remote link

- #10667 `47594192b79fbc798cfaf21821b60673745d1374` Thanks [@riqwan](https://github.com/riqwan)! - feat(dashboard,core-flows,types,utils,Band Store,order): Order cancelations will refund payments

- Updated dependencies [`ecc09fd77db01fcb7e8eb8e60cd19e16e2b5ea81`, `13ddf27c68fc2831b3661940bc5f27bab23ce8c0`, `99a06102a246c119f69d1873f3cdeee9ff1241a0`, `4f897661eb7a855a881d460c565c2da6459367eb`, `5e9d86d75d1f2745c24a4bcd4a5c0df066578ef5`, `47594192b79fbc798cfaf21821b60673745d1374`, `0559d54c18d2e79c78c2b9a348b9873d1a786dea`]:
  - @band-store/types@2.2.0

## 2.1.3

### Patch Changes

- #10617 `100da64242838739816351ed259461f2d7c258e3` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: fulfillment module DML

- #10408 `c9b8db04c1b35f1cf129bb9ad74789fbc2881815` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Support custom line items

- Updated dependencies [`100da64242838739816351ed259461f2d7c258e3`, `c9b8db04c1b35f1cf129bb9ad74789fbc2881815`, `2ad08c4c440706dd2ffe2215807b89ee4a7f325b`, `048620884b5d458b109ac496e7a2056c202bd459`]:
  - @band-store/types@2.1.3

## 2.1.2

### Patch Changes

- #10569 `729eb5da7b6daf9781b8bdcbc2fab344e942d444` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: Inventory DML

- #10499 `16d27ea6e4c2e4290820fe2328f08557534fcb8f` Thanks [@thetutlage](https://github.com/thetutlage)! - Feat/customer dml

- #10410 `fad85a9d293acee1dae784afa223a080b9b8b85b` Thanks [@thetutlage](https://github.com/thetutlage)! - refactor: migrate promotion module

- #10551 `885c82ded63e504739bf39a113f820c87c9e2d52` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: add support for float properties

- #10579 `6367bccde88158d524dfa01e5a8123ffa3461c10` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, pricing): Cart workflows handle pricing context accurately

- Updated dependencies [`729eb5da7b6daf9781b8bdcbc2fab344e942d444`, `16d27ea6e4c2e4290820fe2328f08557534fcb8f`, `885c82ded63e504739bf39a113f820c87c9e2d52`, `90ad2566fdde2215447100d10c3fe9b17ce826b5`, `6367bccde88158d524dfa01e5a8123ffa3461c10`]:
  - @band-store/types@2.1.2

## 2.1.1

### Patch Changes

- #10459 `90ae187e097c42a224c701f31cbc2924ea6ee86b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix: when/then step name

- #10477 `0a077d48e14976bafcf19705fc48e66756362fd6` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(workflow-engine): Migrate to DML

- #10442 `90d7f4ff3949ade9f6a7335c9611aae6633be908` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(utils): DML#hasOne allow mappedBy to not be defined

- #10476 `f65a3cc06df9faca3615f30eb4d3bf889efa5765` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix: avoid optional fields on graphql generated types

- #10415 `b160fd3cbf6edf06702fa15b694709375557d188` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(utils): DML one to one definition

- #10385 `0a16efa4266f93302b31589349e777bc8d24dc07` Thanks [@thetutlage](https://github.com/thetutlage)! - refactor: migrate cart module to DML

- #10482 `69f4c4f4e06022990fcd9c66d8f1a68ff0ff97b1` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: index module to DML

- Updated dependencies [`a1a1e0e789424546443ce195b95f652d081d7b3b`, `16663ec8132e99bac7fbfe2adda542a5294d2384`, `559fc6587aa02cd4f8fbc9e97ff1f1ba094a4b1a`, `864f53011b892e1ed0abee2e241b662eccef7e6d`, `69f4c4f4e06022990fcd9c66d8f1a68ff0ff97b1`]:
  - @band-store/types@2.1.1

## 2.1.0

### Patch Changes

- #10360 `194361b95a0ed2c182e0a3c107fde9b4b6a7bcf7` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: do not rely on model loading order to find an implicit owner

- #10391 `3e98364bd1631f96846cd3199bf7497702cf5923` Thanks [@thetutlage](https://github.com/thetutlage)! - feature: add support for check constraints in DML

- Updated dependencies [`3e98364bd1631f96846cd3199bf7497702cf5923`, `324b4ab438662f44de495ffe4d9137677a032a00`]:
  - @band-store/types@2.1.0

## 2.0.7

### Patch Changes

- #10318 `e9003c3124f284eae7e1457101bf10c1beccbac1` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(utils): set readonly property on recursive dir read

- Updated dependencies []:
  - @band-store/types@2.0.7

## 2.0.6

### Patch Changes

- Updated dependencies []:
  - @band-store/types@2.0.6

## 2.0.5

### Patch Changes

- #10159 `9dff05cddeeca40fab47760fa15e07ca087664ed` Thanks [@thetutlage](https://github.com/thetutlage)! - Revert "feat: add optional fields"

- #10179 `42c08fa8e00d33e93e152b3058d2f73476b9a0c3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix loaders path

- #10085 `3e265229f2ae5c3d55f64a445574c13c40b52c14` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Improve event bus error handling

- #10172 `7390c14c20f7b5053458de1b1a58870dc8e441cc` Thanks [@thetutlage](https://github.com/thetutlage)! - feat(utils): add support for making relationships searchable

- Updated dependencies [`9dff05cddeeca40fab47760fa15e07ca087664ed`, `1659c9be5d3ace1bed9f3a6e7206fe54e60645c0`, `3fee17747f059a331e9fbe40622205b968404faf`]:
  - @band-store/types@2.0.5

## 2.0.4

### Patch Changes

- Updated dependencies [`34f4f695c0b8359a6e9efd45fd081ea743a1c439`, `bc2d556c2c57adab637308fb65247b17b8cd2ed5`]:
  - @band-store/types@2.0.4

## 2.0.3

### Patch Changes

- #9955 `03f4b66b90625634f13409be35cd57081f0eb7d5` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Generate graph schema with readonly links

- Updated dependencies [`03f4b66b90625634f13409be35cd57081f0eb7d5`]:
  - @band-store/types@2.0.3

## 2.0.2

### Patch Changes

- #9917 `16b4cc433e996d1a54e4ff043daaa148981ba63d` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(utils): Mikro orm repository update many to many should detach all items by default

- #9932 `879ce33090c7e99ae8b466c31c5dc0c67cdbc08f` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(utils/dml): set-relationship graphql generator from DML wrong managed belongsTo

- #9947 `b3cbc160eb94025402b5a0ef21653c207bbe8ccd` Thanks [@sradevski](https://github.com/sradevski)! - fix: Default to a relative path for backend URL in admin

- Updated dependencies [`bbf4af17258ea34adeeb8ff3a6cd213a12d67c76`, `c1c85ef952441eacfe8b6c2ffa9304ac4433053f`, `b3cbc160eb94025402b5a0ef21653c207bbe8ccd`]:
  - @band-store/types@2.0.2

## 2.0.1

### Patch Changes

- Updated dependencies []:
  - @band-store/types@2.0.1

## 2.0.0

### Major Changes

- #7341 `2e42e053d4c9d5445d227bdc268c66713aad8e2e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Band Store 2.0

### Patch Changes

- Updated dependencies [`2e42e053d4c9d5445d227bdc268c66713aad8e2e`]:
  - @band-store/types@2.0.0

## 1.11.9

### Patch Changes

- #6922 `20e8df914e` Thanks [@sradevski](https://github.com/sradevski)! - Return normalized DB errors from the mikro ORM repository

- #6836 `e0b02a1012` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils): custom serialization that allows for non self ref

- #6864 `e944a627f0` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: region payment providers management workflows/api

- `cc557c8752` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Order endpoints and Cart totals

- #6842 `5d9aea053c` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(utils): Mikro orm prop filtering should check existence

- #6973 `232322d035` Thanks [@adrien2p](https://github.com/adrien2p)! - Chores: Do not disable foreign keys by default

- #7153 `4b57c5d286` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remote query supporting context

- #6813 `a6562d2a41` Thanks [@sradevski](https://github.com/sradevski)! - Added an upsertWithReplace method to the mikro orm repository

- Updated dependencies [`0c0b425de7`, `8d356217bd`, `27f4f0d724`, `e944a627f0`, `1a48fe0282`, `86f499de2f`, `09a2220569`, `78f603e4f1`, `cc557c8752`, `58c68f6715`, `82a176e30e`, `11517f0faf`, `62b9dcc6c1`, `e26cda4b6a`, `bc06ad2db4`, `18f3aacee6`, `38c971f111`, `45c49e89f2`, `528ef4ca90`, `65794f4bb5`, `93ef94cad3`, `4cf71af07d`, `4b57c5d286`, `c78915c7c5`, `18f3aacee6`, `f175cac4af`, `0a9b9b073d`, `a6562d2a41`, `00e6b21bb5`, `8fd1488938`, `1c6ba4468e`]:
  - @band-store/types@1.11.16

## 1.11.8

### Patch Changes

- #6796 `9073d7aba3` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): rename psma to prices

- #6751 `4974f5e455` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils): autogenerates create and update methods when dto is provided

- #6772 `1ef9c78cea` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: v2 - deprecate extra in favor of driver options

- Updated dependencies [`deab12e27e`, `56481e683d`, `9073d7aba3`, `05e857d256`, `1ef9c78cea`]:
  - @band-store/types@1.11.15

## 1.11.7

### Patch Changes

- #6648 `9288f53327` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,utils): added price list prices upsert and delete workflows + endpoints

- #6504 `56cbf88115` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(utils): Soft delete should allow self referencing circular deps

- #6473 `36a61658f9` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils): Fix big number decorator and cleanup

- #6436 `c319edb8e0` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(utils): Add default ordering to the internal service factory list/listAndCount

- #6531 `0b9fcb6324` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils): consolidate promotion utils + refactor

- #6525 `b3d826497b` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(utils): Improve big number decorator

- #6386 `a86c87fe14` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(utils): make psql index util return index instead of constraint for unique indicies becuase partial constraints don't exist :'(

- #6692 `640eccd5dd` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): add rules to promotion endpoints + workflow

- #6499 `8ea37d03c9` Thanks [@riqwan](https://github.com/riqwan)! - fix(utils): bignumber util considers nullable options when setting value

- #6399 `339a946f38` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Initial Order module implementation

- #6648 `9288f53327` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,pricing,types,utils): added price list workflows + endpoints

- #6441 `8dad2b51a2` Thanks [@riqwan](https://github.com/riqwan)! - feat(band-store-react,Band Store,utils): fix login for Band Store v2 admin next dashboard

- #6289 `a6d7070dd6` Thanks [@riqwan](https://github.com/riqwan)! - feat(types): add util to transform get response to an update request

- #6489 `168f02f138` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(util): Detect circular dependencies on soft delete

- #6514 `f5c2256286` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): adds update cart API with promotions

- #6592 `000eb61e33` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing,Band Store,utils): added list + get endpoints for price lists

- #6524 `62a7bcc30c` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(fulfillment): service provider registration + fulfillment management

- #6700 `8f8a4f9b13` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Version all modules to allow for initial testing

- #6396 `6500f18b9b` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Prevent from soft deleting all entities

- #6311 `ce39b9b66e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(payment-stripe): new Stripe payment provider

- #6308 `a6a4b3f01a` Thanks [@fPolic](https://github.com/fPolic)! - feat(types, utils): payment module - provider service

- #6435 `56b0b45304` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - BigNumberField decorator

- #6698 `cc1b66842c` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): add/remove fulfillment shipping option rules

- #6383 `e85463b2a7` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Fix database test utils and utils

- Updated dependencies [`1fd0457c15`, `d4b921f3db`, `ac86362e81`, `e4acde1aa2`, `1a661adf3e`, `04a532e5ef`, `640eccd5dd`, `339a946f38`, `ac829fc67f`, `d9d5afc3cf`, `c3c4f49fc2`, `9288f53327`, `0d46abf0ff`, `fafde4f54d`, `0c705d7bd4`, `1d91b7429b`, `1ed5f918c3`, `c20eb15cd9`, `e5945479e0`, `f5c2256286`, `62a7bcc30c`, `8f8a4f9b13`, `ce39b9b66e`, `a6a4b3f01a`, `4d51f095b3`, `56b0b45304`, `cc1b66842c`, `24fb102a56`]:
  - @band-store/types@1.11.14

## 1.11.6

### Patch Changes

- #6328 `3fd68d197` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(fulfillment): Initialize models work

- Updated dependencies [`3fd68d197`]:
  - @band-store/types@1.11.13

## 1.11.5

### Patch Changes

- #6319 `12054f5c0` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/shipping method init

- #6263 `45134e4d1` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Workflows passing BandStoreContext as argument

- #6218 `884428a1b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Feat: Event Aggregator

- #6314 `882aa549b` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(utils): return array or single entity based on input for modules created by internal module service factory

- Updated dependencies [`12054f5c0`, `3db2f95e65`, `96ba49329`, `45134e4d1`, `82c728bec`, `e749dd653`, `884428a1b`, `d1c18a309`]:
  - @band-store/types@1.11.12

## 1.11.4

### Patch Changes

- #6094 `68ddd866a5` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils,types): add registerUsages for promotion's computed actions

- #6062 `72bc52231c` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(utils): Update base repository to infer primary keys and support composite

- #6152 `99045848f` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types,core-flows,utils): added delete endpoints for campaigns and promotions

- #6021 `a9b4214503` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(utils, product): Attempt to simplify module scripts export

- #6127 `5e655dd59` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Hide repository creation if they are not custom + add upsert support by default

- #6050 `b782d3bcb7` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils,types): added item/shipping adjustments for order/items/shipping_methods

- #6128 `302323916` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Modules: Workflows Engine in-memory and Redis

- #6130 `da5cc4cf7` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,utils): promotion and campaign create/update endpoint

- #6161 `daecd82a7` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils): update joiner config for campaigns

- #6112 `06b33a9b4` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(cart): Line item adjustments

- #6035 `b6ac768698` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Attempt to abstract the modules repository

- #6087 `130c641e5c` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Abstract module services

- #6063 `fade8ea7bf` Thanks [@riqwan](https://github.com/riqwan)! - feat(utils,types): campaigns and campaign budgets + services CRUD

- Updated dependencies [`68ddd866a5`, `99045848f`, `af7af7374`, `fc6b1772a7`, `d85fee42e`, `5e655dd59`, `b132ff7669`, `e28fa7fbdf`, `a12c28b7d5`, `b782d3bcb7`, `7f7cb2a263`, `302323916`, `ce81cade88`, `fd78f5e24`, `192bc336cc`, `06b33a9b4`, `130c641e5c`, `fade8ea7bf`, `8472460f53`, `68d8daccd`]:
  - @band-store/types@1.11.11

## 1.11.3

### Patch Changes

- #5957 `42cc8ae3f` Thanks [@riqwan](https://github.com/riqwan)! - feat(types,utils): added promotion create with rules

- #5869 `45996d58a2` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store, interfaces, utils, webshiper): Uniformise class checks

- #5728 `9cc787cac4` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(workflows-sdk): Configurable retries upon step creation

- #5858 `355075097` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(pricing, types): add soft deletion for money-amounts
  feat(utils): cascade soft delete across 1:1 relationships

- #6020 `fbee006e5` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store, orchestration, utils, workflows-sdk): add transaction options support and cleanup

- #5929 `c41f3002f` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/utils object from string path

- #5985 `d16d10619` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(band-store-test-utils, utils, link-modules, pricing, product): upgrade mikro-orm version

- #5945 `890e76a5c` Thanks [@riqwan](https://github.com/riqwan)! - feat(types,utils): add promotions create with application method

- #5810 `fe007d01b` Thanks [@fPolic](https://github.com/fPolic)! - feat: sales channel <> order link

- #5459 `76332ca6c` Thanks [@fPolic](https://github.com/fPolic)! - feat: SalesChannel <> Cart joiner config

- Updated dependencies [`6d1e3cc02`, `42cc8ae3f`, `355075097`, `dc46ee118`, `925feea04`, `3f6d79961`, `c1c470e6b`, `890e76a5c`]:
  - @band-store/types@1.11.10

## 1.11.2

### Patch Changes

- #5752 `079f0da83` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,pricing,Band Store,pricing,types,utils): Price List Prices can have their own rules

- #5755 `8f25ed8a1` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(link-modules, pricing, product, utils): Should be able to set some custom database config even in shared mode

- Updated dependencies [`079f0da83`]:
  - @band-store/types@1.11.9

## 1.11.1

### Patch Changes

- #5713 `18afe0b9a` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(stock-location, inventory, Band Store, types, utils): allow buildQuery to take null as an argument in order to prevent default pagination

- #5732 `de8f74867` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(link-modules, utils): remove limtis if primary key exists in filter for buildquery and no limit is present

- #5536 `dc5750dd6` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,types,workflows,utils,product,pricing): PricingModule Integration of PriceLists into Core

- Updated dependencies [`a39ce125c`, `18afe0b9a`, `6025c702f`, `fc1ef29ed`, `0df1c7d42`, `dc5750dd6`]:
  - @band-store/types@1.11.8

## 1.11.0

### Minor Changes

- #5603 `cedab5833` Thanks [@riqwan](https://github.com/riqwan)! - feat(workflows,Band Store,utils): add Band Store v2 feature flag

### Patch Changes

- Updated dependencies [`61aef4aaa`, `1772e80ed`]:
  - @band-store/types@1.11.7

## 1.10.5

### Patch Changes

- `c39bf69a5` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Add missing version bumps

- #5496 `154c9b43b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, modules-sdk, types, utils): Re work modules loading and remove legacy functions

- Updated dependencies [`91615f9c4`, `154c9b43b`]:
  - @band-store/types@1.11.6

## 1.10.4

### Patch Changes

- #5294 `378ca1b36` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing,types,utils): Move calculate pricing query to a repository + rule type validation

- #5337 `e47461d95` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(orchestration): prevent throwing on already defined workflow

- #5301 `66413d094` Thanks [@srindom](https://github.com/srindom)! - fix: move create inventory workflow to @band-store/workflows

- Updated dependencies [`378ca1b36`, `69cf7215f`, `453297f52`, `66413d094`]:
  - @band-store/types@1.11.4

## 1.10.3

### Patch Changes

- #5216 `eeceec791` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils): Convert remote query object to string array of fields and relations from GQL schema

- #5242 `130cbc1f4` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Modules exporting schema with entities and fields

- #5213 `cb569c2df` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils): Utils to create an object select, relation from a string[]

- Updated dependencies [`130cbc1f4`, `c5703a476`]:
  - @band-store/types@1.11.3

## 1.10.2

### Patch Changes

- #5161 `cc4169a94` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils): Provide an utils that allows to convert an array of fields to a complete remote query object

- #5214 `1e7db5a5c` Thanks [@riqwan](https://github.com/riqwan)! - feat(types,pricing,utils): Exact match based on context + fallback on rule priority if not

- Updated dependencies [`1e7db5a5c`]:
  - @band-store/types@1.11.2

## 1.10.1

### Patch Changes

- #4961 `6273b4b16` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(utils, module-sdk, Band Store, types): Extract pg connection utils to utils package

- Updated dependencies [`4fa675ec2`, `6273b4b16`, `30863fee5`, `3d68be2b6`, `a87d07655`, `edf90eecb`, `107aaa371`, `834da5c41`]:
  - @band-store/types@1.11.1

## 1.10.0

### Minor Changes

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Band Store App Loader

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - introduce @band-store/link-modules

### Patch Changes

- #4860 `460161a69` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing, types, utils, band-store-sdk): Pricing Module Setup + Currency service

- #4909 `fcb6b4f51` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing, utils, types): adds money amount to pricing module

- #4915 `87bade096` Thanks [@riqwan](https://github.com/riqwan)! - fix(utils, product, pricing, link-modules): add missing dependencies for utils + fix migration path issue

- Updated dependencies [`460161a69`, `fcb6b4f51`, `66bd9a835`, `4d16acf5f`, `4d16acf5f`, `4d16acf5f`]:
  - @band-store/types@1.11.0

## 1.9.7

### Patch Changes

- #4825 `c53fa6cd3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix mikro-orm connection loader

## 1.9.6

### Patch Changes

- #4626 `3f3a84262` Thanks [@adrien2p](https://github.com/adrien2p)! - [WIP] feat(types, product, utils, Band Store): Include shared connection for modules

- #4733 `30ce35b16` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(create-band-store-app, utils, band-store-cli): add database options + remove util from `@band-store/utils`

## 1.9.5

### Patch Changes

- #4701 `5c60aad17` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store, utils): Allow object feature flags

- #4631 `4073b7313` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(product): Move mikro orm utils to the utils package

## 1.9.4

### Patch Changes

- #4623 `107ae23a3` Thanks [@riqwan](https://github.com/riqwan)! - fix(utils, types, band-store-plugin-meilisearch, band-store-plugin-algolia): move SoftDeletableFilterKey, variantKeys, indexTypes from types to utils

## 1.9.3

### Patch Changes

- #4535 `131477faf` Thanks [@riqwan](https://github.com/riqwan)! - feat(product,types,utils): Add tags, types, categories, collection and options CRUD to product module services

## 1.9.2

### Patch Changes

- #4098 `499c3478c` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: Remote Joiner

- #4389 `9dcdc0041` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, utils): fix the way selects are consumed alongside the relations

- #4398 `9760d4a96` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, utils): improve devx for core entity customizations

## 1.9.1

### Patch Changes

- #4273 `f98ba5bde` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(create-band-store-app,band-store-cli): Allow clearing project

- #4161 `14c0f62f8` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(product): Experimental product module

## 1.9.0

### Minor Changes

- #4146 `db4199530` Thanks [@fPolic](https://github.com/fPolic)! - chore(Band Store, utils, inventory, stock-location): clear deps in the utils package

### Patch Changes

- #4026 `a91987fab` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(Band Store): Remove sqlite support

- #4148 `c0e527d6e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(Band Store): Align build query utils

## 1.8.5

### Patch Changes

- #4046 `cdbac2c84` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, band-store-utils): Add support for multiple where condition on the same column

- #4072 `6511959e2` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Revert to official Typeorm package

## 1.8.4

### Patch Changes

- #4032 `1ea57c3a6` Thanks [@pevey](https://github.com/pevey)! - update class-validator to 0.14.0 in utils package

## 1.8.3

### Patch Changes

- #4002 `0e488e71b` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, event-bus-redis, event-bus-local): Revert retrieveSubscribers as the wildcard prevent us from filtering

- #3981 `d539c6fee` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Bump Typeorm to Band Store fork

## 1.8.2

### Patch Changes

- #3835 `af710f1b4` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store): Bulk create variant and pass transaction to the inventory service context methods

- #3905 `491566df6` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(Band Store,utils): Searching indexing product subscriber

## 1.8.1

### Patch Changes

- #3778 `654a54622` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Bump Typeorm

- #3738 `abdb74d99` Thanks [@riqwan](https://github.com/riqwan)! - chore(Band Store, utils): rename buildLegacyFieldsListFrom to objectToStringPath

## 1.8.0

### Patch Changes

- #3685 `8ddb3952c` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Fix RC package versions

- #3688 `a0c919a8d` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(band-store-cli): Add missing utils dep

- #3510 `74bc4b16a` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(band-store-plugin-algolia): Revamp Algolia search plugin

- #3531 `4e9d257d3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remove dependency on @band-store/band-store from Inventory and Stock-Location Modules

## 0.0.2-rc.2

### Patch Changes

- #3688 `a0c919a8d` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(band-store-cli): Add missing utils dep

## 0.0.2-rc.1

### Patch Changes

- chore: Fix RC package versions

## 0.0.2-rc.0

### Patch Changes

- #3510 `74bc4b16a` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat(band-store-plugin-algolia): Revamp Algolia search plugin

- #3531 `4e9d257d3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remove dependency on @band-store/band-store from Inventory and Stock-Location Modules
