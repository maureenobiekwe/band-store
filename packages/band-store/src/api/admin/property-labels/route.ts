import { createPropertyLabelsWorkflow } from "@band-store/core-flows"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"

/**
 * List property labels.
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const GET = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminPropertyLabelListParams>,
  res: BandStoreResponse<HttpTypes.AdminPropertyLabelListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: labels, metadata } = await query.graph({
    entity: "property_label",
    fields: req.queryConfig.fields,
    filters: req.filterableFields,
    pagination: req.queryConfig.pagination,
  })

  res.json({
    property_labels: labels,
    count: metadata?.count ?? 0,
    offset: metadata?.skip ?? 0,
    limit: metadata?.take ?? 0,
  })
}

/**
 * Create a property label.
 * @since 2.10.3
 * @featureFlag view_configurations
 */
export const POST = async (
  req: AuthenticatedMedusaRequest<HttpTypes.AdminCreatePropertyLabel>,
  res: BandStoreResponse<HttpTypes.AdminPropertyLabelResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { entity, property, label, description } = req.validatedBody

  const { result } = await createPropertyLabelsWorkflow(req.scope).run({
    input: {
      property_labels: [
        {
          entity,
          property,
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
    filters: { id: result[0].id },
  })

  res.status(201).json({ property_label: propertyLabel })
}
