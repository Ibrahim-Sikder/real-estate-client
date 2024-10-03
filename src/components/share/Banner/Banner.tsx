import React from "react";
import banner from "../../../../src/assets/images/banner/banner.jpg";
import Image from "next/image";
import Container from "../Container";

const Banner = () => {
  return (
    <Container>
      <div className="lg:h-[500px]">
        <Image src={banner} alt="" className="h-full w-full" />
      </div>
    </Container>
  );
};

export default Banner;
