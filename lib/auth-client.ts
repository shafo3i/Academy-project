import { createAuthClient } from "better-auth/react"
import { adminClient } from "better-auth/client/plugins"
export const authClient = createAuthClient({
    plugins: [
        // Add your plugins here
        adminClient()
    ],
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "https://almufeedaacademy.com"
})

export const { signIn, signUp, useSession } = createAuthClient()