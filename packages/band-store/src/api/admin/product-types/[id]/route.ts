import {
  deleteProductTypesWorkflow,
  updateProductTypesWorkflow,
} from "@band-store/core-flows"
import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"

import { refetchProductType } from "../helpers"
import { HttpTypes } from "@band-store/framework/types"
import { BandStoreError } from "@band-store/framework/utils"

export const GET = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminProductTypeParams
  >,
  res: BandStoreResponse<HttpTypes.AdminProductTypeResponse>
) => {
  const productType = await refetchProductType(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ product_type: productType })
}

export const POST = async (
  req: Authenticatedband-storeRequest<
    HttpTypes.AdminUpdateProductType,
    HttpTypes.AdminProductTypeParams
  >,
  res: BandStoreResponse<HttpTypes.AdminProductTypeResponse>
) => {
  const existingProductType = await refetchProductType(
    req.params.id,
    req.scope,
    ["id"]
  )

  if (!existingProductType) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Product type with id "${req.params.id}" not found`
    )
  }

  const { result } = await updateProductTypesWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      update: req.validatedBody,
    },
  })

  const productType = await refetchProductType(
    result[0].id,
    req.scope,
    req.queryConfig.fields
  )

  res.status(200).json({ product_type: productType })
}

export const DELETE = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminProductTypeDeleteResponse>
) => {
  const id = req.params.id

  await deleteProductTypesWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "product_type",
    deleted: true,
  })
}
