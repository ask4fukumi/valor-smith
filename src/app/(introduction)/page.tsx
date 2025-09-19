"use server"

import { redirect } from "next/navigation"
import { auth } from "@/shared/clients/auth.client"

const IntroductionPage = async () => {
  if (await auth.getUser()) redirect("/store")

  return "Landing Page"
}

export default IntroductionPage
