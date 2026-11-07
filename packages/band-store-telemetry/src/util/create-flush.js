import { join } from "path"
import { fork } from "child_process"
import isTruthy from "./is-truthy"

const BAND_STORE_TELEMETRY_VERBOSE = process.env.BAND_STORE_TELEMETRY_VERBOSE || false

function createFlush(enabled) {
  if (!enabled) {
    return
  }

  return async function flush() {
    if (isTruthy(BAND_STORE_TELEMETRY_VERBOSE)) {
      console.log("Flushing queue...")
    }

    const forked = fork(join(__dirname, `send.js`), {
      detached: true,
      stdio: BAND_STORE_TELEMETRY_VERBOSE ? `inherit` : `ignore`,
      execArgv: [],
    })
    forked.unref()
  }
}

export default createFlush
