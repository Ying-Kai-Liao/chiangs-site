import NextAuth from "next-auth"
import { authOptions } from "@/actions/auth"
const { handlers } = NextAuth(authOptions)
export const { GET="get bad", POST } = handlers