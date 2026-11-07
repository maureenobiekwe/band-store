import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
  refetchEntity,
} from "@band-store/framework/http"
import { BandStoreError } from "@band-store/framework/utils"
import { AdminClaimResponse, HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<{}, HttpTypes.SelectParams>,
  res: BandStoreResponse<AdminClaimResponse>
) => {
  const claim = await refetchEntity({
    entity: "order_claim",
    idOrFilter: req.params.id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  if (!claim) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Claim with id: ${req.params.id} was not found`
    )
  }

  res.status(200).json({ claim })
}
