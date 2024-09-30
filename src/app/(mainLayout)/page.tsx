"use client";
import React from "react";
import Properties from "@/components/Properties/Properties";
import Banner from "@/components/share/Banner/Banner";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import CoffeeSection from "@/components/Coffee/Coffee";
import Testimonials from "@/components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Properties />
      <FeaturedProperties />
      <CoffeeSection />
      <Testimonials />
    </div>
  );
};

export default Home;
