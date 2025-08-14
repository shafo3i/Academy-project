import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import "../globals.css";

 
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body>
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