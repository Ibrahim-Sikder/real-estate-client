import React from "react";
import Image from "next/image";
import bannerImage from "../../../../../src/assets/images/about/bg.jpg";

const AboutBanner = () => {
  return (
    <div className="relative w-full h-[300px] lg:h-[400px]">
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt="About Us Banner"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="uppercase">About Us</h1>
      </div>
    </div>
  );
};

export default AboutBanner;
