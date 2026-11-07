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
  @band-store/admin-bundler
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

Bundler for the Band Store Admin dashboard: builds, develops, and serves the admin, and builds the admin extensions of Band Store plugins. It's internal plumbing used by `@band-store/band-store` (`bandStore develop`, `bandStore start`, `bandStore build`, and `bandStore plugin:build`), so you don't need to install or call it directly. Configure the admin through the `admin` option in `band-store-config.ts` instead.

## At a glance

| | |
|---|---|
| Package | `@band-store/admin-bundler` |
| Type | Internal tooling |
| Import from | `@band-store/admin-bundler` (only `@band-store/band-store` imports it) |

## Features

- `develop`: serves the admin with Vite in development mode.
- `serve`: serves the production build of the admin.
- `build`: creates the production build of the admin.
- `plugin`: builds the admin extensions of a Band Store plugin.

## Resources

- Admin Development
- Admin Environment Variables
