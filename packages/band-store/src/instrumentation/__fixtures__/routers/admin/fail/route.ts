import { BandStoreError } from "@band-store/framework/utils"
import { Request, Response } from "express"

export function GET(req: Request, res: Response) {
  throw new BandStoreError(BandStoreError.Types.INVALID_DATA, "Failed")
}
