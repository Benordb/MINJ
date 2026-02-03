"use client";

import { Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type RoomCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
  guests?: number;
  guestLabel?: string;
  detailsLabel?: string;
  detailHref?: string;
};

export default function RoomCard({
  title,
  description,
  price,
  image,
  guests = 1,
  guestLabel = "Зочин",
  detailsLabel = "Дэлгэрэнгүй",
  detailHref,
}: RoomCardProps) {
  const router = useRouter();

  const handleDetailsClick = () => {
    if (!detailHref) return;
    router.push(detailHref);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
        <span className="absolute right-2 top-2 rounded-lg px-2 py-1 bg-amber-500 text-white">
          {price}
        </span>
      </div>
      {/* CONTENT */}
      <div className="p-6 flex flex-col justify-between h-[calc(100%-192px)]">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif">{title}</h3>
          <div className="flex gap-2 items-center">
            <Users className="w-4 h-4" />
            <span>
              {guests} {guestLabel}
            </span>
          </div>
          <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
        </div>

        {/* FOOTER */}
        <button
          type="button"
          onClick={handleDetailsClick}
          className="mt-4 px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-amber-500 hover:text-black transition cursor-pointer"
        >
          {detailsLabel}
        </button>
      </div>
    </div>
  );
}
