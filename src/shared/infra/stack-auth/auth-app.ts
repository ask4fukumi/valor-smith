import "server-only"

import { StackServerApp } from "@stackframe/stack"

const authApp = new StackServerApp({
  tokenStore: "nextjs-cookie",

  urls: {
    handler: "/stack-auth",
  },
})

export { authApp }
