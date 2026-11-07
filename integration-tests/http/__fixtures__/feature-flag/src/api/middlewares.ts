import {
  defineMiddlewares,
  validateAndTransformBody,
} from "@band-store/framework/http"
import { z } from "@band-store/framework/zod"

const CustomPostSchema = z.object({
  foo: z.string(),
})

export default defineMiddlewares({
  routes: [
    {
      method: ["POST"],
      matcher: "/custom",
      middlewares: [validateAndTransformBody(CustomPostSchema)],
    },
  ],
})
