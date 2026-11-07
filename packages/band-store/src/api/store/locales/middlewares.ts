import { MiddlewareRoute } from "@band-store/framework/http"

export const storeLocalesRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/store/locales",
    middlewares: [],
  },
]
