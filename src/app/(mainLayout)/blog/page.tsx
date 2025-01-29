"use client";

import { TBlog, TQueryParam } from "@/types";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import icon from "../../../../src/assets/icon/title_shape.svg";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import BlogBanner from "./_components/BlogBanner";
import Container from "@/components/share/Container";

type Blog = {
    _id: string;
    title: string;
    thumbnail: string;
    description: string;
    createdAt: string;
    slug: string;
};

const BlogSkeleton = () => (
    <div className="bg-white shadow-md border rounded-lg overflow-hidden animate-pulse">
        <div className="w-full h-48 bg-gray-300" />
        <div className="p-6">
            <div className="h-4 bg-gray-300 w-1/2 mb-2" />
            <div className="h-4 bg-gray-300 w-1/4 mb-4" />
            <div className="h-16 bg-gray-300 mb-5" />
            <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-300 w-1/4" />
                <div className="h-4 bg-gray-300 w-1/6" />
            </div>
        </div>
    </div>
);

const Blog = () => {
    const [params, setParams] = useState<TQueryParam[]>([
        { name: "page", value: "1" },
        { name: "limit", value: "6" },
    ]);
    const { data, isLoading } = useGetAllBlogsQuery(params);
    const blogs = data?.blogs || [];
    const meta = data?.meta;



    return (
        <>
            <BlogBanner title="Blog" />
            <Container>
                <div className="text-center mt-20 mb-10 relative z-20">
                    <div className="flex gap-3 justify-center items-center">
                        <Image src={icon} alt="icon" />
                        <h3 className="font-semibold text-[#135F4A] uppercase">
                            Our All Blogs
                        </h3>
                    </div>
                    <h2 className="text-4xl font-bold mt-3">
                        Get Every Single Update
                        <span className="text-[#135F4A]"> Blog</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, index) => (
                            <BlogSkeleton key={index} />
                        ))
                        : blogs.map((blog: TBlog) => (
                            <div
                                key={blog._id}
                                className="bg-white shadow border rounded overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                {
                                    blog.thumbnail.slice(0, 1).map((img) => (
                                        <Image
                                            alt="flat"
                                            key={img}
                                            src={img}
                                            width={500}
                                            height={300}
                                            className="w-full  object-cover"
                                        />
                                    ))
                                }
                                <div className="p-6">
                                    <div className="flex items-center text-gray-500 text-sm mb-3">
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt className="text-lg" />
                                            {
                                                new Date(blog.createdAt).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                }) // Jun 1, 2021
                                            }
                                        </span>
                                        {/* <span className="mx-2">|</span> */}
                                        {/* <span className="flex items-center gap-1">
                        <FaRegComments className="text-lg" />0 Comments
                      </span> */}
                                    </div>
                                    <Link href={`/blog/${blog.slug}`}>
                                        <h3
                                            className="text-xl font-semibold mb-3 hover:text-[#135F4A] cursor-pointer transition-colors duration-300 ease-in-out hover:underline
                      "
                                        >
                                            {blog.title.length > 60
                                                ? blog.title.slice(0, 60) + "..."
                                                : blog.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-600 mb-5 border-b pb-5">
                                        {blog.description.length > 150
                                            ? blog.description.slice(0, 150) + "..."
                                            : blog.description}
                                    </p>
                                    <div className="flex justify-between items-center text-sm font-semibold text-[#135F4A]">
                                        <span className="text-gray-500 flex items-center gap-1">
                                            {/* <FaRegUserCircle className="text-xl" />
                        Admin */}
                                        </span>
                                        <Link href={`/blog/${blog.slug}`}>
                                            <button className="text-[#135F4A] text-sm font-semibold uppercase flex items-center gap-2 hover:underline">
                                                Read More <FaArrowRightLong />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {meta && (
                    <div className="flex justify-center mb-20">
                        <Stack spacing={2}>
                            <Pagination
                                color="primary"
                                count={meta.totalPage}
                                page={parseInt(meta.currentPage)}
                                onChange={(_, page) => {
                                    setParams([
                                        ...params.filter((item) => item.name !== "page"),
                                        { name: "page", value: page.toString() },
                                    ]);
                                }}
                                renderItem={(item) => (
                                    <PaginationItem
                                        slots={{
                                            previous: ArrowCircleLeft,
                                            next: ArrowCircleRight,
                                        }}
                                        {...item}
                                    />
                                )}
                            />
                        </Stack>
                    </div>
                )}
            </Container>
        </>
    );
};

export default Blog;
