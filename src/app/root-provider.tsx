"use server"

import { StackProvider, StackTheme } from "@stackframe/stack"
import { stackServerApp } from "@/shared/infra/stack-auth"

const RootProvider = async ({ children }: React.PropsWithChildren) => {
  return (
    <StackProvider app={stackServerApp}>
      <StackTheme>{children}</StackTheme>
    </StackProvider>
  )
}

export { RootProvider }
