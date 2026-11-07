import { ESLintUtils } from "@typescript-eslint/utils"

export interface BandStoreRuleDocs {
  description: string
  recommended?: boolean
  strict?: boolean
  requiresTypeChecking?: boolean
}

export const createRule = ESLintUtils.RuleCreator<BandStoreRuleDocs>(
  () => ""
)
