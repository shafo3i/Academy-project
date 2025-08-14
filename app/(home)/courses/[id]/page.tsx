// import prisma from "@/lib/prisma";
// import { Card, CardHeader, CardTitle,  CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// export default async function courseDetailPage({
//     params: { id: courseId },
// }: {
//     params: { id: string };
// }) {
//     const course = await prisma.course.findUnique({
//         where: {
//             id: courseId,
//         },
//     });

//     if (!course) {
//         <div>
//             <h1>Course not found</h1>
//         </div>
//     }

//     return (
//         <section className="max-w-4xl mx-auto mb-20 *:py-10 px-4 mt-20">
//             <Card className="relative overflow-hidden transition-all hover:shadow-lg">
//                 <CardHeader>
//                     <CardTitle className="text-xl font-bold">{course?.title}</CardTitle>
//                     <CardDescription className="text-sm">{course?.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                     <div>
//                         <p className="text-sm ">{course?.content}</p>
//                     </div>
//                     <div>
//                         <h2>Image</h2>
//                         <img src={course?.image ?? undefined} alt={course?.title ?? ""} />
//                     </div>
//                     <div className="mt-4">

//                         <ul className="flex flex-wrap gap-2">
//                             {course?.tags.map(tag => (
//                                 <li key={tag} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
//                                     {tag}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </CardContent>
//             </Card>
//         </section>
//     );
// }


import prisma from "@/lib/prisma";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"; // Replaced img with Next.js Image

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
    const { id } = await params;
  const course = await prisma.course.findUnique({
    where: {
      id: id,
    },
  });

  if (!course) {
    return ( // Added return statement
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-2xl font-bold">Course not found</h1>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto mb-20 py-10 px-4 mt-20">
      <Card className="relative overflow-hidden transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
          <CardDescription className="text-sm">{course.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-sm">{course.content}</p>
          </div>
          <div className="mt-4">
            {course.image && (
              <div className="relative w-full h-64">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          {course.tags && course.tags.length > 0 && (
            <div className="mt-4">
              <ul className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <li 
                    key={tag} 
                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
