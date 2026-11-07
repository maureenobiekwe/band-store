import { bandStoreIntegrationTestRunner } from "@band-store/test-utils"
import { ICustomerModuleService } from "@band-store/types"
import { Modules } from "@band-store/utils"
import { createAdminUser } from "../../../../helpers/create-admin-user"

jest.setTimeout(50000)

const env = {}
const adminHeaders = {
  headers: { "x-band-store-access-token": "test_token" },
}

bandStoreIntegrationTestRunner({
  env,
  testSuite: ({ dbConnection, getContainer, api, dbUtils }) => {
    describe("GET /admin/customer-groups/:id", () => {
      let appContainer
      let customerModuleService: ICustomerModuleService

      beforeAll(async () => {
        appContainer = getContainer()
        customerModuleService = appContainer.resolve(Modules.CUSTOMER)
      })

      beforeAll(async () => {
        await createAdminUser(dbConnection, adminHeaders, appContainer)

        await dbUtils.snapshot()
      })

      it("should retrieve customer group", async () => {
        const group = await customerModuleService.createCustomerGroups({
          name: "Test",
        })

        const response = await api.get(
          `/admin/customer-groups/${group.id}`,
          adminHeaders
        )

        expect(response.status).toEqual(200)
        expect(response.data.customer_group).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            name: "Test",
          })
        )
      })
    })
  },
})
