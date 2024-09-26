"use client";
import React from "react";
import About from "@/components/About/About";
import RecentProperties from "@/components/RecentProperties/RecentProperties";
import Slider from "@/components/share/Slider/Slider";


const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <RecentProperties />
    </div>
  );
};

export default Home;
