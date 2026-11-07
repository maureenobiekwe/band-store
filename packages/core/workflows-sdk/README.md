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
  @band-store/workflows-sdk
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

Workflows SDK for Band Store: the tools to define durable, multi-step workflows with steps, compensation (rollback), hooks, and conditions. Use it to build custom commerce flows in a Band Store application, module, or plugin. Applications import it through `@band-store/framework/workflows-sdk`, which re-exports this package; importing `@band-store/workflows-sdk` directly is discouraged.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/workflows-sdk` |
| Type | Core library |
| Import from | `@band-store/framework/workflows-sdk` |
| Entry points | `.`, `./composer` (available as `@band-store/framework/workflows-sdk/composer`) |

## Features

- `createStep` and `StepResponse` to define steps with an optional compensation function.
- `createWorkflow` and `WorkflowResponse` to compose steps into a workflow.
- `transform`, `when`, and `parallelize` to manipulate data, run steps conditionally, and run steps in parallel inside a workflow.
- `createHook` to expose hooks that other code can consume to extend a workflow.

## Installation

No separate installation is needed in a Band Store application. It's installed with `@band-store/framework`.

## Usage

```ts
import {
  createStep,
  createWorkflow,
  StepResponse,
  WorkflowResponse,
} from "@band-store/framework/workflows-sdk"

type WorkflowInput = {
  name: string
}

const greetStep = createStep(
  "greet-step",
  async ({ name }: WorkflowInput) => {
    return new StepResponse(`Hello ${name}!`)
  }
)

const helloWorldWorkflow = createWorkflow(
  "hello-world",
  function (input: WorkflowInput) {
    const message = greetStep(input)

    return new WorkflowResponse({ message })
  }
)

export default helloWorldWorkflow
```

Execute the workflow by passing it the Band Store container, for example in an API route:

```ts
const { result } = await helloWorldWorkflow(req.scope).run({
  input: { name: "John" },
})
```

## Resources

- Workflows
- Compensation function
- Workflow hooks
- Long-running workflows
