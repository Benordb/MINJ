"use client";
import {
  Calendar,
  Users,
  Search,
  Wifi,
  Car,
  Coffee,
  Sparkles,
  Dumbbell,
  UtensilsCrossed,
  Star,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
// import { Label } from "../components/ui/label";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/i18n";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RoomCard } from "@/components";

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const router = useRouter();
  const featuredRooms = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1648766378129-11c3d8d0da05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      name: "Deluxe Room",
      price: 299,
      guests: 2,
      size: "35 m²",
      description:
        "Elegant room with city views, king-size bed, and modern amenities for ultimate comfort.",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      name: "Executive Suite",
      price: 499,
      guests: 3,
      size: "55 m²",
      description:
        "Spacious suite with separate living area, premium furnishings, and panoramic views.",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      name: "Presidential Suite",
      price: 899,
      guests: 4,
      size: "95 m²",
      description:
        "Ultimate luxury with master bedroom, dining area, private terrace, and butler service.",
    },
  ];

  const amenities = [
    { icon: Wifi, label: t.freeWifi },
    { icon: Car, label: t.parking },
    { icon: Coffee, label: t.breakfast },
    { icon: Sparkles, label: t.spaWellness },
    { icon: Dumbbell, label: t.fitnessCenter },
    { icon: UtensilsCrossed, label: t.restaurant },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Absolutely stunning hotel! The service was impeccable and the rooms were beautifully designed. Will definitely return.",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "One of the best hotel experiences I've had. The attention to detail and the friendly staff made our stay memorable.",
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      rating: 5,
      text: "Perfect location, luxurious amenities, and exceptional dining. Everything exceeded our expectations!",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-150 lg:h-175">
        <div className="absolute inset-0">
          <Image
            width={1920}
            height={800}
            src="/fb-1.jpg"
            alt="Hotel Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-600/30 to-slate-600/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
              Experience Luxury
              <br />
              Like Never Before
            </h1>
            <Button size="lg" className="shadow-2xl">
              Book Your Stay
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white shadow-lg -mt-20 relative z-10 max-w-6xl mx-auto rounded-lg">
        <div className="p-8">
          <h2 className="text-2xl font-serif text-slate-900 mb-6 text-center lg:text-left">
            Check Availability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-2">
                Check In
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-600 mb-2">
                Check Out
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-600 mb-2">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Select
                  value={guests.toString()}
                  onValueChange={(value) => setGuests(Number(value))}
                >
                  <SelectTrigger className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none">
                    <SelectValue>
                      {guests} {guests === 1 ? "Guest" : "Guests"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-end">
              <Button size="lg" className="w-full">
                <Search className="w-5 h-5 mr-2 inline" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
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
          {/* {featuredRooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))} */}
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

      {/* Amenities Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-slate-900 mb-4">
              {t.hotelAmenities}
            </h2>
            <p className="text-slate-600">{t.amenitiesDesc}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <amenity.icon className="w-10 h-10 text-amber-700" />
                </div>
                <p className="text-slate-900 font-medium">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">
            {t.whatGuestsSay}
          </h2>
          <p className="text-slate-600">{t.guestsDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">{testimonial.text}</p>
              <div>
                <p className="text-slate-900 font-medium">{testimonial.name}</p>
                <p className="text-slate-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-amber-700 to-amber-900 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">
            {t.readyForLuxury}
          </h2>
          <p className="text-white/90 text-lg mb-8">{t.readyDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="cursor-pointer">
              {t.bookNow}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white! border-white! bg-white/10 hover:bg-white/20! cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              {t.contactUs}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
