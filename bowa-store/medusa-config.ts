import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:8000,http://localhost:4321",
      adminCors: process.env.ADMIN_CORS || "http://localhost:9000,http://localhost:4321",
      authCors: process.env.AUTH_CORS || "http://localhost:8000,http://localhost:9000,http://localhost:4321",
    },
    // ...
  },
})

