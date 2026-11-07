import { batchInventoryItemLevelsWorkflow } from "@band-store/core-flows"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework"
import { HttpTypes } from "@band-store/types"

export const POST = async (
  req: BandStoreRequest<HttpTypes.AdminBatchInventoryItemsLocationLevels>,
  res: BandStoreResponse<HttpTypes.AdminBatchInventoryItemsLocationLevelsResponse>
) => {
  const body = req.validatedBody

  const output = await batchInventoryItemLevelsWorkflow(req.scope).run({
    input: body,
  })

  res.json({
    created: output.result.created as HttpTypes.AdminInventoryLevel[],
    updated: output.result.updated as HttpTypes.AdminInventoryLevel[],
    deleted: output.result.deleted,
  })
}
