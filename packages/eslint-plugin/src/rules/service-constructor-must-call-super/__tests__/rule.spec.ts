import { createRuleTester } from "../../../test-utils"
import { rule } from "../rule"

const ruleTester = createRuleTester()

ruleTester.run("service-constructor-must-call-super", rule, {
  valid: [
    // Constructor with super(...arguments).
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor() {
            super(...arguments)
          }
        }
      `,
    },
    // Constructor with a bare super() call also satisfies the rule.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor(container) {
            super(container)
          }
        }
      `,
    },
    // No constructor defined — nothing to flag.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async create() {}
        }
      `,
    },
    // Class doesn't extend BandStoreService — out of scope (even with *Service name).
    {
      code: `
        class FooService {
          constructor() {}
        }
      `,
    },
    // BandStoreService imported from a non-framework source is ignored.
    {
      code: `
        import { BandStoreService } from "some-other-lib"
        class FooService extends BandStoreService({}) {
          constructor() {}
        }
      `,
    },
    // Class extends something other than BandStoreService.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends SomethingElse {
          constructor() {}
        }
      `,
    },
    // Honors aliased BandStoreService import.
    {
      code: `
        import { BandStoreService as MS } from "@band-store/framework/utils"
        class FooService extends MS({}) {
          constructor() {
            super(...arguments)
          }
        }
      `,
    },
    // super() call interleaved with other statements is still fine.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor(container) {
            this.foo = "bar"
            super(container)
          }
        }
      `,
    },
  ],
  invalid: [
    // Empty constructor body.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor() {}
        }
      `,
      output: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor() { super(...arguments) }
        }
      `,
      errors: [{ messageId: "missingSuperCall" }],
    },
    // Multi-line empty body — fixer must insert with newline + indentation,
    // not jam everything on the opening-brace line.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor() {

          }
        }
      `,
      output: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor() {
            super(...arguments)
          }
        }
      `,
      errors: [{ messageId: "missingSuperCall" }],
    },
    // Constructor body with statements but no super call.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor(container) {
            this.container = container
          }
        }
      `,
      output: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor(container) {
            super(...arguments)
            this.container = container
          }
        }
      `,
      errors: [{ messageId: "missingSuperCall" }],
    },
    // Aliased BandStoreService import.
    {
      code: `
        import { BandStoreService as MS } from "@band-store/framework/utils"
        class FooService extends MS({}) {
          constructor() {}
        }
      `,
      output: `
        import { BandStoreService as MS } from "@band-store/framework/utils"
        class FooService extends MS({}) {
          constructor() { super(...arguments) }
        }
      `,
      errors: [{ messageId: "missingSuperCall" }],
    },
    // Class expression.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        const FooService = class extends BandStoreService({}) {
          constructor() {}
        }
      `,
      output: `
        import { BandStoreService } from "@band-store/framework/utils"
        const FooService = class extends BandStoreService({}) {
          constructor() { super(...arguments) }
        }
      `,
      errors: [{ messageId: "missingSuperCall" }],
    },
    // Constructor calls something that looks like super but isn't (e.g. a method named super-something).
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor() {
            this.init()
          }
        }
      `,
      output: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor() {
            super(...arguments)
            this.init()
          }
        }
      `,
      errors: [{ messageId: "missingSuperCall" }],
    },
  ],
})
