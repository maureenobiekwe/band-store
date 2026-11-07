# @band-store/oas-cli

## 2.22.4

### Patch Changes

- #17647 `199c263` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: upgrade TypeScript to 6.0.3

- Updated dependencies [`7167fa2`]:
  - @band-store/band-store@2.22.4
  - @band-store/utils@2.22.4

## 2.22.3

### Patch Changes

- Updated dependencies [`f0697e1`, `4df78b3`, `9692b99`, `2e0d8ae`, `12a5580`, `39fb481`, `385c4ff`, `a6a4254`, `a6a4254`, `4df78b3`, `536d630`, `2e3b55d`, `954edc7`]:
  - @band-store/utils@2.22.3
  - @band-store/band-store@2.22.3

## 2.22.2

### Patch Changes

- #17567 `52caddd` Thanks [@shahednasser](https://github.com/shahednasser)! - chore(deps): update development and test tooling (cross-env 10.1.0, esbuild 0.28.2, tsup 9.0.0, expect-type 1.4.0, @faker-js/faker 10.6.0, jsdom 30.1.3, @types/jsonwebtoken 9.0.10, msw 3.0.3, rimraf 6.1.3, Testing Library, turbo 2.11.10, @types/node 22, boxen 9.0.0, chalk 6.0.1, ci-info 4.4.0, commander 15.0.0, configstore 8.0.0, dotenv 18.0.9, execa 10.2.1, get-port 7.2.0, inquirer 14.2.4, @inquirer/checkbox 5.2.7, @inquirer/confirm 6.3.4, @inquirer/input 5.1.8, is-docker 4.0.0, meant 2.0.1, open 11.0.4, openapi3-ts 4.6.2, ora 9.4.1, @readme/openapi-parser 10.0.0, @redocly/cli 2.71.0, stack-trace 1.0.0, swagger-inline 8.1.0, yargs 18.2.0) and remove unused development dependencies; drop hosted-git-info from @band-store/cli; fix the band-store-oas-cli circular patch recommendation crashing on references nested in inline schemas; `band-store-oas docs --preview` now serves a static Redoc 3 build since Redocly removed `preview-docs`; replace chalk with Node's built-in `util.styleText` in CommonJS packages; replace uuid with Node's built-in `crypto.randomUUID`; replace get-port with a built-in free-port helper in @band-store/test-utils

- Updated dependencies [`d5e0ddf`, `9d55082`, `7e30ecb`, `26e5807`, `8e7ed52`, `9d55082`, `7b34df3`, `2f0b2e9`, `52caddd`, `c61fea6`, `029fb31`]:
  - @band-store/band-store@2.22.2
  - @band-store/utils@2.22.2

## 2.22.1

### Patch Changes

- Updated dependencies [`3a3207347379b065142895fb0740442fea5f4033`, `ea2d48190febf36389aa66242247c180f9f48212`, `52f4c751d2277ab704c1a184c7971a6684e11a74`, `d731a694cdb83c158fb78b5d85ecba8909150945`, `ccee953690a41e14e7520e7e2d97272f25d1ff69`, `c959d5e3e7d4b482d0784eef67ef8ef766442d5e`, `3a4fa0cc36a82dba9481e87c20e423cb65c2ee91`, `7c3b0339379efeda7863f48b9f60e3391cece091`]:
  - @band-store/utils@2.22.1
  - @band-store/band-store@2.22.1

## 2.22.0

### Patch Changes

- #17382 `1db74006ede40300afe64970024688a1a9c2a936` Thanks [@shahednasser](https://github.com/shahednasser)! - chore: ship AGENTS.md in published packages and add agent discovery fields to package.json

- Updated dependencies [`f104453af2c5b235dfdbdaa271c9f8a18195de69`, `9aa921a62139888fed08aee7db1480cff0a3ee40`, `d249d29ddef76d0bde0b68899b9fe5f9faa1ef6a`, `673d03edafd30beef18286bbef8a737ff332d541`, `06bc7ec543e823c92321d582e1faa7f800985fb9`, `14499a2e9309d653c0e4ec6aec3f88079751b4d2`, `dab83ec94a8d60446e15eb982617b7c1cc7589a2`, `e6510b1f51170834f136e927c3d30e463da32750`, `fdac7de4c3268ccf0f86c47c140662d84c141832`, `780a69aad3ea20beadf82e9c5351a6633de45b64`, `906433ac6b1d5ec3cc23f88c8297d29fa87427fd`, `44db0ca6357ab4d4681a8004e869fde339c3117a`, `1db74006ede40300afe64970024688a1a9c2a936`, `a491ca71f438e1f35a496d63d29141e15bc56c93`, `3755f0f08c02548fb97a7b3f5c3403c2f1919ab6`]:
  - @band-store/utils@2.22.0
  - @band-store/band-store@2.22.0

## 2.21.2

### Patch Changes

- Updated dependencies [`1ba69082ceb941d47cfe390212f400e39a7166dd`, `2aaf53962055fce8e302a76dd416e4eb6ead5929`, `41d8204e67dc02f600b74b2002f74860ee764fb5`, `989880a6c51f3659453473b2a5b068e83ce4fc78`]:
  - @band-store/utils@2.21.2
  - @band-store/band-store@2.21.2

## 2.21.1

### Patch Changes

- #16841 `da9be14fbb59801707650b865db0051fe9898dd3` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(band-store-oas-cli): archive the previous release's OAS instead of the newly generated one

- Updated dependencies [`1c1607cced6c1e552e9e800cf571a2235098d0fd`, `3538aab7bc5fcff61591a83bb98e6643823cb947`, `bb4c7cbafe45212f3df408a2a09d73253c3d0b40`, `893d96850320f8f00c623c66f46e9fcde5ab1cdf`, `c000d377f1a90d14bcda41500b1ed5bc2734902e`, `75f3d03b84b1404cc05b9f5f15c6be4a2c2f1d18`, `7a0cb956645aef3ed13a20c18fc3faf8961ca535`, `854a42c10f14735785fccf74b2f0b53b3b46204f`]:
  - @band-store/utils@2.21.1
  - @band-store/band-store@2.21.1

## 2.21.0

### Patch Changes

- Updated dependencies [`c511dbb072270b01cddc52a0b77040701ffe34ff`, `cbd48e2e0169ef9c016fb25703ae08d70827ff34`, `0ef6fa815681dfd1771ece1edc921ffbfbc2ef4b`, `c07aa54827922badb6348ed942f73d8d7ebc1d62`, `ebc8aeea3880dd2531c2536b7e2c762ff7ca2c17`, `e9d1f84dbfacd35d7787d1af03215a6ae5a176d8`, `b650b6c9a486f50ac437614ba36c7f42a203a458`, `bda24b9725ac697ec5e8f706b503013e20babf12`, `df8c278d615229436be5b299ebdc76a576695fc3`]:
  - @band-store/band-store@2.21.0
  - @band-store/utils@2.21.0

## 2.20.1

### Patch Changes

- Updated dependencies [`75c26e85f3bebc0c921064e9aa37987a76cc24ae`]:
  - @band-store/utils@2.20.1
  - @band-store/band-store@2.20.1

## 2.20.0

### Patch Changes

- [`3fa3428c1e03193b716596b2749e6cd630f6a9c1`](undefined) - feat(band-store-oas-cli): set the generated OAS `info.version` to the installed Band Store version

- Updated dependencies [`4857d15bdcaf5a0648e7adc5b0b40312e23b5c02`, `884e8a810d75be52a255d58bfcf01581e738d7d8`, `4857d15bdcaf5a0648e7adc5b0b40312e23b5c02`, `51c48dcb472c3b232b88337030945b2b651e90f8`, `4528357cfe3c3bcf76a20b2ac2fe3637fb649a9d`, `785fd2b8a978201638a4d8d5ae9eea483958c0fb`, `693310310610cf439fabb73230187028f2755696`, `706ce874672c9cd1d8fc0c5429fc0dd24e6910a9`, [`b9f3d12440a7f02ec3b68443934195193e4ecba8`](undefined), `578a5416ad7d789966d68f1525bc9d55d3a53020`, [`7f5bc532f92cd2cacea4c4750f64bc5b337f6f36`](undefined), `c1e5a8f63988698df7f92b8f1e75f63ab8fdee64`, `f7317903600e5b64f06c21c29a73e0e569d2fe3a`, `f3b3bd838ed53b6b2e1adead27d6b1006ea6e6e4`, `2a5dd813a7e1d5094cb81f688e2e9e7cc8fd3543`, `7479b07071e51f4fc6a7ddafe2c778e85c6eb61d`, `6a2fce501f3bcd459c21a67f586c7a15b905ff0f`, `c5d55adb2375d19b8ae3be750e9aca52cf22e964`, `5e06e544a296b9033f20f71f11c559f81a0e5739`, `e01b039f256cb8224dd70a99662a49d0e8cf65d1`]:
  - @band-store/band-store@2.20.0
  - @band-store/utils@2.20.0

## 2.19.0

### Patch Changes

- Updated dependencies [`0e1ccf49654caefa8305fe91a4c9abd573ca1143`, `b31b64270e19a785ee1d396766a0e0c0a37f8354`, `be4ccf3f6a5ae40eff1ed55743d3518bdefeb07d`, `c13aaa96b3968b7f021131529f630b1de7bd6970`, `e2b2a5c5c2c51dfc0973b024d4cbb5c6c2f49158`, `5641bab6ea2d6f0eb7cb9188486656d555ce4d60`, `372a1ab8fa4c8415f1eda294e3c4c5d9dbee4a30`, `18e02fb06f5c925c0b3ebc1943407bf58f83e7b7`, `5f4d93c374b0ad0b0a31e75de98c7557e0415677`, `3ff26b6f7f036392ad1a97e67daea6b83c3fee23`, `1fb31df2728659578b2aab697322b80b7501b66b`, `5c54d68fd0f4020291deb3746eb21dccf498ca45`, `5105fec20908cf7bcd7f5f859674acdd8a38b982`, `9fa4bd9eb941a266c560b35683e8230af33a3352`]:
  - @band-store/band-store@2.19.0
  - @band-store/utils@2.19.0

## 2.18.0

### Patch Changes

- Updated dependencies [`b83aeae9b03e52dedbf3cd37be5f838e23875014`, `1621e14330fe64a968510991408ace8fdac84ce9`, `6d1622265c96e2417b64aa69fd867a89522e6b76`, `04daac9a7639435a89446578b9012ad0a673ac6b`, `45646168b9769a306c3783fa605a7109f9df4ee9`, `b18d4de91c2c229ba7a03a9d541e1b8de71f52a9`, `dfdcdd7467ede40e1bb80ce866bfe2c256b8ff86`, `3bf2b51b7e140c3a7f45ad9c9a8a6bd4f470ff09`, `a48e78b953943efd11204f48890608020f7949e0`, `af4ab2f5f7721f8b99c80158c78fba3b5c4db64d`, `f85473ca88249bed7bfed81b01326a7abc46ac12`, `3af18a52c12a2db2933bdb376ed4308ccb0b6519`, `0e7973e2fc3c45da39136cf3f66c90358571ffc5`, `d6b2a87da1dbfd065336c80e41cb7c086dc2a340`, `c2fc62507a54f0ab73367d4369c783bbbdccf022`, `142ad068e7d892a24a6e2cf8c20e143409d27bde`, `7d7edad6fdf47ae36c06cd5f5b71232c9d51c70b`, `7c0f94c207796bc443fd36d3999f1533bba255be`, `3382c8189bfc9f44e86123496ef3665e92ac91c9`, `d6b2a87da1dbfd065336c80e41cb7c086dc2a340`, `935a14c0098580a2b6ef8af11321e931c8ac80da`, `04b19ba7b861447c5f2a944a47f5533ee64e0acf`, `e78ef6ce51a00e6b303b654c5046cd1e60c8dc68`, `99f2ea9c85a64a08c56196ba963db2c8dd0b7923`, `dd5b3ee61ed5e4a8965c39eb34e2141908c664ce`, `9cd0501b26c401431a11e0d7f4ae6719100b9296`, `e329681099bb3d602a8c1f8ec3c0472e1716f45f`, `70c122753875f3cca03ff49b8a0ea9fe2c5e1165`, `d5c6d183e187a24d5cf6d39bca8d79d72a4f1f71`, `ffe9f4c4a98f6ee6a0b26d695f0ffc612cc70e89`, `a48e78b953943efd11204f48890608020f7949e0`]:
  - @band-store/utils@2.18.0
  - @band-store/band-store@2.18.0

## 2.17.2

### Patch Changes

- #15683 `de58ec503bcd82aae3fe576f9a404c36e2525f4c` Thanks [@Floofy6](https://github.com/Floofy6)! - chore: add package bugs metadata

- Updated dependencies [`8f2c71222afb2bcd1268438fc5fe9da6a63d7af2`, `de58ec503bcd82aae3fe576f9a404c36e2525f4c`, `b50a9dbaf3eeb29753fa28afbc1b529c44ec5a51`, `7686adc8637b41879c4551ca422829ad2d63d6a9`]:
  - @band-store/utils@2.17.2
  - @band-store/band-store@2.17.2

## 2.17.1

### Patch Changes

- Updated dependencies [`4f5e1cc97f4511f43cf4790af412781dafb2ba86`]:
  - @band-store/utils@2.17.1
  - @band-store/band-store@2.17.1

## 2.17.0

### Patch Changes

- Updated dependencies [`f2d563a56b5f70834e113998ad36bcab30824cf8`, `6eff86709de4dddc359f35fa84a2462fed85b753`, `6eff86709de4dddc359f35fa84a2462fed85b753`, `6eff86709de4dddc359f35fa84a2462fed85b753`]:
  - @band-store/band-store@2.17.0
  - @band-store/utils@2.17.0

## 2.16.0

### Patch Changes

- Updated dependencies [`2b7e6782c61af8b38ec9789736f3c708576b2620`, `8a6664d6d445f875f56078fad21fe12a185b9627`, `7cea59f0c674a49380acb3638cbf86c590461b23`, [`34450089041ee90ebbeca40ad7977e945a53a7b7`](undefined), `46271f2c4f9b4d107a43b588b1082a3e572fbe76`, `735e0aa51ef64274257057a59046776af54203f4`, `68f7a0e792a90c2edc04f27454178b75fd3b05f4`, [`dc3e213a3be9d5ae8637863461eab0404bbc0e16`](undefined), [`9f5194267fc5abdece31531af3822b0d05ed1fcc`](undefined), [`8b3b9f7dc97731688e4a5f1c0bb2714e00483bc6`](undefined), `5cd86b7b0899bb3bace07da3299cc70826afbd64`, [`801dbdb2ae70152aaa5917590885bd36bd44efc4`](undefined), `beb1b5e6bcbfeda02659cbaa0e04d5dbc1ba64cd`, `06b05343b4158e7bb96f8f0fbd7e6836a1818e44`, [`1c5ce279aaf792789be371fae70ca304f710cb73`](undefined), [`18474de124868370298addf195e5229ca6792f81`](undefined), [`30f6d407cfaca510939ad161fbbe74feebb97883`](undefined), `1344c10503f34e392bd03f733820bcd5a12a2766`, [`a46961ed421dc69fe991891d02b0f1c66f6180ab`](undefined), [`14af163eae35be9a204f37c5a87d0b2b59b14054`](undefined), `740132b7576d937b82e913c1ccf4cfabe56777d6`, `66610b87efb112e37b78c7c9536d95070b8d6b11`, [`8a27881086307b14bfd1f74f13e2b9db51cc0c03`](undefined), `3f3b339ea732670de449ee6ace4635523ff44ab0`, `a1fd4d648b923cbd68240dba49f1c46ad0e98f39`, `60d63bd2c0e400f06b985d5275b86c72681e4f62`, [`f58de022857e00d12fa60f55fb80fcc7eff357d8`](undefined), `af4dc161cf3ca90f68214138212416bc7b54209b`, [`762195f2329745e9ead1653ea8cdf54120530c96`](undefined)]:
  - @band-store/band-store@2.16.0
  - @band-store/utils@2.16.0

## 2.15.5

### Patch Changes

- Updated dependencies [`ace1822bccbb21afa533665937460140e36aa995`, `c8e37903177c2551ec27ba5f881804e351e819c4`, `8122633a8b33164a6094f5a39896e356efde1747`, `c7258f2ca2da8c09df430d81121ea8eae7f75cd9`, `538f98da78ae2d741f1182e6ef315ba8efac6911`]:
  - @band-store/band-store@2.15.5
  - @band-store/utils@2.15.5

## 2.15.4

### Patch Changes

- Updated dependencies [`94a3ee29d2a2ec441791d671e42deb24108df7f3`]:
  - @band-store/band-store@2.15.4
  - @band-store/utils@2.15.4

## 2.15.3

### Patch Changes

- Updated dependencies [`3063ea20314843c23ad8077ce5e2f5c01ce2c54c`, `d0f4df0c6307555737a46f54ab7b99dd81c6c75b`, `5d14db303b5192c3459a5aa5302c292286a54ff6`, `0697de72f2e59e9674e8b6489febf72587e3feef`, `d36790f6ccc1a8d7fa729027f9e9d75ad8c9d418`]:
  - @band-store/utils@2.15.3
  - @band-store/band-store@2.15.3

## 2.15.2

### Patch Changes

- Updated dependencies [`9990b69ab76f1a575c6a68875627d16764cc1564`, `2b21d15640ae459386b0acea4c83804c6f502b9d`, `5e8fc904fe00d8c89b6615cfbbdbde66531d2337`]:
  - @band-store/utils@2.15.2
  - @band-store/band-store@2.15.2

## 2.15.1

### Patch Changes

- Updated dependencies []:
  - @band-store/band-store@2.15.1
  - @band-store/utils@2.15.1

## 2.15.0

### Patch Changes

- Updated dependencies [`b1c4aeea58293e2c2ad0c72d15e9bf45e6168131`, `4a3f9ed2e076713f47d4fb2458dee528b36b864e`, `75b23ffcdf5afeedb5321689cbd844342f218846`, `667f3e213d847e2a44ba486522f9fb7b36c69e9a`]:
  - @band-store/band-store@2.15.0
  - @band-store/utils@2.15.0

## 2.14.2

### Patch Changes

- Updated dependencies [`aa407641ce6ddcd2e27352315b0f7b911a2c0acf`, `d29b9a1d80580d4b5dce926387c465260936e5ec`, `650938944e2b5b6fbe3f044b8ced8d260b6742a0`, `cce180c48ed1378847ab191f39adbcbbc325bfda`, `0303d7f30b7c636037c1df496f39aa04c0556248`, `be0b8817a1e2e48e1c6c579de6598c6f5e9bf4b0`, `243e88510cd7bb4187169ee383519a9be7594854`, `a0e57e419cd3e597526460fdbfed7e3e4842aa9b`]:
  - @band-store/band-store@2.14.2
  - @band-store/utils@2.14.2

## 2.14.1

### Patch Changes

- Updated dependencies [`9b369cb735c46724b2ca08e2edfdd86ea7bfa314`]:
  - @band-store/band-store@2.14.1
  - @band-store/utils@2.14.1

## 2.14.0

### Patch Changes

- [`bbc7a77e2fcaf53d02e222ba6522bcea84388efc`](undefined) - feat(band-store-oas-cli, oas-github-ci): support versioning for outputted oas

- Updated dependencies [`1a28af3d7412466022dc941c425a06c762a43d75`, `15085e1adb9c50743ca07d2da94f23cc09b6852a`, `843dbfe7c8f27b732486c7a8da7b6d63f2fdf967`, `67499a8aa6b3b53cbdecb5be9fcc358b4e466696`, `965adfe2fc15a024270ac384f819479e8b274e10`, `9e145bfb27cb5792f7b8d1331f2b076fb00355d9`, `2ee9b39b6793d1352cc27a974e964049a053c9c0`, `41dc2a8a6fea39a158d93a3b0e1c9793e746ca3c`, `5ef7953ec3bbcdafe452db813e5c5b07a1c1f0ba`, `923a869a7d462c2e0399619ac2b35c16132e079c`, `9e1e7082c3437ee2ae01d6752b624d4b4d905604`, `b94f7ae1f5f66dfca7f73c7ee8d53afdcbf26ee5`, `d9af2f5efba391f612ea9f6183702756c3fa4732`, `32533eb829d904d4c1a89c841f06d9c209460ac7`, `a92ca32b93eaf7f5a8e1fc8b2bbb01763867f6c1`]:
  - @band-store/band-store@2.14.0
  - @band-store/utils@2.14.0

## 2.13.6

### Patch Changes

- Updated dependencies [`5b655f6d7c24323bd84dc1b684938725873a33ac`, `62e0760a2ad032c9f7ef219968d667193bf3c4a1`]:
  - @band-store/band-store@2.13.6
  - @band-store/utils@2.13.6

## 2.13.5

### Patch Changes

- Updated dependencies [`4eee16b932f4b532f81db2739194ed5d2b47f3ea`, `991e61fbda7d6096e2ce1b4f713cf55aee2e9404`]:
  - @band-store/utils@2.13.5
  - @band-store/band-store@2.13.5

## 2.13.4

### Patch Changes

- Updated dependencies [`4b21cc6b8564740818e7f51a42cae86cf86e7331`]:
  - @band-store/band-store@2.13.4
  - @band-store/utils@2.13.4

## 2.13.3

### Patch Changes

- Updated dependencies []:
  - @band-store/band-store@2.13.3
  - @band-store/utils@2.13.3

## 2.13.2

### Patch Changes

- Updated dependencies [`05262c0197bcc3c9cec89a3d95863916dba47af3`, `f37f029799cad7ee0337aeab625df5e272de2363`, `d2ce360875bafc3fc0c367384b9b631e77130726`, `42322f44eaaf997e9ab7af2ca1e8621a08a8ca01`, `d0e6f710c3f8305b58ac39131a125274987cae05`, `074a3ea05f2b86ce72a5e668a7616768e81293dd`, `77d899e135ed75668ca7d7b01a8ed4f0c1fe0ac8`, `1b5e5739b1d553d230b5602092f4c809479cf572`, `dc2b87810254ccabd382ececca0ae771cb9e64be`]:
  - @band-store/band-store@2.13.2
  - @band-store/utils@2.13.2

## 2.13.1

### Patch Changes

- Updated dependencies [`de08ea732b599374a071c016fa8af2e4f3e31075`]:
  - @band-store/band-store@2.13.1
  - @band-store/utils@2.13.1

## 2.13.0

### Minor Changes

- `a31e72c31c5235240cead2d04e39e5927688eec7` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Minor bump

### Patch Changes

- Updated dependencies [`a31e72c31c5235240cead2d04e39e5927688eec7`]:
  - @band-store/utils@2.13.0
  - @band-store/band-store@2.13.0

## 2.12.6

### Patch Changes

- Updated dependencies [`13476988763368b3b333fa5bc3f613e8eb174fdf`, `55d2a704700433c34edd0f7f10dfd042d2f9333a`, `a9b5797e2de093e26286808876262b724e26671a`, `d60ea7268a00f386f803f0f9e6ffeec4bced50bf`, `39b9f84affcdda267bca0ee486825daca2e4a896`, `8890f284705a4843a57a3800820208f593689a2a`, `41e1d5e5066719569d4f639415d3d1fdae1ddc0b`, `cec8b8e428131d4743d6da98cd5fa0974b8ab9e1`, `95e9dfdcaf008b86e2ed3d1ad273b369776bc90e`, `1ca3516a5cbb059ad79fe483cd8e1d6a7ebca23b`]:
  - @band-store/utils@2.12.6
  - @band-store/band-store@2.12.6

## 2.12.5

### Patch Changes

- Updated dependencies [`08c55e703573f3c11532228d2c626f7b7f16228f`, `233ec261be200fac83002415aa7c0df082339a3f`]:
  - @band-store/utils@2.12.5
  - @band-store/band-store@2.12.5

## 2.12.4

### Patch Changes

- Updated dependencies [`0ffd79010953315494c1b2ba1def477b7b1d9e4b`, `6380c1fdf42d023f7a103260ba204efbe37d5c0f`, `9cad05c8df1c3f2591da46b5efa415b4850e0602`, `bf4cc12545edc5bf249edc6ecec115c5f7a2b31f`, `b21a599d118f126e64d2993d46ba60f4a4e94545`, `181d5fa67122e4e5f38b91f6b716d35f2d08a204`, `001923da2bbebb3d42373f0f66e517830d9c0187`, `d347e369ce555064e24f2dc3cd93b9e4e73a006d`, `43305a562cfba914654da056b0a7e03c40849678`, `92d240d7493ed350aed8b8af80c1dfc62b07a88c`]:
  - @band-store/band-store@2.12.4
  - @band-store/utils@2.12.4

## 2.12.3

### Patch Changes

- Updated dependencies [`b3cb904e9bce3bfad649e500a9e1be0c9bff0e1a`, `accb778039a52fae8eefbada77044c527b136114`, `7b4dda5a179c78de5e099231ec407836db4c8dbd`, `8964a03fa1b9e6a4c443bf5b21d65d41a8441d29`, `6815b3d7dbad2931895ba81c6de19208427d9c50`, `e94e1a4676d68950df76a496a30a9acc61e4b799`, `ba6ed8d9dd22be8646d311d9531c65aea1b7986a`, `70929ecac3e5610d90d47a40a517eac3cf3173a4`, `f13c23a4b709e31f9b2d42e98acc6e342c494403`, `d813fc4ff91e98b475a4eae11780ddc00caf66a8`, `0f1566c64456a6f29a7bfb1dda5a7c470a84ace7`]:
  - @band-store/utils@2.12.3
  - @band-store/band-store@2.12.3

## 2.12.2

### Patch Changes

- Updated dependencies [`4dbf46f2cb64240092843ebfdef766ec5b2a7116`, `e4877616c38777f583fe0b58bb10d1c7cf41c0b3`, `a78f68fa46dceb8e201fe60e770bd9ea654390d8`, `fe49b567d6d55ae224095c06c710d31d40887653`, `b517137466726c15d5e31ab0c9f42aa57af90c4e`, `24c469d2173e814a567e18454f5cc5c81f5dcc6a`, `fd3965974dc0b750d377ff621387d34611760957`, `fdc2b722d91f446499123d71386e64d9da9265eb`, `356283c359e5c30e0d31e6c6fd0fb8e16c025b78`, `dd74ce34ba4e273719d1205a2ec6d76f06c7c94e`, `5b7e3c0e7649a3a61b0a4fe796f37e5f7fbe9a3a`, `4de555b546c33c67653a211987aca5f80341e637`]:
  - @band-store/utils@2.12.2
  - @band-store/band-store@2.12.2

## 2.12.1

### Patch Changes

- Updated dependencies [`391d8dc6cd50c79b678059fdeb7774a72e243143`]:
  - @band-store/band-store@2.12.1
  - @band-store/utils@2.12.1

## 2.12.0

### Patch Changes

- Updated dependencies [`9fdc00350a4aa006e4bfc3eddcc499737f18bdf3`, `bbf294fc31ac12d3dcdd1687340e58574fb4cfea`, `6b4f2c1d3282501fce5b9a4f35bbcecf8a18fe93`, `7e3eb6e41316d7b04d32bc7186ed0c78de1aa539`, `78842af1c30de9c7561f10b4129aba4e1f30db27`, `32eaa9dd81a58e9208cce700b0087d14eec8cd5c`, `aae92d5447c067fce9889403da30f3abcdf5be23`, `1cfc88ee5530d1d45dc583412234d86d6fe7a777`, `00aa2c13bc37223029e40b38f3e2bedd8ed1e816`, `536a3f802c92960b1eab48c37db25a8c542fd231`, `5da51064d7936c6d7a459cfa8b34eada65163e03`, `e59cdae3365981339d55ec01224f09995250e67d`, `4bbf0d23674856f2d9fd0a9d137a478bc90b4cdb`, `6746fecd727823b233a90edb1819d08555124464`, [`9d9d0397a88c398683f75ac3d6f539c1a686d278`](undefined)]:
  - @band-store/band-store@2.12.0
  - @band-store/utils@2.12.0

## 2.11.3

### Patch Changes

- #13910 `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Dependencies cleanup and improvements

- #13940 `afb40d437b3cc4ceb015df70985b2f005f40eaff` Thanks [@adrien2p](https://github.com/adrien2p)! - chore(): Cleanup and organize deps

- Updated dependencies [`42b270ed2df09474f528d8d23816e0affcf4bd25`, `018871f8cd6121ea6af40644f784256891b11849`, `224ab39a81e8d3cf3d6fa3ff5eee82541f64728d`, `afb40d437b3cc4ceb015df70985b2f005f40eaff`, `e66f7cf59e516f12e5446e191e9fdd1aede9c8ab`, `990691e78a77a46bc581353de47945dd8f5d6928`, `37563987b8fe75c9acfe62957a33e8398977647a`, `13d7d15be594ca413785eebe8f86b47c36cb9830`]:
  - @band-store/band-store@2.11.3
  - @band-store/utils@2.11.3

## 2.11.2

### Patch Changes

- Updated dependencies [`cc2614ded7f83cdbe7e7f7f809d05f5ab6059fe4`, `25a20ca95f702dfb8a34fe9e4f3c565a47c2655e`, `ec4443287601f5fe1544b305873f3aa151ed1bd7`, `47572816778e21432d0201f4b2642a765c86fdbc`, `66bbe39a8ee812ae88b7f06f7d911b8254b1c87e`, `c9701c70da33bb81aca1560ac5b96ea53fb61060`, `6d7ba778f5ace76350ac6f249b855b21fb43a03e`, `85b1f3d43aa8d8e0269a545ef7867733fd0eb8e2`, `1defb3c29bfe018fd5f89b5a9e27fc8a31d72cdd`]:
  - @band-store/utils@2.11.2
  - @band-store/band-store@2.11.2

## 2.11.1

### Patch Changes

- Updated dependencies [`90162ebeacf6e093a06b70ac2e87de9f12674a17`]:
  - @band-store/band-store@2.11.1
  - @band-store/utils@2.11.1

## 2.11.0

### Patch Changes

- Updated dependencies [`12a96a7c7015f011f5e29a1d387f835e514ba536`, `c61f3150c138de016c6886e79d79984bc267273c`, `45f180a2b558edcf69603f3d8da983e92c4e212d`, `7dc3b0c5ffdf8eb7070ee5cfd8155c6c4de5c0b1`, `76aa4a48b3cbec519ab16c96cc87ee3288de28de`, [`5c77b10fa64d28c315e5196da1c9608c1c0a2ab7`](undefined), [`9d8ed70130867466f81834adf13b7b60bdfc0b6a`](undefined), [`730d73306d699634121a793f2b4049fd3e09bc47`](undefined), [`57030fa43e084ed8300e6b74399c5402b1587e80`](undefined), `b9d6f73320c36c53235b12fb8397b30a448917f0`, `51859c38a728c5f05cf30f09f4c6a55657895de7`, `41651721450c99e5f38cfbb87a6a47ab067ece86`, `a61d1825eaef4bece20704fe6ae21d9da841b2f2`, [`71014bafa6942709d4b763cbc82dc7f6d4860ba6`](undefined), `8ece06d8ed6a197ebb370918c49a3ec5c21dd186`, `fc67fd0b36f53f0c0897df54ecea02061e65e816`, `bb08edd41fd954306b0feacf6a6a69b87d9287dd`, `459fbcdf998a506d80abb758bc7648126c6c96f8`, [`137b237c8498fe4c195a3b8344e16b61193b9329`](undefined), `c54c5ed6de2c9686f89aeef86c5c607c4b5f1cf3`, [`907fbc89a2566f516c65a4eefdfeeb4f9dcb3579`](undefined), `458dd04bbf70159ec42254e91675c7a1f1d344d8`, [`3960c80e9f55bdf41f9f257e12ed72c713577598`](undefined), `92d30b28f45b4037cd73c180c8f257070cf49bd4`, [`9d3c71fefd12d09ecd3be1aeff7744e809872481`](undefined)]:
  - @band-store/utils@2.11.0
  - @band-store/band-store@2.11.0

## 2.10.3

### Patch Changes

- Updated dependencies [`25634b038248ab6501af719faec79b59b496bada`, `9563ee446f2b3a2e0cd4a4a33959ed55be5f268a`, `90cc3f42d98bce04d45a72165399193e7933a54f`, `8565dcfc46c9ccc923a44582bb215c615ac2792f`]:
  - @band-store/band-store@2.10.3
  - @band-store/utils@2.10.3

## 2.10.2

### Patch Changes

- Updated dependencies [`e8822f3e693bde33fdfd8b0d6140b4e59b40af98`, `0000ed69982b95f4bff80fd6182347291d25f7b8`, `b4c0f131b70ba950339c1ca4d81b5ce062a588a3`, `faae150a589bb29d08719ebb1d2617234e1f5e3a`, `d622c61ce2008f3efdfbbaa4154c4329d7978d2b`, `637d4cf7ef792622830d49446283d3c578c4f09c`, `55a35e47218c65190e36a1a6088031890edc1b14`, `4fded2602bfbb63c8d648d2af717c2eb3bbb6f49`, `b85a46e85bb741b942e7fa23bef48f447d2b7c5a`, `8e5c22a8e8c54daa313b4685e453e49699d75e9a`, `8e119988950479345c90e88b541198eba53496a3`, `2f6edf367abb9d3e71f398c3b98a749b73517ea6`, `29dca1ca481e34cc17678b7b4f0e854d3a404acd`, `0700a2448c54438482cd3b422e66c591bc5c1df8`, `e0943f3c9012a4a7b63c455bc23ade6ada26b33e`, `823a5c75ff97cf0acbd4ddf00f43ab3b49f0f210`, `1b681a79da02aec3f872baa2213a4b2423d73e97`]:
  - @band-store/utils@2.10.2
  - @band-store/band-store@2.10.2

## 2.10.1

### Patch Changes

- Updated dependencies []:
  - @band-store/band-store@2.10.1
  - @band-store/utils@2.10.1

## 2.10.0

### Patch Changes

- Updated dependencies [`e413cfefc2e0579ba7c5299dc4f4270310e39c2c`, `3cc512ef39b6d64b1fe04c1bcdb2e23fa03526f6`, `cbaa40374480a6254d9e568c3003517308be0a44`, `67d3660abf3ceeac3f04006fe5e92d2fa7c0ccad`, `9412669e654c994e2dbee9cf61c18004d79f6475`, `cbfe646ce14d8436adbaa72cda95d38e6cdcd908`, `71818e43cb6c90d26d5173d01c476d2480355110`, `fc4925327334c540c0125a91e81794c3c1f340e7`, `e2213448ac9eb93318570fde2807a3036108d44b`, `7f5b9fc5fa47e8e73c7afe54aa1bde4dd035086e`, `34c3c14e0a1491ab80473605018b97981544167d`, `492e0189573ffad4977a3559d71f39bf94d8b45d`, `6602e893b88f1c8f0c8165101dd609baaf60d925`, `fd4e79142880f1b2da63a38adef8c647da9c48e4`]:
  - @band-store/utils@2.10.0
  - @band-store/band-store@2.10.0

## 2.9.0

### Patch Changes

- Updated dependencies [`a52708769da675e2ade6cb6fe28e1cd9741c562d`, `51d4751d9502c0996ee5640f29d0253da980082a`, `1bdf602f1c1da181e2839858d2f7e8aea503573a`, `9766570827ebf50d49d8daf956deecce6666a8cc`]:
  - @band-store/utils@2.9.0
  - @band-store/band-store@2.9.0

## 2.8.8

### Patch Changes

- Updated dependencies [`7669dbb03e2f65fa76cff1c5b90a0777e475cb47`]:
  - @band-store/utils@2.8.8
  - @band-store/band-store@2.8.8

## 2.8.7

### Patch Changes

- Updated dependencies [`42be9a88d61a11db7aebde2d6f4d96d43f54ea79`]:
  - @band-store/band-store@2.8.7
  - @band-store/utils@2.8.7

## 2.8.6

### Patch Changes

- Updated dependencies [`95d282e8ef8f2185737d493dea8b6f1677684543`]:
  - @band-store/utils@2.8.6
  - @band-store/band-store@2.8.6

## 2.8.5

### Patch Changes

- Updated dependencies [`ab634a14ba709f1b1d12eb4cd5c7f3db6bfe6470`, `6ca755ede7bfe3211464447412ca0d97e1207742`, `ba1e6595b74ae69f4ee066d545f8def8aff77dd3`, `cbf3644eb7c8a24eaed879647b58c9ece3373c0e`, `d517dbd66a47817d1270c278b03add9a5c4244cb`, `2621f00bb035a6b909f9498a2bc98fdba8570ba9`, `316a325b63e92003df25452faf88e577e9133064`, `94b62c67249d13ec6342411cf7efdedfd0ac47e1`]:
  - @band-store/utils@2.8.5
  - @band-store/band-store@2.8.5

## 2.8.4

### Patch Changes

- Updated dependencies [`791276e80f5745c8885352b7979c0faa979110f4`, `3d65807d9924c057ccce6ccaf1c6e0eee8e7c245`, `f6f34cc0e419a0c4be0971f13eb59b2a1e3aa31d`, `490bd7647fca30951d14c7c78c1b809379ebd870`, `cf0297f74af1b043363ffbd5a23ca0933097a69d`]:
  - @band-store/utils@2.8.4
  - @band-store/band-store@2.8.4

## 2.8.3

### Patch Changes

- Updated dependencies [`d9fdabe96d05108355c01081ea15d39467e40268`, `fca5ad77b41856867ec68b1e46d04f1bb71cbc76`, `59bbff62d81861282d55a32d6c0c45285203c4e0`, `32be40a2c09be2f793b5d348a3dd62e9312f46c9`, `85d2b3c992cf361a9a18a14659484c57f4923197`, `c5a6573e26b403b86f53b88c307ea311a1bd9230`]:
  - @band-store/band-store@2.8.3
  - @band-store/utils@2.8.3

## 2.8.2

### Patch Changes

- Updated dependencies [`e149a998862272fff80573a623c4d9010cb0b104`]:
  - @band-store/utils@2.8.2
  - @band-store/band-store@2.8.2

## 2.8.1

### Patch Changes

- Updated dependencies [`4602163b568962f8115b83971d67a6c55c2b8a98`, `142a1f0a5be60d2cc013ecb174bca7b1381c6551`]:
  - @band-store/utils@2.8.1
  - @band-store/band-store@2.8.1

## 2.8.0

### Patch Changes

- Updated dependencies [`469ecef3c52797b812c9cb8a4410f632e8de8b8c`, `aba4cba373aa6499ca7cce77e7515613c38c681d`, `2dd885ebc12303b9b1741a2785560da44d4e4e28`, `a53d645f8aab30135baebac29f9645dd35d47632`, `cb53b8a5290708b395e1cf1f1a75ec6ff518f7b7`, `89859987565b1fc872c7cd1c6d23144b97f454bc`, `9cedeb182dc19d6127b602fc06e4b8850490e2a9`, `32e0194772cd44efa1930f2ee99f147fa2976f1f`, `fff285f8d2f3020a24b83066fa4250130fdcf229`, `b868a4ef4deb7df09d6156a907f4c883cd55a3fd`, `9d4bc81d0f1ac1614ab1ffb95d708f622c836ceb`]:
  - @band-store/band-store@2.8.0
  - @band-store/utils@2.8.0

## 2.7.1

### Patch Changes

- #12254 `71a9a7210cabceec22b6e1a063aba012140835b2` Thanks [@thetutlage](https://github.com/thetutlage)! - fix: oas CLI to convert Windows paths to unix

- Updated dependencies [`01542f69737b48346d924670296c551e4c4b47ec`, `2f6963a5fbea05537680cb1b1f6a2b9822c36325`, `b8902637251e9ed4f8762ef280659bbab6d967de`]:
  - @band-store/band-store@2.7.1
  - @band-store/utils@2.7.1

## 2.7.0

### Patch Changes

- Updated dependencies [`74381addc3d6af42f0292e778948aabb60a6dad9`, `ec56a8bc857a74788df6523af25914da95c4c1d8`, `2a18a75353f872b0cb4c203afc08cfd82f778428`, `72d2cf92075b3e0849251f233517e2972de1b19c`, `c3440e5e3812e3d1c6b82e9d4e41287398451611`, `3dba58785fb2d8e79f1ea89daa9e4ab8810821c8`, `1895d8cc1141b28525acfc21715f6f523b8194a2`, `cae47d9e49e9a17d8395f7b390f6ec0a2f9b8dc2`, `5cf0bf4d93b5fd965680223dd448324c5135426e`, `79cfc1a69ee166fec298aa706b994253a1284520`, `cb6249320e7322e8eabfec8434f1278f8d63e96c`, `375c4a5ab1b2805ef2a3d792327c325fa11740a5`, `2f7eb0ee030966844b45dd00b2259e68b9fb0e83`, `9dd62d93bd9e2acccc2e9f22bc029fd2b0df3234`, `c870a7a1baf7db748a831265f06dd4b7378b262e`]:
  - @band-store/utils@2.7.0
  - @band-store/band-store@2.7.0

## 2.6.1

### Patch Changes

- #11738 `3b470f41427e487c68f89b8ee8155de716ffe861` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Remove ranges on Band Store packages

- Updated dependencies [`62e429178f3abe0a528f7a574eb6a09ac525bf9c`, `90964a404edbb079d7de332a11ab97c4f5643d67`, `cc1309d3709b251683a0cda0ced448f8bf9f514e`, `3b470f41427e487c68f89b8ee8155de716ffe861`, `2a0bd86204c9dd51a012763016f2de822d3c45b6`]:
  - @band-store/band-store@2.6.1
  - @band-store/utils@2.6.1

## 2.6.0

### Patch Changes

- Updated dependencies [`8bb0a25f573c62ca1d1bcd7af184b0d0cf98e125`, `51b0af193c7dde4899a696a515b59373b465d907`, `eeebb35758ea443468dd2355a7ea761dfe24babc`, `d172ad8ebc4677bba73c36465c973f4784dc50ae`, `93cbc6b6695f236fa39b66169de971228888f1b9`, `ca6a15717d05de112ca00ca56d65beb2ab0f2598`, `d254b2ddba3fba4fb60e1076a6bc4e7d425bbd30`, `b42f151be31161a5d7a73132ee6794b990403d76`, `ab96ad3b8213b117b067ae0ab66b94f74b8bd031`, `e23f204b7ca0f195e36fef2ba0bae7a686b8da4f`, `aabbbb7292a59ec029a6165451aa6d949844b2ea`]:
  - @band-store/band-store@2.6.0
  - @band-store/utils@2.6.0

## 2.5.1

### Patch Changes

- Updated dependencies [`a5ff1b92cefe6744bc1abfc164cdcd6515b1a6d4`, `d1cbe4c61ed99bbeccf1be49721e0aa7b74edd71`, `63f0774569643ffe473daef2fcfd8944954d72c0`, `bc02fde2367c257738bbf9b8ac2ad02cbe2a8f55`, `681121bb192145669b500ce3a01ad7d06356a396`, `825b8ad260df1e71843fbd62c7f4b2978617033d`, `d6c03ee5427457237e3c739545a8816cc3a3198e`, `3b4997840e624ef8da1a75744b4bfb5c5a371f7c`, `448dbcb5963c732c9c3b822b81330556bcf883cd`, `0e6ffad30f1bd9e9f18c9040447c63077df09da2`, `32c5015f563b7d60221a472635b44820fe4ef1f6`, `ceb99d073a3cb1d1b63b3c5dffd193c7664d75eb`]:
  - @band-store/band-store@2.5.1
  - @band-store/utils@2.5.1

## 2.5.0

### Patch Changes

- Updated dependencies [`9f1a3b2a4214ef23a22972e6d28c5f43f87da353`, `cb0f065c9dd59fe54a52c337f9b5392723f9db58`, `016e332e9b98f316cded6eb999927fc942ce56c5`, `a33aebd8957f4bab10afd5e50a810cf738879b0d`, `716de2cb3ab5d504ec763fc322dc11b542b7e8ca`, `040b7b274ee602e31f2b0ffa16605d6f38285f3e`, `f4c2cd112ed54757ed35a55297b46b36152829cb`, `c9821171866a5a66ce5b7f0b8a414de48dbcdc7e`, `244cd714b2e8dc742afbefd0d175649f8fc45eed`, `f07af7b93c86673e730dc4e5eba8df2572013f9f`, `3c51709daf07dcdd5563fa08fec2446a42cc8058`]:
  - @band-store/band-store@2.5.0
  - @band-store/utils@2.5.0

## 2.4.0

### Patch Changes

- Updated dependencies [`0deffe7b9b9a1055813249b17057b7bba01b78ac`, `cc73802ab3821d2c667942bd887efb7476205547`, `a76208ed0217e5a3993d48e1884e855966691fd8`, `ecc8efcb049f5c77cb7e38c2b6a273860590a5f4`, `13fe2f6776b22c401d131f184fc3600ef4008383`, `45b47bf8136d05b1b9939b81cd892d4426b569f2`, `da3906efa42ee729c11696e2d3255a60ac3fa958`, `e53b8b0a9708d2eb46258ca417b6ff6abbd5f3d9`]:
  - @band-store/band-store@2.4.0
  - @band-store/utils@2.4.0

## 2.3.1

### Patch Changes

- Updated dependencies []:
  - @band-store/utils@2.3.1
  - @band-store/band-store@2.3.1

## 2.3.0

### Patch Changes

- Updated dependencies [`67782350a9da278457c3280c300ebec65bdc6326`, `b0f581cc7cb9f173666502d9ed2ea2c128b517be`, `4bc3f5b845f832959bed3d5f2bd320b55a8fb50f`, `7be47354e1eb95141f420ef9c74f98b3e2bd8315`, `69e2a6d6951c133295947d00fa1f99547da467d2`, `b7a37598249a60c91ce70c999ff8b0dfa6246e49`, `899b1fba4afeed61c343aa0ff5d171bfe6dc5ca8`, `5eab9e739919594ae7e7e416942ec93d84b699fd`, `c75678d6d41d3b88d07681ad7e24472d6cbde672`, `0cfaab5bb16daf403966e9d0a5931e2c64d44138`, `0924164e86ecc256e2fa56a4e8c504abf7663131`, `1ba2fadf22a30de9f94aee4f195163ef5e9e84d2`, `114b2133aa7a82b7a152022e95d29e1a489ad99e`, `c1930bd6568043d145e34d8360015e7207e18e4a`, `28febfc6438351fddb5b214b86f96aff89db688e`, `bc22b81cdf9591912744f448c74d45bcb0f11e0c`, `428fce53134bd0b224f636a9a15d369d1f03cde8`]:
  - @band-store/utils@2.3.0
  - @band-store/band-store@2.3.0

## 2.2.0

### Patch Changes

- Updated dependencies [`ecc09fd77db01fcb7e8eb8e60cd19e16e2b5ea81`, `13ddf27c68fc2831b3661940bc5f27bab23ce8c0`, `bbf790ea44d0ce0a128a07e66224735f5a2dccf0`, `5e9d86d75d1f2745c24a4bcd4a5c0df066578ef5`, `83925f5c7a2de5ffd7db21f620d6864bcf59fd04`, `988931a5513fadb12f24d1fda9ed7af32b3128af`, `e40878d9f387314c93e7ae1df36c3289240193c7`, `47594192b79fbc798cfaf21821b60673745d1374`]:
  - @band-store/band-store@2.2.0
  - @band-store/utils@2.2.0

## 2.1.3

### Patch Changes

- Updated dependencies [`100da64242838739816351ed259461f2d7c258e3`, `c9b8db04c1b35f1cf129bb9ad74789fbc2881815`]:
  - @band-store/utils@2.1.3
  - @band-store/band-store@2.1.3

## 2.1.2

### Patch Changes

- Updated dependencies [`729eb5da7b6daf9781b8bdcbc2fab344e942d444`, `16d27ea6e4c2e4290820fe2328f08557534fcb8f`, `fad85a9d293acee1dae784afa223a080b9b8b85b`, `885c82ded63e504739bf39a113f820c87c9e2d52`, `6367bccde88158d524dfa01e5a8123ffa3461c10`]:
  - @band-store/utils@2.1.2
  - @band-store/band-store@2.1.2

## 2.1.1

### Patch Changes

- Updated dependencies [`90ae187e097c42a224c701f31cbc2924ea6ee86b`, `0a077d48e14976bafcf19705fc48e66756362fd6`, `c8cb9b5c1addb5dcd30ca559813b96e5fba1d6a3`, `90d7f4ff3949ade9f6a7335c9611aae6633be908`, `f65a3cc06df9faca3615f30eb4d3bf889efa5765`, `b160fd3cbf6edf06702fa15b694709375557d188`, `0a16efa4266f93302b31589349e777bc8d24dc07`, `69f4c4f4e06022990fcd9c66d8f1a68ff0ff97b1`]:
  - @band-store/utils@2.1.1
  - @band-store/band-store@2.1.1

## 2.1.0

### Patch Changes

- Updated dependencies [`194361b95a0ed2c182e0a3c107fde9b4b6a7bcf7`, `3e98364bd1631f96846cd3199bf7497702cf5923`, `ef046844cca26deddc02008cd50675fcfb4c8af4`, `11bd55613304350a5478fd4c001e2309cca3a995`]:
  - @band-store/utils@2.1.0
  - @band-store/band-store@2.1.0

## 2.0.7

### Patch Changes

- Updated dependencies [`e9003c3124f284eae7e1457101bf10c1beccbac1`]:
  - @band-store/utils@2.0.7
  - @band-store/band-store@2.0.7

## 2.0.6

### Patch Changes

- Updated dependencies []:
  - @band-store/utils@2.0.6
  - @band-store/band-store@2.0.6

## 2.0.5

### Patch Changes

- Updated dependencies [`9dff05cddeeca40fab47760fa15e07ca087664ed`, `d9d4e575f60b303f8143815ea8a3b3d9d14cd0ec`, `d933b3f1e4a92e841e881a1fd173df806008cc4a`, `42c08fa8e00d33e93e152b3058d2f73476b9a0c3`, `6486f2bcce1d128ae8126091f252e67aa896ff17`, `3e265229f2ae5c3d55f64a445574c13c40b52c14`, `2344012d1ccfae998bceb0c2b75ba9a17f84c18b`, `7390c14c20f7b5053458de1b1a58870dc8e441cc`]:
  - @band-store/utils@2.0.5
  - @band-store/band-store@2.0.5

## 2.0.4

### Patch Changes

- Updated dependencies [`0ef92cce2848ed447028434c43e4041f094cb402`]:
  - @band-store/band-store@2.0.4
  - @band-store/utils@2.0.4

## 2.0.3

### Patch Changes

- Updated dependencies [`03f4b66b90625634f13409be35cd57081f0eb7d5`]:
  - @band-store/utils@2.0.3
  - @band-store/band-store@2.0.3

## 2.0.2

### Patch Changes

- Updated dependencies [`de228d209f30dfbb5b500d5cb49932b63e06f52a`, `c1c85ef952441eacfe8b6c2ffa9304ac4433053f`, `16b4cc433e996d1a54e4ff043daaa148981ba63d`, `879ce33090c7e99ae8b466c31c5dc0c67cdbc08f`, `b3cbc160eb94025402b5a0ef21653c207bbe8ccd`]:
  - @band-store/band-store@2.0.2
  - @band-store/utils@2.0.2

## 2.0.1

### Patch Changes

- Updated dependencies [`471f7e4a10fe415064480b2a0aa5b8b23174c141`]:
  - @band-store/band-store@2.0.1
  - @band-store/utils@2.0.1

## 2.0.0

### Major Changes

- #7341 `2e42e053d4c9d5445d227bdc268c66713aad8e2e` Thanks [@olivermrbl](https://github.com/olivermrbl)! - chore: Band Store 2.0

### Patch Changes

- Updated dependencies [`2e42e053d4c9d5445d227bdc268c66713aad8e2e`]:
  - @band-store/utils@2.0.0
  - @band-store/band-store@2.0.0

## 0.3.2

### Patch Changes

- #6812 `e005987adf` Thanks [@shahednasser](https://github.com/shahednasser)! - fix(band-store-oas-cli): fix tool not working in Band Store backends

- Updated dependencies [`0168c819da`, `70859397c0`, `deab12e27e`, `56481e683d`, `9073d7aba3`, `7bc7adeeb4`, `509ddf9a56`, `68b9812aa1`, `4974f5e455`, `205573f5e3`, `26531c5a38`, `05e857d256`, `1ef9c78cea`, `20132d7cea`]:
  - @band-store/band-store@1.20.4
  - @band-store/types@1.11.15
  - @band-store/utils@1.11.8

## 0.3.1

### Patch Changes

- #6338 `374a3f4dab` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(@band-store/band-store-oas-cli): added v2 flag
  feat(@band-store/oas-github-ci): added v2 flag
- Updated dependencies [`1fd0457c15`, `9288f53327`, `e124762873`, `d4b921f3db`, `557d86afbf`, `ac86362e81`, `e4acde1aa2`, `1a661adf3e`, `0c705d7bd4`, `56504c99f0`, `56cbf88115`, `36a61658f9`, `c3f26a6826`, `04a532e5ef`, `f0ef0a8784`, `296d7faad4`, `0c2a460751`, `25d176b851`, `1ba35b02dd`, `c319edb8e0`, `7c46b0f88b`, `0b9fcb6324`, `586df9da25`, `b3d826497b`, `a86c87fe14`, `640eccd5dd`, `8ea37d03c9`, `339a946f38`, `fb25471e92`, `ac829fc67f`, `d9d5afc3cf`, `c3c4f49fc2`, `c2d56ca12b`, `9288f53327`, `0d46abf0ff`, `fafde4f54d`, `b78f863d80`, `8dad2b51a2`, `2d00625729`, `873c21355c`, `608c10383a`, `0c705d7bd4`, `78e5ec459a`, `d37ff8024d`, `7be0a2cf6d`, `a6d7070dd6`, `1d91b7429b`, `168f02f138`, `1ed5f918c3`, `e076590ff2`, `c20eb15cd9`, `e5945479e0`, `f5c2256286`, `000eb61e33`, `62d5803b20`, `62a7bcc30c`, `8f8a4f9b13`, `56a6ec0227`, `6500f18b9b`, `4d38eb3bf8`, `ce39b9b66e`, `a6a4b3f01a`, `4d51f095b3`, `8ff838970e`, `44d43e8155`, `56b0b45304`, `cc1b66842c`, `24fb102a56`, `e85463b2a7`]:
  - @band-store/types@1.11.14
  - @band-store/band-store@1.20.3
  - @band-store/utils@1.11.7

## 0.3.0

### Minor Changes

- #6211 `e84847be3` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(band-store-oas-cli): updated redocly-cli to v1.7

### Patch Changes

- Updated dependencies [`68ddd866a5`, `72bc52231c`, `489b7effb`, `99045848f`, `af7af7374`, `db4da5602`, `fc6b1772a7`, `a9b4214503`, `d85fee42e`, `5e655dd59`, `134af7766`, `b132ff7669`, `e28fa7fbdf`, `a12c28b7d5`, `b782d3bcb7`, `d68089b2a`, `7f7cb2a263`, `6404b9abd`, `302323916`, `da5cc4cf7`, `daecd82a7`, `ce81cade88`, `fd78f5e24`, `192bc336cc`, `06b33a9b4`, `b6ac768698`, `4792c5522`, `8ad7539eb`, `130c641e5c`, `fade8ea7bf`, `8472460f53`, `68d8daccd`]:
  - @band-store/types@1.11.11
  - @band-store/utils@1.11.4
  - @band-store/band-store@1.20.1

## 0.2.24

### Patch Changes

- Updated dependencies [`4ad66c179`, `91615f9c4`, `c39bf69a5`, `203e1fccb`, `154c9b43b`, `f90ba0208`]:
  - @band-store/band-store@1.17.4
  - @band-store/types@1.11.6
  - @band-store/utils@1.10.5

## 0.2.23

### Patch Changes

- #5453 `c1b97050a` Thanks [@shahednasser](https://github.com/shahednasser)! - feat(band-store-oas-cli): Added `--main-file-name` option to specify output file name
  feat(oas-github-ci): Added `--with-full-file"` option to output both split and full files
- Updated dependencies [`148f537b4`, `e64823d1b`, `9ff22110a`, `a45da9215`, `2548ea8e5`, `ebba93e03`, `148f537b4`, `4d52082bf`, `a780b92b8`]:
  - @band-store/band-store@1.17.3
  - @band-store/types@1.11.5

## 0.2.22

### Patch Changes

- Updated dependencies [`c1cabac72`, `378ca1b36`, `69cf7215f`, `0d7c5543d`, `ec27d02d9`, `453297f52`, `ddff91965`, `e47461d95`, `66413d094`, `a0963f0ed`]:
  - @band-store/band-store@1.17.2
  - @band-store/utils@1.10.4
  - @band-store/types@1.11.4

## 0.2.21

### Patch Changes

- Updated dependencies [`eeceec791`, `90e24c593`, `130cbc1f4`, `f9264c479`, `cb569c2df`, `0f34e0f38`, `c5703a476`]:
  - @band-store/utils@1.10.3
  - @band-store/band-store@1.17.1
  - @band-store/types@1.11.3

## 0.2.20

### Patch Changes

- Updated dependencies [`240c439be`, `2caff2efc`, `2b91049f5`, `f1512605d`, `cc4169a94`, `dfa5d041c`, `202049f8a`, `5f76b967d`, `f285a6712`, `a9972d7d6`, `c68ba63c1`, `c1b8f089e`, `1e7db5a5c`]:
  - @band-store/band-store@1.17.0
  - @band-store/utils@1.10.2
  - @band-store/types@1.11.2

## 0.2.19

### Patch Changes

- Updated dependencies [`7231f6583`, `4fa675ec2`, `77c85fc6c`, `dc94f053d`, `6273b4b16`, `2b078f06d`, `30863fee5`, `5362bfc34`, `60360d2fd`, `3d68be2b6`, `a87d07655`, `05a32683a`, `05fcfd803`, `edf90eecb`, `107aaa371`, `834da5c41`]:
  - @band-store/band-store@1.16.0
  - @band-store/types@1.11.1
  - @band-store/utils@1.10.1

## 0.2.18

### Patch Changes

- Updated dependencies [`bb5ea9d5c`, `4bf8acbdd`, `046b0dcfa`, `4d439bed3`, `460161a69`, `17d91c276`, `fcb6b4f51`, `66bd9a835`, `b71776738`, `c7b149a7b`, `4d16acf5f`, `4d16acf5f`, `87bade096`, `9781089ca`, `470379e63`, `a1110b343`, `4d16acf5f`, `a4906d0ac`]:
  - @band-store/band-store@1.15.1
  - @band-store/types@1.11.0
  - @band-store/utils@1.10.0

## 0.2.17

### Patch Changes

- Updated dependencies [`d8a6e3e0d`, `edf9ed4e5`, `8b860416d`]:
  - @band-store/band-store@1.15.0
  - @band-store/types@1.10.3

## 0.2.16

### Patch Changes

- Updated dependencies [`c53fa6cd3`]:
  - @band-store/utils@1.9.7

## 0.2.15

### Patch Changes

- Updated dependencies [`d1e298f5d`, `5cf59a5b9`, `ac866ebb5`, `d8a908bd8`, `3f3a84262`, `f1a05f472`, `30ce35b16`, `a2d7540e4`, `9d8f87b03`, `281b0746c`]:
  - @band-store/band-store@1.14.0
  - @band-store/types@1.10.2
  - @band-store/utils@1.9.6

## 0.2.14

### Patch Changes

- Updated dependencies [`fc6c9df03`, `dae34297e`, `03fb0479c`, `8af55aed8`, `5c60aad17`, `9c682ce28`, `4073b7313`]:
  - @band-store/band-store@1.13.1
  - @band-store/types@1.10.1
  - @band-store/utils@1.9.5

## 0.2.13

### Patch Changes

- Updated dependencies [`107ae23a3`, `ce3f914e0`]:
  - @band-store/utils@1.9.4
  - @band-store/types@1.10.0

## 0.2.12

### Patch Changes

- Updated dependencies [`585ebf245`, `9129ca08a`, `ae33f4825`, `131477faf`, `c9989529e`, `caea44ebf`, `30e8bb275`, `f18f1b9bf`, `f12299deb`]:
  - @band-store/types@1.9.0
  - @band-store/band-store@1.13.0
  - @band-store/utils@1.9.3

## 0.2.11

### Patch Changes

- Updated dependencies [`befc2f1c8`, `d184d23c6`, `befc2f1c8`, `56d1d326d`, `43427b889`, `2f283996f`]:
  - @band-store/band-store@1.12.3
  - @band-store/types@1.8.11

## 0.2.10

### Patch Changes

- Updated dependencies [`499c3478c`, `85eb12883`, `9dcdc0041`, `01245ac89`, `6f1fa244f`, `bdd9c5a7e`, `9760d4a96`, `4264302f2`, `7bf7d2ade`]:
  - @band-store/types@1.8.10
  - @band-store/utils@1.9.2
  - @band-store/band-store@1.12.2

## 0.2.9

### Patch Changes

- Updated dependencies [`dc120121c`]:
  - @band-store/types@1.8.9

## 0.2.8

### Patch Changes

- Updated dependencies [`f98ba5bde`, `2c0074031`, `13294fff3`, `ca477c86a`, `79cca2ab8`, `d76ba0cd2`, `8e708aadd`, `02b1bd07c`, `eadf13cb2`, `2db6a1d40`, `109096465`, `81dfeb43e`, `14c0f62f8`, `af2dc4f75`, `8676ee7a2`, `260dc55b6`, `f8643361c`, `afd1b67f1`]:
  - @band-store/utils@1.9.1
  - @band-store/band-store@1.12.1
  - @band-store/types@1.8.8

## 0.2.7

### Patch Changes

- Updated dependencies [`0a35f21af`, `4fb443c0e`, `0476f5251`, `0f87d3d64`, `ed382f2ee`, `92f01cefb`, `e3cfbcd4a`, `6998666c6`, `81eeaa329`, `e2d29d35c`, `3a38c84f8`, `4f3c8f5d7`, `a91987fab`, `bf18bd0c8`, `db4199530`]:
  - @band-store/band-store@1.12.0

## 0.2.6

### Patch Changes

- #3924 `cfcd2d54f` Thanks [@pevey](https://github.com/pevey)! - Add separator after tmpdir base

- Updated dependencies [`a66646233`, `9518efcca`, `a86f0e815`, `cdbac2c84`, `26963acc0`]:
  - @band-store/band-store@1.11.0

## 0.2.5

### Patch Changes

- Updated dependencies [`3d6bcaaf6`, `7fd22ecb4`, `bd53adb23`, `1ea57c3a6`, `0c58ead6d`, `cff54d732`, `a8e73942e`, `ff37cd190`]:
  - @band-store/band-store@1.10.1

## 0.2.4

### Patch Changes

- Updated dependencies [`0e488e71b`, `538c9874b`, `d539c6fee`, `b7a782639`, `983872319`, `284f1eed9`, `4e8045a0a`, `d2443d83e`, `8b93bae8f`]:
  - @band-store/band-store@1.10.0

## 0.2.3

### Patch Changes

- Updated dependencies [`440f900af`, `366b12fce`, `7e213f210`, `d2826872f`, `0d0e9bf20`, `2be144ff0`, `935abeae6`, `3a77e8a88`, `af710f1b4`, `491566df6`, `966ddd2f1`, `3b3236cc0`, `4a8562743`]:
  - @band-store/band-store@1.9.0

## 0.2.2

### Patch Changes

- #3745 `1456056e8` Thanks @patrick-medusajs! - feat(oas): new band-store-oas docs for Redocly and circular references

- Updated dependencies [`6bb1654b6`, `95d338262`, `4f58ddee0`]:
  - @band-store/band-store@1.8.2

## 0.2.1

### Patch Changes

- Updated dependencies [`78ff64e78`, `1a60c6f58`, `713d85a92`, `0b3c6fde3`, `914d57336`, `60abb91b7`, `089f1eb19`, `08f85fa33`, `282e239df`, `abdb74d99`, `eab2d22f7`, `08f85fa33`, `085fedb1f`, `4d69d8ef6`, `7f6dc44be`, `d533caa4c`]:
  - @band-store/band-store@1.8.1
  - @band-store/openapi-typescript-codegen@0.2.1

## 0.2.0

### Minor Changes

- #3411 `966aea65c` Thanks @patrick-medusajs! - feat(oas-cli): combine admin + store + custom OAS

### Patch Changes

- #3213 `813706190` Thanks @patrick-medusajs! - feat(oas): band-store-oas-cli as OAS build tool

- #3631 `377b9ce8c` Thanks @patrick-medusajs! - fix(oas:test): fix beforeAll timeout silent failure

- #3272 `1c40346e9` Thanks @patrick-medusajs! - feat(codegen): openapi-typescript-codegen fork

- #3559 `53c4a43ca` Thanks @patrick-medusajs! - feat(oas:cli): output better error when no command is provided

- Updated dependencies [`d6b1ad1cc`, `e143a8697`, `121b42acf`, `84e448968`, `33c6ccf05`, `788ddc0f4`, `5fd74b38a`, `30a320364`, `240d0ea7b`, `6c0462472`, `589d1c09b`, `0695ff642`, `530740889`, `13f40d721`, `4342ac884`, `fe9eea4c1`, `a5ad6c054`, `748833383`, `7f87c4f2c`, `e5a2e9c8d`, `0a02b70e5`, `8ddb3952c`, `fe4b8feb7`, `aa690beed`, `5eb61fa0e`, `f033711ad`, `eed784d7d`, `3171b0e51`, `a0c919a8d`, `522e306e2`, `80b95a230`, `a1e59313c`, `10bf05c14`, `cbbf3ca05`, `9ba09ba4d`, `12d304307`, `693015fde`, `287c829c9`, `74bc4b16a`, `0cca13779`, `aed7805c0`, `e359d3f85`, `0d1b63d77`, `4042beb10`, `809ab2e0e`, `f43e9f0f2`, `842423679`, `935870e01`, `826d4bedf`, `57d7728dd`, `15f47baf5`, `1c40346e9`, `999aeb116`, `55c5fba0d`, `38503fff5`, `5e405be02`, `40de54b01`, `54dcc1871`, `478d1af8d`, `77d46220c`, `6748877c6`, `7e17e0ddc`, `bca1f80dd`, `7f2223b65`, `7b57695e0`, `7d585f5f8`, `4e9d257d3`, `ef5ef9f5a`, `feaf8d2e1`, `f97b3d7cc`, `55a1f232a`, `966aea65c`, `48ad2426a`]:
  - @band-store/band-store@1.8.0
  - @band-store/openapi-typescript-codegen@0.2.0

## 0.2.0-rc.8

### Patch Changes

- Updated dependencies [`4488ec685`]:
  - @band-store/band-store@1.8.0-rc.8

## 0.2.0-rc.7

### Patch Changes

- Updated dependencies [`748833383`, `e5a2e9c8d`]:
  - @band-store/band-store@1.8.0-rc.7

## 0.2.0-rc.6

### Patch Changes

- Updated dependencies [`788ddc0f4`, `a5ad6c054`, `7f87c4f2c`, `eed784d7d`, `a0c919a8d`, `0cca13779`]:
  - @band-store/band-store@1.8.0-rc.6

## 0.2.0-rc.5

### Patch Changes

- Updated dependencies [`4342ac884`, `809ab2e0e`]:
  - @band-store/band-store@1.8.0-rc.5

## 0.2.0-rc.4

### Patch Changes

- #3631 `377b9ce8c` Thanks @patrick-medusajs! - fix(oas:test): fix beforeAll timeout silent failure

- Updated dependencies [`5fd74b38a`, `999aeb116`, `5e405be02`, `a7e3f2d34`]:
  - @band-store/band-store@1.8.0-rc.4

## 0.2.0-rc.3

### Patch Changes

- Updated dependencies [`0695ff642`, `693015fde`]:
  - @band-store/band-store@1.8.0-rc.3

## 0.2.0-rc.2

### Patch Changes

- Updated dependencies []:
  - @band-store/band-store@1.8.0-rc.2

## 0.2.0-rc.1

### Patch Changes

- #3559 `53c4a43ca` Thanks @patrick-medusajs! - feat(oas:cli): output better error when no command is provided

- Updated dependencies [`530740889`, `e359d3f85`, `bca1f80dd`, `5f41cd9a6`, `1ce3cc5ae`, `332a9b686`, `feaf8d2e1`]:
  - @band-store/band-store@1.8.0-rc.1

## 0.2.0-rc.0

### Minor Changes

- #3411 `966aea65c` Thanks @patrick-medusajs! - feat(oas-cli): combine admin + store + custom OAS

### Patch Changes

- #3213 `813706190` Thanks @patrick-medusajs! - feat(oas): band-store-oas-cli as OAS build tool

- #3272 `1c40346e9` Thanks @patrick-medusajs! - feat(codegen): openapi-typescript-codegen fork

- Updated dependencies [`d6b1ad1cc`, `e143a8697`, `121b42acf`, `84e448968`, `33c6ccf05`, `30a320364`, `240d0ea7b`, `6c0462472`, `589d1c09b`, `13f40d721`, `fe9eea4c1`, `0a02b70e5`, `fe4b8feb7`, `aa690beed`, `5eb61fa0e`, `f033711ad`, `3171b0e51`, `522e306e2`, `80b95a230`, `a1e59313c`, `10bf05c14`, `cbbf3ca05`, `9ba09ba4d`, `12d304307`, `287c829c9`, `74bc4b16a`, `aed7805c0`, `0d1b63d77`, `4042beb10`, `f43e9f0f2`, `842423679`, `935870e01`, `826d4bedf`, `57d7728dd`, `15f47baf5`, `1c40346e9`, `55c5fba0d`, `38503fff5`, `40de54b01`, `54dcc1871`, `478d1af8d`, `77d46220c`, `6748877c6`, `7e17e0ddc`, `7f2223b65`, `7b57695e0`, `7d585f5f8`, `4e9d257d3`, `ef5ef9f5a`, `46547f29c`, `f97b3d7cc`, `f3bf351d2`, `d61d6c7b7`, `55a1f232a`, `53eda215e`, `026bdab05`, `aefe5aa13`, `966aea65c`, `48ad2426a`]:
  - @band-store/band-store@1.8.0-rc.0
  - @band-store/openapi-typescript-codegen@0.2.0-rc.0

## 0.1.0
