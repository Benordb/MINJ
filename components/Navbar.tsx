"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

type Page = "home" | "rooms" | "about" | "contact";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);

  const navItems = [
    { label: t.home, page: "" as Page },
    { label: t.roomsAndSuites, page: "rooms" as Page },
    { label: t.aboutUs, page: "about" as Page },
    { label: t.contact, page: "contact" as Page },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif text-white">
              MINJ
              <span className="text-amber-400 ml-1">HOTEL</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  href={`/${item.page}`}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}

              {/* Language Switch */}
              <button
                onClick={() => setLanguage(language === "mn" ? "en" : "mn")}
                className="text-sm text-white/70 hover:text-white"
              >
                {language === "mn" ? "EN" : "MN"}
              </button>

              {/* CTA */}
              <Button className="bg-amber-400 text-black hover:bg-amber-300">
                {t.bookNow ?? "Захиалах"}
              </Button>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur">
          <div className="flex items-center justify-between px-6 h-16">
            <span className="text-xl font-serif text-white">MINJ HOTEL</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={28} className="text-white" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 mt-20">
            {navItems.map((item) => (
              <Link
                key={item.page}
                href={`/${item.page}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-white"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => setLanguage(language === "mn" ? "en" : "mn")}
              className="mt-6 text-white/80"
            >
              {language === "mn" ? "English" : "Монгол"}
            </button>

            <Button
              className="mt-4 bg-amber-400 text-black hover:bg-amber-300"
              size="lg"
            >
              {t.bookNow ?? "Өрөө захиалах"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
