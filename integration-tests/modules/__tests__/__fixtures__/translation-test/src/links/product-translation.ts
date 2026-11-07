import { defineLink } from "@band-store/framework/utils"
import ProductModule from "@band-store/band-store/product"
import Translation from "../modules/translation"

export default defineLink(
  ProductModule.linkable.product.id,
  Translation.linkable.translation.id
)
