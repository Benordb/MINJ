"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import Image from "next/image";

export default function Contact() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div>
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
            <span className="text-white">{t.contactTitle1}</span>
            <span className="bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              {t.contactTitle2}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed text-center">
            {t.contactSubtitle}
          </p>
        </div>
      </div>

      <div className="relative bg-zinc-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* MAP */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.6729866466727!2d96.26240109863828!3d46.376301779829134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d66e9e2293a0931%3A0xa216bc837e23d28!2sMinj%20Hotel!5e1!3m2!1sen!2smn!4v1770076099686!5m2!1sen!2smn"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* CONTACT CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif mb-6">
                {t.contactTitle1}
                <span className="text-amber-500">{t.contactTitle2}</span>
              </h2>

              <ul className="space-y-5 text-zinc-700">
                <li className="flex gap-3">
                  <span>📍</span>
                  <span>{t.address}</span>
                </li>
                <li className="flex gap-3">
                  <span>📞</span>
                  <a href="tel:+97670489999" className="hover:text-amber-500">
                    {t.phoneNumber}
                  </a>
                </li>
                <li className="flex gap-3">
                  <span>✉️</span>
                  <a
                    href="mailto:minjhotel7@gmail.com"
                    className="hover:text-amber-500"
                  >
                    {t.emailAddress}
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <a
                href="https://maps.google.com/?q=Minj+Hotel"
                target="_blank"
                className="px-6 py-3 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 transition"
              >
                📍 Зам харах
              </a>
              <a
                href="tel:+97670489999"
                className="px-6 py-3 rounded-full border border-zinc-300 hover:border-amber-500 transition"
              >
                📞 Залгах
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
