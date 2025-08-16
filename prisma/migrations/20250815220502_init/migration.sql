/*
  Warnings:

  - You are about to drop the column `ChildFulltName` on the `CourseRegistration` table. All the data in the column will be lost.
  - Added the required column `ChildFullName` to the `CourseRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."CourseRegistration" DROP COLUMN "ChildFulltName",
ADD COLUMN     "ChildFullName" TEXT NOT NULL;
