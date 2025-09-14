import "server-only"

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { env } from "@/config/env"
import { params } from "./params"

const createNodeHttpDatabaseClient = () =>
  drizzle({ client: neon(env.DATABASE_URL), ...params })

const globalForDb = globalThis as unknown as {
  db?: ReturnType<typeof createNodeHttpDatabaseClient>
}

/**
 * Use this for Node one-shot queries.
 */
const db = globalForDb.db ?? createNodeHttpDatabaseClient()

if (!globalForDb.db) globalForDb.db = db

export { db }
