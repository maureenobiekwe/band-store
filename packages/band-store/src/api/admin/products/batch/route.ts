import { batchProductsWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchBatchProducts, remapProductResponse } from "../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminBatchProductRequest,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.AdminBatchProductResponse>
) => {
  const { result } = await batchProductsWorkflow(req.scope).run({
    input: req.validatedBody,
  })

  const batchResults = await refetchBatchProducts(
    result,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({
    created: batchResults.created.map(remapProductResponse),
    updated: batchResults.updated.map(remapProductResponse),
    deleted: batchResults.deleted,
  })
}
