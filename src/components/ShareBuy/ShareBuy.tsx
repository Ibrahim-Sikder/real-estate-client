'use client'

import React, { useState } from "react";
import "./ShareBuy.css";
import animation from "../../../src/assets/images/icon/animation.png";
import animation2 from "../../../src/assets/images/icon/animation.png";
import animation3 from "../../../src/assets/images/icon/animation2.png";
import animation4 from "../../../src/assets/images/icon/animation3.png";
import animation5 from "../../../src/assets/images/icon/animation4.png";
import animation6 from "../../../src/assets/images/icon/animation5.png";
import animation7 from "../../../src/assets/images/icon/animation6.png";
import animation8 from "../../../src/assets/images/icon/animation.png";
import animation9 from "../../../src/assets/images/icon/animation.png";
import Image from "next/image";
import Modal from "../share/Modal/Modal";

const ShareBuy = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="donationWraps my-16 rounded overflow-hidden contributionWrap ">
        <div className="bg-image lg:h-[700px] h-[300px] flex justify-center items-center">
          <div className="animationIcon">
            <Image src={animation} alt="animation" />
          </div>
          <div className="animationIcon2">
            <Image src={animation2} alt="animation" />
          </div>
          <div className="animationIcon3">
            <Image src={animation5} alt="animation" />
          </div>
          <div className="animationIcon4">
            <Image src={animation3} alt="animation" />
          </div>
          <div className="animationIcon5">
            <Image src={animation4} alt="animation" />
          </div>
          <div className="animationIcon6">
            <Image src={animation5} alt="animation" />
          </div>
          <div className="animationIcon7">
            <Image src={animation6} alt="animation" />
          </div>
          <div className="animationIcon8">
            <Image src={animation7} alt="animation" />
          </div>
          <div className="animationIcon9">
            <Image src={animation8} alt="animation" />
          </div>
          <div className="animationIcon10">
            <Image src={animation9} alt="animation" />
          </div>
          <div className="absolute z-10 px-5">
            <div className="lg:max-w-2xl mx-auto">
              <h1 className=" text-center text-[#135F4A]">
                Affordable Project Shares for Sale
              </h1>
              <p className="mt-5 text-center">
                Build a secure future home for your next generation by
                purchasing shares in our various projects, located in all prime
                areas across Bangladesh.
              </p>
              <p className="mt-5 text-center">
                Book a meeting here to know more.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleOpenModal}
                className="bg-[#135F4A] text-white py-3 px-6 mt-5 uppercase"
              >
                Book Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default ShareBuy;
