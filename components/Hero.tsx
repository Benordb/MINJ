"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const router = useRouter();

  return (
    <section className="relative h-[90vh] min-h-96 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/fb-1.jpg"
          alt="Hotel Lobby"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-6">
          {/* Badge */}
          <span className="inline-block px-4 py-1 text-sm tracking-widest text-white/80 border border-white/30 rounded-full backdrop-blur">
            {t.premiumHotel}
          </span>

          {/* Title */}
          <h1 className="text-5xl lg:text-7xl font-serif font-light leading-tight">
            <span className="block text-white">{t.heroTitleLine1}</span>
            <span className="block bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              {t.heroTitleLine2}
            </span>
          </h1>

          {/* CTA */}
          <div className="flex items-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => router.push("/rooms")}
              className="bg-amber-400 text-black hover:bg-amber-300 shadow-xl px-8"
            >
              {t.bookYourStay}
            </Button>

            <button
              onClick={() => router.push("/rooms")}
              className="text-white/90 underline underline-offset-4 hover:text-white"
            >
              {t.viewRooms}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
