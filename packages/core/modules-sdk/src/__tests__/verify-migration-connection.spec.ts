import { BandStoreError } from "@band-store/utils"
import { verifyMigrationConnection } from "../band-store-app"

describe("verifyMigrationConnection", () => {
  afterEach(() => {
    delete process.env.BAND_STORE_DB_MIGRATION_CONNECTION_TIMEOUT
  })

  it("resolves when the database responds", async () => {
    const knex = {
      raw: jest.fn().mockResolvedValue([{ "?column?": 1 }]),
    }

    await expect(
      verifyMigrationConnection(knex as any)
    ).resolves.toBeUndefined()
    expect(knex.raw).toHaveBeenCalledWith("SELECT 1")
  })

  it("throws an actionable error with a troubleshooting link when the connection hangs", async () => {
    process.env.BAND_STORE_DB_MIGRATION_CONNECTION_TIMEOUT = "50"

    const knex = {
      // Simulates a stalled connection that never resolves.
      raw: jest.fn().mockReturnValue(new Promise(() => {})),
    }

    const error = await verifyMigrationConnection(knex as any).catch((e) => e)

    expect(error).toBeInstanceOf(BandStoreError)
    expect(error.type).toEqual(BandStoreError.Types.DB_ERROR)
    expect(error.message).toContain("timed out")
    expect(error.message).toContain(
      ""
    )
  })

  it("wraps a connection error with a troubleshooting link", async () => {
    const knex = {
      raw: jest
        .fn()
        .mockRejectedValue(new Error("connect ECONNREFUSED 127.0.0.1:5432")),
    }

    const error = await verifyMigrationConnection(knex as any).catch((e) => e)

    expect(error).toBeInstanceOf(BandStoreError)
    expect(error.type).toEqual(BandStoreError.Types.DB_ERROR)
    expect(error.message).toContain("ECONNREFUSED")
    expect(error.message).toContain(
      ""
    )
  })
})
