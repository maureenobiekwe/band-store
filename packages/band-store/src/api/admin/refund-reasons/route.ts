import { createRefundReasonsWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
  refetchEntities,
  refetchEntity,
} from "@band-store/framework/http"
import {
  HttpTypes,
  PaginatedResponse,
  RefundReasonResponse,
  RefundReasonsResponse,
} from "@band-store/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.RefundReasonFilters>,
  res: BandStoreResponse<PaginatedResponse<RefundReasonsResponse>>
) => {
  const { data: refund_reasons, metadata } = await refetchEntities({
    entity: "refund_reasons",
    idOrFilter: req.filterableFields,
    scope: req.scope,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  })

  res.json({
    refund_reasons,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminCreateRefundReason,
    HttpTypes.AdminRefundReasonParams
  >,
  res: BandStoreResponse<RefundReasonResponse>
) => {
  const {
    result: [refundReason],
  } = await createRefundReasonsWorkflow(req.scope).run({
    input: { data: [req.validatedBody] },
  })

  const refund_reason = await refetchEntity({
    entity: "refund_reason",
    idOrFilter: refundReason.id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ refund_reason })
}
