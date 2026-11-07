import type { ZodNullable, ZodObject, ZodOptional } from "@band-store/deps/zod"
import type { NextFunction, Request, Response } from "express"

import type { FindConfig, BandStoreContainer, RequestQueryFields } from "./common"
import type { BandStorePricingContext } from "./pricing"
import type { RbacContext } from "./rbac"

/**
 * The fields restricted from being selected in the response. Implemented by the
 * `RestrictedFields` class in `@band-store/framework/http`, which is what
 * populates {@link BandStoreRequest.restrictedFields}.
 */
export interface RestrictedFieldsSet {
  list(): string[]
  add(fields: string[]): void
}

export interface BandStoreRequest<
  Body = unknown,
  QueryFields = Record<string, unknown>
> extends Request<{ [key: string]: string }, any, Body> {
  validatedBody: Body
  validatedQuery: RequestQueryFields & QueryFields
  /**
   * TODO: shouldn't this correspond to returnable fields instead of allowed fields? also it is used by the cleanResponseData util
   */
  allowedProperties: string[]
  /**
   * An object containing the select, relation, skip, take and order to be used with bandStore internal services
   */
  listConfig: FindConfig<unknown>
  /**
   * An object containing the select, relation to be used with bandStore internal services
   */
  retrieveConfig: FindConfig<unknown>

  /**
   * An object containing fields and variables to be used with the remoteQuery
   *
   * @since 2.2.0
   */
  queryConfig: {
    fields: string[]
    pagination: { order?: Record<string, string>; skip: number; take?: number }
    withDeleted?: boolean
  }

  /**
   * @deprecated Use {@link queryConfig} instead.
   */
  remoteQueryConfig: BandStoreRequest["queryConfig"]

  /**
   * An object containing the fields that are filterable e.g `{ id: Any<String> }`
   */
  filterableFields: QueryFields
  includes?: Record<string, boolean>

  /**
   * An array of fields and relations that are allowed to be queried, this can be set by the
   * consumer as part of a middleware and it will take precedence over the req.allowed set
   * by the api
   *
   * Initialized per request, so add to it with `req.allowed.push(field)` — several
   * middlewares can each contribute that way. Reassigning the array discards what other
   * middlewares granted. To disallow an allowed field use {@link disallowed}, which is
   * applied after this list.
   */
  allowed: string[]
  /**
   * An array of fields and relations that must never be resolved, this can be set by the
   * consumer as part of a global middleware and it replaces the disallowed fields
   * configured by the route's query configuration
   *
   * Since disallowed fields are a security boundary that keeps sensitive relations off an
   * endpoint, set this to the route's configured fields minus the ones you need, rather
   * than to a short list of your own. An empty array removes the boundary entirely.
   *
   * @since v2.21.0
   */
  disallowed?: (string | RegExp)[]
  errors: string[]
  scope: BandStoreContainer
  session?: any
  rawBody?: any
  requestId?: string

  restrictedFields?: RestrictedFieldsSet

  /**
   * The maximum number of relations that can be expanded by the request. It is only set for
   * routes under the `/store` prefix, and can be overridden by a route's query configuration.
   *
   * @since v2.20.0
   */
  storeRelationsLimit?: number

  /**
   * An object that carries the context that is used to calculate prices for variants
   */
  pricingContext?: BandStorePricingContext
  /**
   * A generic context object that can be used across the request lifecycle
   */
  context?: Record<string, any>

  /**
   * Custom validator to validate the `additional_data` property in
   * requests that allows for additional_data
   */
  additionalDataValidator?: ZodOptional<ZodNullable<ZodObject<any, any>>>

  /**
   * The locale for the current request, resolved from:
   * 1. Query parameter `?locale=`
   * 2. x-band-store-locale header
   * 3. Store's default locale
   */
  locale?: string
}

export interface AuthContext {
  actor_id: string
  actor_type: string
  auth_identity_id: string
  auth_provider?: string
  app_metadata: Record<string, unknown>
  user_metadata: Record<string, unknown>
  entity_id?: string
  purpose?: string
  jti?: string
  /**
   * Whether the auth identity had an enabled MFA factor when the token was issued.
   */
  mfa_enabled?: boolean
  /**
   * When the MFA challenge was completed, or null when it has not been. Routes
   * can require a recent completion to gate elevated actions.
   */
  mfa_challenge_completed_at?: string | null
}

export interface PublishableKeyContext {
  key: string
  sales_channel_ids: string[]
}

export interface SecretKeyContext {
  created_by: string
}

export interface AuthenticatedMedusaRequest<
  Body = unknown,
  QueryFields = Record<string, unknown>
> extends BandStoreRequest<Body, QueryFields> {
  auth_context: AuthContext
  publishable_key_context?: PublishableKeyContext
  secret_key_context?: SecretKeyContext
  rbac_context?: RbacContext
}

export interface BandStoreStoreRequest<
  Body = unknown,
  QueryFields = Record<string, unknown>
> extends BandStoreRequest<Body, QueryFields> {
  auth_context?: AuthContext
  publishable_key_context: PublishableKeyContext
}

export type BandStoreResponse<Body = unknown> = Response<Body>

export type BandStoreNextFunction = NextFunction

export type BandStoreRequestHandler<Body = unknown, Res = unknown> = (
  req: BandStoreRequest<Body>,
  res: BandStoreResponse<Res>,
  next: BandStoreNextFunction
) => Promise<void> | void
