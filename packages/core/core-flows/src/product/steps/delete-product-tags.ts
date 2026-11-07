import type { IProductModuleService } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { StepResponse, createStep } from "@band-store/framework/workflows-sdk"

/**
 * The IDs of the product tags to delete.
 */
export type DeleteProductTagsStepInput = string[]

export const deleteProductTagsStepId = "delete-product-tags"
/**
 * This step deletes one or more product tags.
 */
export const deleteProductTagsStep = createStep(
  deleteProductTagsStepId,
  async (ids: DeleteProductTagsStepInput, { container }) => {
    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    await service.softDeleteProductTags(ids)
    return new StepResponse(void 0, ids)
  },
  async (prevIds, { container }) => {
    if (!prevIds?.length) {
      return
    }

    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    await service.restoreProductTags(prevIds)
  }
)
