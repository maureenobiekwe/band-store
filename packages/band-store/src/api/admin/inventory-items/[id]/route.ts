import { BandStoreError } from "@band-store/framework/utils"
import { BandStoreRequest, BandStoreResponse } from "@band-store/framework/http"
import {
  deleteInventoryItemWorkflow,
  updateInventoryItemsWorkflow,
} from "@band-store/core-flows"
import { refetchInventoryItem } from "../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: BandStoreRequest<HttpTypes.AdminGetInventoryItemParams>,
  res: BandStoreResponse<HttpTypes.AdminInventoryItemResponse>
) => {
  const { id } = req.params
  const inventoryItem = await refetchInventoryItem(
    id,
    req.scope,
    req.queryConfig.fields
  )
  if (!inventoryItem) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Inventory item with id: ${id} was not found`
    )
  }

  res.status(200).json({
    inventory_item: inventoryItem,
  })
}

// Update inventory item
export const POST = async (
  req: BandStoreRequest<
    HttpTypes.AdminUpdateInventoryItem,
    HttpTypes.AdminGetInventoryItemParams
  >,
  res: BandStoreResponse<HttpTypes.AdminInventoryItemResponse>
) => {
  const { id } = req.params

  await updateInventoryItemsWorkflow(req.scope).run({
    input: {
      updates: [{ id, ...req.validatedBody }],
    },
  })

  const inventoryItem = await refetchInventoryItem(
    id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({
    inventory_item: inventoryItem,
  })
}

export const DELETE = async (
  req: BandStoreRequest,
  res: BandStoreResponse<HttpTypes.AdminInventoryItemDeleteResponse>
) => {
  const id = req.params.id
  const deleteInventoryItems = deleteInventoryItemWorkflow(req.scope)

  await deleteInventoryItems.run({
    input: [id],
  })

  res.status(200).json({
    id,
    object: "inventory_item",
    deleted: true,
  })
}
