import { container } from "@band-storejs/framework"
import { ContainerRegistrationKeys } from "@band-storejs/framework/utils"
import { setTestLicense, testLicense } from "../license"

describe("setTestLicense", () => {
  it("overrides the license the framework registers by default", () => {
    delete process.env.band-store_LICENSE_KEY

    expect(container.resolve(ContainerRegistrationKeys.LICENSE)).toBeNull()

    setTestLicense(["rbac"])

    expect(container.resolve(ContainerRegistrationKeys.LICENSE)).toEqual(
      testLicense(["rbac"])
    )
  })
})
