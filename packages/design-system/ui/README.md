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
  @band-store/ui
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

Band Store UI: the React component library of Band Store's design system, used to build the Band Store Admin dashboard. Use it to build admin widgets and UI routes that match the dashboard, or in any React app styled with Tailwind CSS and `@band-store/ui-preset`.

## At a glance

| | |
|---|---|
| Package | `@band-store/ui` |
| Type | Design system |
| Import from | `@band-store/ui` |

## Features

- Components such as `Button`, `Container`, `Heading`, `Input`, `Select`, `Table`, `FocusModal`, `Drawer`, `DatePicker`, and `Toaster`.
- A `DataTable` block for filterable, sortable, paginated tables.
- Hooks: `usePrompt` and `useToggleState`.
- Utilities: `clx` for merging class names, and `toast` for showing toasts.

## Installation

Admin extensions in a Band Store application or plugin can import `@band-store/ui` without extra setup. In a standalone React project, install it with the Tailwind CSS preset:

```bash
npm install @band-store/ui
npm install @band-store/ui-preset --save-dev
```

Then follow the standalone installation guide to configure Tailwind CSS.

## Usage

```tsx
import { Button } from "@band-store/ui"

const App = () => <Button variant="primary">Hello World</Button>
```

## Resources

- Band Store UI documentation
- Use Band Store UI in Admin Customizations
- Use Band Store UI in a Standalone Project
