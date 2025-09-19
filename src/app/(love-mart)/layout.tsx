"use server"

import { AppLayout } from "@/shared/presentation/components/app"

const LoveMartLayout = ({ children }: LayoutProps<"/">) => (
  <AppLayout>{children}</AppLayout>
)

export default LoveMartLayout
