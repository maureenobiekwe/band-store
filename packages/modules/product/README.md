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
  @band-store/product
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

Product Module for Band Store: manages products, product variants, options and option values, categories, collections, tags, types, and images. Use it to build and organize a product catalog. It ships with `@band-store/band-store` and is registered by default, so Band Store applications don't install it directly.

## At a glance

| | |
| --- | --- |
| Package | `@band-store/product` |
| Type | Commerce Module |
| Module key | `Modules.PRODUCT` (`"product"`) |
| Registered by default | Yes |
| Import from | `@band-store/band-store/product` |

## Features

- Store products with options, such as color or size, and variants for each option combination.
- Share options across products, or keep an option exclusive to one product.
- Organize products with nested categories, collections, tags, and types.
- Attach images to products and to specific variants.

## Installation

No installation needed. The module is included in `@band-store/band-store` and registered by default.

## Usage

Resolve the module's service from the container, for example in a workflow step:

```ts
import { createStep, StepResponse } from "@band-store/framework/workflows-sdk"
import { Modules } from "@band-store/framework/utils"

const createProductStep = createStep(
  "create-product",
  async ({}, { container }) => {
    const productService = container.resolve(Modules.PRODUCT)

    const product = await productService.createProducts({
      title: "BandStore Shirt",
      options: [
        {
          title: "Color",
          values: ["Black", "White"],
        },
      ],
      variants: [
        {
          title: "Black Shirt",
          options: {
            Color: "Black",
          },
        },
      ],
    })

    return new StepResponse({ product }, product.id)
  }
)
```

## Resources

- Product Module
- Product Module workflows
- Extend the Product Module
