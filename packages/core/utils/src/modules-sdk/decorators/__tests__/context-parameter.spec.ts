import { BandStoreContext } from "../context-parameter"

describe("BandStoreContext", () => {
  it("keeps inherited context indexes when adding child metadata", () => {
    const parentPrototype = {}
    BandStoreContext()(parentPrototype, "createProductOptions", 1)

    const childPrototype = Object.create(parentPrototype)
    BandStoreContext()(childPrototype, "updateProductOptionValues", 2)

    expect(BandStoreContext.getIndex(childPrototype, "createProductOptions")).toBe(
      1
    )
    expect(
      BandStoreContext.getIndex(childPrototype, "updateProductOptionValues")
    ).toBe(2)
  })

  it("keeps overridden context indexes on the child prototype", () => {
    const parentPrototype = {}
    BandStoreContext()(parentPrototype, "updateProductOptionValues", 1)

    const childPrototype = Object.create(parentPrototype)
    BandStoreContext()(childPrototype, "updateProductOptionValues", 2)

    expect(
      Object.prototype.hasOwnProperty.call(
        childPrototype,
        "BandStoreContextIndex_"
      )
    ).toBe(true)
    expect(
      BandStoreContext.getIndex(parentPrototype, "updateProductOptionValues")
    ).toBe(1)
    expect(
      BandStoreContext.getIndex(childPrototype, "updateProductOptionValues")
    ).toBe(2)
  })
})
