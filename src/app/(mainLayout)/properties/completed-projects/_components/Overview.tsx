import React from "react";
import Container from "@/components/share/Container";
import image from "../../../../../../src/assets/images/properties/p1.jpg";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Overview = () => {
  return (
    <>
      <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-0 mt-10">
        <div className="bg-white shadow-lg p-3">
          <div className="mb-4">
            <h4 className="font-semibold">Project Type:</h4>
            <p>Residential</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Project Address:</h4>
            <p>Plot 5/A | Road 68 | North Gulshan, Dhaka</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Land Area:</h4>
            <p>9.65 Katha</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Storied:</h4>
            <p>B1 + B2 + G + 09 Storied</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Apartment Size:</h4>
            <ul className="space-y-1">
              <li className="flex items-center">
                <CheckCircleIcon className="text-[#135F4A] mr-2" /> Type-A: 2223
                Sq. Ft.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="text-[#135F4A] mr-2" /> Type-B: 2375
                Sq. Ft.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Apartment Contains:</h4>
            <ul className="space-y-1">
              {[
                "3 Beds",
                "3 Baths",
                "3 Verandas",
                "2 Car Parking",
                "Dining Area",
                "Living Area",
                "Family Living Area",
                "Kitchen with Veranda",
                "Maid’s Living & Toilet",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon className="text-[#135F4A] mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Special Amenities:</h4>
            <ul className="space-y-1">
              {[
                "Gym",
                "Pool",
                "Guest Waiting Room",
                "Community Area",
                "Prayer Room",
                "Library",
                "Senior Citizen’s Leisure Area",
                "Snooker Space",
                "Rooftop Sitting Area",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon className="text-[#135F4A] mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Common Features:</h4>
            <ul className="space-y-1">
              {[
                "Garden Space",
                "Guard Post",
                "Generator Room",
                "Substation",
                "Caretaker Accommodation",
                "Plantation",
                "Cloth Drying Area",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon className="text-[#135F4A] mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Home Loan Partner:</h4>
            <ul className="space-y-1">
              {[
                "Standard Chartered Bank",
                "DBH",
                "Dhaka Bank",
                "IPDC",
                "City Bank Limited",
                "Mutual Trust Bank Limited",
                "BRAC Bank Limited",
                "Community Bank Bangladesh Limited",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon className="text-[#135F4A] mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <Image src={image} alt="Property Image 1" />
          <Image src={image} alt="Property Image 2" />
          <Image src={image} alt="Property Image 3" />
        </div>
      </div>
    </>
  );
};

export default Overview;
