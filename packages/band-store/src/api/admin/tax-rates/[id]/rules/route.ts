import { createTaxRateRulesWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchTaxRate } from "../../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminCreateTaxRateRule,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.AdminTaxRateResponse>
) => {
  await createTaxRateRulesWorkflow(req.scope).run({
    input: {
      rules: [
        {
          ...req.validatedBody,
          tax_rate_id: req.params.id,
          created_by: req.auth_context.actor_id,
        },
      ],
    },
  })

  const taxRate = await refetchTaxRate(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )
  res.status(200).json({ tax_rate: taxRate })
}
