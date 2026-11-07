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
  @band-store/orchestration
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

Low-level transaction orchestration for Band Store: the engine that executes workflow steps, tracks their state, and runs compensation when a step fails. It powers the Workflows SDK and the Workflow Engine modules; to build workflows, use `@band-store/framework/workflows-sdk` instead. When you need its classes or types directly, such as when building a custom workflow engine, import them from `@band-store/framework/orchestration`, which re-exports this package; importing `@band-store/orchestration` directly is discouraged.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/orchestration` |
| Type | Core library |
| Import from | `@band-store/framework/orchestration` |

## Features

- `TransactionOrchestrator` and `DistributedTransaction` to run a flow of steps and track its state.
- `LocalWorkflow`, `GlobalWorkflow`, and `WorkflowManager` to register and run workflow definitions.
- `DistributedTransactionStorage` and `DistributedSchedulerStorage` abstract classes that workflow engines implement to persist executions and scheduled workflows.
- Step error classes, such as `PermanentStepFailureError` and `SkipStepResponse`, and state enums, such as `TransactionState`.

## Installation

No separate installation is needed in a Band Store application. It's installed with `@band-store/framework`.

## Resources

- Workflows
- Long-running workflows
