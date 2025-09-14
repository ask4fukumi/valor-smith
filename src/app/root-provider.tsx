"use server"

import { StackProvider, StackTheme } from "@stackframe/stack"
import { authApp } from "@/shared/infra/stack-auth"

const RootProvider = async ({ children }: React.PropsWithChildren) => {
  return (
    <StackProvider app={authApp}>
      <StackTheme>{children}</StackTheme>
    </StackProvider>
  )
}

export { RootProvider }
