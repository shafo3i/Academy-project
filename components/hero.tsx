'use client';
import Image from "next/image";
import { Button } from "./ui/button";


export function Hero() {
  return (
    // <section className="py-20 lg:py-32 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
    //   <div className="container px-4 md:px-6 mx-auto">
    //     <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-10">
    //       <div className="flex flex-col justify-center space-y-4">
    //         <div className="space-y-2">
    //           <h1 className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
    //             Master Islamic Studies
    //             <span className="block text-primary">With Expert Guidance</span>
    //           </h1>
    //           <p className="max-w-[600px] text-muted-foreground md:text-xl">
    //             An institute aiming to equip the youth and sisters with the essential knowledge that will strenghten their Islamic Identity and connection to their Lord in sha Allah. 
    //           </p>
    //         </div>
    //         <div className=" flex justify-center items-center space-x-4">
    //           <Button 
    //             size="lg" 
    //             onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
    //           >
    //             Start Learning Today
    //           </Button>
    //           <Button 
    //             variant="outline" 
    //             size="lg"
    //           >
    //             {/* mail to  */}
    //             <a href="mailto:info@almufeeda.com">Contact Us</a>
    //           </Button>
    //         </div>
    //         <div className="flex justify-center items-center space-x-4 text-muted-foreground">
    //           <div className="flex items-center space-x-1">
    //             <span>📖</span>
    //             <span>7 Comprehensive Courses</span>
    //           </div>
    //           <div className="flex items-center space-x-1">
    //             <span>⭐</span>
    //             <span>Expert Teachers</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center">
    //         <div className="relative">
    //           <Image
    //             src="/images/Gemini_Generated_Image_jckainjckainjcka.png"
    //             alt="Islamic calligraphy and books"
    //             className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover shadow-lg"
    //             width={600}
    //             height={400}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section>
      {/* make a hero with image and text in the middle */}
      <div className="container mx-auto p-6">
        <div className="flex flex-col space-y-2">
          <div className="mt-6 mb-4 flex justify-center items-center">
            <Image
              src="/images/Gemini_Generated_Image_jckainjckainjcka.png"
              alt="Islamic calligraphy and books"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover shadow-lg"
              width={600}
              height={400}
            />
          </div>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <h1 className="text-5xl font-bold">المدرسة المفيدة</h1>
          </div>
          <div className="flex justify-center items-center space-x-4 ">
            <p className="text-center text-muted-foreground">An institute aiming to equip the youth and sisters with <br />
              their Islamic Identity and connection to their Lord in sha Allah.</p>
          </div>

              <div className="mt-6 mb-4 flex justify-center items-center">
                <Button
                  className="rounded-lg bg-teal-900 text-white hover:bg-teal-800"
                  size="lg"
                >
                  {/* mail to  */}
                  <a href="mailto:info@almufeeda.com">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
    </section>
  );
}