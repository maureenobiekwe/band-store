# @band-store/payment

## 2.22.4

### Patch Changes

- Updated dependencies [`3a0cbbb`, `3d85f84`]:
  - @band-store/framework@2.22.4

## 2.22.3

### Patch Changes

- #17605 `d4494d9` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(payment-stripe,payment): update stripe to v23.1.0.

- #17618 `385c4ff` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: update jest to v30.5.2 and use the `--testPathPatterns` flag in test scripts

- #17619 `4df78b3` Thanks [@sradevski](https://github.com/sradevski)! - chore(auth,notification,payment,types,utils): remove the unused Band Store Cloud sandbox handle

- Updated dependencies [`9692b99`, `2e0d8ae`, `385c4ff`, `2276c84`, `a6a4254`]:
  - @band-store/framework@2.22.3

## 2.22.2

### Patch Changes

- #17577 `d5e0ddf` Thanks [@sradevski](https://github.com/sradevski)! - feat(payment-adyen): add Adyen payment provider

- #17558 `33dbbfc` Thanks [@sradevski](https://github.com/sradevski)! - fix(payment): Keep Band Store Payments session amounts in the smallest unit, handle deleted account holders, and always save payment methods for the session's account holder

- #17545 `2b1234b` Thanks @band-store-os-bot! - fix(payment): disable payment providers that are no longer registered on startup

- #17558 `33dbbfc` Thanks [@sradevski](https://github.com/sradevski)! - fix(payment): Update Band Store Payments to Stripe SDK 23 and send the payment method types to allow as `allowed_payment_method_types`

- Updated dependencies [`ca881e5`, `9d55082`, `26e5807`, `52caddd`]:
  - @band-store/framework@2.22.2

## 2.22.1

### Patch Changes

- #17452 `b07a970d9f1ff305b5421cc5e27436d1f5624a8a` Thanks @band-store-os-bot! - fix(payment): round amounts to the currency precision regardless of server locale

- #17432 `7c3b0339379efeda7863f48b9f60e3391cece091` Thanks [@sradevski](https://github.com/sradevski)! - feat(Band Store,core-flows,types,js-sdk): add store route to update a payment session's client data

- Updated dependencies []:
  - @band-store/framework@2.22.1

## 2.22.0

### Minor Changes

- #17089 `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: drop Node.js 20 support and require Node.js v22.22.0 or later

### Patch Changes

- #17099 `dab83ec94a8d60446e15eb982617b7c1cc7589a2` Thanks [@sradevski](https://github.com/sradevski)! - feat(payment): register a Band Store Payments provider per Band Store Cloud payment account

- #16964 `780a69aad3ea20beadf82e9c5351a6633de45b64` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(payment,core-flows,Band Store,types,utils): let refunds be retried safely with an idempotency key

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- Updated dependencies [`d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a`, `14499a2e9309d653c0e4ec6aec3f88079751b4d2`, `44db0ca6357ab4d4681a8004e869fde339c3117a`, `1db74006ede40300afe64970024688a1a9c2a936`]:
  - @band-store/framework@2.22.0

## 2.21.2

### Patch Changes

- #16899 `5f12d59a33c718aef7fc68150e8950f88087f80e` Thanks [@RoxasZohbi](https://github.com/RoxasZohbi)! - fix(payment): avoid double-prefixing an already pp\_-prefixed provider id in webhook handling

- Updated dependencies []:
  - @band-store/framework@2.21.2

## 2.21.1

### Patch Changes

- Updated dependencies [`c000d377f1a90d14bcda41500b1ed5bc2734902e`]:
  - @band-store/framework@2.21.1

## 2.21.0

### Patch Changes

- #16750 `9508d6ebaa7bd6222b37a25c0f62eb6264411600` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(payment): correctly persist the acting user on payment captures

- Updated dependencies [`e9d1f84dbfacd35d7787d1af03215a6ae5a176d8`, `a4c0a845e8b3a7a5acfaacbb0c093cd539ac713b`, `c8701e77534f7b615c8b86814f8d5789c0104382`, `df8c278d615229436be5b299ebdc76a576695fc3`]:
  - @band-store/framework@2.21.0

## 2.20.1

### Patch Changes

- Updated dependencies [`f373c17dd60cb1e7df1d0c70db31d516d2a0cb4f`]:
  - @band-store/framework@2.20.1

## 2.20.0

### Patch Changes

- Updated dependencies [`847612908fdd1c11a4df09ccc2e8ab44d338bb04`, `785fd2b8a978201638a4d8d5ae9eea483958c0fb`, `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9`, `6a2fce501f3bcd459c21a67f586c7a15b905ff0f`, `5e06e544a296b9033f20f71f11c559f81a0e5739`]:
  - @band-store/framework@2.20.0

## 2.19.0

### Patch Changes

- Updated dependencies [`372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30`, `5f4d93c374b0ad0b0a31e75de98c7557e0415677`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`]:
  - @band-store/framework@2.19.0

## 2.18.0

### Patch Changes

- #16036 `142ad068e7d892a24a6e2cf8c20e143409d27bde` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(payment, Band Store): reject refunds and captures of negative or 0 amount

- #15990 `935a14c0098580a2b6ef8af11321e931c8ac80da` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): apply select in strategy for single entity fetches

- [`0b678b4c8b3f22d5fa1a63d1cfefd2bb78cdef47`](undefined) - fix(payment,promotion): serialize concurrent money guards to prevent over-capture, over-refund and campaign budget overspend

- Updated dependencies [`1621e14330fe64a968510991408ace8fdac84ce9`, `1359d1bf6237aa058910b805395932cd070d2043`, `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09`, `d76952b5b0e4b287747a7e08f2cb745510143aae`, `d6b2a87da1dbfd065336c80e41cb7c086dc2a340`, `6ef16b6fdc6f04b900583a5f2714a863011ed19a`, `70c122753875f3cca03ff49b8a0ea9fe2c5e1165`, `144c47aba88f6e08fb7c99634c9fec8474721b0a`, `513c01a5a7f587cb52c92677e2379e54bd990361`]:
  - @band-store/framework@2.18.0

## 2.17.2

### Patch Changes

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

- #15085 `b50a9dbaf3eeb29753fa28afbc1b529c44ec5a51` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(payment,payment-stripe,core-flows,Band Store,dashboard,js-sdk,utils,types): introduce async payment methods support

- Updated dependencies [`de58ec503bcd82aae3fe576f9a404c36e2525f4c`]:
  - @band-store/framework@2.17.2

## 2.17.1

### Patch Changes

- Updated dependencies [`975313f62b22055ddaacf7852f33cf7b0f4af5df`]:
  - @band-store/framework@2.17.1

## 2.17.0

### Patch Changes

- Updated dependencies [`57b8e74d0fea8fb0e9dccd76eb6df06f0380071a`]:
  - @band-store/framework@2.17.0

## 2.16.0

### Patch Changes

- [`2bd3b0d18d7d4fe9c6f36bdffb76d1104f58f47b`](undefined) - Add support for deleting a payment method

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

- #15295 `876bdba41d0d00a6d14e25c5deea830aa009b2ad` Thanks [@Ultron03](https://github.com/Ultron03)! - fix(payment): persist provider data returned by cancelPayment

- #15303 `436f549e326563cc3da4b7b142c12072fb89eed4` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(core-flows,payment): Fix rounding issue on refund creation

- #15273 `f57b942b8bbd385f32203965e2f54a3964e812eb` Thanks [@Metbcy](https://github.com/Metbcy)! - fix(core-flows, payment, types): expose `metadata` on refund creation through `refundPaymentsWorkflow`

  The `Refund` data model supports a `metadata` field, but it was not exposed on
  `CreateRefundDTO`, `RefundPaymentsStepInput`, or `RefundPaymentsWorkflowInput`,
  making it impossible to set metadata on a refund created via
  `refundPaymentsWorkflow`. This adds the optional field to all three types and
  threads it through `PaymentModuleService.refundPayment` so the value reaches
  the underlying refund row.

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

- #15144 `d72499ddb490a6e6e61929b1f3b5d467308f7e48` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(payment): fix currency code unset when updating payment collection

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

- Updated dependencies [`13476988763368b3b333fa5bc3f613e8eb174fdf`, `8890f284705a4843a57a3800820208f593689a2a`, `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b`]:
  - @band-store/framework@2.12.6

## 2.12.5

### Patch Changes

- #14465 `568742826fae7240b33e6cc7356a12c3715d05b1` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add modules options autocomplete to Band Store config

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

- Updated dependencies [`9f7846ae0babbad39947a1f33d236bff8b5098d0`, `fe49b567d6d55ae224095c06c710d31d40887653`, `6dc0b8bed84a330c1c24f4f1331f1ed078430a47`, `356283c359e5c30e0d31e6c6fd0fb8e16c025b78`]:
  - @band-store/framework@2.12.2

## 2.12.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.12.1

## 2.12.0

### Patch Changes

- #14073 `62d103b44f6402529a156202e37ec5ece01244b4` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(payment): Double idempotent capture called with auto capture behavior

- Updated dependencies [`c2c3ad5ba53f1959422fb2d37297a8de8d714782`, `7e3eb6e41316d7b04d32bc7186ed0c78de1aa539`, `beb91d88a2f224075e4fcf35a0ee9483b3124504`]:
  - @band-store/framework@2.12.0

## 2.11.3

### Patch Changes

- #13910 `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Dependencies cleanup and improvements

- #13914 `7c72e7bae960088df1efca1cba7275d95ecdaf12` Thanks [@sradevski](https://github.com/sradevski)! - Minor fixes to Band Store payments provider

- Updated dependencies [`28c3ea68f5634792848f146ac6af5b27c848bf21`, `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d`, `afb40d437b3cc4ceb015df70985b2f005f40eaff`, `37563987b8fe75c9acfe62957a33e8398977647a`, `13d7d15be594ca413785eebe8f86b47c36cb9830`]:
  - @band-store/framework@2.11.3

## 2.11.2

### Patch Changes

- #13781 `cc2614ded7f83cdbe7e7f7f809d05f5ab6059fe4` Thanks [@peterlgh7](https://github.com/peterlgh7)! - add Band Store Cloud Email provider

- #13772 `ef7b9b937562144d1f077a16ceb8279c84f3b6af` Thanks [@sradevski](https://github.com/sradevski)! - Add a Band Store payments provider

- Updated dependencies [`85b1f3d43aa8d8e0269a545ef7867733fd0eb8e2`]:
  - @band-store/framework@2.11.2

## 2.11.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.11.1

## 2.11.0

### Patch Changes

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- [`5346079d4717933d31d57f549d4158f3d433551c`](undefined) - chore(): create default refund reasons

- #13598 `087887fefb948e6676001ad2dc2cb265ae6f7430` Thanks [@willbouch](https://github.com/willbouch)! - feat(core-flows): support ad hoc returns

- #13575 `5e827ec95d0f721e62c0d4e8c603bda7ddc0929c` Thanks [@willbouch](https://github.com/willbouch)! - feat(admin-shared,dashboard,js-sdk,types,payment): refund reasons in dashboard

- Updated dependencies [`12a96a7c7015f011f5e29a1d387f835e514ba536`, `b9d6f73320c36c53235b12fb8397b30a448917f0`, `8ece06d8ed6a197ebb370918c49a3ec5c21dd186`, `92d30b28f45b4037cd73c180c8f257070cf49bd4`, `02b6d013822b9665f868c4ea6d1b5cfe58723459`]:
  - @band-store/framework@2.11.0

## 2.10.3

### Patch Changes

- Updated dependencies [`25634b038248ab6501af719faec79b59b496bada`]:
  - @band-store/framework@2.10.3

## 2.10.2

### Patch Changes

- #13296 `e8822f3e693bde33fdfd8b0d6140b4e59b40af98` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Module Internal Events

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

- #13004 `798ac0068ed841d31f6aefc11c58738dc6bf8bd0` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(payment): remove fixed schema from joiner config

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

- #12715 `ab634a14ba709f1b1d12eb4cd5c7f3db6bfe6470` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(utils): Band Store internal service returned data should match typings

- #12803 `ba1e6595b74ae69f4ee066d545f8def8aff77dd3` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(payment): round currency decimal precision

- #12751 `7a8f639b382e20328879ce6d9e93ea2c79f380b5` Thanks [@fPolic](https://github.com/fPolic)! - fix(payment): add account holder methods to the manual provider

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

- Updated dependencies [`ec56a8bc857a74788df6523af25914da95c4c1d8`, `2a18a75353f872b0cb4c203afc08cfd82f778428`]:
  - @band-store/framework@2.7.0

## 2.6.1

### Patch Changes

- #11738 `3b470f41427e487c68f89b8ee8155de716ffe861` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove ranges on Band Store packages

- Updated dependencies [`cc1309d3709b251683a0cda0ced448f8bf9f514e`, `3b470f41427e487c68f89b8ee8155de716ffe861`, `20cd59e622463fbd46506275648ce681869adcdf`]:
  - @band-store/framework@2.6.1

## 2.6.0

## 2.5.1

## 2.5.0

### Minor Changes

- `d3bf59bb7a208a9a280743212601522da5448c1b` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Revamp payment provider interface

### Patch Changes

- #11216 `016e332e9b98f316cded6eb999927fc942ce56c5` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: make AbstractModuleService create method type-safe

## 2.4.0

### Minor Changes

- #10292 `cc73802ab3821d2c667942bd887efb7476205547` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: upgrade to mikro-orm 6

### Patch Changes

- #11048 `da3906efa42ee729c11696e2d3255a60ac3fa958` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: Unique constraint should account for soft deleted records

- Updated dependencies [`0deffe7b9b9a1055813249b17057b7bba01b78ac`, `cc73802ab3821d2c667942bd887efb7476205547`, `13fe2f6776b22c401d131f184fc3600ef4008383`, `e53b8b0a9708d2eb46258ca417b6ff6abbd5f3d9`]:
  - @band-store/framework@2.4.0

## 2.3.1

## 2.3.0

### Minor Changes

- `5faf48b8c236007cd9b229219d466681c9c884c0` Thanks [@olivermrbl](https://github.com/olivermrbl)! - fix(payment): If someone was using region_id from the payment collection entity, or cart_id, order_id, customer_id from the payment entity, they will no longer exist. Similarly, any code that was passing region_Id to createPaymentCollections would be recommended to remove the field.

## 2.2.0

## 2.1.3

## 2.1.2

### Patch Changes

- #10553 `0264294ab55fc34a728834b5d217e0c8a7bf5a90` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Payment module DML

## 2.1.1

### Patch Changes

- #10506 `a04238a7f1b77e6f6fe0e51951251286cd207115` Thanks [@riqwan](https://github.com/riqwan)! - fix(payment): ensure that payment error is captured in logger

## 2.1.0

## 2.0.7

## 2.0.6

## 2.0.5

### Patch Changes

- #10119 `2822972e04f12d2ca9378dd09529ab6ca308a286` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/mikro orm cli wrapper

- #10135 `b1b7a4abf10956d2d2863ba2b7e08e39b1abfbc1` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(payment): Idempotent cancellation and proper creationg fail handling

- #10138 `7aa990795cf262f98b86adb7f14d6f146620bc1d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Update module provider retrieval error message and type

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

## 0.0.3

### Patch Changes

- #6864 `e944a627f0` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: region payment providers management workflows/api

- Updated dependencies [`0c0b425de7`, `8d356217bd`, `1eeb1e9de3`, `20e8df914e`, `27f4f0d724`, `e0b02a1012`, `e944a627f0`, `1a48fe0282`, `86f499de2f`, `09a2220569`, `78f603e4f1`, `cc557c8752`, `dd35a4dbff`, `58c68f6715`, `1bcb13f892`, `82a176e30e`, `11517f0faf`, `62b9dcc6c1`, `5d9aea053c`, `e26cda4b6a`, `bc06ad2db4`, `18f3aacee6`, `232322d035`, `38c971f111`, `45c49e89f2`, `528ef4ca90`, `65794f4bb5`, `93ef94cad3`, `4cf71af07d`, `4b57c5d286`, `c78915c7c5`, `18f3aacee6`, `667c8609cc`, `f175cac4af`, `0a9b9b073d`, `a6562d2a41`, `00e6b21bb5`, `8fd1488938`, `1c6ba4468e`]:
  - @band-store/types@1.11.16
  - @band-store/modules-sdk@1.12.11
  - @band-store/utils@1.11.9

## 0.0.2

### Patch Changes

- #6700 `8f8a4f9b13` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Version all modules to allow for initial testing

- Updated dependencies [`1fd0457c15`, `9288f53327`, `d4b921f3db`, `ac86362e81`, `e4acde1aa2`, `1a661adf3e`, `56cbf88115`, `36a61658f9`, `04a532e5ef`, `c319edb8e0`, `0b9fcb6324`, `586df9da25`, `b3d826497b`, `a86c87fe14`, `640eccd5dd`, `8ea37d03c9`, `339a946f38`, `ac829fc67f`, `d9d5afc3cf`, `c3c4f49fc2`, `9288f53327`, `0d46abf0ff`, `fafde4f54d`, `8dad2b51a2`, `0c705d7bd4`, `a6d7070dd6`, `1d91b7429b`, `168f02f138`, `1ed5f918c3`, `c20eb15cd9`, `e5945479e0`, `f5c2256286`, `000eb61e33`, `d550be3685`, `62a7bcc30c`, `8f8a4f9b13`, `6500f18b9b`, `ce39b9b66e`, `a6a4b3f01a`, `4d51f095b3`, `4625bd1241`, `56b0b45304`, `cc1b66842c`, `24fb102a56`, `e85463b2a7`]:
  - @band-store/types@1.11.14
  - @band-store/utils@1.11.7
  - @band-store/modules-sdk@1.12.9
