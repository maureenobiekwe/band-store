import {
  createWorkflow,
  WorkflowResponse,
} from "@band-store/framework/workflows-sdk"
import {
  setAuthAppMetadataStep,
  SetAuthAppMetadataStepInput,
} from "../steps/set-auth-app-metadata"

export const setAuthAppMetadataWorkflowId = "set-auth-app-metadata-workflow"
/**
 * This workflow sets the `app_metadata` property of an auth identity. This is useful to
 * associate a user (whether it's an admin user or customer) with an auth identity
 * that allows them to authenticate into band-store.
 *
 * You can learn more about auth identites in
 * this documentation.
 *
 * To use this for a custom actor type, check out this guide
 * that explains how to create a custom `manager` actor type and manage its users.
 *
 * @example
 * To associate an auth identity with an actor type (user, customer, or other actor types):
 *
 * ```ts
 * const { result } = await setAuthAppMetadataWorkflow(container).run({
 *   input: {
 *     authIdentityId: "au_1234",
 *     actorType: "user", // or `customer`, or custom type
 *     value: "user_123"
 *   }
 * })
 * ```
 *
 * To remove the association with an actor type, such as when deleting the user:
 *
 * ```ts
 * const { result } = await setAuthAppMetadataWorkflow(container).run({
 *   input: {
 *     authIdentityId: "au_1234",
 *     actorType: "user", // or `customer`, or custom type
 *     value: null
 *   }
 * })
 * ```
 */
export const setAuthAppMetadataWorkflow = createWorkflow(
  setAuthAppMetadataWorkflowId,
  (input: SetAuthAppMetadataStepInput) => {
    const authIdentity = setAuthAppMetadataStep(input)
    return new WorkflowResponse(authIdentity)
  }
)
