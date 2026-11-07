import { createRuleTester } from "../../../test-utils"
import { rule } from "../rule"

const ruleTester = createRuleTester()

ruleTester.run("import-from-framework-not-internal", rule, {
  valid: [
    // Canonical framework entry points.
    { code: `import { BandStoreError } from "@band-store/framework/utils"` },
    { code: `import type { Context } from "@band-store/framework/types"` },
    {
      code: `import { createWorkflow } from "@band-store/framework/workflows-sdk"`,
    },
    { code: `import { defineMiddlewares } from "@band-store/framework/http"` },
    // Other public packages are fine.
    { code: `import { deleteOrderWorkflow } from "@band-store/core-flows"` },
    { code: `import { defineWidgetConfig } from "@band-store/admin-sdk"` },
    // Unrelated third-party import.
    { code: `import { z } from "zod"` },
    // A @band-store package whose name merely contains "dist" — not a dist deep import.
    { code: `import x from "@band-store/some-dist-thing"` },
    // Public subpath that isn't dist.
    { code: `import { Modules } from "@band-store/framework/utils"` },
  ],
  invalid: [
    // Deprecated standalone package → framework subpath (autofix).
    {
      code: `import { BandStoreError } from "@band-store/utils"`,
      output: `import { BandStoreError } from "@band-store/framework/utils"`,
      errors: [{ messageId: "useFrameworkEntrypoint" }],
    },
    {
      code: `import type { Context } from "@band-store/types"`,
      output: `import type { Context } from "@band-store/framework/types"`,
      errors: [{ messageId: "useFrameworkEntrypoint" }],
    },
    {
      code: `import { createWorkflow } from "@band-store/workflows-sdk"`,
      output: `import { createWorkflow } from "@band-store/framework/workflows-sdk"`,
      errors: [{ messageId: "useFrameworkEntrypoint" }],
    },
    {
      code: `import { BandStoreModule } from "@band-store/modules-sdk"`,
      output: `import { BandStoreModule } from "@band-store/framework/modules-sdk"`,
      errors: [{ messageId: "useFrameworkEntrypoint" }],
    },
    {
      code: `import { TransactionOrchestrator } from "@band-store/orchestration"`,
      output: `import { TransactionOrchestrator } from "@band-store/framework/orchestration"`,
      errors: [{ messageId: "useFrameworkEntrypoint" }],
    },
    // Quote style preserved on autofix.
    {
      code: `import { BandStoreError } from '@band-store/utils'`,
      output: `import { BandStoreError } from '@band-store/framework/utils'`,
      errors: [{ messageId: "useFrameworkEntrypoint" }],
    },
    // Re-export of a deprecated package.
    {
      code: `export { BandStoreError } from "@band-store/utils"`,
      output: `export { BandStoreError } from "@band-store/framework/utils"`,
      errors: [{ messageId: "useFrameworkEntrypoint" }],
    },
    {
      code: `export * from "@band-store/types"`,
      output: `export * from "@band-store/framework/types"`,
      errors: [{ messageId: "useFrameworkEntrypoint" }],
    },
    // Deep dist import of the main package → no autofix.
    {
      code: `import { foo } from "@band-store/band-store/dist/utils/foo"`,
      errors: [{ messageId: "noInternalImport" }],
    },
    // Deep dist import of the framework package → no autofix.
    {
      code: `import { bar } from "@band-store/framework/dist/utils"`,
      errors: [{ messageId: "noInternalImport" }],
    },
    // dist as the trailing segment.
    {
      code: `import x from "@band-store/band-store/dist"`,
      errors: [{ messageId: "noInternalImport" }],
    },
    // Nested dist segment.
    {
      code: `import x from "@band-store/product/dist/services/product"`,
      errors: [{ messageId: "noInternalImport" }],
    },
    // Re-export from internal build output.
    {
      code: `export { x } from "@band-store/band-store/dist/x"`,
      errors: [{ messageId: "noInternalImport" }],
    },
  ],
})
