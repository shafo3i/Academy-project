/*
  Warnings:

  - You are about to drop the column `courseId` on the `CourseRegistration` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."CourseRegistration" DROP CONSTRAINT "CourseRegistration_courseId_fkey";

-- AlterTable
ALTER TABLE "public"."CourseRegistration" DROP COLUMN "courseId";
