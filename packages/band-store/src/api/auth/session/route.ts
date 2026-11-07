import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"

export const POST = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse
) => {
  req.session.auth_context = req.auth_context

  res.status(200).json({ user: req.auth_context })
}

export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse
) => {
  const { sessionOptions, cookieOptions } = req.scope
    .resolve(ContainerRegistrationKeys.CONFIG_MODULE)
    .projectConfig

  const cookieName = sessionOptions?.name ?? "connect.sid"

  try {
    await new Promise<void>((resolve, reject) => {
      req.session.destroy((err) => (err ? reject(err) : resolve()))
    })
  } finally {
    res.clearCookie(cookieName, cookieOptions)
  }

  res.json({ success: true })
}
