import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { batchInventoryItemLevelsWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/types"

export const POST = async (
  req: BandStoreRequest<HttpTypes.AdminBatchInventoryItemLocationLevels>,
  res: BandStoreResponse
) => {
  const { id } = req.params

  const workflow = batchInventoryItemLevelsWorkflow(req.scope)
  const output = await workflow.run({
    input: {
      delete: req.validatedBody.delete ?? [],
      create:
        req.validatedBody.create?.map((c) => ({
          ...c,
          inventory_item_id: id,
        })) ?? [],
      update:
        req.validatedBody.update?.map((u) => ({
          ...u,
          inventory_item_id: id,
        })) ?? [],
      force: req.validatedBody.force ?? false,
    },
  })

  res.status(200).json({
    created: output.result.created,
    updated: output.result.updated,
    deleted: output.result.deleted,
  })
}
