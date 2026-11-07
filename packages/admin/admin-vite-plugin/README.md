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
  @band-store/admin-vite-plugin
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

Vite plugin for the Band Store Admin dashboard: finds admin extensions (widgets, UI routes, custom fields, layouts, translations, and more) under `src/admin` in a Band Store application or plugin and loads them into the dashboard. It's internal plumbing used by `@band-store/admin-bundler` and the `@band-store/dashboard` dev server, so you don't need to install or configure it in a Band Store application.

## At a glance

| | |
|---|---|
| Package | `@band-store/admin-vite-plugin` |
| Type | Internal tooling |
| Import from | `@band-store/admin-vite-plugin` (default export) |

## Configuration

| Option | Type | Description | Default |
|---|---|---|---|
| `sources` | `string[]` | Paths of the Band Store application or plugin directories to load admin extensions from. | `[]` |
| `pluginMode` | `boolean` | Build extensions for a Band Store plugin instead of an application. | `false` |

## Resources

- Admin Development
