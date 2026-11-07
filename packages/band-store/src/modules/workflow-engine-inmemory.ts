import MemoryWorkflowEngineModule from "@band-store/workflow-engine-inmemory"

export * from "@band-store/workflow-engine-inmemory"

export default MemoryWorkflowEngineModule
export const discoveryPath =
  require.resolve("@band-store/workflow-engine-inmemory")
