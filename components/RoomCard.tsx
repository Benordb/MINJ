"use client";
import { Users, Maximize } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

interface RoomCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  guests: number;
  size: string;
  description: string;
}

export const RoomCard = ({
  id,
  image,
  name,
  price,
  guests,
  size,
  description,
}: RoomCardProps) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      <div className="relative h-64 overflow-hidden">
        <Image
          width={400}
          height={256}
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-amber-700 text-white px-4 py-2 rounded-md">
          ${price}/night
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-serif text-slate-900 mb-3">{name}</h3>

        <div className="flex gap-6 mb-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{guests} Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4" />
            <span>{size}</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {description}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          //   onClick={() => onViewDetails(id)}
          variant="outline"
          className="w-full"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
