"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Amenities } from "@/components/Amenities";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { SearchRoom } from "@/components/SearchRoom";
import { FeatureRooms } from "@/components/FeatureRooms";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchRoom />
      <FeatureRooms />
      <Amenities />
      <Testimonials />
      <Footer />
    </>
  );
}
