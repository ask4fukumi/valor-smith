import "server-only"

import { StackServerApp } from "@stackframe/stack"

const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",

  urls: {
    handler: "/stack-auth",
  },
})

export { stackServerApp }
