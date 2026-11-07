import {
  AuthenticatedMedusaRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { BandStoreError } from "@band-store/framework/utils"
import {
  deleteReservationsWorkflow,
  updateReservationsWorkflow,
} from "@band-store/core-flows"
import { refetchReservation } from "../helpers"
import { HttpTypes } from "@band-store/framework/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminReservationParams
  >,
  res: BandStoreResponse<HttpTypes.AdminReservationResponse>
) => {
  const { id } = req.params

  const reservation = await refetchReservation(
    id,
    req.scope,
    req.queryConfig.fields
  )

  if (!reservation) {
    throw new BandStoreError(
      BandStoreError.Types.NOT_FOUND,
      `Reservation with id: ${id} was not found`
    )
  }

  res.status(200).json({ reservation })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<
    HttpTypes.AdminUpdateReservation,
    HttpTypes.AdminReservationParams
  >,
  res: BandStoreResponse<HttpTypes.AdminReservationResponse>
) => {
  const { id } = req.params
  await updateReservationsWorkflow(req.scope).run({
    input: {
      updates: [{ ...req.validatedBody, id }],
    },
  })

  const reservation = await refetchReservation(
    id,
    req.scope,
    req.queryConfig.fields
  )
  res.status(200).json({ reservation })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: BandStoreResponse<HttpTypes.AdminReservationDeleteResponse>
) => {
  const id = req.params.id

  await deleteReservationsWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "reservation",
    deleted: true,
  })
}
