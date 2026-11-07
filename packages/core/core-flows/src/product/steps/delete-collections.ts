import type { IProductModuleService } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { StepResponse, createStep } from "@band-store/framework/workflows-sdk"

/**
 * The IDs of the collections to delete.
 */
export type DeleteCollectionsStepInput = string[]

export const deleteCollectionsStepId = "delete-collections"
/**
 * This step deletes one or more collections.
 */
export const deleteCollectionsStep = createStep(
  deleteCollectionsStepId,
  async (ids: DeleteCollectionsStepInput, { container }) => {
    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    await service.softDeleteProductCollections(ids)
    return new StepResponse(void 0, ids)
  },
  async (prevIds, { container }) => {
    if (!prevIds?.length) {
      return
    }

    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    await service.restoreProductCollections(prevIds)
  }
)
