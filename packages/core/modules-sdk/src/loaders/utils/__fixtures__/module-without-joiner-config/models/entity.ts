import { Entity, Property } from "@band-store/deps/mikro-orm/core"

@Entity()
export class EntityModel {
  @Property({ columnType: "int" })
  id!: number
}
