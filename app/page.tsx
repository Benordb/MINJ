"use client";

import { Hero } from "@/components/Hero";
import { Amenities } from "@/components/Amenities";
import { Testimonials } from "@/components/Testimonials";
import { SearchRoom } from "@/components/SearchRoom";
import { FeatureRooms } from "@/components/FeatureRooms";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchRoom />
      <FeatureRooms />
      <Amenities />
      <Testimonials />
    </>
  );
}
