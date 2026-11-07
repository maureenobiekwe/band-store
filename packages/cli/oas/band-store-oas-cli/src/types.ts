type ApiType = "store" | "admin" | "combined"

type CircularReferenceSchema = Record<string, string[]>

type CircularReferenceConfig = {
  decorators: {
    "band-store/circular-patch": {
      schemas: CircularReferenceSchema
    }
  }
}
