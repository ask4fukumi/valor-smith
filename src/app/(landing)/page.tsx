"use server"

import { db, getDb, withDb } from "@/shared/infra/db"

const LandingPage = async (_: PageProps<"/">) => {
  console.table(
    await db.query.userProperties.findMany({
      where: (fields, operators) => {
        return operators.eq(fields.starNum, 0)
      },
    }),
  )

  return (
    <>
      <div className="h-dvh">Root Page</div>
      <div className="h-dvh">Root Page</div>
      <div className="h-dvh">Root Page</div>
    </>
  )
}

export default LandingPage
