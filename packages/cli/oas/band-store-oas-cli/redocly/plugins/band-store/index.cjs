const CircularPatch = require("./decorators/circular-patch.cjs")

const id = "band-store"

const decorators = {
  oas3: {
    "circular-patch": CircularPatch,
  },
}

module.exports = function bandStorePlugin() {
  return {
    id,
    decorators,
  }
}
