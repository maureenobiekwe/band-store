<p align="center">
  <a href="">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Band Store logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  @band-store/dashboard
</h1>

<h4 align="center">
  Documentation |
  Website
</h4>

<p align="center">
  Building blocks for digital commerce
</p>
<p align="center">
  <a href="">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Band Store is released under the MIT license." />
  </a>
  <a href="">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="">
    <img src="" alt="Follow @band-store" />
  </a>
</p>

The Band Store Admin dashboard: the React and Vite single-page app that merchants use to manage a Band Store store. `@band-store/band-store` builds it with `@band-store/admin-bundler` and serves it at the `admin.path` set in `band-store-config.ts` (`/app` by default), so you don't install or run it yourself. Admin extensions can import its components, hooks, and utilities from the subpaths below.

## At a glance

| | |
|---|---|
| Package | `@band-store/dashboard` |
| Type | Admin |
| Import from | `@band-store/dashboard/components`, `@band-store/dashboard/hooks`, `@band-store/dashboard/lib` |
| Entry points | `.` (the app), `./components`, `./hooks`, `./lib`, `./css` |

## Usage

Import shared admin components, hooks, and utilities in your admin extensions:

```tsx
import { getStylizedAmount } from "@band-store/dashboard/lib"
```

## Development

Run these from `packages/admin/dashboard`:

| Command | Description |
|---|---|
| `yarn dev` | Start the Vite dev server. |
| `yarn build` | Type-check and build the package with tsup. |
| `yarn build:preview` | Build the app with Vite. |
| `yarn preview` | Preview the Vite build. |
| `yarn test` | Run the Vitest tests. |
| `yarn lint` | Run ESLint. |
| `yarn typecheck` | Type-check the package. |
| `yarn i18n:validate <file>` | Validate a translation file, such as `de.json`, against the schema. |
| `yarn i18n:schema` | Regenerate `src/i18n/translations/$schema.json` from `en.json`. Run it after adding or removing keys in `en.json`. |
| `yarn i18n:sync` | Find or apply missing translations. See [Translations](#translations). |

The dev server reads these variables from a `.env` file:

| Variable | Description | Default |
|---|---|---|
| `VITE_band-store_BACKEND_URL` | URL of the Band Store server. | `http://localhost:9000` |
| `VITE_band-store_STOREFRONT_URL` | URL of the storefront. | `http://localhost:8000` |
| `VITE_band-store_BASE` | Base path the app is served from. | `/` |
| `VITE_band-store_PROJECT` | Path to a Band Store project to load admin extensions from. | - |

## Translations

Translation files live in `src/i18n/translations`. `en.json` is the source of truth, and every other `<locale>.json` file is translated from it.

### Find missing translations

```bash
yarn i18n:sync missing
```

Prints the number of strings in `en.json` that each locale is missing. Plural keys are expanded to the plural forms each locale uses, as defined in `src/i18n/plural-config.json`.

Pass `--output` to also write the missing strings to a JSON file:

```bash
yarn i18n:sync missing --output missing.json
```

The file is keyed by locale. Each entry has the number of missing strings (`count`), the locale's plural forms (`pluralForms`), and the missing keys nested as in `en.json` with their English text as values (`missing`).

### Apply translations

```bash
yarn i18n:sync apply --input <directory>
```

Merges translated strings into the locale files. The directory must contain JSON files named `<locale>.json`, or `<locale>.<anything>.json` to split a locale across several files (for example, `de.part-1.json`). Each file uses the same nested shape as `missing` in the `missing` output, with translated values.

New keys are inserted next to their neighbors in `en.json`, and existing keys keep their order. A translation is skipped with a warning if:

- Its key doesn't exist in `en.json`, or is a plural form the locale doesn't use.
- The locale already has a translation for the key. Existing translations are never overwritten.
- It's empty or not a string.
- Its `{{placeholders}}` or `<0>` tags don't match the English text. Plural forms may add or drop `{{count}}`.

### Automated sync

The [Admin i18n Sync](../../../.github/workflows/admin-i18n-sync.yml) workflow runs daily. It finds missing translations, translates them with Claude, and opens a PR on the `chore/admin-i18n-sync-translations` branch. It skips runs while a previous sync PR is still open.

## Resources

- Admin Development
- Admin Components
- Admin Utilities
- Contribute Admin Translations
