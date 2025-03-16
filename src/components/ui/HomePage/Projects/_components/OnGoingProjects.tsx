import React from "react";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TProject } from "@/types/project";

const OnGoingProjects: React.FC<{ projectData: TProject[] }> = ({
  projectData,
}) => {
  return (
    <>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 rounded-md">
          {projectData?.map((data: TProject) => (
            <div key={data._id} className="relative group w-[330px] rounded-md">
              <div className="flex justify-end px-4">
                <h5 className="absolute bg-black bg-opacity-60 border border-gray-300 p-1 px-4 rounded-full mt-3 text-white">
                {data.project_offer ? data.project_offer : 'No Offer'}
                </h5>
              </div>
              {data?.conceptImages && data?.conceptImages.length > 0 && (
                <>
                  <Image
                   width={400}
                   height={500}
                    src={data.conceptImages[0]}
                    alt={data.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </>
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent rounded-md"></div>

              {/* Content */}
              <div className="absolute lg:top-[350px] md:top-96 top-80 px-4">
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
        <div className="flex justify-end mt-5">
          <Link href="/projects">
            <button className="bg-[#135F4A] px-4 py-2 text-white uppercase text-sm">
              See All <EastIcon />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OnGoingProjects;
