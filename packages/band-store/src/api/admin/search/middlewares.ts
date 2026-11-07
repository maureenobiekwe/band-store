import { validateAndTransformQuery } from "@band-store/framework"
import { MiddlewareRoute } from "@band-store/framework/http"
import { authenticate } from "../../../utils/middlewares/authenticate-middleware"
import { AdminGetSearchParams } from "./validators"

export const adminSearchRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/search",
    middlewares: [
      authenticate("user", ["session", "bearer", "api-key"]),
      validateAndTransformQuery(AdminGetSearchParams, {
        isList: true,
        defaultLimit: 20,
      }),
    ],
  },
]
