import { createEnv } from "@t3-oss/env-nextjs"
import { getEnvConfig } from "."

const env = createEnv(getEnvConfig())

export { env }
