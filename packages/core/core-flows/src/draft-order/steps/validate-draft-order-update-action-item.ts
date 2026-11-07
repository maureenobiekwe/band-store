import type { OrderChangeActionDTO } from "@band-store/framework/types"

import { ChangeActionType, BandStoreError } from "@band-store/framework/utils"
import { createStep } from "@band-store/framework/workflows-sdk"
import type { OrderChangeDTO, OrderWorkflow } from "@band-store/framework/types"

/**
 * The details of the draft order and its change to validate.
 */
export interface ValidateDraftOrderUpdateActionItemStepInput {
  /**
   * The details of updating a new item in a draft order edit.
   */
  input: OrderWorkflow.UpdateOrderEditAddNewItemWorkflowInput
  /**
   * The order change to validate.
   */
  orderChange: OrderChangeDTO
}

/**
 * This step validates that a new item can be updated in a draft order edit. It throws an error if the
 * item change is not in the draft order edit, or if the item change is not adding an item.
 *
 * :::note
 *
 * You can retrieve a draft order change's details using Query,
 * or useQueryGraphStep.
 *
 * :::
 *
 * @example
 * const data = validateDraftOrderUpdateActionItemStep({
 *   input: {
 *     action_id: "action_123",
 *     order_id: "order_123",
 *   },
 *   orderChange: {
 *     id: "orch_123",
 *     // other order change details...
 *   }
 * })
 */
export const validateDraftOrderUpdateActionItemStep = createStep(
  "validate-draft-order-update-action-item",
  async function ({
    input,
    orderChange,
  }: ValidateDraftOrderUpdateActionItemStepInput) {
    const associatedAction = (orderChange.actions ?? []).find(
      (a) => a.id === input.action_id
    ) as OrderChangeActionDTO

    if (!associatedAction) {
      throw new BandStoreError(
        BandStoreError.Types.INVALID_DATA,
        `No request to add item for order ${input.order_id} in order change ${orderChange.id}`
      )
    }

    if (associatedAction.action !== ChangeActionType.ITEM_ADD) {
      throw new BandStoreError(
        BandStoreError.Types.INVALID_DATA,
        `Action ${associatedAction.id} is not adding an item`
      )
    }
  }
)
