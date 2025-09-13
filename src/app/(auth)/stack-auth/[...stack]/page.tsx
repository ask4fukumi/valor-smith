"use server"

import { StackHandler } from "@stackframe/stack"
import { stackServerApp } from "@/shared/infra/stack-auth"

const StackAuthPage = (props: PageProps<"/stack-auth/[...stack]">) => {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />
}

export default StackAuthPage
