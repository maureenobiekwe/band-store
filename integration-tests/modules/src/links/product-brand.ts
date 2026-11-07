import ProductModule from "@band-store/band-store/product"
import { defineLink } from "@band-store/utils"
import BrandModule from "../modules/brand"

const link =
  process.env.ENABLE_INDEX_MODULE === "true"
    ? defineLink(
        {
          linkable: ProductModule.linkable.product.id,
          filterable: ["description", "material"],
          isList: true,
        },
        {
          linkable: BrandModule.linkable.brand.id,
          filterable: ["id", "name", "status"],
          isList: false,
        }
      )
    : {}

export default link
