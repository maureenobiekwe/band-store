import "./types"
import { SettingsModuleService } from "@/services"
import { Module } from "@band-store/framework/utils"
import { Modules } from "@band-store/utils"

export default Module(Modules.SETTINGS, {
  service: SettingsModuleService,
})

export * from "./utils"
