import { defineConfig } from "drizzle-kit"
import { getEnv } from "@/config/get-env"

const env = getEnv()

const drizzleConfig = defineConfig({
  out: ".drizzle",

  dialect: "postgresql",
  schema: "src/shared/infra/db/schema/index.ts",
  introspect: {
    casing: "camel",
  },

  dbCredentials: {
    url: env.DATABASE_URL,
  },
})

export default drizzleConfig
