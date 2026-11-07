import { z } from "@band-store/framework/zod"

export const AdminIndexSyncPayload = z.object({
  strategy: z.enum(["full", "reset"]).optional(),
})
