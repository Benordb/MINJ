"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return <div>{t.aboutSubtitle}</div>;
}
