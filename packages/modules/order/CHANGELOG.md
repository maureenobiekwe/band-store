# @band-store/order

## 2.22.4

### Patch Changes

- Updated dependencies [`3a0cbbb`, `3d85f84`]:
  - @band-store/framework@2.22.4

## 2.22.3

### Patch Changes

- #17618 `385c4ff` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: update jest to v30.5.2 and use the `--testPathPatterns` flag in test scripts

- Updated dependencies [`9692b99`, `2e0d8ae`, `385c4ff`, `2276c84`, `a6a4254`]:
  - @band-store/framework@2.22.3

## 2.22.2

### Patch Changes

- #17510 `7d39751` Thanks @band-store-os-bot! - fix(order): limit claim write-offs and reinstates to the remaining quantity

- Updated dependencies [`ca881e5`, `9d55082`, `26e5807`, `52caddd`]:
  - @band-store/framework@2.22.2

## 2.22.1

### Patch Changes

- #17471 `0b533907ac11d9cb3a80355ae7dee6ac51cba150` Thanks @band-store-os-bot! - fix(order): fix count query for paginated cross-module filters on orders

- #17431 `879fb81983bc33ae3901a9aecba63dfebe040c43` Thanks [@vethan](https://github.com/vethan)! - fix(order,dashboard): stop return requests exceeding the returnable quantity. Units already received or dismissed on an earlier return are no longer counted as available to return, and the return, exchange and claim forms cap the quantity input at the returnable quantity.

- Updated dependencies []:
  - @band-store/framework@2.22.1

## 2.22.0

### Minor Changes

- #17089 `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: drop Node.js 20 support and require Node.js v22.22.0 or later

### Patch Changes

- #17209 `65260a9d80d666916ad1e4b59d346123e1fa7991` Thanks @band-store-os-bot! - fix(order): return order item quantity and prices when selecting explicit item fields such as `items.quantity`

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- Updated dependencies [`d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a`, `14499a2e9309d653c0e4ec6aec3f88079751b4d2`, `44db0ca6357ab4d4681a8004e869fde339c3117a`, `1db74006ede40300afe64970024688a1a9c2a936`]:
  - @band-store/framework@2.22.0

## 2.21.2

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.21.2

## 2.21.1

### Patch Changes

- #16436 `7ff721850c22a886af25f251685f6bca59434664` Thanks [@thomassarazin](https://github.com/thomassarazin)! - fix(@band-store/order, @band-store/core-flows): set requested_at when a return is created from the storefront

- Updated dependencies [`c000d377f1a90d14bcda41500b1ed5bc2734902e`]:
  - @band-store/framework@2.21.1

## 2.21.0

### Patch Changes

- Updated dependencies [`e9d1f84dbfacd35d7787d1af03215a6ae5a176d8`, `a4c0a845e8b3a7a5acfaacbb0c093cd539ac713b`, `c8701e77534f7b615c8b86814f8d5789c0104382`, `df8c278d615229436be5b299ebdc76a576695fc3`]:
  - @band-store/framework@2.21.0

## 2.20.1

### Patch Changes

- Updated dependencies [`f373c17dd60cb1e7df1d0c70db31d516d2a0cb4f`]:
  - @band-store/framework@2.20.1

## 2.20.0

### Patch Changes

- #16241 `a1a0a969099ac59ce22e4ba3ea64347cba102dc4` Thanks [@lazerg](https://github.com/lazerg)! - fix(order): select shipping method fields when listing orders with totals

- Updated dependencies [`847612908fdd1c11a4df09ccc2e8ab44d338bb04`, `785fd2b8a978201638a4d8d5ae9eea483958c0fb`, `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9`, `6a2fce501f3bcd459c21a67f586c7a15b905ff0f`, `5e06e544a296b9033f20f71f11c559f81a0e5739`]:
  - @band-store/framework@2.20.0

## 2.19.0

### Patch Changes

- #16021 `7a5ef2d1f79b2e278625b686dba0b9cfe53a9cc9` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(order): fetch totals with all fields + fix inconsistent total calculation

- #16238 `18e02fb06f5c925c0b3ebc1943407bf58f83e7b7` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(core-flows,dashboard,js-sdk, Band Store,types,utils): support notification preferences for order edits

- Updated dependencies [`372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30`, `5f4d93c374b0ad0b0a31e75de98c7557e0415677`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`]:
  - @band-store/framework@2.19.0

## 2.18.0

### Minor Changes

- #15989 `0e7973e2fc3c45da39136cf3f66c90358571ffc5` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): fix delete operation when primary key is not `id`

### Patch Changes

- #15840 `dfdcdd7467ede40e1bb80ce866bfe2c256b8ff86` Thanks [@nam-stx](https://github.com/nam-stx)! - feat(core-flows,order,cart,types,Band Store): Add data and metadata fields to tax line models

- #16141 `7c0f94c207796bc443fd36d3999f1533bba255be` Thanks [@peterlgh7](https://github.com/peterlgh7)! - Always use left joins to avoid entities being hidden in query by a soft-deleted related entity

- [`8673b8bc671db80d5b88b15c71084a158e154854`](undefined) - fix(order): version-scope shipping method adjustments in the select-in (list) path so `GET /admin/orders` returns the same totals as retrieve for fulfilled/shipped orders that have a shipping promotion

- [`b15b8522126f094eeb435a0c479d25837a63c260`](undefined) - support cross-module filters in order module

- Updated dependencies [`1621e14330fe64a968510991408ace8fdac84ce9`, `1359d1bf6237aa058910b805395932cd070d2043`, `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09`, `d76952b5b0e4b287747a7e08f2cb745510143aae`, `d6b2a87da1dbfd065336c80e41cb7c086dc2a340`, `6ef16b6fdc6f04b900583a5f2714a863011ed19a`, `70c122753875f3cca03ff49b8a0ea9fe2c5e1165`, `144c47aba88f6e08fb7c99634c9fec8474721b0a`, `513c01a5a7f587cb52c92677e2379e54bd990361`]:
  - @band-store/framework@2.18.0

## 2.17.2

### Patch Changes

- #15622 `a04f1e06fcb99373becfe705c09a85910b73cb4c` Thanks [@Dev-Abdullah-H](https://github.com/Dev-Abdullah-H)! - fix(order): make custom_display_id searchable

- #15863 `448498c1450bd75b19d00a515544db61dcdc71e1` Thanks [@Dev-Abdullah-H](https://github.com/Dev-Abdullah-H)! - fix: use isDefined check for unit_price in ITEM_UPDATE order change action so that setting an item price to 0 is correctly reflected in previewOrderChange

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

- Updated dependencies [`de58ec503bcd82aae3fe576f9a404c36e2525f4c`]:
  - @band-store/framework@2.17.2

## 2.17.1

### Patch Changes

- Updated dependencies [`975313f62b22055ddaacf7852f33cf7b0f4af5df`]:
  - @band-store/framework@2.17.1

## 2.17.0

### Patch Changes

- #15734 `6617a612ef57a0fa1b5fdea72b10e78205af56e9` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(order): add line_item_metadata to OrderLineItem type

- Updated dependencies [`57b8e74d0fea8fb0e9dccd76eb6df06f0380071a`]:
  - @band-store/framework@2.17.0

## 2.16.0

### Patch Changes

- [`528b12cbd50f85079e157b920be306dec7c89938`](undefined) - feat(order,types): add line_item_metadata to order responses

- [`18474de124868370298addf195e5229ca6792f81`](undefined) - chore(product, order, utils, deps, index): update MikroORM to v6.6.14

- Updated dependencies [`8a6664d6d445f875f56078fad21fe12a185b9627`, `20352f4fa2f31e5b491c8b1b244c407392939fbf`, `90af038c95c835dee5168ffd19cda5182d81b904`, `66610b87efb112e37b78c7c9536d95070b8d6b11`]:
  - @band-store/framework@2.16.0

## 2.15.5

### Patch Changes

- Updated dependencies [`8122633a8b33164a6094f5a39896e356efde1747`, `538f98da78ae2d741f1182e6ef315ba8efac6911`]:
  - @band-store/framework@2.15.5

## 2.15.4

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.15.4

## 2.15.3

### Patch Changes

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

- #15174 `fdec6f0358bedfcbfe6b78fb0294b1b2c639cc02` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(workflows-sdk): flatten WorkflowData type to remove recursive expansion that caused TS excessive stack depth errors in large consumer codebases. Add missing fields to order schema

- #15329 `15c938bef93e30fe62f59a78d09cdf412fb92f5a` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(order): fix regression on order.items.metadata showing null when line item metadata is set

- Updated dependencies []:
  - @band-store/framework@2.15.0

## 2.14.2

### Patch Changes

- Updated dependencies [`be0b8817a1e2e48e1c6c579de6598c6f5e9bf4b0`, `7c659ff3d69c43bd7477bcc8a1c0afd092ea1c23`]:
  - @band-store/framework@2.14.2

## 2.14.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.14.1

## 2.14.0

### Patch Changes

- #13975 `67499a8aa6b3b53cbdecb5be9fcc358b4e466696` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(currency,payment,pricing,region,order,store,cart,core-flows,Band Store,utils): repo wide currency_code normalization

- #14801 `e489aebaf301ea2eb2834449af65bc3da7f7465a` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(cart,order,product,inventory,fulfillment,stock-location,workflow-engine-redis,workflow-engine-inmemory): add missing fields for types auto-generation

- #15172 `41ee12ccde939a7c02360c63e725b8e4ad488c55` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(order): remove fields causing excessive stack depth

- #14570 `9e1e7082c3437ee2ae01d6752b624d4b4d905604` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): update item metadata on item_update change action

- #14482 `d9af2f5efba391f612ea9f6183702756c3fa4732` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): Version shipping method adjustments & implement missing creation flow for versioned adjustments

- #14234 `2045c776de29534b86e9c4e0438f7d29f9b79e91` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(core-flows,order,Band Store,types): allow to update the original order.email on order customer transfer requests

- Updated dependencies [`0929b8d192833e10b6b91795f1ffc478938c3fb7`, `843dbfe7c8f27b732486c7a8da7b6d63f2fdf967`]:
  - @band-store/framework@2.14.0

## 2.13.6

### Patch Changes

- Updated dependencies [`2b0cd5ff0ce00bf1de1d99632f1bda4073ac035d`]:
  - @band-store/framework@2.13.6

## 2.13.5

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.13.5

## 2.13.4

### Patch Changes

- #14797 `c191ea5ede6e9b35a2764093ed00057e200e800f` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(order,payment): make return and refund reason translatable

- Updated dependencies []:
  - @band-store/framework@2.13.4

## 2.13.3

### Patch Changes

- Updated dependencies [`dbaae9630d26a0806751d5614beadef3e0b4bf07`]:
  - @band-store/framework@2.13.3

## 2.13.2

### Patch Changes

- #14715 `09a80ab97aad62b65320c745899eb8517d256b40` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows,order): avoid returning recreated credit lines due to version bumping as new credit lines in createOrderCreditLinesWorkflow

- Updated dependencies [`7aca778ae56069371f5d26a757d3b2276d524776`, `77d899e135ed75668ca7d7b01a8ed4f0c1fe0ac8`]:
  - @band-store/framework@2.13.2

## 2.13.1

### Patch Changes

- #14629 `4021571067d33fdd415456fc538ee0035ccd0753` Thanks [@fPolic](https://github.com/fPolic)! - fix(order): load order items data correctly with select in strategy

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

- #14566 `5c695b5d499519d153be7c925e865c227301097b` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(order): call `compensateRelationFieldsSelectionFromLoadStrategy` when `select-in` strategy is configured in order repository list methods

- [`6cbbd033e4efdae5ea2a758b507bcc1a0fef26c2`](undefined) - chore(order): Add missing OrderItem GraphQL schema fields

- Updated dependencies [`13476988763368b3b333fa5bc3f613e8eb174fdf`, `8890f284705a4843a57a3800820208f593689a2a`, `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b`]:
  - @band-store/framework@2.12.6

## 2.12.5

### Patch Changes

- Updated dependencies [`233ec261be200fac83002415aa7c0df082339a3f`]:
  - @band-store/framework@2.12.5

## 2.12.4

### Patch Changes

- #14405 `5f807ee657c81178f1bf04f695b20ebdb996762c` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Ensure isolated order deletion

- #14351 `fb6a6b52fa36128d9a03f09ec168744ded881308` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(order): Prevent fetching all db adjustments when no items are pre…

- Updated dependencies [`181d5fa67122e4e5f38b91f6b716d35f2d08a204`, `d347e369ce555064e24f2dc3cd93b9e4e73a006d`]:
  - @band-store/framework@2.12.4

## 2.12.3

### Patch Changes

- #14267 `f13c23a4b709e31f9b2d42e98acc6e342c494403` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Sync order translations

- #14315 `d813fc4ff91e98b475a4eae11780ddc00caf66a8` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Migration generator fix generated import

- Updated dependencies [`7b4dda5a179c78de5e099231ec407836db4c8dbd`, `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29`, `c8a7122ba918751b215dc0b19cf9b09b2c011ab8`]:
  - @band-store/framework@2.12.3

## 2.12.2

### Patch Changes

- #14221 `6176f93ac5ad403dd5fb733d6d22632747ccfca3` Thanks [@fPolic](https://github.com/fPolic)! - fix(dashboard, order): summary pending diff calculation on preview

- #14268 `8bd1d22765edef3b3d2ff31c8f8935049d8b280a` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(order): Remove unique index on item_id:version for order_item

- Updated dependencies [`9f7846ae0babbad39947a1f33d236bff8b5098d0`, `fe49b567d6d55ae224095c06c710d31d40887653`, `6dc0b8bed84a330c1c24f4f1331f1ed078430a47`, `356283c359e5c30e0d31e6c6fd0fb8e16c025b78`]:
  - @band-store/framework@2.12.2

## 2.12.1

### Patch Changes

- #14164 `ef162f8b5ff32c9ce779119eb8eabffea62655be` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(order): Add composite unique index on order_item version:item_id

- Updated dependencies []:
  - @band-store/framework@2.12.1

## 2.12.0

### Patch Changes

- #13306 `78842af1c30de9c7561f10b4129aba4e1f30db27` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix: Compute "virtual" adjustments for order previews

- #14128 `5da51064d7936c6d7a459cfa8b34eada65163e03` Thanks [@fPolic](https://github.com/fPolic)! - feat: carry over promotions toggle on exchanges

- #14024 `6746fecd727823b233a90edb1819d08555124464` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore/order custom display

- Updated dependencies [`c2c3ad5ba53f1959422fb2d37297a8de8d714782`, `7e3eb6e41316d7b04d32bc7186ed0c78de1aa539`, `beb91d88a2f224075e4fcf35a0ee9483b3124504`]:
  - @band-store/framework@2.12.0

## 2.11.3

### Patch Changes

- #13910 `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Dependencies cleanup and improvements

- Updated dependencies [`28c3ea68f5634792848f146ac6af5b27c848bf21`, `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d`, `afb40d437b3cc4ceb015df70985b2f005f40eaff`, `37563987b8fe75c9acfe62957a33e8398977647a`, `13d7d15be594ca413785eebe8f86b47c36cb9830`]:
  - @band-store/framework@2.11.3

## 2.11.2

### Patch Changes

- Updated dependencies [`85b1f3d43aa8d8e0269a545ef7867733fd0eb8e2`]:
  - @band-store/framework@2.11.2

## 2.11.1

### Patch Changes

- #13766 `fe4e7481a9ee6e360623d15ecfaf51f3df00f9d7` Thanks [@willbouch](https://github.com/willbouch)! - feat(order,dashboard): version order credit lines

- #13736 `a34fcfab351a79badfb24255602ca3c6ff60bffd` Thanks [@DDA1O1](https://github.com/DDA1O1)! - fix(): Remove redundant indexes from product, cart, order, customer, and inventory modules to improve database schema health.

- Updated dependencies []:
  - @band-store/framework@2.11.1

## 2.11.0

### Patch Changes

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- [`3758303a1dd95332383bbf0b13746b8d771085c5`](undefined) - fix(order): save return's location ID from input

- #13578 `6e806942c7961eeb1d80abca0f9b4bf2e663f6b3` Thanks [@fPolic](https://github.com/fPolic)! - fix(dashboard, order): set return status on cancel

- [`5346079d4717933d31d57f549d4158f3d433551c`](undefined) - chore(): create default refund reasons

- #13680 `41651721450c99e5f38cfbb87a6a47ab067ece86` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Test strategy

- #13580 `fc67fd0b36f53f0c0897df54ecea02061e65e816` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(utils): make upsert with replace more efficient

- Updated dependencies [`12a96a7c7015f011f5e29a1d387f835e514ba536`, `b9d6f73320c36c53235b12fb8397b30a448917f0`, `8ece06d8ed6a197ebb370918c49a3ec5c21dd186`, `92d30b28f45b4037cd73c180c8f257070cf49bd4`, `02b6d013822b9665f868c4ea6d1b5cfe58723459`]:
  - @band-store/framework@2.11.0

## 2.10.3

### Patch Changes

- #13497 `9563ee446f2b3a2e0cd4a4a33959ed55be5f268a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(utils): subtotal calculation discounting returned items

- Updated dependencies [`25634b038248ab6501af719faec79b59b496bada`]:
  - @band-store/framework@2.10.3

## 2.10.2

### Patch Changes

- #13296 `e8822f3e693bde33fdfd8b0d6140b4e59b40af98` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Module Internal Events

- #13462 `823a5c75ff97cf0acbd4ddf00f43ab3b49f0f210` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/order module index

- Updated dependencies [`b4c0f131b70ba950339c1ca4d81b5ce062a588a3`, `a4b72f9a21fd1d278c622fcd45d24bb9bfb1e0a8`]:
  - @band-store/framework@2.10.2

## 2.10.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.10.1

## 2.10.0

### Patch Changes

- Updated dependencies [`e413cfefc2e0579ba7c5299dc4f4270310e39c2c`, `e2213448ac9eb93318570fde2807a3036108d44b`]:
  - @band-store/framework@2.10.0

## 2.9.0

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.9.0

## 2.8.8

### Patch Changes

- Updated dependencies [`43fb06ecc2d87ea2a11e12524679c142eb890ec7`]:
  - @band-store/framework@2.8.8

## 2.8.7

### Patch Changes

- #12889 `2f70f133511857b499a992b65a0a4d6170e03ab9` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Order constraint and receive return

- Updated dependencies []:
  - @band-store/framework@2.8.7

## 2.8.6

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.8.6

## 2.8.5

### Patch Changes

- Updated dependencies [`cbf3644eb7c8a24eaed879647b58c9ece3373c0e`, `d517dbd66a47817d1270c278b03add9a5c4244cb`, `820a936b9836ae83e7a45de1e1ed0488d8cde2fd`, `00505b4f8e49873123111752adfda47ccb35ab46`, `94b62c67249d13ec6342411cf7efdedfd0ac47e1`]:
  - @band-store/framework@2.8.5

## 2.8.4

### Patch Changes

- Updated dependencies [`7685d66c0775167994150e61a8b628ad6289ce23`, `cf0297f74af1b043363ffbd5a23ca0933097a69d`, `1f5f50010ae42f8d5b9924edcd75612b1f336463`]:
  - @band-store/framework@2.8.4

## 2.8.3

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.8.3

## 2.8.2

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.8.2

## 2.8.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.8.1

## 2.8.0

### Patch Changes

- Updated dependencies [`b868a4ef4deb7df09d6156a907f4c883cd55a3fd`]:
  - @band-store/framework@2.8.0

## 2.7.1

### Patch Changes

- Updated dependencies [`ee35f3ce9097832c10cdf2fd168763088e6c3fcb`, `2f6963a5fbea05537680cb1b1f6a2b9822c36325`, `b8902637251e9ed4f8762ef280659bbab6d967de`]:
  - @band-store/framework@2.7.1

## 2.7.0

### Patch Changes

- #12072 `9bf1e52d25131d0a976b50992ad4cd230ac90d8e` Thanks [@fPolic](https://github.com/fPolic)! - fix(order): update add item unit price

- #11569 `cb6249320e7322e8eabfec8434f1278f8d63e96c` Thanks [@riqwan](https://github.com/riqwan)! - feat(order,types,Band Store,core-flows): fix(types,order,Band Store,core-flows): create order credit lines during order refund

- #11994 `1f8fab36361aa8e473ffe6c411c8598a916a6d3f` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,types,order,cart): assign tax lines only to regular products

- Updated dependencies [`ec56a8bc857a74788df6523af25914da95c4c1d8`, `2a18a75353f872b0cb4c203afc08cfd82f778428`]:
  - @band-store/framework@2.7.0

## 2.6.1

### Patch Changes

- #11738 `3b470f41427e487c68f89b8ee8155de716ffe861` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove ranges on Band Store packages

- Updated dependencies [`cc1309d3709b251683a0cda0ced448f8bf9f514e`, `3b470f41427e487c68f89b8ee8155de716ffe861`, `20cd59e622463fbd46506275648ce681869adcdf`]:
  - @band-store/framework@2.6.1

## 2.6.0

### Patch Changes

- #11712 `7dbec10b3bdde8a9f869080d5ef2c3c97fca1077` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(order): summary raw totals

## 2.5.1

### Patch Changes

- #11518 `0c957350a6688c78572361b51c1f16a452a31aed` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(order): order edit flows with calculated taxes

## 2.5.0

### Patch Changes

- #11216 `016e332e9b98f316cded6eb999927fc942ce56c5` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: make AbstractModuleService create method type-safe

- #11181 `16fe43f214ecd1fb7fe6622c0c6e825e998c1be9` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(order): add data model name in define schema

## 2.4.0

### Minor Changes

- #10292 `cc73802ab3821d2c667942bd887efb7476205547` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: upgrade to mikro-orm 6

### Patch Changes

- Updated dependencies [`0deffe7b9b9a1055813249b17057b7bba01b78ac`, `cc73802ab3821d2c667942bd887efb7476205547`, `13fe2f6776b22c401d131f184fc3600ef4008383`, `e53b8b0a9708d2eb46258ca417b6ff6abbd5f3d9`]:
  - @band-store/framework@2.4.0

## 2.3.1

## 2.3.0

## 2.2.0

### Patch Changes

- #10667 `47594192b79fbc798cfaf21821b60673745d1374` Thanks [@riqwan](https://github.com/riqwan)! - feat(dashboard,core-flows,types,utils,Band Store,order): Order cancelations will refund payments

## 2.1.3

## 2.1.2

## 2.1.1

## 2.1.0

## 2.0.7

## 2.0.6

## 2.0.5

### Patch Changes

- #10119 `2822972e04f12d2ca9378dd09529ab6ca308a286` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/mikro orm cli wrapper

## 2.0.4

## 2.0.3

## 2.0.2

## 2.0.1

## 2.0.0

### Major Changes

- #7341 `2e42e053d4c9d5445d227bdc268c66713aad8e2e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Band Store 2.0

### Patch Changes

- Updated dependencies [`2e42e053d4c9d5445d227bdc268c66713aad8e2e`]:
  - @band-store/framework@2.0.0

## 0.1.2

### Patch Changes

- `cc557c8752` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Order endpoints and Cart totals

- Updated dependencies [`0c0b425de7`, `8d356217bd`, `1eeb1e9de3`, `20e8df914e`, `27f4f0d724`, `e0b02a1012`, `e944a627f0`, `1a48fe0282`, `86f499de2f`, `09a2220569`, `78f603e4f1`, `cc557c8752`, `dd35a4dbff`, `58c68f6715`, `1bcb13f892`, `82a176e30e`, `11517f0faf`, `62b9dcc6c1`, `5d9aea053c`, `e26cda4b6a`, `bc06ad2db4`, `18f3aacee6`, `232322d035`, `38c971f111`, `45c49e89f2`, `528ef4ca90`, `65794f4bb5`, `93ef94cad3`, `4cf71af07d`, `4b57c5d286`, `c78915c7c5`, `18f3aacee6`, `667c8609cc`, `f175cac4af`, `0a9b9b073d`, `a6562d2a41`, `00e6b21bb5`, `8fd1488938`, `1c6ba4468e`]:
  - @band-store/types@1.11.16
  - @band-store/modules-sdk@1.12.11
  - @band-store/utils@1.11.9

## 0.1.1

### Patch Changes

- #6700 `8f8a4f9b13` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Version all modules to allow for initial testing

- Updated dependencies [`1fd0457c15`, `9288f53327`, `d4b921f3db`, `ac86362e81`, `e4acde1aa2`, `1a661adf3e`, `56cbf88115`, `36a61658f9`, `04a532e5ef`, `c319edb8e0`, `0b9fcb6324`, `586df9da25`, `b3d826497b`, `a86c87fe14`, `640eccd5dd`, `8ea37d03c9`, `339a946f38`, `ac829fc67f`, `d9d5afc3cf`, `c3c4f49fc2`, `9288f53327`, `0d46abf0ff`, `fafde4f54d`, `8dad2b51a2`, `0c705d7bd4`, `a6d7070dd6`, `1d91b7429b`, `168f02f138`, `1ed5f918c3`, `c20eb15cd9`, `e5945479e0`, `f5c2256286`, `000eb61e33`, `d550be3685`, `62a7bcc30c`, `8f8a4f9b13`, `6500f18b9b`, `ce39b9b66e`, `a6a4b3f01a`, `4d51f095b3`, `4625bd1241`, `56b0b45304`, `cc1b66842c`, `24fb102a56`, `e85463b2a7`]:
  - @band-store/types@1.11.14
  - @band-store/utils@1.11.7
  - @band-store/modules-sdk@1.12.9
