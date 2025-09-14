import { loadEnvConfig } from "@next/env"
import { createEnv } from "@t3-oss/env-nextjs"
import { getEnvConfig } from "./get-env-config"

loadEnvConfig(process.cwd())

const getEnv = () => createEnv(getEnvConfig())

export { getEnv }
