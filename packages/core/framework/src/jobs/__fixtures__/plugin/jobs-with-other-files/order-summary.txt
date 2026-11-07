import { BandStoreContainer } from "@band-store/types"

export default async function handler(container: BandStoreContainer) {
  console.log(`You have received 5 orders today`)
}

export const config = {
  name: "summarize-orders",
  schedule: "* * * * * *",
  numberOfExecutions: 2,
}
