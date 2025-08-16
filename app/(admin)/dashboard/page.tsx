import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow  } from "@/components/ui/table";
import Image from "next/image";

export default async function AdminDashboard() {


    const courses = await prisma.course.findMany();

    const recentCourses = courses.slice(0, 5);


    const forms = await prisma.courseRegistration.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        course: true,
      },
    });

    const courseCount = courses.length;
    const formCount = forms.length;

    const latestRegistrations = forms.slice(0, 5);

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
        <Card className="bg-gradient-to-r from-blue-400 to-purple-400">
          <CardHeader>
            <CardTitle>Total Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{courseCount}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-400 to-blue-400 shadow-md rounded-lg">
          <CardHeader>
            <CardTitle>Total Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formCount}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-yellow-400 to-red-400 shadow-md rounded-lg">
          <CardHeader>
            <CardTitle>Latest Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{latestRegistrations.length}</p>
          </CardContent>
        </Card>
       
      </div>
      <div className="flex  mt-6 mb-4 gap-4">
        <div className="flex-1 ">
          <Card className="mt-6  ">
        <CardHeader className=" ">
          <CardTitle>Latest Registrations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table >
            <TableHeader className=" bg-gradient-to-b from-blue-100 to-purple-100">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Course</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {latestRegistrations.map((form) => (
                <TableRow key={form.id}>
                  <TableCell>{form.childFullName}</TableCell>
                  <TableCell>{form.email}</TableCell>
                  <TableCell>{form.course.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
        </div>
        <div className="">
          <Card className="mt-6 ">
            <CardHeader className=" ">
              <CardTitle>Recent Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader className=" bg-gradient-to-b from-blue-100 to-purple-100">
                  <TableRow>
                    <TableHead>Title</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>{course.title}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
