import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";

type BlogProps = {
  recentPost: {
    blogs: TBlog[];
  };
};
const RecentPost = ({ recentPost }: BlogProps) => {
  return (
    <div className="bg-gray-100 p-10 sticky top-28">
      <h1 className="text-xl font-semibold mb-5">Recent Post</h1>
      <div className="grid grid-cols-1 gap-3">
        {recentPost?.blogs?.map((post: TBlog) => (
          <div key={post?._id} className="flex items-center gap-3 border-b pb-3">


            {
              post.thumbnail.slice(0, 1).map((img) => (
                <Image
                  key={img}
                  src={img}
                  alt="Thumbnail"
                  height={64}
                  width={64}

                  className="w-20 h-16 rounded-md"
                />
              ))
            }
            <div>
              <Link href={`/blog/${post?.slug}`}>
                <h2
                  className="text-sm font-semibold text-gray-500
                hover:text-[#135F4A] cursor-pointer transition-colors duration-300 ease-in-out hover:underline
                "
                >
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-400 text-xs">
                {
                  new Date(post?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) // Jun 1, 2021
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
