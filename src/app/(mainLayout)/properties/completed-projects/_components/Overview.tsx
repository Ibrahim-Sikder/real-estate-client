import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PropertyGallery from "./PropertyGallery";

const Overview = () => {
  return (
    <>
      <div className="lg:w-[1000px] lg:mt-0 mt-10">
        <div className="space-y-5">
          <h2 className="uppercase text-[#135F4A]">
            Assure Murshed Heights Overview
          </h2>
          <p className="text-justify">
            Gulshan is one of the best residential areas in the heart of the
            capital Dhaka. Assure Murshed Heights, is a lucrative residential
            property for sale in North Gulshan, Dhaka. This property is
            definately the best place for you to live.
          </p>
          <h2 className="uppercase text-[#135F4A]">
            A Lucrative Residential Property in Gulshan
          </h2>
          <p className="text-justify">
            Assure Murshed Heights is a luxury residential project by Assure
            Group comprising spacious 3 BHK apartments conveniently located at
            North Gulshan, Dhaka. With every detail planned keeping you in mind,
            this development encapsulates contemporary aesthetics and indulgent
            amenities and fulfills the promise of an elevated lifestyle.
          </p>
          <p className="text-justify">
            The City Dhaka is expanding day by day. Gulshan is one of the areas
            located in Dhaka where all kinds of universal civic facilities are
            available easily. Here is our “Assure Murshed Heights ” project
            overview in details:
          </p>
        </div>

        <div className="mt-10">
          <PropertyGallery />
        </div>
      </div>
      <div className="bg-white shadow-lg p-5 border mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="mb-4">
            <h4 className="font-semibold">Project Type:</h4>
            <p>Residential</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Project Address:</h4>
            <p>North Gulshan, Dhaka</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Land Area:</h4>
            <p>9.65 Katha</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Storied:</h4>
            <p>B1 + B2 + G + 09 Storied</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="mb-4">
            <h4 className="font-semibold">Apartment Contains:</h4>
            <ul className="space-y-2 mt-2">
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> 3 Beds
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> 3 Baths
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> 3 Verandas
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Dining
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Living
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Family Living
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Special Amenities:</h4>
            <ul className="space-y-2 mt-2">
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Gym
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Pool
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Guest Waiting
                Room
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Community Area
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Prayer Room
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" />
                Library
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Common Features:</h4>
            <ul className="space-y-2 mt-2">
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Garden Space
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Guard Post
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Generator Room
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Substation
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Plantation
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Cloth Drying Area
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Home Loan Partner:</h4>
            <ul className="space-y-2 mt-2">
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> DBH
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Dhaka Bank
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> IPDC
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> City Bank Limited
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> Mutual Trust Bank
              </li>
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> BRAC Bank Limited
              </li>
            </ul>
          </div>
        </div>
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
    </>
  );
};

export default Overview;
