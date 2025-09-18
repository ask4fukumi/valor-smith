import "server-only"

import type { DrizzleConfig } from "drizzle-orm"
import { neonConfig, Pool } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-serverless"
import ws from "ws"
import { dbConfig } from "@/shared/config/db"
import { env } from "@/shared/config/env"

neonConfig.webSocketConstructor = ws

const createWebsocketDatabaseClientFunction = <Schema extends Record<string, unknown>>(
  schema: DrizzleConfig<Schema>["schema"],
) => {
  const pool = new Pool({ connectionString: env.DATABASE_URL, max: 1 })
  const client = drizzle({ client: pool, ...dbConfig, schema })

  const withDbClient = async <T>(fn: (db: typeof client) => Promise<T>) => {
    try {
      return await fn(client)
    } finally {
      await pool.end()
    }
  }

  return withDbClient
}

export { createWebsocketDatabaseClientFunction }
