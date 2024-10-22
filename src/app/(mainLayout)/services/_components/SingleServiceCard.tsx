/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Image from "next/image";

import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import { TProject } from "@/types/project";




const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);

    return parsedContent.map((element, index) => {
        if (element.type === "h1") {
            return (
                <h1 key={index} className="text-2xl font-bold mb-2 ">
                    {element.props.children}
                </h1>
            );
        } else if (element.type === "h2") {
            return (
                <h2 key={index} className="text-xl font-bold mb-2 ">
                    {element.props.children}
                </h2>
            );
        } else if (element.type === "h3") {
            return (
                <h3 key={index} className="text-xl font-bold mb-2 ">
                    {element.props.children}
                </h3>
            );
        } else if (element.type === "p") {
            return (
                <p key={index} className="mb-2">
                    {element.props.children}
                </p>
            );
        }


        else if (
            element.type === "div" &&
            element.props.className === "ql-align-center"
        ) {
            return (
                <div key={index} className="text-center mb-2">
                    {element.props.children}
                </div>
            );
        } else if (
            element.type === "div" &&
            element.props.className === "ql-align-right"
        ) {
            return (
                <div key={index} className="text-right mb-2">
                    {element.props.children}
                </div>
            );
        } else if (
            element.type === "div" &&
            element.props.className === "ql-align-left"
        ) {
            return (
                <div key={index} className="text-left mb-2">
                    {element.props.children}
                </div>
            );
        } else {
            return null;
        }
    });
};

const SingleServiceCard = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/project`, {
        cache: "no-store",
    });
    const projectData = await response.json()


    if (!projectData) {
        return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Review data not found! </h1>

    }
    console.dir(projectData)


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    projectData?.data?.projects.slice(0, 3).map((project: TProject, i: number) => (
                        <div key={i}>

                            <Link href={`/projects/${project._id}`}>
                                <div className="text-center">
                                    {
                                        project?.floorImages?.slice(0, 1).map((floorImg) => (
                                            <>
                                                <Image width={500} height={300} src={floorImg} alt="Project 1" className="rounded shadow-lg" />
                                            </>
                                        ))
                                    }
                                    <h3 className="text-lg font-semibold mt-4">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>
                        </div>


                    ))
                }
            </div>
        </>
    );
};

export default SingleServiceCard;
