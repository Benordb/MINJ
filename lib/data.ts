// import {
//   Calendar,
//   Users,
//   Search,
//   Wifi,
//   Car,
//   Coffee,
//   Sparkles,
//   Dumbbell,
//   UtensilsCrossed,
//   Star,
// } from "lucide-react";
// import { useTranslation } from "./i18n";
// import { useLanguage } from "@/contexts/LanguageContext";
// const { language } = useLanguage();
// const t = useTranslation(language);

// export const amenities = [
//   { icon: Wifi, label: t.freeWifi },
//   { icon: Car, label: t.parking },
//   { icon: Coffee, label: t.breakfast },
//   { icon: Sparkles, label: t.spaWellness },
//   { icon: Dumbbell, label: t.fitnessCenter },
//   { icon: UtensilsCrossed, label: t.restaurant },
// ];

export const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Absolutely stunning hotel! The service was impeccable and the rooms were beautifully designed. Will definitely return.",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 4,
    text: "One of the best hotel experiences I've had. The attention to detail and the friendly staff made our stay memorable.",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "Perfect location, luxurious amenities, and exceptional dining. Everything exceeded our expectations!",
  },
];

export const featuredRooms = [
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
