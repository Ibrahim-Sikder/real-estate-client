import React from "react";
import Image from "next/image";
import bannerImage from "../../../../../src/assets/images/about/bg.jpg";

const ContactBanner = () => {
  return (
    <div className="relative w-full h-[300px] lg:h-[300px]">
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt="About Us Banner"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="uppercase">Contact Us</h1>
      </div>
    </div>
  );
};

export default ContactBanner;
