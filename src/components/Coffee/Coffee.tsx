import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TerrainIcon from "@mui/icons-material/Terrain";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ConstructionIcon from "@mui/icons-material/Construction";

import "./Coffee.css";
import Modal from "../share/Modal/Modal";

const CoffeeSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="my-20 p-5 lg:py-20 text-white text-center coffee-bg relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>

        {/* Content inside the section */}
        <div className="relative z-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">Would You Like To</h2>
            <h1 className="text-4xl font-bold mb-8">
              A Meeting with Coffee in Our Office!
            </h1>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Buy a Property */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <HomeIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Buy Property Share</h3>
            </div>

            {/* Land Owners */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <TerrainIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Land Wanted</h3>
            </div>

            {/* Buy Flat or Floor */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <ApartmentIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Buy Flat or Floor</h3>
            </div>

            {/* Interior Design */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <DesignServicesIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Interior Design</h3>
            </div>

            {/* Construction */}
            <div className="bg-white text-[#135F4A] p-5 rounded">
              <ConstructionIcon
                className="text-[#135F4A] mb-2"
                style={{ fontSize: "40px" }}
              />
              <h3 className="text-lg font-semibold">Construction</h3>
            </div>
          </div>

          {/* Book appointment button */}
          <div className="flex justify-center mt-8">
            <button
              className="bg-[#135F4A] px-6 py-2 text-white uppercase"
              onClick={handleOpenModal}
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>
      <Modal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default CoffeeSection;
