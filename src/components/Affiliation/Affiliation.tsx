import React from "react";
import Image from "next/image";
import bgImage from "../../../src/assets/images/testimonial/map.png";
import Container from "../share/Container";
import Marquee from "react-fast-marquee";

export type TAffiliation = {
  _id: string;
  image: string;
  createdAt: string;
};

const Affiliation = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/affiliation`, {
    cache: "no-store",
  });
  const affiliationData = await response.json();

  if (!affiliationData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">Oops! Affiliation data not found!</h1>;
  }


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
          We are proud to be associated with these reputable organizations in the real estate industry.
        </p>

        {/* Marquee implementation */}
        <Marquee gradient={false} speed={50}>
          <div className="flex justify-center gap-10">
            {affiliationData?.data?.affilations.map((data: TAffiliation) => (
              <div key={data._id} className="flex justify-center">
                <Image
                  src={data.image}
                  alt="Affiliation logo"
                  width={200}
                  height={60}
                  className="hover:scale-105 w-32 h-24 transform transition duration-300"
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
