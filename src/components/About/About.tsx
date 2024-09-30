import React from "react";
import Image from "next/image";
import img1 from "../../../src/assets/images/collage/image (1).jpg";
import img2 from "../../../src/assets/images/collage/image (2).jpg";
import img3 from "../../../src/assets/images/collage/image (3).jpg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Container from "../share/Container";

const About = () => {
  return (
    <Container className="px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center my-20">
        <div className="w-full">
          <Image src={img1} alt="" className="lg:h-60 w-full" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
            <Image src={img2} alt="" className="w-full" />
            <Image src={img3} alt="" className="w-full" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 uppercase">
            Our Mission
          </h3>
          <p className="mt-5 text-gray-600">
            At ADL, we believe that everyone deserves a place to call home. Our
            mission is to provide top-notch real estate services to help buyers,
            sellers, and renters navigate the market with ease.
          </p>
          <h3 className="mt-10 text-2xl font-semibold text-gray-800 uppercase">
            Why Choose Us?
          </h3>
          <ul className="mt-5 space-y-3 text-gray-600">
            <li>
              <CheckCircleOutlineIcon className="text-green-600" /> Experienced
              agents with extensive market knowledge.
            </li>
            <li>
              <CheckCircleOutlineIcon className="text-green-600" /> Personalized
              service tailored to your needs.
            </li>
            <li>
              <CheckCircleOutlineIcon className="text-green-600" /> Commitment
              to integrity and transparency in all dealings.
            </li>
            <li>
              <CheckCircleOutlineIcon className="text-green-600" /> A
              comprehensive approach to buying and selling homes.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
