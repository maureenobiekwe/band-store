import ProductModule from "@band-store/band-store/product"
import { defineLink } from "@band-store/utils"
import Translation from "../modules/translation"

export default defineLink(
  ProductModule.linkable.productVariant.id,
  {
    linkable: Translation.linkable.translation.id,
    deleteCascade: true,
  }
)
