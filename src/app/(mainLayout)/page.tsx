"use client";
import React from "react";
import Properties from "@/components/Properties/Properties";
import Banner from "@/components/share/Banner/Banner";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";

const Home = () => {
  return (
    <div>
      <Banner />
      <Properties />
      <FeaturedProperties />
    </div>
  );
};

export default Home;
