import React from "react";
import floor1 from "../../../../../../src/assets/images/floor/1.jpg";
import floor2 from "../../../../../../src/assets/images/floor/2.jpg";
import floor3 from "../../../../../../src/assets/images/floor/3.jpg";
import floor4 from "../../../../../../src/assets/images/floor/4.jpg";
import floor5 from "../../../../../../src/assets/images/floor/5.jpg";
import floor6 from "../../../../../../src/assets/images/floor/6.jpg";
import floor7 from "../../../../../../src/assets/images/floor/7.jpg";
import floor8 from "../../../../../../src/assets/images/floor/8.jpg";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Floor = () => {
    const floor = [
        { id: 1, image: floor1, title: 'Assure Murshed Heights Ground Floor Plan' },
        { id: 2, image: floor2, title: 'FAssure Murshed Heights Rooftop Plan' },
        { id: 3, image: floor3, title: 'Assure Murshed Heights Floor Plan Type-A' },
        { id: 4, image: floor4, title: 'Assure Murshed Heights 1st Floor Plan' },
        { id: 5, image: floor5, title: 'Assure Murshed Heights Axonometric View Type-A' },
        { id: 6, image: floor6, title: 'Assure Murshed Heights Axonometric View Type-B' },
        { id: 7, image: floor7, title: 'Assure Murshed Heights Floor Plan Type-B' },
        { id: 8, image: floor8, title: 'Assure Murshed Heights Typical Floor Plan Plan Option 01' }
      ];
      

  return (
    <div>
     <div className="mb-10">
     <h4 className="text-center text-[#135F4A]">Assure Group</h4>
      <h2 className="uppercase text-center">
        Assure Murshed Heights Floor Plan
      </h2>
     </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center">
        {floor.map((data) => (
          <div key={data.id}>
            <Image src={data.image} alt="" className="w-full" />
            <p className="bg-[#135F4A] text-white p-3 text-center">{data.title}</p>
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

export default Floor;
