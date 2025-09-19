import { defineConfig } from "drizzle-kit"
import { getEnv } from "@/shared/config/env"

const env = getEnv()

const drizzleConfig = defineConfig({
  out: ".drizzle",

  dialect: "postgresql",
  schema: ["src/features/love-store/data/schemas/index.ts"],
  introspect: {
    casing: "camel",
  },

  dbCredentials: {
    url: env.DATABASE_URL,
  },
})

export default drizzleConfig
