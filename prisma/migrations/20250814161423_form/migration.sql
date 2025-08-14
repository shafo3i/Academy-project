-- CreateTable
CREATE TABLE "public"."CourseRegistration" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "Childrens" TEXT[],
    "ChildFulltName" TEXT NOT NULL,
    "ChildrenAge" INTEGER NOT NULL,
    "ParentFullName" TEXT NOT NULL,
    "ParentRelation" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "noteBookPosted" BOOLEAN,
    "address" TEXT NOT NULL,
    "fee" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseRegistration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."CourseRegistration" ADD CONSTRAINT "CourseRegistration_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
