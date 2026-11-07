import { createAndCompleteReturnOrderWorkflow } from "@band-store/core-flows"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"

/**
 * This API route is intentionally unauthenticated as the order ID is a UUID that requires brute forcing to
 * gain access to. The order ID is used as the authentication mechanism to ensure that only the customer with the order ID can create the return for the order.
 *
 * To restrict access to this route, follow this guide.
 *
 * @since 2.8.0
 */
export const POST = async (
  req: BandStoreRequest<HttpTypes.StoreCreateReturn>,
  res: BandStoreResponse<HttpTypes.StoreReturnResponse>
) => {
  const input = req.validatedBody as HttpTypes.StoreCreateReturn

  const workflow = createAndCompleteReturnOrderWorkflow(req.scope)
  const { result } = await workflow.run({
    input,
  })

  res.status(200).json({ return: result as HttpTypes.StoreReturn })
}
