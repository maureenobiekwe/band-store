import { describe, it, expect } from "vitest"
import { npxToYarn } from "../npx-to-yarn.js"

describe("npxToYarn", () => {
  describe("yarn conversion", () => {
    it("should convert basic npx command to yarn", () => {
      const result = npxToYarn("npx bandStore db:migrate", "yarn")
      expect(result).toBe("yarn bandStore db:migrate")
    })

    it("should convert npx command with multiple arguments", () => {
      const result = npxToYarn("npx bandStore develop --port 9000", "yarn")
      expect(result).toBe("yarn bandStore develop --port 9000")
    })

    it("should convert npx command with flags", () => {
      const result = npxToYarn("npx bandStore user --email admin@test.com", "yarn")
      expect(result).toBe("yarn bandStore user --email admin@test.com")
    })

    it("should handle npx command with leading/trailing whitespace", () => {
      const result = npxToYarn("  npx bandStore db:migrate  ", "yarn")
      expect(result).toBe("yarn bandStore db:migrate")
    })

    it("should convert npx command to yarn dlx when isExecutable is true", () => {
      const result = npxToYarn("npx create-band-store-app@latest", "yarn", true)
      expect(result).toBe("yarn dlx create-band-store-app@latest")
    })

    it("should convert npx command to yarn when isExecutable is false", () => {
      const result = npxToYarn("npx bandStore db:migrate", "yarn", false)
      expect(result).toBe("yarn bandStore db:migrate")
    })
  })

  describe("pnpm conversion", () => {
    it("should convert basic npx command to pnpm", () => {
      const result = npxToYarn("npx bandStore db:migrate", "pnpm")
      expect(result).toBe("pnpm bandStore db:migrate")
    })

    it("should convert npx command with multiple arguments", () => {
      const result = npxToYarn("npx bandStore develop --port 9000", "pnpm")
      expect(result).toBe("pnpm bandStore develop --port 9000")
    })

    it("should convert npx command with flags", () => {
      const result = npxToYarn("npx bandStore user --email admin@test.com", "pnpm")
      expect(result).toBe("pnpm bandStore user --email admin@test.com")
    })

    it("should handle npx command with leading/trailing whitespace", () => {
      const result = npxToYarn("  npx bandStore db:migrate  ", "pnpm")
      expect(result).toBe("pnpm bandStore db:migrate")
    })

    it("should convert npx command to pnpm dlx when isExecutable is true", () => {
      const result = npxToYarn("npx create-band-store-app@latest", "pnpm", true)
      expect(result).toBe("pnpm dlx create-band-store-app@latest")
    })

    it("should convert npx command to pnpm when isExecutable is false", () => {
      const result = npxToYarn("npx bandStore db:migrate", "pnpm", false)
      expect(result).toBe("pnpm bandStore db:migrate")
    })
  })

  describe("edge cases", () => {
    it("should return original command if it does not start with npx", () => {
      const result = npxToYarn("npm install bandStore", "yarn")
      expect(result).toBe("npm install bandStore")
    })

    it("should handle command with only npx and package name", () => {
      const result = npxToYarn("npx bandStore", "yarn")
      expect(result).toBe("yarn bandStore")
    })

    it("should preserve command structure with special characters", () => {
      const result = npxToYarn("npx bandStore db:seed --file=./data.json", "pnpm")
      expect(result).toBe("pnpm bandStore db:seed --file=./data.json")
    })

    it("should handle command with path separators", () => {
      const result = npxToYarn("npx @band-store/band-store-cli develop", "yarn")
      expect(result).toBe("yarn @band-store/band-store-cli develop")
    })

    it("should handle multi-line commands with backslash continuation", () => {
      const multiLineCommand = `npx create-band-store-app@latest \\
  --db-url postgres://localhost/band-store \\
  --skip-db`
      const result = npxToYarn(multiLineCommand, "yarn", true)
      expect(result).toBe(`yarn dlx create-band-store-app@latest \\
  --db-url postgres://localhost/band-store \\
  --skip-db`)
    })

    it("should handle multi-line commands for pnpm", () => {
      const multiLineCommand = `npx bandStore develop \\
  --port 9000 \\
  --verbose`
      const result = npxToYarn(multiLineCommand, "pnpm")
      expect(result).toBe(`pnpm bandStore develop \\
  --port 9000 \\
  --verbose`)
    })

    it("should handle commands with newlines", () => {
      const commandWithNewlines = "npx create-band-store-app@latest\n  --db-url postgres://localhost/band-store"
      const result = npxToYarn(commandWithNewlines, "yarn", true)
      expect(result).toBe("yarn dlx create-band-store-app@latest\n  --db-url postgres://localhost/band-store")
    })

    it("should convert multiple npx commands on separate lines for yarn", () => {
      const multipleCommands = `npx bandStore db:migrate
npx bandStore develop`
      const result = npxToYarn(multipleCommands, "yarn")
      expect(result).toBe(`yarn bandStore db:migrate
yarn bandStore develop`)
    })

    it("should convert multiple npx commands on separate lines for pnpm", () => {
      const multipleCommands = `npx bandStore db:migrate
npx bandStore user --email admin@test.com
npx bandStore develop --port 9000`
      const result = npxToYarn(multipleCommands, "pnpm")
      expect(result).toBe(`pnpm bandStore db:migrate
pnpm bandStore user --email admin@test.com
pnpm bandStore develop --port 9000`)
    })

    it("should convert multiple npx commands with executable flag", () => {
      const multipleCommands = `npx create-band-store-app@latest
npx @band-store/band-store-cli init`
      const result = npxToYarn(multipleCommands, "yarn", true)
      expect(result).toBe(`yarn dlx create-band-store-app@latest
yarn dlx @band-store/band-store-cli init`)
    })

    it("should preserve indentation when converting multiple commands", () => {
      const indentedCommands = `npx bandStore db:migrate
  npx bandStore develop
    npx bandStore user`
      const result = npxToYarn(indentedCommands, "pnpm")
      expect(result).toBe(`pnpm bandStore db:migrate
  pnpm bandStore develop
    pnpm bandStore user`)
    })

    it("should handle mixed npx and non-npx lines", () => {
      const mixedCommands = `npx bandStore db:migrate
echo "Migration complete"
npx bandStore develop`
      const result = npxToYarn(mixedCommands, "yarn")
      expect(result).toBe(`yarn bandStore db:migrate
echo "Migration complete"
yarn bandStore develop`)
    })
  })
})
