import {
  ContainerRegistrationKeys,
  defineFileConfig,
  FeatureFlag,
} from "@band-store/framework/utils"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import TranslationFeatureFlag from "../../../feature-flags/translation"

/**
 * @since 2.12.3
 * @featureFlag translation
 */
export const GET = async (
  req: BandStoreRequest<HttpTypes.AdminLocaleListParams>,
  res: BandStoreResponse<HttpTypes.AdminLocaleListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: locales, metadata } = await query.graph(
    {
      entity: "locale",
      filters: req.filterableFields,
      fields: req.queryConfig.fields,
      pagination: req.queryConfig.pagination,
    },
    {
      cache: { enable: true },
    }
  )

  res.json({
    locales,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}

defineFileConfig({
  isDisabled: () => !FeatureFlag.isFeatureEnabled(TranslationFeatureFlag.key),
})
