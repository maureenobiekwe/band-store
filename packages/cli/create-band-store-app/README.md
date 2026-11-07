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
  create-band-store-app
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

`create-band-store-app` is the CLI that scaffolds a new Band Store application (backend and admin, with an optional Next.js storefront) or a Band Store plugin project in a single command. Use it to start a new project; run it with `npx` rather than installing it. To work with an existing project, use the `bandStore` CLI from `@band-store/cli` instead.

## At a glance

| | |
| --- | --- |
| Package | `create-band-store-app` |
| Type | CLI |
| Binary | `create-band-store-app` |

## Features

- Clones the `medusajs/dtc-starter` project, or `medusajs/band-store-starter-plugin` with `--plugin`.
- Creates a local PostgreSQL database, runs migrations, creates an admin user, and opens the Band Store Admin in the browser.
- Optionally sets up the Next.js storefront alongside the backend.
- Uses the package manager you run it with (npm, yarn, or pnpm), or the one you force with a flag.

## Usage

Requires Node.js v22.22.0 or later, Git, and PostgreSQL (unless you pass `--skip-db` or `--db-url`).

```bash
npx create-band-store-app@latest my-store
```

Create a plugin project instead:

```bash
npx create-band-store-app@latest my-plugin --plugin
```

If you omit `project-name`, the CLI prompts for it.

## Configuration

| Option | Description | Default |
| --- | --- | --- |
| `[project-name]` | Name of the project directory to create. | Prompted |
| `--plugin` | Create a plugin project instead of a Band Store application. | `false` |
| `--repo-url <url>` | Repository to clone instead of the default starter. | `https://github.com/medusajs/dtc-starter` (`https://github.com/medusajs/medusa-starter-plugin` with `--plugin`) |
| `--version <version>` | Version of the Band Store packages to install. | Starter's versions |
| `--seed` | Seed the database with demo data. | `false` |
| `--skip-db` | Skip creating the database, running migrations, and seeding. Also skips opening the browser. | `false` |
| `--db-url <url>` | Use an existing database instead of creating one. Migrations still run. | - |
| `--no-migrations` | Skip migrations, admin user creation, and seeding. Use with a `--db-url` that is already migrated. | Migrations run |
| `--no-browser` | Don't open the browser at the end; only print the success message. | Browser opens |
| `--directory-path <path>` | Directory to create the project in. | Current directory |
| `--with-nextjs-starter` | Install the Next.js storefront without prompting. | Prompted |
| `--use-npm` / `--use-yarn` / `--use-pnpm` | Force a package manager. Mutually exclusive. | Detected from the invoking package manager |
| `--verbose` | Show the logs of the underlying commands. | `false` |

## Resources

- create-band-store-app reference
- Installation guide
- create-band-store-app troubleshooting
- Plugins
