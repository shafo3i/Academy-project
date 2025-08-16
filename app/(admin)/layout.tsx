import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import "../globals.css";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

 
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const reqHeaders = await headers();

  const session = await auth.api.getSession({ 
    headers: reqHeaders });

    if (!session || session.user.role !== "admin") {
      // If no session exists, redirect to the login page
      return (
        <html lang="en">
          <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
            <div className="flex flex-col min-h-screen items-center justify-center p-6 md:p-10">
              <div className="flex flex-col items-center space-y-4 p-6">
                <h1 className="text-xl font-bold">Access Denied</h1>
                <p>You do not have permission to access this page.</p>
              </div>
              <Button variant="outline">
                <Link href="/">Go to Home</Link>
              </Button>
            </div>
          </body>
        </html>
      )
    }


  return (
    <html lang="en">
        <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
          <div className="flex min-h-screen w-full">
    {/* <SidebarProvider defaultOpen={true}> */}
      
      <AppSidebar />

        {/* <SidebarTrigger /> */}
        {children}
    {/* </SidebarProvider> */}
    </div>
    </body>
    </html>
  )
}