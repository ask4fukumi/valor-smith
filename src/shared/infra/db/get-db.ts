import "server-only"

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { env } from "@/config/env"
import { params } from "./params"

/**
 * Use this in edge runtime (like API routes).
 */
const getDb = () => drizzle({ client: neon(env.DATABASE_URL), ...params })

export { getDb }
