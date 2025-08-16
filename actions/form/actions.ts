'use server';

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function formRegistration(formData: FormData) {
  const courseId = formData.get("courseId") as string;
  const childFullName = formData.get("childFullName") as string;
  const email = formData.get("email") as string;
  const childrenAge = formData.get("childrenAge") as string;
  const parentFullName = formData.get("parentFullName") as string;
  const parentRelation = formData.get("parentRelation") as string;
  const country = formData.get("country") as string;
  const address = formData.get("address") as string;
  const fee = formData.get("fee") as string;
  const childrens = formData.getAll("childrens").filter((v): v is string => typeof v === "string");
  const noteBookPostedEntry = formData.get("noteBookPosted");
  const noteBookPosted = typeof noteBookPostedEntry === "string"
    ? (noteBookPostedEntry === "true" || noteBookPostedEntry === "on")
    : false;

  // Validation
  if (!courseId || !childFullName || !email || !parentFullName || !childrenAge || !parentRelation || !country || !address || !fee) {
    throw new Error("All required fields must be filled");
  }

  try {
    await prisma.courseRegistration.create({
      data: {
        course: { connect: { id: courseId } },
        childFullName,
        email,
        childrenAge: parseInt(childrenAge, 10),
        parentFullName,
        parentRelation,
        country,
        address,
        fee: parseFloat(fee),
        childrens,
        noteBookPosted
      },
    });

    // Redirect to success page or back to form with success message
    redirect('/?success=true');
  } catch (error) {
    console.error('Registration error:', error);
    throw new Error('Failed to submit registration. Please try again.');
  }
}