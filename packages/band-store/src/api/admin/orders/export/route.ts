import { exportOrdersWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

/**
 * @since 2.12.3
 */
export const POST = async (
  req: AuthenticatedMedusaRequest<{}, HttpTypes.AdminOrderFilters>,
  res: BandStoreResponse<HttpTypes.AdminExportOrderResponse>
) => {
  const selectFields = req.queryConfig.fields ?? []
  const input = { select: selectFields, filter: req.filterableFields }

  const { transaction } = await exportOrdersWorkflow(req.scope).run({
    input,
  })

  res.status(202).json({ transaction_id: transaction.transactionId })
}
