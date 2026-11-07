import { HttpTypes } from "@band-store/framework/types"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { getRuleAttributesMap, validateRuleType } from "../../utils"
import {
  ApplicationMethodTargetTypeValues,
  ApplicationMethodTypeValues,
  PromotionTypeValues,
} from "@band-store/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetPromotionRuleParams>,
  res: BandStoreResponse<HttpTypes.AdminRuleAttributeOptionsListResponse>
) => {
  const { rule_type: ruleType } = req.params

  validateRuleType(ruleType)

  const attributes =
    getRuleAttributesMap({
      promotionType: req.query.promotion_type as PromotionTypeValues,
      applicationMethodType: req.query
        .application_method_type as ApplicationMethodTypeValues,
      applicationMethodTargetType: req.query
        .application_method_target_type as ApplicationMethodTargetTypeValues,
    })[ruleType] || []

  res.json({
    attributes,
  })
}
