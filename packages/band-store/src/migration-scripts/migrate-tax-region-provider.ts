import { updateTaxRegionsStep, useQueryGraphStep } from "@band-store/core-flows"
import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { ExecArgs } from "@band-store/framework/types"
import { ContainerRegistrationKeys, Modules } from "@band-store/framework/utils"
import { createWorkflow, transform, WorkflowResponse } from "@band-store/framework/workflows-sdk"

const assignSystemProviderToTaxRegionsWorkflow = createWorkflow(
  "assign-system-provider-to-tax-regions",
  () => {
    const { data: taxRegions } = useQueryGraphStep({
      entity: "tax_region",
      fields: ["id", "provider_id", "province_code"],
    })

    const updateData = transform({ taxRegions }, ({ taxRegions }) => {
      /**
       * Update only parent regions that don't have a provider set.
       */
      return taxRegions
        .filter(
          (taxRegion) => !taxRegion.province_code && !taxRegion.provider_id
        )
        .map((taxRegion) => ({
          id: taxRegion.id,
          provider_id: "tp_system",
        }))
    })

    updateTaxRegionsStep(updateData)

    return new WorkflowResponse(void 0)
  }
)

export default async function assignTaxSystemProviderToTaxRegions({
  container,
}: ExecArgs) {
  if (!BandStoreModule.isInstalled(Modules.TAX)) {
    return
  }

  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)

  logger.info("Assigning tax system provider to tax regions")

  try {
    await assignSystemProviderToTaxRegionsWorkflow(container).run()
    logger.info("System provider assigned to tax regions")
  } catch (e) {
    logger.error(e)
    throw e
  }
}
