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
  @band-store/ui-preset
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

Tailwind CSS preset for Band Store UI: the design tokens (colors, typography, effects, and component styles) that `@band-store/ui` components are styled with. Add it to your Tailwind CSS config when you use `@band-store/ui` in a standalone project; Band Store Admin extensions don't need it.

## At a glance

| | |
|---|---|
| Package | `@band-store/ui-preset` |
| Type | Design system |
| Import from | `@band-store/ui-preset` |

## Installation

```bash
npm install @band-store/ui-preset --save-dev
```

## Usage

The preset supports Tailwind CSS v3 and v4.

With Tailwind CSS v4, import the CSS-first theme and add the `@band-store/ui` files as a source:

```css title="app.css"
@import "tailwindcss";
@import "@band-store/ui-preset/theme.css";

@source "../node_modules/@band-store/ui/dist";
```

The theme turns on class-based dark mode: add the `dark` class or `data-mode="dark"` to an ancestor element.

With Tailwind CSS v3, add the preset and the `@band-store/ui` files to your config:

```js title="tailwind.config.js"
module.exports = {
  presets: [require("@band-store/ui-preset")],
  content: [
    // ...
    "./node_modules/@band-store/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
}
```

## Contributing

The tokens are generated from Band Store's Figma file with `yarn generate`, which requires a `FIGMA_TOKEN` for the Band Store Figma organization. If you're not a Band Store team member, open an issue for token problems instead of a PR.

## Resources

- Use Band Store UI in a Standalone Project
- Colors
