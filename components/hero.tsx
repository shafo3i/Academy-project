'use client';
import { Button } from "./ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-10">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
                Master Islamic Studies
                <span className="block text-primary">With Expert Guidance</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Deepen your understanding of Islam through comprehensive courses covering 
                Quran, Hadith, Islamic History, Fiqh, Aqeedah, and spiritual development.
              </p>
            </div>
            <div className=" flex justify-center items-center space-x-4">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Learning Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {/* mail to  */}
                <a href="mailto:info@almufeeda.com">Contact Us</a>
              </Button>
            </div>
            <div className="flex justify-center items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <span>📖</span>
                <span>7 Comprehensive Courses</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>⭐</span>
                <span>Expert Teachers</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <ImageWithFallback
                src="/images/Gemini_Generated_Image_jckainjckainjcka.png"
                alt="Islamic calligraphy and books"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}