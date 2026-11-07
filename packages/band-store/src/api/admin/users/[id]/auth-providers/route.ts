import {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework/http"
import { HttpTypes } from "@band-store/framework/types"
import { ContainerRegistrationKeys } from "@band-store/framework/utils"

/**
 * @since 2.20.0
 */
export const GET = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<HttpTypes.AdminUserAuthProvidersResponse>
) => {
  const { id } = req.params

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: authIdentities } = await query.graph({
    entity: "auth_identity",
    fields: ["provider_identities.provider"],
    filters: {
      app_metadata: {
        user_id: id,
      },
    },
  })

  const providers = authIdentities.flatMap(
    (authIdentity) =>
      authIdentity.provider_identities?.map(
        (providerIdentity) => providerIdentity.provider
      ) ?? []
  )

  res.status(200).json({ providers })
}
