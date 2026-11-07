import { uploadFilesWorkflow } from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { BandStoreError } from "@band-store/framework/utils"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: Authenticatedband-storeRequest<HttpTypes.AdminUploadFile>,
  res: BandStoreResponse<HttpTypes.AdminFileListResponse>
) => {
  const input = req.files as Express.Multer.File[]

  if (!input?.length) {
    throw new BandStoreError(
      BandStoreError.Types.INVALID_DATA,
      "No files were uploaded"
    )
  }

  const { result } = await uploadFilesWorkflow(req.scope).run({
    input: {
      files: input?.map((f) => ({
        filename: f.originalname,
        mimeType: f.mimetype,
        content: f.buffer.toString("base64"),
        access: "public",
      })),
    },
  })

  res.status(200).json({ files: result })
}
