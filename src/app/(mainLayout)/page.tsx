"use client";
import React from "react";
import Properties from "@/components/Properties/Properties";
import Slider from "@/components/share/Slider/Slider";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import CoffeeSection from "@/components/Coffee/Coffee";
import Testimonials from "@/components/Testimonial/Testimonial";
import ShareBuy from "@/components/ShareBuy/ShareBuy";
import Affiliation from "@/components/Affiliation/Affiliation";
import Trusted from "@/components/Trusted/Trusted";


const Home = () => {
  return (
    <div>
      <Slider />
      <Trusted/>
      <Properties />
      <FeaturedProperties />
      <Affiliation/>
      <CoffeeSection />
      <Testimonials />
      <ShareBuy />
    </div>
  );
};

export default Home;
