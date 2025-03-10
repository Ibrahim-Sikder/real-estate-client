/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "@/components/share/Container";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import ProjectsBanner from "./ProjectsBanner";
import Affiliation from "@/components/Affiliation/Affiliation";
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
    return <Loader />;
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
    <>
      <Head>
        <title>Our Projects | Anaa Developers Limited</title>
        <meta
          name="description"
          content="Discover the latest real estate projects by Anaa Developers Limited. Browse through available properties for sale in prime locations."
        />
        <meta name="keywords" content="real estate, projects, Anaa Developers, property for sale" />
        <meta name="author" content="Anaa Developers Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Our Projects | Anaa Developers Limited" />
        <meta
          property="og:description"
          content="Explore our exclusive real estate projects, featuring prime locations and top-notch developments."
        />
        {/* <meta property="og:url" content="https://www.yourwebsite.com/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-projects-image.jpg" />
        <link rel="canonical" href="https://www.yourwebsite.com/projects" /> */}
      </Head>
      <div>
        <ProjectsBanner />
        <Container>
          <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">
              {projectData?.data?.projects
                ?.slice(0, visibleProjects)
                .map((data: TProject) => (
                  <div
                    key={data._id}
                    className="relative group w-[330px] rounded-md"
                  >
                    <div className="flex justify-end px-4">
                      <h5 className="absolute bg-black bg-opacity-60 border border-gray-300 p-1 px-4 rounded-full mt-3 text-white">
                        For Sale
                      </h5>
                    </div>
                    {data?.floorImages?.slice(0, 1).map((floor) => (
                      <Image
                        key={floor}
                        width={400}
                        height={500}
                        src={floor}
                        alt={data.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ))}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent rounded-md"></div>

                    {/* Content */}
                    <div className="absolute lg:top-[350px] md:top-96 top-80 px-4 rounded-md">
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
    </>
  );
};

export default ProjectPage;
