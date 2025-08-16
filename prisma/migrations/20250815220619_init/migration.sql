/*
  Warnings:

  - You are about to drop the column `ChildFullName` on the `CourseRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `ChildrenAge` on the `CourseRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `Childrens` on the `CourseRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `Country` on the `CourseRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `ParentFullName` on the `CourseRegistration` table. All the data in the column will be lost.
  - You are about to drop the column `ParentRelation` on the `CourseRegistration` table. All the data in the column will be lost.
  - Added the required column `childFullName` to the `CourseRegistration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childrenAge` to the `CourseRegistration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `CourseRegistration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentFullName` to the `CourseRegistration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentRelation` to the `CourseRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."CourseRegistration" DROP COLUMN "ChildFullName",
DROP COLUMN "ChildrenAge",
DROP COLUMN "Childrens",
DROP COLUMN "Country",
DROP COLUMN "ParentFullName",
DROP COLUMN "ParentRelation",
ADD COLUMN     "childFullName" TEXT NOT NULL,
ADD COLUMN     "childrenAge" INTEGER NOT NULL,
ADD COLUMN     "childrens" TEXT[],
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "parentFullName" TEXT NOT NULL,
ADD COLUMN     "parentRelation" TEXT NOT NULL;
