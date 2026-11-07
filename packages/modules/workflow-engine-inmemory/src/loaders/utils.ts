import { asClass } from "@band-store/framework/awilix"
import { InMemoryDistributedTransactionStorage } from "../utils"

export default async ({ container }): Promise<void> => {
  container.register({
    inMemoryDistributedTransactionStorage: asClass(
      InMemoryDistributedTransactionStorage
    ).singleton(),
  })
}
