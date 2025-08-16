import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import "../globals.css";

 
export default function AdminLayout({ children }: { children: React.ReactNode }) {
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