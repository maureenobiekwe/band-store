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
  @band-store/auth
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

Auth Module for Band Store: manages auth identities, provider identities, password reset tokens, verifications, and multi-factor authentication (MFA) factors and recovery codes. It authenticates actors (such as admin users and customers) through pluggable Auth Module Providers. It ships with `@band-store/band-store` and is registered by default, so you normally use it through the Band Store application rather than installing it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/auth` |
| Type | Commerce Module |
| Module key | `Modules.AUTH` (`"auth"`) |
| Registered by default | Yes, with the `emailpass` provider |
| Import from | `@band-store/band-store/auth` |

## Features

- Authenticate actors through Auth Module Providers. Official providers:
  - [`@band-store/auth-emailpass`](../providers/auth-emailpass): email and password.
  - [`@band-store/auth-github`](../providers/auth-github): GitHub OAuth.
  - [`@band-store/auth-google`](../providers/auth-google): Google OAuth.
  - [`@band-store/auth-oidc`](../providers/auth-oidc): OpenID Connect.
- Link multiple provider identities to one auth identity.
- Password reset tokens and token-based verifications.
- Built-in MFA with TOTP and recovery codes.

## Installation

No installation needed. The module ships with `@band-store/band-store` and is registered by default with the `emailpass` provider and `mfa.encryption_key` set from the `AUTH_MFA_ENCRYPTION_KEY` environment variable.

## Usage

To add providers, register the module in `band-store-config.ts`:

```ts title="band-store-config.ts"
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
        ],
      },
    },
  ],
})
```

## Configuration

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `providers` | `{ resolve: string, id: string, options?: Record<string, unknown> }[]` | Auth Module Providers to register. | `emailpass` provider |
| `mfa.encryption_key` | `string` | Key used to encrypt MFA secrets at rest. | `AUTH_MFA_ENCRYPTION_KEY` env var |
| `mfa.recovery_code_count` | `number` | Number of recovery codes generated for an auth identity. | `10` |
| `mfa.challenge_ttl_seconds` | `number` | Seconds an MFA challenge remains valid. | `300` |
| `mfa.challenge_max_attempts` | `number` | Failed verification attempts allowed per MFA challenge. | `5` |
| `mfa.disable_policy` | `"challenge" \| "session"` | Policy used when disabling MFA. | `"session"` |
| `mfa.providers` | `{ resolve?: string, id: string, options?: Record<string, unknown> }[]` | Additional MFA providers, or options for built-in ones such as `totp`. | - |
| `verification.providers` | `{ resolve?: string, id: string, options?: Record<string, unknown> }[]` | Additional verification providers, or options for the built-in `token` provider. | - |

## Resources

- Auth Module
- Auth Module options
- Auth providers
- Multi-factor authentication
- Authentication flows
