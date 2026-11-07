import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { remapKeysForProduct } from "../helpers"
import { exportProductsWorkflow } from "@band-store/core-flows"

export const POST = async (
  req: AuthenticatedMedusaRequest<{}, HttpTypes.AdminProductExportParams>,
  res: BandStoreResponse<HttpTypes.AdminExportProductResponse>
) => {
  const selectFields = remapKeysForProduct(req.queryConfig.fields ?? [])
  const input = { select: selectFields, filter: req.filterableFields }

  const { transaction } = await exportProductsWorkflow(req.scope).run({
    input,
  })

  res.status(202).json({ transaction_id: transaction.transactionId })
}
