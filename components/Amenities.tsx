"use client";

import { Wifi, Coffee, Car, Utensils } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

export const Amenities = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const amenities = [
    { icon: Wifi, label: t.freeWifi },
    { icon: Coffee, label: t.breakfast },
    { icon: Car, label: t.parking },
    { icon: Utensils, label: t.restaurant },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">
            {t.hotelAmenities}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t.amenitiesDesc}</p>
        </div>

        {/* Flex layout */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
          {amenities.map((amenity, index) => (
            <div key={index} className="group text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition group-hover:shadow-xl group-hover:-translate-y-1">
                <amenity.icon className="w-10 h-10 text-amber-700" />
              </div>
              <p className="text-slate-900 font-medium">{amenity.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
