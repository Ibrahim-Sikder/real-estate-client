import React from "react";
import Image from "next/image";
import img from "../../../../src/assets/images/banner/adl2.jpg";

const ContactBanner = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full">
      <Image
        src={img}
        alt="Upcoming Projects"
        layout="fill"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#135F4A] opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-5">
        <h1 className="text-3xl md:text-5xl font-bold uppercase">Contact Us</h1>
      </div>
    </div>
  );
};

export default ContactBanner;
