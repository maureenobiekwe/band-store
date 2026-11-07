import "@band-store/utils"
export * from "@band-store/types"

import type { ModuleOptions as ModuleOptionsType } from "@band-store/types"

// Re-declare ModuleOptions to enable augmentation from @band-store/framework/types
// EventBusEventsOptions is exported via "export *" and gets augmentations from @band-store/utils
export interface ModuleOptions extends ModuleOptionsType {}
