import "server-only"

import type { DrizzleConfig } from "drizzle-orm"
import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { dbConfig } from "@/shared/config/db"
import { env } from "@/shared/config/env"

const createNodeDatabaseClient = <Schema extends Record<string, unknown>>(
  schema: DrizzleConfig<Schema>["schema"],
) => drizzle({ client: neon(env.DATABASE_URL), ...dbConfig, schema })

export { createNodeDatabaseClient }
