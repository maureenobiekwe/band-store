import { model } from "@band-store/utils"

export const dmlEntity = model.define("dmlEntity", {
  id: model.id().primaryKey(),
  name: model.text(),
})
