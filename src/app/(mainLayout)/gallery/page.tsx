/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/share/Container";
import GalleryBanner from "./GalleryBanner";
import Affiliation from "@/components/Affiliation/Affiliation";
import Header from "@/components/share/Header/Header";
import Loader from "@/components/share/Loader/Loader";

export type TGallery = {
  _id: string;
  images: string[];
  createdAt: string;
  title: string;
};

const Gallery = () => {
  const [photoData, setPhotoData] = useState<TGallery[]>([]);
  const [displayedItems, setDisplayedItems] = useState(10); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAffiliationData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery`
        );
        const data = await response.json();
        setPhotoData(data.data?.galleries || []);
      } catch (err) {
        setError("Failed to fetch photo.");
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliationData();
  }, []);

  const handleLoadMore = () => {
    setDisplayedItems((prevDisplayedItems) => prevDisplayedItems + 5);
  };

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

  if (!photoData || photoData.length === 0) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
        Oops! photos data not found!
      </h1>
    );
  }

  return (
    <>
      <Header />
      <GalleryBanner />
      <Container className="my-20">
        <h1 className="text-center text-3xl font-bold text-[#135F4A] mb-10 uppercase">
          Property Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {photoData.slice(0, displayedItems).map((data) => (
            <div key={data._id} className="relative group">
              {data.images.slice(0, 1).map((img) => (
                <Image
                  key={img} // Unique key for each image
                  width={150}
                  height={150}
                  className="w-full h-[350px] object-cover"
                  src={img}
                  alt="Team"
                />
              ))}
              <p className="text-lg text-center text-white bg-[#135F4A] py-2">
                {data.title}
              </p>
            </div>
          ))}
        </div>

        {displayedItems < photoData.length && (
          <div className="flex justify-center mt-7">
            <button onClick={handleLoadMore} className="bg-[#135F4A] px-6 py-2 text-white">
              Load More
            </button>
          </div>
        )}

        <Affiliation />
      </Container>
    </>
  );
};

export default Gallery;
