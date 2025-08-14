import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

// const courses = [
//   {
//     title: "Quran Studies",
//     description: "Learn proper recitation, Tajweed, and understanding of Quranic verses with detailed commentary.",
//     icon: "📖",
//     topics: ["Tajweed", "Tafsir", "Memorization", "Recitation"]
//   },
//   {
//     title: "Hadith Studies",
//     description: "Study authentic Hadith collections and learn the science of Hadith verification and interpretation.",
//     icon: "📜",
//     topics: ["Sahih Bukhari", "Sahih Muslim", "Hadith Science", "Chain Analysis"]
//   },
//   {
//     title: "Islamic History",
//     description: "Explore the rich history of Islam from the Prophet's time to the modern era.",
//     icon: "🏛️",
//     topics: ["Prophetic Era", "Caliphates", "Islamic Civilization", "Modern History"]
//   },
//   {
//     title: "Fiqh of Worship",
//     description: "Master the jurisprudence of Islamic worship including prayer, fasting, and pilgrimage.",
//     icon: "🕌",
//     topics: ["Salah", "Sawm", "Hajj", "Zakat"]
//   },
//   {
//     title: "Aqeedah",
//     description: "Study Islamic creed and theology, understanding the fundamentals of Islamic belief.",
//     icon: "💎",
//     topics: ["Tawhid", "Prophets", "Day of Judgment", "Divine Attributes"]
//   },
//   {
//     title: "Marriage & Divorce",
//     description: "Learn Islamic guidelines for marriage, family life, and divorce procedures.",
//     icon: "💍",
//     topics: ["Marriage Contract", "Rights & Duties", "Family Ethics", "Divorce Laws"]
//   },
//   {
//     title: "Purification of the Soul",
//     description: "Develop spiritual awareness through Islamic psychology and self-development.",
//     icon: "✨",
//     topics: ["Tazkiyah", "Self-reflection", "Spiritual Growth", "Character Building"]
//   }
// ];

export async function Courses() {

  const courses = await prisma.course.findMany();

  return (
    <section id="courses" className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl tracking-tighter sm:text-5xl">
              Comprehensive Islamic Studies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our curriculum covers all essential aspects of Islamic knowledge, taught by qualified scholars 
              with years of experience in traditional Islamic education.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xlitems-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.title} className="relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  {/* <span className="text-2xl">{course.icon}</span> */}
                  <Image src={course.image ?? "/default-course.png"} alt={course.title} width={40} height={40} />
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <Button variant="outline"><Link href={`/courses/${course.id}`}>View Course</Link></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}