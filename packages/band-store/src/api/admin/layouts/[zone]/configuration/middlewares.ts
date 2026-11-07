import { validateAndTransformBody } from "@band-store/framework"
import { MiddlewareRoute } from "@band-store/framework/http"
import { requireSuperAdmin } from "../../../utils/require-super-admin"
import { AdminSetLayoutConfiguration } from "./validators"

export const layoutConfigurationRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["POST"],
    matcher: "/admin/layouts/:zone/configuration",
    middlewares: [
      validateAndTransformBody(AdminSetLayoutConfiguration),
      // The default layout applies to every user.
      requireSuperAdmin(
        (req) => !!req.validatedBody.is_default,
        "Only super admins can manage the default layout configuration"
      ),
    ],
  },
]
