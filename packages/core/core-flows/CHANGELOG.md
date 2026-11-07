# @band-store/core-flows

## 2.22.4

### Patch Changes

- #17655 `7167fa2` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(core-flows,Band Store): document RBAC workflows and API routes

- Updated dependencies [`3a0cbbb`, `3d85f84`]:
  - @band-store/framework@2.22.4

## 2.22.3

### Patch Changes

- #15620 `a6a4254` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,core-flows,framework,js-sdk,modules-sdk,types,utils,link-modules,rbac): end to end RBAC implementation

- #17608 `2e3b55d` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows,utils): skip customer account email validation when the auth identity has no email, and add a validate hook to createCustomerAccountWorkflow

- Updated dependencies [`9692b99`, `2e0d8ae`, `385c4ff`, `2276c84`, `a6a4254`]:
  - @band-store/framework@2.22.3

## 2.22.2

### Patch Changes

- #17527 `9d55082` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(core-flows): update json-2-csv to ^5.6.0

- #17536 `04c0303` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): don't replace payment sessions with an active payment

- Updated dependencies [`ca881e5`, `9d55082`, `26e5807`, `52caddd`]:
  - @band-store/framework@2.22.2

## 2.22.1

### Patch Changes

- #17462 `67aa48d6b1bbac622d261808b4351521fad8cf42` Thanks @band-store-os-bot! - fix(core-flows): cascade delete records linked to deleted variants via defineLink

- #17470 `5aebc3e4a163c0e401d8794b2e961021eea5aea0` Thanks @band-store-os-bot! - fix(core-flows): import only declared dependencies at runtime

- #17450 `7ce874c0ce4df5d9942130a28067ced8b23b126d` Thanks @band-store-os-bot! - fix(core-flows): mark draft order shipping methods updated with a custom amount as custom

- #17446 `a0b1fffe7082ee326f16f50a1e2bfc978032a2bf` Thanks @band-store-os-bot! - fix(promotion): enforce and track spend_by_attribute campaign budgets, and skip automatic per-attribute budget promotions when the budget attribute is missing instead of throwing

- #17448 `4e723121b0f9e3792b61306af5cbf2ebd9e84d20` Thanks @band-store-os-bot! - fix(core-flows): persist refund_amount on returns created by createAndCompleteReturnOrderWorkflow

- #17479 `347a34dc5a193ac2117cbbda6956c3932f40e693` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): remove optional chaining from processPaymentWorkflow constructor

- #17464 `c959d5e3e7d4b482d0784eef67ef8ef766442d5e` Thanks @band-store-os-bot! - fix(utils,core-flows): import region price columns written by the product export

- #17432 `7c3b0339379efeda7863f48b9f60e3391cece091` Thanks [@sradevski](https://github.com/sradevski)! - feat(Band Store,core-flows,types,js-sdk): add store route to update a payment session's client data

- #17402 `4a75f02fbadb204f390bd5989dd0302f8a3f6774` Thanks @band-store-agents! - fix(core-flows, loyalty-plugin): validate cart customer ownership checks

- #17415 `e07eb2b001fa52621e3176efb36fdf53863d4a80` Thanks @band-store-agents! - fix(core-flows): validate customer account email matches the authenticated identity

- Updated dependencies []:
  - @band-store/framework@2.22.1

## 2.22.0

### Minor Changes

- #17089 `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: drop Node.js 20 support and require Node.js v22.22.0 or later

### Patch Changes

- #17210 `0e087453a34fea61d39d1e416a52ef3417220b2e` Thanks @band-store-os-bot! - fix(core-flows): respect item-level allow_backorder when converting a draft order or confirming an order edit

- #17067 `fdac7de4c3268ccf0f86c47c140662d84c141832` Thanks [@sradevski](https://github.com/sradevski)! - feat(core-flows,utils): emit events for price list changes and product link, variant price and variant image workflows

- #16964 `780a69aad3ea20beadf82e9c5351a6633de45b64` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(payment,core-flows,Band Store,types,utils): let refunds be retried safely with an idempotency key

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- #16142 `a491ca71f438e1f35a496d63d29141e15bc56c93` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(dashboard, core-flows, js-sdk, types, Band Store): add export customers feature

- Updated dependencies [`d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a`, `14499a2e9309d653c0e4ec6aec3f88079751b4d2`, `44db0ca6357ab4d4681a8004e869fde339c3117a`, `1db74006ede40300afe64970024688a1a9c2a936`]:
  - @band-store/framework@2.22.0

## 2.21.2

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.21.2

## 2.21.1

### Patch Changes

- #16269 `f8dce55556a1e68d6ea9b2fb88852b2a76fbd73c` Thanks [@KallinikosMil](https://github.com/KallinikosMil)! - fix(core-flows): create an inventory item and link it when manage_inventory is enabled on an existing product variant

- #16573 `1caeb1ab62de9b51c1f385e0e051bb8a10c66aee` Thanks [@ebrahim2355](https://github.com/ebrahim2355)! - fix(core-flows): await the mutations performed in step compensations so rollbacks complete before the workflow reports them as done

- #16436 `7ff721850c22a886af25f251685f6bca59434664` Thanks [@thomassarazin](https://github.com/thomassarazin)! - fix(@band-store/order, @band-store/core-flows): set requested_at when a return is created from the storefront

- #16894 `854a42c10f14735785fccf74b2f0b53b3b46204f` Thanks [@sradevski](https://github.com/sradevski)! - feat(Band Store,search,core-flows,types,js-sdk,dashboard): delete a search index and everything built for it

  `DELETE /admin/search-indexes/:id` drops every physical index ever built for an
  index, along with its versions and sync history, so the next migration recreates
  it from scratch at version 1. Useful when an index' physical state has drifted
  past what a reindex can repair.

  Available as `searchModuleService.deleteIndex`, `deleteSearchIndexWorkflow`,
  `sdk.admin.search.deleteIndex`, and a confirmed action in the admin dashboard.

- Updated dependencies [`c000d377f1a90d14bcda41500b1ed5bc2734902e`]:
  - @band-store/framework@2.21.1

## 2.21.0

### Patch Changes

- #16129 `2097e7b43f3d4525b1a909dbe4cb6fb634765893` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): validate cart currency_code against the region's currency on create

- #16722 `14e630faa1c31d37626068004e3f00acad1fd51d` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): only autocapture if payment is authorized successfully

- Updated dependencies [`e9d1f84dbfacd35d7787d1af03215a6ae5a176d8`, `a4c0a845e8b3a7a5acfaacbb0c093cd539ac713b`, `c8701e77534f7b615c8b86814f8d5789c0104382`, `df8c278d615229436be5b299ebdc76a576695fc3`]:
  - @band-store/framework@2.21.0

## 2.20.1

### Patch Changes

- #16704 `f373c17dd60cb1e7df1d0c70db31d516d2a0cb4f` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): add a name for when step

- Updated dependencies [`f373c17dd60cb1e7df1d0c70db31d516d2a0cb4f`]:
  - @band-store/framework@2.20.1

## 2.20.0

### Patch Changes

- #16584 `faa9c0c160cf69d90ca495aac6ad2c1341c62b1c` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(core-flows): name when blocks

- #16559 `4528357cfe3c3bcf76a20b2ac2fe3637fb649a9d` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,utils): add setCalculatedShippingPricingContext hook

- #16216 `c26c1551ac8700061267ac6b8e0ac380e5404d3c` Thanks [@HEMANTHSV31](https://github.com/HEMANTHSV31)! - fix(core-flows): fixed an issue where product CSV exports produced misaligned columns.

- #15857 `90841150c76acbd31d8e94bd2edd585ccdff1db7` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,types): support calculated shipping options in draft orders

- #16461 `f3b3bd838ed53b6b2e1adead27d6b1006ea6e6e4` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(inventory,link-modules,Band Store,types,core-flows): support fractional inventory quantities and unit of measure

- #16429 `2a5dd813a7e1d5094cb81f688e2e9e7cc8fd3543` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,utils): emit product-option-value.updated/deleted events

- #16690 `6b2d37e9f132973789b241cd065497e4f7d95fe4` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): validate that payment provider belongs in cart region

- Updated dependencies [`847612908fdd1c11a4df09ccc2e8ab44d338bb04`, `785fd2b8a978201638a4d8d5ae9eea483958c0fb`, `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9`, `6a2fce501f3bcd459c21a67f586c7a15b905ff0f`, `5e06e544a296b9033f20f71f11c559f81a0e5739`]:
  - @band-store/framework@2.20.0

## 2.19.0

### Patch Changes

- #16207 `a42ee0825b07409cab68cd351516c35b74238150` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): pass the cart's currency and region to fulfillment providers when calculating shipping option prices

- #16211 `a4791af3b2e566684b18e7ea07b086c579ec874f` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): re-select the price of a merged cart line item for the resulting quantity, and hydrate compare_at_unit_price when a line item is updated

- #16233 `5cc7fdef1893d8c4afac8de8e3cfa32d451e69a5` Thanks [@irontaek](https://github.com/irontaek)! - chore(core-flows): index variants by id in prepareVariantsAndItemsWithPricesStep so the per-line-item lookup is O(1) instead of a linear scan

- #15731 `f2c9d7d3c11507f92142b440a1d90ad74c2a03de` Thanks [@shafi-VM](https://github.com/shafi-VM)! - fix(core-flows,types): respect item-level allow_backorder when confirming inventory

  When adding an item, the `allow_backorder` flag passed on the item is now honored during inventory confirmation, overriding the variant's own `allow_backorder` setting for that item only. Previously the flag was accepted by the API but ignored, making it impossible to add an out-of-stock variant to a draft order even with `allow_backorder: true`.

- #16033 `e037c71ff11add91583124a600840ce793421fe7` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): recompute draft order tax lines on address change and conversion

- #16176 `aeea1f46bf4947ca36577e950b4c79a1faba8ba1` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): delete auth identity when possible upon customer/user deletion

- #16223 `e2b2a5c5c2c51dfc0973b024d4cbb5c6c2f49158` Thanks [@srindom](https://github.com/srindom)! - feat(core-flows,Band Store,dashboard,js-sdk,types): add inventory item export with per-location levels

- #16354 `372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(caching,core-flows,framework,query,types,utils): pass non automatically computed tags to various cached queries.

- #16238 `18e02fb06f5c925c0b3ebc1943407bf58f83e7b7` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,dashboard,js-sdk, Band Store,types,utils): support notification preferences for order edits

- #15939 `4f2b8a2b435870a379b029d5e6348a3c06cc4093` Thanks [@zain-asif-dev](https://github.com/zain-asif-dev)! - fix(core-flows): return 400 instead of 500 when adding a cart line item for a variant with no calculated price

- #16139 `9fa4bd9eb941a266c560b35683e8230af33a3352` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(fulfillment, core-flows, types, utils, Band Store): support custom delivery address + pass additional data to createFulfillment

- Updated dependencies [`372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30`, `5f4d93c374b0ad0b0a31e75de98c7557e0415677`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`]:
  - @band-store/framework@2.19.0

## 2.18.0

### Patch Changes

- #15840 `dfdcdd7467ede40e1bb80ce866bfe2c256b8ff86` Thanks [@nam-stx](https://github.com/nam-stx)! - feat(core-flows,order,cart,types,Band Store): Add data and metadata fields to tax line models

- [`f0e86a06ada4e43cf61383a65603dab7ef5e8039`](undefined) - fix(core-flows): pass customer groups to pricing context in createCartWorkflow

- [`83ec164e5e475880603188bdd29991964a8136d1`](undefined) - fix(core-flows): preserve `data` field in `prepareTaxLinesData` during cart completion

  PR #15840 added the `data` column to tax line DTOs and the set/upsert steps, but `prepareTaxLinesData` in `cart/utils/prepare-line-item-data.ts` — which copies cart tax lines to order tax lines during `complete-cart` — was not updated. As a result the `data` field (used by providers like Stripe Tax to store jurisdiction breakdowns) was silently discarded on every order placement.

- #16083 `d6b2a87da1dbfd065336c80e41cb7c086dc2a340` Thanks [@dependabot](https://github.com/apps/dependabot)! - chore(create-band-store-app, admin-bundler, dashboard, core-flows, framework, js-sdk, Band Store): dependabot dependencies update

- #15926 `c2fc62507a54f0ab73367d4369c783bbbdccf022` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,Band Store,types,js-sdk,dashboard): transfer order to guest customer

- [`8078ac6c62994ebc6d279c2612472086c20ce346`](undefined) - feat(core-flows): automatically refresh taxes upon state change

- #15614 `3382c8189bfc9f44e86123496ef3665e92ac91c9` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,types,utils,Band Store): support global product options in imports

- [`09abcfab45f44932450c18de4717a6ab3acc6b0b`](undefined) - fix(core-flows): filter reservations by line item in createOrderFulfillmentWorkflow

  The get-reservations query in `createOrderFulfillmentWorkflow` passed its
  `line_item_id` constraint under the variables key `filter`, which the remote
  query layer does not recognize (it only honors `filters`). The constraint was
  silently dropped and every reservation item in the database was fetched and
  hydrated on each fulfillment creation, blocking the event loop for tens of
  seconds on stores with large reservation tables.

- #15991 `e78ef6ce51a00e6b303b654c5046cd1e60c8dc68` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows, utils): emit inventory-related events

- #16035 `dd5b3ee61ed5e4a8965c39eb34e2141908c664ce` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows,Band Store): refresh cart tax lines on any tax-relevant shipping address change

- [`631c2f2311f1931fe4a688d8796a7a81c2191243`](undefined) - fix(core-flows): only emit RETURN_RECEIVED from createAndCompleteReturnOrderWorkflow when receive_now is true, so requested-only returns no longer trigger the received event

- [`917ddbe0e56b4e739fa828140cd7973d823d1bbd`](undefined) - fix(core-flows): correctly clear a region payment providers

- [`812687d1195645a2ae223553c400c9142c91f74c`](undefined) - fix(core-flows): translate line items when creating an order with items and a locale

  `createOrderWorkflow` did not run `getTranslatedLineItemsStep`, so line items provided at order/draft-order creation kept their default-language titles even when a `locale` was set — while items added later (via `addOrderLineItemsWorkflow`) were translated. Line items are now translated on creation too, matching the add-items, cart, and add-to-cart paths.

- Updated dependencies [`1621e14330fe64a968510991408ace8fdac84ce9`, `1359d1bf6237aa058910b805395932cd070d2043`, `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09`, `d76952b5b0e4b287747a7e08f2cb745510143aae`, `d6b2a87da1dbfd065336c80e41cb7c086dc2a340`, `6ef16b6fdc6f04b900583a5f2714a863011ed19a`, `70c122753875f3cca03ff49b8a0ea9fe2c5e1165`, `144c47aba88f6e08fb7c99634c9fec8474721b0a`, `513c01a5a7f587cb52c92677e2379e54bd990361`]:
  - @band-store/framework@2.18.0

## 2.17.2

### Patch Changes

- #15419 `385819ba1469b4310832a7737060eb23226f135d` Thanks [@scherddel](https://github.com/scherddel)! - fix(core-flows,Band Store): Gift-cards bug fix to exclude giftcards from tax lines calculation

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

- #15085 `b50a9dbaf3eeb29753fa28afbc1b529c44ec5a51` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(payment,payment-stripe,core-flows,Band Store,dashboard,js-sdk,utils,types): introduce async payment methods support

- #15618 `5296f51121d4796b1757b65852c48e97e0e1e197` Thanks [@Mezzle](https://github.com/Mezzle)! - fix(core-flows): keep the customer account-holder link on a failed payment-session init

  `createPaymentSessionsWorkflow` creates the payment account holder with `noCompensation`, so the holder survives a workflow rollback, but the `createRemoteLinkStep` that links it to the customer was dismissed on rollback. A failed init therefore left an orphaned account holder — present in the DB but unreachable through `customer.account_holders` — so the `existingAccountHolder` short-circuit kept missing it and every later init re-created the same provider customer, colliding on the unique `(provider_id, external_id)` index ("Account holder ... already exists", a 400 on `POST /payment-sessions`) that never self-healed. The link step now also runs with `noCompensation`, so the link survives alongside the holder and a later init reuses the existing holder.

- #15721 `7686adc8637b41879c4551ca422829ad2d63d6a9` Thanks [@leobenzol](https://github.com/leobenzol)! - feat: drag&drop LayoutComposer, settings db persistence

- Updated dependencies [`de58ec503bcd82aae3fe576f9a404c36e2525f4c`]:
  - @band-store/framework@2.17.2

## 2.17.1

### Patch Changes

- Updated dependencies [`975313f62b22055ddaacf7852f33cf7b0f4af5df`]:
  - @band-store/framework@2.17.1

## 2.17.0

### Minor Changes

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(Band Store,product,core-flows,types): product options redesign (server-side)

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(): allow linking a subset of an option's values to the product

### Patch Changes

- #15783 `5770fe15c8b63407705cb96d0e77c6f7c76b5219` Thanks [@gaoflow](https://github.com/gaoflow)! - fix(core-flows): include order shipping method names in tax context

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(admin-shared,dashboard,core-flows,product,js-sdk,types,Band Store): rework product option values views and add dedicated endpoints

- Updated dependencies [`57b8e74d0fea8fb0e9dccd76eb6df06f0380071a`]:
  - @band-store/framework@2.17.0

## 2.16.0

### Patch Changes

- [`27874782c29890d8eb4c07f3eaafa3c71ebf3949`](undefined) - fix(core-flows): skip tax on gift card line items when cart taxes are recalculated

- [`55be5103e41ffe367400cc9317a3bd6dbaa1e0cf`](undefined) - feat(core-flows,types): add setTaxLineContext hook

- #15407 `46271f2c4f9b4d107a43b588b1082a3e572fbe76` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,Band Store,types): add multi shipping method carts support

- #14674 `06b05343b4158e7bb96f8f0fbd7e6836a1818e44` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,admin-shared,core-flows,js-sdk,types,Band Store,link-modules): RBAC admin dashboard CRUD

- [`e1697b65ff73257939c714dd2c8afdb5efa5e947`](undefined) - fix(file-local, core-flows): improve file resolution + invalid csv file handling

- [`46c806036c1f469e949c2da76ae55909c8920bd9`](undefined) - fix(core-flows): include shipping_method.name in tax calculation context

- [`ab832fcf1e4f51e1469a20aeb8e1ded125bd19c6`](undefined) - fix(core-flows): apply customer-group price lists when creating a draft order with items

  When a draft order was created with line items for a customer belonging to a customer group, the initial prices ignored customer-group-scoped price lists and used the default variant price. The create-order workflow built the pricing context with only `customer_id`, so the `customer.groups.id` attribute that price-list rules match on was missing. The customer is now loaded with its groups and passed into the pricing context, consistent with the add-items flow.

- #15561 `1344c10503f34e392bd03f733820bcd5a12a2766` Thanks [@GBreg19](https://github.com/GBreg19)! - feat(Band Store,core-flows,js-sdk,types): allow provider_id when marking a payment collection as paid

  The `mark-as-paid` admin route and the `markPaymentCollectionAsPaid` workflow now accept an optional `provider_id`. When provided, the captured payment is recorded under that provider instead of always using `pp_system_default`. Omitting it preserves the previous behavior. This completes the admin payment-provider flow started in #15169.

- [`a46961ed421dc69fe991891d02b0f1c66f6180ab`](undefined) - fix(core-flows, auth, types, Band Store): bind password reset tokens to a single-use server record

- [`333b08a120dcd40ef1066d05be0c124a8c3b1ff7`](undefined) - fix(core-flows): scope calculated shipping provider items to the option's shipping profile

- #15732 `3f3b339ea732670de449ee6ace4635523ff44ab0` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows, loyalty-plugin, Band Store): fix Band Store lint errors

- Updated dependencies [`8a6664d6d445f875f56078fad21fe12a185b9627`, `20352f4fa2f31e5b491c8b1b244c407392939fbf`, `90af038c95c835dee5168ffd19cda5182d81b904`, `66610b87efb112e37b78c7c9536d95070b8d6b11`]:
  - @band-store/framework@2.16.0

## 2.15.5

### Patch Changes

- #15496 `ace1822bccbb21afa533665937460140e36aa995` Thanks [@christiananese](https://github.com/christiananese)! - Add auth verification primitives for emailpass.

- #15527 `2535bd63f3bf2745034abb11ac38469df6f4a588` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): avoid refunding captures made in separate completeCartWorkflow executions

- #15440 `e6c632ada9ced677e44198f145097422890abc63` Thanks [@marlinjai](https://github.com/marlinjai)! - fix(core-flows): respect allow_backorder when calculating pickup inventory availability

  Products with `allow_backorder=true` are now correctly treated as available for pickup shipping options, even when `inventory_quantity=0`. Previously, these products would incorrectly trigger `insufficient_inventory: true`, preventing customers from selecting pickup options for backorder-enabled products.

- Updated dependencies [`8122633a8b33164a6094f5a39896e356efde1747`, `538f98da78ae2d741f1182e6ef315ba8efac6911`]:
  - @band-store/framework@2.15.5

## 2.15.4

### Patch Changes

- #15470 `fe9636daba55fd65213fe338ba818ec1429783fa` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): use hasPermission util to perform checks in validateUserRolePermissionsStep

- #15465 `94a3ee29d2a2ec441791d671e42deb24108df7f3` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows,Band Store): align validate user permissions check with hasPermission util

- Updated dependencies []:
  - @band-store/framework@2.15.4

## 2.15.3

### Patch Changes

- #15264 `22fa3e373aa5377b79e7f80b006b69b33eac7434` Thanks [@Suh0161](https://github.com/Suh0161)! - fix(core-flows): handle undefined customer account_holders in create payment sessions workflow

- #15396 `d0f4df0c6307555737a46f54ab7b99dd81c6c75b` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,types): surface skipped promo codes due to budget/promotion limits

- #15159 `ad14455d087d045eba3b3197ac37bf66e42d4e64` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): fix incorrect stock location picked for item with backorder in a sales channel with multiple locations

- #15397 `d36790f6ccc1a8d7fa729027f9e9d75ad8c9d418` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(inventory,core-flows,Band Store): add missing locking to reservation steps

- #15363 `de43962211feb705d27b2f388384e3f3f4b6d466` Thanks [@vladimir-bogomolov](https://github.com/vladimir-bogomolov)! - fix(core-flows): acquire lock before fetching cart in updateCartPromotionsWorkflow to prevent duplicate line item adjustments under concurrent requests

- Updated dependencies []:
  - @band-store/framework@2.15.3

## 2.15.2

### Patch Changes

- Updated dependencies [`2b21d15640ae459386b0acea4c83804c6f502b9d`]:
  - @band-store/framework@2.15.2

## 2.15.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.15.1

## 2.15.0

### Patch Changes

- #15231 `7747d0510b24bcce5e68bf32236559d809dabdee` Thanks [@rnagulapalle](https://github.com/rnagulapalle)! - fix(core-flows): validate cart has items before completing

- #15303 `436f549e326563cc3da4b7b142c12072fb89eed4` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows,payment): Fix rounding issue on refund creation

- #15301 `8539bc71a554ba0dd6bc48511aa980d93d3f2664` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows): add setPromotionContext hook to pass additional context for promotion computation

- #15241 `6d0fd2fb38d56e76580b52d4e6ea74d34db2000e` Thanks [@ShriyansSharma27](https://github.com/ShriyansSharma27)! - fix(core-flows): populate delivery_address on return fulfillments

- #15273 `f57b942b8bbd385f32203965e2f54a3964e812eb` Thanks [@Metbcy](https://github.com/Metbcy)! - fix(core-flows, payment, types): expose `metadata` on refund creation through `refundPaymentsWorkflow`

  The `Refund` data model supports a `metadata` field, but it was not exposed on
  `CreateRefundDTO`, `RefundPaymentsStepInput`, or `RefundPaymentsWorkflowInput`,
  making it impossible to set metadata on a refund created via
  `refundPaymentsWorkflow`. This adds the optional field to all three types and
  threads it through `PaymentModuleService.refundPayment` so the value reaches
  the underlying refund row.

- #15316 `cd22b7df5120993f2311cf6fecc8f213c383f16b` Thanks [@hunnyboy1217](https://github.com/hunnyboy1217)! - fix(core-flows): apply currency-precision tolerance to `validatePaymentsRefundStep`

  Mirrors #15303 on the plural `refundPaymentsWorkflow`'s validator. The validator
  now sums `raw_amount` instead of `amount` and compares with a per-currency
  epsilon (`getEpsilonFromDecimalPrecision`), so sub-cent provider captures (e.g.
  Stripe charging in a foreign currency at `87.957975`) no longer cause a refund
  of the user-visible rounded amount (`87.96`) to be falsely rejected. Also adds
  `captures.raw_amount` and `refunds.raw_amount` to the payments query so the raw
  values reach the validator.

- Updated dependencies []:
  - @band-store/framework@2.15.0

## 2.14.2

### Patch Changes

- #15153 `bd162f7a93e326c73b9929918b5bb9e3a458cc77` Thanks [@langovoi](https://github.com/langovoi)! - fix(core-flows): cancel-order credit line ignores pre-existing refunds

- Updated dependencies [`be0b8817a1e2e48e1c6c579de6598c6f5e9bf4b0`, `7c659ff3d69c43bd7477bcc8a1c0afd092ea1c23`]:
  - @band-store/framework@2.14.2

## 2.14.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.14.1

## 2.14.0

### Patch Changes

- #15106 `1a28af3d7412466022dc941c425a06c762a43d75` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,Band Store,types): add no_notification to markOrderFulfillmentAsDeliveredWorkflow

- #14834 `b4558c61a4a157fff105eb6f3e9b3ebf8dea7799` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): consider price and metadata for multiple items linked to a single variant when resolving line action

- #14569 `3ae4162e0f027c4b7035028e183c07c9936fd0c1` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): force cart refresh on updatePromotionsWorkflow when refreshing items

- #14941 `d3a4ec0123d0bfb6910ff38d6d74ece00083e819` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): ensure full pricing context when adding items to draft order

- #14309 `843dbfe7c8f27b732486c7a8da7b6d63f2fdf967` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): upgrade zod to latest

- #13975 `67499a8aa6b3b53cbdecb5be9fcc358b4e466696` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(currency,payment,pricing,region,order,store,cart,core-flows,Band Store,utils): repo wide currency_code normalization

- #14650 `965adfe2fc15a024270ac384f819479e8b274e10` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(view configuration): Generic introspection and generation

- #14886 `5ef7953ec3bbcdafe452db813e5c5b07a1c1f0ba` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(Band Store,core-flows): include variant images in product export

- #14874 `3717530011fc3adf1e7d2c57db41c833ba83c7fb` Thanks [@yangbobo2021](https://github.com/yangbobo2021)! - feat(order): prevent canceling completed orders

- #14570 `9e1e7082c3437ee2ae01d6752b624d4b4d905604` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): update item metadata on item_update change action

- #14482 `d9af2f5efba391f612ea9f6183702756c3fa4732` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): Pass shipping_methods to computeActions context

- #14450 `c18e1f49a88c3b6a426171afeaf6f7691e8c5bde` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows,types): Fix product export breaking when `sales_channel_id` filter is passed

- #14482 `d9af2f5efba391f612ea9f6183702756c3fa4732` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): Version shipping method adjustments & implement missing creation flow for versioned adjustments

- #14234 `2045c776de29534b86e9c4e0438f7d29f9b79e91` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): allow to update the original order.email on order customer transfer requests

- Updated dependencies [`0929b8d192833e10b6b91795f1ffc478938c3fb7`, `843dbfe7c8f27b732486c7a8da7b6d63f2fdf967`]:
  - @band-store/framework@2.14.0

## 2.13.6

### Patch Changes

- #15000 `19839a44d6551038890c41e02cdff7cf0b45e268` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(core-flows): Fix comments for removePriceListPricesWorkflow input ids

- Updated dependencies [`2b0cd5ff0ce00bf1de1d99632f1bda4073ac035d`]:
  - @band-store/framework@2.13.6

## 2.13.5

### Patch Changes

- #14302 `f01da61c0d973d399bb6c3693bd06b01ee557df6` Thanks [@pepijn-vanvlaanderen](https://github.com/pepijn-vanvlaanderen)! - chore(core-flows): Expose payment & fulfillment status helpers

- Updated dependencies []:
  - @band-store/framework@2.13.5

## 2.13.4

### Patch Changes

- #14836 `fea64dd5d70a5e5fe4e1ea201bbe8a4329ce8703` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): ensure reason ids is an array in `validateReturnReasons` util

- #14842 `d07f70750362e6c78298aba673de4c9db96d3ad6` Thanks [@fPolic](https://github.com/fPolic)! - feat(core-flows,dashboard): carry over promotions flag on claims

- Updated dependencies []:
  - @band-store/framework@2.13.4

## 2.13.3

### Patch Changes

- #14805 `5ccd523b41efaae2f2aaa6d5833b5ce88558d37b` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): prevent exception when deleting product/variant with orphaned inventory

- Updated dependencies [`dbaae9630d26a0806751d5614beadef3e0b4bf07`]:
  - @band-store/framework@2.13.3

## 2.13.2

### Patch Changes

- #14660 `05262c0197bcc3c9cec89a3d95863916dba47af3` Thanks [@Fadyy22](https://github.com/Fadyy22)! - chore(core-flows,Band Store): Pass `created_by` to `createOrderShipmentWorkflow` in create order shipment admin endpoint and pass `marked_shipped_by` to `createShipmentWorkflow`

- #14715 `09a80ab97aad62b65320c745899eb8517d256b40` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows,order): avoid returning recreated credit lines due to version bumping as new credit lines in createOrderCreditLinesWorkflow

- #14670 `29d3dee13700d36a70aa55b8f2a01a5cbc0b42d0` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): only consider captures amounts for credit line amount computation

- #14773 `7a27e8ad8d7771eeecd1fb648a458f56abab71f9` Thanks [@picardplaisimond](https://github.com/picardplaisimond)! - chore(core-flows): Expose product weight as fallback for shipping calculations

- #14665 `77d899e135ed75668ca7d7b01a8ed4f0c1fe0ac8` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat: add forbidden error 403

- #14749 `fe529f214a789b7e94fd0438c631d9f6b5cf5290` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(core-flows): include `stock_location` in validation context for flate rate shipping options

- #14539 `63b7d5f1bee265959db73236c509dc7c9d0c1525` Thanks [@pepijn-vanvlaanderen](https://github.com/pepijn-vanvlaanderen)! - chore(core-flows): Add original item totals for cart refresh

- #14781 `2b795b6cc1ca1b0787f014784c9cbf06d6ab6e96` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): credit only successful refunds upon order cancellation

- Updated dependencies [`7aca778ae56069371f5d26a757d3b2276d524776`, `77d899e135ed75668ca7d7b01a8ed4f0c1fe0ac8`]:
  - @band-store/framework@2.13.2

## 2.13.1

### Patch Changes

- #14511 `2e2fad6c62a51373f97adcd06941f9182657d9d0` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): recompute adjustments changes are added in some draft order flows

- Updated dependencies []:
  - @band-store/framework@2.13.1

## 2.13.0

### Minor Changes

- `a31e72c31c5235240cead2d04e39e5927688eec7` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor bump

### Patch Changes

- Updated dependencies [`a31e72c31c5235240cead2d04e39e5927688eec7`]:
  - @band-store/framework@2.13.0

## 2.12.6

### Patch Changes

- #14561 `dfb27a638d913916ee534ecb0a06ae30f6f8a9de` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): pass created_by to fulfillment input

- #14536 `d60ea7268a00f386f803f0f9e6ffeec4bced50bf` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(translation,fulfillment,customer,product,region,tax,core-flows,Band Store,types): Implement dynamic translation settings management

- #14567 `733026f96c23f01d1ceb2fb09f88aa2b9bb65841` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): Prevent calling list methods unnecessarily in various update workflows

- #14359 `cec8b8e428131d4743d6da98cd5fa0974b8ab9e1` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,types,utils,Band Store): Translate tax lines

- #14528 `28fae96ceed68e2c15c3f27316c5b8601f06c478` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): Avoid throwing if no prices found for variant when adding to cart custom price item

- #14466 `cbc9f3d059a65cc5ee26595e5cbccf7f05781e41` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(core-flows): Emit cart updated event on `deleteLineItemsWorkflow`

- #14476 `7307a5e63fdf8ed6f0ff201a0383f0a0bbfc7002` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(events): Implement priority-based event processing

  - Internal events default to lowest priority (2,097,152) to prevent queue overload
  - Normal events default to priority 100
  - Order placed events explicitly set to priority 10 for immediate processing
  - Support for priority overrides at message, emit, and module levels

- #14597 `b615b71a8e4e273018a09528a8b61116fca6de8b` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows, types): ensure promotion calculation context has required rules data

- #14527 `3df466dadde91b24f52504097c07e1ced4b2b8ff` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows): Allow payment session status captured to be processable upon cart completion

- #14598 `89e6e3e5cbe96f1f64e2cdb33cc2e0d6a221f7a2` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows, types): improve product exports memory consumption

- #14441 `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(deps,framework): add zod as framework dependency

- Updated dependencies [`13476988763368b3b333fa5bc3f613e8eb174fdf`, `8890f284705a4843a57a3800820208f593689a2a`, `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b`]:
  - @band-store/framework@2.12.6

## 2.12.5

### Patch Changes

- Updated dependencies [`233ec261be200fac83002415aa7c0df082339a3f`]:
  - @band-store/framework@2.12.5

## 2.12.4

### Patch Changes

- #14177 `a464e9d907e30bca86a1e8677f8ebf22c38638a2` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): Avoid checking inventory items on fulfillment cancel for unmanaged inventory variants

- #14460 `60f68ff492bc98013fc2f6e0b0b252182a1ee59c` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): export getTranslatedShippingOptionsStep

- #14454 `0ffd79010953315494c1b2ba1def477b7b1d9e4b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(translation): Add support for locale to the graph query

- #14388 `bf4cc12545edc5bf249edc6ecec115c5f7a2b31f` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,utils): Shipping options workflow events emission

- #14338 `c0ec54fc15fece373ac77f547706ab85eb5bc844` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): fix type of getTranslatedLineItemsStep

- #14264 `8055a79c5268528261c88d5f6f245d1003d87a6d` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): conditionally create customer on order email update if unset

- #14417 `43305a562cfba914654da056b0a7e03c40849678` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,utils,core-flows): add reset password metdata

- #14358 `11de7e3e3449f3a93724aaeed770a66840ffcaf9` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(translation,core-flows): translate remaining core entities and sync shipping option <> method translations

- #14356 `7e3ed913a6008a25974634d489f9339c40066125` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Create publishable API key in defaults

- Updated dependencies [`181d5fa67122e4e5f38b91f6b716d35f2d08a204`, `d347e369ce555064e24f2dc3cd93b9e4e73a006d`]:
  - @band-store/framework@2.12.4

## 2.12.3

### Patch Changes

- #14225 `b3cb904e9bce3bfad649e500a9e1be0c9bff0e1a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(utils): currency epsilon

- #14278 `31a057558c0ec6ff7233489a28edc1fda0ec5375` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(types,translations): fix types for translation and locale updates

- #14327 `1743ed7f04585c597c9398a99899817b11310463` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Cart translation sync

- #14267 `f13c23a4b709e31f9b2d42e98acc6e342c494403` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Sync order translations

- Updated dependencies [`7b4dda5a179c78de5e099231ec407836db4c8dbd`, `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29`, `c8a7122ba918751b215dc0b19cf9b09b2c011ab8`]:
  - @band-store/framework@2.12.3

## 2.12.2

### Patch Changes

- #14226 `e4877616c38777f583fe0b58bb10d1c7cf41c0b3` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): sync cart translation synced

- #14277 `a78f68fa46dceb8e201fe60e770bd9ea654390d8` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils,core-flows): add events constant for translations and use it in workflows

- #13963 `842c0f500721e08d448b6c5c80a725072106ccff` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): refresh payment collection inside updateCartPromotionsWorkflow

- #14270 `bca145bdbe674a73731f1672047ca44d426a37c1` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Add locks to order edit flows

- #13841 `fdc2b722d91f446499123d71386e64d9da9265eb` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(Band Store): Allow 'id' in shipping_address and billing_address in validator of store udpate cart route
  fix(core-flows): Update addresses nested fields when 'id' is provided in payload for update-carts step

- #14233 `fea3d4ec49c3a7f7eb7d66bd58499e55ae9ec648` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): Access orderItem.variant safely inside convertDraftOrderWorkflow when containing custom items

- Updated dependencies [`9f7846ae0babbad39947a1f33d236bff8b5098d0`, `fe49b567d6d55ae224095c06c710d31d40887653`, `6dc0b8bed84a330c1c24f4f1331f1ed078430a47`, `356283c359e5c30e0d31e6c6fd0fb8e16c025b78`]:
  - @band-store/framework@2.12.2

## 2.12.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.12.1

## 2.12.0

### Patch Changes

- #14028 `83dd1b616a9e78810001645bb815347cacc5b4d1` Thanks [@pepijn-vanvlaanderen](https://github.com/pepijn-vanvlaanderen)! - fix(core-flows): add order metadata for createFulfillment

- #13977 `9fdc00350a4aa006e4bfc3eddcc499737f18bdf3` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Lock process payment to prevent ingesting payment processing t…

- #13876 `5499cd27494a68836a242cd34eb70fe9c141a713` Thanks [@SGFGOV](https://github.com/SGFGOV)! - fix(core-flows): payment error handling

- #14056 `929607f6925581da67a9e955eedded2aab2bdc16` Thanks [@vethan](https://github.com/vethan)! - fix(fulfillment) Variants changed from managed inventory to unmanaged are now fulfillable

- #14010 `3e2991e44719c2a829696215862ae5fbd368fe37` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): create reservations on draft order conversion to regular order

- #13979 `a5c6f6b1fb944a730b605a120f84b4f38f608f9f` Thanks [@leobenzol](https://github.com/leobenzol)! - fix(core-flows): update SendNotificationsStepInput

- #13306 `78842af1c30de9c7561f10b4129aba4e1f30db27` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix: Compute "virtual" adjustments for order previews

- #14111 `0e73d8d5e3d04d62d444d17138f9cf61b7a236a2` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): lock mark as delivered fulfillment/order flows

- #14176 `8ddf8b4d764ae359d279498f08d85146d55077f0` Thanks [@fPolic](https://github.com/fPolic)! - fix: skip promotion usage limit checks on edit flows

- #14108 `79582bc94eb420f02ad49a81bcbcc02521e5c414` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): prevent completing cart from webhook when order already exists

- #14128 `5da51064d7936c6d7a459cfa8b34eada65163e03` Thanks [@fPolic](https://github.com/fPolic)! - feat: carry over promotions toggle on exchanges

- #14105 `0cb12021efd2b8ad1cd6dc6801c5f29a87b28ad1` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): Add discountable properties in queried fields to avoid overriding discountable properties when set

- #13809 `a9d33bc8d11637230052f1729e85af5e174b2423` Thanks [@willbouch](https://github.com/willbouch)! - fix(core-flows,types): change doc for upload file functions

- #14022 `0a0c2f41d8ef2c70f6e3b73251eb34499e83ea32` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): avoid overriding customer and region from setPricingContext hook result

- #14104 `b81f958d4126ab99f09b9fef3b1f790b4bca1515` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add provider_data to notification model

- #14024 `6746fecd727823b233a90edb1819d08555124464` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore/order custom display

- #14102 `f67bfb9f92b9ea4c06910ea203c685e18fafe1d7` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add from to notification model

- Updated dependencies [`c2c3ad5ba53f1959422fb2d37297a8de8d714782`, `7e3eb6e41316d7b04d32bc7186ed0c78de1aa539`, `beb91d88a2f224075e4fcf35a0ee9483b3124504`]:
  - @band-store/framework@2.12.0

## 2.11.3

### Patch Changes

- #13910 `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Dependencies cleanup and improvements

- #13940 `afb40d437b3cc4ceb015df70985b2f005f40eaff` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Cleanup and organize deps

- #13931 `990691e78a77a46bc581353de47945dd8f5d6928` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(Band Store): do not use transactionId for cart operations

- Updated dependencies [`28c3ea68f5634792848f146ac6af5b27c848bf21`, `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d`, `afb40d437b3cc4ceb015df70985b2f005f40eaff`, `37563987b8fe75c9acfe62957a33e8398977647a`, `13d7d15be594ca413785eebe8f86b47c36cb9830`]:
  - @band-store/framework@2.11.3

## 2.11.2

### Patch Changes

- #13623 `47572816778e21432d0201f4b2642a765c86fdbc` Thanks [@fPolic](https://github.com/fPolic)! - feat: scoped variant images

- Updated dependencies [`85b1f3d43aa8d8e0269a545ef7867733fd0eb8e2`]:
  - @band-store/framework@2.11.2

## 2.11.1

### Patch Changes

- #13747 `5df903f5fb52d1e37d13bfe72ed9c226c1eb46b4` Thanks [@pepijn-vanvlaanderen](https://github.com/pepijn-vanvlaanderen)! - Added shipping method data to tax module context

- Updated dependencies []:
  - @band-store/framework@2.11.1

## 2.11.0

### Patch Changes

- #13702 `0cbd9f0bc315b3eda1770ac301061f1576856387` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve caching rollout

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- #13182 `9c957e1da04c1f86d1caa7de279993453b76bb63` Thanks [@leobenzol](https://github.com/leobenzol)! - chore(core-flows): only allow published products in addToCartWorkflow

- #13594 `1b57e5c58ab5c656da398b69444c2b9baba2e35e` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(core-flows): skip locking on sub workflows by default

- #13451 `7dc3b0c5ffdf8eb7070ee5cfd8155c6c4de5c0b1` Thanks [@fPolic](https://github.com/fPolic)! - feat: support limiting promotion usage by attribute

- #13645 `76aa4a48b3cbec519ab16c96cc87ee3288de28de` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/workflows concurrency

- #13435 `b9d6f73320c36c53235b12fb8397b30a448917f0` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(): distributed caching

- #13695 `924564bee505fc8787945c6d683243cef5799625` Thanks [@willbouch](https://github.com/willbouch)! - fix(core-flows): customer id filter not working in getOrderDetails

- #13668 `8acfb88c2b627ba6ba4a2827bcb78c3bb74c22f8` Thanks [@willbouch](https://github.com/willbouch)! - fix(core-flows): lock draft order workflows

- #13724 `a61d1825eaef4bece20704fe6ae21d9da841b2f2` Thanks [@willbouch](https://github.com/willbouch)! - fix(utils,core-flows): fix import erasing tags, categories and others

- #13598 `087887fefb948e6676001ad2dc2cb265ae6f7430` Thanks [@willbouch](https://github.com/willbouch)! - feat(core-flows): support ad hoc returns

- #13450 `8ece06d8ed6a197ebb370918c49a3ec5c21dd186` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Upgrade mikro orm 6.5.4

- #13649 `bb08edd41fd954306b0feacf6a6a69b87d9287dd` Thanks [@willbouch](https://github.com/willbouch)! - fix(Band Store,file-local,file-s3,core-flows): fix csv parsing special characters

- #13511 `5ea32aaa44a47b143c46f895032478334b7379ca` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Cart workflow price calculation for different items but same variant

- #13712 `c54c5ed6de2c9686f89aeef86c5c607c4b5f1cf3` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): improve cart operations + Mikro orm 6.4.16

- #13744 `1d2b4566fda0bdd826c3d1fe090b1ee3efdbd9bd` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Change order of operations in refundPaymentWorkflow

- #13527 `458dd04bbf70159ec42254e91675c7a1f1d344d8` Thanks [@leobenzol](https://github.com/leobenzol)! - fix(core-flows,types,Band Store): pass /store/shipping-options fields to workflow

- #13704 `86c975258b7f3a2f1d49117f7a4139806812a8e7` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows): fix shipping_total showing as 0 in createFulfillment method

- #13738 `fc2ded4b100432236a14d9f6409e8c6ea5a84269` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): fix warning for when usage in updateOrderTaxLinesWorkflow

- #13749 `4e3090ab263b8c0da97e91d6586275d0f8609db5` Thanks [@willbouch](https://github.com/willbouch)! - chore(core-flows): send error on csv parsing error

- #13769 `516f5a38960f1ea05a2c696e0079d2e4c34d5c86` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: workflow async concurrency

- Updated dependencies [`12a96a7c7015f011f5e29a1d387f835e514ba536`, `b9d6f73320c36c53235b12fb8397b30a448917f0`, `8ece06d8ed6a197ebb370918c49a3ec5c21dd186`, `92d30b28f45b4037cd73c180c8f257070cf49bd4`, `02b6d013822b9665f868c4ea6d1b5cfe58723459`]:
  - @band-store/framework@2.11.0

## 2.10.3

### Patch Changes

- #13516 `25634b038248ab6501af719faec79b59b496bada` Thanks [@adrien2p](https://github.com/adrien2p)! - test(): test dynamic max workers and improve CI

- #13497 `9563ee446f2b3a2e0cd4a4a33959ed55be5f268a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(utils): subtotal calculation discounting returned items

- #13468 `1071296236d84b70b3b31034eb95984445feb020` Thanks [@willbouch](https://github.com/willbouch)! - feat(core-flows): hook to set shipping opt context when listing

- #13501 `040fbf3220420b43871e33acc6686a6cedcf88fc` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(core-flows): use directory convention for locking steps

- #13508 `8565dcfc46c9ccc923a44582bb215c615ac2792f` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows,Band Store): don't allow negative line item quantity

- Updated dependencies [`25634b038248ab6501af719faec79b59b496bada`]:
  - @band-store/framework@2.10.3

## 2.10.2

### Patch Changes

- #13353 `fb71bc64052ff7ddf4e5a44c6e91e6a3a3636317` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): handle cacluated shipping options on draft orders gracefully

- #13424 `b776fd55dcd959fdd495dd11ff9b006a31a623ce` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): lock on cart operations

- #13418 `2fe68a975b75a925e1e16c7e08c245abf63db0c5` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Tweak update payment collection and refresh shipping method workflow execution

- #13477 `29dca1ca481e34cc17678b7b4f0e854d3a404acd` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): update cart line item route fetching

- #13385 `ca471eb8f45d01cebe3eb65644de1b10e796e7ba` Thanks [@gladius882](https://github.com/gladius882)! - feat(core-flows): return type in createPaymentCollectionForCartWorkflow

- Updated dependencies [`b4c0f131b70ba950339c1ca4d81b5ce062a588a3`, `a4b72f9a21fd1d278c622fcd45d24bb9bfb1e0a8`]:
  - @band-store/framework@2.10.2

## 2.10.1

### Patch Changes

- #13336 `8176d0f684be95331ce3bec31d67c5f857f9c85a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): revert idempotent cart

- Updated dependencies []:
  - @band-store/framework@2.10.1

## 2.10.0

### Minor Changes

- #13236 `9412669e654c994e2dbee9cf61c18004d79f6475` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): idempotent cart operations and nested workflow deletion lifecycle fix

### Patch Changes

- #13263 `486621383a79e83c831933c1a0ffdae58a695cb0` Thanks [@willbouch](https://github.com/willbouch)! - feat(dashboard,core-flows,js-sdk,link-modules,promotion): free shipping promotion in dashboard

- #12572 `2f594291ad8d227b499b80a5bfe66f5963d42d6a` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows, dashboard, types): improve allocation flows in Admin

- #13302 `5382afccfa0740bba04372a8613c537ff6a69cbe` Thanks [@fPolic](https://github.com/fPolic)! - chore(core-flows): throw Band Store error for exceptions in the fulifllment flows

- #13226 `67d3660abf3ceeac3f04006fe5e92d2fa7c0ccad` Thanks [@willbouch](https://github.com/willbouch)! - feat(dashboard, core-flows): associate shipping option to type

- #13280 `57077406f9ce5d3bc1008b643a055f294de838eb` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows, fulfillment): don't cascade delete shipping option type when shipping option is deleted

- #13321 `b111d01898a621c4280457021677d9b89e20e10d` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): order payment status precision

- #13281 `fc4925327334c540c0125a91e81794c3c1f340e7` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(core, event-bus): Compensate emit event step utility

- #13076 `6b04fbcc50cef6bbe2b65269d1b7d88949e4fa37` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): pass backorder flag when recreating reservations after fulfilment cancelation

- #13191 `34c3c14e0a1491ab80473605018b97981544167d` Thanks [@willbouch](https://github.com/willbouch)! - chore(types, api): support shipping option type api endpoints

- #13179 `eb376eb4cf9cc6fe0ce2a6724e0df81b27bc7b87` Thanks [@almousa1990](https://github.com/almousa1990)! - fix: handle missing variants and preserve zero unit_price in prepareLineItems

- #13242 `492e0189573ffad4977a3559d71f39bf94d8b45d` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,core-flows,js-sdk,types,Band Store): listing order's shipping option

- #13251 `6264a6262b0220c70ad35c0d56a93a39218ccb80` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Cart operation should calculate item prices accounting for quantity

- #13316 `be62cf87c7ed975bd0880133588cc806751715cb` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): list order shipping options param type

- Updated dependencies [`e413cfefc2e0579ba7c5299dc4f4270310e39c2c`, `e2213448ac9eb93318570fde2807a3036108d44b`]:
  - @band-store/framework@2.10.0

## 2.9.0

### Minor Changes

- #13140 `acf6bbc2ec1d90e3b0100c86f56e96b38fa7c67a` Thanks [@willbouch](https://github.com/willbouch)! - chore(code-flows): throw error on invalid promo code

### Patch Changes

- #13037 `9fb5baa912674b6d35492b147e0f22d8f8330a24` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): guest email change to another guest email

- #13103 `f6736d96616aaff51399b2733905f9e340efc8be` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(core-flows): refresh payment collection using raw total

- #12960 `1bdf602f1c1da181e2839858d2f7e8aea503573a` Thanks [@scherddel](https://github.com/scherddel)! - This fixes the discount\_ calculation logic and promotion tax inclusiveness calculation

- #13056 `6e66e36d0814a524440c05a99c849c3d62e48ed3` Thanks [@jbrigbyjs](https://github.com/jbrigbyjs)! - fix(core-flows): createCustomerGroupsStep rollback delete created customer groups.

- Updated dependencies []:
  - @band-store/framework@2.9.0

## 2.8.8

### Patch Changes

- #12919 `a28226af80a8880afbdb926a5001f0cb0d89fdc9` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): updating tax lines when draft order shipping is removed

- #12958 `40625c82d6deb28ecb4e4c0f911c28fdd7356bf7` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): correctly delete related inventory item when deleting variant

- #12920 `8c4228fc42e717f9ab72230040e708f606a585b7` Thanks [@riqwan](https://github.com/riqwan)! - fix(link-modules,core-flows): Carry over cart promotions to order promotions

- #12969 `7669dbb03e2f65fa76cff1c5b90a0777e475cb47` Thanks [@juanzgc](https://github.com/juanzgc)! - fix: accepted values in import with template

- #12962 `2c2528a08751945d6f0363473605f1a8ef1a8a2a` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(core-flows): useQueryGraph util return type

- Updated dependencies [`43fb06ecc2d87ea2a11e12524679c142eb890ec7`]:
  - @band-store/framework@2.8.8

## 2.8.7

### Patch Changes

- #12881 `46bf7ae7aead3f33485ce8adebb602eda305088c` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(core-flows): Locations levels check in draft order and order edit flows

- Updated dependencies []:
  - @band-store/framework@2.8.7

## 2.8.6

### Patch Changes

- #12825 `9a62f359f1c954bcc09c57e4660f90d4b010e51c` Thanks [@riqwan](https://github.com/riqwan)! - fix(core-flows,workflows-sdk): compensate account holders only when its created

- Updated dependencies []:
  - @band-store/framework@2.8.6

## 2.8.5

### Patch Changes

- #12643 `f2cb528a5650fe112ca8eeb4bdffc5f0b217338a` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: wire up direct uploads with local file provider

- #12813 `d517dbd66a47817d1270c278b03add9a5c4244cb` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add support for jwt asymetric keys

- #12412 `2621f00bb035a6b909f9498a2bc98fdba8570ba9` Thanks [@fPolic](https://github.com/fPolic)! - feat(promotion, dashboard, core-flows, cart, types, utils, Band Store): tax inclusive promotions

- #12493 `672871b733c6e82bd9e68cf90300ff78cf44727a` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): cart complete order address creation

- Updated dependencies [`cbf3644eb7c8a24eaed879647b58c9ece3373c0e`, `d517dbd66a47817d1270c278b03add9a5c4244cb`, `820a936b9836ae83e7a45de1e1ed0488d8cde2fd`, `00505b4f8e49873123111752adfda47ccb35ab46`, `94b62c67249d13ec6342411cf7efdedfd0ac47e1`]:
  - @band-store/framework@2.8.5

## 2.8.4

### Patch Changes

- #12546 `c4dd29046183bfe3c99b7ec00414449e53478d22` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): reservation management on order edit and draft order confirm

- #12646 `490bd7647fca30951d14c7c78c1b809379ebd870` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(core-flows): use cart_id to complete cart on payment webhook and lock cart before completion

- #12574 `cf0297f74af1b043363ffbd5a23ca0933097a69d` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: implement stream based processing of the files

- Updated dependencies [`7685d66c0775167994150e61a8b628ad6289ce23`, `cf0297f74af1b043363ffbd5a23ca0933097a69d`, `1f5f50010ae42f8d5b9924edcd75612b1f336463`]:
  - @band-store/framework@2.8.4

## 2.8.3

### Patch Changes

- #12527 `fca5ad77b41856867ec68b1e46d04f1bb71cbc76` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: process import from pre-processed chunks

- #12567 `4e49cebcf0f053cb89012276e935a7ec62a12046` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows, types): export steps and types related to credit lines

- #12540 `3071d09a03205597158afe79d55dd43643a97026` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): skip location check if variant is not managed when preparing inventory confirm

- Updated dependencies []:
  - @band-store/framework@2.8.3

## 2.8.2

### Patch Changes

- #12503 `9f4d32b2201d8c87d84c59b9a1ca59e00bcc6af1` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): fulfilment cancelation with shared inventory kit item

- #12473 `e149a998862272fff80573a623c4d9010cb0b104` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: define validators and use normalize-products step

- Updated dependencies []:
  - @band-store/framework@2.8.2

## 2.8.1

### Patch Changes

- #12396 `4602163b568962f8115b83971d67a6c55c2b8a98` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: create CSV normalizer to normalize a CSV file

- Updated dependencies []:
  - @band-store/framework@2.8.1

## 2.8.0

### Minor Changes

- #12455 `2c49e8b7332420c9fc949f9429a339fcbf5637af` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Restructure the cart-completion workflow

### Patch Changes

- #12353 `469ecef3c52797b812c9cb8a4410f632e8de8b8c` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor revamp of cart completion

- #12338 `a53d645f8aab30135baebac29f9645dd35d47632` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows,utils): move fulfillment workflow events

- #12326 `90c61d189806894c56bfd5686807406c800cfdeb` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(core-flows): add missing remove remote links

- #12380 `c4dd805849fee483d52ee61078e15f9be111b414` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): export order-related workflows

- #12320 `89859987565b1fc872c7cd1c6d23144b97f454bc` Thanks [@fPolic](https://github.com/fPolic)! - feat(core-flows,utils): add Order Edit events

- #12269 `d7a273ff2def96420054f31114a46294be6ee968` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): handle inventory kit items in mark-as-shipped and mark-as-delivered flows

- #12425 `fff285f8d2f3020a24b83066fa4250130fdcf229` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(core-flows): Emit cart trasnferred customer

- #12263 `5fe0e8250d0255866a68db32d4b54dab8ab66e52` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): do not cancel authorized payment on cart complete failure

- Updated dependencies [`b868a4ef4deb7df09d6156a907f4c883cd55a3fd`]:
  - @band-store/framework@2.8.0

## 2.7.1

### Patch Changes

- #12232 `24af8f2d8e27d0f842e6e596bc4c695882f67737` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: expose beforeRefreshingPaymentCollection hook

- #12124 `01542f69737b48346d924670296c551e4c4b47ec` Thanks [@fPolic](https://github.com/fPolic)! - feat(core-flows,js-sdk,Band Store): draft order shipping removal

- #12115 `413a0da26c7e9acffe9cc087fd77500efc76191a` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): draft order reservations + emit order placedevent on convert

- #12227 `ad74ba2ca4c86b38c91c342edfad077cd132cc2f` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows, link-modules): return fulfillment creation

- #12221 `19d71fdc63547886cfc238c6b680370a80d50b50` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): export registerOrderDeliveryStep

- Updated dependencies [`ee35f3ce9097832c10cdf2fd168763088e6c3fcb`, `2f6963a5fbea05537680cb1b1f6a2b9822c36325`, `b8902637251e9ed4f8762ef280659bbab6d967de`]:
  - @band-store/framework@2.7.1

## 2.7.0

### Minor Changes

- `386205d0f41828b82d519d2f5b8e07b41907a8ae` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Change customer to account_holder to be one-to-many

### Patch Changes

- #12051 `5f3a82f5c341d4a98a7a2ab92563f6cdae1cdce1` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): applying product type promotion

- #11832 `95e89a39f347c8af6a5960943af56965bc3a07ba` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): cancel/refund payment on cart complete error

- #11891 `b1b3b484747a110f720d9c1d086696bbfba86bda` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: Set pricing context hook

- #11569 `cb6249320e7322e8eabfec8434f1278f8d63e96c` Thanks [@riqwan](https://github.com/riqwan)! - feat(order,types,Band Store,core-flows): fix(types,order,Band Store,core-flows): create order credit lines during order refund

- #11994 `1f8fab36361aa8e473ffe6c411c8598a916a6d3f` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,types,order,cart): assign tax lines only to regular products

- #11790 `8385a5e34d9528eb3d80d16f391ee7f44a6e5d90` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): recreate fulfilment reservations on cancelation, handle inventory kits in fulfillment flows

- #11958 `a8513019db08d1345e79a15aea7f11389b4918d4` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows,dashboard): handle PaymentCollection managemenet on OrderEdit when there is authorized amount

- #11872 `9dd62d93bd9e2acccc2e9f22bc029fd2b0df3234` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,types,utils): make payment optional when cart balance is 0

- #11977 `01089d5bc81bc92311bb43b2d57d987fee378030` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): skip prices list ops when no data

- #12103 `9ac74eead4760d6c92676d451e6f25c2305b1852` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,types): export fetchShippingOptionForOrderWorkflow

- Updated dependencies [`ec56a8bc857a74788df6523af25914da95c4c1d8`, `2a18a75353f872b0cb4c203afc08cfd82f778428`]:
  - @band-store/framework@2.7.0

## 2.6.1

### Patch Changes

- #11715 `b7678983a9b3e5c4d88282054b37b6c517329bd7` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: improve tax lines

- #11735 `70eaaa91965dbe3a641dc634b4e81069d73846ed` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows): fulfillment reservation check

- #11738 `3b470f41427e487c68f89b8ee8155de716ffe861` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove ranges on Band Store packages

- #11756 `84f991192ec288f90af36c5352448b2785901d1a` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(workflows-sdk): Allow when then in parallelize

- Updated dependencies [`cc1309d3709b251683a0cda0ced448f8bf9f514e`, `3b470f41427e487c68f89b8ee8155de716ffe861`, `20cd59e622463fbd46506275648ce681869adcdf`]:
  - @band-store/framework@2.6.1

## 2.6.0

### Patch Changes

- #11226 `93cbc6b6695f236fa39b66169de971228888f1b9` Thanks [@bouazzaayyoub](https://github.com/bouazzaayyoub)! - fix: add additionl data to product categories hook

- #11617 `322d108c0395757b4655a1e0055d722acf127b36` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): pass cart as reference to subflows

- #11666 `d1efad9bf05ca80959e8b50d74b74167fc1b0064` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve cart update line items

- #11632 `caf83cf78cb6d2dbd1837f6814062dafecbd04fa` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Prevent workflow steps to even call modules when not necessary

- #11631 `38beeb157eadcd7dabe814119c48b5ddbc17fe20` Thanks [@riqwan](https://github.com/riqwan)! - fix(core-flows): support 0 as a valid unit price for custom line items

- #11538 `03731c7660fe5dca3c6d3c38a2a71eb2ea89e192` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): reserve inventory from locations with availability

- #11712 `7dbec10b3bdde8a9f869080d5ef2c3c97fca1077` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(order): summary raw totals

- #11602 `fa1793e8e92164251c776859dea7a5e312ef9432` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): avoid overfetching to refresh cart

- #11664 `e23f204b7ca0f195e36fef2ba0bae7a686b8da4f` Thanks [@fPolic](https://github.com/fPolic)! - fix(core-flows, dashboard, Band Store): prevent creatiion of a fulfilment without items

## 2.5.1

### Patch Changes

- #11504 `efd66c0d59e043218fa66163a7e9cd72bb6b5de1` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(core-flows): Allow adding shipping methods through order edits

- #11465 `b37010857ab1bccda96b4694298659cc6d8f14ef` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(core-flows): Fix line item ids passed to deleteReservationsByLineItemsStep

## 2.5.0

### Patch Changes

- #11190 `e98d3c615e8a42e09974ded9cc3ca3277e3a9217` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(orchestration): validate missing PK filters when throwIfKeyNotFound

- #11315 `da25980d2445a09a51220c0d4f005f41659057a6` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(core-flows): update the TSDocs of new steps

- #11362 `acefcd7d8052601308d75daf004069e95eb78a89` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(core-flows): Fix broken import of BandStoreError

- #11285 `f07af7b93c86673e730dc4e5eba8df2572013f9f` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(dashboard,core-flows,types,Band Store): Allow editing Order metadata

## 2.4.0

### Minor Changes

- #10292 `cc73802ab3821d2c667942bd887efb7476205547` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: upgrade to mikro-orm 6

### Patch Changes

- #11061 `2d0e50624fa37af5f74e46048a83ce3b39b210aa` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): change some types to interfaces

- Updated dependencies [`0deffe7b9b9a1055813249b17057b7bba01b78ac`, `cc73802ab3821d2c667942bd887efb7476205547`, `13fe2f6776b22c401d131f184fc3600ef4008383`, `e53b8b0a9708d2eb46258ca417b6ff6abbd5f3d9`]:
  - @band-store/framework@2.4.0

## 2.3.1

## 2.3.0

### Patch Changes

- #10888 `1758bfb8d042fa9fc82f23c36ccd61e4a439448e` Thanks [@riqwan](https://github.com/riqwan)! - fix(dashboard, core-flows): improvements to order page on canceled orders

- #11012 `7be47354e1eb95141f420ef9c74f98b3e2bd8315` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows,Band Store): use deleteRefundReasonsWorkflow in delete /admin/refund-reasons/:id

- #10958 `c5a207144e2f04f232a1beb3586422fc93047ed2` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(core-flows): process payment capture condition

- #10967 `11f98f374cb0b77b1c80e72328fc68b5e22d5b87` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(core-flows): validation hook on cart mutations

- #10923 `7232a8a93053adedd964659c1f370aa9fddc0e44` Thanks [@riqwan](https://github.com/riqwan)! - fix(core-flows): return refunded when all captured payments have been refunded

- #10630 `bc22b81cdf9591912744f448c74d45bcb0f11e0c` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(inventory,dashboard,core-flows,js-sdk,types,Band Store): Improve inventory management UX

## 2.2.0

### Patch Changes

- #10732 `699bb6dc2424053bdc73e70eecdd8fb8372b32a4` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): export updateTaxRegionsStep

- #10832 `99a06102a246c119f69d1873f3cdeee9ff1241a0` Thanks [@riqwan](https://github.com/riqwan)! - fix(stock-location,core-flows,types): update existing address when updating stock location address

- #10768 `bbf790ea44d0ce0a128a07e66224735f5a2dccf0` Thanks [@thetutlage](https://github.com/thetutlage)! - Refactor/deprecate remote link

- #10667 `47594192b79fbc798cfaf21821b60673745d1374` Thanks [@riqwan](https://github.com/riqwan)! - feat(dashboard,core-flows,types,utils,Band Store,order): Order cancelations will refund payments

## 2.1.3

### Patch Changes

- #10408 `c9b8db04c1b35f1cf129bb9ad74789fbc2881815` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Support custom line items

- #10643 `9d85e663b8bac2240ec3e3bf99377dd0eac72160` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): use useQueryGraphStep instead of useQueryStep

- #10673 `5d1098ceb9713225186fce16c0306b0539d71fc5` Thanks [@riqwan](https://github.com/riqwan)! - fix(core-flows): refresh payment collections upon shipping changes

- #10640 `1232a43fcec50b01477149089bbb957dec15ba76` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(core-flows): export getItemTaxLinesStep

## 2.1.2

### Patch Changes

- #10579 `6367bccde88158d524dfa01e5a8123ffa3461c10` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store, pricing): Cart workflows handle pricing context accurately

## 2.1.1

### Patch Changes

- #10459 `90ae187e097c42a224c701f31cbc2924ea6ee86b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix: when/then step name

- #10489 `f95c4e240c4a5ca0fb88a09636c3d8a2266de279` Thanks [@riqwan](https://github.com/riqwan)! - fix(promotion, core-flows): updating cart with removed promotion removes adjustments

- #10193 `559fc6587aa02cd4f8fbc9e97ff1f1ba094a4b1a` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Deleted default sales channel should be prevented

## 2.1.0

### Patch Changes

- #10374 `11bd55613304350a5478fd4c001e2309cca3a995` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,framework,Band Store): list shipping options pass in cart as pricing context

## 2.0.7

### Patch Changes

- #10313 `030ee871506cfe178702853714feaaa33f1d9cf4` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(core-workflows): Fix data returned from reset password event.

  Deprecate `actorType` in favor of `actor_type`. The field `actorType` will be removed in a future version, so please update your code to use `actor_type` instead.

## 2.0.6

## 2.0.5

### Patch Changes

- #10065 `fc5d2b5fcacddc7e4451997b8cd1c70e6f95326c` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Order edit quantity diff

- #10136 `d933b3f1e4a92e841e881a1fd173df806008cc4a` Thanks [@thetutlage](https://github.com/thetutlage)! - Refactor/finish rename order

- #10207 `6486f2bcce1d128ae8126091f252e67aa896ff17` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store): remove cart customer validation + rename workflow

- #9980 `2344012d1ccfae998bceb0c2b75ba9a17f84c18b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Create Order before payment capture

## 2.0.4

## 2.0.3

### Patch Changes

- #9977 `1bae311a293096c9a8019b825a2fcd07e1918632` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Keep customer when updating cart

## 2.0.2

### Patch Changes

- #9929 `c1c85ef952441eacfe8b6c2ffa9304ac4433053f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(core-flows,Band Store): Include region_id in shipping option retrieval

## 2.0.1

## 2.0.0

### Major Changes

- #7341 `2e42e053d4c9d5445d227bdc268c66713aad8e2e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Band Store 2.0

### Patch Changes

- Updated dependencies [`2e42e053d4c9d5445d227bdc268c66713aad8e2e`]:
  - @band-store/framework@2.0.0

## 0.0.9

### Patch Changes

- #7077 `8d356217bd` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows,types): add batch updates to price list prices

- #6864 `e944a627f0` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: region payment providers management workflows/api

- #6880 `1a48fe0282` Thanks [@sradevski](https://github.com/sradevski)! - Add v2 product type endpoints and adjust the product module

- #6872 `86f499de2f` Thanks [@sradevski](https://github.com/sradevski)! - Aligned pricing module price set API with convention

- #6876 `1bcb13f892` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Remove sales channels from pub keys

- #7095 `62b9dcc6c1` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): cancel fulfillments API

- #6851 `ea8d9d4d42` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: API key sales channel link

- #7175 `e26cda4b6a` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, core-flows, types): Allow to update the rules from a shipping options

- #7101 `18f3aacee6` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): add create shipment api for fulfillments

- #6962 `65794f4bb5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: Create shipping options API

- #6905 `edafe7db47` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(link-modules, core-flows, Band Store): add sales channel location management endpoint

- #6800 `4cf71af07d` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, Band Store): add update stock location endpoint to api-v2

- #7153 `4b57c5d286` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remote query supporting context

- #7028 `c78915c7c5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add support for shipping options prices update

- #7101 `18f3aacee6` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): fulfillment API: create

- #7150 `d2393f004e` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows, Band Store): add shipping methods to cart API

- #7018 `f175cac4af` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, Band Store, types): add reservation item endpoints

- #6995 `0a9b9b073d` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store, core-flows,types): delete fulfillment set, delete shipping profile

- Updated dependencies [`e603726985`, `d333db0842`, `1eeb1e9de3`, `20e8df914e`, `a164c0d512`, `e0b02a1012`, `e944a627f0`, `cc557c8752`, `dd35a4dbff`, `1bcb13f892`, `82a176e30e`, `5d9aea053c`, `232322d035`, `45c49e89f2`, `71aeda7347`, `528ef4ca90`, `65794f4bb5`, `4b57c5d286`, `3affcc2525`, `667c8609cc`, `edcafa140c`, `a6562d2a41`, `8fd1488938`, `1c6ba4468e`]:
  - @band-store/workflows-sdk@0.1.6
  - @band-store/orchestration@0.5.7
  - @band-store/modules-sdk@1.12.11
  - @band-store/utils@1.11.9

## 0.0.8

### Patch Changes

- #6759 `70859397c0` Thanks [@sradevski](https://github.com/sradevski)! - Align the v2 product HTTP endpoints to follow conventions

- #6801 `deab12e27e` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(types, Band Store, core-flows): add delete-stock-location endpoint to api-v2

- #6778 `7e93eda1a4` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Feat: workflow cancel

- #6796 `9073d7aba3` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): rename psma to prices

- #6819 `7bc7adeeb4` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Create user account

- #6787 `68b9812aa1` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, Band Store): add create stock location endpoint for api-v2

- #6748 `05e857d256` Thanks [@sradevski](https://github.com/sradevski)! - Updated the signature of the product module variant and options endpoints to follow our conventions

- #6791 `20132d7cea` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store, core-flows): add retrieve stock location endpoint to api-v2

- Updated dependencies [`06f22bb48a`, `7e93eda1a4`, `56481e683d`, `9073d7aba3`, `4974f5e455`, `3ca957ec0f`, `1ef9c78cea`]:
  - @band-store/modules-sdk@1.12.10
  - @band-store/orchestration@0.5.6
  - @band-store/workflows-sdk@0.1.5
  - @band-store/utils@1.11.8

## 0.0.7

### Patch Changes

- #6648 `9288f53327` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,utils): added price list prices upsert and delete workflows + endpoints

- #6539 `557d86afbf` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows): update cart adjustments on item updates

- #6474 `ac86362e81` Thanks [@riqwan](https://github.com/riqwan)! - feat(workflows-sdk,core-flows,Band Store,types): add workflow to add promotions to cart

- #6580 `e4acde1aa2` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows,types): add cart <> tax integration workflows + steps

- #6696 `04a532e5ef` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): remove rules from promotion endpoints + workflows

- #6418 `1ba35b02dd` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Cart SalesChannel link

- #6692 `640eccd5dd` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): add rules to promotion endpoints + workflow

- #6667 `c3c4f49fc2` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): add automatic-taxes to region + generate tax lines endpoint

- #6648 `9288f53327` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,pricing,types,utils): added price list workflows + endpoints

- #6684 `b78f863d80` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store): added api + workflows for rule types CRUD

- #6711 `0c705d7bd4` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types): split upsert workflow to create and update

- #6727 `c20eb15cd9` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store, core-flows, types): Add delete-location-level api-v2 endpoints

- #6702 `e5945479e0` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,core-flows,types): adds update promotion rule endpoint + workflow

- #6514 `f5c2256286` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): adds update cart API with promotions

- #6561 `d550be3685` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,link-modules,modules-sdk): add cart <> promotion link as source of truth

- #6708 `62d5803b20` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store, core-flows, inventory-next): add delete-inventory-item endpoint

- #6327 `4d51f095b3` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(core-flows, types, utils, Band Store): add user endpoints to api-v2

- #6698 `cc1b66842c` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,types,utils): add/remove fulfillment shipping option rules

- #6392 `24fb102a56` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: CartRegion link, definition + workflow

- Updated dependencies [`9288f53327`, `ac86362e81`, `56cbf88115`, `36a61658f9`, `0c2a460751`, `25d176b851`, `c319edb8e0`, `0b9fcb6324`, `586df9da25`, `b3d826497b`, `a86c87fe14`, `640eccd5dd`, `8ea37d03c9`, `339a946f38`, `9288f53327`, `8dad2b51a2`, `8a946beb75`, `a6d7070dd6`, `168f02f138`, `f5c2256286`, `000eb61e33`, `d550be3685`, `4b06c17dc0`, `62a7bcc30c`, `f611865553`, `a8794d48de`, `8f8a4f9b13`, `6500f18b9b`, `ce39b9b66e`, `a6a4b3f01a`, `4625bd1241`, `56b0b45304`, `cc1b66842c`, `24fb102a56`, `e85463b2a7`]:
  - @band-store/utils@1.11.7
  - @band-store/workflows-sdk@0.1.4
  - @band-store/orchestration@0.5.5
  - @band-store/modules-sdk@1.12.9

## 0.0.6

### Patch Changes

- #5923 `3db2f95e65` Thanks [@fPolic](https://github.com/fPolic)! - feat: Sales Channel module

- Updated dependencies [`12054f5c0`, `3db2f95e65`, `96ba49329`, `45134e4d1`, `884428a1b`, `882aa549b`]:
  - @band-store/utils@1.11.5
  - @band-store/modules-sdk@1.12.8
  - @band-store/orchestration@0.5.4
  - @band-store/workflows-sdk@0.1.3

## 0.0.5

### Patch Changes

- #6152 `99045848f` Thanks [@riqwan](https://github.com/riqwan)! - feat(Band Store,types,core-flows,utils): added delete endpoints for campaigns and promotions

- #6130 `da5cc4cf7` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,Band Store,utils): promotion and campaign create/update endpoint

- Updated dependencies [`68ddd866a5`, `72bc52231c`, `99045848f`, `a9b4214503`, `d85fee42e`, `5e655dd59`, `b782d3bcb7`, `2b9f98895e`, `302323916`, `da5cc4cf7`, `daecd82a7`, `738e9115e`, `06b33a9b4`, `b6ac768698`, `19bbae61f8`, `130c641e5c`, `fade8ea7bf`, `8472460f53`]:
  - @band-store/utils@1.11.4
  - @band-store/modules-sdk@1.12.7
  - @band-store/orchestration@0.5.3
  - @band-store/workflows-sdk@0.1.2

## 0.0.4

### Patch Changes

- #5810 `fe007d01b` Thanks [@fPolic](https://github.com/fPolic)! - feat: sales channel <> order link

- #5459 `76332ca6c` Thanks [@fPolic](https://github.com/fPolic)! - feat: SalesChannel <> Cart joiner config

- Updated dependencies [`6d1e3cc02`, `42cc8ae3f`, `45996d58a2`, `9cc787cac4`, `bf63c4e6a`, `355075097`, `8402f4697`, `925feea04`, `3f6d79961`, `fbee006e5`, `c41f3002f`, `a0dd18c12`, `d16d10619`, `890e76a5c`, `fe007d01b`, `76332ca6c`]:
  - @band-store/modules-sdk@1.12.6
  - @band-store/utils@1.11.3
  - @band-store/orchestration@0.5.2
  - @band-store/workflows-sdk@0.1.1

## 0.0.3

### Patch Changes

- #5752 `079f0da83` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,pricing,Band Store,pricing,types,utils): Price List Prices can have their own rules

- #5811 `07107f356` Thanks [@riqwan](https://github.com/riqwan)! - feat(orchestration,core-flows,Band Store): product import uses workflows

- #5725 `85cda7ce3` Thanks [@adrien2p](https://github.com/adrien2p)! - slightly improve create cart workflow

- Updated dependencies [`079f0da83`, `c4deeee48`, `07107f356`, `8f25ed8a1`]:
  - @band-store/utils@1.11.2
  - @band-store/modules-sdk@1.12.5
  - @band-store/orchestration@0.5.1

## 0.0.2

### Patch Changes

- #5705 `ddbeed4ea` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(workflows, core-flows, ...): Split workflows tooling and definitions

- Updated dependencies [`1e39a95f8`, `a39ce125c`, `ddbeed4ea`, `18afe0b9a`, `de8f74867`, `ffb0c7b4c`, `010560fd2`, `9f9db3969`, `dc5750dd6`]:
  - @band-store/workflows-sdk@0.1.0
  - @band-store/orchestration@0.5.0
  - @band-store/utils@1.11.1
  - @band-store/modules-sdk@1.12.4
