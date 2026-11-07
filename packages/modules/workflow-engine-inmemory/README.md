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
  @band-store/workflow-engine-inmemory
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

In-Memory Workflow Engine Module for Band Store: runs workflows and tracks their executions and subscribers in memory. It's the default Workflow Engine Module, installed and registered with `@band-store/band-store`, and is meant for development and testing. For production, use the Redis Workflow Engine Module (`@band-store/workflow-engine-redis`) instead.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/workflow-engine-inmemory` |
| Type | Infrastructure Module |
| Module key | `Modules.WORKFLOW_ENGINE` (`"workflows"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/workflow-engine-inmemory` |

## Installation

No installation needed. The module ships with `@band-store/band-store` and is registered by `defineConfig`. It has no options.

## Resources

- Workflow Engine Module
- In-Memory Workflow Engine Module
- How to Use the Workflow Engine Module
- Workflows
