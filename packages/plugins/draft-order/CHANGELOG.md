# @band-store/draft-order

## 2.22.4

### Patch Changes

- #17647 `199c263` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: upgrade TypeScript to 6.0.3

- Updated dependencies [`74827c2`, `d8b4839`, `43c5ec2`, `e3a2f38`, `3a0cbbb`, `82d65fc`, `3d85f84`, `df7f931`, `199c263`]:
  - @band-store/dashboard@2.22.4
  - @band-store/test-utils@2.22.4
  - @band-store/framework@2.22.4
  - @band-store/cli@2.22.4
  - @band-store/admin-sdk@2.22.4
  - @band-store/icons@2.22.4
  - @band-store/js-sdk@2.22.4
  - @band-store/ui@4.2.11

## 2.22.3

### Patch Changes

- #17611 `ae1da4d` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(admin-vite-plugin,dashboard,telemetry,draft-order): update babel to v8

- Updated dependencies [`f0697e1`, `86b1067`, `9692b99`, `2e0d8ae`, `39fb481`, `ae1da4d`, `385c4ff`, `2276c84`, `a6a4254`, `6942022`]:
  - @band-store/dashboard@2.22.3
  - @band-store/cli@2.22.3
  - @band-store/framework@2.22.3
  - @band-store/test-utils@2.22.3
  - @band-store/js-sdk@2.22.3
  - @band-store/ui@4.2.10
  - @band-store/admin-sdk@2.22.3
  - @band-store/icons@2.22.3

## 2.22.2

### Patch Changes

- #17528 `6d38bc8` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(dashboard,telemetry,draft-order): update @babel/runtime to ^7.29.10

- #17515 `7b34df3` Thanks [@dependabot](https://github.com/apps/dependabot)! - chore(deps): bump zod from 4.2.0 to 4.6.6

- #17572 `842d781` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(deps): update admin and design-system UI dependencies (clsx 2.1.1, cmdk 1.1.1, copy-to-clipboard 4.0.2, date-fns 4.4.0, @dnd-kit/sortable 10.0.0 with @dnd-kit/core ^6.3.0, @hookform/resolvers 6.0.0, match-sorter 8.3.0, motion 14.6.0, react-currency-input-field 4.0.14, react-helmet-async 3.0.0, react-jwt 2.1.1, sonner 2.0.8)

- #17567 `52caddd` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(deps): update development and test tooling (cross-env 10.1.0, esbuild 0.28.2, tsup 9.0.0, expect-type 1.4.0, @faker-js/faker 10.6.0, jsdom 30.1.3, @types/jsonwebtoken 9.0.10, msw 3.0.3, rimraf 6.1.3, Testing Library, turbo 2.11.10, @types/node 22, boxen 9.0.0, chalk 6.0.1, ci-info 4.4.0, commander 15.0.0, configstore 8.0.0, dotenv 18.0.9, execa 10.2.1, get-port 7.2.0, inquirer 14.2.4, @inquirer/checkbox 5.2.7, @inquirer/confirm 6.3.4, @inquirer/input 5.1.8, is-docker 4.0.0, meant 2.0.1, open 11.0.4, openapi3-ts 4.6.2, ora 9.4.1, @readme/openapi-parser 10.0.0, @redocly/cli 2.71.0, stack-trace 1.0.0, swagger-inline 8.1.0, yargs 18.2.0) and remove unused development dependencies; drop hosted-git-info from @band-store/cli; fix the band-store-oas-cli circular patch recommendation crashing on references nested in inline schemas; `band-store-oas docs --preview` now serves a static Redoc 3 build since Redocly removed `preview-docs`; replace chalk with Node's built-in `util.styleText` in CommonJS packages; replace uuid with Node's built-in `crypto.randomUUID`; replace get-port with a built-in free-port helper in @band-store/test-utils

- Updated dependencies [`ca881e5`, `9d55082`, `6d38bc8`, `9d55082`, `9d55082`, `26e5807`, `9d55082`, `6d38bc8`, `6d38bc8`, `7b34df3`, `2f0b2e9`, `842d781`, `52caddd`, `80deffc`, `5ac3fdc`]:
  - @band-store/framework@2.22.2
  - @band-store/test-utils@2.22.2
  - @band-store/dashboard@2.22.2
  - @band-store/cli@2.22.2
  - @band-store/js-sdk@2.22.2
  - @band-store/ui@4.2.9
  - @band-store/admin-sdk@2.22.2
  - @band-store/icons@2.22.2

## 2.22.1

### Patch Changes

- Updated dependencies [`3a3207347379b065142895fb0740442fea5f4033`, `8ef41c356312e73b76cdcf19be19cff80c466b76`, `33deceee8465af8e04f0cfa77090c2208db51658`, `6917a271ff2dd5afbd98c27bdca44c6bdfbd1630`, `879fb81983bc33ae3901a9aecba63dfebe040c43`, `8604053686b9b4c5bf033f03dc32412f9de902ce`, `7c3b0339379efeda7863f48b9f60e3391cece091`, `bb1cece185d747fcac1e9bd15d99e1189b0d9973`, `89f67a6a0bc8183fb5fa3243138a2d38e247774c`]:
  - @band-store/dashboard@2.22.1
  - @band-store/js-sdk@2.22.1
  - @band-store/test-utils@2.22.1
  - @band-store/ui@4.2.8
  - @band-store/cli@2.22.1
  - @band-store/framework@2.22.1
  - @band-store/admin-sdk@2.22.1
  - @band-store/icons@2.22.1

## 2.22.0

### Minor Changes

- #17089 `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: drop Node.js 20 support and require Node.js v22.22.0 or later

### Patch Changes

- #16985 `6adae2ca2e3185cec3af9afbefdf58a378dcf1ca` Thanks [@Dextheking1](https://github.com/Dextheking1)! - fix(draft-order): guard customer lists against null entries

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- Updated dependencies [`72ad0d0ed4f99f43ea4a25e892bea67f3760b426`, `f5a7defac0c0b7bfa7e823d69daa0ff6e76f3819`, `ba64b9f46f7eb6b3378f68096532f897003703b8`, `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a`, `665e494019cabd3f4b89cce3242c31f12b657702`, `a49dd4d78fdfad0bba8708bc3ef78e1aaae79123`, `11e0269bda3769ecd9cff1c1d66bdde4ad4de559`, `c522ce6c070a85ed735fa0e1ea281b7641935a96`, `7906936a5f360acee5f0b8790919e959c7e4a2eb`, `69d91769294aa42034e72a55325ac661e57edb8b`, `bf69d091b2dc3f86655e3067533c953f2138e258`, `14499a2e9309d653c0e4ec6aec3f88079751b4d2`, `d5e01f88a32961fda4550bf54b6014ce4e5a64ba`, `146c46b0ad1146b40595c8ef586c4d5890982603`, `44db0ca6357ab4d4681a8004e869fde339c3117a`, `1db74006ede40300afe64970024688a1a9c2a936`, `d37c79548bad6e9ef2ad00cfa63bdcf4be123ba4`, `a491ca71f438e1f35a496d63d29141e15bc56c93`, `0fdcf25c29f3da6d36eb11855ef10044db7da1f1`, `0e64e7da490fb3c8b8b6255f28cd76a2508be1a3`]:
  - @band-store/dashboard@2.22.0
  - @band-store/cli@2.22.0
  - @band-store/framework@2.22.0
  - @band-store/js-sdk@2.22.0
  - @band-store/test-utils@2.22.0
  - @band-store/admin-sdk@2.22.0
  - @band-store/icons@2.22.0
  - @band-store/ui@4.2.7

## 2.21.2

### Patch Changes

- #16952 `847de248bcd0d70c558364591df44ac645c90245` Thanks [@kelvin511](https://github.com/kelvin511)! - fix(draft-order): fix admin crash when selecting a customer without an email

- Updated dependencies [`c6d976019f3396d53f6d0b5f8c9911b3710ea559`, `61d82cb5e3cb0948044af4e5e33b37151b4b66f3`, `f50015bcc7d67dab84a2c23994b1204925426453`, `a345cc91c7c79c3ef1746576f87e4c96459a3268`, `4e1b6fb5732083a323e499d4403739932eb4c122`]:
  - @band-store/dashboard@2.21.2
  - @band-store/cli@2.21.2
  - @band-store/framework@2.21.2
  - @band-store/test-utils@2.21.2
  - @band-store/admin-sdk@2.21.2
  - @band-store/js-sdk@2.21.2
  - @band-store/icons@2.21.2
  - @band-store/ui@4.2.6

## 2.21.1

### Patch Changes

- Updated dependencies [`011fa44f688e79f1c3fc4827427257f7fef1b797`, `4e1b75a165ed1247d859de1c4a2d28ba04556b9f`, `7c99bdb0ae07d1a88a40800002bed109ac8fff1d`, `5af555bd8c028db2fa4dbaccb64c4c453997be8d`, `c000d377f1a90d14bcda41500b1ed5bc2734902e`, `83592f11c72fde11c2d23d9b160bc5a9f010ea26`, `7a0cb956645aef3ed13a20c18fc3faf8961ca535`, `854a42c10f14735785fccf74b2f0b53b3b46204f`]:
  - @band-store/dashboard@2.21.1
  - @band-store/framework@2.21.1
  - @band-store/test-utils@2.21.1
  - @band-store/js-sdk@2.21.1
  - @band-store/cli@2.21.1
  - @band-store/admin-sdk@2.21.1
  - @band-store/icons@2.21.1
  - @band-store/ui@4.2.5

## 2.21.0

### Patch Changes

- Updated dependencies [`c511dbb072270b01cddc52a0b77040701ffe34ff`, `b4081fe878bf8578cd7df672e52b83d97a00984a`, `0ef6fa815681dfd1771ece1edc921ffbfbc2ef4b`, `b16a37bd23e13bee8f4f6a332e30e8f6da1bd704`, `e9d1f84dbfacd35d7787d1af03215a6ae5a176d8`, `3b4a8d55b51b414182166f4ba03389a02e87b0be`, `d7f848706941820a6bf6d95021f012111c9e98fc`, `a4c0a845e8b3a7a5acfaacbb0c093cd539ac713b`, `c8701e77534f7b615c8b86814f8d5789c0104382`, `c0a60497b829113966a0fb40c02de9755b215a4a`, `df8c278d615229436be5b299ebdc76a576695fc3`]:
  - @band-store/dashboard@2.21.0
  - @band-store/framework@2.21.0
  - @band-store/js-sdk@2.21.0
  - @band-store/test-utils@2.21.0
  - @band-store/cli@2.21.0
  - @band-store/admin-sdk@2.21.0
  - @band-store/icons@2.21.0
  - @band-store/ui@4.2.4

## 2.20.1

### Patch Changes

- Updated dependencies [`f373c17dd60cb1e7df1d0c70db31d516d2a0cb4f`]:
  - @band-store/framework@2.20.1
  - @band-store/dashboard@2.20.1
  - @band-store/js-sdk@2.20.1
  - @band-store/cli@2.20.1
  - @band-store/test-utils@2.20.1
  - @band-store/admin-sdk@2.20.1
  - @band-store/icons@2.20.1
  - @band-store/ui@4.2.3

## 2.20.0

### Patch Changes

- #16557 `a1a784b66ac872b1a863ae23180630ebf2bf839a` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,draft-order): show inventory availability in relevant screens

- #16616 `8334cf11071e925c1ea0877f80a18cd86b32cade` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - fix(dashboard): allow to delete pending draft order item change actions

- Updated dependencies [`b33f14a334769e9265b2c7ff1b120db183bc1e07`, `a1a784b66ac872b1a863ae23180630ebf2bf839a`, `1a9fe477d265e8861ca68ef9a445b40d006b28ca`, `e528fc5bd2cbcd9995694953580a20e525eafb9c`, `51c48dcb472c3b232b88337030945b2b651e90f8`, `5796a0c00f35eba2533847f6697fae8d7c282ae7`, `01e23d60538bd97b1bde471ddd3e5196a5b56094`, `a6fff7ec920f3fa15b2f35429e186ebd76d0f1d4`, `847612908fdd1c11a4df09ccc2e8ab44d338bb04`, `9dd56bf579747aa1f191c4990c90e91a168b634e`, `785fd2b8a978201638a4d8d5ae9eea483958c0fb`, `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9`, `7e421e0f0c60abf64bcfeccea93071202ec78d55`, `321efe20e56d1d11b88974d80cd713e928763e80`, `6a2fce501f3bcd459c21a67f586c7a15b905ff0f`, `c5d55adb2375d19b8ae3be750e9aca52cf22e964`, [`2ba41aac170a47c4a6b858531ec9439f2a6cf66e`](undefined), `5e06e544a296b9033f20f71f11c559f81a0e5739`, `3914a322c5257742c977468d9aa5bf088953b511`]:
  - @band-store/dashboard@2.20.0
  - @band-store/test-utils@2.20.0
  - @band-store/framework@2.20.0
  - @band-store/js-sdk@2.20.0
  - @band-store/cli@2.20.0
  - @band-store/admin-sdk@2.20.0
  - @band-store/icons@2.20.0
  - @band-store/ui@4.2.2

## 2.19.0

### Patch Changes

- #16208 `43cdf13c724dc99c08d6f625cfccc3dd28d2bc0c` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(dashboard,draft-order): update @hookform/resolvers and react-hook-form to show validation errors in admin forms

- #16314 `5105fec20908cf7bcd7f5f859674acdd8a38b982` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(plugins): widen the react-router-dom peer range to v6 and v7

  The optional `react-router-dom` peer is now `^6.30.4 || ^7.0.0`, so these plugins install cleanly whether the host project is on react-router 6 or 7.

- Updated dependencies [`be4ccf3f6a5ae40eff1ed55743d3518bdefeb07d`, `7a5ef2d1f79b2e278625b686dba0b9cfe53a9cc9`, [`60346987f74cc606d6864df765e7d4b007def3fe`](undefined), `43cdf13c724dc99c08d6f625cfccc3dd28d2bc0c`, [`b0520082670752ec09b34ea9fac2a1b9422b8cdd`](undefined), `5105fec20908cf7bcd7f5f859674acdd8a38b982`, `e2b2a5c5c2c51dfc0973b024d4cbb5c6c2f49158`, `372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30`, `18e02fb06f5c925c0b3ebc1943407bf58f83e7b7`, [`438271818d8a3d10470fe838a6ac5c994019620c`](undefined), [`fb4a498f3a425b2a13a41de65ac3d88b25dc4793`](undefined), [`f16a505cb0ccfc103ca393847bb819e8f7c6255a`](undefined), `5f4d93c374b0ad0b0a31e75de98c7557e0415677`, `3ff26b6f7f036392ad1a97e67daea6b83c3fee23`, `39fac16bfa77374e3158842f64aeff4031e4f37b`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`]:
  - @band-store/test-utils@2.19.0
  - @band-store/dashboard@2.19.0
  - @band-store/icons@2.19.0
  - @band-store/js-sdk@2.19.0
  - @band-store/framework@2.19.0
  - @band-store/cli@2.19.0
  - @band-store/admin-sdk@2.19.0
  - @band-store/ui@4.2.1

## 2.18.0

### Patch Changes

- Updated dependencies [`b83aeae9b03e52dedbf3cd37be5f838e23875014`, `1621e14330fe64a968510991408ace8fdac84ce9`, `6d1622265c96e2417b64aa69fd867a89522e6b76`, `1359d1bf6237aa058910b805395932cd070d2043`, `e61285a935b0cae42603f8bb9e10569fd0a51169`, `57ef861b0aae5062d591fd2fcd8bbfae5702a699`, `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09`, `a207803c49a9d0c93e6fcb388e58ec7ccfedee32`, `d75e69a5492e1d9915fce3f117668d08c78faefd`, `3af18a52c12a2db2933bdb376ed4308ccb0b6519`, `8ba72c8c53053e5df02c13c971609189dccac31a`, `306c22d4adab81d8041fc38d50addc60064cba37`, `008d4156eeec878d68122d0ed15027211a83dcda`, `d76952b5b0e4b287747a7e08f2cb745510143aae`, `d6b2a87da1dbfd065336c80e41cb7c086dc2a340`, `c2fc62507a54f0ab73367d4369c783bbbdccf022`, `503e4ba59a152c349982974f152caf993c9126fe`, `8f97e3f3710a2bae662415dac7098e1c6e60c3c9`, `2abcad9ad02782044257f038069227665a09362d`, `1ffae136d60f0c4e881fa9a0c80b51838e198205`, `36915a5f02b7ec25bc5aba757c11e92187aa1bb6`, `6ef16b6fdc6f04b900583a5f2714a863011ed19a`, `70c122753875f3cca03ff49b8a0ea9fe2c5e1165`, `daa9214cc6714eb74944a33677c2414e996f3de2`, `d5c6d183e187a24d5cf6d39bca8d79d72a4f1f71`, `d61d8b3e0422344cb7bee091a49ecbe51d7ef50c`, `4f12b2eee5a916153badd07f3a9f44212ced24f1`, `e765a7e6b5e9eafff510218f9884e867e2d6e224`, `c3450525267a77d5b1e18e6f49fe8f6d1cfaf865`, `144c47aba88f6e08fb7c99634c9fec8474721b0a`, `513c01a5a7f587cb52c92677e2379e54bd990361`]:
  - @band-store/dashboard@2.18.0
  - @band-store/framework@2.18.0
  - @band-store/ui@4.2.0
  - @band-store/js-sdk@2.18.0
  - @band-store/cli@2.18.0
  - @band-store/test-utils@2.18.0
  - @band-store/admin-sdk@2.18.0
  - @band-store/icons@2.18.0

## 2.17.2

### Patch Changes

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

- Updated dependencies [`697fde7d4610a44b01a7c21711edacb46e7de856`, `de58ec503bcd82aae3fe576f9a404c36e2525f4c`, `b50a9dbaf3eeb29753fa28afbc1b529c44ec5a51`, `1eb56d1111c10cbd33da578e2c45da8b21cb93d7`, `7686adc8637b41879c4551ca422829ad2d63d6a9`, `9e47b94b5fb9777b06f099d270bcb95df99c3214`, `92559c67035a98f5edb5159ae9da678e19edf709`, `f79afaaecdd5aaa84b31ddcdea14a43692e33eff`]:
  - @band-store/dashboard@2.17.2
  - @band-store/admin-sdk@2.17.2
  - @band-store/cli@2.17.2
  - @band-store/framework@2.17.2
  - @band-store/icons@2.17.2
  - @band-store/js-sdk@2.17.2
  - @band-store/test-utils@2.17.2
  - @band-store/ui@4.1.19

## 2.17.1

### Patch Changes

- Updated dependencies [`975313f62b22055ddaacf7852f33cf7b0f4af5df`]:
  - @band-store/framework@2.17.1
  - @band-store/test-utils@2.17.1
  - @band-store/dashboard@2.17.1
  - @band-store/js-sdk@2.17.1
  - @band-store/cli@2.17.1
  - @band-store/admin-sdk@2.17.1
  - @band-store/icons@2.17.1
  - @band-store/ui@4.1.18

## 2.17.0

### Patch Changes

- Updated dependencies [`68b31157c3f9bbbfb970abdf58f79d4c57d792d5`, `57b8e74d0fea8fb0e9dccd76eb6df06f0380071a`, `c11326f633e667c8bc9d33ad2cf2d84b7a9f8935`, `6eff86709de4dddc359f35fa84a2462fed85b753`, `213455d6c62aa005723c8d438c0cf2797b9c3743`, `b3386a5645343fcd31577899fca031ad9ae1bdd1`, `6eff86709de4dddc359f35fa84a2462fed85b753`, `6eff86709de4dddc359f35fa84a2462fed85b753`, `06358e3a3b4bebf8b2cf5e6f9227a63b84937fb9`, `6eff86709de4dddc359f35fa84a2462fed85b753`, `f266d9808a36a8e28da4d7781b5e46c4b52522ef`]:
  - @band-store/cli@2.17.0
  - @band-store/framework@2.17.0
  - @band-store/dashboard@2.17.0
  - @band-store/js-sdk@2.17.0
  - @band-store/test-utils@2.17.0
  - @band-store/admin-sdk@2.17.0
  - @band-store/icons@2.17.0
  - @band-store/ui@4.1.17

## 2.16.0

### Patch Changes

- #15478 `f2e576f895ae6579dfa4e29b75d8a0a9c9cf9326` Thanks [@leobenzol](https://github.com/leobenzol)! - feat(admin-shared,dashboard,draft-order,loyalty): LayoutComposer, injection zones for plugins

- #15691 `5c20d034de9a0b32189963f20dd3d8e426f0e67b` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(draft-order, dashboard, loyalty-plugin): align react-router-dom version

- Updated dependencies [`f2e576f895ae6579dfa4e29b75d8a0a9c9cf9326`, `8a6664d6d445f875f56078fad21fe12a185b9627`, `96dc7727d6f8c2fe5f8a5f47b1dc4c5914d7cc1b`, `dcfb81436439080f682f739173f9430d0527a36f`, `db6f79def971d2717dc30d833b4dbb923b250e0b`, `088b2ba826736761a19e2d00c1f14f59336d4918`, `735e0aa51ef64274257057a59046776af54203f4`, `699a9a85c795e13f9e787056e0fb65cfea0115dc`, `16894649b020b63ec0c92fe62393ed8c78c331d4`, `a4d7db86412bd5a8302ee43d881a9c9534296c6c`, `0cbecc685b06da08e297a853c098cd158978d417`, `9f932fc9e586ce13fe7926ffcc388a92facca0cc`, `964313ffdd69c82f51b50eb76a5ff3ef1fa75d2d`, `06b05343b4158e7bb96f8f0fbd7e6836a1818e44`, `a4a1dc95a60814fb6b7f8a480c38430dd166987a`, `d815e81a1a4977f66d6aebb5abc742ee8780619c`, `5c20d034de9a0b32189963f20dd3d8e426f0e67b`, `1344c10503f34e392bd03f733820bcd5a12a2766`, `f10e3ab70d2328fcc7202e6539c899cdf1313946`, `20352f4fa2f31e5b491c8b1b244c407392939fbf`, `90af038c95c835dee5168ffd19cda5182d81b904`, `d8ec021f88bfa68a3236ce3e89f634b808228636`, `13c5dd22802593f5fb5c0a97076a966704aa56c9`, `740132b7576d937b82e913c1ccf4cfabe56777d6`, `66610b87efb112e37b78c7c9536d95070b8d6b11`, `a1fd4d648b923cbd68240dba49f1c46ad0e98f39`, `60d63bd2c0e400f06b985d5275b86c72681e4f62`, `fc92079ac843a5304d37d94663edd3a31e42de73`, `af4dc161cf3ca90f68214138212416bc7b54209b`]:
  - @band-store/dashboard@2.16.0
  - @band-store/framework@2.16.0
  - @band-store/cli@2.16.0
  - @band-store/js-sdk@2.16.0
  - @band-store/admin-sdk@2.16.0
  - @band-store/test-utils@2.16.0
  - @band-store/icons@2.16.0
  - @band-store/ui@4.1.16

## 2.15.5

### Patch Changes

- Updated dependencies [`ace1822bccbb21afa533665937460140e36aa995`, `8122633a8b33164a6094f5a39896e356efde1747`, `538f98da78ae2d741f1182e6ef315ba8efac6911`]:
  - @band-store/js-sdk@2.15.5
  - @band-store/framework@2.15.5
  - @band-store/test-utils@2.15.5
  - @band-store/cli@2.15.5
  - @band-store/admin-sdk@2.15.5
  - @band-store/icons@2.15.5
  - @band-store/ui@4.1.15

## 2.15.4

### Patch Changes

- Updated dependencies []:
  - @band-store/test-utils@2.15.4
  - @band-store/admin-sdk@2.15.4
  - @band-store/cli@2.15.4
  - @band-store/framework@2.15.4
  - @band-store/js-sdk@2.15.4
  - @band-store/icons@2.15.4
  - @band-store/ui@4.1.14

## 2.15.3

### Patch Changes

- Updated dependencies [`ac0a8b63d16518eae7c5370171b76bdf2d8dc2c5`, `e0b8251bbd04a400dffa635e990e3e587f9f2986`, `139d5f9d636dba61cdaec8319358b59f2aef3836`, `18a410c48d9d928de6e63d9577782480c3308e6b`]:
  - @band-store/icons@2.15.3
  - @band-store/test-utils@2.15.3
  - @band-store/js-sdk@2.15.3
  - @band-store/ui@4.1.13
  - @band-store/cli@2.15.3
  - @band-store/framework@2.15.3
  - @band-store/admin-sdk@2.15.3

## 2.15.2

### Patch Changes

- Updated dependencies [`2b21d15640ae459386b0acea4c83804c6f502b9d`]:
  - @band-store/framework@2.15.2
  - @band-store/cli@2.15.2
  - @band-store/test-utils@2.15.2
  - @band-store/admin-sdk@2.15.2
  - @band-store/js-sdk@2.15.2
  - @band-store/icons@2.15.2
  - @band-store/ui@4.1.12

## 2.15.1

### Patch Changes

- Updated dependencies []:
  - @band-store/test-utils@2.15.1
  - @band-store/admin-sdk@2.15.1
  - @band-store/cli@2.15.1
  - @band-store/framework@2.15.1
  - @band-store/js-sdk@2.15.1
  - @band-store/icons@2.15.1
  - @band-store/ui@4.1.11

## 2.15.0

### Patch Changes

- Updated dependencies []:
  - @band-store/test-utils@2.15.0
  - @band-store/framework@2.15.0
  - @band-store/cli@2.15.0
  - @band-store/js-sdk@2.15.0
  - @band-store/admin-sdk@2.15.0
  - @band-store/icons@2.15.0
  - @band-store/ui@4.1.10

## 2.14.2

### Patch Changes

- Updated dependencies [`aa407641ce6ddcd2e27352315b0f7b911a2c0acf`, `be0b8817a1e2e48e1c6c579de6598c6f5e9bf4b0`, `7c659ff3d69c43bd7477bcc8a1c0afd092ea1c23`, `243e88510cd7bb4187169ee383519a9be7594854`]:
  - @band-store/js-sdk@2.14.2
  - @band-store/framework@2.14.2
  - @band-store/test-utils@2.14.2
  - @band-store/admin-sdk@2.14.2
  - @band-store/cli@2.14.2
  - @band-store/icons@2.14.2
  - @band-store/ui@4.1.9

## 2.14.1

### Patch Changes

- Updated dependencies []:
  - @band-store/test-utils@2.14.1
  - @band-store/admin-sdk@2.14.1
  - @band-store/cli@2.14.1
  - @band-store/framework@2.14.1
  - @band-store/js-sdk@2.14.1
  - @band-store/icons@2.14.1
  - @band-store/ui@4.1.8

## 2.14.0

### Patch Changes

- Updated dependencies [`8d4724c4a1ea2e3e731d47a941600d41ab45816f`, `6b5b045dcf8963c978767ec5ce7e03b82d59e105`, `0929b8d192833e10b6b91795f1ffc478938c3fb7`, `843dbfe7c8f27b732486c7a8da7b6d63f2fdf967`, `9757a6a8d19b3e819c43ae5a29f35c65fdce9c34`, `eeed5a11f7ab1110038fa02d0f6cb1e3ca18cf3d`]:
  - @band-store/js-sdk@2.14.0
  - @band-store/framework@2.14.0
  - @band-store/admin-sdk@2.14.0
  - @band-store/icons@2.14.0
  - @band-store/cli@2.14.0
  - @band-store/test-utils@2.14.0
  - @band-store/ui@4.1.7

## 2.13.6

### Patch Changes

- Updated dependencies [`7c5e5e37f632716e5c6846c12d0dee7efe1e0b96`, `2b0cd5ff0ce00bf1de1d99632f1bda4073ac035d`]:
  - @band-store/cli@2.13.6
  - @band-store/framework@2.13.6
  - @band-store/js-sdk@2.13.6
  - @band-store/test-utils@2.13.6
  - @band-store/admin-sdk@2.13.6
  - @band-store/icons@2.13.6
  - @band-store/ui@4.1.6

## 2.13.5

### Patch Changes

- Updated dependencies []:
  - @band-store/cli@2.13.5
  - @band-store/framework@2.13.5
  - @band-store/test-utils@2.13.5
  - @band-store/admin-sdk@2.13.5
  - @band-store/js-sdk@2.13.5
  - @band-store/icons@2.13.5
  - @band-store/ui@4.1.5

## 2.13.4

### Patch Changes

- Updated dependencies [`4efa4a6d8f10d1864156b575c7d867048deb6e93`]:
  - @band-store/ui@4.1.4
  - @band-store/test-utils@2.13.4
  - @band-store/admin-sdk@2.13.4
  - @band-store/cli@2.13.4
  - @band-store/framework@2.13.4
  - @band-store/js-sdk@2.13.4
  - @band-store/icons@2.13.4

## 2.13.3

### Patch Changes

- Updated dependencies [`dbaae9630d26a0806751d5614beadef3e0b4bf07`]:
  - @band-store/framework@2.13.3
  - @band-store/test-utils@2.13.3
  - @band-store/js-sdk@2.13.3
  - @band-store/admin-sdk@2.13.3
  - @band-store/cli@2.13.3
  - @band-store/icons@2.13.3
  - @band-store/ui@4.1.3

## 2.13.2

### Patch Changes

- Updated dependencies [`9e6e80cd2c58b373ee5e5cbf026e3fa5a9d8b526`, `7aca778ae56069371f5d26a757d3b2276d524776`, `63e50fd6a4430dbb7737d1223818f8d27bb3d53b`, `77d899e135ed75668ca7d7b01a8ed4f0c1fe0ac8`, `873571a7c9471a28732ac7fad70ff66c28571a0e`, `6e994dcd6559ece5e79cb5375965f69c640d56b1`]:
  - @band-store/cli@2.13.2
  - @band-store/framework@2.13.2
  - @band-store/ui@4.1.2
  - @band-store/icons@2.13.2
  - @band-store/js-sdk@2.13.2
  - @band-store/test-utils@2.13.2
  - @band-store/admin-sdk@2.13.2

## 2.13.1

### Patch Changes

- Updated dependencies []:
  - @band-store/test-utils@2.13.1
  - @band-store/admin-sdk@2.13.1
  - @band-store/cli@2.13.1
  - @band-store/framework@2.13.1
  - @band-store/js-sdk@2.13.1
  - @band-store/icons@2.13.1
  - @band-store/ui@4.1.1

## 2.13.0

### Minor Changes

- `a31e72c31c5235240cead2d04e39e5927688eec7` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor bump

### Patch Changes

- Updated dependencies [`a31e72c31c5235240cead2d04e39e5927688eec7`]:
  - @band-store/admin-sdk@2.13.0
  - @band-store/cli@2.13.0
  - @band-store/framework@2.13.0
  - @band-store/js-sdk@2.13.0
  - @band-store/icons@2.13.0
  - @band-store/ui@4.1.0
  - @band-store/test-utils@2.13.0

## 2.12.6

### Patch Changes

- #14478 `13476988763368b3b333fa5bc3f613e8eb174fdf` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat/enable event configuration in Band Store config
  enables event priority configuration through the Band Store config, allowing users to configure event processing options (like priority) for specific events at the module level.

- #14586 `3751b10337c056c3a61a4726046ebf4c31a3530b` Thanks [@fPolic](https://github.com/fPolic)! - chore: bump RR minor version

- Updated dependencies [`42235825eeacd4554a5fb533feda5840175bee38`, `13476988763368b3b333fa5bc3f613e8eb174fdf`, `a9b5797e2de093e26286808876262b724e26671a`, `8890f284705a4843a57a3800820208f593689a2a`, `7828f5ac791df6cb1af56595b6dcadbc4815d61f`, `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b`]:
  - @band-store/cli@2.12.6
  - @band-store/framework@2.12.6
  - @band-store/js-sdk@2.12.6
  - @band-store/test-utils@2.12.6
  - @band-store/admin-sdk@2.12.6
  - @band-store/icons@2.12.6
  - @band-store/ui@4.0.34

## 2.12.5

### Patch Changes

- Updated dependencies [`233ec261be200fac83002415aa7c0df082339a3f`]:
  - @band-store/framework@2.12.5
  - @band-store/js-sdk@2.12.5
  - @band-store/cli@2.12.5
  - @band-store/test-utils@2.12.5
  - @band-store/admin-sdk@2.12.5
  - @band-store/icons@2.12.5
  - @band-store/ui@4.0.33

## 2.12.4

### Patch Changes

- #14400 `242f1d7d7f96ec27f3d2c9aafa8324f2ee9b28fd` Thanks [@NicolasGorga](https://github.com/NicolasGorga)! - feat(dashboard,draft-order): Remove hardcoded strings and replace with translations in draft orders list page

- Updated dependencies [`ab7b04dbc9acfbad11bfaf66276a78ce57d34357`, `b21a599d118f126e64d2993d46ba60f4a4e94545`, `181d5fa67122e4e5f38b91f6b716d35f2d08a204`, `d54589751c7f929c173c500344ce5689b8a5dc15`, `d347e369ce555064e24f2dc3cd93b9e4e73a006d`]:
  - @band-store/js-sdk@2.12.4
  - @band-store/framework@2.12.4
  - @band-store/cli@2.12.4
  - @band-store/ui@4.0.32
  - @band-store/test-utils@2.12.4
  - @band-store/admin-sdk@2.12.4
  - @band-store/icons@2.12.4

## 2.12.3

### Patch Changes

- Updated dependencies [`665b80adb1f0ca2205307c0cc5294ad1d3b3ea58`, `a43eb11d6565d19e82cf2b06e262ab509214b3d4`, `accb778039a52fae8eefbada77044c527b136114`, `7b4dda5a179c78de5e099231ec407836db4c8dbd`, `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29`, `191e647eec8755f9680033077d164febefa976df`, `c8a7122ba918751b215dc0b19cf9b09b2c011ab8`]:
  - @band-store/js-sdk@2.12.3
  - @band-store/icons@2.12.3
  - @band-store/framework@2.12.3
  - @band-store/test-utils@2.12.3
  - @band-store/cli@2.12.3
  - @band-store/ui@4.0.31
  - @band-store/admin-sdk@2.12.3

## 2.12.2

### Patch Changes

- Updated dependencies [`9f7846ae0babbad39947a1f33d236bff8b5098d0`, `e4877616c38777f583fe0b58bb10d1c7cf41c0b3`, `fe49b567d6d55ae224095c06c710d31d40887653`, `6dc0b8bed84a330c1c24f4f1331f1ed078430a47`, `356283c359e5c30e0d31e6c6fd0fb8e16c025b78`, `5b7e3c0e7649a3a61b0a4fe796f37e5f7fbe9a3a`]:
  - @band-store/framework@2.12.2
  - @band-store/test-utils@2.12.2
  - @band-store/cli@2.12.2
  - @band-store/js-sdk@2.12.2
  - @band-store/admin-sdk@2.12.2
  - @band-store/icons@2.12.2
  - @band-store/ui@4.0.30

## 2.12.1

### Patch Changes

- Updated dependencies []:
  - @band-store/test-utils@2.12.1
  - @band-store/cli@2.12.1
  - @band-store/framework@2.12.1
  - @band-store/admin-sdk@2.12.1
  - @band-store/js-sdk@2.12.1
  - @band-store/icons@2.12.1
  - @band-store/ui@4.0.29

## 2.12.0

### Patch Changes

- #14044 `e75e67f27d2966a16214ac4aa780fe15ef2501c1` Thanks [@juanzgc](https://github.com/juanzgc)! - fix(draft-order): copy functionality for phone numbers in draft orders

- #14013 `c93f77d1b20395db171016b2710a6ddf95da9851` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Allow injection of our JS-SDK's auth type in dashboard

- Updated dependencies [`c2c3ad5ba53f1959422fb2d37297a8de8d714782`, `3852efbcfffbfd10b7f7cae7d1a15de2a5f3afee`, `7e3eb6e41316d7b04d32bc7186ed0c78de1aa539`, `beb91d88a2f224075e4fcf35a0ee9483b3124504`, `213c344804fb1077aaca3e3cefbd1653ae559899`, `00aa2c13bc37223029e40b38f3e2bedd8ed1e816`, `5da51064d7936c6d7a459cfa8b34eada65163e03`, [`9d9d0397a88c398683f75ac3d6f539c1a686d278`](undefined)]:
  - @band-store/framework@2.12.0
  - @band-store/admin-sdk@2.12.0
  - @band-store/cli@2.12.0
  - @band-store/js-sdk@2.12.0
  - @band-store/test-utils@2.12.0
  - @band-store/icons@2.12.0
  - @band-store/ui@4.0.28

## 2.11.3

### Patch Changes

- #13910 `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Dependencies cleanup and improvements

- #13932 `37563987b8fe75c9acfe62957a33e8398977647a` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Fix dependencies vulnerabilities

- Updated dependencies [`28c3ea68f5634792848f146ac6af5b27c848bf21`, `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d`, `afb40d437b3cc4ceb015df70985b2f005f40eaff`, [`e4f8e3d6cc90ba1570e4b0f3f09ac225ce6bc871`](undefined), `37563987b8fe75c9acfe62957a33e8398977647a`, `13d7d15be594ca413785eebe8f86b47c36cb9830`]:
  - @band-store/framework@2.11.3
  - @band-store/admin-sdk@2.11.3
  - @band-store/cli@2.11.3
  - @band-store/icons@2.11.3
  - @band-store/js-sdk@2.11.3
  - @band-store/test-utils@2.11.3
  - @band-store/ui@4.0.27

## 2.11.2

### Patch Changes

- Updated dependencies [`47572816778e21432d0201f4b2642a765c86fdbc`, `85b1f3d43aa8d8e0269a545ef7867733fd0eb8e2`]:
  - @band-store/js-sdk@2.11.2
  - @band-store/framework@2.11.2
  - @band-store/cli@2.11.2
  - @band-store/test-utils@2.11.2
  - @band-store/admin-sdk@2.11.2
  - @band-store/icons@2.11.2
  - @band-store/ui@4.0.26

## 2.11.1

### Patch Changes

- Updated dependencies [`2d1d51a2af71092127c0af79786ece735b47f13f`, `22d23b148e610bd0dd1980620c2ebc85af65be55`]:
  - @band-store/test-utils@2.11.1
  - @band-store/js-sdk@2.11.1
  - @band-store/admin-sdk@2.11.1
  - @band-store/framework@2.11.1
  - @band-store/cli@2.11.1
  - @band-store/icons@2.11.1
  - @band-store/ui@4.0.25

## 2.11.0

### Patch Changes

- #13439 `12a96a7c7015f011f5e29a1d387f835e514ba536` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Move peer deps into a single package and re export from framework

- #13626 `9c7c1d48c7779023172d5e7003674b2d7107b733` Thanks [@adrien2p](https://github.com/adrien2p)! - fix(): Pricing preference context loss

- #13435 `b9d6f73320c36c53235b12fb8397b30a448917f0` Thanks [@adrien2p](https://github.com/adrien2p)! - Feat(): distributed caching

- [`2d45ba7be12bf5edab13934365041d428473fcfd`](undefined) - fix(draft-order): email reset when changing customer

- Updated dependencies [`12a96a7c7015f011f5e29a1d387f835e514ba536`, [`295f6be146dff6650216259bdf3e64165e5e3691`](undefined), `7dc3b0c5ffdf8eb7070ee5cfd8155c6c4de5c0b1`, [`9d8ed70130867466f81834adf13b7b60bdfc0b6a`](undefined), [`70d855bd1be0ab654ff319d3780469e0c8a0fe36`](undefined), `b9d6f73320c36c53235b12fb8397b30a448917f0`, `6a91f79f443ff72cba8ee7612a1e1c681af125ec`, [`1fd439e321d8284ab7218333ab83125af66afb02`](undefined), `76bf364440959b00926719db1c8a0e4a0e418879`, `5e827ec95d0f721e62c0d4e8c603bda7ddc0929c`, `8ece06d8ed6a197ebb370918c49a3ec5c21dd186`, `92d30b28f45b4037cd73c180c8f257070cf49bd4`, `02b6d013822b9665f868c4ea6d1b5cfe58723459`]:
  - @band-store/cli@2.11.0
  - @band-store/framework@2.11.0
  - @band-store/test-utils@2.11.0
  - @band-store/js-sdk@2.11.0
  - @band-store/admin-sdk@2.11.0
  - @band-store/icons@2.11.0
  - @band-store/ui@4.0.24

## 2.10.3

### Patch Changes

- Updated dependencies [`25634b038248ab6501af719faec79b59b496bada`, `1b30b656b3f9592adaf6288021896ea79ca95df0`]:
  - @band-store/framework@2.10.3
  - @band-store/js-sdk@2.10.3
  - @band-store/test-utils@2.10.3
  - @band-store/cli@2.10.3
  - @band-store/admin-sdk@2.10.3
  - @band-store/icons@2.10.3
  - @band-store/ui@4.0.23

## 2.10.2

### Patch Changes

- #13376 `0000ed69982b95f4bff80fd6182347291d25f7b8` Thanks [@fPolic](https://github.com/fPolic)! - fix(draft-order,Band Store,types): draft order promotion UI polish

- #13360 `afe21741c43efb3ae233da82eba0227cbc74a6f8` Thanks [@SteelRazor47](https://github.com/SteelRazor47)! - fix(draft-order): use correct backend URL in sdk creation

- Updated dependencies [`115a1deb49b154dc18c5e406fd8fbd7ad412df97`, `a0693727a04855f07c710207aaeac07699fc8ee9`, `b4c0f131b70ba950339c1ca4d81b5ce062a588a3`, `a4b72f9a21fd1d278c622fcd45d24bb9bfb1e0a8`]:
  - @band-store/cli@2.10.2
  - @band-store/test-utils@2.10.2
  - @band-store/framework@2.10.2
  - @band-store/js-sdk@2.10.2
  - @band-store/admin-sdk@2.10.2
  - @band-store/icons@2.10.2
  - @band-store/ui@4.0.22

## 2.10.1

### Patch Changes

- Updated dependencies []:
  - @band-store/test-utils@2.10.1
  - @band-store/admin-sdk@2.10.1
  - @band-store/cli@2.10.1
  - @band-store/framework@2.10.1
  - @band-store/js-sdk@2.10.1
  - @band-store/icons@2.10.1
  - @band-store/ui@4.0.21

## 2.10.0

### Patch Changes

- #13314 `cbaa40374480a6254d9e568c3003517308be0a44` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Enable draft order plugin by default

- #13291 `a0fca165701a85f0f2b71efa590ee42f0cc2fd69` Thanks [@olivermrbl](https://github.com/olivermrbl)! - feat: Add Draft Order plugin

- Updated dependencies [`486621383a79e83c831933c1a0ffdae58a695cb0`, `e413cfefc2e0579ba7c5299dc4f4270310e39c2c`, `e2213448ac9eb93318570fde2807a3036108d44b`, `4b3c43fe92d99a98b3d7b9ee6705114de01cbc5d`, `492e0189573ffad4977a3559d71f39bf94d8b45d`, `5b7a0412463ebab1dbc86c29024c1fd326ac47fc`]:
  - @band-store/js-sdk@2.10.0
  - @band-store/framework@2.10.0
  - @band-store/test-utils@2.10.0
  - @band-store/cli@2.10.0
  - @band-store/ui@4.0.20
  - @band-store/admin-sdk@2.10.0
  - @band-store/icons@2.10.0
