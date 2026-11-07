import { Event, BandStoreContainer } from "@band-store/framework/types"

interface SubscriberContext extends Record<string, unknown> {
  subscriberId?: string
}

export type SubscriberConfig = {
  event: string | string[]
  context?: SubscriberContext
}

export type SubscriberArgs<T = unknown> = {
  event: Event<T>
  container: BandStoreContainer
  pluginOptions: Record<string, unknown>
}
