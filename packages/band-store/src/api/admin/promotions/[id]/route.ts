import {
  deletePromotionsWorkflow,
  updatePromotionsWorkflow,
} from "@band-store/core-flows"
import {
  ContainerRegistrationKeys,
  BandStoreError,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchPromotion } from "../helpers"
import { AdditionalData, HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetPromotionParams>,
  res: BandStoreResponse<HttpTypes.AdminPromotionResponse>
) => {
  const idOrCode = req.params.id
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const queryObject = remoteQueryObjectFromString({
    entryPoint: "promotion",
    variables: {
      filters: { $or: [{ id: idOrCode }, { code: idOrCode }] },
    },
    fields: req.queryConfig.fields,
  })

  const [promotion] = await remoteQuery(queryObject)
  if (!promotion) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Promotion with id or code: ${idOrCode} was not found`
    )
  }

  res.status(200).json({ promotion })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminUpdatePromotion & AdditionalData,
    HttpTypes.AdminGetPromotionParams
  >,
  res: BandStoreResponse<HttpTypes.AdminPromotionResponse>
) => {
  const { additional_data, ...rest } = req.validatedBody
  const updatePromotions = updatePromotionsWorkflow(req.scope)
  const promotionsData = [
    {
      id: req.params.id,
      ...rest,
    } as any,
  ]

  await updatePromotions.run({
    input: { promotionsData, additional_data },
  })

  const promotion = await refetchPromotion(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ promotion })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminPromotionDeleteResponse>
) => {
  const id = req.params.id
  const deletePromotions = deletePromotionsWorkflow(req.scope)

  await deletePromotions.run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "promotion",
    deleted: true,
  })
}
