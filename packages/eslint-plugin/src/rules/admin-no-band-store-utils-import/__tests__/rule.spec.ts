import { createRuleTester } from "../../../test-utils"
import { rule } from "../rule"

const ruleTester = createRuleTester()

ruleTester.run("admin-no-band-store-utils-import", rule, {
  valid: [
    // The admin SDK is the supported, browser-safe entry point.
    { code: `import { defineWidgetConfig } from "@band-store/admin-sdk"` },
    // Types are erased at build time — safe to import.
    { code: `import type { HttpTypes } from "@band-store/framework/types"` },
    // The JS SDK is browser-safe.
    { code: `import BandStore from "@band-store/js-sdk"` },
    // Unrelated third-party imports.
    { code: `import { useState } from "react"` },
    { code: `import { z } from "zod"` },
    // A subpath whose name merely starts the same way — not an exact match.
    { code: `import x from "@band-store/framework/utils-extra"` },
  ],
  invalid: [
    {
      code: `import { BandStoreError } from "@band-store/framework/utils"`,
      errors: [{ messageId: "nodeOnlyImportInAdmin" }],
    },
    {
      code: `import { defineMiddlewares } from "@band-store/framework/http"`,
      errors: [{ messageId: "nodeOnlyImportInAdmin" }],
    },
    {
      code: `import { createWorkflow } from "@band-store/framework/workflows-sdk"`,
      errors: [{ messageId: "nodeOnlyImportInAdmin" }],
    },
    // Single quotes are matched too.
    {
      code: `import { Modules } from '@band-store/framework/utils'`,
      errors: [{ messageId: "nodeOnlyImportInAdmin" }],
    },
    // Side-effect-only import.
    {
      code: `import "@band-store/framework/utils"`,
      errors: [{ messageId: "nodeOnlyImportInAdmin" }],
    },
    // Re-export of a Node-only module.
    {
      code: `export { BandStoreError } from "@band-store/framework/utils"`,
      errors: [{ messageId: "nodeOnlyImportInAdmin" }],
    },
    {
      code: `export * from "@band-store/framework/http"`,
      errors: [{ messageId: "nodeOnlyImportInAdmin" }],
    },
  ],
})
