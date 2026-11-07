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
  @band-store/file-local
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

Local File Module Provider for Band Store: stores uploaded files on the server's local filesystem and serves public files from the `static` directory. It's the default file provider for self-hosted applications and is meant for development; use a provider like `@band-store/file-s3` in production. It ships with `@band-store/band-store` and is registered through the `@band-store/band-store/file-local` path.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/file-local` |
| Type | Module Provider (File Module) |
| Provider ID | `localfs` |
| Registered by default | Yes, with `id: "local"` (not on Band Store Cloud, which uses `file-s3`) |
| Import from | `@band-store/band-store/file-local` |

## Installation

No installation needed. The provider is a dependency of `@band-store/band-store` and is registered by default.

## Usage

Register it yourself only to pass options. The File Module accepts exactly one provider.

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
            resolve: "@band-store/band-store/file-local",
            id: "local",
            options: {
              // optional
            },
          },
        ],
      },
    },
  ],
})
```

Private files aren't access-protected: their download URLs are plain file URLs, not signed URLs.

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `upload_dir` | `string` | Directory where public files are stored. | `static` in the current working directory |
| `private_upload_dir` | `string` | Directory where private files are stored. | `static` in the current working directory |
| `backend_url` | `string` | Base URL used to build file URLs. | `http://localhost:9000/static` |

## Resources

- Local File Module Provider
- File Module
