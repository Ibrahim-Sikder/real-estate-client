"use client";
import React from "react";
import Properties from "@/components/Properties/Properties";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import CoffeeSection from "@/components/Coffee/Coffee";
import Testimonials from "@/components/Testimonial/Testimonial";
import ShareBuy from "@/components/ShareBuy/ShareBuy";
import Affiliation from "@/components/Affiliation/Affiliation";
import Trusted from "@/components/Trusted/Trusted";
// import Banner from "@/components/share/Banner/Banner";
import FAQ from "@/components/FAQ/FAQ";
import HomeBanner from "@/components/ui/HomePage/HomeBanner/HomeBanner";
import PropertySearch from "@/components/ui/HomePage/PropertySearch/PropertySearch";

const Home = () => {
  
  return (
    <div>
      {/* <Slider/> */}
      <HomeBanner />
      <PropertySearch />
      <Trusted />
      <Properties />
      <FeaturedProperties />
      <Affiliation />
      <CoffeeSection />
      <Testimonials />
      <ShareBuy />
      <FAQ />
    </div>
  );
};

export default Home;
