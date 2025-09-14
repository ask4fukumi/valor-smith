"use server"

import { StackHandler } from "@stackframe/stack"
import { authApp } from "@/shared/infra/stack-auth"

const StackAuthPage = (props: PageProps<"/stack-auth/[...stack]">) => {
  return <StackHandler fullPage app={authApp} routeProps={props} />
}

export default StackAuthPage
