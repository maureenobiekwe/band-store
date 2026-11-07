import { exportInventoryItemsWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: Authenticatedband-storeRequest<{}, HttpTypes.AdminInventoryItemExportParams>,
  res: BandStoreResponse<HttpTypes.AdminExportInventoryItemResponse>
) => {
  const input = {
    select: req.queryConfig.fields ?? [],
    filter: req.filterableFields,
  }

  const { transaction } = await exportInventoryItemsWorkflow(req.scope).run({
    input,
  })

  res.status(202).json({ transaction_id: transaction.transactionId })
}
