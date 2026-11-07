import {
  deleteProductTagsWorkflow,
  updateProductTagsWorkflow,
} from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
  refetchEntity,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { BandStoreError } from "@band-store/framework/utils"

export const GET = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminProductTagParams
  >,
  res: BandStoreResponse<HttpTypes.AdminProductTagResponse>
) => {
  const productTag = await refetchEntity({
    entity: "product_tag",
    idOrFilter: req.params.id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ product_tag: productTag })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminUpdateProductTag,
    HttpTypes.AdminProductTagParams
  >,
  res: BandStoreResponse<HttpTypes.AdminProductTagResponse>
) => {
  const existingProductTag = await refetchEntity({
    entity: "product_tag",
    idOrFilter: req.params.id,
    scope: req.scope,
    fields: ["id"],
  })

  if (!existingProductTag) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Product tag with id "${req.params.id}" not found`
    )
  }

  const { result } = await updateProductTagsWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      update: req.validatedBody,
    },
  })

  const productTag = await refetchEntity({
    entity: "product_tag",
    idOrFilter: result[0].id,
    scope: req.scope,
    fields: req.queryConfig.fields,
  })

  res.status(200).json({ product_tag: productTag })
}

export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminProductTagDeleteResponse>
) => {
  const id = req.params.id

  await deleteProductTagsWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "product_tag",
    deleted: true,
  })
}
