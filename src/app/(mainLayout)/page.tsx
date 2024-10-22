"use client";
import React from "react";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import CoffeeSection from "@/components/Coffee/Coffee";
import Testimonials from "@/components/Testimonial/Testimonial";
import Affiliation from "@/components/Affiliation/Affiliation";
import Trusted from "@/components/Trusted/Trusted";
import FAQ from "@/components/FAQ/FAQ";
import HomeBanner from "@/components/ui/HomePage/HomeBanner/HomeBanner";
import Projects from "@/components/ui/HomePage/Projects/Projects";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Trusted />
      <Projects />
      <FeaturedProperties />
      <Affiliation />
      <CoffeeSection />
      <Testimonials />
      {/* <ShareBuy /> */}
      <FAQ />
    </div>
  );
};

export default Home;
