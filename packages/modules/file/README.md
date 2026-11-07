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
  @band-store/file
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

File Module for Band Store: uploads, retrieves, and deletes files such as product images and import/export files. Storage is delegated to a File Module Provider, so you can swap local storage for S3 or another service without changing your code. It ships with `@band-store/band-store` and is registered by default; resolve it in your code with `container.resolve(Modules.FILE)`.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/file` |
| Type | Infrastructure Module |
| Module key | `Modules.FILE` (`"file"`) |
| Registered by default | Yes (with the Local provider; S3 provider on Band Store Cloud) |

## Providers

The module must be configured with exactly one provider. Official providers:

| Package | Register with |
| --- | --- |
| [`@band-store/file-local`](../providers/file-local) | `@band-store/band-store/file-local` |
| [`@band-store/file-s3`](../providers/file-s3) | `@band-store/band-store/file-s3` |

## Installation

No installation needed. The module ships with `@band-store/band-store`.

## Usage

To change the provider, register the module in `band-store-config.ts` with the provider you want:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/file",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/file-s3",
            id: "s3",
            options: {
              // provider options
            },
          },
        ],
      },
    },
  ],
})
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `providers` | `{ resolve: string, id: string, options?: Record<string, unknown> }[]` | The file provider to use. Must contain exactly one provider. | Local provider (`id: "local"`) |

## Resources

- File Module
- Local File Module Provider
- S3 File Module Provider
