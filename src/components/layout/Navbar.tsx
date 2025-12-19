"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="group relative flex items-center justify-center px-1">
      {/* Text Container */}
      <span className="relative text-base font-bold uppercase tracking-wide text-gray-600 transition-colors duration-300">
        {/* Base Text (Primary Color) */}
        {children}
        {/* Overlay Text (Hover Color) - Fills from left */}
        <span 
          className="absolute inset-0 w-0 overflow-hidden text-[#003366] transition-[width] duration-300 ease-out group-hover:w-full whitespace-nowrap" 
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
      
      {/* Underline - Expands from left */}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#003366] transition-[width] duration-300 ease-out group-hover:w-full"></span>
    </Link>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-white shadow-sm py-6"
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#003366] uppercase">
            {t.common.company_short}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.name}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-8 w-8 text-gray-900" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#003366]/95 border-l border-white/10 text-white pt-20 px-8 w-[85vw] sm:max-w-md">
              <nav className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-bold text-white hover:text-[#FFCC00] uppercase tracking-wide transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
