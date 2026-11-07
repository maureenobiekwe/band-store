import type { IFulfillmentModuleService } from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { StepResponse, createStep } from "@band-store/framework/workflows-sdk"

/**
 * The IDs of the service zones to delete.
 */
export type DeleteServiceZonesStepInput = string[]

export const deleteServiceZonesStepId = "delete-service-zones"
/**
 * This step deletes one or more service zones.
 */
export const deleteServiceZonesStep = createStep(
  deleteServiceZonesStepId,
  async (ids: DeleteServiceZonesStepInput, { container }) => {
    const service = container.resolve<IFulfillmentModuleService>(
      Modules.FULFILLMENT
    )

    await service.softDeleteServiceZones(ids)

    return new StepResponse(void 0, ids)
  },
  async (prevIds, { container }) => {
    if (!prevIds?.length) {
      return
    }

    const service = container.resolve<IFulfillmentModuleService>(
      Modules.FULFILLMENT
    )

    await service.restoreServiceZones(prevIds)
  }
)
