import { cancelReturnWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { AdminPostCancelReturnReqSchemaType } from "../../validators"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminPostCancelReturnReqSchemaType>,
  res: BandStoreResponse<HttpTypes.AdminReturnResponse>
) => {
  const { id } = req.params

  const workflow = cancelReturnWorkflow(req.scope)
  const { result } = await workflow.run({
    input: {
      ...req.validatedBody,
      return_id: id,
    },
  })

  res.status(200).json({ return: result as HttpTypes.AdminReturn })
}
