/* eslint-disable no-console */
import {
  generateEditedDates,
  generateLlmsIndex,
  generateSidebar,
  generateSitemapUrls,
  getMdxPagesLlmsLinks,
  copyMdxToPublic,
} from "build-scripts"
import { sidebar } from "../sidebar.mjs"
import path from "path"
import { copyFileSync } from "fs"
import { execSync } from "child_process"
import { fileURLToPath } from "url"
import { generateSpecsIndex } from "./generate-specs-index.mjs"

async function main() {
  generateSpecsIndex()
  await generateSidebar(sidebar)
  await generateEditedDates()
  await generateSitemapUrls()
  await generateLlmsIndex({
    title: "BandStore UI",
    description:
      "Documentation for BandStore UI, the React component library and design system used to build the BandStore Admin and its customizations.",
    sections: [
      {
        title: "Pages",
        links: getMdxPagesLlmsLinks({
          baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}${process.env.NEXT_PUBLIC_BASE_PATH || "/ui"}`,
        }),
      },
    ],
  })
  if (process.env.CLOUDFLARE_ENV) {
    await copyMdxToPublic({
      srcDir: path.join(process.cwd(), "app"),
      destDir: path.join(process.cwd(), "public", "raw-mdx"),
    })
  }

  // copy colors from the `@band-store/ui-preset` package
  const resolvedURL = import.meta.resolve("@band-store/ui-preset")
  const resolvedPath = fileURLToPath(resolvedURL)
  const originalPath = path.join(
    resolvedPath,
    "../..",
    "src/theme/tokens/colors.ts"
  )
  const newPath = path.resolve("config", "colors.ts")

  console.info(`Copying file from ${originalPath} to ${newPath}...`)

  copyFileSync(originalPath, newPath)

  console.info(`File copied successfully`)

  // fix possible eslint errors to avoid build errors
  console.info("Running ESLint...")

  execSync(`npx eslint ${newPath} --fix`)

  console.info("Finished ESLint process")
}

void main()
