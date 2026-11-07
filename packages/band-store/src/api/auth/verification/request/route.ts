import { requestVerificationWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { VerificationRequestType } from "../../validators"

/**
 * @since 2.16.0
 */
export const POST = async (
  req: Authenticatedband-storeRequest<VerificationRequestType>,
  res: BandStoreResponse
) => {
  const { entity_id, entity_type, code_provider, metadata } = req.validatedBody

  const { result } = await requestVerificationWorkflow(req.scope).run({
    input: {
      auth_identity_id: req.auth_context.auth_identity_id,
      entity_id,
      entity_type,
      code_provider,
      metadata,
    },
  })

  res.status(201).json({ verification: result })
}
