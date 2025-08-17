'use server';
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCourse(formDate: FormData) {
  const title = formDate.get("title") as string;
  const description = formDate.get("description") as string;
  const content = formDate.get("content") as string;
  const image = formDate.get("image") as string;
  const tagsRaw = formDate.get("tags");
  const tags = typeof tagsRaw === "string" ? tagsRaw.split(",").map(tag => tag.trim()) : [];

  if (!title || !description || !content || !image || tags.length === 0) {
    throw new Error("All fields are required");
  }

  const course = await prisma.course.create({
    data: {
      title,
      description,
      content,
      image,
      tags,
    },
  });
}

//edit course
export async function editCourse(formDate: FormData) {
  const id = formDate.get("id") as string;
  const title = formDate.get("title") as string;
  const description = formDate.get("description") as string;
  const content = formDate.get("content") as string;
  const image = formDate.get("image") as string;
  const tagsRaw = formDate.get("tags");
  const tags = typeof tagsRaw === "string" ? tagsRaw.split(", ").map(tag => tag.trim()) : [];

  if (!title || !description || !content || !image || tags.length === 0) {
    throw new Error("All fields are required");
  }

  const course = await prisma.course.update({
    where: {
      id: id,
    },
    data: {
      title,
      description,
      content,
      image,
      tags,
    },
    
  });

  revalidatePath(`/dashboard/courses/edit/${id}`);
  

}


//get course by id
export async function getCourseById(id: string) {
  const course = await prisma.course.findUnique({
    where: {
      id: id,
    },
  });

  return course;
}



