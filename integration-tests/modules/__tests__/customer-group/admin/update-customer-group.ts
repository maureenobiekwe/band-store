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
    describe("POST /admin/customer-groups/:id", () => {
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

      it("should update a customer group", async () => {
        const customer = await customerModuleService.createCustomerGroups({
          name: "VIP",
        })

        const response = await api.post(
          `/admin/customer-groups/${customer.id}`,
          {
            name: "regular",
          },
          adminHeaders
        )

        expect(response.status).toEqual(200)
        expect(response.data.customer_group).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            name: "regular",
          })
        )
      })
    })
  },
})
