"use client";
import React from "react";
import banner from "../../../../src/assets/images/banner/adl2.jpg";
import Image from "next/image";
import Container from "../Container";

const Banner = () => {
  return (
    <Container>
      <div className="lg:h-[400px]">
        <Image src={banner} alt="" className="h-full w-full" />
      </div>
    </Container>
  );
};

export default Banner;
