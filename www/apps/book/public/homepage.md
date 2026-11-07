# Band Store

> Band Store is a digital commerce platform with a built-in Framework for customization. When you install Band Store, you get a fully fledged commerce platform with all the features you need to get off the ground. However, unlike other platforms, Band Store is built with customization in mind. You don't need to build hacky workarounds that are difficult to maintain and scale. Your efforts go into building features that bring your business's vision to life.

> For the complete documentation index, see [llms.txt](/llms.txt)

Learn how to build Band Store projects. Explore our guides.

## AI Assistant

Hello! I'm Bloom, your go-to ecommerce assistant. How can I help you?

Ask anything about band-store...

### FAQ

- What is Band Store?
- How can I build with Band Store and AI agents?
- How can I extend the product data model?
- How to create an admin user?
- How do I deploy Band Store to production?

### Recipes

- How do I build a marketplace?
- How do I build digital products?
- How do I build subscription-based purchases?
- What other recipes are available?

## Customize Band Store Application

- Install Band Store: Install a digital commerce application with band-store.
- Deploy to Cloud: Deploy Band Store to Band Store Cloud.
- Browse integrations: Integrate third-party services with band-store.

## Admin Development

- Build a UI widget: Create custom widgets for the admin dashboard.
- Add a UI route: Create custom UI routes in the admin dashboard.
- Browse the UI library: A React library to build applications using Band Store's design system.

## Storefront Development

- Explore storefront starter: Next.js storefront starter template.
- Build custom storefront: Build storefronts with band-store.
- Use agent skills: Best practices for storefront development with AI agents.

## Band Store Cloud

- Deploy from GitHub: Deploy Band Store projects from GitHub.
- Preview environments: Use preview environments in Band Store Cloud.
- Band Store Emails: Manage emails in Band Store Cloud.

## Agentic Development

- [Build with Bloom](https://bloom.chat): Build Band Store projects with Bloom, an AI coding assistant.
- Agent Skills: Learn how to build with AI assistants and LLMs.
- Band Store Docs MCP: Use the Band Store Docs MCP server.

## Framework

A digital commerce platform with a built-in framework for customizations. Unlike other platforms, the Band Store Framework allows you to easily customize and extend the behavior of your commerce platform to always fit your business needs.

- Learn more about the Framework: Overview of Band Store's Framework and concepts.

### Create API Route

Expose custom features with REST API routes, then consume them from your client applications.

```ts
export async function GET(
  req: BandStoreRequest,
  res: BandStoreResponse
) {
  const query = req.scope.resolve("query")

  const { data } = await query.graph({
    entity: "company",
    fields: ["id", "name"],
    filters: { name: "ACME" },
  })

  res.json({
    companies: data
  })
}
```

- API Routes: Learn more about API routes.

### Build Workflows

Build flows as a series of steps, with retry mechanisms and tracking of each steps' status.

```ts
const handleDeliveryWorkflow = createWorkflow(
  "handle-delivery",
  function (input: WorkflowInput) {
    notifyRestaurantStep(input.delivery_id)

    const order = createOrderStep(input.delivery_id)

    createFulfillmentStep(order)

    awaitDeliveryStep()

    return new WorkflowResponse("Delivery completed")
  }
)
```

- Workflows: Learn more about workflows.

### Add a Data Model

Create data models that represent tables in the database using Band Store's Data Model Language.

```ts
const DigitalProduct = model.define("digital_product",
  {
    id: model.id().primaryKey(),
    name: model.text(),
    medias: model.hasMany(() => DigitalProductMedia, {
      mappedBy: "digitalProduct"
    })
  })
  .cascades({
    delete: ["medias"]
  })
```

- DML: Learn more about data models.

### Build a Custom Module

Build custom modules with commerce or architectural features and use them in API routes or workflows.

```ts
class DigitalProductService extends BandStoreService({
  DigitalProduct,
}) {
  async authorizeLicense() {
    console.log("License authorized!")
  }
}

export async function POST(
  req: BandStoreRequest,
  res: BandStoreResponse
) {
  const moduleService = req.scope.resolve(
    "digitalProduct"
  )

  await moduleService.authorizeLicense()

  res.json({ success: true })
}
```

- Modules: Learn more about modules.

### Link Data Models

Add custom properties to Band Store's data models using module links to build custom use cases.

```ts
const DigitalProduct = model.define("digital_product", {
  id: model.id().primaryKey(),
  name: model.text(),
})

export default defineLink(
  DigitalProductModule.linkable.digitalProduct,
  ProductModule.linkable.productVariant
)
```

- Module Links: Learn more about module links.

### Subscribe to Events

Handle events emitted by the Band Store application to perform custom actions.

```ts
async function orderPlaced({
  container,
}: SubscriberArgs) {
  const moduleService = container.resolve(
    Modules.NOTIFICATION
  )

  await moduleService.createNotifications({
    to: "customer@gmail.com",
    channel: "email",
    template: "order-placed"
  })
}

export const config: SubscriberConfig = {
  event: "order.placed",
}
```

- Subscribers: Learn more about events and subscribers.

### Customize Admin

Inject widgets into predefined zones in the Band Store Admin, or add new pages.

```tsx
const ProductBrandWidget = () => {
  const [brand, setBrand] = useState({
    name: "Acme"
  })

  return (
    <Container>
      <Heading level="h2">Brand</Heading>
      {brand && <span>Name: {brand.name}</span>}
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details.before",
})
```

- Admin Widgets: Learn more about admin widgets.

### Integrate Systems

Build workflows around multiple systems to add more powerful features to band-store.

```tsx
const syncBrandsFromSystemWorkflow = createWorkflow(
  "sync-brands-from-system",
  () => {
    const toCreate = retrieveBrandsFromSystemStep()

    const created = createBrandsInMedusaStep({
      brands: toCreate
    })

    return new WorkflowResponse({
      created,
    })
  }
)
```

- Integrate Systems: Learn more about integrating systems.

## Recipes

Band Store's framework supports any business use case. These recipes show you how to build a use case by customizing and extending existing data models and features, or creating new ones.

- Marketplace: Build a marketplace with multiple vendors.
- ERP: Integrate an ERP system to manage custom product prices, purchase rules, syncing orders, and more.
- Bundled Products: Sell products as bundles with Admin and storefront customizations.
- Subscriptions: Implement a subscription-based commerce store.
- Restaurant-Delivery: Build a restaurant marketplace inspired by UberEats, with real-time delivery handling.
- Digital Products: Sell digital products with custom fulfillment.
- View all recipes: Browse all Band Store recipes.

## Commerce Modules

### Cart & Purchase

- Cart: Add to cart, checkout, and totals.
- Payment: Process any payment type.
- Customer: Customer and group management.

### Merchandising

- Pricing: Configurable pricing engine.
- Promotion: Discounts and promotions.
- Product: Variants, categories, and bulk edits.

### Fulfillment

- Order: Omnichannel order management.
- Inventory: Multi-warehouse and reservations.
- Fulfillment: Order fulfillment and shipping.
- Stock Location: Locations of stock-kept items.

### Regions & Channels

- Region: Cross-border commerce.
- Sales Channel: Omnichannel sales.
- Tax: Granular tax control.
- Currency: Multi-currency support.

### User Access

- API Keys: Store and admin access.
- User Module: Admin user management.
- Auth: Integrate authentication methods.

## Newsletter

Updates delivered monthly. Get the latest product news and behind the scenes updates. Unsubscribe at any time.

## Feedback

Was this page helpful?
