"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";

import Image from "next/image";
import bgImage from "../../../src/assets/images/testimonial/map.png";
import Container from "../share/Container";
import Marquee from "react-fast-marquee";
import Loader from "../share/Loader/Loader";

export type TAffiliation = {
  _id: string;
  images: string[];
  createdAt: string;
};

const Affiliation = () => {
  const [affiliationData, setAffiliationData] = useState<TAffiliation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/affiliation`
        );
        const data = await response.json();
        setAffiliationData(data.data?.affilations || []);
      } catch (err) {
        setError("Failed to fetch affiliations.");
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliationData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
        {error}
      </h1>
    );
  }

  if (!affiliationData || affiliationData.length === 0) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
        Oops! Affiliation data not found!
      </h1>
    );
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
          We are proud to be associated with these reputable organizations in
          the real estate industry.
        </p>

        {/* Marquee implementation */}
        <Marquee gradient={false} speed={50}>
          <div className="flex justify-center gap-10">
            {affiliationData.map((data) => (
              <div key={data._id} className="flex justify-center">
                {data.images.slice(0, 1).map((img) => (
                  <Image
                    key={img}
                    width={200}
                    height={60}
                    className="hover:scale-105 w-32 h-24 transform transition duration-300"
                    src={img}
                    alt="activity"
                  />
                ))}
              </div>
            ))}
          </div>
        </Marquee>

      </Container>
    </div>
  );
};

export default Affiliation;
