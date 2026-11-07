import {
  ContainerRegistrationKeys,
  defineFileConfig,
  FeatureFlag,
  BandStoreError,
} from "@band-store/framework/utils"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import TranslationFeatureFlag from "../../../../feature-flags/translation"

/**
 * @since 2.12.3
 * @featureFlag translation
 */
export const GET = async (
  req: BandStoreRequest<HttpTypes.AdminLocaleParams>,
  res: BandStoreResponse<HttpTypes.AdminLocaleResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [locale],
  } = await query.graph(
    {
      entity: "locale",
      filters: {
        code: req.params.code,
      },
      fields: req.queryConfig.fields,
    },
    {
      cache: { enable: true },
    }
  )

  if (!locale) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Locale with code: ${req.params.code} was not found`
    )
  }

  res.status(200).json({ locale })
}

defineFileConfig({
  isDisabled: () => !FeatureFlag.isFeatureEnabled(TranslationFeatureFlag.key),
})
