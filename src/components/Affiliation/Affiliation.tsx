import React from "react";
import Image from "next/image";
import logo1 from "../../../src/assets/images/partner/1.png";
import logo2 from "../../../src/assets/images/partner/2.png";
import logo3 from "../../../src/assets/images/partner/3.png";
import logo4 from "../../../src/assets/images/partner/4.png";
import logo5 from "../../../src/assets/images/partner/5.png";
import bgImage from "../../../src/assets/images/testimonial/map.png";
import Container from "../share/Container";
import Marquee from "react-fast-marquee";  // Marquee প্যাকেজ ইমপোর্ট

const Affiliation = () => {
  const affiliations = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2 },
    { id: 3, logo: logo3 },
    { id: 4, logo: logo4 },
    { id: 5, logo: logo5 },
  ];

  return (
    <div
      className="w-auto lg:w-full h-full bg-bottom lg:bg-right bg-no-repeat py-24"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <Container>
        <h2 className="text-center text-[#135F4A] mb-8 uppercase">
          Our Affiliations
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We are proud to be associated with these reputable organizations in
          the real estate industry.
        </p>

        {/* Marquee implementation */}
        <Marquee gradient={false} speed={50}>
          <div className="flex justify-center gap-10">
            {affiliations.map((affiliation) => (
              <div key={affiliation.id} className="flex justify-center">
                <Image
                  src={affiliation.logo}
                  alt="Affiliation logo"
                  width={200}
                  height={60}
                  className="hover:scale-105 transform transition duration-300"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </Container>
    </div>
  );
};

export default Affiliation;
