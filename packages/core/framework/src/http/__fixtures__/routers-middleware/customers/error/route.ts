import { Request, Response } from "express"
import { BandStoreError } from "@band-store/utils"

export const GET = async (req: Request, res: Response) => {
  throw new BandStoreError(BandStoreError.Types.NOT_ALLOWED, "Not allowed")
}
