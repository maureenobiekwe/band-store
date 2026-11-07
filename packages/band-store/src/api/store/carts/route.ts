import { createCartWorkflow } from "@band-store/core-flows"
import {
  AdditionalData,
  CreateCartWorkflowInputDTO,
  HttpTypes,
} from "@band-store/framework/types"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchCart } from "./helpers"

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.StoreCreateCart & AdditionalData,
    HttpTypes.SelectParams
  >,
  res: BandStoreResponse<HttpTypes.StoreCartResponse>
) => {
  const workflowInput = {
    ...req.validatedBody,
    customer_id: req.auth_context?.actor_id,
  }

  const { result } = await createCartWorkflow(req.scope).run({
    input: workflowInput as CreateCartWorkflowInputDTO,
  })

  const cart = await refetchCart(result.id, req.scope, req.queryConfig.fields)

  res.status(200).json({ cart })
}
