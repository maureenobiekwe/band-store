import { container } from "@band-storejs/framework"
import { asValue } from "@band-storejs/framework/awilix"
import { ContainerRegistrationKeys, License } from "@band-storejs/framework/utils"

export function testLicense(features: string[]): License {
  return { token: "test-license", sub: "org_test", features }
}

export function setTestLicense(features: string[]): void {
  container.register(
    ContainerRegistrationKeys.LICENSE,
    asValue(testLicense(features))
  )
}
