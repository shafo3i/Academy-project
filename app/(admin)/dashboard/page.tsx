import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-4">
     <div className=" flex items-center justify-between mb-6 ">
      <div className="div"> <h1 className="text-2xl font-bold">Admin Dashboard</h1></div>
      <div className="div">
        <Button 
        className="rounded-lg"
        variant="default"><Link href="/dashboard/courses/new">Create New</Link></Button>
        </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <div className="div">Card 1</div>
         <div className="div">Card 2</div>
         <div className="div">Card 3</div>
         </div>
         </div>
  )
}
