'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const NavItems = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Courses",
    href: "#courses",
  },
  {
    name: "Contact Us",
    href: "#contact",
  },
];


export function Header() {
  return (
    <header className="border-b bg-teal-950 text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            {/* Logo from image*/}
            <Image
              src="/logo.png"
              alt="Almufeeda Academy Logo"
              width={32}
              height={32}
            />
          </div>
          <span className="text-lg font-medium">Almufeeda Academy</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-gray-300 ">
          {NavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-white transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button variant="default" className="hidden md:flex" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
          <Link href="/register">Enroll Now</Link>
        </Button>
      </div>
    </header>
  );
}