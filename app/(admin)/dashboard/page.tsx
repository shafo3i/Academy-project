'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow  } from "@/components/ui/table";
import Image from "next/image";
import { getAllRegistrations }  from "@/actions/form/actions";
import { getAllCourses } from "@/actions/blog/actions";
import { useState, useEffect } from "react";
import { editCourse } from "@/actions/courses/actions";

interface Course {
  id: string;
  title: string;
  description: string | null;
  content: string | null;
  image: string | null;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface Registration {
  id: string;
  childFullName: string; 
  parentFullName: string;
  email: string;
  childrens: string[];
  createdAt: Date;
  noteBookPosted: boolean | null;
}

export default function AdminDashboard() {
  // const [courseCount, setCourseCount] = useState(0);
  const [formCount, setFormCount] = useState(0);
  const [recentCourses, setRecentCourses] = useState<Course[]>([]);
  const [latestRegistrations, setLatestRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getAllCourses();
      setRecentCourses(data);
      setIsLoading(false);
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const data = await getAllRegistrations();
      setLatestRegistrations(data.at(0) ? data.slice(0, 5) : []);
      setIsLoading(false);
    };
    fetchRegistrations();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            <p className="text-2xl font-bold">{recentCourses.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-400 to-blue-400 shadow-md rounded-lg">
          <CardHeader>
            <CardTitle>Total Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{latestRegistrations.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-yellow-400 to-red-400 shadow-md rounded-lg">
          <CardHeader>
            <CardTitle>Latest Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{latestRegistrations[0]?.childFullName}</p>
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
                <TableHead>Child Name</TableHead>
                <TableHead>Parent Name</TableHead>
                <TableHead>Childrens</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {latestRegistrations.map((form) => (
                <TableRow key={form.id}>
                  <TableCell>{form.childFullName}</TableCell>
                  <TableCell>{form.parentFullName}</TableCell>
                  <TableCell>{form.childrens.join(", ")}</TableCell>
                  <TableCell>{form.email}</TableCell>
                  <TableCell>{form.createdAt.toLocaleDateString()}</TableCell>
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
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>{course.title}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Link href={`/dashboard/courses/edit/${course.id}`}>
                            <Button variant="outline">Edit</Button>
                          </Link>
                          
                        </div>
                      </TableCell>
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
