// Runs ONLY the `@band-store/eslint-plugin` convention rules, using the scope and
// rules defined in the root `eslint.config.mjs`, so a run reports only BandStore
// rule violations. Used by the `lint:bandStore` script (and CI).
import root from "./eslint.config.mjs"

const isRuleless = (c) => !c.rules || Object.keys(c.rules).length === 0

const isband-storeBlock = (c) =>
  Object.keys(c.rules).every((rule) => rule.startsWith("@band-store/"))

export default root.filter((c) => isRuleless(c) || isband-storeBlock(c))
