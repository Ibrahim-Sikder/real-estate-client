import React from "react";
import Container from "../Container";
import banner from "../../../../src/assets/images/banner/banner.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <Container>
      <div className="lg:h-[500px] mt-5">
        <Image src={banner} alt="" className="h-full w-full" />
      </div>
    </Container>
  );
};

export default Banner;
