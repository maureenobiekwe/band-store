import path from "path"
import { defineConfig } from "../define-config"
import { FileSystem } from "../file-system"
import { getResolvedPlugins } from "../get-resolved-plugins"

const BASE_DIR = path.join(__dirname, "sample-proj")
const fs = new FileSystem(BASE_DIR)

afterEach(async () => {
  await fs.cleanup()
})

describe("getResolvedPlugins | relative paths", () => {
  test("resolve configured plugins", async () => {
    await fs.createJson("node_modules/@band-store/draft-order/package.json", {
      name: "@band-store/draft-order",
      version: "1.0.0",
    })

    await fs.createJson("plugins/dummy/package.json", {
      name: "my-dummy-plugin",
      version: "1.0.0",
    })

    const plugins = await getResolvedPlugins(
      fs.basePath,
      defineConfig({
        plugins: [
          {
            resolve: "./plugins/dummy",
            options: {
              apiKey: "asecret",
            },
          },
          {
            resolve: "@band-store/draft-order",
            options: {},
          },
        ],
      }),
      false
    )

    expect(plugins).toEqual(
      expect.arrayContaining([
        {
          id: "@band-store/draft-order",
          modules: [],
          name: "@band-store/draft-order",
          options: {},
          resolve: path.join(
            fs.basePath,
            "node_modules/@band-store/draft-order/.band-store/server/src"
          ),
          version: "1.0.0",
        },
        {
          resolve: path.join(fs.basePath, "./plugins/dummy/.band-store/server/src"),
          admin: undefined,
          name: "my-dummy-plugin",
          id: "my-dummy-plugin",
          options: { apiKey: "asecret" },
          version: "1.0.0",
          modules: [],
        },
      ])
    )
  })

  test("scan plugin modules", async () => {
    await fs.createJson("node_modules/@band-store/draft-order/package.json", {
      name: "@band-store/draft-order",
      version: "1.0.0",
    })
    await fs.createJson("plugins/dummy/package.json", {
      name: "my-dummy-plugin",
      version: "1.0.0",
    })
    await fs.create(
      "plugins/dummy/.band-store/server/src/modules/blog/index.js",
      ``
    )

    const plugins = await getResolvedPlugins(
      fs.basePath,
      defineConfig({
        plugins: [
          {
            resolve: "./plugins/dummy",
            options: {
              apiKey: "asecret",
            },
          },
        ],
      }),
      false
    )

    expect(plugins).toEqual(expect.arrayContaining([
      {
        resolve: path.join(fs.basePath, "./plugins/dummy/.band-store/server/src"),
        admin: undefined,
        name: "my-dummy-plugin",
        id: "my-dummy-plugin",
        options: { apiKey: "asecret" },
        version: "1.0.0",
        modules: [
          {
            options: {
              apiKey: "asecret",
            },
            resolve: "./plugins/dummy/.band-store/server/src/modules/blog",
          },
        ],
      },
      {
        id: "@band-store/draft-order",
        modules: [],
        name: "@band-store/draft-order",
        options: {},
        resolve: path.join(
          fs.basePath,
          "node_modules/@band-store/draft-order/.band-store/server/src"
        ),
        version: "1.0.0",
      },
    ]))
  })

  test("throw error when package.json file is missing", async () => {
    await fs.createJson("node_modules/@band-store/draft-order/package.json", {
      name: "@band-store/draft-order",
      version: "1.0.0",
    })

    const resolvePlugins = async () =>
      getResolvedPlugins(
        fs.basePath,
        defineConfig({
          plugins: [
            {
              resolve: "./plugins/dummy",
              options: {
                apiKey: "asecret",
              },
            },
          ],
        }),
        false
      )

    await expect(resolvePlugins()).rejects.toThrow(
      `Unable to resolve plugin "./plugins/dummy". Make sure the plugin directory has a package.json file`
    )
  })

  test("resolve admin source from band-store-plugin-options file", async () => {
    await fs.createJson("node_modules/@band-store/draft-order/package.json", {
      name: "@band-store/draft-order",
      version: "1.0.0",
    })
    await fs.createJson("plugins/dummy/package.json", {
      name: "my-dummy-plugin",
      version: "1.0.0",
    })
    await fs.create(
      "plugins/dummy/.band-store/server/src/modules/blog/index.js",
      ``
    )
    await fs.createJson(
      "plugins/dummy/.band-store/server/band-store-plugin-options.json",
      {
        srcDir: path.join(fs.basePath, "plugins/dummy/src"),
      }
    )

    const plugins = await getResolvedPlugins(
      fs.basePath,
      defineConfig({
        plugins: [
          {
            resolve: "./plugins/dummy",
            options: {
              apiKey: "asecret",
            },
          },
          {
            resolve: "@band-store/draft-order",
            options: {},
          },
        ],
      }),
      false
    )

    expect(plugins).toEqual(expect.arrayContaining([
      {
        resolve: path.join(fs.basePath, "./plugins/dummy/.band-store/server/src"),
        admin: {
          type: "local",
          resolve: path.join(fs.basePath, "./plugins/dummy/src/admin"),
        },
        name: "my-dummy-plugin",
        id: "my-dummy-plugin",
        options: { apiKey: "asecret" },
        version: "1.0.0",
        modules: [
          {
            options: {
              apiKey: "asecret",
            },
            resolve: "./plugins/dummy/.band-store/server/src/modules/blog",
          },
        ],
      },
      {
        id: "@band-store/draft-order",
        modules: [],
        name: "@band-store/draft-order",
        options: {},
        resolve: path.join(
          fs.basePath,
          "node_modules/@band-store/draft-order/.band-store/server/src"
        ),
        version: "1.0.0",
      },
    ]))
  })
})

describe("getResolvedPlugins | package reference", () => {
  test("resolve configured plugins", async () => {
    await fs.createJson("node_modules/@band-store/draft-order/package.json", {
      name: "@band-store/draft-order",
      version: "1.0.0",
    })
    await fs.createJson("package.json", {})
    await fs.createJson("node_modules/@plugins/dummy/package.json", {
      name: "my-dummy-plugin",
      version: "1.0.0",
    })

    const plugins = await getResolvedPlugins(
      fs.basePath,
      defineConfig({
        plugins: [
          {
            resolve: "@plugins/dummy",
            options: {
              apiKey: "asecret",
            },
          },
        ],
      }),
      false
    )

    expect(plugins).toEqual(expect.arrayContaining([
      {
        resolve: path.join(
          fs.basePath,
          "node_modules/@plugins/dummy/.band-store/server/src"
        ),
        admin: undefined,
        name: "my-dummy-plugin",
        id: "my-dummy-plugin",
        options: { apiKey: "asecret" },
        version: "1.0.0",
        modules: [],
      },
      {
        id: "@band-store/draft-order",
        modules: [],
        name: "@band-store/draft-order",
        options: {},
        resolve: path.join(
          fs.basePath,
          "node_modules/@band-store/draft-order/.band-store/server/src"
        ),
        version: "1.0.0",
      },
    ]))
  })

  test("scan plugin modules", async () => {
    await fs.createJson("node_modules/@band-store/draft-order/package.json", {
      name: "@band-store/draft-order",
      version: "1.0.0",
    })
    await fs.createJson("package.json", {})
    await fs.createJson("node_modules/@plugins/dummy/package.json", {
      name: "my-dummy-plugin",
      version: "1.0.0",
    })
    await fs.create(
      "node_modules/@plugins/dummy/.band-store/server/src/modules/blog/index.js",
      ``
    )

    const plugins = await getResolvedPlugins(
      fs.basePath,
      defineConfig({
        plugins: [
          {
            resolve: "@plugins/dummy",
            options: {
              apiKey: "asecret",
            },
          },
        ],
      }),
      false
    )

    expect(plugins).toEqual(expect.arrayContaining([
      {
        resolve: path.join(
          fs.basePath,
          "node_modules/@plugins/dummy/.band-store/server/src"
        ),
        admin: undefined,
        name: "my-dummy-plugin",
        id: "my-dummy-plugin",
        options: { apiKey: "asecret" },
        version: "1.0.0",
        modules: [
          {
            options: {
              apiKey: "asecret",
            },
            resolve: "@plugins/dummy/.band-store/server/src/modules/blog",
          },
        ],
      },
      {
        id: "@band-store/draft-order",
        modules: [],
        name: "@band-store/draft-order",
        options: {},
        resolve: path.join(
          fs.basePath,
          "node_modules/@band-store/draft-order/.band-store/server/src"
        ),
        version: "1.0.0",
      },
    ]))
  })

  test("throw error when package.json file is missing", async () => {
    await fs.createJson("node_modules/@band-store/draft-order/package.json", {
      name: "@band-store/draft-order",
      version: "1.0.0",
    })
    const resolvePlugins = async () =>
      getResolvedPlugins(
        fs.basePath,
        defineConfig({
          plugins: [
            {
              resolve: "@plugins/dummy",
              options: {
                apiKey: "asecret",
              },
            },
            {
              resolve: "@band-store/draft-order",
              options: {},
            },
          ],
        }),
        false
      )

    await expect(resolvePlugins()).rejects.toThrow(
      `Unable to resolve plugin "@plugins/dummy". Make sure the plugin directory has a package.json file`
    )
  })
})
