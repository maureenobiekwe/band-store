import { HttpTypes } from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"

export const GET = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetWorkflowExecutionDetailsParams>,
  res: BandStoreResponse<HttpTypes.AdminWorkflowExecutionResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const variables = { id: req.params.id }

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "workflow_execution",
    variables,
    fields: req.queryConfig.fields,
  })

  const [workflowExecution] = await remoteQuery(queryObject)
  res.status(200).json({ workflow_execution: workflowExecution })
}
