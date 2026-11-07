import "./types"
import { Module, Modules } from "@band-store/framework/utils"
import AnalyticsService from "./services/analytics-service"
import loadProviders from "./loaders/providers"

export default Module(Modules.ANALYTICS, {
  service: AnalyticsService,
  loaders: [loadProviders],
})
