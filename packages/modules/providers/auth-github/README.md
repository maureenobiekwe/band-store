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
  @band-store/auth-github
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

GitHub Auth Module Provider for Band Store: lets users and customers log in with their GitHub account through OAuth 2. Use it to add "Log in with GitHub" for customers, admin users, or custom actor types. It ships with `@band-store/band-store` and is registered through the `@band-store/band-store/auth-github` path.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/auth-github` |
| Type | Module Provider (Auth Module) |
| Provider ID | `github` |
| Registered by default | No |
| Import from | `@band-store/band-store/auth-github` |

## Installation

No installation needed. The provider is a dependency of `@band-store/band-store`.

## Usage

Register the provider in the Auth Module's `providers` array in `band-store-config.ts`. Passing `providers` replaces the default list, so keep `emailpass` if you still need email/password login:

```ts
import { defineConfig } from "@band-store/framework/utils"

module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@band-store/band-store/auth",
      options: {
        providers: [
          {
            resolve: "@band-store/band-store/auth-emailpass",
            id: "emailpass",
          },
          {
            resolve: "@band-store/band-store/auth-github",
            id: "github",
            options: {
              clientId: process.env.GITHUB_CLIENT_ID,
              clientSecret: process.env.GITHUB_CLIENT_SECRET,
              callbackUrl: process.env.GITHUB_CALLBACK_URL,
            },
          },
        ],
      },
    },
  ],
})
```

The provider's `id` is the one used in authentication routes, such as `/auth/customer/github`.

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `clientId` | `string` | Required. The OAuth client ID of your GitHub app. | - |
| `clientSecret` | `string` | Required. The OAuth client secret of your GitHub app. | - |
| `callbackUrl` | `string` | Required. The URL GitHub redirects to after authentication. Can be overridden per request with a `callback_url` body parameter. | - |

| Environment variable | Description |
| --- | --- |
| `GITHUB_CLIENT_ID` | Value for `clientId`, as used in the example above. |
| `GITHUB_CLIENT_SECRET` | Value for `clientSecret`, as used in the example above. |
| `GITHUB_CALLBACK_URL` | Value for `callbackUrl`, as used in the example above. |

## Resources

- GitHub Auth Module Provider
- Auth Providers
- Auth Module
