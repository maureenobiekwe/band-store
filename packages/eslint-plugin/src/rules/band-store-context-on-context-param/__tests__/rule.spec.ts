import { createRuleTester } from "../../../test-utils"
import { rule } from "../rule"

const ruleTester = createRuleTester()

ruleTester.run("band-store-context-on-context-param", rule, {
  valid: [
    // Context param decorated with @BandStoreContext().
    {
      code: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(@BandStoreContext() sharedContext: Context = {}) {}
        }
      `,
    },
    // Decorator on a plain (no-default) Context param.
    {
      code: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async retrieve(id: string, @BandStoreContext() sharedContext: Context) {}
        }
      `,
    },
    // Method without a Context parameter — not flagged.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(filters: object) {}
        }
      `,
    },
    // Non-service class — not checked.
    {
      code: `
        class Plain {
          async list(sharedContext: Context = {}) {}
        }
      `,
    },
    // Constructor with Context param is exempt.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          constructor(sharedContext: Context) {
            super(...arguments)
          }
        }
      `,
    },
    // Aliased decorator import is honored.
    {
      code: `
        import { BandStoreService, BandStoreContext as MC } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(@MC() sharedContext: Context = {}) {}
        }
      `,
    },
    // Protected method with decorated Context param.
    {
      code: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          protected async list_(@BandStoreContext() sharedContext: Context = {}) {}
        }
      `,
    },
    // A `*Service`-named class that doesn't extend `BandStoreService` is not a
    // service class — its bare `Context` param is not flagged.
    {
      code: `
        import { BandStoreContext } from "@band-store/framework/utils"
        class OrderService {
          async list(sharedContext: Context = {}) {}
        }
      `,
    },
    // Overload signatures (bodyless) with a bare Context param are ignored —
    // the decorator lives on the implementation, which carries it here.
    {
      code: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          list(id: string, sharedContext?: Context): Promise<string>
          list(id: number, sharedContext?: Context): Promise<number>
          async list(id: any, @BandStoreContext() sharedContext: Context = {}): Promise<any> {}
        }
      `,
    },
  ],
  invalid: [
    // Public method with bare Context param — autofix inserts decorator.
    {
      code: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(sharedContext: Context = {}) {}
        }
      `,
      output: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(@BandStoreContext() sharedContext: Context = {}) {}
        }
      `,
      errors: [{ messageId: "missingMedusaContext" }],
    },
    // Bare Context param with no default — autofix.
    {
      code: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async retrieve(id: string, sharedContext: Context) {}
        }
      `,
      output: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async retrieve(id: string, @BandStoreContext() sharedContext: Context) {}
        }
      `,
      errors: [{ messageId: "missingMedusaContext" }],
    },
    // No import for BandStoreContext — reported without autofix.
    {
      code: `
        import { BandStoreService } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(sharedContext: Context = {}) {}
        }
      `,
      output: null,
      errors: [{ messageId: "missingMedusaContext" }],
    },
    // Honors aliased decorator import in the autofix.
    {
      code: `
        import { BandStoreService, BandStoreContext as MC } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(sharedContext: Context = {}) {}
        }
      `,
      output: `
        import { BandStoreService, BandStoreContext as MC } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(@MC() sharedContext: Context = {}) {}
        }
      `,
      errors: [{ messageId: "missingMedusaContext" }],
    },
    // Protected method with bare Context param.
    {
      code: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          protected async list_(sharedContext: Context = {}) {}
        }
      `,
      output: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          protected async list_(@BandStoreContext() sharedContext: Context = {}) {}
        }
      `,
      errors: [{ messageId: "missingMedusaContext" }],
    },
    // Multiple methods on the same class, each reported.
    {
      code: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(sharedContext: Context = {}) {}
          protected async list_(sharedContext: Context = {}) {}
        }
      `,
      output: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async list(@BandStoreContext() sharedContext: Context = {}) {}
          protected async list_(@BandStoreContext() sharedContext: Context = {}) {}
        }
      `,
      errors: [
        { messageId: "missingMedusaContext" },
        { messageId: "missingMedusaContext" },
      ],
    },
    // Context param after non-Context params is correctly targeted.
    {
      code: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async retrieve(id: string, filters: object, sharedContext: Context = {}) {}
        }
      `,
      output: `
        import { BandStoreService, BandStoreContext } from "@band-store/framework/utils"
        class FooService extends BandStoreService({}) {
          async retrieve(id: string, filters: object, @BandStoreContext() sharedContext: Context = {}) {}
        }
      `,
      errors: [{ messageId: "missingMedusaContext" }],
    },
  ],
})
