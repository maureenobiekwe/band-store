import { BandStoreContainer } from "@band-store/framework/types"
import { defineFileConfig, FeatureFlag } from "@band-store/framework/utils"

export const testJobHandler = jest.fn()

export default async function greetingJob(container: BandStoreContainer) {
  testJobHandler()
}

export const config = {
  name: "greeting-every-second",
  numberOfExecutions: 1,
  schedule: "* * * * * *",
}

defineFileConfig({
  isDisabled: () => !FeatureFlag.isFeatureEnabled("custom_ff"),
})
