/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import parse from "html-react-parser";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useGetAllBlogsQuery, useGetBlogQuery } from "@/redux/api/blogApi";
import CopyLinkButton from "@/components/share/ShareLink/CopyLinkButton";
import BlogBanner from "./BlogBanner";
import Container from "@/components/share/Container";
import RecentPost from "./RecentPost";

const BlogDetailsPage = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetBlogQuery(id as string, {
    skip: !id,
  });
  const { data: allBlogs, isLoading: allBlogsLoading } = useGetAllBlogsQuery(
    [],
  );

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (isLoading || allBlogsLoading) {
    return (
      <Container>
        <div className="space-y-8 mt-20">
          {/* Skeleton for image */}
          <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-xl" />

          {/* Skeleton for blog content */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="h-8 bg-gray-300 animate-pulse mb-4 rounded w-3/4" />
            <div className="flex gap-4 mb-6">
              <div className="h-6 w-20 bg-gray-300 animate-pulse rounded" />
              <div className="h-6 w-20 bg-gray-300 animate-pulse rounded" />
            </div>
            <div className="h-6 bg-gray-300 animate-pulse mb-6 rounded w-2/4" />
            <div className="h-4 bg-gray-300 animate-pulse rounded w-full" />
          </div>
        </div>
      </Container>
    );
  }

  if (!data && !allBlogsLoading) {
    return (
      <Container>
        <h1 className="text-center text-3xl font-bold mt-20 text-gray-600">
          Blog Not Found
        </h1>
      </Container>
    );
  }

  const blogDetails = data || {};
  const allBlogsData = allBlogs || [];


  return (
    <>
      <BlogBanner title="Blog Details" />
      <Container>
        <div className="lg:flex gap-10 my-20">
          <div className="lg:w-[800px]">
            {
              blogDetails?.thumbnail?.slice(0, 1)?.map((img:any) => (
                <Image
                  src={img}
                  key={img}
                  alt="singleblog"
                  width={1200}
                  height={600}
                  className="w-full  rounded "
                  style={{
                    aspectRatio: "16/9",
                  }}
                />
              ))
            }
            <div className="bg-gray-50 py-8 px-4 rounded  ">
              <h1 className="lg:text-4xl text-3xl font-semibold text-gray-900 mb-4">
                {blogDetails.title}
              </h1>
              <div className="flex items-center text-gray-500 text-sm mb-6 gap-4">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-lg text-blue-500" />
                  {new Date(blogDetails?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="text-gray-600">
                <p className="text-justify text-lg">
                  {blogDetails?.description}
                </p>
              </div>
              <hr className="my-3" />

              <div className="text-lg leading-relaxed">
                {parse(blogDetails?.content || "")}
              </div>

              <div className="mt-10">
                <div className="flex gap-6 items-center">
                  <div className="flex gap-4 flex-wrap">
                    <span className="text-gray-500 hidden md:block">Tags:</span>
                    {blogDetails?.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-sky-800 px-2 text-white py-1 text-xs md:text-sm rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-6  pb-4 flex-wrap">
                  <FacebookShareButton url={shareUrl}>
                    <FacebookIcon
                      size={32}
                      round
                      className="hover:opacity-80 transition-opacity"
                    />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl}>
                    <TwitterIcon
                      size={32}
                      round
                      className="hover:opacity-80 transition-opacity"
                    />
                  </TwitterShareButton>
                  <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon
                      size={32}
                      round
                      className="hover:opacity-80 transition-opacity"
                    />
                  </LinkedinShareButton>
                  <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon
                      size={32}
                      round
                      className="hover:opacity-80 transition-opacity"
                    />
                  </WhatsappShareButton>
                  <TelegramShareButton url={shareUrl}>
                    <TelegramIcon
                      size={32}
                      round
                      className="hover:opacity-80 transition-opacity"
                    />
                  </TelegramShareButton>

                  {/* Copy url button */}
                  <CopyLinkButton
                    shareUrl={shareUrl}
                    buttonText="Copy Share URL"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[400px] space-y-10">
            <RecentPost recentPost={allBlogsData} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogDetailsPage;
