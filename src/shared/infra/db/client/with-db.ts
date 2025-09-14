import "server-only"

import { neonConfig, Pool } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-serverless"
import ws from "ws"
import { env } from "@/config/env"
import { params } from "../params"

neonConfig.webSocketConstructor = ws

const createNodeWsDatabaseClient = () => {
  const pool = new Pool({ connectionString: env.DATABASE_URL, max: 1 })
  const db = drizzle({ client: pool, ...params })

  return { db, pool }
}

/**
 * Use this for Node transactions or other session features.
 */
const withDb = async <T>(
  fn: (db: ReturnType<typeof createNodeWsDatabaseClient>["db"]) => Promise<T>,
) => {
  const { db, pool } = createNodeWsDatabaseClient()

  try {
    return await fn(db)
  } finally {
    await pool.end()
  }
}

export { withDb }
