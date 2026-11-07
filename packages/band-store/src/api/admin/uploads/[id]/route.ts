import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { deleteFilesWorkflow } from "@band-store/core-flows"
import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetUploadParams>,
  res: BandStoreResponse<HttpTypes.AdminFileResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const variables = { id: req.params.id }

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "file",
    variables,
    fields: req.queryConfig.fields,
  })

  const [file] = await remoteQuery(queryObject)
  if (!file) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `File with id: ${req.params.id} not found`
    )
  }

  res.status(200).json({ file })
}

export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminFileDeleteResponse>
) => {
  const id = req.params.id

  await deleteFilesWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "file",
    deleted: true,
  })
}
