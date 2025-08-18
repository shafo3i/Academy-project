import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle,  CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import prisma from "@/lib/prisma"
import Link from "next/link"
import { Input } from "@/components/ui/input"
export default async function RegisteredDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
  const registered = await prisma.courseRegistration.findUnique({
    where: {
      id,
    }
  })
  prisma.$connect().catch((e) => {
    console.error("Error connecting to Prisma:", e)
  })
  return (
    <Card className="w-full max-w-2xl mx-auto mt-10 ">
      <CardHeader>
        <CardTitle>Registration Details</CardTitle>
        <CardDescription>Details of the registration with ID: {id}</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 ">

          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Child's Full Name</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.childFullName}</p>
          </div>
          </div>
          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Parent's Full Name</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.parentFullName}</p>
          </div>
          </div>
          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Email</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.email}</p>
          </div>
          </div>
          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Children's Names</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.childrens.join(", ")}</p>
          </div>
          </div>
          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Phone</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.phone}</p>
          </div>
          </div>
          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Children's Age</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.childrenAge}</p>
          </div>
          </div>
          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Country</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.country}</p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Parent's Relation</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.parentRelation}</p>
          </div>
          </div>

          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Address </Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.address}</p>
          </div>
          </div>

          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Registration date</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.createdAt.toLocaleDateString()}</p>
          </div>
          </div>

          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Fee</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.fee}</p>
          </div>
          </div>

          <div className="flex flex-col items-start space-y-2 border-b">
            <Label className="font-semibold">Note Book</Label>
            <div className="w-full bg-gray-100 p-2 rounded-md">
            <p>{registered?.noteBookPosted ? "Notebook has been requested." : "No notebook has been requested."}</p>
            {/* <Input type="text" value={registered?.noteBookPosted ? "Notebook has been requested." : "No notebook has been requested."} disabled /> */}
          </div>
          </div>

        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href="/dashboard">
          <Button variant="secondary">Back to Dashboard</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}