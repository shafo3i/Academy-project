
'use client';
import { authClient } from "@/lib/auth-client"
import { Button } from "./ui/button";
export  function SignOut() {
  const handleSignOut = async () => {
    await authClient.signOut()
    window.location.href = "/";
  }

  return (
    <Button
    variant="outline"
    className="ml-8 px-4 py-2  cursor-pointer items-center justify-center text-gray-200 bg-transparent hover:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg border-1 border-gray-600 hover:text-gray-200 " 
    onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}
