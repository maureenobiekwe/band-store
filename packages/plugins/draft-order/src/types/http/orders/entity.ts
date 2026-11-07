import { HttpTypes } from "@band-store/types"

export type AdminOrderPreviewLineItem = HttpTypes.AdminOrderLineItem & {
  actions?: HttpTypes.AdminOrderChangeAction[]
}
