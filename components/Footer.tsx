"use client";

import Link from "next/link";
import { ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">
              MINJ <span className="text-amber-400">HOTEL</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.footerDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm tracking-widest text-white/60">
              {t.navigation}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-amber-400">
                  {t.roomsAndSuites}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm tracking-widest text-white/60">
              {t.contact}
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> {t.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> {t.phoneNumber}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                {t.emailAddress}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm tracking-widest text-white/60">
              {t.followUs}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/MINJ-HOTEL-Govi-Altai/61550104662949/?mibextid=wwXIfr&rdid=odNm31QhDALcjZtV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HHV64npm7%2F%3Fmibextid%3DwwXIfr"
                className="hover:text-amber-400"
              >
                <ExternalLink />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} Minj Hotel. {t.allRightsReserved}
          </p>
          <p>{t.madeWithLove}</p>
        </div>
      </div>
    </footer>
  );
};
