import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { defineFileConfig, FeatureFlag } from "@band-store/utils"

defineFileConfig({
  isDisabled: () => !FeatureFlag.isFeatureEnabled("custom_ff"),
})

export const GET = async (req: BandStoreRequest, res: BandStoreResponse) => {
  res.json({ message: "Custom GET" })
}

export const POST = async (req: BandStoreRequest, res: BandStoreResponse) => {
  res.json({ message: "Custom POST", body: req.validatedBody })
}
