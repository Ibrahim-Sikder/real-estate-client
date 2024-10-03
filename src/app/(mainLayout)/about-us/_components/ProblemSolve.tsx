"use client";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import img1 from "../../../../../src/assets/images/about/3.jpg";
import img2 from "../../../../../src/assets/images/about/4.jpg";
import Modal from "@/components/share/Modal/Modal";

const ProblemSolve = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
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
              We believe in creating opportunities for all types of investors,
              making land ownership accessible and affordable, while promoting
              sustainable development.
            </p>
          </div>
          <div className="flex items-center gap-5 bg-[#76B486] p-5 border-l-8 border-[#135F4A] mt-5">
            <span>
              <HomeIcon fontSize="large" />
            </span>
            <div>
              <h3> Let&apos;s Talk Our Team</h3>
              <p>
                Feel free to adjust any details as needed for your specific
                business goals!
              </p>
            </div>
          </div>
          <button
            onClick={handleOpenModal}
            className="bg-[#135F4A] px-6 py-2 text-white mt-5"
          >
            Let&apos;s Talk
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Image src={img1} alt="" className="mt-10" />
          <Image src={img2} alt="" />
        </div>
      </div>
      <Modal open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default ProblemSolve;
