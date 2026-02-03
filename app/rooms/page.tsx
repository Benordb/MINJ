"use client";
import RoomCard from "@/components/RoomCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import Image from "next/image";
import { roomData } from "@/lib/data";
//standard
//luxury
// family
// semi-luxury

export default function Rooms() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const roomEntries = Object.entries(roomData).sort(
    ([a], [b]) => Number(a) - Number(b),
  );
  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(language === "mn" ? "mn-MN" : "en-US").format(amount);

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
            <span className="text-white">{t.roomsPageTitle1}</span>

            <span className="text-3xl lg:text-4xl text-white/40">&</span>

            <span className="bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              {t.roomsPageTitle2}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed text-center">
            {t.roomsPageDesc}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {roomEntries.map(([id, room]) => (
            <RoomCard
              key={id}
              title={room.name[language]}
              description={room.description[language]}
              price={`₮${formatPrice(room.price)} ${t.perNight}`}
              image={room.images[0]}
              guests={room.guests}
              guestLabel={room.guests === 1 ? t.guest : t.guests}
              detailsLabel={t.viewDetails}
              detailHref={`/rooms/${id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
