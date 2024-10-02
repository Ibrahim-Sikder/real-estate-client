import React from "react";
import img1 from "../../../src/assets/images/about/1.jpg";
import img2 from "../../../src/assets/images/about/2.jpg";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import Container from "../share/Container";

const Trusted = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-36 gap-10 items-center mt-20 lg:mb-40 mb-20">
        <div className="space-y-5">
          <h4 className="uppercase text-[#135F4A]">trusted By thousands</h4>
          <h2 className="uppercase">
            Delivering High Quality Projects property valuation
          </h2>
          <p className="text-justify">
            Anaa Developers Limited is a prominent real estate company
            specializing in the sale of land shares across various projects. Our
            mission is to offer high-quality, strategically located land options
            for clients who are looking to invest in property for future
            development or personal use.
          </p>
          <button className="bg-[#135F4A] px-4 py-2 text-white uppercase">
            Read More <EastIcon />
          </button>
        </div>
        <div className="lg:relative space-y-5">
          <Image src={img1} alt="" className="border-2 border-[#135F4A]" />
          <Image
            src={img2}
            alt=""
            className="lg:absolute top-40 -left-24 lg:w-[400px] border-2 border-[#135F4A]"
          />
        </div>
      </div>
    </Container>
  );
};

export default Trusted;
