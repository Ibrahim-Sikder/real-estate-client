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

    // getBlog: builder.query({
    //   query: (id: string) => `/blogs/${id}`, 
    //   providesTags: (_result, _error, id) => [{ type: 'Blog', id }],
    // }),
    getBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetAllBlogsQuery, useGetBlogQuery } = blogApi;
