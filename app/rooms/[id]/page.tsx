"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Wifi,
  Tv,
  Coffee,
  Wind,
  Users,
  Maximize,
  BedDouble,
  Bath,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import { roomData, type LocalizedText } from "@/lib/data";

export default function RoomIdPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { language } = useLanguage();
  const t = useTranslation(language);

  const room = id ? roomData[id as keyof typeof roomData] : undefined;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentImageIndex(0);
  }, [id]);

  const getText = (value: string | LocalizedText) =>
    typeof value === "string" ? value : value[language];
  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(language === "mn" ? "mn-MN" : "en-US").format(amount);

  const amenities = [
    { icon: Wifi, label: t.freeWifi },
    {
      icon: Tv,
      label: language === "mn" ? "Ухаалаг зурагт" : "Smart TV",
    },
    { icon: Coffee, label: t.breakfast },
    {
      icon: Wind,
      label: language === "mn" ? "Агааржуулагч" : "Air conditioning",
    },
  ];

  const features =
    language === "mn"
      ? [
          "24/7 консьерж үйлчилгээ",
          "Өдөр тутмын цэвэрлэгээ",
          "Өрөөндөө хоол захиалах боломжтой",
          "Гэрэл нэвтрэхгүй хөшиг",
          "Дээд зэрэглэлийн даавуу, дэр",
          "Дуу тусгаарлагч цонх",
        ]
      : [
          "24/7 concierge service",
          "Daily housekeeping",
          "In-room dining available",
          "Blackout curtains",
          "Premium linens and pillows",
          "Soundproofed windows",
        ];

  const handlePrevImage = () => {
    if (!room || room.images.length < 2) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + room.images.length) % room.images.length,
    );
  };

  const handleNextImage = () => {
    if (!room || room.images.length < 2) return;
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  if (!room) {
    return (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-serif text-slate-900 mb-4">
          {language === "mn" ? "Өрөө олдсонгүй" : "Room not found"}
        </h1>
        <p className="text-slate-600 mb-8">
          {language === "mn"
            ? "Таны хайсан өрөө олдсонгүй эсвэл устсан байна."
            : "The room you are looking for does not exist or has been removed."}
        </p>
        <Button asChild>
          <Link href="/rooms">
            {language === "mn" ? "Өрөөнүүд рүү буцах" : "Back to Rooms"}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative h-96 lg:h-96 mb-8 rounded-lg overflow-hidden group">
              <Image
                src={room.images[currentImageIndex]}
                alt={getText(room.name)}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />

              {room.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 text-slate-900" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 text-slate-900" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {room.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-white w-8"
                            : "bg-white/50"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-serif text-slate-900 mb-4">
                {getText(room.name)}
              </h1>

              <div className="flex flex-wrap gap-6 mb-6 text-slate-600">
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5" />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>
                    {language === "mn"
                      ? `${room.guests} хүртэл ${
                          room.guests === 1 ? t.guest : t.guests
                        }`
                      : `Up to ${room.guests} ${
                          room.guests === 1 ? t.guest : t.guests
                        }`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BedDouble className="w-5 h-5" />
                  <span>{getText(room.beds)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5" />
                  <span>{getText(room.bathrooms)}</span>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-8">
                {getText(room.description)}
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-serif text-slate-900 mb-4">
                  {t.roomAmenities}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <amenity.icon className="w-5 h-5 text-amber-700" />
                      <span className="text-slate-700">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-slate-900 mb-4">
                  {t.featuresServices}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl text-slate-900">
                    ₮{formatPrice(room.price)}
                  </span>
                  <span className="text-slate-600">{t.perNight}</span>
                </div>
                <p className="text-sm text-slate-500">{t.taxesIncluded}</p>
              </div>

              <Button size="lg" className="w-full mb-3">
                <a href="tel:+97670489999">{t.bookNow}</a>
              </Button>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-2">
                  {t.needHelpBooking}
                </p>
                <p className="text-sm text-slate-900 font-medium">
                  {t.call}: +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
