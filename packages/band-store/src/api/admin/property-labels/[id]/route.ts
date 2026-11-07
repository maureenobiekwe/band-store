import {
  deletePropertyLabelsWorkflow,
  updatePropertyLabelsWorkflow,
} from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import {
  ContainerRegistrationKeys,
  BandStoreError,
} from "@band-store/framework/utils"

/**
 * Get a property label by ID.
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminPropertyLabelResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { id } = req.params

  const {
    data: [propertyLabel],
  } = await query.graph({
    entity: "property_label",
    fields: req.queryConfig.fields,
    filters: { id },
  })

  if (!propertyLabel) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Property label with id: ${id} not found`
    )
  }

  res.json({ property_label: propertyLabel })
}

/**
 * Update a property label.
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const POST = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminUpdatePropertyLabel>,
  res: BandStoreResponse<HttpTypes.AdminPropertyLabelResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { id } = req.params
  const { label, description } = req.validatedBody

  await updatePropertyLabelsWorkflow(req.scope).run({
    input: {
      property_labels: [
        {
          id,
          label,
          description: description ?? undefined,
        },
      ],
    },
  })

  const {
    data: [propertyLabel],
  } = await query.graph({
    entity: "property_label",
    fields: req.queryConfig.fields,
    filters: { id },
  })

  res.json({ property_label: propertyLabel })
}

/**
 * Delete a property label.
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminPropertyLabelDeleteResponse>
) => {
  const { id } = req.params

  await deletePropertyLabelsWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "property_label",
    deleted: true,
  })
}
