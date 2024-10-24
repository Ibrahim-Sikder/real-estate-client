/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/components/share/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import ProjectsBanner from "./ProjectsBanner";
import Affiliation from "@/components/Affiliation/Affiliation";
import Header from "@/components/share/Header/Header";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/share/Loader/Loader";
export type TProject = {
  _id: string;
  title: string;
  location: string;
  floorImages?: string[];
};

export type ProjectResponse = {
  data: {
    projects: TProject[];
  };
};

const ProjectPage = () => {
  const [visibleProjects, setVisibleProjects] = useState<number>(5);
  const [projectData, setProjectData] = useState<ProjectResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProjectData = async () => {
      const query = Object.fromEntries(searchParams.entries());

      const queryString = new URLSearchParams(query).toString();
      const decodedQueryString = queryString.replace(/\+/g, ' ');

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/project?${queryString}`,
          {
            cache: "no-store",
          }
        );
        const data: ProjectResponse = await response.json();
        setProjectData(data);
      } catch (err: any) {
        setError("Failed to fetch project data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [searchParams]);

  if (loading) {
    <Loader />;
  }

  if (error) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl">
        {error}
      </h1>
    );
  }

  if (!projectData) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl">
        Oops! Project data not found!
      </h1>
    );
  }

  const handleLoadMore = () => {
    setVisibleProjects((prevCount) => prevCount + 5);
  };

  return (
    <div>
         <Header/>
      <ProjectsBanner />
      <Container>
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {projectData?.data?.projects
              ?.slice(0, visibleProjects)
              .map((data: TProject) => (
                <div key={data._id} className="relative group">
                  {data?.floorImages?.slice(0, 1).map((floor) => (
                    <Image
                      key={floor}
                      width={500}
                      height={500}
                      src={floor}
                      alt={data.title}
                      className="w-full h-full object-cover"
                    />
                  ))}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent"></div>

                  {/* Content */}
                  <div className="absolute lg:top-80 md:top-96 top-80 left-10">
                    <h3 className="text-white text-lg font-semibold">
                      {data.title}
                    </h3>
                    <p className="text-white text-sm">{data.location}</p>
                  </div>

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
          {visibleProjects < projectData?.data?.projects?.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-[#135F4A] px-6 py-2 text-white"
              >
                Load More
              </button>
            </div>
          )}
        </div>
        <Affiliation />
      </Container>
    </div>
  );
};

export default ProjectPage;
