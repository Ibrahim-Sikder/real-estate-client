"use client";
import React from "react";
import About from "@/components/About/About";
import Properties from "@/components/Properties/Properties";
// import Slider from "@/components/share/Slider/Slider";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";

const Home = () => {
  return (
    <div>
      {/* <Slider /> */}
      <About />
      <Properties />
      <FeaturedProperties />
    </div>
  );
};

export default Home;
