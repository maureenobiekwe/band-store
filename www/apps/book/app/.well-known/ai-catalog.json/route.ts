import { NextResponse } from "next/server"
import { config } from "../../../config"

const headers = {
  "content-type": "application/json",
  "cache-control": "public, max-age=3600, must-revalidate",
  "access-control-allow-origin": "*",
}

const getCatalog = () => {
  const { baseUrl } = config
  const { hostname } = new URL(baseUrl)
  const urn = (namespace: string, name: string) =>
    `urn:air:${hostname}:${namespace}:${name}`

  return {
    specVersion: "1.0",
    host: {
      displayName: "BandStore",
      identifier: `did:web:${hostname}`,
      documentationUrl: baseUrl,
    },
    entries: [
      {
        identifier: urn("mcp", "docs"),
        displayName: "BandStore Docs MCP Server",
        description:
          "Search the BandStore documentation and get step-by-step implementation guides for building with band-store.",
        type: "application/mcp-server-card+json",
        url: `${baseUrl}/.well-known/mcp/server-card.json`,
        representativeQueries: [
          "how do I create a custom module in BandStore",
          "how to add a payment provider to a BandStore store",
          "explain BandStore workflows and compensation steps",
          "how to customize the BandStore admin dashboard",
        ],
      },
      {
        identifier: urn("skills", "band-store-agent-skills"),
        displayName: "BandStore Agent Skills",
        description:
          "Agent skills for building BandStore backends, storefronts, and admin customizations.",
        type: "application/agent-skills+json",
        url: `${baseUrl}/.well-known/agent-skills/index.json`,
        representativeQueries: [
          "skill for building BandStore backend features",
          "best practices for building a BandStore storefront",
          "how to build BandStore admin widgets and pages",
        ],
      },
      {
        identifier: urn("openapi", "store"),
        displayName: "BandStore Store API",
        description:
          "OpenAPI specification of the BandStore Store API used by storefronts.",
        type: "application/vnd.oai.openapi",
        url: `${baseUrl}/api/download/store`,
        representativeQueries: [
          "BandStore API to add an item to the cart",
          "list products from a BandStore store",
          "complete checkout and place an order with BandStore",
        ],
      },
      {
        identifier: urn("openapi", "admin"),
        displayName: "BandStore Admin API",
        description:
          "OpenAPI specification of the BandStore Admin API used to manage a store.",
        type: "application/vnd.oai.openapi",
        url: `${baseUrl}/api/download/admin`,
        representativeQueries: [
          "BandStore admin API to create a product",
          "fulfill or refund an order in BandStore",
          "manage inventory and stock locations via the BandStore admin API",
        ],
      },
      {
        identifier: urn("catalog", "api-catalog"),
        displayName: "BandStore API Catalog",
        description:
          "RFC 9727 linkset of BandStore's APIs and their descriptions.",
        type: "application/linkset+json",
        url: `${baseUrl}/.well-known/api-catalog`,
        representativeQueries: [
          "list all BandStore APIs and their OpenAPI specs",
          "where is the BandStore API documentation",
        ],
      },
    ],
  }
}

export function GET() {
  return NextResponse.json(getCatalog(), { headers })
}

export function HEAD() {
  return new NextResponse(null, { headers })
}
