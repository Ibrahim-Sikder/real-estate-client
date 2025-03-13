import React from "react";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useProjectData } from "@/hooks/useProjectData";
import Loader from "../share/Loader/Loader";

const Common = () => {
  const { projectDate, loading, error } = useProjectData()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);


  if (loading) {
    return <Loader/>
  }
  if (error) {
    return <p>Do not project found!</p>
  }

  return (
    <>
      <div className="my-20" data-aos="fade-up-left">
        <h2 className="uppercase text-center mb-7 text-[#135F4A]">
          Ready Flat & Apartment Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectDate?.map((data) => (
            <div key={data._id} className="relative group">

              {data?.floorImages?.slice(0, 1).map((floor) => (
                <Image
                  key={floor}
                  width={400}
                  height={500}
                  src={floor}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              ))}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent"></div>

              {/* Content */}
              <div className="absolute lg:top-[370px] md:top-96 top-80 left-10">
                <h3 className="text-white text-lg font-semibold">
                  {data.title}
                </h3>
                <p className="text-white text-sm">{data.location}</p>
              </div>

              {/* Button with background color */}
              <Link
                href={`/projects/${data._id}`}
                className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <button className="text-white bg-transparent group-hover:bg-[rgba(0,0,0,0.7)] transition duration-300 p-2 rounded-full">
                  <EastIcon />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Common;
