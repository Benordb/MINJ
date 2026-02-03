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
    price: 180000,
    images: [
      "https://images.unsplash.com/photo-1648766378129-11c3d8d0da05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description: {
      en: "Experience refined elegance in our Deluxe Room, thoughtfully designed to provide the perfect balance of comfort and sophistication. Featuring contemporary furnishings, premium linens, and state-of-the-art amenities, this room offers a serene retreat in the heart of the city.",
      mn: "Манай Делюкс өрөө нь тав тух, дэгжин байдлын төгс тэнцвэрийг бүрдүүлсэн. Орчин үеийн тавилга, дээд зэрэглэлийн даавуу, хамгийн сүүлийн үеийн тохижилт нь хотын төвд тайван амрах орчныг бүрдүүлнэ.",
    },
    size: "35 m²",
    guests: 2,
    beds: {
      en: "King-size bed",
      mn: "Кинг хэмжээтэй ор",
    },
    bathrooms: {
      en: "1 Full bathroom",
      mn: "1 бүрэн угаалгын өрөө",
    },
  },
  "2": {
    name: {
      en: "Executive Suite",
      mn: "Гүйцэтгэх люкс",
    },
    price: 280000,
    images: [
      "https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1648766378129-11c3d8d0da05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description: {
      en: "Our Executive Suite offers an elevated experience with separate living and sleeping areas, perfect for both business and leisure travelers. Enjoy panoramic city views, a spacious work area, and premium furnishings that create an atmosphere of understated luxury.",
      mn: "Манай Гүйцэтгэх люкс нь зочны болон унтлагын тусдаа хэсэгтэй тул ажил хэрэг болон аялал жуулчлалын зочдод тохиромжтой. Хотын панорама харагдах цонх, өргөн ажлын хэсэг, дээд зэрэглэлийн тавилга нь дэгжин тансаг уур амьсгалыг бүрдүүлнэ.",
    },
    size: "55 m²",
    guests: 3,
    beds: {
      en: "King-size bed + Sofa bed",
      mn: "Кинг хэмжээтэй ор + буйдан ор",
    },
    bathrooms: {
      en: "1 Luxury bathroom",
      mn: "1 тансаг угаалгын өрөө",
    },
  },
  "3": {
    name: {
      en: "Presidential Suite",
      mn: "Ерөнхийлөгчийн люкс",
    },
    price: 280000,
    images: [
      "https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    description: {
      en: "The pinnacle of luxury accommodation, our Presidential Suite features a master bedroom, formal dining area, private terrace, and dedicated butler service. Every detail has been meticulously crafted to provide an unparalleled experience for the most discerning guests.",
      mn: "Манай Ерөнхийлөгчийн люкс нь тансаг байдлын оргил бөгөөд мастер унтлагын өрөө, албан ёсны хоолны хэсэг, хувийн террас, тусгай батлерын үйлчилгээтэй. Бүх зүйл нь хамгийн өндөр түвшний туршлага өгөхөөр нямбай бүрдсэн.",
    },
    size: "95 m²",
    guests: 4,
    beds: {
      en: "King-size bed + 2 Single beds",
      mn: "Кинг хэмжээтэй ор + 2 ганц ор",
    },
    bathrooms: {
      en: "2 Luxury bathrooms",
      mn: "2 тансаг угаалгын өрөө",
    },
  },
  "4": {
    name: {
      en: "Standard Room",
      mn: "Стандарт өрөө",
    },
    price: 140000,
    images: [
      "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1648766378129-11c3d8d0da05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
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
