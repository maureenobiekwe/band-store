import {
  deleteTaxRatesWorkflow,
  updateTaxRatesWorkflow,
} from "@band-store/core-flows"
import {
  ContainerRegistrationKeys,
  BandStoreError,
  remoteQueryObjectFromString,
} from "@band-store/framework/utils"
import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { refetchTaxRate } from "../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminUpdateTaxRate,
    HttpTypes.AdminGetTaxRateParams
  >,
  res: BandStoreResponse<HttpTypes.AdminTaxRateResponse>
) => {
  const existingTaxRate = await refetchTaxRate(req.params.id, req.scope, ["id"])

  if (!existingTaxRate) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Tax rate with id "${req.params.id}" not found`
    )
  }

  await updateTaxRatesWorkflow(req.scope).run({
    input: {
      selector: { id: req.params.id },
      update: { ...req.validatedBody, updated_by: req.auth_context.actor_id },
    },
  })

  const taxRate = await refetchTaxRate(
    req.params.id,
    req.scope,
    req.queryConfig.fields
  )
  res.status(200).json({ tax_rate: taxRate })
}

export const GET = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminGetTaxRateParams
  >,
  res: BandStoreResponse<HttpTypes.AdminTaxRateResponse>
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)
  const variables = { id: req.params.id }

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "tax_rate",
    variables,
    fields: req.queryConfig.fields,
  })

  const [taxRate] = await remoteQuery(queryObject)
  res.status(200).json({ tax_rate: taxRate })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminTaxRateDeleteResponse>
) => {
  const id = req.params.id
  await deleteTaxRatesWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "tax_rate",
    deleted: true,
  })
}
