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

export type LocalizedText = {
  en: string;
  mn: string;
};

export type RoomDetail = {
  name: LocalizedText;
  price: number;
  images: string[];
  description: LocalizedText;
  size: string;
  guests: number;
  beds: LocalizedText;
  bathrooms: LocalizedText;
};

export const roomData: Record<string, RoomDetail> = {
  "1": {
    name: {
      en: "Deluxe Room",
      mn: "Делюкс өрөө",
    },
    price: 190000,
    images: ["/roomview.jpeg", "/restorant.png", "/minj.jpg"],
    description: {
      en: "Experience refined elegance in our Deluxe Room, thoughtfully designed to provide the perfect balance of comfort and sophistication. Featuring contemporary furnishings, premium linens, and state-of-the-art amenities, this room offers a serene retreat in the heart of the city.",
      mn: "Манай Делюкс өрөө нь тав тух, дэгжин байдлын төгс тэнцвэрийг бүрдүүлсэн. Орчин үеийн тавилга, дээд зэрэглэлийн даавуу, хамгийн сүүлийн үеийн тохижилт нь хотын төвд тайван амрах орчныг бүрдүүлнэ.",
    },
    size: "55 m²",
    guests: 3,
    beds: {
      en: "King-size bed + Sofa bed",
      mn: "Кинг хэмжээтэй ор + буйдан ор",
    },
    bathrooms: {
      en: "1 Full bathroom",
      mn: "1 бүрэн угаалгын өрөө",
    },
  },
  "2": {
    name: {
      en: "Semi Suite",
      mn: "Хагас люкс",
    },
    price: 170000,
    images: ["/bathroom.jpeg", "/bathroom.jpeg", "/restorant.jpeg"],
    description: {
      en: "Our Semi Suite offers an elevated experience with separate living and sleeping areas, perfect for both business and leisure travelers. Enjoy panoramic city views, a spacious work area, and premium furnishings that create an atmosphere of understated luxury.",
      mn: "Манай Хагас люкс нь зочны болон унтлагын тусдаа хэсэгтэй тул ажил хэрэг болон аялал жуулчлалын зочдод тохиромжтой. Хотын панорама харагдах цонх, өргөн ажлын хэсэг, дээд зэрэглэлийн тавилга нь дэгжин тансаг уур амьсгалыг бүрдүүлнэ.",
    },
    size: "35 m²",
    guests: 2,
    beds: {
      en: "King-size bed",
      mn: "Кинг хэмжээтэй ор",
    },
    bathrooms: {
      en: "1 Luxury bathroom",
      mn: "1 тансаг угаалгын өрөө",
    },
  },
  "3": {
    name: {
      en: "Family Room",
      mn: "Гэр бүлийн өрөө",
    },
    price: 190000,
    images: ["/roomview2.png", "/bathroom.jpeg", "/minj.jpg"],
    description: {
      en: "A spacious and comfortable Family Room designed for families, featuring a cozy sleeping area, practical living space, and modern amenities to ensure a relaxing stay for both parents and children.",
      mn: "Гэр бүлд зориулсан тав тухтай, уудам өрөө бөгөөд амралтад шаардлагатай бүх нөхцөл бүрдсэн, эцэг эх болон хүүхдүүдэд тохиромжтой зохион байгуулалттай.",
    },
    size: "45 m²",
    guests: 4,
    beds: {
      en: "1 Queen-size bed + 2 Single beds",
      mn: "1 Куин хэмжээтэй ор + 2 ганц ор",
    },
    bathrooms: {
      en: "1 Bathroom",
      mn: "1 угаалгын өрөө",
    },
  },

  "4": {
    name: {
      en: "Standard Room",
      mn: "Стандарт өрөө",
    },
    price: 140000,
    images: ["/roomview3.png", "/bathroom.jpeg", "/restorant.png"],
    description: {
      en: "A comfortable, thoughtfully designed room with essential amenities, ideal for solo travelers or couples looking for a relaxing stay.",
      mn: "Тав тухтай амрахад зориулсан, шаардлагатай бүх хэрэгслээр бүрэн хангасан өрөө. Ганцаарчилсан аялагч болон хосуудад тохиромжтой.",
    },
    size: "30 m²",
    guests: 2,
    beds: {
      en: "Queen-size bed",
      mn: "Куин хэмжээтэй ор",
    },
    bathrooms: {
      en: "1 Bathroom",
      mn: "1 угаалгын өрөө",
    },
  },
};
