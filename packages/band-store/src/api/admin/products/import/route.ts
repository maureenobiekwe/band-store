import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { BandStoreError } from "@band-store/framework/utils"
import { importProductsWorkflow } from "@band-store/core-flows"

/**
 * @deprecated use `POST /admin/products/imports` instead.
 */
export const POST = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminImportProductRequest>,
  res: BandStoreResponse<HttpTypes.AdminImportProductResponse>
) => {
  const input = req.file as Express.Multer.File

  if (!input) {
    throw new BandStoreError(
      BandStoreError.Types.INVALID_DATA,
      "No file was uploaded for importing"
    )
  }

  const { result, transaction } = await importProductsWorkflow(req.scope).run({
    input: {
      filename: input.originalname,
      fileContent: input.buffer.toString("utf-8"),
    },
  })

  res
    .status(202)
    .json({ transaction_id: transaction.transactionId, summary: result })
}
