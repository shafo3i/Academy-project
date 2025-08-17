'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-teal-950/95 backdrop-blur-sm text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Almufeeda Academy Logo"
              width={32}
              height={32}
            />
          </div>
          <span className="text-lg font-medium">Almufeeda Academy</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-300">
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

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <Button variant="default" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
            <Link href="/register">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-teal-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-teal-950 border-t border-teal-800">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-teal-800">
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => {
                  closeMobileMenu();
                  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Link href="/register" className="block w-full">Enroll Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}