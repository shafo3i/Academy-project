'use client';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { useState } from "react";
import { toast } from "sonner";



export function SignInForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const [isLoading, setIsLoading] = useState(false)

    const session = authClient.useSession();

    const isAdmin = session?.data?.user.role === "admin";

    const handleSignIn   = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email")?.toString()
      const password = formData.get("password")?.toString()

      if (!email || !password) {
        toast.error("Please fill in all required fields")
        return
      }

      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: `${window.location.origin}/dashboard`
      }, {
        onRequest: (ctx) => {
          // Show loading state
          toast.loading("Signing in...")
          setIsLoading(true)
          
        },
        onSuccess: (ctx) => {
            toast.success("Signed in successfully")
          setIsLoading(false)
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Failed to sign in")
          setIsLoading(false)
        }
      })

      if (isAdmin) {
        window.location.href = "/dashboard"
      }
      else {
        window.location.href = "/"
      }
      
    }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>
            Enter your credentials below to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  name="password"
                  type="password" 
                  placeholder="Enter your password"
                  required 
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
