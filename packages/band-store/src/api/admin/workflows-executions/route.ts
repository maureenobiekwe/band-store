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
  req: Authenticatedband-storeRequest<HttpTypes.AdminGetWorkflowExecutionsParams>,
  res: BandStoreResponse<HttpTypes.AdminWorkflowExecutionListResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "workflow_execution",
    variables: {
      filters: req.filterableFields,
      ...req.queryConfig.pagination,
    },
    fields: req.queryConfig.fields,
  })

  const { rows: workflowExecutions, metadata } = await remoteQuery(queryObject)

  res.json({
    workflow_executions: workflowExecutions,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}
