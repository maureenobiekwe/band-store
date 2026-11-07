import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    // `@band-store/dashboard`
    app: "./src/app.tsx",
    // `@band-store/dashboard/components`
    components: "./src/exports/components.tsx",
    // `@band-store/dashboard/hooks`
    hooks: "./src/exports/hooks.ts",
    // `@band-store/dashboard/lib`
    lib: "./src/exports/lib.ts",
  },
  format: ["cjs", "esm"],
  external: [
    "virtual:band-store/forms",
    "virtual:band-store/displays",
    "virtual:band-store/routes",
    "virtual:band-store/links",
    "virtual:band-store/menu-items",
    "virtual:band-store/widgets",
    "virtual:band-store/i18n",
    "virtual:band-store/cell-renderers",
    "virtual:band-store/layouts",
    "virtual:band-store/search-entities",
  ],
  tsconfig: "tsconfig.build.json",
  dts: {
    entry: {
      index: "./src/index.ts",
      components: "./src/exports/components.tsx",
      hooks: "./src/exports/hooks.ts",
      lib: "./src/exports/lib.ts",
    },
  },
  clean: true,
})
