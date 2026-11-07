import { createRuleTester } from "../../../test-utils"
import { rule } from "../rule"

const ruleTester = createRuleTester()

ruleTester.run("zod-import-source", rule, {
  valid: [
    // Canonical BandStore import.
    {
      code: `import { z } from "@band-store/framework/zod"`,
    },
    // Unrelated import.
    {
      code: `import { something } from "other"`,
    },
    // Subpath import — not the bare "zod" package.
    {
      code: `import { z } from "zod/v4"`,
    },
    // Re-export from the BandStore source.
    {
      code: `export { z } from "@band-store/framework/zod"`,
    },
    // Side-effect import of something else.
    {
      code: `import "polyfill"`,
    },
  ],
  invalid: [
    // Named import.
    {
      code: `import { z } from "zod"`,
      output: `import { z } from "@band-store/framework/zod"`,
      errors: [{ messageId: "zodImportSource" }],
    },
    // Default-ish namespace import.
    {
      code: `import * as z from "zod"`,
      output: `import * as z from "@band-store/framework/zod"`,
      errors: [{ messageId: "zodImportSource" }],
    },
    // Single-quoted — quote style preserved.
    {
      code: `import { z } from 'zod'`,
      output: `import { z } from '@band-store/framework/zod'`,
      errors: [{ messageId: "zodImportSource" }],
    },
    // Side-effect import of bare zod.
    {
      code: `import "zod"`,
      output: `import "@band-store/framework/zod"`,
      errors: [{ messageId: "zodImportSource" }],
    },
    // Named re-export.
    {
      code: `export { z } from "zod"`,
      output: `export { z } from "@band-store/framework/zod"`,
      errors: [{ messageId: "zodImportSource" }],
    },
    // Wildcard re-export.
    {
      code: `export * from "zod"`,
      output: `export * from "@band-store/framework/zod"`,
      errors: [{ messageId: "zodImportSource" }],
    },
  ],
})
