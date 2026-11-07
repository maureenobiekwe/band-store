import { BandStoreContainer } from "@band-store/types"

export type ScheduledJobContext = {
  /**
   * The timestamp for which the job was scheduled.
   */
  scheduledFor: Date
}

export type ScheduledJobHandler = (
  container: BandStoreContainer,
  context?: ScheduledJobContext
) => Promise<unknown>

export type ScheduledJobWorkflowInput = {
  scheduledFor: string
}
