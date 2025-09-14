import { createEnv } from "@t3-oss/env-nextjs"
import { getEnvConfig } from "./get-env-config"

const env = createEnv(getEnvConfig())

export { env }
