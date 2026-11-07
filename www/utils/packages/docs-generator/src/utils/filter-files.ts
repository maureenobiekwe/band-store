import { minimatch } from "minimatch"

export default function (files: string[]): string[] {
  return files.filter((file) =>
    minimatch(
      file,
      "**/packages/@(bandStore|core/types|band-store-js|band-store-react)/src/**/*.@(ts|tsx|js|jsx)",
      {
        matchBase: true,
      }
    )
  )
}
