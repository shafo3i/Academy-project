
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { editCourse, getCourseById } from '@/actions/courses/actions'
import { Card, CardHeader, CardTitle,  CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import prisma from "@/lib/prisma"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
export default async function EditCourse({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const course = await prisma.course.findUnique({
        where: {
            id,
        },
    });

    const isLoading = false;
    return (
       <Card className="w-full max-w-2xl mx-auto mt-10 ">
           <CardHeader>
               <CardTitle>Edit Course</CardTitle>
               <CardDescription>Fill out the form below to edit the course.</CardDescription>
           </CardHeader>
           <CardContent>
               <form action={editCourse}>
                                    <input type="hidden" name="id" value={course?.id} />
                   <div className="mb-4">
                       <Label htmlFor="title">Title</Label>
                       <Input 
                       id="title" 
                       name="title"
                       defaultValue={course?.title || ""}
                       />
                   </div>
                   <div className="mb-4 space-y-2">
                       <Label htmlFor="description">Description</Label>
                       <Textarea 
                       rows={4}
                       id="description" name="description" defaultValue={course?.description || ""} />
                   </div>
                   <div className="mb-4 space-y-2">
                       <Label htmlFor="content">Content</Label>
                       <Textarea 
                       rows={6}
                       id="content" name="content" defaultValue={course?.content || ""} />
                   </div>
                   <div className="mb-4 space-y-2">
                       <Label htmlFor="image">Image</Label>
                       <Input id="image" name="image" defaultValue={course?.image || ""} />
                   </div>
                   <div className="mb-4 space-y-2">
                       <Label htmlFor="tags">Tags</Label>
                       <Input id="tags" name="tags" defaultValue={course?.tags.join(", ") || ""} />
                   </div>
                   <div className="mb-4 space-y-2 flex justify-between cursor-pointer">
                   <Button type="submit" disabled={isLoading}>
                       {isLoading ? "Saving..." : "Save Changes"}
                   </Button>
                   <Button type="button" variant="secondary">
                       <Link href={`/dashboard`}>
                           Cancel
                       </Link>
                   </Button>
                   </div>
               </form>
           </CardContent>
       </Card>
    )
}