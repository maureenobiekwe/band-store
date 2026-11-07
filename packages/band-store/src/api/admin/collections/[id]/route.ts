import {
  deleteCollectionsWorkflow,
  updateCollectionsWorkflow,
} from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { AdditionalData, HttpTypes } from "@band-store/framework/types"
import { BandStoreError } from "@band-store/framework/utils"
import { refetchCollection } from "../helpers"
import { AdminUpdateCollectionType } from "../validators"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminCollectionParams>,
  res: BandStoreResponse<HttpTypes.AdminCollectionResponse>
) => {
  const collection = await refetchCollection(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ collection })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    AdminUpdateCollectionType & AdditionalData,
    HttpTypes.AdminCollectionParams
  >,
  res: BandStoreResponse<HttpTypes.AdminCollectionResponse>
) => {
  const existingCollection = await refetchCollection(req.params.id, req.scope, [
    "id",
  ])
  if (!existingCollection) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Collection with id "${req.params.id}" not found`
    )
  }

  const { additional_data, ...rest } = req.validatedBody

  await updateCollectionsWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      update: rest,
      additional_data,
    },
  })

  const collection = await refetchCollection(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ collection })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminCollectionDeleteResponse>
) => {
  const id = req.params.id

  await deleteCollectionsWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "collection",
    deleted: true,
  })
}
