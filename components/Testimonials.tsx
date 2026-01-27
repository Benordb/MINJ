"use client";

import { Star } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";
import { testimonials } from "@/lib/data";

export const Testimonials = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-4">
          {t.whatGuestsSay}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{t.guestsDesc}</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="
              relative bg-white p-10 rounded-2xl
              border border-slate-100
              shadow-sm hover:shadow-xl transition
            "
          >
            {/* Quote mark */}
            <span className="absolute -top-6 -left-4 text-8xl font-serif text-amber-200 select-none">
              “
            </span>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-500 text-amber-500"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-slate-700 mb-8 italic leading-relaxed">
              {testimonial.text}
            </p>

            {/* Author */}
            <div className="border-t border-slate-100 pt-4">
              <p className="text-slate-900 font-medium tracking-wide">
                {testimonial.name}
              </p>
              <p className="text-slate-500 text-sm">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
