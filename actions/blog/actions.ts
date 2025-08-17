'use server';
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export const getAllCourses = async () => {
    try {
        const courses = await prisma.course.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            take: 1,
        });
        revalidatePath('/courses');
        return courses;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw new Error("Failed to fetch courses");
    }
};