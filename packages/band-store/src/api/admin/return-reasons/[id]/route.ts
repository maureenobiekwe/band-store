import {
  deleteReturnReasonsWorkflow,
  updateReturnReasonsWorkflow,
} from "@band-store/core-flows"
import { AdminReturnReasonResponse, HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
  refetchEntity,
} from "@band-store/framework/http"

export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminReturnReasonParams>,
  res: BandStoreResponse<AdminReturnReasonResponse>
) => {
  const return_reason = await refetchEntity({
    entity: "return_reason",
    idOrFilter: req.params.id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  if (!return_reason) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Return reason with id: ${req.params.id} was not found`
    )
  }

  res.json({ return_reason })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminUpdateReturnReason,
    HttpTypes.AdminReturnReasonParams
  >,
  res: BandStoreResponse<AdminReturnReasonResponse>
) => {
  const workflow = updateReturnReasonsWorkflow(req.scope)

  const { id } = req.params
  const input = {
    selector: { id },
    update: req.validatedBody,
  }

  const { result } = await workflow.run({ input })

  const variables = { id: result[0].id }

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "return_reason",
    variables,
    fields: req.queryConfig.fields,
  })

  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const [return_reason] = await remoteQuery(queryObject)

  res.json({ return_reason })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminReturnReasonDeleteResponse>
) => {
  const { id } = req.params

  const workflow = deleteReturnReasonsWorkflow(req.scope)

  const input = {
    ids: [id],
  }
  await workflow.run({ input })

  res.json({
    id,
    object: "return_reason",
    deleted: true,
  })
}
