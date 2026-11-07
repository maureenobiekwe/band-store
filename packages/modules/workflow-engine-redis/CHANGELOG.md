# @band-store/workflow-engine-redis

## 2.22.4

### Patch Changes

- Updated dependencies [`3a0cbbb`, `3d85f84`]:
  - @band-store/framework@2.22.4

## 2.22.3

### Patch Changes

- #17609 `39fb481` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(cli,orchestration,utils,workflows-sdk,test-utils,file-s3,workflow-engine-inmemory,workflow-engine-redis): update ulid to v3.0.2

- #17618 `385c4ff` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: update jest to v30.5.2 and use the `--testPathPatterns` flag in test scripts

- Updated dependencies [`9692b99`, `2e0d8ae`, `385c4ff`, `2276c84`, `a6a4254`]:
  - @band-store/framework@2.22.3

## 2.22.2

### Patch Changes

- #17533 `26e5807` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: update ioredis to ^5.11.1

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

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- Updated dependencies [`d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a`, `14499a2e9309d653c0e4ec6aec3f88079751b4d2`, `44db0ca6357ab4d4681a8004e869fde339c3117a`, `1db74006ede40300afe64970024688a1a9c2a936`]:
  - @band-store/framework@2.22.0

## 2.21.2

### Patch Changes

- #16730 `7054b05d1fa2bebfd168766737bdebc9ef1a15a3` Thanks [@Asgabani](https://github.com/Asgabani)! - fix(workflow-engine-redis): nest RedisWorkflowsOptions under redis in the module options type

  The `ModuleOptions` augmentation declared `RedisWorkflowsOptions` as the type of the whole module options object, so `{ redisUrl: "..." }` passed type-checking. The runtime loader, however, has always read the same options from a nested `options.redis` object, and every existing test configures the module that way. Passing the top-level shape the types allowed for silently produced no Redis connection, since `redisUrl`/`url` were never read from that location.

  The module options type now matches the shape the loader has always required (`{ redis: { redisUrl, ... } }`), matching the docs example on the module's page. No runtime behavior changes.

- Updated dependencies []:
  - @band-store/framework@2.21.2

## 2.21.1

### Patch Changes

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

- #16533 `f7317903600e5b64f06c21c29a73e0e569d2fe3a` Thanks [@leobenzol](https://github.com/leobenzol)! - fix(workflow-engine-redis,link-modules,orchestration,utils): fix most flaky tests

- Updated dependencies [`847612908fdd1c11a4df09ccc2e8ab44d338bb04`, `785fd2b8a978201638a4d8d5ae9eea483958c0fb`, `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9`, `6a2fce501f3bcd459c21a67f586c7a15b905ff0f`, `5e06e544a296b9033f20f71f11c559f81a0e5739`]:
  - @band-store/framework@2.20.0

## 2.19.0

### Patch Changes

- Updated dependencies [`372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30`, `5f4d93c374b0ad0b0a31e75de98c7557e0415677`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`]:
  - @band-store/framework@2.19.0

## 2.18.0

### Patch Changes

- Updated dependencies [`1621e14330fe64a968510991408ace8fdac84ce9`, `1359d1bf6237aa058910b805395932cd070d2043`, `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09`, `d76952b5b0e4b287747a7e08f2cb745510143aae`, `d6b2a87da1dbfd065336c80e41cb7c086dc2a340`, `6ef16b6fdc6f04b900583a5f2714a863011ed19a`, `70c122753875f3cca03ff49b8a0ea9fe2c5e1165`, `144c47aba88f6e08fb7c99634c9fec8474721b0a`, `513c01a5a7f587cb52c92677e2379e54bd990361`]:
  - @band-store/framework@2.18.0

## 2.17.2

### Patch Changes

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

- Updated dependencies [`de58ec503bcd82aae3fe576f9a404c36e2525f4c`]:
  - @band-store/framework@2.17.2

## 2.17.1

### Patch Changes

- #15815 `975313f62b22055ddaacf7852f33cf7b0f4af5df` Thanks [@peterlgh7](https://github.com/peterlgh7)! - pass scheduled_for to job handlers

- Updated dependencies [`975313f62b22055ddaacf7852f33cf7b0f4af5df`]:
  - @band-store/framework@2.17.1

## 2.17.0

### Patch Changes

- Updated dependencies [`57b8e74d0fea8fb0e9dccd76eb6df06f0380071a`]:
  - @band-store/framework@2.17.0

## 2.16.0

### Patch Changes

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

- #15334 `a843721b150cf0fa32cebf4d6ecb75476391e666` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(workflow-engine-redis): fix flaky tests by isolating job and queues between specs

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

- Updated dependencies [`7b4dda5a179c78de5e099231ec407836db4c8dbd`, `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29`, `c8a7122ba918751b215dc0b19cf9b09b2c011ab8`]:
  - @band-store/framework@2.12.3

## 2.12.2

### Patch Changes

- #14201 `144f0f4e2ef4bf27e0e3fc48dd7d79bb6fbedef9` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Enable more granualar queue configuration

- Updated dependencies [`9f7846ae0babbad39947a1f33d236bff8b5098d0`, `fe49b567d6d55ae224095c06c710d31d40887653`, `6dc0b8bed84a330c1c24f4f1331f1ed078430a47`, `356283c359e5c30e0d31e6c6fd0fb8e16c025b78`]:
  - @band-store/framework@2.12.2

## 2.12.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.12.1

## 2.12.0

### Patch Changes

- #14037 `1ea932a56f1d85fd1ebbe4a77f3619fe58d2947a` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Identify step that force save checkpoint

- #14099 `6c3ec528f146738f55a29e69ee13e9cdb8e3c9b5` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Workflow engine redis worker instance in worker mode

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

- #13789 `d51ae2768be0dad5ece49324aa4866bb591e7ad0` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(workflow-engine-\*): cleanup and improvements

- #13786 `bad0858348dca100533bb6fcdcdefe90b0668407` Thanks [@srindom](https://github.com/srindom)! - fix: avoid jobId collisions on retry

- Updated dependencies []:
  - @band-store/framework@2.11.1

## 2.11.0

### Patch Changes

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- #13645 `76aa4a48b3cbec519ab16c96cc87ee3288de28de` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/workflows concurrency

- [`5346079d4717933d31d57f549d4158f3d433551c`](undefined) - chore(): create default refund reasons

- [`9633e0676e0d0b8ff681b45e47ef97402d8a9831`](undefined) - fix(workflow-engine-redis): module option queueName wrongly used

- [`cb716856b653c31178a5977b17ec77eed4c9c241`](undefined) - fix(engine): Always create cleaner job

- [`b43b285125a66455ed6567543414eddcbe54781e`](undefined) - fix(): Workflow save to db + index integration instability

- [`68a643bb3aafc6bb8f7d15ebc49870dd7f53976e`](undefined) - fix(workflow-engine-redis): cleaner using worker connection

- #13769 `516f5a38960f1ea05a2c696e0079d2e4c34d5c86` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: workflow async concurrency

- Updated dependencies [`12a96a7c7015f011f5e29a1d387f835e514ba536`, `b9d6f73320c36c53235b12fb8397b30a448917f0`, `8ece06d8ed6a197ebb370918c49a3ec5c21dd186`, `92d30b28f45b4037cd73c180c8f257070cf49bd4`, `02b6d013822b9665f868c4ea6d1b5cfe58723459`]:
  - @band-store/framework@2.11.0

## 2.10.3

### Patch Changes

- #13457 `ebf33bea43bb6fe03a60a3099b2bc62608f0d13b` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): pipeline missing suites

- Updated dependencies [`25634b038248ab6501af719faec79b59b496bada`]:
  - @band-store/framework@2.10.3

## 2.10.2

### Patch Changes

- #13396 `2b89510df3b87c153beae5207b1f9184002129d7` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): only execute race execution checks for async workflows

- #13345 `bd206cb2505a832d0e426040f7a8cf10a947d346` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore(): workflow engine race condition improvements

- #13391 `d7692100e7a2b2f078756cac9ca2b33784d3d1ff` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(orchestration): add support for autoRetry step configuration

- #13434 `fc4d5f0ac94afaf48fdf39f1d6bd3ac97259a8c5` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Workflow engine timers and notification improvements

- Updated dependencies [`b4c0f131b70ba950339c1ca4d81b5ce062a588a3`, `a4b72f9a21fd1d278c622fcd45d24bb9bfb1e0a8`]:
  - @band-store/framework@2.10.2

## 2.10.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.10.1

## 2.10.0

### Minor Changes

- #13236 `9412669e654c994e2dbee9cf61c18004d79f6475` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(core-flows): idempotent cart operations and nested workflow deletion lifecycle fix

### Patch Changes

- #13319 `ff152e7ace60232c02932bbd06a759e555a823d4` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(orchestration): Use the step definition max retries on set step failure

- Updated dependencies [`e413cfefc2e0579ba7c5299dc4f4270310e39c2c`, `e2213448ac9eb93318570fde2807a3036108d44b`]:
  - @band-store/framework@2.10.0

## 2.9.0

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.9.0

## 2.8.8

### Patch Changes

- #12976 `eb83954f23077c0714125b6f2f19fd0ef0f288f9` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(workflow-engine-\*): Align event subscribers management

- #12982 `238e7d53c13a1c033886d7c33254919f8b5b22dc` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(wfe): should notify when finished + add state info

- Updated dependencies [`43fb06ecc2d87ea2a11e12524679c142eb890ec7`]:
  - @band-store/framework@2.8.8

## 2.8.7

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.8.7

## 2.8.6

### Patch Changes

- #12834 `95d282e8ef8f2185737d493dea8b6f1677684543` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/test utils events

- Updated dependencies []:
  - @band-store/framework@2.8.6

## 2.8.5

### Patch Changes

- #12795 `316a325b63e92003df25452faf88e577e9133064` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(workflow-engine-\*): Cleanup expired executions

- #12675 `1a7847660890ae84648123567ce8dc4c9a0eca03` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(workflow-sdk): Async propagation

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

- #12439 `ab22faaa52008ad952d50f0a3b6b1148515b10c9` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore/test runner improvements

- Updated dependencies []:
  - @band-store/framework@2.8.1

## 2.8.0

### Patch Changes

- #12362 `80007f3afda76eabd5b148fa6bb5590fa6987265` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(workflows-\*): Allow to re run non idempotent but stored workflow with the same transaction id if considered done

- Updated dependencies [`b868a4ef4deb7df09d6156a907f4c883cd55a3fd`]:
  - @band-store/framework@2.8.0

## 2.7.1

### Patch Changes

- #12196 `8618e6ee3843069ea189ea64d5191d93db52dc9d` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Properly handle workflow as step now that events are fixed entirely

- Updated dependencies [`ee35f3ce9097832c10cdf2fd168763088e6c3fcb`, `2f6963a5fbea05537680cb1b1f6a2b9822c36325`, `b8902637251e9ed4f8762ef280659bbab6d967de`]:
  - @band-store/framework@2.7.1

## 2.7.0

### Patch Changes

- #11771 `72d2cf92075b3e0849251f233517e2972de1b19c` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: workflow retry interval race condition

- #11800 `fc652ea51e4fdc19e8b15f1ac8a08effbc68ea30` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(workflow-engine-redis): scheduled jobs 2

- #11844 `0625f76cd4f040963829b61dcc70563e1d1b7070` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(workflow-engine): expose cancel method

- #11822 `6053ec3976d5ebd18680eba5eff3c71038a108cb` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(workflow-engine-redis): remove repeatable jobs from old queue

- #11873 `13e159d8ad7ebb3e6977969b4bb10877d7bb7850` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(workflow-engine-\*): Prevent passing shared context reference and workflow.cancel

- Updated dependencies [`ec56a8bc857a74788df6523af25914da95c4c1d8`, `2a18a75353f872b0cb4c203afc08cfd82f778428`]:
  - @band-store/framework@2.7.0

## 2.6.1

### Patch Changes

- #11738 `3b470f41427e487c68f89b8ee8155de716ffe861` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove ranges on Band Store packages

- #11740 `cc8422d3a163d18492e1bd6de50e0796ca34a41f` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(workflow-engine-redis): Split the queues and respect worker mode for job executions

- Updated dependencies [`cc1309d3709b251683a0cda0ced448f8bf9f514e`, `3b470f41427e487c68f89b8ee8155de716ffe861`, `20cd59e622463fbd46506275648ce681869adcdf`]:
  - @band-store/framework@2.6.1

## 2.6.0

### Patch Changes

- #11641 `c250de79192bda1b1cd217bcca37f458c693de1d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Prevent sub workflow events release early + redis unlink

## 2.5.1

## 2.5.0

### Patch Changes

- #11200 `c8376a9f15ba728506411e567ed4389c7b64406f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(Band Store): remove expired workflow executions

## 2.4.0

### Minor Changes

- #10292 `cc73802ab3821d2c667942bd887efb7476205547` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: upgrade to mikro-orm 6

### Patch Changes

- #11048 `da3906efa42ee729c11696e2d3255a60ac3fa958` Thanks [@adrien2p](https://github.com/adrien2p)! - fix: Unique constraint should account for soft deleted records

- Updated dependencies [`0deffe7b9b9a1055813249b17057b7bba01b78ac`, `cc73802ab3821d2c667942bd887efb7476205547`, `13fe2f6776b22c401d131f184fc3600ef4008383`, `e53b8b0a9708d2eb46258ca417b6ff6abbd5f3d9`]:
  - @band-store/framework@2.4.0

## 2.3.1

## 2.3.0

## 2.2.0

## 2.1.3

## 2.1.2

## 2.1.1

### Patch Changes

- #10459 `90ae187e097c42a224c701f31cbc2924ea6ee86b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix: when/then step name

- #10477 `0a077d48e14976bafcf19705fc48e66756362fd6` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(workflow-engine): Migrate to DML

## 2.1.0

## 2.0.7

## 2.0.6

## 2.0.5

### Patch Changes

- #10119 `2822972e04f12d2ca9378dd09529ab6ca308a286` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/mikro orm cli wrapper

- #10031 `1eef324af33cfb70b414ac564788f28dfd6d2c18` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix set step failure for async steps

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

## 0.0.4

### Patch Changes

- #6869 `e603726985` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix Workflow Engine subscribers response and error

- #6924 `12fcb655cd` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore/workflow engine loader redis

- #6886 `a164c0d512` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Async steps marked as success if return StepResponse

- #6901 `82a176e30e` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(band-store-test-utils): Handle errors gracefully + Do not set Distributed storage on partial loading

- #7161 `edcafa140c` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix onStepAwaiting event

- #6865 `8fd1488938` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Band Store shutdown

- Updated dependencies [`0c0b425de7`, `e603726985`, `8d356217bd`, `1eeb1e9de3`, `20e8df914e`, `a164c0d512`, `27f4f0d724`, `e0b02a1012`, `e944a627f0`, `1a48fe0282`, `86f499de2f`, `09a2220569`, `78f603e4f1`, `cc557c8752`, `dd35a4dbff`, `58c68f6715`, `1bcb13f892`, `82a176e30e`, `11517f0faf`, `62b9dcc6c1`, `5d9aea053c`, `e26cda4b6a`, `bc06ad2db4`, `18f3aacee6`, `232322d035`, `38c971f111`, `45c49e89f2`, `71aeda7347`, `528ef4ca90`, `65794f4bb5`, `93ef94cad3`, `4cf71af07d`, `4b57c5d286`, `c78915c7c5`, `18f3aacee6`, `667c8609cc`, `f175cac4af`, `0a9b9b073d`, `a6562d2a41`, `00e6b21bb5`, `8fd1488938`, `1c6ba4468e`]:
  - @band-store/types@1.11.16
  - @band-store/workflows-sdk@0.1.6
  - @band-store/modules-sdk@1.12.11
  - @band-store/utils@1.11.9

## 0.0.3

### Patch Changes

- #6330 `0c2a460751` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Workflow engine API

- #6700 `8f8a4f9b13` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Version all modules to allow for initial testing

- Updated dependencies [`1fd0457c15`, `9288f53327`, `d4b921f3db`, `ac86362e81`, `e4acde1aa2`, `1a661adf3e`, `56cbf88115`, `36a61658f9`, `04a532e5ef`, `0c2a460751`, `c319edb8e0`, `0b9fcb6324`, `586df9da25`, `b3d826497b`, `a86c87fe14`, `640eccd5dd`, `8ea37d03c9`, `339a946f38`, `ac829fc67f`, `d9d5afc3cf`, `c3c4f49fc2`, `9288f53327`, `0d46abf0ff`, `fafde4f54d`, `8dad2b51a2`, `0c705d7bd4`, `a6d7070dd6`, `1d91b7429b`, `168f02f138`, `1ed5f918c3`, `c20eb15cd9`, `e5945479e0`, `f5c2256286`, `000eb61e33`, `d550be3685`, `4b06c17dc0`, `62a7bcc30c`, `f611865553`, `8f8a4f9b13`, `6500f18b9b`, `ce39b9b66e`, `a6a4b3f01a`, `4d51f095b3`, `4625bd1241`, `56b0b45304`, `cc1b66842c`, `24fb102a56`, `e85463b2a7`]:
  - @band-store/types@1.11.14
  - @band-store/utils@1.11.7
  - @band-store/workflows-sdk@0.1.4
  - @band-store/modules-sdk@1.12.9

## 0.0.2

### Patch Changes

- #6128 `302323916` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Modules: Workflows Engine in-memory and Redis

- Updated dependencies [`68ddd866a5`, `72bc52231c`, `99045848f`, `af7af7374`, `fc6b1772a7`, `a9b4214503`, `d85fee42e`, `5e655dd59`, `b132ff7669`, `e28fa7fbdf`, `a12c28b7d5`, `b782d3bcb7`, `2b9f98895e`, `7f7cb2a263`, `302323916`, `da5cc4cf7`, `daecd82a7`, `738e9115e`, `ce81cade88`, `fd78f5e24`, `192bc336cc`, `06b33a9b4`, `b6ac768698`, `19bbae61f8`, `130c641e5c`, `fade8ea7bf`, `8472460f53`, `68d8daccd`]:
  - @band-store/types@1.11.11
  - @band-store/utils@1.11.4
  - @band-store/modules-sdk@1.12.7
  - @band-store/workflows-sdk@0.1.2
