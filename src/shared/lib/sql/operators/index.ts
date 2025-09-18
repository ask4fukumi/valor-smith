import type { BinaryOperator } from "drizzle-orm"
import { sql } from "drizzle-orm"

const gte: BinaryOperator = (left: unknown, right: unknown) => sql`${left} >= ${right}`

export { gte }
