# @band-store/product

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

- Updated dependencies [`ca881e5`, `9d55082`, `26e5807`, `52caddd`]:
  - @band-store/framework@2.22.2

## 2.22.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.22.1

## 2.22.0

### Minor Changes

- #17089 `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: drop Node.js 20 support and require Node.js v22.22.0 or later

### Patch Changes

- #16925 `735231340d130af0c3565bc7340f1163863c283f` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(product): detach option values from variants when their option is removed from the product

- #17274 `597cf9af9ac6ddcf233fc0605d37e8925dc4b7ce` Thanks @band-store-os-bot! - fix(product): keep the selected variant id when updating variants and ignore an empty options map instead of clearing the variant's options

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- Updated dependencies [`d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a`, `14499a2e9309d653c0e4ec6aec3f88079751b4d2`, `44db0ca6357ab4d4681a8004e869fde339c3117a`, `1db74006ede40300afe64970024688a1a9c2a936`]:
  - @band-store/framework@2.22.0

## 2.21.2

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.21.2

## 2.21.1

### Patch Changes

- Updated dependencies [`c000d377f1a90d14bcda41500b1ed5bc2734902e`]:
  - @band-store/framework@2.21.1

## 2.21.0

### Patch Changes

- #16674 `ebc8aeea3880dd2531c2536b7e2c762ff7ca2c17` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(product, utils, Band Store): return published products only for tags, collections, categories, and type store routes

- Updated dependencies [`e9d1f84dbfacd35d7787d1af03215a6ae5a176d8`, `a4c0a845e8b3a7a5acfaacbb0c093cd539ac713b`, `c8701e77534f7b615c8b86814f8d5789c0104382`, `df8c278d615229436be5b299ebdc76a576695fc3`]:
  - @band-store/framework@2.21.0

## 2.20.1

### Patch Changes

- Updated dependencies [`f373c17dd60cb1e7df1d0c70db31d516d2a0cb4f`]:
  - @band-store/framework@2.20.1

## 2.20.0

### Patch Changes

- #16493 `3dbc8c91e9618277d178f4339d2f602d3563beb5` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(product): return all scalar fields from product category queries when no select is provided

- #16530 `184f222fb32b913778ce75fdd61164ca038ec03d` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(product): remove duplicate query call

- Updated dependencies [`847612908fdd1c11a4df09ccc2e8ab44d338bb04`, `785fd2b8a978201638a4d8d5ae9eea483958c0fb`, `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9`, `6a2fce501f3bcd459c21a67f586c7a15b905ff0f`, `5e06e544a296b9033f20f71f11c559f81a0e5739`]:
  - @band-store/framework@2.20.0

## 2.19.0

### Patch Changes

- #16315 `c13aaa96b3968b7f021131529f630b1de7bd6970` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(product, types, utils, Band Store): optimize migration script for product options

- #16179 `01f31bc58b1ff729a7326bdf54c65f92e35b0725` Thanks [@ihopenre-eng](https://github.com/ihopenre-eng)! - fix(product): allow deleting individual variant metadata fields

- Updated dependencies [`372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30`, `5f4d93c374b0ad0b0a31e75de98c7557e0415677`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`]:
  - @band-store/framework@2.19.0

## 2.18.0

### Minor Changes

- #15989 `0e7973e2fc3c45da39136cf3f66c90358571ffc5` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): fix delete operation when primary key is not `id`

- #16137 `7d7edad6fdf47ae36c06cd5f5b71232c9d51c70b` Thanks [@sradevski](https://github.com/sradevski)! - Use a BALANCED load strategy for the data

### Patch Changes

- [`dea11e3d011a0dd1c95b1fc4ab2292fd07ec4857`](undefined) - fix(product): emit `product.product-category.deleted` when soft-deleting product categories so subscribers using `ProductEvents.PRODUCT_CATEGORY_DELETED` are triggered

- Updated dependencies [`1621e14330fe64a968510991408ace8fdac84ce9`, `1359d1bf6237aa058910b805395932cd070d2043`, `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09`, `d76952b5b0e4b287747a7e08f2cb745510143aae`, `d6b2a87da1dbfd065336c80e41cb7c086dc2a340`, `6ef16b6fdc6f04b900583a5f2714a863011ed19a`, `70c122753875f3cca03ff49b8a0ea9fe2c5e1165`, `144c47aba88f6e08fb7c99634c9fec8474721b0a`, `513c01a5a7f587cb52c92677e2379e54bd990361`]:
  - @band-store/framework@2.18.0

## 2.17.2

### Patch Changes

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

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

- #13817 `6eff86709de4dddc359f35fa84a2462fed85b753` Thanks [@willbouch](https://github.com/willbouch)! - feat(admin-shared,dashboard,core-flows,product,js-sdk,types,Band Store): rework product option values views and add dedicated endpoints

- Updated dependencies [`57b8e74d0fea8fb0e9dccd76eb6df06f0380071a`]:
  - @band-store/framework@2.17.0

## 2.16.0

### Patch Changes

- [`8b3b9f7dc97731688e4a5f1c0bb2714e00483bc6`](undefined) - fix(product, utils): Support non-Latin characters in product handles

- [`801dbdb2ae70152aaa5917590885bd36bd44efc4`](undefined) - fix(utils,product): handle array of mikroORM entities serialization and fix variant image assignment serialization issue

- [`18474de124868370298addf195e5229ca6792f81`](undefined) - chore(product, order, utils, deps, index): update MikroORM to v6.6.14

- [`ffae1bee3fe51c6c5dc68f27ace7b257da2327b4`](undefined) - perf(product): skip option resolution/validation/reconcile on scalar-only variant updates

  `updateVariants_` loaded every variant of the product (with options) and ran the
  option-uniqueness validation + relation reconcile on every update, even when no
  options were changing. This is O(the product's total variant count) and synchronous,
  making scalar-only updates on products with many variants block the event loop for
  tens of seconds. The option work is now only performed when the payload actually
  changes options.

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

### Minor Changes

- #14762 `34f326d729aa9e1bafd6ef644ccb47621bf2a14e` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(product, dashboard): align product and variant volumetric attributes data types

### Patch Changes

- #13930 `5a7b0142367491236167477e613de763f10b7e32` Thanks [@bqst](https://github.com/bqst)! - feat(product): add SKU search support to admin API

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

- #14801 `e489aebaf301ea2eb2834449af65bc3da7f7465a` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(cart,order,product,inventory,fulfillment,stock-location,workflow-engine-redis,workflow-engine-inmemory): add missing fields for types auto-generation

- #14855 `b94f7ae1f5f66dfca7f73c7ee8d53afdcbf26ee5` Thanks [@asgerjensen](https://github.com/asgerjensen)! - feat(product,Band Store,types): add external id to product tags, collections and types

- #14799 `a92ca32b93eaf7f5a8e1fc8b2bbb01763867f6c1` Thanks [@asgerjensen](https://github.com/asgerjensen)! - add external_id to product-category

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

- Updated dependencies []:
  - @band-store/framework@2.13.4

## 2.13.3

### Patch Changes

- Updated dependencies [`dbaae9630d26a0806751d5614beadef3e0b4bf07`]:
  - @band-store/framework@2.13.3

## 2.13.2

### Patch Changes

- Updated dependencies [`7aca778ae56069371f5d26a757d3b2276d524776`, `77d899e135ed75668ca7d7b01a8ed4f0c1fe0ac8`]:
  - @band-store/framework@2.13.2

## 2.13.1

### Patch Changes

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

- #14536 `d60ea7268a00f386f803f0f9e6ffeec4bced50bf` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(translation,fulfillment,customer,product,region,tax,core-flows,Band Store,types): Implement dynamic translation settings management

- Updated dependencies [`13476988763368b3b333fa5bc3f613e8eb174fdf`, `8890f284705a4843a57a3800820208f593689a2a`, `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b`]:
  - @band-store/framework@2.12.6

## 2.12.5

### Patch Changes

- Updated dependencies [`233ec261be200fac83002415aa7c0df082339a3f`]:
  - @band-store/framework@2.12.5

## 2.12.4

### Patch Changes

- Updated dependencies [`181d5fa67122e4e5f38b91f6b716d35f2d08a204`, `d347e369ce555064e24f2dc3cd93b9e4e73a006d`]:
  - @band-store/framework@2.12.4

## 2.12.3

### Patch Changes

- #14315 `d813fc4ff91e98b475a4eae11780ddc00caf66a8` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Migration generator fix generated import

- Updated dependencies [`7b4dda5a179c78de5e099231ec407836db4c8dbd`, `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29`, `c8a7122ba918751b215dc0b19cf9b09b2c011ab8`]:
  - @band-store/framework@2.12.3

## 2.12.2

### Patch Changes

- #14262 `356283c359e5c30e0d31e6c6fd0fb8e16c025b78` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Accept an extra agument 'all-or-nothing' on the migrate command

- Updated dependencies [`9f7846ae0babbad39947a1f33d236bff8b5098d0`, `fe49b567d6d55ae224095c06c710d31d40887653`, `6dc0b8bed84a330c1c24f4f1331f1ed078430a47`, `356283c359e5c30e0d31e6c6fd0fb8e16c025b78`]:
  - @band-store/framework@2.12.2

## 2.12.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.12.1

## 2.12.0

### Patch Changes

- #14060 `0ddd9e36b51267f774ec53e8dd110b601196fa51` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(product): add missing decorators to updateProductOptionValues method

- #14026 `a85778679e99c40421b3be0122d153f991efbc80` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(product, types): add missing types for variant images and thumbnails

- Updated dependencies [`c2c3ad5ba53f1959422fb2d37297a8de8d714782`, `7e3eb6e41316d7b04d32bc7186ed0c78de1aa539`, `beb91d88a2f224075e4fcf35a0ee9483b3124504`]:
  - @band-store/framework@2.12.0

## 2.11.3

### Patch Changes

- #13910 `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Dependencies cleanup and improvements

- Updated dependencies [`28c3ea68f5634792848f146ac6af5b27c848bf21`, `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d`, `afb40d437b3cc4ceb015df70985b2f005f40eaff`, `37563987b8fe75c9acfe62957a33e8398977647a`, `13d7d15be594ca413785eebe8f86b47c36cb9830`]:
  - @band-store/framework@2.11.3

## 2.11.2

### Patch Changes

- #13623 `47572816778e21432d0201f4b2642a765c86fdbc` Thanks [@fPolic](https://github.com/fPolic)! - feat: scoped variant images

- #13731 `0b202cc50946fdd0d0ccf4c76ae2d4f801895378` Thanks [@fPolic](https://github.com/fPolic)! - feat(product): build variant images when retrieving product

- Updated dependencies [`85b1f3d43aa8d8e0269a545ef7867733fd0eb8e2`]:
  - @band-store/framework@2.11.2

## 2.11.1

### Patch Changes

- #13736 `a34fcfab351a79badfb24255602ca3c6ff60bffd` Thanks [@DDA1O1](https://github.com/DDA1O1)! - fix(): Remove redundant indexes from product, cart, order, customer, and inventory modules to improve database schema health.

- Updated dependencies []:
  - @band-store/framework@2.11.1

## 2.11.0

### Patch Changes

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- [`a501364b2d26a3ca0670eb345d9933b83964abc1`](undefined) - fix(product): Correctly fetch category descendants by handle

- [`5346079d4717933d31d57f549d4158f3d433551c`](undefined) - chore(): create default refund reasons

- #13680 `41651721450c99e5f38cfbb87a6a47ab067ece86` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Test strategy

- Updated dependencies [`12a96a7c7015f011f5e29a1d387f835e514ba536`, `b9d6f73320c36c53235b12fb8397b30a448917f0`, `8ece06d8ed6a197ebb370918c49a3ec5c21dd186`, `92d30b28f45b4037cd73c180c8f257070cf49bd4`, `02b6d013822b9665f868c4ea6d1b5cfe58723459`]:
  - @band-store/framework@2.11.0

## 2.10.3

### Patch Changes

- Updated dependencies [`25634b038248ab6501af719faec79b59b496bada`]:
  - @band-store/framework@2.10.3

## 2.10.2

### Patch Changes

- #13296 `e8822f3e693bde33fdfd8b0d6140b4e59b40af98` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Module Internal Events

- #13487 `4fded2602bfbb63c8d648d2af717c2eb3bbb6f49` Thanks [@willbouch](https://github.com/willbouch)! - fix(Band Store,product): fix ordering product categories

- #13475 `58e20fa3fc266cbecc69b45998ef1fadd7056f9a` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Add missing product status index

- #13466 `368c1d1e1737fb9cd1e60632c8a2c46a2ce34f46` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): product image missing index

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

- #13019 `439c7118450c5f9ee0b541de9014093a42b7d0ea` Thanks [@fPolic](https://github.com/fPolic)! - fix(dashboard, product): update product attributes

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

- #12508 `52bd9f9a53f6e63e5fbe0beb1fb2c650d88f7c88` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(product, modules-sdk): Add missing index for select-in strategy + allow to pass top level strategy to force the behaviour

- #12538 `41054a34199168f0b949c3cda0bbe667da2c5993` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(product): Deep update data retrieval bottleneck

- #12478 `c5a6573e26b403b86f53b88c307ea311a1bd9230` Thanks [@fPolic](https://github.com/fPolic)! - fix(product, utils): handle metadata key deletion on product update

- Updated dependencies []:
  - @band-store/framework@2.8.3

## 2.8.2

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.8.2

## 2.8.1

### Patch Changes

- #12486 `142a1f0a5be60d2cc013ecb174bca7b1381c6551` Thanks [@peterlgh7](https://github.com/peterlgh7)! - fix returned updates order in upsertWithReplace

- Updated dependencies []:
  - @band-store/framework@2.8.1

## 2.8.0

### Patch Changes

- #12391 `0d8af119c5f000addcbc2431c61711b51e7b34b1` Thanks [@fPolic](https://github.com/fPolic)! - feat(product): allow variant search by product properties

- #12354 `77c3023200f5c718a77220f39b300e9149a92a4f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(product): Return updated collections

- #12357 `e4d853185f103ffc81fcf14df02e84cd5c538f9a` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: export ProductImage to allow for custom links to add alt text

- Updated dependencies [`b868a4ef4deb7df09d6156a907f4c883cd55a3fd`]:
  - @band-store/framework@2.8.0

## 2.7.1

### Patch Changes

- Updated dependencies [`ee35f3ce9097832c10cdf2fd168763088e6c3fcb`, `2f6963a5fbea05537680cb1b1f6a2b9822c36325`, `b8902637251e9ed4f8762ef280659bbab6d967de`]:
  - @band-store/framework@2.7.1

## 2.7.0

### Patch Changes

- #12150 `6015dcc16d6d9af15575bee98fb5727c6a6d9fd2` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(product): Missing index in migration

- Updated dependencies [`ec56a8bc857a74788df6523af25914da95c4c1d8`, `2a18a75353f872b0cb4c203afc08cfd82f778428`]:
  - @band-store/framework@2.7.0

## 2.6.1

### Patch Changes

- #11724 `cc1309d3709b251683a0cda0ced448f8bf9f514e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(product): Improve product normalization

- #11738 `3b470f41427e487c68f89b8ee8155de716ffe861` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove ranges on Band Store packages

- Updated dependencies [`cc1309d3709b251683a0cda0ced448f8bf9f514e`, `3b470f41427e487c68f89b8ee8155de716ffe861`, `20cd59e622463fbd46506275648ce681869adcdf`]:
  - @band-store/framework@2.6.1

## 2.6.0

### Patch Changes

- #11585 `eeebb35758ea443468dd2355a7ea761dfe24babc` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(product): Remove upsertWithReplace where needed

- #11601 `b42f151be31161a5d7a73132ee6794b990403d76` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve internal repository delete algo

## 2.5.1

### Patch Changes

- #11544 `065df75e7d5b90a4de43873d8c08e1aab65e3fd7` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): handle empty q filters - allow to query deleted records from graph API - staled_at fixes

## 2.5.0

### Patch Changes

- #11216 `016e332e9b98f316cded6eb999927fc942ce56c5` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: make AbstractModuleService create method type-safe

## 2.4.0

### Minor Changes

- #10292 `cc73802ab3821d2c667942bd887efb7476205547` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: upgrade to mikro-orm 6

### Patch Changes

- Updated dependencies [`0deffe7b9b9a1055813249b17057b7bba01b78ac`, `cc73802ab3821d2c667942bd887efb7476205547`, `13fe2f6776b22c401d131f184fc3600ef4008383`, `e53b8b0a9708d2eb46258ca417b6ff6abbd5f3d9`]:
  - @band-store/framework@2.4.0

## 2.3.1

## 2.3.0

## 2.2.0

## 2.1.3

### Patch Changes

- #10668 `d08b71f9b87c68350e57016e62e406a9bdd82342` Thanks [@riqwan](https://github.com/riqwan)! - fix(product): updating collections with products fix

## 2.1.2

### Patch Changes

- #10535 `16192d9b3077e36c6b1df7409a0c0f26f643cc6d` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(product): Only apply default order to products if user has not specified an order

## 2.1.1

## 2.1.0

### Patch Changes

- #10326 `2838100efc8f1bef7f1bea022912dfbfa064bb56` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(product): change export name of ProductImage

## 2.0.7

## 2.0.6

### Patch Changes

- #10254 `c28d0db1647a5c8edaf0ba0faba6426e8a740399` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - fix(product,dashboard): Avoid duplicating images

## 2.0.5

### Patch Changes

- #10187 `1659c9be5d3ace1bed9f3a6e7206fe54e60645c0` Thanks [@kasperkristensen](https://github.com/kasperkristensen)! - feat(dashboard): Allow re-ordering product images

- #10144 `1f44281ed6bc2de0ba8ffec43f0671902b711520` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(product): Update full descendant true when update parent category id

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

## 0.3.12

### Patch Changes

- #6906 `3dee91426e` Thanks [@sradevski](https://github.com/sradevski)! - Correctly define all product module models and SQL migration script

- #6880 `1a48fe0282` Thanks [@sradevski](https://github.com/sradevski)! - Add v2 product type endpoints and adjust the product module

- #6944 `09a2220569` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Add parents to product categories

- Updated dependencies [`0c0b425de7`, `8d356217bd`, `1eeb1e9de3`, `20e8df914e`, `27f4f0d724`, `e0b02a1012`, `e944a627f0`, `1a48fe0282`, `86f499de2f`, `09a2220569`, `78f603e4f1`, `cc557c8752`, `dd35a4dbff`, `58c68f6715`, `1bcb13f892`, `82a176e30e`, `11517f0faf`, `62b9dcc6c1`, `5d9aea053c`, `e26cda4b6a`, `bc06ad2db4`, `18f3aacee6`, `232322d035`, `38c971f111`, `45c49e89f2`, `528ef4ca90`, `65794f4bb5`, `93ef94cad3`, `4cf71af07d`, `4b57c5d286`, `c78915c7c5`, `18f3aacee6`, `667c8609cc`, `f175cac4af`, `0a9b9b073d`, `a6562d2a41`, `00e6b21bb5`, `8fd1488938`, `1c6ba4468e`]:
  - @band-store/types@1.11.16
  - @band-store/modules-sdk@1.12.11
  - @band-store/utils@1.11.9

## 0.3.11

### Patch Changes

- #6748 `05e857d256` Thanks [@sradevski](https://github.com/sradevski)! - Updated the signature of the product module variant and options endpoints to follow our conventions

- Updated dependencies [`06f22bb48a`, `deab12e27e`, `56481e683d`, `9073d7aba3`, `4974f5e455`, `05e857d256`, `1ef9c78cea`]:
  - @band-store/modules-sdk@1.12.10
  - @band-store/types@1.11.15
  - @band-store/utils@1.11.8

## 0.3.10

### Patch Changes

- #6358 `b91a1ca5b8` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: cleanup inspection

- #6408 `1d91b7429b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(fulfillment): implementation part 2

- #6700 `8f8a4f9b13` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Version all modules to allow for initial testing

- Updated dependencies [`1fd0457c15`, `9288f53327`, `d4b921f3db`, `ac86362e81`, `e4acde1aa2`, `1a661adf3e`, `56cbf88115`, `36a61658f9`, `04a532e5ef`, `c319edb8e0`, `0b9fcb6324`, `586df9da25`, `b3d826497b`, `a86c87fe14`, `640eccd5dd`, `8ea37d03c9`, `339a946f38`, `ac829fc67f`, `d9d5afc3cf`, `c3c4f49fc2`, `9288f53327`, `0d46abf0ff`, `fafde4f54d`, `8dad2b51a2`, `0c705d7bd4`, `a6d7070dd6`, `1d91b7429b`, `168f02f138`, `1ed5f918c3`, `c20eb15cd9`, `e5945479e0`, `f5c2256286`, `000eb61e33`, `d550be3685`, `62a7bcc30c`, `8f8a4f9b13`, `6500f18b9b`, `ce39b9b66e`, `a6a4b3f01a`, `4d51f095b3`, `4625bd1241`, `56b0b45304`, `cc1b66842c`, `24fb102a56`, `e85463b2a7`]:
  - @band-store/types@1.11.14
  - @band-store/utils@1.11.7
  - @band-store/modules-sdk@1.12.9

## 0.3.9

### Patch Changes

- #6263 `45134e4d1` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Workflows passing BandStoreContext as argument

- #6218 `884428a1b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Feat: Event Aggregator

- Updated dependencies [`12054f5c0`, `3db2f95e65`, `96ba49329`, `45134e4d1`, `82c728bec`, `e749dd653`, `884428a1b`, `d1c18a309`, `882aa549b`]:
  - @band-store/utils@1.11.5
  - @band-store/modules-sdk@1.12.8
  - @band-store/types@1.11.12

## 0.3.8

### Patch Changes

- #6021 `a9b4214503` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(utils, product): Attempt to simplify module scripts export

- #5763 `d85fee42e` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Band Store App loading modules reference

- #6127 `5e655dd59` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Hide repository creation if they are not custom + add upsert support by default

- #6035 `b6ac768698` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Attempt to abstract the modules repository

- #6087 `130c641e5c` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Abstract module services

- Updated dependencies [`68ddd866a5`, `72bc52231c`, `99045848f`, `af7af7374`, `fc6b1772a7`, `a9b4214503`, `d85fee42e`, `5e655dd59`, `b132ff7669`, `e28fa7fbdf`, `a12c28b7d5`, `b782d3bcb7`, `2b9f98895e`, `7f7cb2a263`, `302323916`, `da5cc4cf7`, `daecd82a7`, `ce81cade88`, `fd78f5e24`, `192bc336cc`, `06b33a9b4`, `b6ac768698`, `130c641e5c`, `fade8ea7bf`, `8472460f53`, `68d8daccd`]:
  - @band-store/types@1.11.11
  - @band-store/utils@1.11.4
  - @band-store/modules-sdk@1.12.7

## 0.3.7

### Patch Changes

- #5985 `d16d10619` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(band-store-test-utils, utils, link-modules, pricing, product): upgrade mikro-orm version

- Updated dependencies [`6d1e3cc02`, `42cc8ae3f`, `45996d58a2`, `9cc787cac4`, `355075097`, `dc46ee118`, `925feea04`, `3f6d79961`, `fbee006e5`, `c41f3002f`, `d16d10619`, `c1c470e6b`, `890e76a5c`, `fe007d01b`, `76332ca6c`]:
  - @band-store/modules-sdk@1.12.6
  - @band-store/types@1.11.10
  - @band-store/utils@1.11.3

## 0.3.6

### Patch Changes

- #5755 `8f25ed8a1` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(link-modules, pricing, product, utils): Should be able to set some custom database config even in shared mode

- Updated dependencies [`079f0da83`, `c4deeee48`, `8f25ed8a1`]:
  - @band-store/types@1.11.9
  - @band-store/utils@1.11.2
  - @band-store/modules-sdk@1.12.5

## 0.3.5

### Patch Changes

- #5668 `a39ce125c` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(workflows, product, types): Fix issues relating to update-variant workflow and options

- #5536 `dc5750dd6` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(Band Store,types,workflows,utils,product,pricing): PricingModule Integration of PriceLists into Core

- Updated dependencies [`a39ce125c`, `18afe0b9a`, `6025c702f`, `de8f74867`, `fc1ef29ed`, `0df1c7d42`, `dc5750dd6`]:
  - @band-store/types@1.11.8
  - @band-store/utils@1.11.1
  - @band-store/modules-sdk@1.12.4

## 0.3.4

### Patch Changes

- #5643 `c4722715c` Thanks [@riqwan](https://github.com/riqwan)! - fix(product): when running migrations, prevent exploding on isolated case

- Updated dependencies [`61aef4aaa`, `1772e80ed`, `cedab5833`]:
  - @band-store/types@1.11.7
  - @band-store/utils@1.11.0

## 0.3.3

### Patch Changes

- #5533 `f88d75b0a` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(product, pricing, utils): Transaction issues and reference issues + refactoring

- `c39bf69a5` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Add missing version bumps

- Updated dependencies [`91615f9c4`, `c39bf69a5`, `154c9b43b`]:
  - @band-store/types@1.11.6
  - @band-store/modules-sdk@1.12.3
  - @band-store/utils@1.10.5

## 0.3.2

### Patch Changes

- #5468 `a45da9215` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, modules-sdk, modules): Module loading was missing the expected dependencies and remote query reference fix

- Updated dependencies [`148f537b4`, `a45da9215`]:
  - @band-store/types@1.11.5
  - @band-store/modules-sdk@1.12.2

## 0.3.1

### Patch Changes

- #5387 `453297f52` Thanks [@riqwan](https://github.com/riqwan)! - chore(product,types): fix interfaces for product module

- Updated dependencies [`378ca1b36`, `69cf7215f`, `453297f52`, `b62af612c`, `e47461d95`, `66413d094`]:
  - @band-store/utils@1.10.4
  - @band-store/types@1.11.4
  - @band-store/modules-sdk@1.12.1

## 0.3.0

### Minor Changes

- #5242 `130cbc1f4` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Modules exporting schema with entities and fields

### Patch Changes

- Updated dependencies [`eeceec791`, `130cbc1f4`, `cb569c2df`, `c5703a476`]:
  - @band-store/utils@1.10.3
  - @band-store/modules-sdk@1.12.0
  - @band-store/types@1.11.3

## 0.2.1

### Patch Changes

- #4969 `30863fee5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: store List products remote query with product isolation

- Updated dependencies [`d8649baca`, `4fa675ec2`, `6273b4b16`, `30863fee5`, `3d68be2b6`, `a87d07655`, `edf90eecb`, `107aaa371`, `834da5c41`]:
  - @band-store/modules-sdk@1.11.0
  - @band-store/types@1.11.1
  - @band-store/utils@1.10.1

## 0.2.0

### Minor Changes

- `09d97fd05` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore(changesets): Add changeset minor bumping @band-store/product

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - introduce @band-store/link-modules

### Patch Changes

- #4965 `66bd9a835` Thanks [@riqwan](https://github.com/riqwan)! - feat(products,types,pricing): allow scoping products by collection_id, allow scoping pricing by currency_code

- #4915 `87bade096` Thanks [@riqwan](https://github.com/riqwan)! - fix(utils, product, pricing, link-modules): add missing dependencies for utils + fix migration path issue

- Updated dependencies [`c3dba0694`, `460161a69`, `fcb6b4f51`, `66bd9a835`, `4d16acf5f`, `4d16acf5f`, `87bade096`, `4d16acf5f`, `a4906d0ac`]:
  - @band-store/modules-sdk@1.10.0
  - @band-store/types@1.11.0
  - @band-store/utils@1.10.0

## 0.1.7

### Patch Changes

- #4825 `c53fa6cd3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix mikro-orm connection loader

- Updated dependencies [`c53fa6cd3`]:
  - @band-store/utils@1.9.7

## 0.1.6

### Patch Changes

- #4626 `3f3a84262` Thanks [@adrien2p](https://github.com/adrien2p)! - [WIP] feat(types, product, utils, Band Store): Include shared connection for modules

- #4731 `f8d3d5f91` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(product): remove decorator where it is not necessary and cleanup

- Updated dependencies [`ac866ebb5`, `3f3a84262`, `30ce35b16`, `281b0746c`]:
  - @band-store/types@1.10.2
  - @band-store/modules-sdk@1.9.2
  - @band-store/utils@1.9.6

## 0.1.5

### Patch Changes

- #4674 `4b80ba8a3` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(product, integration-tests): Fix integration tests

- #4654 `8af55aed8` Thanks [@riqwan](https://github.com/riqwan)! - feat(product,types): added event bus events for products

- #4631 `4073b7313` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(product): Move mikro orm utils to the utils package

- Updated dependencies [`4b80ba8a3`, `8af55aed8`, `5c60aad17`, `4073b7313`]:
  - @band-store/modules-sdk@1.9.1
  - @band-store/types@1.10.1
  - @band-store/utils@1.9.5

## 0.1.4

### Patch Changes

- #4602 `585ebf245` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(product): Serialize typings

- #4535 `131477faf` Thanks [@riqwan](https://github.com/riqwan)! - feat(product,types,utils): Add tags, types, categories, collection and options CRUD to product module services

- #4590 `a0a041e5c` Thanks [@riqwan](https://github.com/riqwan)! - fix(Band Store): correct the type of initializer for modules

- #4504 `caea44ebf` Thanks [@riqwan](https://github.com/riqwan)! - feat(product, types): added product module service update

- Updated dependencies [`585ebf245`, `131477faf`, `379c83933`, `caea44ebf`, `f174bb6fa`, `f12299deb`]:
  - @band-store/types@1.9.0
  - @band-store/utils@1.9.3
  - @band-store/modules-sdk@1.9.0

## 0.1.3

### Patch Changes

- #4459 `befc2f1c8` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(product): product module create - delete - soft delete - restore - create workflow

- #4459 `befc2f1c8` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: added collection methods for module and collection service

- Updated dependencies [`d184d23c6`, `befc2f1c8`]:
  - @band-store/types@1.8.11

## 0.1.2

### Patch Changes

- #4420 `6f1fa244f` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(band-store-cli): Cleanup plugin setup + include Logger type update which is used across multiple packages

- Updated dependencies [`499c3478c`, `9dcdc0041`, `6f1fa244f`, `9760d4a96`]:
  - @band-store/types@1.8.10
  - @band-store/utils@1.9.2

## 0.1.1

### Patch Changes

- #4348 `dc120121c` Thanks [@riqwan](https://github.com/riqwan)! - fix(product, types): correct path for migration files + fix types on product module service interface

- Updated dependencies [`dc120121c`]:
  - @band-store/types@1.8.9

## 0.1.0

### Minor Changes

- `12782778f` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: @band-store/product beta release

## 0.0.2

### Patch Changes

- #4296 `30d89044f` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(product): The bin scripts should include a shebang and import in the body

- Updated dependencies [`f98ba5bde`, `d76ba0cd2`, `14c0f62f8`]:
  - @band-store/utils@1.9.1
  - @band-store/types@1.8.8
  - @band-store/modules-sdk@1.8.8
