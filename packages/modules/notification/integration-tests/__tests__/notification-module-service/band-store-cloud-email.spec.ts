import { INotificationModuleService } from "@band-store/framework/types"
import { Modules, NotificationStatus } from "@band-store/framework/utils"
import { moduleIntegrationTestRunner } from "@band-store/test-utils"
import { resolve } from "path"

jest.setTimeout(30000)

const successMedusaCloudEmailResponse = {
  ok: true,
  status: 200,
  statusText: "OK",
  json: () => Promise.resolve({ id: "external_id_1" }),
}

const testNotification = {
  to: "customer@test.com",
  from: "sender@verified.com",
  template: "some-template",
  channel: "email",
  data: {
    link: "https://test.com",
  },
  provider_data: {
    cc: "cc@test.com",
  },
}

moduleIntegrationTestRunner<INotificationModuleService>({
  moduleName: Modules.NOTIFICATION,
  moduleOptions: {
    cloud: {
      api_key: "test-api-key",
      endpoint: "",
      environment_handle: "test-environment",
    },
  },
  testSuite: ({ service }) =>
    describe("BandStore Cloud Email provider", () => {
      let fetchMock: jest.SpyInstance

      beforeEach(() => {
        fetchMock = jest
          .spyOn(globalThis, "fetch")
          .mockImplementation(
            async () => successMedusaCloudEmailResponse as any
          )
      })

      afterEach(() => {
        fetchMock.mockClear()
      })

      it("should send email notification to BandStore Cloud", async () => {
        const result = await service.createNotifications(testNotification)
        expect(result).toEqual(
          expect.objectContaining({
            to: "customer@test.com",
            from: "sender@verified.com",
            template: "some-template",
            channel: "email",
            data: {
              link: "https://test.com",
            },
            provider_data: {
              cc: "cc@test.com",
            },
            provider_id: "cloud",
            external_id: "external_id_1",
            status: NotificationStatus.SUCCESS,
          })
        )

        const [url, request] = fetchMock.mock.calls[0]
        expect(url).toBe("")
        expect(request.method).toBe("POST")
        expect(request.headers["Content-Type"]).toBe("application/json")
        expect(request.headers["Authorization"]).toBe("Basic test-api-key")
        expect(request.headers["x-band-store-environment-handle"]).toBe(
          "test-environment"
        )
        expect(JSON.parse(request.body)).toEqual({
          to: "customer@test.com",
          from: "sender@verified.com",
          template: "some-template",
          data: {
            link: "https://test.com",
          },
          provider_data: {
            cc: "cc@test.com",
          },
        })
      })

      it("should return an error if the BandStore Cloud Email provider fails", async () => {
        fetchMock.mockImplementation(
          async () =>
            ({
              ok: false,
              status: 500,
              statusText: "Internal Server Error",
              json: () => Promise.resolve({ message: "Internal Server Error" }),
            }) as any
        )

        await expect(
          service.createNotifications(testNotification)
        ).rejects.toThrow()
      })
    }),
})

moduleIntegrationTestRunner<INotificationModuleService>({
  moduleName: Modules.NOTIFICATION,
  moduleOptions: {
    cloud: {
      api_key: "test-api-key",
      endpoint: "",
      environment_handle: "test-environment",
    },
    providers: [
      {
        resolve: resolve(
          process.cwd() +
            "/integration-tests/__fixtures__/providers/default-provider"
        ),
        id: "test-provider",
        options: {
          name: "Test provider",
          channels: ["email"],
        },
      },
    ],
  },
  testSuite: ({ service }) =>
    describe("BandStore Cloud Email provider - when another email provider is configured", () => {
      let fetchMock: jest.SpyInstance

      beforeEach(() => {
        fetchMock = jest
          .spyOn(globalThis, "fetch")
          .mockImplementation(
            async () => successMedusaCloudEmailResponse as any
          )
      })

      afterEach(() => {
        fetchMock.mockClear()
      })

      it("should not enable BandStore Cloud Email provider", async () => {
        const result = await service.createNotifications(testNotification)
        expect(result).toMatchObject({ status: NotificationStatus.SUCCESS })

        expect(fetchMock).not.toHaveBeenCalled()
      })
    }),
})

moduleIntegrationTestRunner<INotificationModuleService>({
  moduleName: Modules.NOTIFICATION,
  moduleOptions: {},
  testSuite: ({ service }) =>
    describe("BandStore Cloud Email provider - when cloud options are not provided", () => {
      let fetchMock: jest.SpyInstance

      beforeEach(() => {
        fetchMock = jest
          .spyOn(globalThis, "fetch")
          .mockImplementation(
            async () => successMedusaCloudEmailResponse as any
          )
      })

      afterEach(() => {
        fetchMock.mockClear()
      })

      it("should not enable BandStore Cloud Email provider", async () => {
        await expect(
          service.createNotifications(testNotification)
        ).rejects.toThrow()

        expect(fetchMock).not.toHaveBeenCalled()
      })
    }),
})
