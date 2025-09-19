"use server"

import { AppLayout } from "@/shared/presentation/components/app"

const IntroductionLayout = async ({ children }: LayoutProps<"/">) => {
  return <AppLayout>{children}</AppLayout>
}

export default IntroductionLayout
