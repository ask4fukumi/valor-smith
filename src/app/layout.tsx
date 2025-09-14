"use server"

import "@/shared/styles/globals.css"

import { UserButton } from "@stackframe/stack"
import type { Route } from "next"
import Link from "next/link"
import { authApp } from "@/shared/infra/stack-auth"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/components/button"
import { RootProvider } from "./root-provider"

const RootLayout = async ({ children }: LayoutProps<"/">) => {
  const user = await authApp.getUser()

  return (
    <html lang="vi">
      <body>
        <RootProvider>
          <div
            id="app"
            className={cn({
              "mx-auto grid h-dvh w-full grid-rows-[auto_1fr_auto]": true,
              "max-w-(--breakpoint-sm)": true,
              "md:max-w-(--break-point-md)": true,
              "lg:max-w-(--breakpoint-lg)": true,
              "xl:max-w-(--breakpoint-xl)": true,
            })}
          >
            <header className="flex">
              <Link href="/">Home</Link>
              <hr className="flex-1" />
              {user ? (
                <UserButton />
              ) : (
                <>
                  <Button variant="secondary">
                    <Link href={"/stack-auth/sign-in" as Route}>Sign in</Link>
                  </Button>
                  <Button variant="default">
                    <Link href={"/stack-auth/sign-up" as Route}>Sign up</Link>
                  </Button>
                </>
              )}
            </header>
            <main>{children}</main>
            <footer></footer>
          </div>
        </RootProvider>
      </body>
    </html>
  )
}

export default RootLayout
