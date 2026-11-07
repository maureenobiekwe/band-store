import { FeatureFlag, defineFileConfig } from "@band-store/framework/utils"
import { Migration } from "@band-store/framework/mikro-orm/migrations"

defineFileConfig({
  isDisabled: () => !FeatureFlag.isFeatureEnabled("custom_ff"),
})

export class MigrationTest extends Migration {
  override async up(): Promise<void> {}

  override async down(): Promise<void> {}
}
