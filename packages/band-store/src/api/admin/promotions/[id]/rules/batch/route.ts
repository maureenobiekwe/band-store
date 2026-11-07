import { batchPromotionRulesWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { BatchMethodRequest, HttpTypes } from "@band-store/framework/types"
import { RuleType } from "@band-store/framework/utils"
import { refetchBatchRules } from "../../../helpers"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    BatchMethodRequest<
      HttpTypes.AdminCreatePromotionRule,
      HttpTypes.AdminUpdatePromotionRule
    >,
    HttpTypes.AdminGetPromotionRuleParams
  >,
  res: BandStoreResponse<HttpTypes.AdminPromotionRuleBatchResponse>
) => {
  const id = req.params.id
  const { result } = await batchPromotionRulesWorkflow(req.scope).run({
    input: {
      id,
      rule_type: RuleType.RULES,
      create: req.validatedBody.create,
      update: req.validatedBody.update,
      delete: req.validatedBody.delete,
    },
  })

  const batchResults = await refetchBatchRules(
    result,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json(batchResults)
}
