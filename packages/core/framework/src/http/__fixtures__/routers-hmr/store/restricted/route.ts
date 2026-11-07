import { BandStoreRequest, BandStoreResponse } from "../../../../types"

export const GET = async (req: BandStoreRequest, res: BandStoreResponse) => {
  res.json({
    allowed: req.allowed,
    restrictedFields: req.restrictedFields?.list(),
    storeRelationsLimit: req.storeRelationsLimit,
  })
}
