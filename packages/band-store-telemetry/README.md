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
  @band-store/telemetry
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

`@band-store/telemetry` collects anonymous, non-sensitive usage data from the Band Store CLI and application, such as OS and Node.js version and the Band Store version in use. It is an internal dependency of `@band-store/band-store`, `@band-store/framework`, and `@band-store/cli`; you don't install or call it directly, but you can opt out of it.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/telemetry` |
| Type | Internal tooling |

## Opting out

Set the environment variable:

```bash
BAND_STORE_DISABLE_TELEMETRY=true
```

Or run the CLI command in your project:

```bash
npx bandStore telemetry --disable
```

## Configuration

| Environment variable | Description | Default |
| --- | --- | --- |
| `BAND_STORE_DISABLE_TELEMETRY` | Disables telemetry collection when truthy. | - |
| `BAND_STORE_TELEMETRY_VERBOSE` | Logs telemetry activity to the console when truthy. | - |

## Resources

- Usage information
- `bandStore telemetry` command
