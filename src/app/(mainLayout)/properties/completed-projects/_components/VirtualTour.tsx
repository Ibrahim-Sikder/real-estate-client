import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";

const VirtualTour = () => {
  const videos = [
    {
      id: 1,
      title: "Walk-through of Assure Murshed Heights",
      videoUrl: "https://youtu.be/vDZcGMI84JY",
    },
    {
      id: 2,
      title: "Walk-through of Assure Murshed Heights",
      videoUrl: "https://youtu.be/hCKu30WsFkA",
    },
    {
      id: 3,
      title: "Street View of Assure Murshed Heights",
      videoUrl: "https://youtu.be/3cYBfuphkuE",
    },
  ];

  return (
    <div>
      <div className="mb-10">
        <h4 className="text-center text-[#135F4A]">Assure Group</h4>
        <h2 className="uppercase text-center">
          Assure Murshed Heights Location
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {videos.map((video) => (
          <div key={video.id} className="text-center">
            <ReactPlayer
              url={video.videoUrl}
              controls={true}
              width="100%"
              height="auto"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm bg-[#135F4A] text-white py-2">
              {video.title}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 border shadow-lg p-5">
        <h2 className="uppercase">Buy an Apartment on Easy Installments</h2>
        <p className="text-justify mt-3">
          If you want to buy a flat with a cheap, affordable price and the best
          installment facility, come to us today. We are determined to ensure
          all kinds of facilities for the customer. Group offers the easiest
          installment facility.
        </p>
        <ul className="mt-5 space-y-1">
          <li>
            <CheckCircleIcon className="text-[#135F4A] mr-2" /> Reasonable Price
          </li>
          <li>
            <CheckCircleIcon className="text-[#135F4A] mr-2" /> Easy Down
            Payment
          </li>
          <li>
            <CheckCircleIcon className="text-[#135F4A] mr-2" /> Affordable
            Installation Methods
          </li>
          <li>
            <CheckCircleIcon className="text-[#135F4A] mr-2" /> Many More
          </li>
        </ul>
        <div className="flex md:gap-5 gap-2 mt-5">
          <button className="bg-[#135F4A] px-4 py-2 text-white">
            Buy This Apartment
          </button>
          <button className="bg-[#135F4A] px-4 py-2 text-white">
            Price Quote
          </button>
        </div>
      </div>
      <div className="mt-10 shadow-lg border p-5">
        <h2 className="uppercase text-center">Institutes & Nearby Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          <ul className="space-y-2">
            <li>
              <CheckCircleIcon className="text-[#135F4A] mr-2" /> The Westin
              Dhaka
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A] mr-2" /> Amari Dhaka
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A] mr-2" /> Gulshan Lake
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <CheckCircleIcon className="text-[#135F4A] mr-2" /> USA Embassy
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A] mr-2" /> Diplomatic
              Zone
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A] mr-2" /> American
              International School
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <CheckCircleIcon className="text-[#135F4A] mr-2" /> Scholastica
              School
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A] mr-2" /> Izumi Japanese
              Kitchen
            </li>
            <li>
              <CheckCircleIcon className="text-[#135F4A] mr-2" /> Jamuna Future
              Park
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
