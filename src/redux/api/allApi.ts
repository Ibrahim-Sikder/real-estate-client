import { baseApi } from "./baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        data,
      }),
      invalidatesTags: ["team"],
    }),
    appointment: builder.mutation({
      query: (data) => ({
        url: "/appointment",
        method: "POST",
        data,
      }),
      invalidatesTags: ["team"],
    }),


  }),
});


export const {
    useContactMutation,
    useAppointmentMutation
} = contactApi;
