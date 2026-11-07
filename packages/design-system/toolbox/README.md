# @band-store/toolbox

Internal CLI that generates Band Store UI assets from Band Store's Figma file: the React icon components in `@band-store/icons` and the design tokens in `@band-store/ui-preset`. It's private and only used inside the Band Store monorepo.

## At a glance

| | |
|---|---|
| Package | `@band-store/toolbox` (private) |
| Type | Internal tooling |
| CLI | `toolbox` |

## Usage

Run it through the `generate` scripts of the packages that use it:

```bash
yarn workspace @band-store/icons generate
yarn workspace @band-store/ui-preset generate
```

## Commands

| Command | Description |
|---|---|
| `toolbox icons -o <path>` | Generate icon components from Figma into `<path>`. |
| `toolbox tokens -o <path>` | Generate design tokens from Figma into `<path>`. |

## Environment variables

| Variable | Description |
|---|---|
| `FIGMA_TOKEN` | Figma access token with access to the Band Store Figma organization. Required. |
