"use server"

import "./globals.css"

import { StackProvider, StackTheme } from "@stackframe/stack"
import { auth } from "@/shared/clients"

const RootProvider = ({ children }: React.PropsWithChildren) => (
  <StackProvider app={auth}>
    <StackTheme>{children}</StackTheme>
  </StackProvider>
)

const RootLayout = async ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="vi">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}

export default RootLayout
