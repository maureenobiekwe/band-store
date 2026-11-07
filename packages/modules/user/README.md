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
  @band-store/user
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

User Module for Band Store: manages admin users and invites, including generating and validating invite tokens. It's installed and registered by default with `@band-store/band-store`, which passes it the JWT settings from your project config, so Band Store applications use it through the `Modules.USER` service rather than installing this package directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/user` |
| Type | Commerce Module |
| Module key | `Modules.USER` (`"user"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/user` |

## Installation

No installation needed. The module ships with `@band-store/band-store` and is registered by `defineConfig`.

## Usage

To customize the module's options, such as the invite token's validity, register it in `band-store-config.ts`:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/user",
      options: {
        jwt_secret: process.env.JWT_SECRET,
        valid_duration: 60 * 60 * 24,
      },
    },
  ],
})
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `jwt_secret` | `string` | Secret used to sign invite tokens (or the private key when using asymmetric signing). Required: the module throws on startup if it's missing. | `projectConfig.http.jwtSecret`, then the `JWT_SECRET` environment variable (set by `defineConfig`) |
| `jwt_public_key` | `string` | Public key used to verify invite tokens when using asymmetric signing. | `projectConfig.http.jwtPublicKey` (set by `defineConfig`) |
| `valid_duration` | `number` | How long an invite token is valid, in seconds. | `jwt_options.expiresIn`, then `86400` (24 hours) |
| `jwt_options` | `object` | [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) sign options, such as `algorithm`. | `projectConfig.http.jwtOptions` (set by `defineConfig`) |
| `jwt_verify_options` | `object` | jsonwebtoken verify options, such as `algorithms`. Falls back to `jwt_options` when not set. | `projectConfig.http.jwtVerifyOptions` (set by `defineConfig`) |

## Resources

- User Module
- Module Options
- User Creation Flows
