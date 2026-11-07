import { BandStoreModule } from "@band-store/framework/modules-sdk"
import { ModuleJoinerConfig } from "@band-store/framework/types"
import { defineFileConfig, Modules } from "@band-store/framework/utils"

/**
 * Read-only link exposing the `rbac_roles` graph field on `User`, resolved
 * through the polymorphic `rbac_role_assignment` table. It joins
 * `User.id -> RbacRoleAssignment.reference_id` and shortcuts the assignment's
 * `role` relation, allowing the `fields=rbac_roles.*` query on users.
 */
export const UserRbacRoleAssignment: ModuleJoinerConfig = {
  isLink: true,
  isReadOnlyLink: true,
  extends: [
    {
      serviceName: Modules.USER,
      entity: "User",
      fieldAlias: {
        rbac_roles: {
          path: "user_role_assignments.role",
          isList: true,
        },
      },
      relationship: {
        serviceName: Modules.RBAC,
        entity: "RbacRoleAssignment",
        primaryKey: "reference_id",
        foreignKey: "id",
        alias: "user_role_assignments",
        isList: true,
      },
    },
  ],
}

defineFileConfig({
  isDisabled: () => !BandStoreModule.isInstalled(Modules.RBAC),
})
