# @band-store/link-modules

## 2.22.4

### Patch Changes

- Updated dependencies [`3a0cbbb`, `3d85f84`]:
  - @band-store/framework@2.22.4

## 2.22.3

### Patch Changes

- #17618 `385c4ff` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: update jest to v30.5.2 and use the `--testPathPatterns` flag in test scripts

- #15620 `a6a4254` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,Band Store,core-flows,framework,js-sdk,modules-sdk,types,utils,link-modules,rbac): end to end RBAC implementation

- Updated dependencies [`9692b99`, `2e0d8ae`, `385c4ff`, `2276c84`, `a6a4254`]:
  - @band-store/framework@2.22.3

## 2.22.2

### Patch Changes

- #17567 `52caddd` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(deps): update development and test tooling (cross-env 10.1.0, esbuild 0.28.2, tsup 9.0.0, expect-type 1.4.0, @faker-js/faker 10.6.0, jsdom 30.1.3, @types/jsonwebtoken 9.0.10, msw 3.0.3, rimraf 6.1.3, Testing Library, turbo 2.11.10, @types/node 22, boxen 9.0.0, chalk 6.0.1, ci-info 4.4.0, commander 15.0.0, configstore 8.0.0, dotenv 18.0.9, execa 10.2.1, get-port 7.2.0, inquirer 14.2.4, @inquirer/checkbox 5.2.7, @inquirer/confirm 6.3.4, @inquirer/input 5.1.8, is-docker 4.0.0, meant 2.0.1, open 11.0.4, openapi3-ts 4.6.2, ora 9.4.1, @readme/openapi-parser 10.0.0, @redocly/cli 2.71.0, stack-trace 1.0.0, swagger-inline 8.1.0, yargs 18.2.0) and remove unused development dependencies; drop hosted-git-info from @band-store/cli; fix the band-store-oas-cli circular patch recommendation crashing on references nested in inline schemas; `band-store-oas docs --preview` now serves a static Redoc 3 build since Redocly removed `preview-docs`; replace chalk with Node's built-in `util.styleText` in CommonJS packages; replace uuid with Node's built-in `crypto.randomUUID`; replace get-port with a built-in free-port helper in @band-store/test-utils

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

- Updated dependencies []:
  - @band-store/framework@2.21.2

## 2.21.1

### Patch Changes

- #16810 `03dcfb5ff450478585a57b88743ce8f9efb5ea23` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - chore(link-modules): add order shipping method to shipping option readonly link

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

- #16461 `f3b3bd838ed53b6b2e1adead27d6b1006ea6e6e4` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(inventory,link-modules,Band Store,types,core-flows): support fractional inventory quantities and unit of measure

- Updated dependencies [`847612908fdd1c11a4df09ccc2e8ab44d338bb04`, `785fd2b8a978201638a4d8d5ae9eea483958c0fb`, `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9`, `6a2fce501f3bcd459c21a67f586c7a15b905ff0f`, `5e06e544a296b9033f20f71f11c559f81a0e5739`]:
  - @band-store/framework@2.20.0

## 2.19.0

### Patch Changes

- Updated dependencies [`372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30`, `5f4d93c374b0ad0b0a31e75de98c7557e0415677`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`]:
  - @band-store/framework@2.19.0

## 2.18.0

### Minor Changes

- #15989 `0e7973e2fc3c45da39136cf3f66c90358571ffc5` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(utils): fix delete operation when primary key is not `id`

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

- Updated dependencies [`975313f62b22055ddaacf7852f33cf7b0f4af5df`]:
  - @band-store/framework@2.17.1

## 2.17.0

### Patch Changes

- Updated dependencies [`57b8e74d0fea8fb0e9dccd76eb6df06f0380071a`]:
  - @band-store/framework@2.17.0

## 2.16.0

### Patch Changes

- #14674 `06b05343b4158e7bb96f8f0fbd7e6836a1818e44` Thanks [@fPolic](https://github.com/fPolic)! - feat(dashboard,admin-shared,core-flows,js-sdk,types,Band Store,link-modules): RBAC admin dashboard CRUD

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

- #15344 `e0b8251bbd04a400dffa635e990e3e587f9f2986` Thanks [@Ultron03](https://github.com/Ultron03)! - fix(link-modules): drop schema prefix from RENAME TO target to fix ERROR 42601 in db:sync-links

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

- Updated dependencies [`0929b8d192833e10b6b91795f1ffc478938c3fb7`, `843dbfe7c8f27b732486c7a8da7b6d63f2fdf967`]:
  - @band-store/framework@2.14.0

## 2.13.6

### Patch Changes

- Updated dependencies [`2b0cd5ff0ce00bf1de1d99632f1bda4073ac035d`]:
  - @band-store/framework@2.13.6

## 2.13.5

### Patch Changes

- #14933 `5dbda9c14007e554720d5a2a640fc010ff54c696` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore: disable link if rbac ff is off

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

- #14493 `bb599a26deed6d5b98e6ce6308c447dca5b90f10` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(band-store-app): Link initialization should respect migrationOnly flag

- #14502 `233ec261be200fac83002415aa7c0df082339a3f` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/add schema only flag

- Updated dependencies [`233ec261be200fac83002415aa7c0df082339a3f`]:
  - @band-store/framework@2.12.5

## 2.12.4

### Patch Changes

- Updated dependencies [`181d5fa67122e4e5f38b91f6b716d35f2d08a204`, `d347e369ce555064e24f2dc3cd93b9e4e73a006d`]:
  - @band-store/framework@2.12.4

## 2.12.3

### Patch Changes

- #14293 `dd3eb10b1afd0659a6095b6a642d0bf5322285cd` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(link-modules): export store locale link definition

- #14316 `f5ec359c4c4c81c007d57069df32ad6cc1f31c5d` Thanks [@adrien2p](https://github.com/adrien2p)! - Fix/readonly link feature flag conditional

- #14307 `0f1566c64456a6f29a7bfb1dda5a7c470a84ace7` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(): Add support for store locales end point

- Updated dependencies [`7b4dda5a179c78de5e099231ec407836db4c8dbd`, `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29`, `c8a7122ba918751b215dc0b19cf9b09b2c011ab8`]:
  - @band-store/framework@2.12.3

## 2.12.2

### Patch Changes

- #14004 `5b7e3c0e7649a3a61b0a4fe796f37e5f7fbe9a3a` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(link-modules): ignore duplicates link creation

- #14269 `d7398736e84cfab77db70a8eddf832bb64e89fe5` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Remove unnecessary store support\_\* read only links

- #14276 `9852a7c74d3c27d38b60f865061fd39bc0c46911` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Improve store currency readonly link

- Updated dependencies [`9f7846ae0babbad39947a1f33d236bff8b5098d0`, `fe49b567d6d55ae224095c06c710d31d40887653`, `6dc0b8bed84a330c1c24f4f1331f1ed078430a47`, `356283c359e5c30e0d31e6c6fd0fb8e16c025b78`]:
  - @band-store/framework@2.12.2

## 2.12.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.12.1

## 2.12.0

### Patch Changes

- #14036 `e59cdae3365981339d55ec01224f09995250e67d` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Proper schema usage when running migrations

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

- Updated dependencies []:
  - @band-store/framework@2.11.1

## 2.11.0

### Patch Changes

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- Updated dependencies [`12a96a7c7015f011f5e29a1d387f835e514ba536`, `b9d6f73320c36c53235b12fb8397b30a448917f0`, `8ece06d8ed6a197ebb370918c49a3ec5c21dd186`, `92d30b28f45b4037cd73c180c8f257070cf49bd4`, `02b6d013822b9665f868c4ea6d1b5cfe58723459`]:
  - @band-store/framework@2.11.0

## 2.10.3

### Patch Changes

- #13516 `25634b038248ab6501af719faec79b59b496bada` Thanks [@adrien2p](https://github.com/adrien2p)! - test(): test dynamic max workers and improve CI

- Updated dependencies [`25634b038248ab6501af719faec79b59b496bada`]:
  - @band-store/framework@2.10.3

## 2.10.2

### Patch Changes

- #13459 `de9a21a9da38b82c6de28bd6272c9e87ca72bccc` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve link indexes

- #13465 `8e849074e44fe3b967dbfb3bbbef527f4aed3eed` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): missing events

- Updated dependencies [`b4c0f131b70ba950339c1ca4d81b5ce062a588a3`, `a4b72f9a21fd1d278c622fcd45d24bb9bfb1e0a8`]:
  - @band-store/framework@2.10.2

## 2.10.1

### Patch Changes

- Updated dependencies []:
  - @band-store/framework@2.10.1

## 2.10.0

### Patch Changes

- #13263 `486621383a79e83c831933c1a0ffdae58a695cb0` Thanks [@willbouch](https://github.com/willbouch)! - feat(dashboard,core-flows,js-sdk,link-modules,promotion): free shipping promotion in dashboard

- Updated dependencies [`e413cfefc2e0579ba7c5299dc4f4270310e39c2c`, `e2213448ac9eb93318570fde2807a3036108d44b`]:
  - @band-store/framework@2.10.0

## 2.9.0

### Patch Changes

- #13137 `9725bff25d321011da7ba5096fe0946c5a8f0059` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(index): handle $and and $or operators

- Updated dependencies []:
  - @band-store/framework@2.9.0

## 2.8.8

### Patch Changes

- #12928 `97a8e5cb2e8819672803bfcd9cde19cb1ce1acc0` Thanks [@riqwan](https://github.com/riqwan)! - chore(link-modules): keep promotion alias

- #12920 `8c4228fc42e717f9ab72230040e708f606a585b7` Thanks [@riqwan](https://github.com/riqwan)! - fix(link-modules,core-flows): Carry over cart promotions to order promotions

- Updated dependencies [`43fb06ecc2d87ea2a11e12524679c142eb890ec7`]:
  - @band-store/framework@2.8.8

## 2.8.7

### Patch Changes

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

- #12501 `59bbff62d81861282d55a32d6c0c45285203c4e0` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - fix(index): limit partition table name and index enum fields

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

- #11898 `b868a4ef4deb7df09d6156a907f4c883cd55a3fd` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - feat(index): add filterable fields to link definition

- Updated dependencies [`b868a4ef4deb7df09d6156a907f4c883cd55a3fd`]:
  - @band-store/framework@2.8.0

## 2.7.1

### Patch Changes

- Updated dependencies [`ee35f3ce9097832c10cdf2fd168763088e6c3fcb`, `2f6963a5fbea05537680cb1b1f6a2b9822c36325`, `b8902637251e9ed4f8762ef280659bbab6d967de`]:
  - @band-store/framework@2.7.1

## 2.7.0

### Minor Changes

- `386205d0f41828b82d519d2f5b8e07b41907a8ae` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Change customer to account_holder to be one-to-many

### Patch Changes

- #12097 `74381addc3d6af42f0292e778948aabb60a6dad9` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Emit events in batch and index process event ids in batch

- #11767 `cae47d9e49e9a17d8395f7b390f6ec0a2f9b8dc2` Thanks [@thetutlage](https://github.com/thetutlage)! - feat: add check for uniqueness when creating links with isList=false

- #12062 `2270f29ec544b14c26b246a59f80be121f8014a1` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - chore(link-modules): backward compatible links

- Updated dependencies [`ec56a8bc857a74788df6523af25914da95c4c1d8`, `2a18a75353f872b0cb4c203afc08cfd82f778428`]:
  - @band-store/framework@2.7.0

## 2.6.1

### Patch Changes

- #11738 `3b470f41427e487c68f89b8ee8155de716ffe861` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove ranges on Band Store packages

- Updated dependencies [`cc1309d3709b251683a0cda0ced448f8bf9f514e`, `3b470f41427e487c68f89b8ee8155de716ffe861`, `20cd59e622463fbd46506275648ce681869adcdf`]:
  - @band-store/framework@2.6.1

## 2.6.0

### Patch Changes

- #11643 `228b7b608dfa935618179684fa3d005f7a9aaf01` Thanks [@adrien2p](https://github.com/adrien2p)! - Chore/link module serialization

- #11601 `b42f151be31161a5d7a73132ee6794b990403d76` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Improve internal repository delete algo

## 2.5.1

## 2.5.0

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

## 2.1.2

## 2.1.1

## 2.1.0

## 2.0.7

## 2.0.6

## 2.0.5

## 2.0.4

## 2.0.3

### Patch Changes

- #9955 `03f4b66b90625634f13409be35cd57081f0eb7d5` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Generate graph schema with readonly links

## 2.0.2

## 2.0.1

## 2.0.0

### Major Changes

- #7341 `2e42e053d4c9d5445d227bdc268c66713aad8e2e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Band Store 2.0

### Patch Changes

- Updated dependencies [`2e42e053d4c9d5445d227bdc268c66713aad8e2e`]:
  - @band-store/framework@2.0.0

## 0.2.11

### Patch Changes

- #6864 `e944a627f0` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: region payment providers management workflows/api

- #6876 `1bcb13f892` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Remove sales channels from pub keys

- #6851 `ea8d9d4d42` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: API key sales channel link

- #6962 `65794f4bb5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: Create shipping options API

- #6905 `edafe7db47` Thanks [@pKorsholm](https://github.com/pKorsholm)! - feat(link-modules, core-flows, Band Store): add sales channel location management endpoint

- #7153 `4b57c5d286` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Remote query supporting context

- Updated dependencies [`0c0b425de7`, `8d356217bd`, `1eeb1e9de3`, `20e8df914e`, `27f4f0d724`, `e0b02a1012`, `e944a627f0`, `1a48fe0282`, `86f499de2f`, `09a2220569`, `78f603e4f1`, `cc557c8752`, `dd35a4dbff`, `58c68f6715`, `1bcb13f892`, `82a176e30e`, `11517f0faf`, `62b9dcc6c1`, `5d9aea053c`, `e26cda4b6a`, `bc06ad2db4`, `18f3aacee6`, `232322d035`, `38c971f111`, `45c49e89f2`, `528ef4ca90`, `65794f4bb5`, `93ef94cad3`, `4cf71af07d`, `4b57c5d286`, `c78915c7c5`, `18f3aacee6`, `667c8609cc`, `f175cac4af`, `0a9b9b073d`, `a6562d2a41`, `00e6b21bb5`, `8fd1488938`, `1c6ba4468e`]:
  - @band-store/types@1.11.16
  - @band-store/modules-sdk@1.12.11
  - @band-store/utils@1.11.9

## 0.2.10

### Patch Changes

- #6764 `60070fb65f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Recreate dismissed link

- Updated dependencies [`06f22bb48a`, `deab12e27e`, `56481e683d`, `9073d7aba3`, `4974f5e455`, `05e857d256`, `1ef9c78cea`]:
  - @band-store/modules-sdk@1.12.10
  - @band-store/types@1.11.15
  - @band-store/utils@1.11.8

## 0.2.9

### Patch Changes

- #6418 `1ba35b02dd` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Cart SalesChannel link

- #6411 `586df9da25` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Fix custom modules loader

- #6561 `d550be3685` Thanks [@riqwan](https://github.com/riqwan)! - feat(core-flows,link-modules,modules-sdk): add cart <> promotion link as source of truth

- #6700 `8f8a4f9b13` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Version all modules to allow for initial testing

- #6392 `24fb102a56` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: CartRegion link, definition + workflow

- Updated dependencies [`1fd0457c15`, `9288f53327`, `d4b921f3db`, `ac86362e81`, `e4acde1aa2`, `1a661adf3e`, `56cbf88115`, `36a61658f9`, `04a532e5ef`, `c319edb8e0`, `0b9fcb6324`, `586df9da25`, `b3d826497b`, `a86c87fe14`, `640eccd5dd`, `8ea37d03c9`, `339a946f38`, `ac829fc67f`, `d9d5afc3cf`, `c3c4f49fc2`, `9288f53327`, `0d46abf0ff`, `fafde4f54d`, `8dad2b51a2`, `0c705d7bd4`, `a6d7070dd6`, `1d91b7429b`, `168f02f138`, `1ed5f918c3`, `c20eb15cd9`, `e5945479e0`, `f5c2256286`, `000eb61e33`, `d550be3685`, `62a7bcc30c`, `8f8a4f9b13`, `6500f18b9b`, `ce39b9b66e`, `a6a4b3f01a`, `4d51f095b3`, `4625bd1241`, `56b0b45304`, `cc1b66842c`, `24fb102a56`, `e85463b2a7`]:
  - @band-store/types@1.11.14
  - @band-store/utils@1.11.7
  - @band-store/modules-sdk@1.12.9

## 0.2.8

### Patch Changes

- #5923 `3db2f95e65` Thanks [@fPolic](https://github.com/fPolic)! - feat: Sales Channel module

- #6263 `45134e4d1` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Workflows passing BandStoreContext as argument

- #6218 `884428a1b` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Feat: Event Aggregator

- Updated dependencies [`12054f5c0`, `3db2f95e65`, `96ba49329`, `45134e4d1`, `82c728bec`, `e749dd653`, `884428a1b`, `d1c18a309`, `882aa549b`]:
  - @band-store/utils@1.11.5
  - @band-store/modules-sdk@1.12.8
  - @band-store/types@1.11.12

## 0.2.7

### Patch Changes

- #6035 `b6ac768698` Thanks [@adrien2p](https://github.com/adrien2p)! - chore: Attempt to abstract the modules repository

- Updated dependencies [`68ddd866a5`, `72bc52231c`, `99045848f`, `af7af7374`, `fc6b1772a7`, `a9b4214503`, `d85fee42e`, `5e655dd59`, `b132ff7669`, `e28fa7fbdf`, `a12c28b7d5`, `b782d3bcb7`, `2b9f98895e`, `7f7cb2a263`, `302323916`, `da5cc4cf7`, `daecd82a7`, `ce81cade88`, `fd78f5e24`, `192bc336cc`, `06b33a9b4`, `b6ac768698`, `130c641e5c`, `fade8ea7bf`, `8472460f53`, `68d8daccd`]:
  - @band-store/types@1.11.11
  - @band-store/utils@1.11.4
  - @band-store/modules-sdk@1.12.7

## 0.2.6

### Patch Changes

- #5450 `1d7888afca` Thanks [@fPolic](https://github.com/fPolic)! - feat(Band Store, link-module): SalesChannel<>Product joiner config

- #5985 `d16d10619` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(band-store-test-utils, utils, link-modules, pricing, product): upgrade mikro-orm version

- #5820 `6fc6a9de6` Thanks [@fPolic](https://github.com/fPolic)! - feat: PubKey <> SC joiner config

- #5810 `fe007d01b` Thanks [@fPolic](https://github.com/fPolic)! - feat: sales channel <> order link

- #5459 `76332ca6c` Thanks [@fPolic](https://github.com/fPolic)! - feat: SalesChannel <> Cart joiner config

- Updated dependencies [`6d1e3cc02`, `42cc8ae3f`, `45996d58a2`, `9cc787cac4`, `355075097`, `dc46ee118`, `925feea04`, `3f6d79961`, `fbee006e5`, `c41f3002f`, `d16d10619`, `c1c470e6b`, `890e76a5c`, `fe007d01b`, `76332ca6c`]:
  - @band-store/modules-sdk@1.12.6
  - @band-store/types@1.11.10
  - @band-store/utils@1.11.3

## 0.2.5

### Patch Changes

- #5755 `8f25ed8a1` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(link-modules, pricing, product, utils): Should be able to set some custom database config even in shared mode

- Updated dependencies [`079f0da83`, `c4deeee48`, `8f25ed8a1`]:
  - @band-store/types@1.11.9
  - @band-store/utils@1.11.2
  - @band-store/modules-sdk@1.12.5

## 0.2.4

### Patch Changes

- #5732 `de8f74867` Thanks [@pKorsholm](https://github.com/pKorsholm)! - fix(link-modules, utils): remove limtis if primary key exists in filter for buildquery and no limit is present

- #5607 `9f9db3969` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Workflows composer api

- Updated dependencies [`a39ce125c`, `18afe0b9a`, `6025c702f`, `de8f74867`, `fc1ef29ed`, `0df1c7d42`, `dc5750dd6`]:
  - @band-store/types@1.11.8
  - @band-store/utils@1.11.1
  - @band-store/modules-sdk@1.12.4

## 0.2.3

### Patch Changes

- #5496 `154c9b43b` Thanks [@adrien2p](https://github.com/adrien2p)! - feat(Band Store, modules-sdk, types, utils): Re work modules loading and remove legacy functions

- Updated dependencies [`91615f9c4`, `c39bf69a5`, `154c9b43b`]:
  - @band-store/types@1.11.6
  - @band-store/modules-sdk@1.12.3
  - @band-store/utils@1.10.5

## 0.2.2

### Patch Changes

- #5468 `a45da9215` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(Band Store, modules-sdk, modules): Module loading was missing the expected dependencies and remote query reference fix

- Updated dependencies [`148f537b4`, `a45da9215`]:
  - @band-store/types@1.11.5
  - @band-store/modules-sdk@1.12.2

## 0.2.1

### Patch Changes

- #5317 `b62af612c` Thanks [@riqwan](https://github.com/riqwan)! - feat(link-modules,modules-sdk,pricing): Band Store App Migrations + Core compatible migrations

- Updated dependencies [`378ca1b36`, `69cf7215f`, `453297f52`, `b62af612c`, `e47461d95`, `66413d094`]:
  - @band-store/utils@1.10.4
  - @band-store/types@1.11.4
  - @band-store/modules-sdk@1.12.1

## 0.2.0

### Minor Changes

- #5242 `130cbc1f4` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Modules exporting schema with entities and fields

### Patch Changes

- Updated dependencies [`eeceec791`, `130cbc1f4`, `cb569c2df`, `c5703a476`]:
  - @band-store/utils@1.10.3
  - @band-store/modules-sdk@1.12.0
  - @band-store/types@1.11.3

## 0.1.1

### Patch Changes

- #5014 `d3ebb42cb` Thanks [@riqwan](https://github.com/riqwan)! - fix(link-modules): fix link configuration for product shipping profile

- #4969 `30863fee5` Thanks [@adrien2p](https://github.com/adrien2p)! - feat: store List products remote query with product isolation

- #5025 `3d68be2b6` Thanks [@riqwan](https://github.com/riqwan)! - fix(orchestration,link-modules,pricing,types): fix shippingprofile error outside of core + change link alias name

- #4990 `a87d07655` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(link-modules): Fix link module initialization

- #4978 `834da5c41` Thanks [@riqwan](https://github.com/riqwan)! - feat(pricing,types,link-modules): PriceSets as an entry point to pricing module

- Updated dependencies [`d8649baca`, `4fa675ec2`, `6273b4b16`, `30863fee5`, `3d68be2b6`, `a87d07655`, `edf90eecb`, `107aaa371`, `834da5c41`]:
  - @band-store/modules-sdk@1.11.0
  - @band-store/types@1.11.1
  - @band-store/utils@1.10.1

## 0.1.0

### Minor Changes

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Band Store App Loader

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - introduce @band-store/link-modules

- #4925 `a4906d0ac` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Use BandStoreApp on core and initial JoinerConfig for internal services

### Patch Changes

- #4695 `4d16acf5f` Thanks [@carlos-r-l-rodrigues](https://github.com/carlos-r-l-rodrigues)! - Add extra fields to link modules

- #4915 `87bade096` Thanks [@riqwan](https://github.com/riqwan)! - fix(utils, product, pricing, link-modules): add missing dependencies for utils + fix migration path issue

- Updated dependencies [`c3dba0694`, `460161a69`, `fcb6b4f51`, `66bd9a835`, `4d16acf5f`, `4d16acf5f`, `87bade096`, `4d16acf5f`, `a4906d0ac`]:
  - @band-store/modules-sdk@1.10.0
  - @band-store/types@1.11.0
  - @band-store/utils@1.10.0
