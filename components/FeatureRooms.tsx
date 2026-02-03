"use client";

import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { roomsPageCards } from "@/lib/data";
import RoomCard from "./RoomCard";

export const FeatureRooms = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const router = useRouter();

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
        {roomsPageCards.slice(0, 3).map((room) => (
          <RoomCard
            key={room.id}
            title={room.title[language]}
            description={room.description[language]}
            price={room.price[language]}
            image={room.image}
            guests={room.guests}
            guestLabel={room.guests === 1 ? t.guest : t.guests}
            detailsLabel={t.viewDetails}
            detailHref={`/rooms/${room.detailId}`}
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
