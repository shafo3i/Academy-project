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



export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const [isLoading, setIsLoading] = useState(false)

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const name = formData.get("name")?.toString()
      const email = formData.get("email")?.toString()
      const password = formData.get("password")?.toString()

      if (!name || !email || !password) {
        toast.error("Please fill in all required fields")
        return
      }

      const { data, error } = await authClient.signUp.email({ 
        name, 
        email,
        password,
        callbackURL: `${window.location.origin}/login`
      }, {
        onRequest: (ctx) => {
          // Show loading state
          toast.loading("Signing up...")
          setIsLoading(true)
          
        },
        onSuccess: (ctx) => {
            toast.success("Signed up successfully")
          window.location.href = "/login"
          setIsLoading(false)
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Failed to sign up")
          setIsLoading(false)
        }
      })
    }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign up for an account</CardTitle>
          <CardDescription>
            Enter your details below to create a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
            <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    />
              </div>
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
                  {isLoading ? "Signing up..." : "Sign Up"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
