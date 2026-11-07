import { asFunction, asValue, Lifetime } from "@band-store/framework/awilix"
import { moduleProviderLoader } from "@band-store/framework/modules-sdk"
import { LoaderOptions } from "@band-store/framework/types"
import { SearchProviderService } from "@services"
import {
  SearchModuleOptions,
  SearchProviderIdentifiersRegistrationName,
  SearchProviderRegistrationPrefix,
} from "@types"
import { hasband-storeSearchCredentials, BandStoreSearchService } from "../providers"

const registrationFn = async (klass, container, pluginOptions) => {
  const key = SearchProviderService.getRegistrationIdentifier(
    klass,
    pluginOptions.id
  )

  container.register({
    [SearchProviderRegistrationPrefix + key]: asFunction(
      (cradle) => new klass(cradle, pluginOptions.options ?? {}),
      {
        lifetime: klass.LIFE_TIME || Lifetime.SINGLETON,
      }
    ),
  })

  container.registerAdd(SearchProviderIdentifiersRegistrationName, asValue(key))
}

export default async ({
  container,
  options,
}: LoaderOptions<SearchModuleOptions>): Promise<void> => {
  const { api_key, endpoint, environment_handle, fetch } = options?.cloud ?? {}

  // Register BandStore Cloud search when cloud options are present, same pattern
  // as payment's BandStore Payments and notification's cloud email. The key and
  // the environment handle may travel on the endpoint as basic auth instead.
  if (hasband-storeSearchCredentials({ api_key, endpoint, environment_handle })) {
    await registrationFn(BandStoreSearchService, container, {
      options: {
        api_key,
        endpoint,
        environment_handle,
        fetch,
      },
      id: "default",
    })
  }

  await moduleProviderLoader({
    container,
    providers: options?.providers || [],
    registerServiceFn: registrationFn,
  })
}
