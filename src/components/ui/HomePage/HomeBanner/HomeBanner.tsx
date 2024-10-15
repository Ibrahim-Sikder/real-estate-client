"use client";
import React from "react";
import bg from "../../../../../src/assets/images/shopnodanga-hazaribag/shopno-danga.jpg";

const HomeBanner = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay covering the entire background */}
      <div className="absolute inset-0 bg-[#135F4A] bg-opacity-50"></div>

      {/* Content box */}
      <div className="relative z-10 p-8 rounded-lg space-y-4 max-w-3xl">
        <h3 className="text-xl md:text-2xl font-semibold">Welcome To</h3>
        <h1 className="text-[#E3C80D] font-bold text-4xl md:text-6xl">
          Anaa Developers Ltd
        </h1>
        <p className="text-sm md:text-lg">
          We believe in creating opportunities for all types of investors,
          making land ownership accessible and affordable, while promoting
          sustainable development.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
