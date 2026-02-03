"use client";

import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { roomData } from "@/lib/data";
import RoomCard from "./RoomCard";

export const FeatureRooms = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const router = useRouter();
  const featuredEntries = Object.entries(roomData)
    .sort(([a], [b]) => Number(a) - Number(b))
    .slice(0, 3);
  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(language === "mn" ? "mn-MN" : "en-US").format(amount);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-slate-900 mb-4">
          {t.featuredRooms}
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {t.featuredRoomsDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredEntries.map(([id, room]) => (
          <RoomCard
            key={id}
            title={room.name[language]}
            description={room.description[language]}
            price={`₮${formatPrice(room.price)} ${t.perNight}`}
            image={room.images[0]}
            size={room.size}
            guests={room.guests}
            guestLabel={room.guests === 1 ? t.guest : t.guests}
            detailsLabel={t.viewDetails}
            detailHref={`/rooms/${id}`}
          />
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          onClick={() => router.push("rooms")}
        >
          {t.viewAllRooms}
        </Button>
      </div>
    </section>
  );
};
