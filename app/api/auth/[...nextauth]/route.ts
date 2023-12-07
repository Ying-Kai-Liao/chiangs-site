import NextAuth from "next-auth"
import { authOptions } from "@/actions/auth"
const handler = NextAuth(authOptions) // this is so fucking important
export const { GET, POST } = handler