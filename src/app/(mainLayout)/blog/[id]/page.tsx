import React from "react";
import type { Metadata } from "next";
import BlogDetailsPage from "../_components/BlogDetailsPage";


const page = () => {
  return (
    <>
      <BlogDetailsPage/>
    </>
  );
};

export default page;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseApi = process.env.NEXT_PUBLIC_BASE_API_URL;
  const id = (await params).id;
  const res = await fetch(`${baseApi}/blogs/${id}`);
  const data = await res.json();
  const finalData = data.data;
  return {
    title: `Softypy | ${finalData?.title}`,
    description: finalData?.description,
    openGraph: {
      images: [
        {
          url: finalData?.thumbnail,
          width: 800,
          height: 600,
          alt: finalData?.title,
        },
      ],
    },
  };
}
