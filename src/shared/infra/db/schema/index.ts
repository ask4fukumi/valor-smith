import { relations, sql } from "drizzle-orm"
import { check, index, integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core"

const userProperties = pgTable(
  "user_properties",
  {
    userId: uuid("user_id").primaryKey(),
    storeId: uuid("store_id").references(() => stores.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
    starNum: integer("star_num").default(0),
  },
  (t) => [index().on(t.storeId), check("star_num_gte_0", sql`${t.starNum} >= 0`)],
)

const usersRelations = relations(userProperties, ({ one, many }) => ({
  store: one(stores, {
    fields: [userProperties.storeId],
    references: [stores.id],
  }),
  goods: many(goods),
}))

const stores = pgTable("stores", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
})

const storesRelations = relations(stores, ({ many }) => ({
  users: many(userProperties),
  goods: many(goods),
}))

const goods = pgTable(
  "goods",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    storeId: uuid("store_id").references(() => stores.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    userId: uuid("user_id").references(() => userProperties.userId, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    name: varchar("name", { length: 255 }),
    description: text("description"),
    star_price: integer("star_price").default(0),
  },
  (t) => [
    index().on(t.storeId, t.userId),
    check("star_price_gte_0", sql`${t.star_price} >= 0`),
  ],
)

const goodsRelations = relations(goods, ({ one }) => ({
  store: one(stores, {
    fields: [goods.storeId],
    references: [stores.id],
  }),
  seller: one(userProperties, {
    fields: [goods.userId],
    references: [userProperties.userId],
  }),
}))

export { goods, goodsRelations, stores, storesRelations, userProperties, usersRelations }
