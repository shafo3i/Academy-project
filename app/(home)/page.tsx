import AboutUs from "@/components/about";
import { Contact } from "@/components/contact";
import { Courses } from "@/components/coursesSection";
import { Hero } from "@/components/hero";
import { RegistrationForm } from "@/components/registration-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Courses />
        <Contact />
      </main>
      
    </div>
  );
}
