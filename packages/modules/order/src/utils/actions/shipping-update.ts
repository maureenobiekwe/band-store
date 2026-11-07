import { ChangeActionType, BandStoreError } from "@band-store/framework/utils"
import { OrderChangeProcessing } from "../calculate-order-change"

OrderChangeProcessing.registerActionType(ChangeActionType.SHIPPING_UPDATE, {
  operation({ action, currentOrder, options }) {
    // no-op
  },
  validate({ action }) {
    if (!action.reference_id) {
      throw new BandStoreError(
        BandStoreError.Types.INVALID_DATA,
        "Reference ID is required."
      )
    }
  },
})
