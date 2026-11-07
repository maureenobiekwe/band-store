import { model } from "@band-store/utils"

export const entityModel = model.define("entityModel", {
  id: model.id().primaryKey(),
  name: model.text(),
})
