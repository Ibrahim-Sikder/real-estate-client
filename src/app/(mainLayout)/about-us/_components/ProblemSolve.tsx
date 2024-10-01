import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import img1 from "../../../../../src/assets/images/about/3.jpg";
import img2 from "../../../../../src/assets/images/about/4.jpg";

const ProblemSolve = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20">
        <div>
          <div className="space-y-5">
            <p className="uppercase text-[#135F4A]">We Solve Problem</p>
            <h2 className="uppercase">
              We Can Be a Solution For House Developer
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex items-center gap-5 bg-[#76B486] p-5 border-l-8 border-[#135F4A] mt-5">
            <span>
              <HomeIcon fontSize="large" />
            </span>
            <div>
              <h3>Professional Team Work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <button className="bg-[#135F4A] px-6 py-2 text-white mt-5">
            Let&apos;s Talk
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Image src={img1} alt="" className="mt-10" />
          <Image src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolve;
