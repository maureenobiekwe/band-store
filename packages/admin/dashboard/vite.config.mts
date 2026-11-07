import inject from "@band-store/admin-vite-plugin"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import inspect from "vite-plugin-inspect"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const BASE = env.VITE_band-store_BASE || "/"
  const BACKEND_URL = env.VITE_band-store_BACKEND_URL || "http://localhost:9000"
  const STOREFRONT_URL =
    env.VITE_band-store_STOREFRONT_URL || "http://localhost:8000"

  /**
   * Add this to your .env file to specify the project to load admin extensions from.
   */
  const BAND_STORE_PROJECT = env.VITE_band-store_PROJECT || null
  const sources = BAND_STORE_PROJECT ? [BAND_STORE_PROJECT] : []

  return {
    plugins: [
      inspect(),
      react(),
      inject({
        sources,
      }),
    ],
    define: {
      __BASE__: JSON.stringify(BASE),
      __BACKEND_URL__: JSON.stringify(BACKEND_URL),
      __STOREFRONT_URL__: JSON.stringify(STOREFRONT_URL),
      __AUTH_TYPE__: JSON.stringify("session"),
      __JWT_TOKEN_STORAGE_KEY__: JSON.stringify(""),
      __MAX_UPLOAD_FILE_SIZE__: JSON.stringify(1024 * 1024),
    },
    server: {
      open: true,
    },
  }
})
