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
  @band-store/icons
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

Band Store Icons: the React icon library of Band Store's design system, used in the Band Store Admin dashboard. Use it in admin widgets and UI routes (for example, as a UI route's sidebar `icon`) or in any React app.

## At a glance

| | |
|---|---|
| Package | `@band-store/icons` |
| Type | Design system |
| Import from | `@band-store/icons` |

## Installation

Admin extensions in a Band Store application or plugin can import `@band-store/icons` without extra setup. In other React projects:

```bash
npm install @band-store/icons
```

## Usage

```tsx
import { Sun } from "@band-store/icons"

const App = () => <Sun />
```

## Contributing

The icon components are generated from Band Store's Figma file with `yarn generate`, which requires a `FIGMA_TOKEN` for the Band Store Figma organization. If you're not a Band Store team member, open an issue for icon problems instead of a PR.

## Resources

- Icons
