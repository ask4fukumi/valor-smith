import type { NextConfig } from "next"

export default function nextConfigFunction(): NextConfig {
  return {
    experimental: {
      reactCompiler: true,
      viewTransition: true,
      inlineCss: true,
      useLightningcss: true,
    },
    typedRoutes: true,
  } satisfies NextConfig
}
