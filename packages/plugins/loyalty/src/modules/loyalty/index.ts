import { Module } from "@band-store/framework/utils";
import { PluginModule } from "../../types";
import LoyaltyModuleService from "./service";

export default Module(PluginModule.LOYALTY, {
  service: LoyaltyModuleService,
});
