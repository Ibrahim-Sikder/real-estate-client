import { TQueryParam } from "@/types";
import { baseApi } from "../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: (args: TQueryParam[]) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/blogs/all",
          method: "GET",
          params: params,
        };
      },
    }),

    // query: (slug: string) => `/blog/${slug}`,
    getBlog: builder.query({
      query: (slug) => ({
        url: `/blogs/${slug}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetAllBlogsQuery, useGetBlogQuery } = blogApi;
