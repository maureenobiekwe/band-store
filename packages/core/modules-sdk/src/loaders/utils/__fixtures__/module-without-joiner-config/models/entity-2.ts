import { Entity, Property } from "@band-store/deps/mikro-orm/core"

@Entity()
export class Entity2 {
  @Property({ columnType: "int" })
  id!: number
}
