import TelemetryDispatcher from "./telemetry-dispatcher"

const BAND_STORE_TELEMETRY_HOST = process.env.BAND_STORE_TELEMETRY_HOST || ""
const BAND_STORE_TELEMETRY_PATH = process.env.BAND_STORE_TELEMETRY_PATH || ""

const dispatcher = new TelemetryDispatcher({
  host: BAND_STORE_TELEMETRY_HOST,
  path: BAND_STORE_TELEMETRY_PATH,
})
dispatcher.dispatch()
