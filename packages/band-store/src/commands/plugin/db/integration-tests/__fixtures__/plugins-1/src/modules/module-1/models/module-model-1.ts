import { model } from "@band-store/framework/utils"

const model1 = model.define("module_model_1", {
  id: model.id().primaryKey(),
  name: model.text(),
})

export default model1
