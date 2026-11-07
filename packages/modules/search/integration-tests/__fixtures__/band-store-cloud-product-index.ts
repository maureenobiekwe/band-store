import { SearchTypes } from "@band-store/framework/types"

export const products: SearchTypes.SearchDocument[] = [
  {
    id: "prod_band-store_1",
    title: "Red running shoe",
    status: "published",
    price: 100,
    tags: ["shoe", "sport"],
  },
  {
    id: "prod_band-store_2",
    title: "Blue running shirt",
    status: "published",
    price: 50,
    tags: ["shirt", "sport"],
  },
]

export const productIndex: SearchTypes.SearchIndexDefinition = {
  name: `band-store_product_${Date.now()}`,
  entity: "product",
  provider: "search-band-store",
  fields: {
    id: { type: "keyword", filterable: true },
    title: { type: "text", searchable: true },
    status: { type: "keyword", filterable: true, facetable: true },
    price: { type: "float", filterable: true, sortable: true },
    tags: { type: "keyword", array: true, filterable: true, facetable: true },
  },
  async *seed() {
    yield products
  },
}
