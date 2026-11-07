import { validateAndTransformBody } from "@band-store/framework"
import { authenticate, MiddlewareRoute } from "@band-store/framework/http"
import { StoreSearch } from "./validators"

export const storeSearchRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["POST"],
    matcher: "/store/search",
    middlewares: [
      authenticate("customer", ["session", "bearer"], {
        allowUnauthenticated: true,
      }),
      validateAndTransformBody(StoreSearch),
    ],
  },
]
