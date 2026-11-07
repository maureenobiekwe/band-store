import {
  ISearchModuleService,
  LoadedModule,
  BandStoreContainer,
  RemoteQueryFunction,
} from "@band-store/types"
import { extractRelationsFromGQL } from "@band-store/utils"
import { buildSchema } from "graphql"
import { createQuery, RelationMap } from "../../src"
import {
  createFakeLoadedModules,
  createTestModules,
  getJoinerConfigs,
  TestModules,
} from "./modules"

function createRelationMap(modulesLoaded: LoadedModule[]): RelationMap {
  const mergedSchema = getJoinerConfigs(modulesLoaded)
    .map((config) => config.schema)
    .filter(Boolean)
    .join("\n")

  const schema = buildSchema(mergedSchema)

  return extractRelationsFromGQL(schema.getTypeMap() as any)
}

export function setup(options?: { searchModule?: ISearchModuleService }) {
  const modules = createTestModules()
  const modulesLoaded = createFakeLoadedModules(modules)
  const relationMap = createRelationMap(modulesLoaded)

  const container = {
    resolve: jest.fn(),
  } as unknown as BandStoreContainer

  const query = createQuery({
    modulesLoaded,
    relationMap,
    indexModule: null as any,
    searchModule: options?.searchModule,
    container,
  }) as RemoteQueryFunction

  return {
    query,
    container,
    modules,
    modulesLoaded,
    relationMap,
  }
}

export type { TestModules }
