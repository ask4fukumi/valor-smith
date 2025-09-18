import "server-only"

import { StackServerApp } from "@stackframe/stack"

const auth = new StackServerApp({
  tokenStore: "nextjs-cookie",

  urls: {
    handler: "/stack-auth",
  },
})

export { auth }
