import {
  deleteApiKeysWorkflow,
  updateApiKeysWorkflow,
} from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { refetchApiKey } from "../helpers"
import { BandStoreError } from "@band-store/framework/utils"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminGetApiKeyParams>,
  res: BandStoreResponse<HttpTypes.AdminApiKeyResponse>
) => {
  const apiKey = await refetchApiKey(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  if (!apiKey) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `API Key with id: ${req.params.id} was not found`
    )
  }

  res.status(200).json({ api_key: apiKey })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminUpdateApiKey,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.AdminApiKeyResponse>
) => {
  await updateApiKeysWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      update: req.validatedBody,
    },
  })

  const apiKey = await refetchApiKey(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ api_key: apiKey })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminApiKeyDeleteResponse>
) => {
  const id = req.params.id

  await deleteApiKeysWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "api_key",
    deleted: true,
  })
}
