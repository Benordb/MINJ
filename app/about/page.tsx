"use client";

import { motion } from "framer-motion";
import { Heart, BedDouble, Repeat } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import Image from "next/image";

export default function About() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <>
      <div className="relative h-[35vh] min-h-75 overflow-hidden">
        {/* Background */}
        <div className="relative h-[40vh] min-h-72 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/lobby.png"
              alt="Hotel Lobby"
              fill
              priority
              className="object-cover scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-radial from-transparent to-black/60" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-8 flex flex-col items-center justify-center">
            <h1 className="flex items-center gap-4 text-5xl lg:text-7xl font-serif font-light leading-tight">
              <span className="text-white">MINJ</span>
              <span className="bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                Hotel
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed text-center">
              {t.aboutSubtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-light leading-tight">
            <span className="text-white">{t.aboutTitleLine1}</span>
            <span className="block mt-2 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              {t.aboutTitleLine2}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm lg:text-base text-white/75 leading-relaxed">
            {t.aboutSubtitle}
          </p>
        </div>
      </div>
      <section className="py-28 bg-linear-to-b  text-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {/* Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl space-y-12"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">
                {t.visionTitle}
              </h2>
              <p className=" leading-relaxed">{t.visionText}</p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">
                {t.missionTitle}
              </h2>
              <p className=" leading-relaxed">{t.missionText}</p>
            </div>
          </motion.div>
          <div>
            <p></p>
          </div>
          {/* Values */}
          <div>
            <h3 className="text-2xl font-serif font-light mb-12">
              {t.valuesTitle}
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: BedDouble,
                  title: t.comfortTitle,
                  desc: t.comfortDesc,
                },
                {
                  icon: Heart,
                  title: t.careTitle,
                  desc: t.careDesc,
                },
                {
                  icon: Repeat,
                  title: t.consistencyTitle,
                  desc: t.consistencyDesc,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-white shadow-lg p-10"
                  >
                    <Icon className="w-8 h-8 text-amber-500 mb-6" />
                    <h4 className="text-xl font-serif mb-3">{item.title}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
