import { createRuleTester } from "../../../test-utils"
import { rule } from "../rule"

const ruleTester = createRuleTester()

ruleTester.run("no-deprecated-remote-query-config", rule, {
  valid: [
    // Already using queryConfig.
    {
      code: `
        import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
        export const GET = async (req: BandStoreRequest, res: BandStoreResponse) => {
          const { fields } = req.queryConfig
        }
      `,
    },
    // Unrelated property on a typed req.
    {
      code: `
        import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
        export const GET = async (req: BandStoreRequest, res: BandStoreResponse) => {
          const id = req.params.id
        }
      `,
    },
    // remoteQueryConfig on something that isn't a typed BandStore request.
    {
      code: `
        const obj = { remoteQueryConfig: {} }
        const cfg = obj.remoteQueryConfig
      `,
    },
    // req-named param in a non-handler function with no type annotation.
    {
      code: `
        function helper(req) {
          return req.remoteQueryConfig
        }
      `,
    },
    // Non-exported handler-named function.
    {
      code: `
        const GET = async (req, res) => {
          return req.remoteQueryConfig
        }
      `,
    },
    // Computed access.
    {
      code: `
        import { BandStoreRequest } from "@band-store/framework/http"
        export const GET = async (req: BandStoreRequest, res: unknown) => {
          return req["remoteQueryConfig"]
        }
      `,
    },
    // Import from unrelated source — the local "BandStoreRequest" is not tracked.
    {
      code: `
        import { BandStoreRequest } from "some-other-pkg"
        function handler(req: BandStoreRequest) {
          return req.remoteQueryConfig
        }
      `,
    },
  ],
  invalid: [
    // Typed param via direct import.
    {
      code: `
        import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
        export const GET = async (req: BandStoreRequest, res: BandStoreResponse) => {
          const { fields } = req.remoteQueryConfig
        }
      `,
      errors: [{ messageId: "deprecatedRemoteQueryConfig" }],
      output: `
        import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
        export const GET = async (req: BandStoreRequest, res: BandStoreResponse) => {
          const { fields } = req.queryConfig
        }
      `,
    },
    // AuthenticatedMedusaRequest.
    {
      code: `
        import { AuthenticatedMedusaRequest, BandStoreResponse } from "@band-store/framework/http"
        export const POST = async (req: AuthenticatedMedusaRequest, res: BandStoreResponse) => {
          return req.remoteQueryConfig
        }
      `,
      errors: [{ messageId: "deprecatedRemoteQueryConfig" }],
      output: `
        import { AuthenticatedMedusaRequest, BandStoreResponse } from "@band-store/framework/http"
        export const POST = async (req: AuthenticatedMedusaRequest, res: BandStoreResponse) => {
          return req.queryConfig
        }
      `,
    },
    // Aliased import.
    {
      code: `
        import { BandStoreRequest as MReq } from "@band-store/framework/http"
        function handler(req: MReq) {
          return req.remoteQueryConfig
        }
      `,
      errors: [{ messageId: "deprecatedRemoteQueryConfig" }],
      output: `
        import { BandStoreRequest as MReq } from "@band-store/framework/http"
        function handler(req: MReq) {
          return req.queryConfig
        }
      `,
    },
    // Untyped param named `req` inside an exported handler.
    {
      code: `
        export const GET = async (req, res) => {
          return req.remoteQueryConfig
        }
      `,
      errors: [{ messageId: "deprecatedRemoteQueryConfig" }],
      output: `
        export const GET = async (req, res) => {
          return req.queryConfig
        }
      `,
    },
    // Function declaration handler.
    {
      code: `
        export async function DELETE(req, res) {
          const cfg = req.remoteQueryConfig
        }
      `,
      errors: [{ messageId: "deprecatedRemoteQueryConfig" }],
      output: `
        export async function DELETE(req, res) {
          const cfg = req.queryConfig
        }
      `,
    },
    // Multiple accesses.
    {
      code: `
        import { BandStoreRequest } from "@band-store/framework/http"
        export const PATCH = async (req: BandStoreRequest, res) => {
          const a = req.remoteQueryConfig
          const b = req.remoteQueryConfig.fields
        }
      `,
      errors: [
        { messageId: "deprecatedRemoteQueryConfig" },
        { messageId: "deprecatedRemoteQueryConfig" },
      ],
      output: `
        import { BandStoreRequest } from "@band-store/framework/http"
        export const PATCH = async (req: BandStoreRequest, res) => {
          const a = req.queryConfig
          const b = req.queryConfig.fields
        }
      `,
    },
    // Renamed param with type annotation.
    {
      code: `
        import { BandStoreRequest } from "@band-store/framework/http"
        function helper(request: BandStoreRequest) {
          return request.remoteQueryConfig
        }
      `,
      errors: [{ messageId: "deprecatedRemoteQueryConfig" }],
      output: `
        import { BandStoreRequest } from "@band-store/framework/http"
        function helper(request: BandStoreRequest) {
          return request.queryConfig
        }
      `,
    },
    // HttpTypes-qualified annotation.
    {
      code: `
        import { HttpTypes } from "@band-store/framework/types"
        export const GET = async (req: HttpTypes.BandStoreRequest, res) => {
          return req.remoteQueryConfig
        }
      `,
      errors: [{ messageId: "deprecatedRemoteQueryConfig" }],
      output: `
        import { HttpTypes } from "@band-store/framework/types"
        export const GET = async (req: HttpTypes.BandStoreRequest, res) => {
          return req.queryConfig
        }
      `,
    },
  ],
})
