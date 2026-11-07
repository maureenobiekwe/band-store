import { DashboardApp } from "./dashboard-app"
import { DashboardPlugin } from "./dashboard-app/types"

import displayModule from "virtual:band-store/displays"
import formModule from "virtual:band-store/forms"
import i18nModule from "virtual:band-store/i18n"
import layoutModule from "virtual:band-store/layouts"
import menuItemModule from "virtual:band-store/menu-items"
import routeModule from "virtual:band-store/routes"
import widgetModule from "virtual:band-store/widgets"
import "virtual:band-store/cell-renderers"
import "virtual:band-store/search-entities"

import { defineCellRenderer } from "./lib/table/cell-renderers"
import {
  clearSearchEntities,
  defineSearchEntity,
} from "./lib/search/search-entities"

import "./index.css"

import { registerReloadOnPreloadError } from "./lib/reload-on-preload-error"

if (typeof window !== "undefined") {
  registerReloadOnPreloadError()
}

const localPlugin = {
  widgetModule,
  routeModule,
  displayModule,
  formModule,
  menuItemModule,
  i18nModule,
  layoutModule,
}

interface AppProps {
  plugins?: DashboardPlugin[]
}

function App({ plugins = [] }: AppProps) {
  const app = new DashboardApp({
    plugins: [localPlugin, ...plugins],
  })

  return <div>{app.render()}</div>
}

export { defineCellRenderer, defineSearchEntity, clearSearchEntities }
export default App
