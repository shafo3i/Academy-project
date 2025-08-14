import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { createCourse } from '@/actions/courses/actions'
import { Card, CardHeader, CardTitle,  CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export default async function NewCoursePage() {
    

    const isLoading = false;
    return (
       <Card className="w-full max-w-2xl mx-auto mt-10 h-[600px]">
           <CardHeader>
               <CardTitle>Create New Course</CardTitle>
               <CardDescription>Fill out the form below to create a new course.</CardDescription>
           </CardHeader>
           <CardContent>
               <form action={createCourse}>
                   <div className="mb-4">
                       <Label htmlFor="title">Title</Label>
                       <Input id="title" name="title" />
                   </div>
                   <div className="mb-4 space-y-2">
                       <Label htmlFor="description">Description</Label>
                       <Input id="description" name="description" />
                   </div>
                   <div className="mb-4 space-y-2">
                       <Label htmlFor="content">Content</Label>
                       <Input id="content" name="content" />
                   </div>
                   <div className="mb-4 space-y-2">
                       <Label htmlFor="image">Image</Label>
                       <Input id="image" name="image" />
                   </div>
                   <div className="mb-4 space-y-2">
                       <Label htmlFor="tags">Tags</Label>
                       <Input id="tags" name="tags" />
                   </div>
                   <Button type="submit" disabled={isLoading}>
                       {isLoading ? "Creating..." : "Create Course"}
                   </Button>
               </form>
           </CardContent>
       </Card>
    )
}