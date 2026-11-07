import { allowFields, defineMiddlewares } from "@band-store/framework/http"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/store/carts/:id",
      middlewares: [allowFields("region.created_at")],
    },
  ],
})
