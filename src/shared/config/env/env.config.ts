import type { createEnv } from "@t3-oss/env-nextjs"
import { string, url } from "zod/mini"

const getEnvConfig: () => Parameters<typeof createEnv>[0] = () => ({
  server: {
    DATABASE_URL: string().check(url()),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
})

export { getEnvConfig }
