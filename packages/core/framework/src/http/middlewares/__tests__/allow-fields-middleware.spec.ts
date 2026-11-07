import { BandStoreRequest, BandStoreResponse } from "../../types"
import { allowFields } from "../allow-fields-middleware"

const run = (middleware: any, req: Partial<BandStoreRequest>) => {
  const next = jest.fn()
  middleware(req as BandStoreRequest, {} as BandStoreResponse, next)
  return next
}

describe("allowFields", () => {
  it("pushes the given fields onto req.allowed", () => {
    const req = { allowed: [] } as Partial<BandStoreRequest>

    const next = run(allowFields("brand", "brand.*"), req)

    expect(req.allowed).toEqual(["brand", "brand.*"])
    expect(next).toHaveBeenCalled()
  })

  it("accepts arrays of fields", () => {
    const req = { allowed: [] } as Partial<BandStoreRequest>

    run(allowFields(["brand", "brand.*"], "supplier"), req)

    expect(req.allowed).toEqual(["brand", "brand.*", "supplier"])
  })

  it("keeps fields added by other middlewares", () => {
    const req = { allowed: ["company"] } as Partial<BandStoreRequest>

    run(allowFields("brand"), req)
    run(allowFields("supplier"), req)

    expect(req.allowed).toEqual(["company", "brand", "supplier"])
  })
})
