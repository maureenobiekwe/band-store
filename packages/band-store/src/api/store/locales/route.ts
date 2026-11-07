import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import {
  ContainerRegistrationKeys,
  defineFileConfig,
  FeatureFlag,
} from "@band-store/framework/utils"
import { HttpTypes } from "@band-store/framework/types"
import TranslationFeatureFlag from "../../../feature-flags/translation"

/**
 * @since 2.12.3
 * @featureFlag translation
 */
export const GET = async (
  req: BandStoreRequest,
  res: BandStoreResponse<HttpTypes.StoreLocaleListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [store],
  } = await query.graph({
    entity: "store",
    fields: ["supported_locales.*", "supported_locales.locale.*"],
    pagination: {
      take: 1,
    },
  })

  const locales = store?.supported_locales.reduce((acc, locale) => {
    acc.push({
      code: locale.locale_code,
      name: locale.locale.name,
    })
    return acc
  }, [])

  res.json({
    locales,
  })
}

defineFileConfig({
  isDisabled: () => !FeatureFlag.isFeatureEnabled(TranslationFeatureFlag.key),
})
