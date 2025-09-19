"use server"

import { StackHandler } from "@stackframe/stack"
import { auth } from "@/shared/clients/auth.client"

const StackAuthPage = (props: PageProps<"/stack-auth/[...stack]">) => {
  return <StackHandler fullPage app={auth} routeProps={props} />
}

export default StackAuthPage
